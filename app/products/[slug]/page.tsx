import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader, Section } from "@/components/primitives";
import { StatusBadge } from "@/components/status";
import { products, productBySlug, statusMeaning } from "@/data/products";
import { milestones } from "@/data/roadmap";
import { loop, tools } from "@/data/research-tools";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: `${product.tagline}. Status: ${product.status}. ${product.availability}`,
  };
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

  return (
    <>
      <PageHeader eyebrow={product.name} title={product.tagline} lead={product.summary} />

      <Section>
        <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-5">
            <div className="panel p-6">
              <h2 className="text-lg font-medium">Why it exists</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{product.purpose}</p>
            </div>

            <div className="panel p-6">
              <h2 className="text-lg font-medium">What it is meant to be</h2>
              <ul className="mt-4 space-y-2">
                {product.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-line-strong" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel p-6">
              <h2 className="text-lg font-medium">Current milestone</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {product.currentMilestone}
              </p>
              {projectMilestones.length > 0 ? (
                <ul className="mt-5 divide-y divide-line border-t border-line">
                  {projectMilestones.map((milestone) => (
                    <li key={milestone.id} className="flex flex-wrap items-center gap-3 py-3">
                      <StatusBadge status={milestone.state} kind="milestone" />
                      <span className="text-sm">{milestone.title}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <div className="panel p-6">
              <h2 className="text-lg font-medium">Long term direction</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{product.longTerm}</p>
            </div>

            {product.slug === "research-tools" ? <ResearchToolFamily /> : null}
          </div>

          <aside className="space-y-5">
            <div className="panel p-6">
              <p className="label">Status</p>
              <div className="mt-3">
                <StatusBadge status={product.status} />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {statusMeaning[product.status]}
              </p>
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
              <div className="panel p-6">
                <p className="label">Related</p>
                <ul className="mt-3 space-y-2">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/products/${item.slug}`}
                        className="text-sm text-accent underline underline-offset-4"
                      >
                        {item.name}
                      </Link>
                      <span className="ml-2 font-mono text-[0.6875rem] text-faint">
                        {item.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="panel-quiet p-6">
              <p className="text-sm leading-relaxed text-muted">
                ME has no physical hardware prototypes. Anything described here as a
                device is a concept or a research question, not something that exists.
              </p>
              <Link
                href="/products"
                className="mt-4 inline-block text-sm text-accent underline underline-offset-4"
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

function ResearchToolFamily() {
  return (
    <>
      <div className="panel p-6">
        <h2 className="text-lg font-medium">The tool family</h2>
        <p className="mt-2 text-sm text-faint">
          Concept stage. None of these exist in software or hardware.
        </p>
        <ul className="mt-5 divide-y divide-line border-t border-line">
          {tools.map((tool) => (
            <li key={tool.name} className="py-4">
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="text-base font-medium">{tool.name}</h3>
                <span className="font-mono text-[0.6875rem] text-faint">{tool.kind}</span>
                <span className="text-sm text-muted">{tool.role}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{tool.detail}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="panel p-6">
        <h2 className="text-lg font-medium">The loop they serve</h2>
        <ol className="mt-4 space-y-3">
          {loop.map((stage, index) => (
            <li key={stage.step} className="flex gap-4">
              <span className="font-mono text-xs text-faint">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm leading-relaxed">
                <span className="text-text">{stage.step}. </span>
                <span className="text-muted">{stage.body}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
