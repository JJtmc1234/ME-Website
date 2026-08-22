import type { Metadata } from "next";
import Link from "next/link";

import { pageMeta } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { PageHeader, Section } from "@/components/primitives";
import { StatusBadge, TierBadge } from "@/components/status";
import { MilestoneMeter } from "@/components/meter";
import { ResearchToolFamily } from "@/components/research-tools";
import { products, productBySlug, statusMeaning } from "@/data/products";
import { tierShort } from "@/data/tiers";
import { milestones } from "@/data/roadmap";

const meterNotes: Record<string, string> = {
  "ME OS": "Verified in QEMU. Never booted on physical hardware.",
  Holoprojector: "Verified against a simulator. No projector exists.",
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) return {};
  return pageMeta({
    title: product.name,
    description: `${product.tagline}. ${product.tier}. Status: ${product.status}. ${product.availability}`,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();

  const related = product.related
    .map((otherSlug) => productBySlug(otherSlug))
    .filter((item) => item !== undefined);
  const projectMilestones = milestones.filter(
    (milestone) => milestone.project.toLowerCase() === product.name.toLowerCase(),
  );
  const meterNote = meterNotes[product.name];

  return (
    <>
      <PageHeader eyebrow={product.name} title={product.tagline} lead={product.summary} />

      <Section>
        <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-5">
            <div className="panel p-5 sm:p-6">
              <h2 className="text-base font-medium">Why it exists</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{product.purpose}</p>
              <p className="label mt-5 border-t border-line pt-4">What it is meant to be</p>
              <ul className="mt-3 space-y-1.5">
                {product.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-line-strong" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel p-5 sm:p-6">
              <h2 className="text-base font-medium">Current milestone</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {product.currentMilestone}
              </p>
              {meterNote ? (
                <div className="mt-5 border-t border-line pt-4">
                  <MilestoneMeter project={product.name} note={meterNote} />
                </div>
              ) : null}
              {projectMilestones.length > 0 ? (
                <ul className="mt-4 divide-y divide-line border-t border-line">
                  {projectMilestones.map((milestone) => (
                    <li key={milestone.id} className="flex flex-wrap items-center gap-3 py-2.5">
                      {milestone.tier ? (
                        <TierBadge tier={milestone.tier} />
                      ) : (
                        <StatusBadge status={milestone.state} kind="milestone" />
                      )}
                      <span className="text-sm">{milestone.title}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <div className="panel p-5 sm:p-6">
              <h2 className="text-base font-medium">Long term direction</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{product.longTerm}</p>
            </div>

            {product.slug === "research-tools" ? <ResearchToolFamily /> : null}
          </div>

          <aside className="space-y-5">
            <div className="panel p-5 sm:p-6">
              <p className="label">Is anybody building this</p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <TierBadge tier={product.tier} />
                <span className="text-sm text-muted">{tierShort[product.tier]}</span>
              </div>
              <p className="label mt-5 border-t border-line pt-4">How far along</p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <StatusBadge status={product.status} />
                <span className="text-sm text-muted">{statusMeaning[product.status]}</span>
              </div>
              <dl className="mt-5 space-y-3 border-t border-line pt-4 text-sm">
                <div>
                  <dt className="label">Kind</dt>
                  <dd className="mt-1 text-muted">{product.kind}</dd>
                </div>
                <div>
                  <dt className="label">Where it stands</dt>
                  <dd className="mt-1 leading-relaxed text-muted">{product.now}</dd>
                </div>
                <div>
                  <dt className="label">Availability</dt>
                  <dd className="mt-1 leading-relaxed text-muted">{product.availability}</dd>
                </div>
              </dl>
            </div>

            {related.length > 0 ? (
              <div className="panel p-5 sm:p-6">
                <p className="label">Related</p>
                <ul className="mt-2 space-y-1.5">
                  {related.map((item) => (
                    <li key={item.slug} className="flex flex-wrap items-baseline gap-2">
                      <Link
                        href={`/products/${item.slug}`}
                        className="text-sm text-accent underline underline-offset-4"
                      >
                        {item.name}
                      </Link>
                      <span className="font-mono text-[0.6875rem] text-faint">
                        {item.tier}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="panel-quiet p-5 sm:p-6">
              <p className="text-sm leading-relaxed text-muted">
                ME has no physical hardware prototypes. Anything here described as a device
                is a concept, not a thing that exists.
              </p>
              <Link
                href="/products"
                className="mt-3 inline-block text-sm text-accent underline underline-offset-4"
              >
                All products
              </Link>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
