export type ProductStatus = 'In Beta' | 'In Development' | 'Planning';

// What each status means, shown wherever a product status appears so a
// planned or in-progress product is never read as a finished release.
export const PRODUCT_STATUS_NOTES: Record<ProductStatus, string> = {
  'In Beta': 'In beta testing. Features are still being refined.',
  'In Development':
    'Being built now. This describes the product in progress, not a finished release.',
  Planning:
    'In research and planning. Nothing described here is built yet.',
};

export type LandingProduct = {
  id: string;
  href: string;
  title: string;
  status: ProductStatus;
  description: string;
  demonstrates: string;
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
    demonstrates:
      'Real-time voice and video between devices: signalling, presence, call states, and a relay fallback for restrictive networks.',
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
    demonstrates:
      'A two-sided mobile marketplace: worker profiles, location-based search, direct contact, and reputation.',
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
    demonstrates:
      'A B2B network with private business records: inventory, certificates, receivables and payables, and verification signals.',
    features: [
      'B2B Gem trading',
      'Workspace',
      'Verification',
      'Market insights',
    ],
    imageUrl: '/gemfort-logo.png',
    imageAlt: 'GemFort logo',
    legal: {
      privacyPolicyUrl: '/gemfort/privacy-policy',
      termsUrl: '/gemfort/terms-and-conditions',
    },
  },
  {
    id: 'hermade',
    href: '/hermade',
    title: 'Hermade',
    status: 'Planning',
    description:
      'A mobile-first marketplace designed to help Sri Lankan women turn practical skills, home-based production and independent services into more stable income.',
    demonstrates:
      'How we scope a marketplace before building it: who it serves, the first useful release, and what comes later.',
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
