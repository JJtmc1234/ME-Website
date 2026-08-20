import type { NextConfig } from "next";

import { deployment } from "./deployment.config.mjs";

/**
 * Deployment specific values live in deployment.config.mjs. Nothing in the
 * application reads them: Next applies basePath to every Link, route and
 * static asset itself, so moving to a permanent domain means dropping
 * BASE_PATH, not editing pages.
 */
const nextConfig: NextConfig = {
  output: deployment.staticExport ? "export" : undefined,
  basePath: deployment.basePath || undefined,
  // Static hosts serve /about/ from /about/index.html. Without this, a static
  // host has to guess, and GitHub Pages guesses differently from a local
  // preview server.
  trailingSlash: true,
  images: {
    // There is no image optimizer behind a static export.
    unoptimized: true,
  },
};

export default nextConfig;
