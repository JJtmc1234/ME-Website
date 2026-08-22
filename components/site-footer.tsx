import Link from "next/link";
import { boundary, primaryNav, secondaryNav, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="label">Principle</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            {site.principle}
          </p>
          <p className="mt-4 font-mono text-xs text-faint">
            {site.short} · {site.founded}
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="label">Site</p>
          <ul className="mt-3 space-y-2">
            {[...primaryNav, ...secondaryNav].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-text"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="label">Scope</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{boundary.publicSite}</p>
        </div>
      </div>
    </footer>
  );
}
