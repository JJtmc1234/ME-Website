import type { Metadata } from "next";
import { Container, PageHeader, Section } from "@/components/primitives";
import { BranchCard } from "@/components/cards";
import { branches } from "@/data/research";
import { firstSystem, focus, realities } from "@/data/energy";

export const metadata: Metadata = {
  title: "Research",
  description:
    "ME research branches: computing and AI, energy, space and satellites, robotics, manufacturing, materials, medicine and biotech, transportation, and frontier research.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Nine branches, kept broad on purpose."
        lead="ME planning stays wide until a branch genuinely needs deeper design. That keeps the map useful without pretending every subsystem has a five year plan today."
      />

      <Section>
        <ul className="grid gap-5 lg:grid-cols-2">
          {branches.map((branch) => (
            <li key={branch.slug} id={branch.slug} className="scroll-mt-24">
              <BranchCard branch={branch} />
            </li>
          ))}
        </ul>
      </Section>

      <Section
        title="Energy, in more detail"
        description={focus}
      >
        <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr]">
          <div className="panel p-6">
            <h3 className="text-base font-medium">What real distribution has to deal with</h3>
            <ul className="mt-4 divide-y divide-line border-t border-line">
              {realities.map((item) => (
                <li key={item.name} className="py-2.5">
                  <span className="text-sm text-text">{item.name}. </span>
                  <span className="text-sm leading-relaxed text-muted">{item.body}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel p-6">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-base font-medium">{firstSystem.name}</h3>
              <span className="font-mono text-[0.625rem] uppercase tracking-widest text-status-concept">
                {firstSystem.status}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{firstSystem.body}</p>
            <p className="label mt-5">Open questions</p>
            <ul className="mt-2 space-y-2">
              {firstSystem.questions.map((question) => (
                <li key={question} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-line-strong" />
                  {question}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-line pt-4 text-sm leading-relaxed text-faint">
              {firstSystem.caution}
            </p>
          </div>
        </div>
      </Section>

      <Container>
        <aside className="panel-quiet mb-8 p-6">
          <h2 className="text-base font-medium">How branches get chosen</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            A branch moves from in scope to active when ME has the knowledge to make real
            progress and another project is blocked without it. Computing and AI is first
            because it is where the existing knowledge base is strongest and because ME OS,
            Carl, and the research tools all depend on it.
          </p>
        </aside>
      </Container>
    </>
  );
}
