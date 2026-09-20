# Public website and portal boundary

The project pages are exported as static files on GitHub Pages. The Sign in
button opens `/portal` on multiverse-enterprises.com. That page embeds the
existing ME chat service at https://me-portal.jjtmc.workers.dev/.

The chat service checks passwords, stores messages and lets JJ approve account
requests. The website does not receive those passwords or message contents.
The embedded room uses its own origin and existing accounts. A direct link is
provided for browsers that block embedded storage.

The room is shared with approved members. It is not a private conversation
with JJ. Requesting an account does not grant access until JJ approves it.

AOS runtime controls and private machine data remain outside this website.
No credentials, private messages or internal logs belong in the static export.
The founder page remains public and unlisted, without access control.
