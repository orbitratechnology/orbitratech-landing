import { buildRobotsTxt } from '@/lib/md/agent-files';
import { textResponse } from '@/lib/md/http';

// A route handler rather than app/robots.ts, because the metadata helper
// cannot emit the comments that point agents at /llms.txt and /ai.txt.
export function GET() {
  return textResponse(buildRobotsTxt());
}
