import type { IconType } from 'react-icons';
import {
  FaDesktop,
  FaGlobe,
  FaMobileScreenButton,
} from 'react-icons/fa6';
import { SiGoogle, SiGoogleplay } from 'react-icons/si';

import type { ServiceVisualId } from '@/components/services/service-visuals';

export type ServiceIcon = {
  Icon: IconType;
  color: string;
  label: string;
};

export type ServiceData = {
  id: ServiceVisualId;
  name: string;
  tagline: string;
  description: string;
  details: string[];
  icon: ServiceIcon;
};

export const SERVICES: ServiceData[] = [
  {
    id: 'website',
    name: 'Website development',
    tagline: 'Built to convert on first visit',
    description:
      'We design and ship marketing sites and product landing pages that load fast, read clearly on mobile, and guide visitors toward one action - not twelve.',
    details: [
      'Performance-first builds with Core Web Vitals in mind',
      'CMS or headless content when your team needs to edit copy',
      'Analytics and forms wired before launch, not after',
    ],
    icon: { Icon: FaGlobe, color: 'var(--color-accent)', label: 'Website' },
  },
  {
    id: 'mobile',
    name: 'Mobile apps',
    tagline: 'Apps people keep installed',
    description:
      'Native iOS and Android experiences with the polish users expect - smooth navigation, reliable offline flows, and push notifications when they add real value.',
    details: [
      'App Store and Play Store submission support',
      'Shared design system across platforms where it saves time',
      'Backend APIs and auth integrated with your existing stack',
    ],
    icon: { Icon: FaMobileScreenButton, color: 'var(--color-accent-strong)', label: 'Mobile' },
  },
  {
    id: 'transform',
    name: 'Digital transformation',
    tagline: 'Modernize without the hype cycle',
    description:
      'We help teams replace spreadsheets, manual handoffs, and brittle legacy tools with software that matches how you actually work - choosing the right stack, not the trendiest one.',
    details: [
      'Workflow mapping before any code is written',
      'Phased rollouts so operations never stop',
      'Training and documentation your team can own',
    ],
    icon: { Icon: FaDesktop, color: 'var(--color-ink-muted)', label: 'Desktop' },
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    tagline: 'Stores you can run day to day',
    description:
      'Online shops with secure checkout, inventory you can trust, and admin panels your staff will actually use - whether you sell locally or ship nationwide.',
    details: [
      'Payment gateways and invoicing set up correctly',
      'Product catalogues, variants, and stock alerts',
      'Order flows tuned for mobile buyers',
    ],
    icon: { Icon: SiGoogleplay, color: '#00A173', label: 'Play Store' },
  },
  {
    id: 'cloud',
    name: 'Cloud infrastructure',
    tagline: 'Hosting that survives peak season',
    description:
      'Deployment pipelines, monitoring, and hosting architecture that stay up when traffic spikes - so launch day and sale day feel the same as any other Tuesday.',
    details: [
      'CI/CD pipelines with sensible staging environments',
      'Backups, SSL, and domain management handled',
      'Cost-aware scaling - pay for what you use',
    ],
    icon: { Icon: SiGoogle, color: '#4285F4', label: 'Google Cloud' },
  },
];
