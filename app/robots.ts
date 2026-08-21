import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/deployment.config.mjs";

export const dynamic = "force-static";

/**
 * The whole site is public and there is nothing to hide from a crawler: no
 * accounts, no internal routes, no private data. The sitemap line points at
 * whichever origin this build is for.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: absoluteUrl("/sitemap.xml").replace(/\/$/, ""),
  };
}
