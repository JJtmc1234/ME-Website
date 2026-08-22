import Link from "next/link";
import type { Product } from "@/data/products";
import type { Branch } from "@/data/research";
import { StatusBadge, TierBadge } from "@/components/status";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="panel flex h-full flex-col p-5 transition-colors hover:border-line-strong">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-base font-medium">
            <Link
              href={`/products/${product.slug}`}
              className="transition-colors hover:text-accent"
            >
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-faint">{product.tagline}</p>
        </div>
        <span className="font-mono text-[0.625rem] uppercase tracking-widest text-faint">
          {product.kind}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        <TierBadge tier={product.tier} />
        <StatusBadge status={product.status} />
      </div>

      <p className="mt-4 border-t border-line pt-3 text-sm leading-relaxed text-muted">
        {product.now}
      </p>

      <Link
        href={`/products/${product.slug}`}
        className="mt-auto pt-4 text-sm text-accent underline underline-offset-4"
      >
        {product.name} in detail
      </Link>
    </article>
  );
}

export function BranchCard({ branch }: { branch: Branch }) {
  return (
    <article className="panel flex h-full flex-col p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <h3 className="text-base font-medium">{branch.name}</h3>
        <TierBadge tier={branch.tier} />
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">{branch.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5 border-t border-line pt-3">
        {branch.threads.map((thread) => (
          <li
            key={thread}
            className="border border-line px-2 py-0.5 font-mono text-[0.6875rem] text-faint"
          >
            {thread}
          </li>
        ))}
      </ul>
    </article>
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
      className="panel group flex flex-col p-4 transition-colors hover:border-line-strong"
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
      <span className="mt-1 text-xs leading-relaxed text-muted">{description}</span>
    </Link>
  );
}
