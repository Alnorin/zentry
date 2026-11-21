---
title: Second Brain app
group: Projects
created: 2026-11-21
updated: 2026-11-21
tags: [zentry, second-brain, pwa]
---
## Concept
Everything done in the project gets written down as Markdown notes. Claude writes and rewrites them after each piece of work; the app turns them into a living galaxy you can fly through. Inspired by a "Second Brain" desktop demo, but meant to be more useful: positions and brightness carry meaning. See [[galaxy-layout]].

## Data model
- **Page** = one `.md` file in `brain/<Group>/`.
- **Group** = the folder (Projects, Decisions, Ideas, Records, Reference, Reviews).
- **Idea** = one `##` section inside a page. Every idea is a star.
- **Link** = a `[[wikilink]]` between pages. Links become constellation lines.
- **Task** = `- [ ] text @YYYY-MM-DD`. Open tasks with a date show up in *Coming up*.
Full rules in [[markdown-format]].

## Visual
Monochrome galaxy, black hole with an accretion disk at the centre ("Home"), dense star dust, smoky nebula, comets on long orbits. Home opens as a dashboard: pages, ideas, links, updates this week, charts, recent activity and the newest conversation summaries.

## App
Installable as a PWA – works offline, gets its own icon in the Dock / home screen. See [[pwa-instead-of-electron]].

## Roadmap
- [x] v1 prototype (colourful, capture bar) – rejected, see [[first-prototype-review]]
- [x] v2: look of the reference video, Markdown as source of truth, PWA
- [ ] AI summaries written automatically after each session @2026-11-30 → [[ai-summaries]]
- [ ] Open a local folder of notes (Obsidian-style vault) and edit in place @2026-12-03
- [ ] Voice capture from the phone → [[voice-capture]]
