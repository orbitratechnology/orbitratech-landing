// Canonical origin. The apex domain redirects here on Vercel, so every
// canonical, sitemap entry, and JSON-LD URL must use this host.
export const SITE_URL = 'https://www.orbitratech.net';

export function siteUrl(path = '/') {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

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
