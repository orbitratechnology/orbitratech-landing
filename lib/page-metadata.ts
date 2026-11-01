import type { Metadata } from 'next';

import { markdownUrl } from '@/lib/md/format';

/**
 * Self-canonical plus `<link rel="alternate" type="text/markdown">` pointing
 * at the page's markdown twin. Only use it for pages in lib/md/registry.ts.
 */
export function markdownAlternates(path: string): Metadata['alternates'] {
  return { canonical: path, types: { 'text/markdown': markdownUrl(path) } };
}
