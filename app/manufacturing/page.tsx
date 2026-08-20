import type { Metadata } from "next";
import { Container, PageHeader, Section } from "@/components/primitives";
import { holoRoom, model, proofOfConcept } from "@/data/manufacturing";

export const metadata: Metadata = {
  title: "Manufacturing",
  description:
    "ME's manufacturing direction: distributed automated production, standardized factory cells, and a first proof of concept part. Concept and planning only, nothing has been built.",
};

export default function ManufacturingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Manufacturing"
        title="Standard cells, distributed production, one simple part first."
        lead="A written plan for how ME intends to build physical things. No factory cell, conveyor, inserter or line exists. Nothing here is operating, and nothing has been produced."
      />

      <Container>
        <aside className="panel-quiet mt-10 p-6">
          <p className="label">Status</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            <span className="text-text">Concept and planning.</span> ME owns no factory,
            no cell and no production equipment. Everything below describes intended
            design, not capability.
          </p>
        </aside>
      </Container>

      <Section title="The model">
        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
          {model.map((item, index) => (
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
        title="First proof of concept"
        description="Deliberately boring, so the automation is the hard part rather than the part."
      >
        <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
          <div className="panel p-6">
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="label">Target</dt>
                <dd className="mt-1 text-muted">{proofOfConcept.target}</dd>
              </div>
              <div>
                <dt className="label">Part</dt>
                <dd className="mt-1 text-muted">{proofOfConcept.part}</dd>
              </div>
              <div>
                <dt className="label">Process</dt>
                <dd className="mt-1 text-muted">{proofOfConcept.process}</dd>
              </div>
              <div>
                <dt className="label">Why this part</dt>
                <dd className="mt-1 leading-relaxed text-muted">{proofOfConcept.why}</dd>
              </div>
            </dl>
          </div>

          <div className="panel p-6">
            <h3 className="text-base font-medium">What end to end means</h3>
            <ul className="mt-4 space-y-3">
              {proofOfConcept.steps.map((step) => (
                <li key={step} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-line-strong" />
                  {step}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-line pt-4 text-sm leading-relaxed text-muted">
              Quality control is camera and weight based. A part that fails is quarantined
              rather than thrown away, because a rejected part is the only direct evidence
              of what went wrong. When Carl detects a significant failure pattern it pauses
              the affected cell, and a person decides what happens next.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title={holoRoom.title}
        description="A far future concept that depends on hardware which does not exist."
      >
        <div className="panel p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-status-concept">
            {holoRoom.status}
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            {holoRoom.body}
          </p>

          <ol className="mt-8 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-4">
            {holoRoom.workflow.map((stage, index) => (
              <li key={stage.step} className="bg-surface-2 p-5">
                <span className="font-mono text-xs text-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-sm font-medium text-accent">{stage.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{stage.body}</p>
              </li>
            ))}
          </ol>

          <p className="mt-6 text-sm leading-relaxed text-muted">{holoRoom.later}</p>
        </div>
      </Section>
    </>
  );
}
