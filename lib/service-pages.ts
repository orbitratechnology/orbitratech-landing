export type ServicePageData = {
  slug: string;
  name: string;
  /** Visible H1. */
  title: string;
  /** <title> text; the root layout appends "| Orbitra Tech". */
  metaTitle: string;
  /** Link text used when other pages point here. */
  linkLabel: string;
  description: string;
  summary: string;
  intro: string;
  audience: {
    buyers: string;
    problems: string[];
  };
  deliverables: { title: string; description: string }[];
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
    title: 'Website Development in Sri Lanka',
    metaTitle: 'Website Development Company in Sri Lanka',
    linkLabel: 'Website development in Sri Lanka',
    description:
      'Fast, mobile-friendly business websites built in Sri Lanka. Orbitra Tech helps SMEs explain their services, reach customers, and win enquiries.',
    summary:
      'Orbitra Tech builds business websites in Sri Lanka that explain what you offer, work well on mobile, and help visitors take the next step.',
    intro:
      'Based in Beruwala, Orbitra Tech works with growing businesses to plan, design, and launch marketing websites and product landing pages. The work starts with your customers and business goals, then turns those into a clear page structure and a practical build.',
    audience: {
      buyers: 'Business owners and marketing managers',
      problems: [
        'Your website looks dated or is hard to use on a phone',
        'Visitors arrive but rarely call, message, or enquire',
        'Customers cannot easily find your services, prices, or location',
        'Updating the site means waiting on someone else',
      ],
    },
    deliverables: [
      {
        title: 'A clear site structure',
        description:
          'Organize your services, products, and contact information so customers can find the details they need.',
      },
      {
        title: 'Responsive page design',
        description:
          'Design layouts for phones, tablets, and desktop screens, with readable content and clear calls to action.',
      },
      {
        title: 'A launch-ready website',
        description:
          'Build with performance and accessibility in mind, and connect enquiry forms and analytics where required.',
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
      body: 'Business websites we have built for clients. This site is another example: orbitratech.net is designed and built by Orbitra, with server-rendered pages, structured data for search engines, and a mobile-first layout.',
      clientProjectIds: [
        'nethmi-gem-jewellery',
        'hey-gems-international',
        'rabeeyunil-awwal-mango-garden',
      ],
    },
    process: [
      { title: 'Understand', description: 'Review your audience, offer, and current site or materials.' },
      { title: 'Plan and design', description: 'Agree on the page structure, content needs, and visual direction.' },
      { title: 'Build and launch', description: 'Develop, review, and prepare the site for launch with you.' },
    ],
    faqs: [
      {
        question: 'How much does a business website cost in Sri Lanka?',
        answer:
          'It depends mainly on the number of pages, how custom the design is, who provides the content, and integrations such as booking or enquiry forms. Orbitra quotes a fixed price for a written scope after a free first conversation, and can give an indicative range from a short description.',
      },
      {
        question: 'What does website development include?',
        answer:
          'A project can include planning, responsive design, website development, enquiry forms, analytics setup, and launch support. The exact scope is agreed before work starts.',
      },
      {
        question: 'How long does it take to build a business website?',
        answer:
          'Your quote includes a timeline broken into milestones. Having content ready, such as text, photos, and logos, is usually the biggest factor in launching on time.',
      },
      {
        question: 'Can Orbitra update an existing business website?',
        answer:
          'Yes. Orbitra can review an existing website and discuss a redesign, new landing pages, or focused improvements based on your goals and current technology.',
      },
    ],
  },
  {
    slug: 'mobile-app-development-sri-lanka',
    name: 'Mobile app development',
    title: 'Mobile App Development in Sri Lanka',
    metaTitle: 'iOS & Android App Development in Sri Lanka',
    linkLabel: 'Mobile app development in Sri Lanka',
    description:
      'Orbitra Tech builds iOS and Android apps and MVPs for businesses and founders, with product design, backend integration, and app store submission support.',
    summary:
      'Orbitra Tech plans and builds business mobile apps for iOS and Android, connecting the customer experience to the backend systems the app needs.',
    intro:
      'A useful mobile app starts with a specific customer or operational need. Orbitra Tech helps businesses and founders shape that need into an app scope, design the important user journeys, and build the app alongside the APIs and authentication it depends on.',
    audience: {
      buyers: 'Founders, product managers, and business owners',
      problems: [
        'You have an app idea and need a first version real users can try',
        'Customers expect an app, or your website is not enough on mobile',
        'Your staff need a mobile tool for field work, orders, or bookings',
        'An existing app is unreliable, slow, or hard to update',
      ],
    },
    deliverables: [
      {
        title: 'Product and user-flow planning',
        description:
          'Define the core problem, key screens, and the first useful version before committing to a larger feature set.',
      },
      {
        title: 'iOS and Android app development',
        description:
          'Build mobile experiences with shared design and implementation where it makes sense for the product.',
      },
      {
        title: 'Backend and release support',
        description:
          'Integrate APIs and authentication, then support preparation for App Store and Google Play submission.',
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
      { title: 'Scope the app', description: 'Identify users, essential tasks, and the smallest useful release.' },
      { title: 'Design and connect', description: 'Map user journeys and plan app, API, and authentication needs.' },
      { title: 'Build and prepare release', description: 'Develop, review on devices, and prepare store submission materials.' },
    ],
    faqs: [
      {
        question: 'How much does it cost to build a mobile app?',
        answer:
          'The biggest factors are the number of screens and user roles, whether you need iOS, Android, or both, and the back end the app depends on. Orbitra quotes a fixed price for an agreed first release, so you know the cost before development starts.',
      },
      {
        question: 'What is an MVP, and should I start with one?',
        answer:
          'An MVP (minimum viable product) is the smallest version of an app that real users can use to solve the main problem. Starting there lets you test demand and learn before paying for features nobody uses. Orbitra usually recommends defining that first release before committing to a larger roadmap.',
      },
      {
        question: 'Can one project support both iOS and Android?',
        answer:
          'Yes. Orbitra develops for iOS and Android, sharing design and code where appropriate while accounting for platform-specific behavior.',
      },
      {
        question: 'Can the app connect to our existing backend?',
        answer:
          'Orbitra can integrate mobile apps with existing APIs and authentication systems after reviewing their capabilities and access requirements.',
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
    title: 'E-commerce Development in Sri Lanka',
    metaTitle: 'E-commerce Website Development in Sri Lanka',
    linkLabel: 'E-commerce development in Sri Lanka',
    description:
      'Orbitra Tech develops online stores for Sri Lankan businesses, including product catalogues, local payment gateways, inventory flows, and mobile checkout.',
    summary:
      'Orbitra Tech builds online stores that help Sri Lankan businesses manage products, take orders, and support customers buying on mobile.',
    intro:
      'An online store needs to fit how your team handles products, payments, and fulfilment. Orbitra Tech plans e-commerce around those day-to-day workflows so customers can browse and order while staff can manage the catalogue and incoming orders.',
    audience: {
      buyers: 'Retailers and established merchants',
      problems: [
        'Orders arrive through WhatsApp, calls, and DMs and get lost',
        'Stock in your shop and online does not match',
        'Customers drop off at checkout or cannot pay the way they want',
        'Your current store platform is expensive or hard for staff to manage',
      ],
    },
    deliverables: [
      {
        title: 'Product catalogue and variants',
        description:
          'Organize products, options, pricing, and stock information in a way your team can maintain.',
      },
      {
        title: 'Checkout and payment flows',
        description:
          'Plan secure checkout and connect payment gateways and invoicing to the agreed store requirements.',
      },
      {
        title: 'Order and inventory tools',
        description:
          'Give staff practical ways to review orders and keep inventory up to date, including on mobile.',
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
      { title: 'Map your selling workflow', description: 'Review products, payment options, fulfilment, and staff tasks.' },
      { title: 'Plan the store', description: 'Agree on catalogue structure, checkout steps, and admin needs.' },
      { title: 'Build and prepare launch', description: 'Connect the store flows, review orders end to end, and prepare launch.' },
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
          'Payment gateway integration can be included after confirming the provider, account access, and technical requirements for your store.',
      },
      {
        question: 'Can my staff manage products and orders?',
        answer:
          'Store projects can include administration tools for product catalogues, stock, and order workflows based on the needs agreed during scoping.',
      },
      {
        question: 'Will the store work on mobile phones?',
        answer:
          'Orbitra plans online stores for mobile buyers, including responsive product pages and checkout flows.',
      },
    ],
  },
  {
    slug: 'digital-transformation-sri-lanka',
    name: 'Business automation & custom software',
    title: 'Custom Software & Business Automation in Sri Lanka',
    metaTitle: 'Custom Software & Business Automation in Sri Lanka',
    linkLabel: 'Business automation in Sri Lanka',
    description:
      'Orbitra Tech builds custom software that replaces spreadsheets and manual workflows for SMEs, using workflow mapping and phased rollouts. Fixed price.',
    summary:
      'Orbitra Tech helps businesses map manual processes and replace spreadsheet, paperwork, and chat-based workflows with practical custom software.',
    intro:
      'Digital transformation does not need to begin with a large platform or a new trend. Orbitra Tech starts by understanding how work moves through your business, then identifies where software can reduce repeated manual steps without disrupting daily operations.',
    audience: {
      buyers: 'Operations managers and business owners',
      problems: [
        'The same data is typed into several spreadsheets or systems',
        'Orders, approvals, or jobs are tracked in WhatsApp chats and notebooks',
        'You cannot see the status of work without asking someone',
        'Off-the-shelf software almost fits, but forces awkward workarounds',
      ],
    },
    deliverables: [
      {
        title: 'Workflow mapping',
        description:
          'Document the current process, handoffs, repeated data entry, and the issues your team wants to solve.',
      },
      {
        title: 'A practical software plan',
        description:
          'Prioritize useful improvements and choose technology around the workflow rather than the other way around.',
      },
      {
        title: 'Phased rollout and handover',
        description:
          'Introduce changes in stages, with training and documentation your team can use and maintain.',
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
      { title: 'Map the work', description: 'Understand the people, tools, and decisions involved in the current process.' },
      { title: 'Prioritize a first step', description: 'Choose a contained improvement that can be delivered and reviewed.' },
      { title: 'Roll out and learn', description: 'Introduce the software in phases and support the team through handover.' },
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
          'It can mean improving a specific business workflow with software, such as reducing spreadsheet-based tracking or making handoffs easier to manage. The right scope depends on the process.',
      },
      {
        question: 'Does Orbitra replace every tool a business already uses?',
        answer:
          'No. Orbitra reviews the current workflow and tools first, then recommends changes where software can solve a clearly identified problem.',
      },
      {
        question: 'How can changes be introduced without stopping operations?',
        answer:
          'Orbitra plans phased rollouts so a team can adopt improvements progressively and review how they work in practice.',
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
