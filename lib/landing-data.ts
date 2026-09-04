export type LandingProduct = {
  id: string;
  href: string;
  title: string;
  status: string;
  description: string;
  features: string[];
  imageUrl: string;
  imageAlt: string;
  legal?: {
    privacyPolicyUrl?: string | null;
    termsUrl?: string | null;
  };
};

export const LANDING_PRODUCTS: LandingProduct[] = [
  {
    id: 'callnet',
    href: '/callnet',
    title: 'Callnet',
    status: 'In Development',
    description:
      'A focused 1:1 calling app for private voice and video conversations with almost no friction.',
    features: ['Voice calling', 'Video calling', 'Private by design'],
    imageUrl: '/callnet-logo.png',
    imageAlt: 'Callnet logo',
  },
  {
    id: 'worknet',
    href: '/worknet',
    title: 'Worknet',
    status: 'In Beta',
    description:
      'Mobile app connecting workers with opportunities - job matching, profiles, and daily task management.',
    features: ['Job matching', 'Worker profiles', 'Task management'],
    imageUrl: '/worknet-logo.png',
    imageAlt: 'Worknet logo',
    legal: {
      privacyPolicyUrl: '/worknet/privacy-policy',
      termsUrl: '/worknet/terms-and-conditions',
    },
  },
  {
    id: 'gemfort',
    href: '/gemfort',
    title: 'GemFort',
    status: 'In Development',
    description:
      'Secure B2B network and Workspace for gem traders - discovery, trading, and market insights in one place.',
    features: [
      'B2B Gem trading',
      'Workspace',
      'Verification',
      'Market insights',
    ],
    imageUrl: '/gemfort-logo.png',
    imageAlt: 'GemFort logo',
  },
   {
    id: 'hermade',
    href: '/hermade',
    title: 'Hermade',
    status: 'Planning',
    description:
      'A mobile-first marketplace designed to help Sri Lankan women turn practical skills, home-based production and independent services into more stable income.',
    features: [
      'Women-Led Marketplace',
      'Handmade Products',
      'Local Service Booking',
      'Sri Lanka Women Entrepreneurs'
    ],
    imageUrl: '/hermade-logo.png',
    imageAlt: 'Hermade logo',
  }
];
