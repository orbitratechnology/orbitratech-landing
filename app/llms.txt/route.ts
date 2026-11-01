import { buildLlmsTxt } from '@/lib/md/agent-files';
import { textResponse } from '@/lib/md/http';

// Generated from the markdown registry so it never goes stale. Prerendered at
// build time; it changes only when the site's data does.
export function GET() {
  return textResponse(buildLlmsTxt());
}
