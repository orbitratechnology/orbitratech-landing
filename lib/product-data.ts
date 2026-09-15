import type { Metadata } from 'next';

export type ProductIcon =
  | 'briefcase'
  | 'calendar'
  | 'certificate'
  | 'check'
  | 'gem'
  | 'heart'
  | 'map'
  | 'message'
  | 'phone'
  | 'search'
  | 'shield'
  | 'sparkles'
  | 'store'
  | 'users'
  | 'video'
  | 'wallet'
  | 'wrench';

export type ProductPillar = {
  icon: ProductIcon;
  title: string;
  summary: string;
  details: string[];
};

export type ProductJourneyStep = {
  label: string;
  title: string;
  description: string;
};

export type ProductDetails = {
  id: 'callnet' | 'worknet' | 'gemfort' | 'hermade';
  path: `/${string}`;
  title: string;
  status: string;
  eyebrow: string;
  tagline: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  audience: string;
  promise: {
    title: string;
    body: string;
  };
  pillarsHeading: string;
  pillars: ProductPillar[];
  journeyHeading: string;
  journey: ProductJourneyStep[];
  closingTitle: string;
  closingBody: string;
  ctaLabel: string;
  legalLinks?: Array<{
    href: string;
    label: string;
  }>;
};

export const PRODUCT_DETAILS = {
  callnet: {
    id: 'callnet',
    path: '/callnet',
    title: 'Callnet',
    status: 'In Development',
    eyebrow: 'Private 1:1 voice and video calling',
    tagline: 'Find a person. Tap call. Connect.',
    description:
      'Callnet is a mobile-first calling app by Orbitra Tech for private one-to-one voice and video calls with a fast, calm, native-feeling experience.',
    imageUrl: '/callnet-logo.png',
    imageAlt: 'Callnet logo',
    audience:
      'For people who want a simple private way to call someone they know without navigating a crowded communication platform.',
    promise: {
      title: 'A beautifully simple way to make and receive private calls.',
      body:
        'Callnet focuses on one job: helping two people connect quickly. Choose a person, tap voice or video, and let the app handle the signaling, media connection, and call state without asking you to think about the technology underneath.',
    },
    pillarsHeading: 'Four ways Callnet keeps calling simple',
    pillars: [
      {
        icon: 'phone',
        title: 'Start with almost no friction',
        summary:
          'Get from a known person to a live voice call in as few steps as possible.',
        details: [
          'Keep navigation shallow and the primary actions obvious',
          'Choose voice or video directly from the person you want to call',
          'Respond to taps immediately while connection work happens in the background',
        ],
      },
      {
        icon: 'video',
        title: 'Make video feel natural',
        summary:
          'Use video when seeing the other person matters, without turning the app into a meeting suite.',
        details: [
          'Support one-to-one video with a clear remote and local view',
          'Keep camera, microphone, audio route, and end-call controls easy to reach',
          'Let controls fade back when the conversation is underway',
        ],
      },
      {
        icon: 'shield',
        title: 'Keep calls private by design',
        summary:
          'Build around known people, minimal retained metadata, and a focused private experience.',
        details: [
          'Avoid public caller discovery, social feeds, and unnecessary profiles',
          'Keep the service focused on identity, signaling, presence, and call delivery',
          'Prefer direct peer-to-peer media when the network allows it',
        ],
      },
      {
        icon: 'check',
        title: 'Recover gracefully',
        summary:
          'Make the call experience dependable across everyday Wi-Fi, cellular, and restrictive networks.',
        details: [
          'Use TURN as a fallback when a direct connection is not possible',
          'Handle ringing, connecting, connected, ended, and failed states clearly',
          'Clean up media, timers, and listeners when a call ends',
        ],
      },
    ],
    journeyHeading: 'The shortest useful path between two people',
    journey: [
      {
        label: '01',
        title: 'Find',
        description: 'Choose someone you know from the simple home or recent-calls view.',
      },
      {
        label: '02',
        title: 'Call',
        description: 'Tap voice or video and get immediate feedback from the app.',
      },
      {
        label: '03',
        title: 'Connect',
        description: 'Let Callnet establish the best available route between both devices.',
      },
      {
        label: '04',
        title: 'Finish',
        description: 'End the call cleanly and return to the people you can reach.',
      },
    ],
    closingTitle: 'Calling is the product.',
    closingBody:
      'Callnet is intentionally not a messaging platform, social network, or meeting tool. It is a focused, privacy-first calling experience that makes the most common conversation feel as simple as it should.',
    ctaLabel: 'Explore the Callnet vision',
  },
  worknet: {
    id: 'worknet',
    path: '/worknet',
    title: 'Worknet',
    status: 'In Beta',
    eyebrow: 'The work network for local services',
    tagline: 'Find a worker. Find work. Build reputation. Manage today\'s jobs.',
    description:
      'Worknet is a mobile-first network by Orbitra Tech that helps people find reliable local workers while helping skilled workers become easier to discover, contact, and trust.',
    imageUrl: '/worknet-logo.png',
    imageAlt: 'Worknet logo',
    audience:
      'For people who need a job done, and for electricians, plumbers, carpenters, technicians, drivers, cleaners, and other workers building a livelihood.',
    promise: {
      title: 'A simpler way to connect the people who need work with the people who know how to do it.',
      body:
        'Today, local work often moves through referrals, WhatsApp groups, Facebook posts, phone calls, and word of mouth. Worknet gives that offline network a clearer front door: people can discover nearby workers, understand what they do, and contact them directly. Workers get a persistent professional identity instead of relying only on a phone number being passed around.',
    },
    pillarsHeading: 'Four ways Worknet helps people get work done',
    pillars: [
      {
        icon: 'search',
        title: 'Find reliable help nearby',
        summary:
          'Search for the kind of worker you need in the places they can actually serve.',
        details: [
          'Explore electricians, plumbers, masons, mechanics, cleaners, and more',
          'Compare skills, experience, service area, and community feedback',
          'Contact workers directly by phone or WhatsApp',
        ],
      },
      {
        icon: 'users',
        title: 'Build a professional identity',
        summary:
          'Help good workers become discoverable beyond a saved contact in someone else\'s phone.',
        details: [
          'Show the trades, skills, and types of work you handle',
          'Add experience, location, service area, and contact details',
          'Grow a portable reputation through useful customer feedback',
        ],
      },
      {
        icon: 'briefcase',
        title: 'Turn opportunities into work',
        summary:
          'Connect people and businesses with workers who match the job and location.',
        details: [
          'Support direct worker discovery and future job opportunities',
          'Make it easier for contractors and businesses to find local talent',
          'Keep the first version focused on simple, low-friction connections',
        ],
      },
      {
        icon: 'calendar',
        title: 'Stay useful after the introduction',
        summary:
          'Worknet is designed to help workers manage the jobs they actually receive.',
        details: [
          'Keep track of today\'s jobs and upcoming tasks',
          'Build a history of completed work over time',
          'Move from finding work to organizing and growing the workday',
        ],
      },
    ],
    journeyHeading: 'A customer journey that stays simple',
    journey: [
      {
        label: '01',
        title: 'Search',
        description: 'Choose a trade or describe the work you need done.',
      },
      {
        label: '02',
        title: 'Evaluate',
        description: 'Look at skills, experience, service area, and reputation signals.',
      },
      {
        label: '03',
        title: 'Connect',
        description: 'Call or message the worker directly to discuss the job.',
      },
      {
        label: '04',
        title: 'Build trust',
        description: 'Complete the work, share feedback, and make the next job easier to find.',
      },
    ],
    closingTitle: 'A professional network for people who work with their hands.',
    closingBody:
      'Worknet starts with a simple first step: find a worker or find work. It can grow into a practical work operating system built around skills, local opportunity, reputation, and the daily reality of independent workers.',
    ctaLabel: 'See how Worknet works',
    legalLinks: [
      { href: '/worknet/privacy-policy', label: 'Privacy policy' },
      { href: '/worknet/terms-and-conditions', label: 'Terms and conditions' },
    ],
  },
  gemfort: {
    id: 'gemfort',
    path: '/gemfort',
    title: 'GemFort',
    status: 'In Development',
    eyebrow: 'Digital infrastructure for the gemstone trade',
    tagline: 'Trusted gems. Clear records. Real connections.',
    description:
      'GemFort is a mobile-first platform by Orbitra Tech for Sri Lanka\'s gemstone industry, helping gem professionals discover trusted counterparts and manage the work around their relationships more clearly.',
    imageUrl: '/gemfort-logo.png',
    imageAlt: 'GemFort logo',
    audience:
      'For traders, lapidaries, laboratories, service providers, suppliers, exporters, jewellers, and other professionals whose work revolves around stones and trust.',
    promise: {
      title: 'Digitize the messy parts around a relationship-driven trade without trying to replace the relationship.',
      body:
        'Gem deals still depend on physical inspection, negotiation, calls, WhatsApp conversations, credit arrangements, certificates, and face-to-face trust. GemFort is designed to bring structure to the inventory, money, certificates, service work, and contacts around those deals while keeping the human conversation where it belongs.',
    },
    pillarsHeading: 'Four ways GemFort brings order to gem businesses',
    pillars: [
      {
        icon: 'users',
        title: 'Discover trusted counterparts',
        summary:
          'Find traders, lapidaries, laboratories, and service providers through a more structured industry network.',
        details: [
          'Browse relevant gem businesses and professional profiles',
          'Reference verification and certificate information where available',
          'Connect personally through the channels the trade already uses',
        ],
      },
      {
        icon: 'gem',
        title: 'Keep the stone’s story clear',
        summary:
          'Give each gemstone a clearer record from ownership and services to certificates and movement.',
        details: [
          'Maintain individual stone and inventory records',
          'Track certificates, laboratory references, and service history',
          'Make important context easier to find than it is in scattered notes',
        ],
      },
      {
        icon: 'wallet',
        title: 'Bring the workspace together',
        summary:
          'Replace disconnected notebooks, spreadsheets, and messages with one private mobile workspace.',
        details: [
          'Organize approval stones, receivables, payables, and cheques',
          'Track trips, service jobs, purchases, expenses, and linked gems',
          'Keep internal pricing and business activity separate from public discovery',
        ],
      },
      {
        icon: 'shield',
        title: 'Make legitimate activity easier to trust',
        summary:
          'Create better records and identity signals without promising that technology can remove every risk.',
        details: [
          'Support structured business identities and verification signals',
          'Make suspicious activity easier to document and report',
          'Protect private inventory, customer relationships, and financial records',
        ],
      },
    ],
    journeyHeading: 'The context around a deal, kept in order',
    journey: [
      {
        label: '01',
        title: 'Discover',
        description: 'Find the people, businesses, stones, and services relevant to your work.',
      },
      {
        label: '02',
        title: 'Understand',
        description: 'Review the available context around a business, listing, or certificate.',
      },
      {
        label: '03',
        title: 'Record',
        description: 'Keep your private inventory, money, service, and relationship details organized.',
      },
      {
        label: '04',
        title: 'Deal humanly',
        description: 'Continue the negotiation by phone, WhatsApp, or in person with better context.',
      },
    ],
    closingTitle: 'Every stone has a story. GemFort helps you keep it together.',
    closingBody:
      'The long-term opportunity is bigger than a marketplace: a professional network where stones have structured histories, businesses have trusted identities, services are discoverable, and day-to-day records are easier to maintain.',
    ctaLabel: 'Explore the GemFort vision',
    legalLinks: [
      { href: '/gemfort/privacy-policy', label: 'Privacy policy' },
      { href: '/gemfort/terms-and-conditions', label: 'Terms and conditions' },
      { href: '/gemfort/delete-account', label: 'Delete your account' },
    ],
  },
  hermade: {
    id: 'hermade',
    path: '/hermade',
    title: 'Hermade',
    status: 'Planning',
    eyebrow: 'A growth platform for women-led small businesses',
    tagline: 'Start small. Become discoverable. Build something stronger.',
    description:
      'Hermade is a mobile-first marketplace and business platform by Orbitra Tech that helps women entrepreneurs showcase what they create, reach customers, and build more stable businesses through simple digital tools.',
    imageUrl: '/hermade-logo.png',
    imageAlt: 'Hermade logo',
    audience:
      'For home bakers, makers, tailors, beauty professionals, tutors, growers, event providers, independent service providers, and women building businesses from their skills.',
    promise: {
      title: 'Give women-led businesses a more structured digital presence without making them learn complicated business software.',
      body:
        'Many small businesses already sell through WhatsApp, Instagram, Facebook, word of mouth, and personal contacts. Hermade is designed to make those businesses easier to discover and easier to run: customers can find products and services, while sellers can present their work, handle enquiries, and gradually build a trusted customer base.',
    },
    pillarsHeading: 'Four ways Hermade helps small businesses grow',
    pillars: [
      {
        icon: 'store',
        title: 'Be easier to discover',
        summary:
          'Give women-led businesses a home beyond a social media post or a contact saved in one customer’s phone.',
        details: [
          'Create a clear business profile with products or services',
          'Show what is available, how to enquire, and where the business operates',
          'Help customers discover local talent and thoughtful products',
        ],
      },
      {
        icon: 'message',
        title: 'Turn interest into orders',
        summary:
          'Make customer enquiries, orders, payments, and delivery details easier to follow.',
        details: [
          'Keep product and service information in one place',
          'Reduce the need to coordinate every detail through scattered chats',
          'Leave room for simple payment and fulfilment flows as the product grows',
        ],
      },
      {
        icon: 'heart',
        title: 'Build trust and repeat customers',
        summary:
          'Help good sellers build a reputation that compounds over time.',
        details: [
          'Give customers clearer business identities and trust signals',
          'Support reviews, repeat business, and a history of happy customers',
          'Make the next purchase feel easier than the first one',
        ],
      },
      {
        icon: 'sparkles',
        title: 'Grow at a human pace',
        summary:
          'Support the journey from a home-based idea to a more organized, resilient business.',
        details: [
          'Start with the simplest useful profile and listing',
          'Add better customer and business tools as activity grows',
          'Create space for education, community, partnerships, and opportunities',
        ],
      },
    ],
    journeyHeading: 'A small-business path from first listing to repeat customers',
    journey: [
      {
        label: '01',
        title: 'Showcase',
        description: 'Create a welcoming profile for what you make or the service you provide.',
      },
      {
        label: '02',
        title: 'Connect',
        description: 'Let customers discover your work and ask the questions that matter.',
      },
      {
        label: '03',
        title: 'Deliver',
        description: 'Keep orders, payments, delivery, or pickup details easier to manage.',
      },
      {
        label: '04',
        title: 'Grow',
        description: 'Turn good service and repeat customers into a stronger business foundation.',
      },
    ],
    closingTitle: 'A softer starting point for stronger businesses.',
    closingBody:
      'Hermade is not meant to feel like a complicated enterprise dashboard. It is a simple, trusted ecosystem that helps women move from informal selling to a more organized digital business, one useful step at a time.',
    ctaLabel: 'Explore the Hermade vision',
  },
} satisfies Record<ProductDetails['id'], ProductDetails>;

export function createProductMetadata(product: ProductDetails): Metadata {
  return {
    title: `${product.title} | Orbitra Tech`,
    description: product.description,
    alternates: {
      canonical: product.path,
    },
    openGraph: {
      type: 'website',
      url: product.path,
      title: `${product.title} | Orbitra Tech`,
      description: product.description,
      images: [product.imageUrl],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.title} | Orbitra Tech`,
      description: product.description,
      images: [product.imageUrl],
    },
  };
}
