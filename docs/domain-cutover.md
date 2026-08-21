# The permanent domain

**Done.** `multiverse-enterprises.com` resolves, GitHub Pages serves it, and
production builds against it from the root. The steps below are kept as the
record of what was needed, with what is finished marked, and what is not.

**HTTPS is done too.** The certificate covers `multiverse-enterprises.com` and
`www.multiverse-enterprises.com` and runs to 19 November 2026. Enforce HTTPS is
on, so `http` returns a 301 to `https` keeping the path, `www` redirects to the
apex, and the old `github.io` project address redirects to the domain as well.
The canonical form is the apex over `https`.

Nothing here should be done from this repository. Registrar, DNS and hosting
settings are account level changes a person makes, deliberately, with the
account in front of them.

## What is already prepared

The application does not know where it is deployed. Two values in
`deployment.config.mjs` decide, and both come from the environment:

| Value | Before | Now |
| --- | --- | --- |
| `BASE_PATH` | `/ME-Website` | empty |
| `SITE_URL` | `https://jjtmc1234.github.io/ME-Website` | `https://multiverse-enterprises.com` |

`SITE_URL` already feeds `metadataBase`, every page's canonical link, the Open
Graph URLs, `sitemap.xml` and `robots.txt`. This has been tested: building with
`SITE_URL=https://multiverse-enterprises.com` produces canonical links, sitemap
entries and a robots sitemap line on the permanent domain, with assets served
from the root, and no page source changes.

## Checklist

Registrar, before anything else:

- [x] Confirm the domain sits in the correct GoDaddy account, and that the
      account is the one ME intends to keep
- [ ] Turn on two factor authentication on that account
- [ ] Turn on auto renew, and check the card on file is one that will still work
      in a year
- [ ] Leave the transfer lock on. It only needs to come off for a deliberate
      registrar transfer, and it is the main thing standing between a domain and
      a hijack

DNS:

- [x] Choose where DNS is hosted: the registrar, or a separate DNS provider.
      Write the choice down, because everything after this depends on it
- [ ] Pick one canonical form, apex (`multiverse-enterprises.com`) or `www`, and
      redirect the other to it. Two live forms means split search results and
      confusing links
- [x] Add the records the chosen host needs. For GitHub Pages that is four `A`
      records for the apex, or a `CNAME` for `www` pointing at
      `jjtmc1234.github.io`. For another host, whatever that host documents.
      Take the values from the host's own documentation on the day, not from
      here
- [ ] Wait for propagation before judging anything broken

Hosting:

- [x] Set the custom domain in the host's settings. `public/CNAME` now carries
      it, so every deployment states the domain rather than relying on a setting
      that a later deployment might not carry forward
- [x] Enable HTTPS and enforce it. The certificate is issued and Enforce HTTPS
      is on
- [x] Build with `SITE_URL=https://multiverse-enterprises.com` and no
      `BASE_PATH`, by editing `.github/workflows/pages.yml`

Verify, in this order:

- [ ] The apex and `www` both resolve, and the non canonical one redirects
- [ ] HTTPS works, with no mixed content and no certificate warning
- [x] Every route loads: the homepage, each section, and each product detail page
- [x] Stylesheets, fonts and the icon load, which is what a wrong prefix breaks
      first
- [x] Canonical links, Open Graph URLs, `sitemap.xml` and `robots.txt` all name
      the new domain
- [ ] The old Pages address either redirects or is retired deliberately, not
      left serving a stale copy

Separately:

- [ ] Email on the domain is its own setup, with its own MX records. Do it as a
      separate change, after the website is confirmed working, so a mistake in
      one does not look like a fault in the other
- [ ] Nothing internal goes on this domain. The public site is public, and the
      command center, when it exists, is a separate host with its own
      authentication

## Settled

- HTTPS is issued and enforced, and `https` loads with no warning and no mixed
  content, since every asset is requested by a relative path.
- The apex is canonical. `www` redirects to it.
- The old `github.io` project address redirects to the domain, which GitHub does
  once a custom domain is set, so no old copy is left serving.

Nothing about the domain is outstanding. What remains is the ordinary care any
domain needs: auto renew on, the transfer lock left alone, and email set up
separately if it is ever wanted.
