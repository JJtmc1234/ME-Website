import type { Metadata } from "next";

import { pageMeta } from "@/lib/metadata";
import Link from "next/link";
import { Container, PageHeader, Section } from "@/components/primitives";
import { MilestoneMeters } from "@/components/meter";
import { products, statusMeaning, statusOrder } from "@/data/products";
import { milestones } from "@/data/roadmap";

export const metadata: Metadata = pageMeta({
  title: "Hardware status",
  description:
    "ME has zero custom physical hardware prototypes. What exists is software: ME OS in an emulator and the Holoprojector simulator. Everything else is concept or research.",
  path: "/hardware",
});

const meterNotes = {
  "ME OS": "Checked in QEMU by typing on the emulated keyboard and reading the framebuffer.",
  Holoprojector: "217 automated tests, none of which need a GPU.",
};

/** Three pieces of software. Each row names where it runs and what it cannot
 *  do, as fragments rather than paragraphs. */
const software = [
  {
    name: "ME OS",
    what: "A from scratch x86-64 operating system",
    where: "QEMU, an emulator, on an ordinary computer",
    notYet: ["Never booted on a physical machine", "Factorio does not run on it"],
  },
  {
    name: "Holoprojector control software",
    what: "The control layer a volumetric display would need",
    where: "A 3D simulator in a window",
    notYet: ["No projector", "Display method not decided"],
  },
  {
    name: "Carl",
    what: "The agent layer, and a local panel for a group of agents",
    where: "One personal development machine",
    notYet: ["Nothing is hardware", "Not deployed", "This site does not talk to it"],
  },
];

const doesNotExist = [
  "Holoprojector hardware",
  "Employee Bracers",
  "Lab Suit and its modules",
  "ME Smart Driver",
  "Factory Cells and lines",
  "ME Lab Bench",
  "Sensor Tiles",
  "Autonomous Microscope",
  "Energy hardware, including any DC bus",
  "The HQ campus",
  "The factory planning display room",
  "Every other physical ME product",
];

export default function HardwarePage() {
  const complete = milestones.filter((m) => m.state === "Complete").length;

  return (
    <>
      <PageHeader
        eyebrow="Hardware status"
        title="ME has zero custom physical hardware prototypes."
        lead="Not one. No projector, no bracer, no suit, no tool, no factory cell, no bench, no sensor tile."
      />

      <Container>
        <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
          {[
            { k: "Physical prototypes", v: "0" },
            { k: "Software prototypes", v: String(software.length) },
            { k: "Verified software milestones", v: String(complete) },
          ].map((stat) => (
            <div key={stat.k} className="bg-surface p-5">
              <dt className="label">{stat.k}</dt>
              <dd className="mt-2 text-3xl font-medium">{stat.v}</dd>
            </div>
          ))}
        </dl>
      </Container>

      <Section title="What exists" description="Three pieces of software. Nothing here is a device.">
        <ul className="grid gap-5 lg:grid-cols-3">
          {software.map((item) => (
            <li key={item.name} className="panel p-5">
              <h3 className="text-base font-medium">{item.name}</h3>
              <p className="mt-1 text-sm text-faint">{item.what}</p>
              <p className="label mt-4 border-t border-line pt-3">Runs on</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.where}</p>
              <p className="label mt-3">Cannot</p>
              <ul className="mt-1 space-y-1">
                {item.notYet.map((line) => (
                  <li key={line} className="text-sm leading-relaxed text-muted">
                    {line}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <MilestoneMeters notes={meterNotes} />
        </div>
      </Section>

      <Section title="What does not exist" description="Written down, thought about, not built.">
        <ul className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {doesNotExist.map((thing) => (
            <li key={thing} className="bg-surface px-5 py-3 text-sm text-muted">
              {thing}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="The labels this site uses">
        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {statusOrder.map((status) => (
            <div key={status} className="bg-surface p-4">
              <p className="font-mono text-[0.6875rem] uppercase tracking-widest text-accent">
                {status}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{statusMeaning[status]}</p>
              <p className="mt-3 font-mono text-[0.625rem] text-faint">
                {products.filter((product) => product.status === status).length} products
              </p>
            </div>
          ))}
        </div>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">
          Operational, deployed and in production are not used anywhere on this site. If
          that changes, this page changes first.{" "}
          <Link href="/products" className="text-accent underline underline-offset-4">
            Every product and its status
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
