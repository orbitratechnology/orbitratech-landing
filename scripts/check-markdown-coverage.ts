// Fails when a public app route has no markdown twin and is not on the skip
// list, or when the registry points at a route that no longer exists.
// Run with: bun run check:md

import assert from 'node:assert/strict';
import { readdirSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

import { prefersMarkdown } from '@/lib/md/http';
import { MARKDOWN_PAGES, MARKDOWN_PATHS, MARKDOWN_SKIPPED } from '@/lib/md/registry';

const APP_DIR = join(import.meta.dirname, '..', 'app');

function findPageRoutes(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      // Private folders (_name) and API routes never render public pages.
      if (entry.name.startsWith('_') || entry.name === 'api') return [];
      return findPageRoutes(full);
    }
    if (!/^page\.(tsx|ts|jsx|js|mdx)$/.test(entry.name)) return [];
    const segments = relative(APP_DIR, dir)
      .split(sep)
      .filter((segment) => segment && !/^\(.*\)$/.test(segment));
    return [`/${segments.join('/')}`];
  });
}

const failures: string[] = [];
const routes = findPageRoutes(APP_DIR);
const skipped = new Set(MARKDOWN_SKIPPED.map((page) => page.path));

for (const route of routes) {
  if (!MARKDOWN_PATHS.has(route) && !skipped.has(route)) {
    failures.push(`${route} has no markdown renderer. Register it in lib/md/registry.ts or add it to MARKDOWN_SKIPPED with a reason.`);
  }
}
for (const path of [...MARKDOWN_PATHS, ...skipped]) {
  if (!routes.includes(path)) failures.push(`${path} is in the markdown registry but has no app/**/page.tsx.`);
}
for (const page of MARKDOWN_PAGES) {
  const body = page.render();
  if (!body.startsWith('# ')) failures.push(`${page.path} markdown does not start with an H1.`);
  if (/\]\(\/(?!\/)/.test(body)) failures.push(`${page.path} markdown contains a relative link.`);
}

// Accept negotiation: markdown only when it outranks HTML.
assert.equal(prefersMarkdown(null), false);
assert.equal(prefersMarkdown('*/*'), false);
assert.equal(prefersMarkdown('text/html,application/xhtml+xml,*/*;q=0.8'), false);
assert.equal(prefersMarkdown('text/markdown'), true);
assert.equal(prefersMarkdown('text/markdown, */*;q=0.1'), true);
assert.equal(prefersMarkdown('text/html;q=0.9, text/markdown'), true);
assert.equal(prefersMarkdown('text/markdown;q=0.5, text/html'), false);
assert.equal(prefersMarkdown('text/markdown;q=0.5, text/html;q=0.5'), false);

if (failures.length > 0) {
  console.error(failures.map((failure) => `✗ ${failure}`).join('\n'));
  process.exit(1);
}
console.log(
  `✓ ${routes.length} app routes: ${MARKDOWN_PATHS.size} with markdown, ${skipped.size} skipped with a reason.`,
);
