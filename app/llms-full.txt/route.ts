import { buildLlmsFullTxt } from '@/lib/md/agent-files';
import { textResponse } from '@/lib/md/http';

// Every registered page rendered by the same markdown registry and joined.
export function GET() {
  return textResponse(buildLlmsFullTxt(), { maxAge: 86400, swr: 604800 });
}
