import type { Metadata } from "next";

import { pageMeta } from "@/lib/metadata";
import { Container, PageHeader, Section } from "@/components/primitives";
import { updates } from "@/data/updates";

export const metadata: Metadata = pageMeta({
  title: "Updates",
  description:
    "Project milestones, prototypes, experiments, and major design decisions at Multiverse Enterprises.",
  path: "/updates",
});

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function UpdatesPage() {
  const sorted = [...updates].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHeader
        eyebrow="Updates"
        title="Progress, posted when it works."
        lead="Entries go up when something runs, not when it is announced."
      />

      <Section>
        <ol className="border-t border-line">
          {sorted.map((update) => (
            <li
              key={`${update.date}-${update.title}`}
              className="grid gap-2 border-b border-line py-5 sm:grid-cols-[11rem_1fr] sm:gap-8"
            >
              <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-2">
                <time dateTime={update.date} className="font-mono text-xs text-faint">
                  {formatDate(update.date)}
                </time>
                <span className="border border-line px-2 py-0.5 font-mono text-[0.6875rem] text-muted">
                  {update.area}
                </span>
              </div>
              <div className="min-w-0">
                <h2 className="text-sm font-medium">{update.title}</h2>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
                  {update.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Container>
        <aside className="panel-quiet mb-8 p-5">
          <h2 className="text-sm font-medium">No feed, no tracking</h2>
          <p className="mt-2 text-sm text-muted">
            Static page. No newsletter, no analytics, nothing watching who reads it.
          </p>
        </aside>
      </Container>
    </>
  );
}
