# Zentry – notes for Claude

## The Second Brain is yours to keep up to date
`brain.html` shows the Markdown notes in `brain/`. **You write and rewrite those notes.** At the end of every working session in this repo:

1. **Write a Record** – `brain/Records/YYYY-MM-DD-<short-slug>.md`: `## Asked`, `## Done`, `## Decisions` (if any), `## Open` (tasks). This feeds "Newest conversation summaries" on Home.
2. **Update the pages you touched** – rewrite sections so they describe the current state (don't just append), bump `updated:` in the front matter.
3. **New decision?** → page in `brain/Decisions/`. New idea from the user → `brain/Ideas/`. Critique/review → `brain/Reviews/`.
4. **Tasks** – `- [ ] text @YYYY-MM-DD` shows in "Coming up". Tick done ones (`- [x]`).
5. **Link** related pages with `[[slug]]` (slug = file name without `.md`).
6. Run `node tools/build-brain.mjs` and commit `brain/` together with `brain/brain-data.js`.
7. If the user sends text or `.md` files to add, put them in the right folder with front matter.

Format details: `brain/Reference/markdown-format.md`. Keep notes short, concrete and true; never invent work that didn't happen.

## Repo
- Static site (HTML/CSS/vanilla JS), no framework, no npm install.
- Deployed to GitHub Pages from the `Readme` branch, under `/zentry/` – use relative links.
- The Second Brain is a PWA: `manifest.webmanifest`, `sw.js`, `icons/`. Bump `CACHE` in `sw.js` when shell files change.
- The user writes in Polish; UI text stays in English.
