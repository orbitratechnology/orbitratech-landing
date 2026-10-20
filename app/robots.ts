import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

// Search crawlers (Googlebot, Bingbot, OAI-SearchBot, Claude-SearchBot,
// PerplexityBot) are covered by `*`. The named entries make the intent explicit
// for the AI search and assistant crawlers the site wants to be discoverable in.
const AI_CRAWLERS = [
  'OAI-SearchBot',
  'ChatGPT-User',
  'GPTBot',
  'Claude-SearchBot',
  'Claude-User',
  'ClaudeBot',
  'PerplexityBot',
  'Google-Extended',
  'Applebot-Extended',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
