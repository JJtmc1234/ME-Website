import type { Metadata } from "next";

import { pageMeta } from "@/lib/metadata";
import { Container, PageHeader, Section } from "@/components/primitives";
import { alerts, breaks, cameraPolicy, handoffLog, incidentHandling,
         shiftModel } from "@/data/operations";

export const metadata: Metadata = pageMeta({
  title: "Operations",
  description:
    "How ME intends to run critical functions: continuous staffing, mandatory paid breaks, structured handoffs, and alerts that go to the people who can act.",
  path: "/operations",
});

export default function OperationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Operations"
        title="How ME intends to run things that must not stop."
        lead="Philosophy, not a schedule. ME operates nothing around the clock today. This page holds no staffing data, no rota, no incident record and no live system state, and it never will."
      />

      <Section title="Running continuously">
        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
          {shiftModel.map((item) => (
            <div key={item.title} className="bg-surface p-6">
              <h3 className="text-base font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Breaks" description={breaks.principle}>
        <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
          <div className="panel p-6">
            <ul className="space-y-3">
              {breaks.detail.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-line-strong" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="panel-quiet p-6">
            <p className="label">Why</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{breaks.why}</p>
          </div>
        </div>
      </Section>

      <Section
        title="Incident handling"
        description="A short, boring process, followed every time."
      >
        <ol className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {incidentHandling.map((item, index) => (
            <li key={item.title} className="bg-surface p-6">
              <span className="font-mono text-xs text-faint">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title={handoffLog.title} description={handoffLog.intro}>
        <ul className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {handoffLog.items.map((item) => (
            <li key={item} className="bg-surface px-5 py-4 text-sm leading-relaxed text-muted">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title={cameraPolicy.title} description={cameraPolicy.status}>
        <div className="panel p-6 sm:p-8">
          <ul className="space-y-3">
            {cameraPolicy.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent/40" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title={alerts.title} description={alerts.status}>
        <div className="panel p-6 sm:p-8">
          <ul className="grid gap-3 sm:grid-cols-2">
            {alerts.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent/40" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Container>
        <aside className="panel-quiet mb-8 p-6">
          <h2 className="text-base font-medium">What this page does not contain</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            No shift schedules, no names, no on call rotations, no incident logs, no
            internal alerts, no system hostnames, and no live status of anything. This
            site is static and reads from no ME system.
          </p>
        </aside>
      </Container>
    </>
  );
}
