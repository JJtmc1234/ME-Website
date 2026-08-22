import type { Metadata } from "next";

import { pageMeta } from "@/lib/metadata";
import { Container, PageHeader, Section } from "@/components/primitives";
import { MilestoneLadders } from "@/components/milestones";
import { TierLegend } from "@/components/tiers";
import { RunwayPanel } from "@/components/runway";
import { ProjectMatrix } from "@/components/matrix";
import { MilestoneMeters } from "@/components/meter";
import { FactorioGap } from "@/components/gap";
import { SharedStack } from "@/components/stack";
import { site } from "@/data/site";

export const metadata: Metadata = pageMeta({
  title: "Roadmap",
  description:
    "What ME is building now, what is planned next, and what is only a direction. Four status tiers, a milestone ladder, and the runway to a target of around 2035.",
  path: "/roadmap",
});

const meterNotes = {
  "ME OS": "QEMU only. Never on physical hardware.",
  Holoprojector: "Simulator only. No projector.",
};

export default function RoadmapPage() {
  return (
    <>
      <PageHeader
        eyebrow="Roadmap"
        title={site.principle}
        lead="A wide map is cheap. Doing everything at once is not."
      />

      <Section>
        <RunwayPanel />
      </Section>

      <Section title="What the labels mean">
        <TierLegend />
      </Section>

      <Section title="Each project">
        <ProjectMatrix />
        <div className="mt-8">
          <MilestoneMeters notes={meterNotes} />
        </div>
      </Section>

      <Section title="Why the map is wide">
        <SharedStack />
      </Section>

      <Section
        title="Milestones"
        description="Complete means it runs and a check says so."
      >
        <MilestoneLadders />
      </Section>

      <Section title="Proof point">
        <FactorioGap />
      </Section>

      <Container>
        <p className="mb-8 text-xs text-faint">
          Selected milestones only. This site reads from no ME system.
        </p>
      </Container>
    </>
  );
}
