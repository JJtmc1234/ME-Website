# Moving to the permanent domain

ME owns `multiverseenterprises.com`. It is **not live**: the account transfer
and DNS are still to be done, no record points anywhere, and nothing in this
repository builds against it. The site is on temporary GitHub Pages hosting
until that changes.

Nothing here should be done from this repository. Registrar, DNS and hosting
settings are account level changes a person makes, deliberately, with the
account in front of them.

## What is already prepared

The application does not know where it is deployed. Two values in
`deployment.config.mjs` decide, and both come from the environment:

| Value | Today | After cutover |
| --- | --- | --- |
| `BASE_PATH` | `/ME-Website` | empty |
| `SITE_URL` | `https://jjtmc1234.github.io/ME-Website` | `https://multiverseenterprises.com` |

`SITE_URL` already feeds `metadataBase`, every page's canonical link, the Open
Graph URLs, `sitemap.xml` and `robots.txt`. This has been tested: building with
`SITE_URL=https://multiverseenterprises.com` produces canonical links, sitemap
entries and a robots sitemap line on the permanent domain, with assets served
from the root, and no page source changes.

## Checklist

Registrar, before anything else:

- [ ] Confirm the domain sits in the correct GoDaddy account, and that the
      account is the one ME intends to keep
- [ ] Turn on two factor authentication on that account
- [ ] Turn on auto renew, and check the card on file is one that will still work
      in a year
- [ ] Leave the transfer lock on. It only needs to come off for a deliberate
      registrar transfer, and it is the main thing standing between a domain and
      a hijack

DNS:

- [ ] Choose where DNS is hosted: the registrar, or a separate DNS provider.
      Write the choice down, because everything after this depends on it
- [ ] Pick one canonical form, apex (`multiverseenterprises.com`) or `www`, and
      redirect the other to it. Two live forms means split search results and
      confusing links
- [ ] Add the records the chosen host needs. For GitHub Pages that is four `A`
      records for the apex, or a `CNAME` for `www` pointing at
      `jjtmc1234.github.io`. For another host, whatever that host documents.
      Take the values from the host's own documentation on the day, not from
      here
- [ ] Wait for propagation before judging anything broken

Hosting:

- [ ] Set the custom domain in the host's settings. On GitHub Pages that adds a
      `CNAME` file to the repository, which is why this repository does not have
      one yet: adding it before DNS exists breaks the working site
- [ ] Enable HTTPS and enforce it. On Pages, tick "Enforce HTTPS" once the
      certificate has been issued
- [ ] Build with `SITE_URL=https://multiverseenterprises.com` and no
      `BASE_PATH`, by editing `.github/workflows/pages.yml`

Verify, in this order:

- [ ] The apex and `www` both resolve, and the non canonical one redirects
- [ ] HTTPS works, with no mixed content and no certificate warning
- [ ] Every route loads: the homepage, each section, and each product detail page
- [ ] Stylesheets, fonts and the icon load, which is what a wrong prefix breaks
      first
- [ ] Canonical links, Open Graph URLs, `sitemap.xml` and `robots.txt` all name
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

## What not to do yet

- Do not add a `CNAME` file to this repository until the custom domain is
  actually being configured with DNS access in hand.
- Do not put the permanent domain in any page as though it works.
- Do not point DNS at a host before that host is set up to answer for the
  domain, or visitors get an error page with ME's name on it.
