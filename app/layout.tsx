import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { deployment } from "@/deployment.config.mjs";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/data/site";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  // One origin for canonical links, Open Graph and the sitemap. It is the
  // temporary host today and the permanent domain later, and no page has to
  // know which.
  metadataBase: new URL(deployment.siteUrl),
  title: {
    default: site.brand,
    template: `%s | ${site.brand}`,
  },
  description: site.mission,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.brand,
    description: site.mission,
    url: "/",
    siteName: site.name,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg text-text">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:border focus:border-accent focus:bg-surface focus:px-4 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
