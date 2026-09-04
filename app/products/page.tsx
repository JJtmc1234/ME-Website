import type { Metadata } from "next";

import { pageMeta } from "@/lib/metadata";
import { Container, PageHeader, Section } from "@/components/primitives";
import { ProductCard } from "@/components/cards";
import { TierLegend } from "@/components/tiers";
import { products, statusMeaning, statusOrder } from "@/data/products";

export const metadata: Metadata = pageMeta({
  title: "Products",
  description:
    "ME product concepts: ME OS, Holoprojector, Carl, AOS, Employee Bracers, the Lab Suit, the ME Smart Driver, and the research tools platform, each with its honest current status.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="What ME is building, and how far along each one is."
        lead="Four have work happening on them. The rest are directions. None is for sale, and ME has zero physical hardware prototypes."
      />

      <Section title="When: is anybody building this">
        <TierLegend />
      </Section>

      <Section title="What: how far along it is">
        <div className="mb-8 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {statusOrder.map((status) => (
            <div key={status} className="bg-surface p-4">
              <p className="font-mono text-[0.6875rem] uppercase tracking-widest text-accent">
                {status}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {statusMeaning[status]}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Section>

      <Container>
        <aside className="panel-quiet mb-8 p-5">
          <h2 className="text-sm font-medium">Software, not hardware</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {[
              "Zero physical prototypes",
              "ME OS: emulator only",
              "Holoprojector: simulator only",
              "No sales, no pre orders, no waiting list",
            ].map((item) => (
              <li key={item} className="border border-line px-2.5 py-1 text-xs text-muted">
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </Container>
    </>
  );
}
