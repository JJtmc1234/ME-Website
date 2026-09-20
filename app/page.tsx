import Link from "next/link";
import Image from "next/image";
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

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="grid-backdrop absolute inset-0" />
        <Container className="relative py-20 sm:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-center">
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

            <figure className="rise relative overflow-hidden rounded-2xl border border-line bg-[#030609]">
              <Image src="/images/multiverse-art.webp" width={1536} height={1024} priority
                alt="Abstract cyan and violet orbital curves forming an M around a luminous center"
                className="aspect-[3/2] w-full object-cover" />
              <figcaption className="flex justify-between gap-4 border-t border-line px-5 py-4 font-mono text-[0.6875rem] text-faint">
                <span>Many possibilities. One direction.</span><span>Brand artwork</span>
              </figcaption>
            </figure>
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

      <Section title="Inside the software" description="A real frame from the Holoprojector simulator.">
        <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <figure className="overflow-hidden rounded-xl border border-line bg-surface">
            <Image src="/images/holoprojector-simulator.png" width={1000} height={700}
              alt="Holoprojector software rendering a cyan pyramid, amber cube and violet sphere inside a wireframe volume"
              className="h-auto w-full" />
            <figcaption className="border-t border-line p-4 text-xs text-muted">Software render captured on Omarchy. No physical projector.</figcaption>
          </figure>
          <div><Eyebrow>Holoprojector simulator</Eyebrow><h2 className="mt-4 text-3xl font-medium">An idea you can explore.</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">Shapes, rotation and selection in a three dimensional software scene. This is the simulator being developed, with a paused pyramid selected.</p>
            <Link href="/products/holoprojector" className="mt-6 inline-block text-sm text-accent underline underline-offset-4">Explore the simulator</Link>
          </div>
        </div>
      </Section>

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
