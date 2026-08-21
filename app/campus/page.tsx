import type { Metadata } from "next";

import { pageMeta } from "@/lib/metadata";
import { Container, PageHeader, Section } from "@/components/primitives";
import { bikes, disclaimer, separateBuildings, shape, zones } from "@/data/campus";

export const metadata: Metadata = pageMeta({
  title: "Campus concept",
  description:
    "How an ME headquarters and campus might be laid out: a central tower with research wings, separate buildings where separation helps, and borrowed campus bikes. Concept only, nothing exists.",
  path: "/campus",
});

export default function CampusPage() {
  return (
    <>
      <PageHeader
        eyebrow="Campus concept"
        title={shape.title}
        lead={shape.body}
      />

      <Container>
        <aside className="panel-quiet mt-10 p-6">
          <p className="label">Status</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            <span className="text-text">Concept.</span> {disclaimer}
          </p>
        </aside>
      </Container>

      <Section title="The core, from the middle outwards" description="Distance from the tower follows how often something is needed from it.">
        <ol className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
          {zones.map((zone, index) => (
            <li key={zone.name} className="bg-surface p-6">
              <span className="font-mono text-xs text-faint">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-medium">{zone.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{zone.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        title="Separate buildings"
        description="Not everything belongs in the core. These have their own reasons to stand apart."
      >
        <ul className="divide-y divide-line border-y border-line">
          {separateBuildings.map((building) => (
            <li key={building.name} className="grid gap-2 py-4 sm:grid-cols-[16rem_1fr] sm:gap-8">
              <span className="text-sm font-medium">{building.name}</span>
              <span className="text-sm leading-relaxed text-muted">{building.why}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title={bikes.title}>
        <div className="panel p-6 sm:p-8">
          <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">{bikes.body}</p>
        </div>
      </Section>
    </>
  );
}
