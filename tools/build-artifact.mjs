#!/usr/bin/env node
// Builds artifact/second-brain.html: brain.html + the compiled notes in one file,
// in the shape claude.ai artifacts expect (no <html>/<head>/<body>, no PWA bits).
// Run after tools/build-brain.mjs. No dependencies.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = readFileSync(join(root, 'brain.html'), 'utf8');
const data = readFileSync(join(root, 'brain', 'brain-data.js'), 'utf8').replace(/<\/script/gi, '<\\/script');

const title = src.match(/<title>[\s\S]*?<\/title>/)[0].replace(/>[^<]*</, '>Second Brain<');
const style = src.match(/<style>[\s\S]*?<\/style>/)[0]
  .replace(':root{', ':root{\n  color-scheme:dark;');            // single deliberate dark look
let body = src.slice(src.indexOf('<body>') + 6, src.lastIndexOf('</body>'));
body = body.replace('<script src="brain/brain-data.js"></script>', `<script>\n${data}</script>`);
body = body.replace(/\s*<button id="install"[\s\S]*?<\/button>/, '');      // no PWA install inside an artifact

const out = `${title}\n<meta name="description" content="Zentry Second Brain – galaxy of notes, inbox and Ask Claude">\n${style}\n${body.trim()}\n`;
mkdirSync(join(root, 'artifact'), { recursive: true });
writeFileSync(join(root, 'artifact', 'second-brain.html'), out);
console.log(`artifact/second-brain.html: ${(out.length / 1024).toFixed(0)} KB`);
