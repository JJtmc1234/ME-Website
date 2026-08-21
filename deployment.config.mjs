/**
 * Where this site is deployed, in one place.
 *
 * Two things vary between hosts, and only these two:
 *
 *   basePath   the prefix every route and asset needs. GitHub Pages serves a
 *              project site from a subdirectory, a real domain serves from the
 *              root, so this is "/ME-Website" today and "" later.
 *   siteUrl    the canonical origin, used for metadata, canonical links, the
 *              sitemap and robots.txt. Today the temporary Pages address,
 *              later https://multiverseenterprises.com.
 *
 * Nothing in the application reads either one directly. Next applies basePath
 * to every Link, route and asset itself, and metadata goes through
 * app/layout.tsx. Moving hosts is a change here plus a change in one workflow
 * file, not a change in any page.
 *
 *   BASE_PATH=/ME-Website npm run build      # GitHub Pages, today
 *   SITE_URL=https://multiverseenterprises.com npm run build   # once DNS works
 *   npm run build                            # local preview
 */

const rawBase = process.env.BASE_PATH ?? "";
const basePath = rawBase === "/" ? "" : rawBase.replace(/\/$/, "");

if (basePath && !basePath.startsWith("/")) {
  throw new Error(`BASE_PATH must start with a slash, got ${JSON.stringify(rawBase)}`);
}

/**
 * The domain ME owns and intends to serve this site from.
 *
 * Acquired, but not live: the account transfer and DNS are not done, so
 * nothing builds against it yet and no page claims it works. When DNS is
 * ready, see docs/domain-cutover.md.
 */
export const plannedDomain = "multiverseenterprises.com";
export const plannedOrigin = `https://${plannedDomain}`;

/** Where this build will actually be reachable. */
function defaultSiteUrl() {
  if (process.env.SITE_URL) {
    return process.env.SITE_URL.replace(/\/$/, "");
  }
  // A subdirectory build is the temporary GitHub Pages one.
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
  /** True once a build is actually pointed at the permanent domain. */
  onPermanentDomain: siteUrl.startsWith(plannedOrigin),
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
