import Link from "next/link";
import type { Product } from "@/data/products";
import type { Branch } from "@/data/research";
import type { Milestone } from "@/data/roadmap";
import { StatusBadge } from "@/components/status";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="panel flex h-full flex-col p-6 transition-colors hover:border-line-strong">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium">
            <Link
              href={`/products/${product.slug}`}
              className="transition-colors hover:text-accent"
            >
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-faint">{product.tagline}</p>
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <StatusBadge status={product.status} />
          <span className="font-mono text-[0.625rem] uppercase tracking-widest text-faint">
            {product.kind}
          </span>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">{product.summary}</p>

      <ul className="mt-5 space-y-2 border-t border-line pt-4">
        {product.points.map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
            <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-line-strong" />
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-5">
        <p className="label">Where it stands</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{product.now}</p>
        <Link
          href={`/products/${product.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-sm text-accent underline underline-offset-4"
        >
          {product.name} in detail
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}

export function BranchCard({ branch }: { branch: Branch }) {
  return (
    <article className="panel flex h-full flex-col p-6">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-medium">{branch.name}</h3>
        <span className="font-mono text-[0.6875rem] tracking-wide text-faint">
          {branch.priority}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{branch.summary}</p>
      <ul className="mt-5 space-y-2 border-t border-line pt-4">
        {branch.threads.map((thread) => (
          <li key={thread} className="flex gap-3 text-sm leading-relaxed text-muted">
            <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-line-strong" />
            {thread}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function MilestoneRow({ milestone }: { milestone: Milestone }) {
  return (
    <li className="grid gap-3 border-b border-line py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
      <div className="flex items-start gap-3 sm:flex-col sm:gap-2">
        <span className="font-mono text-xs text-faint">{milestone.project}</span>
        <StatusBadge status={milestone.state} kind="milestone" />
      </div>
      <div>
        <h3 className="text-base font-medium">{milestone.title}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{milestone.detail}</p>
      </div>
    </li>
  );
}

export function LinkCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="panel group flex flex-col p-5 transition-colors hover:border-line-strong"
    >
      <span className="flex items-center justify-between text-sm font-medium">
        {title}
        <span
          aria-hidden
          className="text-faint transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
        >
          →
        </span>
      </span>
      <span className="mt-2 text-sm leading-relaxed text-muted">{description}</span>
    </Link>
  );
}
