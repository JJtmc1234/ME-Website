import type { Metadata } from "next";

import { pageMeta } from "@/lib/metadata";
import { Container, PageHeader, Section } from "@/components/primitives";
import { ProductCard } from "@/components/cards";
import { products, statusMeaning, statusOrder } from "@/data/products";

export const metadata: Metadata = pageMeta({
  title: "Products",
  description:
    "ME product concepts: ME OS, Holoprojector, Carl, Employee Bracers, and the research tools platform, each with its honest current status.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="What ME is building, and how far along each one is."
        lead="Every product below is under development. None is available to buy. ME has no physical hardware prototypes at all: the things that exist are programs, and this page says which is which."
      />

      <Section>
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

        <div className="grid gap-5 lg:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Section>

      <Container>
        <aside className="panel-quiet mb-8 p-6">
          <h2 className="text-base font-medium">Software, not hardware</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            ME has built no physical prototype of anything. ME OS boots in an emulator and
            has never run on a physical machine. The Holoprojector is a simulator on an
            ordinary computer, with no projector behind it. Bracers, research benches,
            sensor tiles and factory cells are concepts and open questions.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            ME does not sell any of these products, take pre orders, or run a waiting
            list. When something changes, the status label changes with it.
          </p>
        </aside>
      </Container>
    </>
  );
}
