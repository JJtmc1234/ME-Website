/**
 * Where this site is deployed, in one place.
 *
 * Two things vary between hosts, and only these two:
 *
 *   basePath   the prefix every route and asset needs. A custom domain serves
 *              from the root, so this is empty in production. It is only set
 *              for a project site under github.io, which is what the site used
 *              before the domain existed.
 *   siteUrl    the canonical origin, used for metadata, canonical links, the
 *              sitemap and robots.txt. In production,
 *              https://multiverse-enterprises.com.
 *
 * Nothing in the application reads either one directly. Next applies basePath
 * to every Link, route and asset itself, and metadata goes through
 * app/layout.tsx. Moving hosts is a change here plus a change in one workflow
 * file, not a change in any page.
 *
 *   BASE_PATH= SITE_URL=https://multiverse-enterprises.com npm run build
 *                                            # production, what the workflow does
 *   BASE_PATH=/ME-Website npm run build      # the old project site under github.io
 *   npm run build                            # local preview
 *
 * Getting this wrong is not subtle and is not loud either: a project path baked
 * into a site served from the root gives pages whose stylesheet 404s, so the
 * HTML arrives and renders as unformatted text. That is exactly what happened
 * when the domain was pointed here while the workflow was still building with
 * the project path.
 */

const rawBase = process.env.BASE_PATH ?? "";
const basePath = rawBase === "/" ? "" : rawBase.replace(/\/$/, "");

if (basePath && !basePath.startsWith("/")) {
  throw new Error(`BASE_PATH must start with a slash, got ${JSON.stringify(rawBase)}`);
}

/**
 * The public ME domain. DNS points here and GitHub Pages serves it, which is
 * why production builds from the root rather than from a project path.
 *
 * HTTPS is a separate matter and is not settled by anything in this file: the
 * certificate is issued by the host, and until it exists the domain answers on
 * http only. See docs/domain-cutover.md.
 */
export const canonicalDomain = "multiverse-enterprises.com";
export const canonicalOrigin = `https://${canonicalDomain}`;

/** Where this build will actually be reachable. */
function defaultSiteUrl() {
  if (process.env.SITE_URL) {
    return process.env.SITE_URL.replace(/\/$/, "");
  }
  // A build with a project path is the old github.io project site.
  if (basePath) {
    return `https://jjtmc1234.github.io${basePath}`;
  }
  return "http://localhost:3000";
}

const siteUrl = defaultSiteUrl();

export const deployment = {
  basePath,
  isSubdirectory: basePath !== "",
  siteUrl,
  /** True when this build is pointed at the public domain. */
  onCanonicalDomain: siteUrl.startsWith(canonicalOrigin),
  /**
   * Export static HTML rather than run a server. The site has no API routes,
   * no server actions and no request time data, so this changes nothing about
   * how it behaves. Keep it on: it is also what keeps the public site free of
   * any server surface.
   */
  staticExport: true,
};

/** Absolute URL for a route, for canonical links and the sitemap. */
export function absoluteUrl(path = "/") {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const withSlash = clean.endsWith("/") ? clean : `${clean}/`;
  return `${siteUrl}${withSlash === "//" ? "/" : withSlash}`;
}

export default deployment;
