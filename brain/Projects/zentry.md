---
title: Zentry
group: Projects
created: 2025-04-20
updated: 2026-11-21
tags: [zentry, web]
---
## Goal
"Your calm workspace in a chaotic world." A personal workspace site whose heart is the Second Brain: a place where everything that gets done is written down, summarised and easy to find again.

## Current state
- `index.html` – landing page (template copy, needs real content) → [[landing-page]]
- `login.html` / `logindev.html` – client-side password gate (see [[security-login-review]])
- `main.html` – "work in progress" 404-style page
- `devs.html` – dev status page
- `brain.html` – the Second Brain app → [[second-brain-app]]

## Stack
Plain HTML, CSS and JavaScript. No framework, no build step for the site itself. Notes are Markdown files in `brain/`, compiled to `brain/brain-data.js` by `tools/build-brain.mjs`. See [[static-no-framework]].

## Deploy
GitHub Pages via `.github/workflows/static.yml`, triggered by pushes to the `Readme` branch. The site lives under the `/zentry/` sub-path, so links must be relative.

## Next steps
- [ ] Merge the Second Brain branch into `Readme` so it goes live @2026-11-24
- [ ] Replace template copy on the landing page @2026-11-28
- [ ] Decide what the login should really protect @2026-12-05
