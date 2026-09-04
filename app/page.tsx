import Link from "next/link";
import { Container, Eyebrow, Section } from "@/components/primitives";
import { LinkCard, ProductCard } from "@/components/cards";
import { StatusBadge, TierBadge } from "@/components/status";
import { TierLegend } from "@/components/tiers";
import { RunwayPanel } from "@/components/runway";
import { MilestoneMeters } from "@/components/meter";
import { SharedStack } from "@/components/stack";
import { primaryNav, site } from "@/data/site";
import { products } from "@/data/products";
import { branches } from "@/data/research";
import { milestones } from "@/data/roadmap";

const featured = ["me-os", "holoprojector", "carl"];

const meterNotes = {
  "ME OS": "QEMU and VirtualBox. Never on physical hardware.",
  Holoprojector: "Simulator only. No projector exists. The planned display method is unproven.",
};

export default function HomePage() {
  const selected = products.filter((p) => featured.includes(p.slug));
  const completed = milestones.filter((m) => m.state === "Complete");
  const buildingNow = products.filter((p) => p.tier === "BUILDING NOW");
  const upNext = milestones.filter(
    (m) => m.state === "In progress" || m.state === "Next",
  );
  // The panel is called current state, so it leads with what is happening now.
  const currentState = [
    ...upNext,
    ...milestones.filter((m) => m.state === "Complete").slice(-2).reverse(),
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="grid-backdrop absolute inset-0" />
        <Container className="relative py-20 sm:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div className="rise">
              <Eyebrow>Multiverse Enterprises</Eyebrow>
              <h1 className="mt-5 max-w-4xl text-[2.5rem] font-medium leading-[1.05] sm:text-6xl">
                {site.mission}
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                {site.summary}
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-faint">
                {site.hardwareNote}{" "}
                <Link href="/hardware" className="text-accent underline underline-offset-4">
                  Hardware status
                </Link>
                .
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/products"
                  className="border border-accent/50 bg-accent/10 px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent/15"
                >
                  What we are building
                </Link>
                <Link
                  href="/research"
                  className="border border-line px-5 py-2.5 text-sm text-muted transition-colors hover:border-line-strong hover:text-text"
                >
                  Research branches
                </Link>
              </div>
            </div>

            {/* A quiet console panel, kept to one element instead of spread
                across the page. Public status only, never a live readout. */}
            <aside className="rise panel hidden p-5 lg:block" aria-label="Current state">
              <p className="label border-b border-line pb-3">Current state</p>
              <ul className="divide-y divide-line">
                {currentState.slice(0, 4).map((milestone) => (
                  <li key={milestone.id} className="py-3">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-mono text-[0.6875rem] text-faint">
                        {milestone.project}
                      </span>
                      <span className="font-mono text-[0.6875rem] text-muted">
                        {milestone.state === "Complete" ? "Verified" : milestone.state}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-text">{milestone.title}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-3 border-t border-line pt-3 font-mono text-[0.6875rem] text-faint">
                Public status. No link to any internal system.
              </p>
            </aside>
          </div>
        </Container>

        <div className="relative border-t border-line">
          <Container>
            <dl className="grid grid-cols-2 divide-line sm:grid-cols-4 sm:divide-x">
              {[
                { k: "Subject areas on the map", v: String(branches.length) },
                { k: "Projects being built now", v: String(buildingNow.length) },
                { k: "Software milestones met", v: String(completed.length) },
                { k: "Physical hardware prototypes", v: "None yet" },
              ].map((stat) => (
                <div key={stat.k} className="px-1 py-5 sm:px-6 sm:first:pl-0">
                  <dt className="label">{stat.k}</dt>
                  <dd className="mt-2 text-sm font-medium text-text sm:text-base">{stat.v}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </div>
      </section>

      <Section title="What the status labels mean">
        <TierLegend />
      </Section>

      <Section title="Being built now">
        <div className="grid gap-5 lg:grid-cols-3">
          {selected.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <MilestoneMeters notes={meterNotes} />
        </div>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {upNext.map((milestone) => (
            <li key={milestone.id} className="flex flex-wrap items-center gap-3 py-3">
              {milestone.tier ? (
                <TierBadge tier={milestone.tier} />
              ) : (
                <StatusBadge status={milestone.state} kind="milestone" />
              )}
              <span className="font-mono text-xs text-faint">{milestone.project}</span>
              <span className="text-sm">{milestone.title}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Where all of this is going">
        <RunwayPanel />
      </Section>

      <Section title="One organization, one shared base">
        <SharedStack />
      </Section>

      <Section title="Technology areas" description="One of the nine has work happening in it.">
        <ul className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch) => (
            <li key={branch.slug} className="bg-surface">
              <Link
                href={`/research#${branch.slug}`}
                className="flex h-full flex-col p-5 transition-colors hover:bg-surface-2"
              >
                <span className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="text-sm font-medium">{branch.name}</span>
                  <TierBadge tier={branch.tier} />
                </span>
                <span className="mt-2 text-sm leading-relaxed text-muted">
                  {branch.summary}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Everything else">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {primaryNav.map((item) => (
            <LinkCard
              key={item.href}
              href={item.href}
              title={item.label}
              description={item.description ?? ""}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
