# ME change log

Company level decisions and milestones, newest last. This records what ME
decided and what it reached, not what each commit did. Individual code changes
live in each repository's git history.

Everything here is public safe. It is written so it can be mirrored into Drive
without editing.

## 2026-08-20

- The ME public website was created, covering products, research,
  manufacturing, operations, the roadmap, updates and a founder page.
- ME OS reached its M1 boot proof, M2 keyboard input and M3 rectangle
  milestones, all verified automatically in QEMU. It has never been booted on a
  physical machine.
- The Holoprojector software simulator reached its multiple object milestone and
  its pointer interaction milestone: several independent objects with selection,
  then hover, select, grab, drag and release through a device neutral pointer.
- ME confirmed it currently has zero custom physical hardware prototypes. The
  public site states this on a page of its own, and every product carries a
  status label saying how far along it actually is.
- ME acquired the domain `multiverseenterprises.com`. The domain transfer,
  account setup and DNS configuration are still pending, so it does not resolve
  and the site does not build against it.
- GitHub Pages remains temporary public website hosting until permanent domain
  setup is complete. The deployment is deliberately structured so moving off it
  does not require changing the site itself: one environment value sets the
  canonical origin, and it has been tested against the permanent domain without
  editing a single page. The cutover procedure is in
  [domain-cutover.md](domain-cutover.md).
- The company name was discussed, including Multiverse Engineering as an
  alternative. **Multiverse Enterprises remains the current name**, pending the
  domain and name decision. Nothing has been renamed.
- ME Docs formatting changed from oversized 22 pt body text to 12 pt body text
  with larger headings. See [me-doc-style.md](me-doc-style.md).

## How to add an entry

One dated heading per day that had a decision worth remembering. Short lines,
plain language, no invented dates and no entries for work that has not happened.
A decision that was discussed but not made is recorded as discussed, the way the
company name is above.
