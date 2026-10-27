import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import {
  CONTACT_EMAIL,
  PHONE_DISPLAY,
  SITE_URL,
  WHATSAPP_PHONE,
} from '@/lib/constants';
import { CLIENT_PROJECTS } from '@/lib/client-projects';
import { LANDING_PRODUCTS } from '@/lib/landing-data';
import { SERVICE_PAGES } from '@/lib/service-pages';

const HOMEPAGE_MARKDOWN = `# Orbitra Tech — Website, app & software development in Sri Lanka

> Orbitra Tech builds websites, mobile apps, online stores, and business automation software for growing companies in Sri Lanka and, remotely, worldwide. Scope and price are agreed in writing before work starts.

## Services

${SERVICE_PAGES.map((page) => `- [${page.name}](${SITE_URL}/${page.slug}) — ${page.summary}`).join('\n')}

## How we work

1. Free first conversation about the business problem
2. Written scope with a fixed price and milestones
3. Design and build, reviewed at each milestone
4. Launch, training, and handover, with optional ongoing support

## Client work

Platforms and websites for clients in events, healthcare, jewellery, gemstones, hospitality, and travel, in Sri Lanka, Australia, and the UK.

${CLIENT_PROJECTS.map((project) => `- ${project.url ? `[${project.name}](${project.url})` : project.name} — ${project.type}${project.location ? `, ${project.location}` : ''}${project.status ? ` (${project.status})` : ''}. ${project.description}`).join('\n')}

## Products built by Orbitra

These are Orbitra's own products, not client projects. They show how the team designs and engineers software end to end.

${LANDING_PRODUCTS.map((product) => `- [${product.title}](${SITE_URL}${product.href}) (${product.status}) — ${product.description}`).join('\n')}

## Company

- Based in Beruwala, Sri Lanka (UTC+5:30); works remotely with clients worldwide
- Founder-led: clients work directly with the founders who scope and build the project
- Legal entity: Orbitra Tech (Pvt) Ltd, Sri Lanka company number PV 00362568

## Privacy

- [Privacy Policy](${SITE_URL}/privacy-policy) — what personal data Orbitra Tech collects, why, who it is shared with, and your rights under Sri Lanka's Personal Data Protection Act No. 9 of 2022. Orbitra Tech never sells personal data.
- Privacy requests: ${CONTACT_EMAIL} with the subject "Privacy request"

## Contact

- Project enquiries: ${SITE_URL}/#contact
- Email: ${CONTACT_EMAIL}
- WhatsApp: https://wa.me/${WHATSAPP_PHONE}
- Phone: ${PHONE_DISPLAY}
- Address: 198/3 Sheikh Jamaldeen Road, Beruwala, Sri Lanka

## Agent resources

- [llms.txt](${SITE_URL}/llms.txt)
- [sitemap.xml](${SITE_URL}/sitemap.xml)
- [robots.txt](${SITE_URL}/robots.txt)
`;

function wantsMarkdown(request: NextRequest): boolean {
  const accept = request.headers.get('accept') || '';
  if (!accept.includes('text/markdown')) return false;
  const md = accept.indexOf('text/markdown');
  const html = accept.indexOf('text/html');
  if (html === -1) return true;
  return md < html;
}

// Serve a markdown summary of the homepage to agents that ask for it.
// Every other request falls through to Next.js, which returns real 404s for
// unknown paths — never block a route here based on request headers, or
// crawlers (which send no Sec-Fetch-* headers) will see 404s on live pages.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if ((pathname === '/' || pathname === '') && wantsMarkdown(request)) {
    return new NextResponse(HOMEPAGE_MARKDOWN, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        Vary: 'Accept, Accept-Encoding',
        'Cache-Control': 'public, max-age=3600, must-revalidate',
      },
    });
  }

  const res = NextResponse.next();
  if (pathname === '/') res.headers.append('Vary', 'Accept');
  return res;
}

export const config = {
  matcher: ['/'],
};
