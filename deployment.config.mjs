/**
 * Where this site is deployed, in one place.
 *
 * Today: GitHub Pages, under a project path, which means every URL and asset
 * needs a prefix. Later: a permanent ME domain at the root, which means no
 * prefix at all. That difference is the only thing this file exists to hold,
 * so migrating is a change here and in one workflow file, not in the app.
 *
 * Set BASE_PATH when building for a subdirectory:
 *
 *   BASE_PATH=/ME-Website npm run build     # GitHub Pages
 *   npm run build                           # a root domain, or local preview
 *
 * BASE_PATH must start with a slash and must not end with one.
 */

const raw = process.env.BASE_PATH ?? "";
const basePath = raw === "/" ? "" : raw.replace(/\/$/, "");

if (basePath && !basePath.startsWith("/")) {
  throw new Error(`BASE_PATH must start with a slash, got ${JSON.stringify(raw)}`);
}

export const deployment = {
  /** Prefix every route and asset needs. Empty on a root domain. */
  basePath,
  /** True while the site is served from a project subdirectory. */
  isSubdirectory: basePath !== "",
  /**
   * Export static HTML rather than run a server. The site has no API routes,
   * no server actions and no request time data, so this changes nothing about
   * how it behaves. Keep it on: it is also what keeps the public site free of
   * any server surface.
   */
  staticExport: true,
};

export default deployment;
