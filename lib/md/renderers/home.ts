import { PAYMENT_LOGOS, TECHNOLOGY_LOGOS } from '@/lib/brand-logos';
import { CLIENT_PROJECTS } from '@/lib/client-projects';
import {
  ADDRESS_DISPLAY,
  CONTACT_EMAIL,
  CONTENT_UPDATED,
  PHONE_DISPLAY,
  RESPONSE_TIME,
  WHATSAPP_PHONE,
} from '@/lib/constants';
import {
  ABOUT_FACTS,
  ABOUT_PRINCIPLES,
  FOUNDERS,
  HERO_TRUST_POINTS,
  HOME_FAQS,
  PRICING_COST_FACTORS,
  PRICING_QUOTE_STEPS,
  PROCESS_STEPS,
} from '@/lib/home-content';
import { LANDING_PRODUCTS, PRODUCT_STATUS_NOTES } from '@/lib/landing-data';
import { SERVICE_PAGE_BY_NAME, SERVICE_PAGES } from '@/lib/service-pages';
import { SERVICES } from '@/lib/services-data';
import { faq, link, list, markdownDocument, orderedList, section } from '../format';

export const HOME_TITLE = 'Orbitra Tech: Website & app development in Sri Lanka';

export const HOME_SUMMARY =
  'Orbitra Tech designs and builds websites, mobile apps, online stores, and business automation for growing companies in Sri Lanka and worldwide. We scope the smallest build that fixes your problem, at a price agreed before we start.';

// Mirrors app/page.tsx in section order. The integration diagram is visual
// only and has no markdown equivalent.
export function renderHome() {
  return markdownDocument({
    title: HOME_TITLE,
    summary: HOME_SUMMARY,
    path: '/',
    lastModified: CONTENT_UPDATED,
    sections: [
      `**Software that wins customers and saves your team hours.**\n\n${list(HERO_TRUST_POINTS)}\n\nNo commitment needed. ${RESPONSE_TIME}`,
      section(
        'Services: what we build for growing businesses',
        'Four services, each priced for the outcome rather than the hours. Find the problem closest to yours.',
        SERVICES.map((service) => {
          const page = SERVICE_PAGE_BY_NAME[service.name];
          return [
            `### ${service.name}`,
            `*${service.tagline}.* ${service.description}`,
            list(service.details),
            page ? `More: ${link(page.linkLabel, `/${page.slug}`)}` : '',
          ]
            .filter(Boolean)
            .join('\n\n');
        }).join('\n\n'),
      ),
      section(
        'Client work: projects we have built for clients',
        'Digital platforms and web applications across events, healthcare, jewellery, gemstones, hospitality, and travel, for clients in Sri Lanka, Australia, and the UK.',
        CLIENT_PROJECTS.map((project) =>
          [
            `### ${project.name}`,
            list(
              [
                `Type: ${project.type}`,
                `Sector: ${project.sector}`,
                project.location && `Location: ${project.location}`,
                project.status && `Status: ${project.status}`,
                project.url ? `Live site: ${link(project.displayUrl ?? project.url, project.url)}` : 'No public link',
              ].filter((item): item is string => Boolean(item)),
            ),
            project.description,
          ].join('\n\n'),
        ).join('\n\n'),
      ),
      section(
        'Our products: products we are building ourselves',
        'Alongside client work, we design and build our own products. They show how we take software from idea to release, and each is labelled with where it honestly stands today.',
        LANDING_PRODUCTS.map((product) =>
          [
            `### ${link(product.title, product.href)} (${product.status})`,
            product.description,
            `What it demonstrates: ${product.demonstrates}`,
            `Status: ${PRODUCT_STATUS_NOTES[product.status]}`,
          ].join('\n\n'),
        ).join('\n\n'),
      ),
      section(
        'How we work with you',
        'A straightforward path from first message to production - built for owners who need results, not jargon.',
        orderedList(PROCESS_STEPS.map((step) => `**${step.title}**: ${step.body}`)),
      ),
      section(
        'Pricing: a fixed price for a clear scope',
        'We do not bill by the hour. Every project is quoted as a fixed price for a written scope, so you know the total before you commit.',
        orderedList(PRICING_QUOTE_STEPS.map((step) => `**${step.title}**: ${step.body}`)),
        `### What affects the price\n\nTwo projects of the same type can cost very different amounts. These are the factors that move a quote up or down.\n\n${list(PRICING_COST_FACTORS)}`,
      ),
      section(
        'How it connects: one platform, every system wired in',
        'We build your website or app as the hub - then connect payments, data, and notifications so your business runs on software, not spreadsheets.',
      ),
      section(
        'Tools we build with',
        'The databases, cloud services, AI APIs, and commerce platforms we build on. These are the tools we use, not client logos.',
        list(TECHNOLOGY_LOGOS.map((logo) => logo.name)),
      ),
      section(
        'Payments: checkout your customers already trust',
        'We integrate card networks, wallets, and local gateways so Sri Lankan SMEs can get paid without friction.',
        list(PAYMENT_LOGOS.map((logo) => (logo.caption ? `${logo.name} (${logo.caption})` : logo.name))),
      ),
      section('What people ask before hiring us', faq(HOME_FAQS)),
      section(
        'About: built in Beruwala for businesses that need practical tech',
        'Orbitra Tech (Pvt) Ltd is a software studio in Beruwala, Sri Lanka. We help growing businesses replace spreadsheets, WhatsApp back-and-forth, and outdated websites with tools that actually run the business. We also build our own products, so we live with the same engineering decisions we recommend.',
        list(ABOUT_FACTS.map((fact) => `**${fact.title}**: ${fact.body}`)),
        `### Why teams work with us\n\nYou get one accountable team from first call to launch - clear scope, honest timelines, and software your staff can use without a manual.\n\n${list(ABOUT_PRINCIPLES)}`,
      ),
      section(
        'Who you will work with',
        'Orbitra is founder-led. The two people below scope, build, and stand behind your project, and they are the people you talk to.',
        FOUNDERS.map(
          (founder) =>
            `### ${founder.fullName}, ${founder.role}\n\n${founder.bio}\n\nOn your project: ${founder.onYourProject}`,
        ).join('\n\n'),
      ),
      section(
        'Contact: tell us what you are trying to fix',
        'A short message is enough to start, and there is no commitment. You do not need to know yet whether you need a website, an app, or custom software.',
        list([
          `Project enquiry form: ${link('orbitratech.net/#contact', '/#contact')}`,
          `Email: ${link(CONTACT_EMAIL, `mailto:${CONTACT_EMAIL}`)}`,
          `Phone & WhatsApp: ${PHONE_DISPLAY} (${link('WhatsApp', `https://wa.me/${WHATSAPP_PHONE}`)})`,
          `Address: ${ADDRESS_DISPLAY}`,
          RESPONSE_TIME,
        ]),
      ),
    ],
    related: SERVICE_PAGES.map((page) => ({ text: page.linkLabel, href: `/${page.slug}` })),
  });
}
