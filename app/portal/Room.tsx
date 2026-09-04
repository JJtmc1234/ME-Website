"use client";

/**
 * The room. A password gate, then a log and a box.
 *
 * A client component because the whole page is a conversation, and the site is
 * a static export so none of it can be rendered on a server anyway. Nothing
 * about the room is baked into the HTML: an unauthenticated visitor downloads a
 * page that knows nothing, and every message arrives from the Worker after a
 * password has been checked there.
 */

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

import { MOST_CHARS, POLL_MS } from "./config";
import {
  Message,
  forget,
  messages,
  say,
  serverSession,
  sessionSnapshot,
  signIn,
  signedOut,
  subscribeSession,
} from "./api";

/** Agents render differently from people, so nobody has to guess which is which. */
const AGENTS = new Set(["Carl"]);

export function Room() {
  const [log, setLog] = useState<Message[]>([]);
  const [error, setError] = useState<string>("");

  // Read from the store rather than copied into state by an effect. The
  // prerender has no localStorage and says nobody is signed in, the browser says
  // who actually is, and React reconciles the two itself. Signing in and leaving
  // both write to storage, so this is the only place the answer lives.
  const session = useSyncExternalStore(subscribeSession, sessionSnapshot, serverSession);
  const who = session?.who ?? null;
  const token = session?.token ?? null;

  const leave = useCallback(() => {
    forget();
    setLog([]);
  }, []);

  if (!who || !token) {
    return <Gate onIn={() => setError("")} />;
  }
  return (
    <Log
      who={who}
      token={token}
      log={log}
      setLog={setLog}
      error={error}
      setError={setError}
      onLeave={leave}
    />
  );
}

function Gate({ onIn }: { onIn: () => void }) {
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function enter(e: React.FormEvent) {
    e.preventDefault();
    if (busy || !password) return;
    setBusy(true);
    setError("");
    try {
      // signIn stores the session and tells the store, so the room re opens on
      // its own. Nothing is passed up: a second copy of who you are is a second
      // thing that can be wrong.
      await signIn(password);
      onIn();
    } catch (err) {
      setError(err instanceof Error ? err.message : "that did not work");
      setBusy(false);
    }
  }

  return (
    <div className="panel mx-auto max-w-md p-6">
      <h2 className="text-base font-medium">Enter</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Your password is also who you are. There is no name to choose, so a message from
        Hunter is from Hunter.
      </p>
      <form onSubmit={enter} className="mt-5 flex flex-col gap-3">
        <label htmlFor="pw" className="sr-only">
          Password
        </label>
        <input
          id="pw"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className="border border-line bg-bg px-3 py-2 font-mono text-sm outline-none focus-visible:border-accent"
        />
        <p aria-live="polite" className="min-h-5 text-xs text-red-400">
          {error}
        </p>
        <button
          type="submit"
          disabled={busy || !password}
          className="border border-accent/50 bg-accent/10 px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent/15 disabled:opacity-40"
        >
          {busy ? "Checking" : "Enter"}
        </button>
      </form>
      <p className="mt-6 border-t border-line pt-4 font-mono text-xs text-faint">
        Four people. JJ, Hunter, Carl, Atlas.
      </p>
    </div>
  );
}

