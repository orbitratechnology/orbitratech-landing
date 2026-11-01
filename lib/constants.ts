// Canonical origin. The apex domain redirects here on Vercel, so every
// canonical, sitemap entry, and JSON-LD URL must use this host.
export const SITE_URL = 'https://www.orbitratech.net';

export function siteUrl(path = '/') {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

// Site facts shared by the JSON-LD, llms.txt, ai.txt, and markdown pages.
// Change them here so every machine-readable surface stays consistent.
export const SITE_NAME = 'Orbitra Tech';
export const LEGAL_NAME = 'Orbitra Tech (Pvt) Ltd';
export const SITE_DESCRIPTION =
  'Websites, mobile apps, online stores, and business automation software for growing companies in Sri Lanka and worldwide. Fixed scope, agreed upfront.';

export const ADDRESS = {
  street: '198/3 Sheikh Jamaldeen Road',
  locality: 'Beruwala',
  country: 'Sri Lanka',
  countryCode: 'LK',
} as const;
export const ADDRESS_DISPLAY = `${ADDRESS.street}, ${ADDRESS.locality}, ${ADDRESS.country}`;

export const SOCIAL_LINKS = [
  'https://www.linkedin.com/in/orbitra-tech-org-7206523a6',
  'https://www.facebook.com/profile.php?id=61586622600161',
  'https://github.com/orbitratechnology',
];

// Update when page content changes. A lastmod that changes on every request
// is ignored by search engines, so keep these dates honest.
export const CONTENT_UPDATED = new Date('2026-10-20');
export const LEGAL_UPDATED = new Date('2026-10-07');
export const PRIVACY_UPDATED = new Date('2026-10-25')

export const CONTACT_EMAIL = 'hello@orbitratech.net';
export const PHONE_E164 = '+94702495311';
export const PHONE_DISPLAY = '+94 70 249 5311';
export const RESPONSE_TIME = 'We reply within 2 hours, 9am–8pm Sri Lanka time, Monday to Saturday.';

export const WHATSAPP_PHONE = '94702495311';

export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function createEmailUrl(subject: string, body: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const WHATSAPP_URL = createWhatsAppUrl(
  "Hi Orbitra Tech, I have a quick question about a project.",
);

export const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#products', label: 'Products' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
] as const;
