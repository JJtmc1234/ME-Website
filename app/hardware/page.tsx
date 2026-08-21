import type { Metadata } from "next";

import { pageMeta } from "@/lib/metadata";
import Link from "next/link";
import { Container, PageHeader, Section } from "@/components/primitives";
import { products, statusMeaning, statusOrder } from "@/data/products";
import { milestones } from "@/data/roadmap";

export const metadata: Metadata = pageMeta({
  title: "Hardware status",
  description:
    "ME has zero custom physical hardware prototypes. What exists is software: ME OS in an emulator and the Holoprojector simulator. Everything else is concept or research.",
  path: "/hardware",
});

const software = [
  {
    name: "ME OS",
    what: "A from scratch x86-64 operating system",
    where: "Boots in QEMU, an emulator, on an ordinary computer",
    verified:
      "M1 boot message, M2 keyboard input, M3 a drawn rectangle, M4 a cursor that follows the mouse and M5 a rectangle that crosses the screen on a hardware timer, each checked automatically by inspecting the captured framebuffer",
    notYet: "Has never been booted on a physical machine",
  },
  {
    name: "Holoprojector control software",
    what: "The control layer a volumetric display would eventually need",
    where: "Runs against a 3D simulator in a window on an ordinary computer",
    verified:
      "M1 a rotating object, M2 several independent objects with selection, M3 pointer hover, select, grab and drag, M4 a second software pointer source, M5 a bracer shaped input with its own alignment, covered by 176 automated tests",
    notYet: "There is no projector. The physical display method is not decided",
  },
];

export default function HardwarePage() {
  const complete = milestones.filter((m) => m.state === "Complete").length;

  return (
    <>
      <PageHeader
        eyebrow="Hardware status"
        title="ME has zero custom physical hardware prototypes."
        lead="Not one. No projector, no bracer, no suit, no tool, no factory cell, no bench, no sensor tile. Everything ME has built so far is software, and this page exists so that is impossible to misread."
      />

      <Container>
        <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
          {[
            { k: "Physical prototypes", v: "0" },
            { k: "Software prototypes", v: String(software.length) },
            { k: "Verified software milestones", v: String(complete) },
          ].map((stat) => (
            <div key={stat.k} className="bg-surface p-6">
              <p className="label">{stat.k}</p>
              <p className="mt-2 text-3xl font-medium">{stat.v}</p>
            </div>
          ))}
        </div>
      </Container>

      <Section title="What exists" description="Two pieces of software, both running only on ordinary computers.">
        <div className="grid gap-5 lg:grid-cols-2">
          {software.map((item) => (
            <article key={item.name} className="panel p-6">
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="mt-1 text-sm text-faint">{item.what}</p>
              <dl className="mt-5 space-y-3 border-t border-line pt-4 text-sm">
                <div>
                  <dt className="label">Runs</dt>
                  <dd className="mt-1 leading-relaxed text-muted">{item.where}</dd>
                </div>
                <div>
                  <dt className="label">Checked</dt>
                  <dd className="mt-1 leading-relaxed text-muted">{item.verified}</dd>
                </div>
                <div>
                  <dt className="label">Not yet</dt>
                  <dd className="mt-1 leading-relaxed text-muted">{item.notYet}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="What does not exist"
        description="Concept and research work. Written down, thought about, not built."
      >
        <ul className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Holoprojector hardware",
            "Employee Bracers",
            "Lab Suit and its modules",
            "ME Smart Driver",
            "Factory Cells and production lines",
            "ME Lab Bench",
            "Sensor Tiles",
            "Autonomous Microscope",
            "Energy hardware, including any DC bus",
            "The HQ campus and its systems",
            "The factory planning display room",
            "Every other physical ME product",
          ].map((thing) => (
            <li key={thing} className="bg-surface px-5 py-4 text-sm text-muted">
              {thing}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="The labels this site uses">
        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {statusOrder.map((status) => (
            <div key={status} className="bg-surface p-5">
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
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
          The words operational, deployed, in production and hardware prototype are not
          used anywhere on this site, because none of them is true of anything ME has. If
          that ever changes, this page changes first.{" "}
          <Link href="/products" className="text-accent underline underline-offset-4">
            See every product and its status
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
