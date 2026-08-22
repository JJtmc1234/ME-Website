import type { Metadata } from "next";

import { pageMeta } from "@/lib/metadata";
import Link from "next/link";
import { PageHeader, Section } from "@/components/primitives";
import { StrategySection } from "@/components/strategy";
import { EarlyStageSection, WhatExistsSection } from "@/components/status-overview";
import { SharedStack } from "@/components/stack";
import { channels, intent, principles } from "@/data/accessibility";
import { roadmapNote } from "@/data/strategy";
import { boundary, site } from "@/data/site";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "What ME is, how early it actually is, what exists today, and the runway to a current target of around 2035.",
  path: "/about",
});

/** Why one organisation holds nine branches. Chips, not paragraphs. */
const whyBroad = [
  "Blockers are elsewhere: a display needs materials",
  "Results transfer: wearable sensing feeds prosthetics",
  "Understand, build, survive, flourish is not one discipline",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={site.mission}
        lead="Four verbs, four failures ruled out: ignorance, helplessness, extinction, mere persistence."
      />

      <EarlyStageSection />

      <WhatExistsSection />

      <Section title="Why the map is wide" description={roadmapNote.body}>
        <ul className="mb-5 flex flex-wrap gap-2">
          {whyBroad.map((item) => (
            <li key={item} className="border border-line px-2.5 py-1 text-xs text-muted">
              {item}
            </li>
          ))}
        </ul>
        <SharedStack />
        <p className="mt-4 max-w-2xl text-sm text-faint">
          {site.principle} A project goes active when its next milestone is small enough to
          show.
        </p>
      </Section>

      <StrategySection />

      <Section title="Interfaces should be multimodal" description={intent}>
        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel) => (
            <div key={channel.name} className="bg-surface p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-sm font-medium">{channel.name}</h3>
                <span className="font-mono text-[0.625rem] uppercase tracking-widest text-faint">
                  {channel.status}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{channel.body}</p>
            </div>
          ))}
        </div>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {principles.map((principle) => (
            <li key={principle} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent/40" />
              {principle}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Public and internal">
        <dl className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
          <div className="bg-surface p-5">
            <dt className="text-sm font-medium">This site</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted">{boundary.publicSite}</dd>
          </div>
          <div className="bg-surface p-5">
            <dt className="text-sm font-medium">Internal systems</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted">{boundary.internal}</dd>
          </div>
        </dl>
        <p className="mt-5 text-sm text-muted">
          Criticism is welcome.{" "}
          <Link href="/feedback" className="text-accent underline underline-offset-4">
            Tell ME what is wrong with this
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
