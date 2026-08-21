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
- ME acquired the domain `multiverse-enterprises.com`. The domain transfer,
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
- ME OS reached M4, a mouse cursor, and M5, a rectangle that crosses the screen
  on a hardware timer. Still QEMU only, never booted on a physical machine.
- The Holoprojector simulator reached M4, a simulated holo pencil, and M5, a
  bracer shaped input adapter with its own alignment. Still simulator only, and
  no bracer, pencil or projector hardware exists.
- ME Docs formatting changed from oversized 22 pt body text to 12 pt body text
  with larger headings. See [me-doc-style.md](me-doc-style.md).

## 2026-08-21

- The public website moved to **multiverse-enterprises.com**, which is now the
  canonical public address. GitHub Pages remains the host, serving from the
  root rather than a project path. The old github.io project address is no
  longer canonical.
- HTTPS on the domain is not finished: the certificate has not been issued, so
  the site answers on http until it is.
- ME OS reached M6, whole number arithmetic typed on the keyboard, M7, one
  conditional expression, and M8, values that can be given names. Still QEMU
  only, never booted on a physical machine.

## How to add an entry

One dated heading per day that had a decision worth remembering. Short lines,
plain language, no invented dates and no entries for work that has not happened.
A decision that was discussed but not made is recorded as discussed, the way the
company name is above.
