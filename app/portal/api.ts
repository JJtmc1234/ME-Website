/**
 * Talking to the portal Worker, and nothing else.
 *
 * Every call is in this file so the page never builds a URL or reads a token by
 * hand. A refusal comes back as a thrown `PortalError` with a sentence a person
 * can act on, because the person reading it is the one who has to decide
 * whether to try a different password or tell JJ the room is down.
 */

import { API, TOKEN_KEY, WHO_KEY } from "./config";

export type Message = {
  id: number;
  at: number;
  author: string;
  body: string;
};

/** Something the portal said no to, in words meant for a person. */
export class PortalError extends Error {
  readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

/** Whether this refusal means the session is over rather than the request bad. */
export function signedOut(e: unknown): boolean {
  return e instanceof PortalError && e.status === 401;
}

export function readSession(): { token: string; who: string } | null {
  try {
    const token = localStorage.getItem(TOKEN_KEY);
    const who = localStorage.getItem(WHO_KEY);
    return token && who ? { token, who } : null;
  } catch {
    // A browser with storage blocked can still use the room, it just asks for
    // the password on every load. That is worse, not broken.
    return null;
  }
}

export function forget(): void {
  try {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(WHO_KEY);
  } catch {
    // Nothing to do. The session was never written, so there is none to clear.
  }
}

/**
 * Trades a password for a session.
 *
 * The name comes back from the Worker rather than being typed here. Whichever
 * stored hash matched decides who you are, so nobody in this room can post
 * under somebody else's name.
 */
export async function signIn(password: string): Promise<string> {
  const { who, token } = await call<{ who: string; token: string }>(
    "/session",
    { method: "POST", body: JSON.stringify({ password }) },
    null,
  );
  try {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(WHO_KEY, who);
  } catch {
    // The session lives for this tab only. Still usable.
  }
  return who;
}

/** Everything after `since`, or the recent ones when `since` is zero. */
export async function messages(token: string, since: number): Promise<Message[]> {
  const got = await call<{ messages: Message[] }>(
    `/messages?since=${encodeURIComponent(String(since))}`,
    { method: "GET" },
    token,
  );
  return got.messages ?? [];
}

export async function say(token: string, body: string): Promise<Message> {
  const got = await call<{ message: Message }>(
    "/messages",
    { method: "POST", body: JSON.stringify({ body }) },
    token,
  );
  return got.message;
}

async function call<T>(path: string, init: RequestInit, token: string | null): Promise<T> {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  let response: Response;
  try {
    response = await fetch(`${API}${path}`, { ...init, headers });
  } catch {
    // A network failure and a refusal are different things and a person can do
    // different things about them, so they never share a message.
    throw new PortalError(
      "The portal could not be reached. Check the connection, then tell JJ if it stays down.",
      0,
    );
  }

  const text = await response.text();
  let data: unknown = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = null;
  }

  if (!response.ok) {
    const said =
      data && typeof data === "object" && "error" in data
        ? String((data as { error: unknown }).error)
        : `the portal answered ${response.status}`;
    throw new PortalError(said, response.status);
  }
  return data as T;
}
