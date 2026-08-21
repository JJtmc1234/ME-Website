"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav, secondaryNav, site } from "@/data/site";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    [
      "rounded-sm px-1 py-1 text-sm transition-colors",
      isActive(pathname, href)
        ? "text-text"
        : "text-muted hover:text-text",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-3 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={`${site.name} home`}
        >
          <span
            aria-hidden
            className="grid h-7 w-7 place-items-center border border-line-strong text-[0.7rem] font-medium tracking-tight text-accent"
          >
            ME
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-text sm:inline">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-5 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClass(item.href)}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Zero JavaScript mobile menu. */}
        <details className="group relative ml-auto lg:hidden">
          <summary
            className="flex cursor-pointer list-none items-center gap-2 rounded-sm border border-line px-3 py-1.5 text-sm text-muted marker:content-none"
            aria-label="Toggle navigation menu"
          >
            Menu
            <span aria-hidden className="text-faint transition-transform group-open:rotate-180">
              ▾
            </span>
          </summary>
          <nav
            aria-label="Primary mobile"
            className="absolute right-0 mt-2 w-56 border border-line bg-surface p-2 shadow-xl shadow-black/40"
          >
            {[...primaryNav, ...secondaryNav].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-sm px-3 py-2 text-sm text-muted hover:bg-surface-2 hover:text-text"
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
