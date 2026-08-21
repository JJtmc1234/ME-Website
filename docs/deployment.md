# Deployment

The public site is static: every route is prerendered to HTML at build time,
there are no API routes, no server actions and no request time data. That is a
deliberate property, not an optimisation, and it is what makes the hosting
question small.

## Today: GitHub Pages, on the public domain

GitHub Pages hosts the site, and DNS points **multiverse-enterprises.com** at
it. That domain is the canonical public address. The old project address under
`github.io` is no longer canonical: nothing is built for it, and no metadata
names it.

A custom domain serves from the root, so there is **no path prefix**.
`BASE_PATH` is empty in production and `SITE_URL` is the domain, both set in the
deploy workflow and interpreted by `deployment.config.mjs`. No page, component
or data file mentions the host.

This is the part that broke once and is worth remembering. The workflow used to
take its base path from `actions/configure-pages`, which kept reporting the
repository's project path after the custom domain was configured. Every page
then asked for its stylesheet at `/ME-Website/_next/...`, which does not exist
on the domain, so the HTML arrived and rendered as unformatted text. The values
are now stated in the workflow rather than inferred, and the build fails if the
project path appears anywhere in the output.

```
BASE_PATH= SITE_URL=https://multiverse-enterprises.com npm run build   # production
BASE_PATH=/ME-Website npm run build    # the old project site under github.io
npm run build                           # local preview
```

`SITE_URL` sets the canonical origin used by `metadataBase`, every page's
canonical link, the Open Graph URLs, `sitemap.xml` and `robots.txt`. It defaults
to the temporary Pages address for a subdirectory build and to localhost
otherwise.

`.github/workflows/pages.yml` runs on every push to `main`: install with `npm
ci`, lint, build with the `base_path` that GitHub reports, check the export
produced pages, upload the artifact, deploy. It holds no secrets. The only
credential is the token GitHub issues to the workflow.

## Later: a permanent ME domain

ME owns `multiverse-enterprises.com`. It is not live: the account transfer and
DNS are still pending, and nothing here builds against it. The step by step
procedure is in [domain-cutover.md](domain-cutover.md).

When DNS is ready, the application does not change. Three things do:

1. **Drop the prefix.** A root domain serves from `/`, so `BASE_PATH` becomes
   empty. In the workflow that means removing the `env: BASE_PATH` line, or
   setting it to an empty string; `deployment.config.mjs` already treats empty
   and `/` as no prefix.
2. **Point DNS at the host.** If the site stays on Pages, add a `CNAME` file to
   `public/` containing the domain and set the custom domain in the repository's
   Pages settings. If it moves to ordinary production hosting, the build output
   in `out/` is a directory of static files that any web server or CDN can serve.
   There is deliberately no `CNAME` file today, because no domain is confirmed.
3. **Set `SITE_URL`** to the new origin. `metadataBase`, canonical links, Open
   Graph URLs, the sitemap and robots.txt all follow from it. Building with
   `SITE_URL=https://multiverse-enterprises.com` has been tried, and produces a
   correct site for the permanent domain with no source changes.

Nothing else is host specific. If a fourth thing turns out to be, it belongs in
`deployment.config.mjs` with the rest.

## Checking an export locally

`out/` is the whole site, and production serves it from the root, so a plain
static server over that directory is the same shape as the real thing:

```
BASE_PATH= SITE_URL=https://multiverse-enterprises.com npm run build
cd out && python3 -m http.server 3411
```

Then open `http://localhost:3411/`. Check a few routes, a product detail page,
the stylesheet and a font, since those are what a wrong prefix breaks first. If
the page arrives as unstyled text, the base path is wrong.

## What Pages hosts

The public website, and nothing else. No command center, no authentication, no
dashboards, no internal APIs, no reads from any ME system, no employee
information, and no Drive integration. The boundary in
[public-private-boundary.md](public-private-boundary.md) applies to the hosted
site exactly as it applies to the repository.
