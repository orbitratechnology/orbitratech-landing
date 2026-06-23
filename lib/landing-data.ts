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
    status: 'In development',
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
    id: 'gemnet',
    title: 'Gemnet',
    status: 'Planned',
    description:
      'Secure B2B network for gem traders - discovery, trading, and market insights in one place.',
    features: ['B2B trading', 'Verification', 'Market insights'],
    imageUrl: '/gemnet-logo.png',
    imageAlt: 'Gemnet logo',
  },
];
