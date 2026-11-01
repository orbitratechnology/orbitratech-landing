import { buildAiTxt } from '@/lib/md/agent-files';
import { textResponse } from '@/lib/md/http';

export function GET() {
  return textResponse(buildAiTxt());
}
