// Homepage section copy. The section components render it as HTML and
// lib/md/renderers/home.ts renders it as markdown, so both stay in step.

export const HERO_TRUST_POINTS = [
  'Fixed scope and price, agreed in writing before work starts',
  'You work directly with the founders who build it',
  'Client work in Sri Lanka, Australia, and the UK',
] as const;

export const PROCESS_STEPS = [
  {
    title: 'Discovery call',
    body: 'Tell us your goals on WhatsApp, email, or a call. We scope what you need and send a fixed price.',
  },
  {
    title: 'Design & build',
    body: 'We prototype, iterate, and ship with clear milestones - no surprise invoices.',
  },
  {
    title: 'Launch & support',
    body: 'Go live with training and handover. Stay on for updates as your business grows.',
  },
] as const;

export const PRICING_QUOTE_STEPS = [
  {
    title: 'Free first conversation',
    body: 'Tell us the problem and what you have tried so far. No brief or preparation needed.',
  },
  {
    title: 'Written scope and fixed price',
    body: 'What is included, what is not, the milestones, and the total — in writing, before any work starts.',
  },
  {
    title: 'Build to the agreed scope',
    body: 'You review the work at each milestone. If something needs to change, we agree the change and its cost with you first.',
  },
] as const;

export const PRICING_COST_FACTORS = [
  'Number of pages, screens, or features',
  'Design complexity and custom interactions',
  'Integrations with payments, accounting, or existing systems',
  'Content: who writes the copy and supplies photos',
  'Security, privacy, and compliance requirements',
  'Hosting, maintenance, and support after launch',
  'Third-party services and licences',
] as const;

export const HOME_FAQS = [
  {
    question: 'How much does a website, app, or custom software project cost?',
    answer:
      'It depends on scope: the number of pages or features, integrations, design complexity, and who supplies the content. After a free first conversation we send a written scope with a fixed price, so you know the total before you commit. If you want a ballpark first, a short description is enough for an indicative range.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'That also depends on scope. Your quote includes a timeline broken into milestones, and you review the work at each one. Well-defined projects move faster, so we often suggest starting with the smallest release that solves the main problem.',
  },
  {
    question: 'I am not sure whether I need a website, an app, or custom software. Can you help?',
    answer:
      'Yes. Describe the problem you want to solve, such as more enquiries, fewer manual steps, or taking orders online, and we will recommend the simplest option that solves it. Sometimes that is a better website rather than an app.',
  },
  {
    question: 'Do you work with businesses outside Sri Lanka?',
    answer:
      'Yes. Orbitra Tech is based in Beruwala, Sri Lanka, and works with clients remotely by video call, email, and WhatsApp. Clients include Event Hero, an Australian events startup, and OncsCare, a UK healthcare platform. Sri Lanka is on UTC+5:30, which overlaps working hours in the Gulf, Europe, and much of Asia-Pacific. We do not have offices outside Sri Lanka.',
  },
  {
    question: 'Who will I actually work with?',
    answer:
      'The founders. Bilal handles scope, communication, and delivery, and Adhham leads architecture and engineering. You talk to the people building your project, not an account manager.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'We train your team and hand over documentation so you are not dependent on us for day-to-day use. If you want ongoing updates, fixes, or new features, that can be included in your quote or arranged later.',
  },
  {
    question: 'What is the difference between your client work and your products?',
    answer:
      'Client work, such as Event Hero and OncsCare, is built for a client and their business. Callnet, Worknet, GemFort, and Hermade are Orbitra’s own products, at stages from planning to beta, and each one is labelled with its current status.',
  },
] as const;

// Plain facts about how Orbitra works. Do not add client counts, project
// totals, or satisfaction scores here unless they can be verified and linked
// to evidence (named clients, case studies, or published reviews).
export const ABOUT_FACTS = [
  {
    title: 'Founder-led',
    body: 'You talk directly to the people who scope and build your project.',
  },
  {
    title: 'One team, every platform',
    body: 'Web, iOS, Android, and the back end they share.',
  },
  {
    title: 'Fixed scope',
    body: 'Price and milestones agreed in writing before work starts.',
  },
  {
    title: 'UTC+5:30',
    body: 'Overlaps working hours in the Gulf, Europe, and much of Asia-Pacific.',
  },
] as const;

export const ABOUT_PRINCIPLES = [
  'Fixed, transparent pricing agreed before work starts',
  'Software your staff can use without a manual',
  'Local context with production-grade engineering',
] as const;

export const FOUNDERS = [
  {
    name: 'Bilal',
    fullName: 'Bilal Ibn Suhair',
    role: 'Co-Founder & CEO',
    bio: 'Leads client strategy, commercial development, and delivery - building Orbitra from zero into a full-service digital engineering firm.',
    onYourProject:
      'Your main point of contact: scoping, quotes, timelines, and keeping delivery on track.',
    image: '/bilal.png',
  },
  {
    name: 'Adhham',
    fullName: 'Adhham Safwan',
    role: 'Co-Founder & CTO',
    bio: 'Architects native mobile and modern web systems - every build meets the bar we would ship for our own products.',
    onYourProject:
      'Owns the technical decisions: architecture, code quality, and how your web and mobile apps are built and released.',
    image: '/adhham.png',
    website: 'https://adhham.dev',
  },
] as const;
