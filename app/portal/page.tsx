import { pageMeta } from "@/lib/metadata";
import { Container, PageHeader, Section } from "@/components/primitives";

const portal = "https://me-portal.jjtmc.workers.dev/";

export const metadata = pageMeta({
  title: "ME Portal",
  description: "Sign in to the ME chat room or request an account from JJ.",
  path: "/portal",
  unlisted: true,
});

export default function PortalPage() {
  return (
    <>
      <PageHeader
        eyebrow="ME Portal"
        title="Come on in."
        lead="Sign in to chat with ME. New here? Request an account and JJ can let you in."
      />
      <Section>
        <Container>
          <iframe
            src={portal}
            title="ME account sign in and shared chat"
            className="h-[75dvh] min-h-[560px] w-full rounded-lg border border-line bg-surface"
            referrerPolicy="no-referrer"
            allow="clipboard-write"
          />
          <p className="mt-4 text-sm text-muted">
            Chat is shared with approved members. If the room does not load, {" "}
            <a href={portal} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4">
              open the chat room in its own tab
            </a>.
          </p>
        </Container>
      </Section>
    </>
  );
}
