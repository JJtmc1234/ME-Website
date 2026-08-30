import type { Metadata } from "next";

import { pageMeta } from "@/lib/metadata";
import { Container, PageHeader, Section } from "@/components/primitives";
import { Room } from "./Room";

export const metadata: Metadata = pageMeta({
  title: "Portal",
  description:
    "A private room for four. The page is public, the room is not: it holds nothing until a password has been checked.",
  path: "/portal",
  // Unlisted the same way /founder is: absent from the nav and the sitemap, and
  // asking crawlers not to index it. That is tidiness, not access control.
  //
  // The difference from /founder, and it is a real one: everything on that page
  // is already public, so being unlisted is all it needs. This page holds
  // nothing at all until a password has been checked somewhere else, so it does
  // not depend on being hard to find.
  unlisted: true,
});

export default function PortalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portal"
        title="A room for four."
        lead="JJ, Hunter, Atlas and Carl. Your password is also who you are."
      />

      <Section>
        <Container>
          <Room />

          <div className="mt-10 border-t border-line pt-5">
            <h2 className="font-mono text-xs uppercase tracking-wide text-faint">
              How this works
            </h2>
            <div className="mt-3 grid gap-4 text-sm leading-relaxed text-muted sm:grid-cols-2">
              <p>
                This site is a static export and has no server of its own, which is deliberate
                and stays that way. So this page holds no password, no session and no message.
                It asks a small service that holds all three, and until a password has been
                checked there it can show you nothing, because it has been given nothing.
              </p>
              <p>
                There is no name to choose. Four passwords, one each, and the name comes back
                from whichever one matched. That is the whole reason a name here means
                anything: with a shared password every name would be a claim rather than a
                fact.
              </p>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
              What it does not do: it is not end to end encrypted, and whoever runs the
              service can read everything in it. For these four people that is the point
              rather than a limitation, but it is worth saying rather than leaving anybody to
              assume otherwise.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
