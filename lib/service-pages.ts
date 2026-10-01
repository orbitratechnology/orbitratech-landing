export type ServicePageData = {
  slug: string;
  name: string;
  title: string;
  description: string;
  summary: string;
  intro: string;
  deliverables: { title: string; description: string }[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export const SERVICE_PAGES: ServicePageData[] = [
  {
    slug: 'website-development-sri-lanka',
    name: 'Website development',
    title: 'Website Development in Sri Lanka',
    description:
      'Fast, mobile-friendly website development in Sri Lanka. Orbitra Tech helps SMEs explain their services, reach customers, and generate enquiries.',
    summary:
      'Orbitra Tech builds business websites in Sri Lanka that explain what you offer, work well on mobile, and help visitors take the next step.',
    intro:
      'Based in Beruwala, Orbitra Tech works with growing businesses to plan, design, and launch marketing websites and product landing pages. The work starts with your customers and business goals, then turns those into a clear page structure and a practical build.',
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
    process: [
      { title: 'Understand', description: 'Review your audience, offer, and current site or materials.' },
      { title: 'Plan and design', description: 'Agree on the page structure, content needs, and visual direction.' },
      { title: 'Build and launch', description: 'Develop, review, and prepare the site for launch with you.' },
    ],
    faqs: [
      {
        question: 'What does website development include?',
        answer:
          'A project can include planning, responsive design, website development, enquiry forms, analytics setup, and launch support. The exact scope is agreed before work starts.',
      },
      {
        question: 'Can Orbitra update an existing business website?',
        answer:
          'Yes. Orbitra can review an existing website and discuss a redesign, new landing pages, or focused improvements based on your goals and current technology.',
      },
      {
        question: 'Where is Orbitra Tech based?',
        answer:
          'Orbitra Tech is based in Beruwala, Sri Lanka, and works remotely with businesses in Sri Lanka and worldwide.',
      },
    ],
  },
  {
    slug: 'mobile-app-development-sri-lanka',
    name: 'Mobile app development',
    title: 'Mobile App Development in Sri Lanka',
    description:
      'Orbitra Tech builds iOS and Android apps for Sri Lankan businesses, with product design, backend integration, and app store submission support.',
    summary:
      'Orbitra Tech plans and builds business mobile apps for iOS and Android, connecting the customer experience to the backend systems the app needs.',
    intro:
      'A useful mobile app starts with a specific customer or operational need. Orbitra Tech helps Sri Lankan businesses shape that need into an app scope, design the important user journeys, and build the app alongside the APIs and authentication it depends on.',
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
    process: [
      { title: 'Scope the app', description: 'Identify users, essential tasks, and the smallest useful release.' },
      { title: 'Design and connect', description: 'Map user journeys and plan app, API, and authentication needs.' },
      { title: 'Build and prepare release', description: 'Develop, review on devices, and prepare store submission materials.' },
    ],
    faqs: [
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
    description:
      'Orbitra Tech develops online stores for Sri Lankan businesses, including product catalogues, payment and inventory flows, and mobile checkout.',
    summary:
      'Orbitra Tech builds online stores that help Sri Lankan businesses manage products, take orders, and support customers buying on mobile.',
    intro:
      'An online store needs to fit how your team handles products, payments, and fulfilment. Orbitra Tech plans e-commerce around those day-to-day workflows so customers can browse and order while staff can manage the catalogue and incoming orders.',
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
    process: [
      { title: 'Map your selling workflow', description: 'Review products, payment options, fulfilment, and staff tasks.' },
      { title: 'Plan the store', description: 'Agree on catalogue structure, checkout steps, and admin needs.' },
      { title: 'Build and prepare launch', description: 'Connect the store flows, review orders end to end, and prepare launch.' },
    ],
    faqs: [
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
    name: 'Digital transformation',
    title: 'Digital Transformation for Sri Lankan SMEs',
    description:
      'Orbitra Tech helps Sri Lankan SMEs replace manual workflows with practical software, using workflow mapping and phased rollouts.',
    summary:
      'Orbitra Tech helps businesses map manual processes and replace suitable spreadsheet or handoff workflows with practical software.',
    intro:
      'Digital transformation does not need to begin with a large platform or a new trend. Orbitra Tech starts by understanding how work moves through your business, then identifies where software can reduce repeated manual steps without disrupting daily operations.',
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
    process: [
      { title: 'Map the work', description: 'Understand the people, tools, and decisions involved in the current process.' },
      { title: 'Prioritize a first step', description: 'Choose a contained improvement that can be delivered and reviewed.' },
      { title: 'Roll out and learn', description: 'Introduce the software in phases and support the team through handover.' },
    ],
    faqs: [
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

export const SERVICE_PAGE_BY_SLUG = Object.fromEntries(
  SERVICE_PAGES.map((page) => [page.slug, page]),
) as Record<string, ServicePageData>;

export const SERVICE_PAGE_BY_NAME: Record<string, ServicePageData> = {
  ...Object.fromEntries(SERVICE_PAGES.map((page) => [page.name, page])),
  'Mobile apps': SERVICE_PAGE_BY_SLUG['mobile-app-development-sri-lanka'],
  'E-commerce': SERVICE_PAGE_BY_SLUG['ecommerce-development-sri-lanka'],
};
