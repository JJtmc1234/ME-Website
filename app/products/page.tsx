import type { Metadata } from "next";
import { Container, PageHeader, Section } from "@/components/primitives";
import { ProductCard } from "@/components/cards";
import { products, statusOrder } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "ME product concepts: ME OS, Holoprojector, Carl, Employee Bracers, and the research tools platform, each with its honest current status.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="What ME is building, and how far along each one is."
        lead="Every product below is under development. None is available to buy. The status label on each card is the only claim this site makes about readiness."
      />

      <Section>
        <div className="mb-8 flex flex-wrap gap-x-6 gap-y-2">
          <span className="label">Status scale</span>
          {statusOrder.map((status) => (
            <span key={status} className="font-mono text-xs text-muted">
              {status}
            </span>
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
          <h2 className="text-base font-medium">A note on availability</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            ME does not sell any of these products yet, take pre orders, or run a waiting
            list. When something becomes available, this page will say so plainly and the
            status label will change. Until then, treat every description here as a
            statement of intent backed by work in progress.
          </p>
        </aside>
      </Container>
    </>
  );
}
