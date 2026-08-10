export type LandingProduct = {
  id: string;
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
    id: 'worknet',
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
