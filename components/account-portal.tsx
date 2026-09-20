import Link from "next/link";
import { Container, PageHeader, Section } from "@/components/primitives";
export function AccountPortal({ signup = false }: { signup?: boolean }) {
  const portal = `https://me-portal.jjtmc.workers.dev/${signup ? "#signup" : ""}`;
  return <><PageHeader eyebrow="ME account" title={signup ? "Join the work." : "Welcome back."}
    lead={signup ? "Create a general ME account for Claude chat, public documents and saved projects. Portal access is a separate request." : "Sign in for Claude conversations, public documents and saved projects."} />
    <Section><Container>
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        {[["Ask ME", "Talk privately with a Claude assistant grounded in ME’s public project notes."], ["Keep your progress", "Return to your saved AI conversation and bookmark projects across devices."], ["Request portal access", "Request collaboration access. JJ or an administrator approves portal membership separately."]].map(([title, body]) =>
          <div key={title} className="panel p-5"><h2 className="text-accent">{title}</h2><p className="mt-2 text-sm text-muted">{body}</p></div>)}
      </div>
      <iframe src={portal} title={signup ? "Create your ME account" : "ME sign in and member area"}
        className="h-[75dvh] min-h-[600px] w-full rounded-lg border border-line bg-surface" referrerPolicy="no-referrer" />
      <div className="mt-4 flex flex-wrap justify-between gap-3 text-sm text-muted">
        <p>{signup ? "Already a member? " : "New to ME? "}<Link className="text-accent underline" href={signup ? "/signin" : "/signup"}>{signup ? "Sign in" : "Sign up"}</Link></p>
        <a className="text-accent underline" href={portal} target="_blank" rel="noopener noreferrer">Open member area in its own tab</a>
      </div>
      <p className="mt-4 text-xs text-muted">AI replies use Anthropic and may be wrong. AI chats are separate from shared chat, saved to your account and accessible to the site owner. Daily usage limits apply.</p>
    </Container></Section></>;
}
