export const WHATSAPP_PHONE = '94702495311';

export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = createWhatsAppUrl(
  "Hi Orbitra Tech, I'm interested in digitizing my business. Can we talk?",
);

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Work' },
  { href: '#contact', label: 'Contact' },
] as const;
