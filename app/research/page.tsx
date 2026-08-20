import type { Metadata } from "next";
import { Container, PageHeader, Section } from "@/components/primitives";
import { BranchCard } from "@/components/cards";
import { branches } from "@/data/research";

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