function Log({
  who,
  token,
  log,
  setLog,
  error,
  setError,
  onLeave,
}: {
  who: string;
  token: string;
  log: Message[];
  setLog: (f: (was: Message[]) => Message[]) => void;
  error: string;
  setError: (s: string) => void;
  onLeave: () => void;
}) {
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const foot = useRef<HTMLDivElement>(null);
  // The highest id seen, so a poll asks for what is new rather than for
  // everything. Held in a ref because the poll closes over it.
  const seen = useRef(0);

  useEffect(() => {
    let alive = true;

    async function pull() {
      try {
        const got = await messages(token, seen.current);
        if (!alive || got.length === 0) return;
        seen.current = Math.max(seen.current, ...got.map((m) => m.id));
        setLog((was) => {
          const known = new Set(was.map((m) => m.id));
          return [...was, ...got.filter((m) => !known.has(m.id))];
        });
      } catch (e) {
        if (!alive) return;
        // A session that has run out is not an error to report, it is a reason
        // to ask for the password again.
        if (signedOut(e)) {
          onLeave();
          return;
        }
        setError(e instanceof Error ? e.message : "the portal stopped answering");
      }
    }

    void pull();
    const timer = setInterval(pull, POLL_MS);
    return () => {
      alive = false;
      clearInterval(timer);
    };
  }, [token, setLog, setError, onLeave]);

  useEffect(() => {
    foot.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [log.length]);

  async function send() {
    const text = draft.trim();
    if (!text || sending) return;
    setSending(true);
    setError("");
    try {
      const wrote = await say(token, text);
      seen.current = Math.max(seen.current, wrote.id);
      setLog((was) => (was.some((m) => m.id === wrote.id) ? was : [...was, wrote]));
      setDraft("");
    } catch (e) {
      if (signedOut(e)) {
        onLeave();
        return;
      }
      // The draft is kept. Losing what somebody typed because the network
      // blinked is worse than the network blinking.
      setError(e instanceof Error ? e.message : "that did not send");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-baseline gap-3 border-b border-line pb-3">
        <span className="font-mono text-xs text-accent">{who}</span>
        <span className="flex-1" />
        <span className="font-mono text-xs tabular-nums text-faint">
          {log.length} message{log.length === 1 ? "" : "s"}
        </span>
        <button
          type="button"
          onClick={onLeave}
          className="font-mono text-xs text-muted transition-colors hover:text-accent"
        >
          sign out
        </button>
      </div>

      <div className="flex flex-col gap-5">
        {log.length === 0 ? (
          <p className="py-8 text-sm text-faint">Nobody has said anything yet.</p>
        ) : (
          log.map((m) => <Said key={m.id} message={m} mine={m.author === who} />)
        )}
        <div ref={foot} />
      </div>

      <div className="sticky bottom-0 flex flex-col gap-2 border-t border-line bg-bg/95 pb-4 pt-3 backdrop-blur">
        <label htmlFor="say" className="sr-only">
          Say something
        </label>
        <textarea
          id="say"
          value={draft}
          maxLength={MOST_CHARS}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              void send();
            }
          }}
          placeholder={`Say something as ${who}`}
          rows={2}
          className="w-full resize-y border border-line bg-surface px-3 py-2 text-sm outline-none focus-visible:border-accent"
        />
        <div className="flex items-center gap-3">
          <span aria-live="polite" className="flex-1 font-mono text-xs text-faint">
            {error || "Enter to send, Shift and Enter for a new line"}
          </span>
          <button
            type="button"
            onClick={() => void send()}
            disabled={sending || !draft.trim()}
            className="border border-accent/50 bg-accent/10 px-5 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/15 disabled:opacity-40"
          >
            {sending ? "Sending" : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}

function Said({ message, mine }: { message: Message; mine: boolean }) {
  const agent = AGENTS.has(message.author);
  return (
    <article className="flex flex-col gap-1">
      <div className="flex items-baseline gap-2">
        <span
          className={`text-sm font-medium text-accent ${agent ? "font-mono text-xs" : ""}`}
        >
          {message.author}
        </span>
        <time className="font-mono text-xs tabular-nums text-faint">{clock(message.at)}</time>
      </div>
      <p
        className={`whitespace-pre-wrap break-words border border-line bg-surface px-3 py-2 text-sm leading-relaxed ${
          mine ? "border-l-2 border-l-accent" : ""
        } ${agent ? "border-l-2 border-l-line border-dashed" : ""}`}
      >
        {message.body}
      </p>
    </article>
  );
}

function clock(at: number): string {
  const d = new Date(at * 1000);
  return `${d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}  ${d.toLocaleDateString([], { day: "numeric", month: "short" })}`;
}
