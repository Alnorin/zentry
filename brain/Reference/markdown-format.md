---
title: Note format
group: Reference
created: 2026-11-21
updated: 2026-11-21
---
## File and folder
`brain/<Group>/<slug>.md`. The folder name is the group. The slug is what `[[links]]` point to.

## Front matter
```
---
title: Human title
group: Projects        # optional, defaults to folder
created: 2026-11-21
updated: 2026-11-21    # bump on every edit – drives "Updated this week"
tags: [a, b]
---
```

## Body
- `## Heading` starts a new idea (one star).
- `[[slug]]` links to another page.
- `- [ ] task @2026-12-01` is an open task with a date; `- [x]` is done.

## Build
`node tools/build-brain.mjs` → `brain/brain-data.js`. Related: [[markdown-as-source-of-truth]].
