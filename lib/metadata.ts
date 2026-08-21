/**
 * Page metadata, built from one canonical origin.
 *
 * Every page declares its own canonical path here rather than writing a URL,
 * so the day the site moves to its permanent domain, nothing in any page
 * changes. See deployment.config.mjs.
 */
import type { Metadata } from "next";

import { site } from "@/data/site";

export type PageMetaInput = {
  title: string;
  description: string;
  /** Route path, as written in the app. "/" for the homepage. */
  path: string;
};

export function pageMeta({ title, description, path }: PageMetaInput): Metadata {
  return {
    title,
    description,
    // Relative: Next resolves it against metadataBase, which is the canonical
    // origin for this deployment.
    alternates: { canonical: path },
    openGraph: {
      title: `${title} — ${site.short}`,
      description,
      url: path,
      siteName: site.name,
      type: "website",
    },
  };
}
