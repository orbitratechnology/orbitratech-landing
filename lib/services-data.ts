import type { ServiceSceneId } from '@/lib/service-pages';

export type ServiceData = {
  id: ServiceSceneId;
  name: string;
  /** Who the service is for. */
  tagline: string;
  description: string;
  /** Three outcomes, each short enough to read at a glance. */
  details: string[];
};

export const SERVICES: ServiceData[] = [
  {
    id: 'website',
    name: 'Website development',
    tagline: 'For businesses that need more enquiries',
    description:
      'A clear, fast website that tells people what you do and makes it easy to call, message or visit.',
    details: [
      'Loads fast, even on mobile data',
      'Change your own text and photos',
      'Enquiry forms and visitor stats from day one',
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile apps',
    tagline: 'For founders and product teams',
    description:
      'An app for iPhone and Android that your customers or staff actually enjoy using.',
    details: [
      'Help getting onto the App Store and Google Play',
      'One design that works on both phones',
      'Connects to the systems you already use',
    ],
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    tagline: 'For retailers selling online',
    description:
      'An online shop with a quick checkout, accurate stock, and an order list your staff will actually use.',
    details: [
      'Card, PayHere and cash on delivery',
      'Products, sizes and stock alerts',
      'A checkout made for phones',
    ],
  },
  {
    id: 'transform',
    name: 'Business automation',
    tagline: 'For teams buried in manual work',
    description:
      'Software that replaces spreadsheets, paperwork and WhatsApp chasing with one system that fits how you work.',
    details: [
      'We map how work moves before we build',
      'Rolled out in stages, so work never stops',
      'Training and guides for your team',
    ],
  },
];
