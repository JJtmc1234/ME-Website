import Link from "next/link";

import { Section } from "@/components/primitives";
import { RunwayPanel } from "@/components/runway";
import { TierLegend } from "@/components/tiers";
import { teamReality } from "@/data/strategy";

/** What exists today, as a fact table rather than a paragraph. Nothing here is
 *  a live readout, and every line names a limit as well as a capability. */
const today = [
  { name: "ME OS", state: "Boots in QEMU. Never on physical hardware." },
  { name: "Holoprojector", state: "Drives a simulator. No projector exists." },
  { name: "Carl", state: "One personal machine. Deployed nowhere." },
  { name: "Physical hardware", state: "None yet. Not one prototype." },
];

/** The 2035 runway and how early ME actually is, together, because either one
 *  read without the other gives the wrong impression. */
export function EarlyStageSection() {
  return (
    <Section>
      <RunwayPanel />
      <div className="panel-quiet mt-5 p-5 sm:p-6">
        <h2 className="text-sm font-medium">{teamReality.title}</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {teamReality.facts.map((fact) => (
            <li key={fact} className="border border-line px-2.5 py-1 text-xs text-muted">
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/** The tier key, plus what exists today. */
export function WhatExistsSection() {
  return (
    <Section title="What exists, and what does not">
      <TierLegend />
      <dl className="mt-6 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {today.map((item) => (
          <div key={item.name} className="bg-surface p-4">
            <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-accent">
              {item.name}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted">{item.state}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-sm text-faint">
        <Link href="/roadmap" className="text-accent underline underline-offset-4">
          The roadmap
        </Link>{" "}
        says how to check each one.
      </p>
    </Section>
  );
}
