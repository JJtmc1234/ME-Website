import type { Metadata } from "next";

import { pageMeta } from "@/lib/metadata";
import { Container, PageHeader, Section } from "@/components/primitives";
import { BranchCard } from "@/components/cards";
import { TierLegend } from "@/components/tiers";
import { branches } from "@/data/research";
import { firstSystem, focus, realities } from "@/data/energy";

export const metadata: Metadata = pageMeta({
  title: "Research",
  description:
    "ME research branches: computing and AI, energy, space and satellites, robotics, manufacturing, materials, medicine and biotech, transportation, and frontier research.",
  path: "/research",
});

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Nine subject areas, kept broad on purpose."
        lead="Areas on a map, not staffed departments. Nobody is assigned to any of them. One has work happening in it."
      />

      <Section title="What the labels mean">
        <TierLegend />
      </Section>

      <Section>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch) => (
            <li key={branch.slug} id={branch.slug} className="scroll-mt-24">
              <BranchCard branch={branch} />
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Energy, in more detail" description={focus}>
        <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
          <div className="panel p-5 sm:p-6">
            <p className="label">What real distribution has to deal with</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {realities.map((item) => (
                <li key={item} className="border border-line px-2.5 py-1 text-xs text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="panel p-5 sm:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-sm font-medium">{firstSystem.name}</h3>
              <span className="font-mono text-[0.625rem] uppercase tracking-widest text-status-concept">
                {firstSystem.status}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{firstSystem.body}</p>
            <p className="label mt-4">Open questions</p>
            <ul className="mt-2 space-y-1.5">
              {firstSystem.questions.map((question) => (
                <li key={question} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-line-strong" />
                  {question}
                </li>
              ))}
            </ul>
            <p className="mt-4 border-t border-line pt-3 text-xs leading-relaxed text-faint">
              {firstSystem.caution}
            </p>
          </div>
        </div>
      </Section>

      <Container>
        <aside className="panel-quiet mb-8 p-5">
          <h2 className="text-sm font-medium">How branches get chosen</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            A branch goes active when ME has the knowledge and another project is blocked
            without it. Nothing has been built in the other eight, and nobody works in them.
          </p>
        </aside>
      </Container>
    </>
  );
}
