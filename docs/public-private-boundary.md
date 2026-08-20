# Public and internal boundary

This repository is the public ME website. It is static, read only, and reads
from no ME system. A separate authenticated internal command center is planned
and has not been built.

```
www          →  this site
                static HTML, no accounts, no API routes, no internal reads

command.*    →  the future internal command center
                separate repository, separate host, separate deployment
```

## Rules this repository follows

**No authentication.** No login, no session handling, no cookies set by the
application, no user accounts. There is nothing to log in to.

**No server surface.** No API routes, no server actions, no data fetching at
request time. Every route is prerendered to static HTML at build time. A site
with no server surface has no server surface to attack.

**No hidden admin.** There is no route, query parameter, key sequence or
environment flag that reveals controls. If a control existed, it would be in the
repository, and the repository is public.

**No internal data, ever.** Not in page content, not in comments, not in data
files, not in commit messages:

- credentials, tokens, keys
- hostnames, IP addresses, network topology
- logs, incident records, alert contents
- private messages
- employee personal information, schedules, rotas
- internal security controls or their configuration
- live status of any ME system

**Status data is illustrative.** The founder console shows project state that is
a summary of what is published elsewhere on this site. It is not a feed, it does
not poll anything, and the page says so on the page itself.

**Operations content is philosophy.** The operations page describes how ME
intends to run critical functions. It contains no real staffing, no real
incident, and no real alert.

## Checks

Before publishing, the working tree is scanned for IP addresses, credential
words, private key headers, home directory paths and personal email addresses.
The only permitted external link with an identifier in it is the public
Community Feedback document, which is meant to be shared.

## When the command center is built

It goes in its own repository, on its own host, with its own authentication. It
does not import from this one, this one does not call it, and no shared
component library carries privileged behaviour between them. The public site
should stay useful, and boring, with the internal system switched off.
