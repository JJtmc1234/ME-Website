/**
 * Where the portal's API lives.
 *
 * The public site is a static export with no server of its own, and
 * `deployment.config.mjs` says keeping it that way is what keeps the site free
 * of any server surface. So this page holds no password, no session and no
 * message. It asks a Worker, and the Worker holds all three.
 *
 * Not a secret. It is the address of an endpoint that refuses everybody without
 * a password, so publishing it costs nothing and hiding it would buy nothing.
 * Here rather than inline so pointing the portal at a local `wrangler dev`
 * during development is one edit in one file.
 */
export const API =
  process.env.NEXT_PUBLIC_PORTAL_API ?? "https://me-portal.jjtmc1234.workers.dev";

/** How often to ask for new messages, in milliseconds. */
export const POLL_MS = 3000;

/** Longest message the Worker will accept. Kept in step with `MOST_CHARS` there. */
export const MOST_CHARS = 4000;

/** Where the browser remembers the session, so a reload does not ask again. */
export const TOKEN_KEY = "me-portal.token";
export const WHO_KEY = "me-portal.who";
