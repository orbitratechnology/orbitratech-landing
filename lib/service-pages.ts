export type ServiceSceneId = 'website' | 'mobile' | 'ecommerce' | 'transform';

export type DeliverableArt =
  | 'sitemap'
  | 'screens'
  | 'launch'
  | 'flow'
  | 'platforms'
  | 'release'
  | 'catalogue'
  | 'checkout'
  | 'orders'
  | 'map'
  | 'plan'
  | 'rollout';

export type ServicePageData = {
  slug: string;
  name: string;
  /** Which animated scene explains this service. */
  scene: ServiceSceneId;
  /** Visible H1. */
  title: string;
  /** <title> text; the root layout appends "| Orbitra Tech". */
  metaTitle: string;
  /** Link text used when other pages point here. */
  linkLabel: string;
  description: string;
  /** One plain sentence under the H1. Also used in summaries for agents. */
  summary: string;
  /** One sentence that opens the "what you get" section. */
  intro: string;
  audience: {
    buyers: string;
    /** What the visitor is living with today. */
    problems: string[];
    /** What changes, one for each problem, in the same order. */
    fixes: string[];
  };
  deliverables: { title: string; description: string; art: DeliverableArt }[];
  costFactors: string[];
  /** Real, verifiable evidence only. Orbitra products must stay labelled as such. */
  evidence?: {
    body: string;
    clientProjectIds?: string[];
    productIds?: string[];
  };
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export const SERVICE_PAGES: ServicePageData[] = [
  {
    slug: 'website-development-sri-lanka',
    name: 'Website development',
    scene: 'website',
    title: 'Website Development in Sri Lanka',
    metaTitle: 'Website Development Company in Sri Lanka',
    linkLabel: 'Website development in Sri Lanka',
    description:
      'Fast, mobile-friendly business websites built in Sri Lanka. Orbitra Tech helps SMEs explain their services, reach customers, and win enquiries.',
    summary:
      'A website that explains what you offer, works well on a phone, and makes it easy for visitors to call, message or visit.',
    intro:
      'We start with your customers and what you want them to do, then design the pages around that.',
    audience: {
      buyers: 'For business owners and marketing managers',
      problems: [
        'Your website looks dated or is hard to use on a phone',
        'Visitors arrive but rarely call, message, or enquire',
        'Customers cannot easily find your services, prices, or location',
        'Updating the site means waiting on someone else',
      ],
      fixes: [
        'A modern site that reads well on any phone',
        'Clear buttons to call, WhatsApp or send an enquiry',
        'Services, prices and directions one tap away',
        'Change your own text and photos when you need to',
      ],
    },
    deliverables: [
      {
        title: 'A clear site structure',
        description:
          'Your services, products and contact details organised so customers find what they need.',
        art: 'sitemap',
      },
      {
        title: 'Pages that fit every screen',
        description:
          'Layouts for phones, tablets and computers, with easy-to-read text and clear buttons.',
        art: 'screens',
      },
      {
        title: 'A website ready to launch',
        description:
          'Fast, easy to use, with enquiry forms and visitor stats set up before it goes live.',
        art: 'launch',
      },
    ],
    costFactors: [
      'Number of pages and page types',
      'A custom design or a simpler, proven layout',
      'Who writes the copy and supplies photos',
      'Enquiry, booking, or WhatsApp integrations',
      'Whether your team needs to edit content themselves',
      'More than one language',
    ],
    evidence: {
      body: 'Business websites we have built for clients. This site is another example: we designed and built orbitratech.net to be found on Google and to load fast on a phone.',
      clientProjectIds: [
        'nethmi-gem-jewellery',
        'hey-gems-international',
        'rabeeyunil-awwal-mango-garden',
      ],
    },
    process: [
      { title: 'Understand', description: 'We look at your customers, what you offer, and your current site.' },
      { title: 'Plan and design', description: 'We agree the pages, the content you need, and how it should look.' },
      { title: 'Build and launch', description: 'We build it, review it with you, and put it live.' },
    ],
    faqs: [
      {
        question: 'How much does a business website cost in Sri Lanka?',
        answer:
          'It depends mainly on the number of pages, how custom the design is, who provides the content, and extras such as booking or enquiry forms. Orbitra quotes a fixed price for a written scope after a free first conversation, and can give an indicative range from a short description.',
      },
      {
        question: 'What does website development include?',
        answer:
          'A project can include planning, design for phones and computers, building the site, enquiry forms, visitor stats, and help at launch. The exact scope is agreed before work starts.',
      },
      {
        question: 'How long does it take to build a business website?',
        answer:
          'Your quote includes a timeline broken into milestones. Having content ready, such as text, photos, and logos, is usually the biggest factor in launching on time.',
      },
      {
        question: 'Can Orbitra update an existing business website?',
        answer:
          'Yes. Orbitra can review an existing website and discuss a redesign, new landing pages, or focused improvements based on your goals and the technology it uses today.',
      },
    ],
  },
  {
    slug: 'mobile-app-development-sri-lanka',
    name: 'Mobile app development',
    scene: 'mobile',
    title: 'Mobile App Development in Sri Lanka',
    metaTitle: 'iOS & Android App Development in Sri Lanka',
    linkLabel: 'Mobile app development in Sri Lanka',
    description:
      'Orbitra Tech builds iOS and Android apps and MVPs for businesses and founders, with product design, backend integration, and app store submission support.',
    summary:
      'An app for iPhone and Android that does one job well for your customers or staff, connected to the systems behind it.',
    intro:
      'A useful app starts with one clear need. We shape that need into a first version, then build it properly.',
    audience: {
      buyers: 'For founders, product managers, and business owners',
      problems: [
        'You have an app idea and need a first version real users can try',
        'Customers expect an app, or your website is not enough on mobile',
        'Your staff need a mobile tool for field work, orders, or bookings',
        'An existing app is unreliable, slow, or hard to update',
      ],
      fixes: [
        'A first version in real hands, so you learn fast',
        'An app your customers keep on their home screen',
        'A simple tool your staff carry in their pocket',
        'A steady app you can keep improving',
      ],
    },
    deliverables: [
      {
        title: 'The key screens, planned first',
        description:
          'We agree the main problem, the screens that solve it, and the smallest useful first version.',
        art: 'flow',
      },
      {
        title: 'One app for iPhone and Android',
        description:
          'Built once and shared across both phones where it makes sense, so you are not paying twice.',
        art: 'platforms',
      },
      {
        title: 'Connected and published',
        description:
          'Sign-in and links to your existing systems, then help getting onto the App Store and Google Play.',
        art: 'release',
      },
    ],
    costFactors: [
      'Number of screens and user roles',
      'iOS only, Android only, or both',
      'Back end, user accounts, and admin tools',
      'Real-time features such as chat, calls, or live tracking',
      'Payments and third-party integrations',
      'App Store and Google Play release, and updates after launch',
    ],
    evidence: {
      body: 'OncsCare, a web and mobile healthcare platform for a UK client, alongside the mobile apps Orbitra builds as its own products. Our products are labelled with their real status.',
      clientProjectIds: ['oncscare'],
      productIds: ['worknet', 'callnet'],
    },
    process: [
      { title: 'Scope the app', description: 'Who will use it, what they must be able to do, and the smallest useful release.' },
      { title: 'Design and connect', description: 'We map each screen and what it needs from your systems.' },
      { title: 'Build and release', description: 'We build, test on real phones, and prepare the store listings.' },
    ],
    faqs: [
      {
        question: 'How much does it cost to build a mobile app?',
        answer:
          'The biggest factors are the number of screens and user roles, whether you need iOS, Android, or both, and the systems the app depends on. Orbitra quotes a fixed price for an agreed first release, so you know the cost before development starts.',
      },
      {
        question: 'What is an MVP, and should I start with one?',
        answer:
          'An MVP (minimum viable product) is the smallest version of an app that real users can use to solve the main problem. Starting there lets you test demand and learn before paying for features nobody uses. Orbitra usually recommends defining that first release before committing to a larger roadmap.',
      },
      {
        question: 'Can one project support both iOS and Android?',
        answer:
          'Yes. Orbitra develops for iOS and Android, sharing design and code where it makes sense while respecting how each platform works.',
      },
      {
        question: 'Can the app connect to our existing systems?',
        answer:
          'Yes, after Orbitra has reviewed what your current systems can do and how the app can safely connect to them, including how people sign in.',
      },
      {
        question: 'Does Orbitra help submit apps to the stores?',
        answer:
          'Orbitra provides App Store and Google Play submission support as part of an agreed app project scope.',
      },
    ],
  },
  {
    slug: 'ecommerce-development-sri-lanka',
    name: 'E-commerce development',
    scene: 'ecommerce',
    title: 'E-commerce Development in Sri Lanka',
    metaTitle: 'E-commerce Website Development in Sri Lanka',
    linkLabel: 'E-commerce development in Sri Lanka',
    description:
      'Orbitra Tech develops online stores for Sri Lankan businesses, including product catalogues, local payment gateways, inventory flows, and mobile checkout.',
    summary:
      'An online shop where customers order and pay on their phone, and your team sees every order and every item in stock.',
    intro:
      'Your shop should fit how you already handle products, payments and delivery. We plan it around that.',
    audience: {
      buyers: 'For retailers and established merchants',
      problems: [
        'Orders arrive through WhatsApp, calls, and DMs and get lost',
        'Stock in your shop and online does not match',
        'Customers drop off at checkout or cannot pay the way they want',
        'Your current store platform is expensive or hard for staff to manage',
      ],
      fixes: [
        'Every order lands in one list',
        'Stock updates the moment something sells',
        'A quick checkout with card, PayHere or cash on delivery',
        'Simple tools your staff are happy to use',
      ],
    },
    deliverables: [
      {
        title: 'Your products, organised',
        description:
          'Products, sizes, prices and stock set up in a way your team can keep up to date.',
        art: 'catalogue',
      },
      {
        title: 'A checkout people finish',
        description:
          'A short, secure checkout with the payment methods your customers already use.',
        art: 'checkout',
      },
      {
        title: 'Orders and stock in one place',
        description:
          'Your team sees new orders and stock levels, on a computer or a phone.',
        art: 'orders',
      },
    ],
    costFactors: [
      'Number of products, variants, and categories',
      'Payment options such as PayHere, Stripe, or cash on delivery',
      'Delivery zones, shipping rules, and pickup options',
      'Order and inventory tools for staff',
      'Integrations with accounting, POS, or courier systems',
      'Moving products and customers from an existing store',
    ],
    process: [
      { title: 'Map how you sell', description: 'Your products, payment options, delivery, and who does what.' },
      { title: 'Plan the shop', description: 'We agree the categories, checkout steps, and staff tools.' },
      { title: 'Build and launch', description: 'We connect everything, test real orders end to end, and go live.' },
    ],
    faqs: [
      {
        question: 'How much does an e-commerce website cost in Sri Lanka?',
        answer:
          'It depends on the size of your catalogue, the payment and delivery options you need, and how much of your order and stock management should happen in the store. Orbitra quotes a fixed price for a written scope after a free first conversation.',
      },
      {
        question: 'Can an Orbitra online store support local payment gateways?',
        answer:
          'Yes, such as PayHere, once the provider, your account access, and what your store needs have been confirmed.',
      },
      {
        question: 'Can my staff manage products and orders?',
        answer:
          'Store projects can include simple tools for products, stock, and orders, based on what is agreed during scoping.',
      },
      {
        question: 'Will the store work on mobile phones?',
        answer:
          'Yes. Orbitra plans online stores for people buying on their phones, including product pages and checkout.',
      },
    ],
  },
  {
    slug: 'digital-transformation-sri-lanka',
    name: 'Business automation & custom software',
    scene: 'transform',
    title: 'Custom Software & Business Automation in Sri Lanka',
    metaTitle: 'Custom Software & Business Automation in Sri Lanka',
    linkLabel: 'Business automation in Sri Lanka',
    description:
      'Orbitra Tech builds custom software that replaces spreadsheets and manual workflows for SMEs, using workflow mapping and phased rollouts. Fixed price.',
    summary:
      'Software that replaces spreadsheets, paperwork and WhatsApp chasing with one place where your team can see and do the work.',
    intro:
      'We first learn how work moves through your business, then fix the steps that waste the most time.',
    audience: {
      buyers: 'For operations managers and business owners',
      problems: [
        'The same data is typed into several spreadsheets or systems',
        'Orders, approvals, or jobs are tracked in WhatsApp chats and notebooks',
        'You cannot see the status of work without asking someone',
        'Off-the-shelf software almost fits, but forces awkward workarounds',
      ],
      fixes: [
        'Enter information once, use it everywhere',
        'Jobs and approvals in one shared list',
        'See the status of any job at a glance',
        'Software shaped around how you actually work',
      ],
    },
    deliverables: [
      {
        title: 'A map of how work moves',
        description:
          'We write down the steps, handovers and repeated typing your team wants to get rid of.',
        art: 'map',
      },
      {
        title: 'A plan that starts small',
        description:
          'We pick the changes that help most first, and choose tools that fit your way of working.',
        art: 'plan',
      },
      {
        title: 'Rolled out in stages',
        description:
          'Introduced step by step, with training and simple guides your team can keep using.',
        art: 'rollout',
      },
    ],
    costFactors: [
      'How many workflows and user roles are involved',
      'Integrations with the tools and data you already use',
      'Moving data out of spreadsheets or old systems',
      'Reports and dashboards',
      'Web only, or web plus mobile for staff in the field',
      'Rollout phases, training, and support',
    ],
    evidence: {
      body: 'Custom platforms we have built for clients in healthcare and events, plus GemFort, an Orbitra product in development that replaces notebooks, spreadsheets, and scattered messages with one private workspace for gem businesses.',
      clientProjectIds: ['oncscare', 'event-hero'],
      productIds: ['gemfort'],
    },
    process: [
      { title: 'Map the work', description: 'The people, tools and decisions in your current process.' },
      { title: 'Pick a first step', description: 'One contained improvement we can deliver and review together.' },
      { title: 'Roll out and learn', description: 'We introduce it in stages and support your team through handover.' },
    ],
    faqs: [
      {
        question: 'Should we choose custom software or off-the-shelf software?',
        answer:
          'Off-the-shelf software is usually cheaper and faster when it fits how you work. Custom software makes sense when your process sets you apart, when you pay for several tools that do not connect, or when workarounds cost your team hours every week. If an existing product would serve you better, Orbitra will say so.',
      },
      {
        question: 'What does digital transformation mean for a small business?',
        answer:
          'It can mean improving one specific part of how you work with software, such as replacing spreadsheet tracking or making handovers easier. The right scope depends on the process.',
      },
      {
        question: 'Does Orbitra replace every tool a business already uses?',
        answer:
          'No. Orbitra reviews the current workflow and tools first, then recommends changes where software can solve a clearly identified problem.',
      },
      {
        question: 'How can changes be introduced without stopping operations?',
        answer:
          'Orbitra plans rollouts in stages so a team can adopt improvements gradually and see how they work in practice.',
      },
    ],
  },
];

// Shared answer appended to every service page's FAQ.
export const INTERNATIONAL_FAQ = {
  question: 'Do you work with businesses outside Sri Lanka?',
  answer:
    'Yes. Orbitra Tech is based in Beruwala, Sri Lanka, and works with clients remotely by video call, email, and WhatsApp. Clients include an Australian events startup and a UK healthcare platform. Sri Lanka is on UTC+5:30, which overlaps working hours in the Gulf, Europe, and much of Asia-Pacific.',
};

export const SERVICE_PAGE_BY_SLUG = Object.fromEntries(
  SERVICE_PAGES.map((page) => [page.slug, page]),
) as Record<string, ServicePageData>;

export const SERVICE_PAGE_BY_NAME: Record<string, ServicePageData> = {
  ...Object.fromEntries(SERVICE_PAGES.map((page) => [page.name, page])),
  'Mobile apps': SERVICE_PAGE_BY_SLUG['mobile-app-development-sri-lanka'],
  'E-commerce': SERVICE_PAGE_BY_SLUG['ecommerce-development-sri-lanka'],
  'Business automation': SERVICE_PAGE_BY_SLUG['digital-transformation-sri-lanka'],
};
