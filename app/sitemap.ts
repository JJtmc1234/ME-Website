import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/deployment.config.mjs";
import { products } from "@/data/products";
import { primaryNav, secondaryNav } from "@/data/site";

/**
 * Generated at build time, so it points at whichever origin this build is for.
 * With a static export this becomes a plain sitemap.xml in the output.
 */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    ...primaryNav.map((item) => item.href),
    ...secondaryNav.map((item) => item.href),
    ...products.map((product) => `/products/${product.slug}`),
  ];

  return routes.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}
