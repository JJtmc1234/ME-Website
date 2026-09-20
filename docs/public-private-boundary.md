# Public website and account access

Public project pages remain static files on GitHub Pages. Site-wide Sign in and
Sign up links lead to `/signin` and `/signup` on multiverse-enterprises.com.
Those pages embed the account service. `/portal` uses the same account area.
Private one-time owner registration is hosted at `/setup` with a URL fragment.

General accounts can use the public Claude agent, public documents, bookmarks
and profile or credential management. Registration is not employment and grants
no collaboration portal permission. JJ or a delegated administrator approves
portal access separately. Private documents also need an explicit account grant.
Worker and DF integrations remain disconnected. Their API paths fail closed.

The Worker checks sessions, role and current permissions on every protected
request. Private content and credentials are never part of the static export.
The general Claude agent receives only public project notes and public document
rows. It has no private-document retrieval tool or worker access.

The site operator can read stored data. AI messages are sent to Anthropic.
Emails are not verified, and MFA and email password recovery are not implemented.
The public founder page remains unlisted without access control.

Backend implementation and detailed validation are documented in
`ME/ME-Portal/production/README.md` in the local project workspace.
