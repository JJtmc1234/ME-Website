import type { Metadata } from "next";
import { Container, PageHeader, Section } from "@/components/primitives";
import { MilestoneRow } from "@/components/cards";
import { executionModel, milestones } from "@/data/roadmap";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "How ME executes: a broad long term map, a small active project set, milestone gates, and shared infrastructure across products.",
};

export default function RoadmapPage() {
  return (
    <>
      <PageHeader
        eyebrow="Roadmap"
        title={site.principle}
        lead="A wide map costs almost nothing to keep. Doing many things at once costs everything. ME holds the first and refuses the second."
      />

      <Section title="How execution works">
        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
          {executionModel.map((item, index) => (
            <div key={item.title} className="bg-surface p-6">
              <span className="font-mono text-xs text-faint">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Selected current milestones"
        description="A milestone is done when it runs and can be demonstrated, not when it compiles."
      >
        <ul className="border-t border-line">
          {milestones.map((milestone) => (
            <MilestoneRow key={milestone.id} milestone={milestone} />
          ))}
        </ul>
      </Section>

      <Container>
        <aside className="panel-quiet mb-8 p-6">
          <h2 className="text-base font-medium">What is not listed</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            This page shows selected milestones only. Internal scheduling, infrastructure
            details, and unannounced work are not published here, and this site holds no
            connection to any internal system.
          </p>
        </aside>
      </Container>
    </>
  );
}
