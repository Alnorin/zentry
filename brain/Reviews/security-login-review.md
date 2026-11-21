---
title: Login page security review
group: Reviews
created: 2026-11-21
updated: 2026-11-21
---
## Finding
`login.html` checks the password in the browser against a hard-coded value and stores `isLoggedIn` in sessionStorage. Anyone can read the source or set the flag – it protects nothing.

## Recommendation
Treat it as a visual demo only, or put real auth behind a backend. Never reuse that password anywhere. Tracked in [[zentry]].
