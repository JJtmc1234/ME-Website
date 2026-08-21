# Deployment

The public site is static: every route is prerendered to HTML at build time,
there are no API routes, no server actions and no request time data. That is a
deliberate property, not an optimisation, and it is what makes the hosting
question small.

## Today: GitHub Pages, temporarily

GitHub Pages hosts the site while ME does not have a permanent domain. It is
free, it serves static files, and it needs no infrastructure to look after.

Pages serves a project site from a subdirectory, so every route and asset needs
a prefix. `BASE_PATH` supplies it, `deployment.config.mjs` interprets it, and
Next applies it to every `Link`, route and asset by itself. No page, component
or data file mentions the host, and the temporary address is not part of the
brand.

```
BASE_PATH=/ME-Website npm run build    # what the workflow does today
npm run build                           # a root domain, or a local preview
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

ME owns `multiverseenterprises.com`. It is not live: the account transfer and
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
   `SITE_URL=https://multiverseenterprises.com` has been tried, and produces a
   correct site for the permanent domain with no source changes.

Nothing else is host specific. If a fourth thing turns out to be, it belongs in
`deployment.config.mjs` with the rest.

## Checking an export locally

`out/` is the whole site. To check it the way Pages will serve it, put it behind
the same subdirectory:

```
BASE_PATH=/ME-Website npm run build
mkdir -p /tmp/pages-root && ln -s "$PWD/out" /tmp/pages-root/ME-Website
cd /tmp/pages-root && python3 -m http.server 3311
```

Then open `http://localhost:3311/ME-Website/`. Check a few routes, a product
detail page, the stylesheet and a font, since those are what a wrong prefix
breaks first.

## What Pages hosts

The public website, and nothing else. No command center, no authentication, no
dashboards, no internal APIs, no reads from any ME system, no employee
information, and no Drive integration. The boundary in
[public-private-boundary.md](public-private-boundary.md) applies to the hosted
site exactly as it applies to the repository.
