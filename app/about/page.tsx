import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Section } from "@/components/primitives";
import { boundary, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "ME's mission, long horizon philosophy, why the company works across many fields, and how shared systems connect its projects.",
};

const sharedSystems = [
  {
    name: "ME OS",
    role: "The computing base. Agent execution, permissions, memory, and recovery belong to the operating system rather than to each application.",
  },
  {
    name: "Carl",
    role: "The agent layer. Products integrate against an interface boundary, so the model behind it can change without rewriting anything.",
  },
  {
    name: "Research tools",
    role: "Simulation, measurement, data capture, and experiment tracking, shared by every branch instead of rebuilt per project.",
  },
  {
    name: "Manufacturing",
    role: "Distributed automated production. Commodity inputs are bought, not made, when making them adds no strategic value.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={site.mission}
        lead="That sentence is the whole brief. Understand, build, survive, flourish. Each verb rules out a different failure: ignorance, helplessness, extinction, and a species that merely persists."
      />

      <Section title="Long horizon by default">
        <div className="grid gap-8 lg:grid-cols-2">
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            Most of what ME cares about does not pay back inside a quarter. An operating
            system, a volumetric display, power electronics, and orbital observation all
            take years before they are worth anything. Planning for that horizon means
            accepting slow milestones and refusing to inflate what exists today.
          </p>
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            It also means planning shallowly on purpose. ME writes down the branch, the
            question, and the next demonstrable step, then stops. Deeper design happens when
            a branch is genuinely blocked without it, not because a document template asked
            for a five year plan.
          </p>
        </div>
      </Section>

      <Section
        title="Why so many fields"
        description="Breadth is not ambition for its own sake. The problems ME wants to solve keep crossing branch lines."
      >
        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
          {[
            {
              t: "The blockers are elsewhere",
              b: "A display needs materials. A robot needs power electronics. A satellite service needs compute. Narrowing to one field means waiting on the others forever.",
            },
            {
              t: "Results transfer",
              b: "Sensing work for a wearable feeds prosthetics. Command routing built for a projector is the same routing a robot needs. Work done once should count more than once.",
            },
            {
              t: "The mission is not narrow",
              b: "Understanding, building, surviving, and flourishing are not one discipline's job. A company scoped to one field would be scoped to a fraction of the mission.",
            },
          ].map((item) => (
            <div key={item.t} className="bg-surface p-6">
              <h3 className="text-base font-medium">{item.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Broad roadmap, narrow active scope"
        description="The principle that keeps breadth from becoming chaos."
      >
        <div className="panel p-6 sm:p-8">
          <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            The roadmap is allowed to cover everything ME intends to reach. The active set is
            allowed to hold only what a small team can actually finish. A project enters the
            active set when its next milestone is small enough to demonstrate, and leaves it
            when that milestone is met or the question turns out to be premature. Everything
            else stays on the map, written down, waiting, and costing nothing.
          </p>
          <div className="mt-6 grid gap-5 border-t border-line pt-6 sm:grid-cols-2">
            {sharedSystems.map((system) => (
              <div key={system.name}>
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                  {system.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{system.role}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Public and internal">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="panel p-6">
            <h3 className="text-base font-medium">This site</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{boundary.publicSite}</p>
          </div>
          <div className="panel p-6">
            <h3 className="text-base font-medium">Internal systems</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{boundary.internal}</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-muted">
          Criticism is welcome and useful.{" "}
          <Link href="/feedback" className="text-accent underline underline-offset-4">
            Tell ME what is wrong with this
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
