import type { Metadata } from "next";
import Link from "next/link";
import { StatusDot } from "@/components/status";
import {
  activeProjects,
  founder,
  recentProgress,
  researchInterests,
  systemPanels,
} from "@/data/founder";
import { milestones } from "@/data/roadmap";

export const metadata: Metadata = {
  title: "Founder",
  description:
    "A public mission control view of what ME's founder is working on: active projects, current milestones, and research interests. Sanitized, no internal data.",
};

function Panel({
  title,
  meta,
  children,
  className = "",
}: {
  title: string;
  meta?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`relative border border-line bg-surface ${className}`}>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="absolute left-0 top-0 h-2.5 w-2.5 border-l border-t border-accent/45" />
        <span className="absolute right-0 top-0 h-2.5 w-2.5 border-r border-t border-accent/45" />
        <span className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b border-l border-accent/45" />
        <span className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b border-r border-accent/45" />
      </div>
      <header className="flex items-baseline justify-between gap-4 border-b border-line px-4 py-2.5">
        <h2 className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
          {title}
        </h2>
        {meta ? <span className="font-mono text-[0.625rem] text-faint">{meta}</span> : null}
      </header>
      <div className="p-4">{children}</div>
    </section>
  );
}

export default function FounderPage() {
  const tracked = milestones.filter((m) => m.state !== "Planned");

  return (
    <div className="bg-bg-raised">
      <div className="relative border-b border-line">
        <div aria-hidden className="scanline absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-accent">
                Founder console · public view
              </p>
              <h1 className="mt-3 text-3xl font-medium sm:text-4xl">
                {founder.name}
                <span className="ml-3 font-mono text-base text-faint">{founder.role}</span>
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                {founder.blurb}
              </p>
            </div>
            <dl className="grid grid-cols-3 gap-px border border-line bg-line font-mono text-xs">
              {[
                { k: "Active", v: activeProjects.filter((p) => p.state === "Active").length },
                { k: "Queued", v: activeProjects.filter((p) => p.state === "Queued").length },
                { k: "Tracked", v: tracked.length },
              ].map((stat) => (
                <div key={stat.k} className="bg-surface px-5 py-3 text-center">
                  <dt className="text-[0.625rem] uppercase tracking-widest text-faint">
                    {stat.k}
                  </dt>
                  <dd className="mt-1 text-lg text-text">{stat.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl items-start gap-4 px-5 py-10 sm:px-8 lg:grid-cols-3">
        <Panel
          title="Active projects"
          meta={`${activeProjects.length} tracked`}
          className="lg:col-span-2"
        >
          <ul className="space-y-3">
            {activeProjects.map((project) => (
              <li key={project.name} className="border border-line bg-surface-2 p-4">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <StatusDot
                    tone={project.state === "Active" ? "ok" : "idle"}
                    label={`${project.name} is ${project.state.toLowerCase()}`}
                  />
                  <h3 className="text-sm font-medium">{project.name}</h3>
                  <span className="font-mono text-[0.6875rem] text-faint">
                    {project.focus}
                  </span>
                  <span className="ml-auto font-mono text-[0.6875rem] text-muted">
                    {project.state}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted">{project.note}</p>
                <div className="mt-3 flex items-center gap-3">
                  <div
                    role="progressbar"
                    aria-valuenow={project.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${project.name} milestone progress`}
                    className="h-1 flex-1 bg-line"
                  >
                    <div
                      className="h-full bg-accent/70"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <span className="font-mono text-[0.6875rem] text-faint">
                    {project.progress}%
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </Panel>

        <div className="grid content-start gap-4">
          <Panel title="System overview" meta="illustrative">
            <ul className="divide-y divide-line font-mono text-xs">
              {systemPanels.map((panel) => (
                <li key={panel.label} className="flex items-center gap-3 py-2">
                  <StatusDot tone={panel.tone} />
                  <span className="text-muted">{panel.label}</span>
                  <span className="ml-auto text-text">{panel.value}</span>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Carl status" meta="placeholder">
            <p className="font-mono text-xs leading-relaxed text-muted">
              No agent link is exposed on the public site. Carl runs behind ME&apos;s own
              systems and is never reachable from this page.
            </p>
            <p className="mt-3 flex items-center gap-2 font-mono text-xs">
              <StatusDot tone="idle" />
              <span className="text-faint">link</span>
              <span className="ml-auto text-text">not connected</span>
            </p>
          </Panel>
        </div>

        <Panel title="Current milestones" meta="public subset" className="lg:col-span-2">
          <ul className="divide-y divide-line">
            {tracked.map((milestone) => (
              <li key={milestone.id} className="flex flex-wrap items-center gap-3 py-2.5">
                <StatusDot tone={milestone.state === "Complete" ? "ok" : "warn"} />
                <span className="font-mono text-[0.6875rem] text-faint">
                  {milestone.project}
                </span>
                <span className="text-sm">{milestone.title}</span>
                <span className="ml-auto font-mono text-[0.6875rem] text-muted">
                  {milestone.state}
                </span>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Recent progress" meta="last entries">
          <ul className="space-y-2.5">
            {recentProgress.map((entry) => (
              <li key={entry.what} className="flex gap-3 text-sm text-muted">
                <span className="shrink-0 whitespace-nowrap font-mono text-[0.6875rem] text-faint">
                  {entry.when}
                </span>
                {entry.what}
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Operating principles" className="lg:col-span-1">
          <ul className="space-y-2">
            {founder.operatingPrinciples.map((principle) => (
              <li key={principle} className="flex gap-3 text-sm text-muted">
                <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent/50" />
                {principle}
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Research interests" className="lg:col-span-2">
          <ul className="flex flex-wrap gap-2">
            {researchInterests.map((interest) => (
              <li
                key={interest}
                className="border border-line bg-surface-2 px-3 py-1.5 font-mono text-xs text-muted"
              >
                {interest}
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Disclosure" className="lg:col-span-3">
          <p className="max-w-4xl text-sm leading-relaxed text-muted">
            This console is public and deliberately sanitized. The values shown are
            illustrative summaries of published project state, not a live feed. No
            credentials, hostnames, addresses, logs, messages, or infrastructure details
            appear here or anywhere on this site. The internal command center is a separate
            system that has not been built yet.{" "}
            <Link href="/roadmap" className="text-accent underline underline-offset-4">
              See the public roadmap
            </Link>
            .
          </p>
        </Panel>
      </div>
    </div>
  );
}
