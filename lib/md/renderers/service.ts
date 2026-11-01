import { CLIENT_PROJECT_BY_ID } from '@/lib/client-projects';
import { CONTENT_UPDATED } from '@/lib/constants';
import { LANDING_PRODUCTS, PRODUCT_STATUS_NOTES } from '@/lib/landing-data';
import { INTERNATIONAL_FAQ, SERVICE_PAGES, type ServicePageData } from '@/lib/service-pages';
import { faq, link, list, markdownDocument, orderedList, section } from '../format';

// Mirrors components/ServiceLandingPage.tsx section by section.
export function renderServicePage(page: ServicePageData) {
  const evidenceProjects = (page.evidence?.clientProjectIds ?? []).map(
    (id) => CLIENT_PROJECT_BY_ID[id],
  );
  const evidenceProducts = LANDING_PRODUCTS.filter((product) =>
    page.evidence?.productIds?.includes(product.id),
  );
  const contactHref = `/?service=${page.slug.replace(/-sri-lanka$/, '')}#contact`;

  return markdownDocument({
    title: page.title,
    summary: page.summary,
    path: `/${page.slug}`,
    lastModified: CONTENT_UPDATED,
    sections: [
      `Orbitra Tech · Beruwala, Sri Lanka · Remote worldwide\n\n${page.intro}`,
      section(
        `Who this is for: ${page.audience.buyers}`,
        'If any of these sound familiar, this service is a good place to start.',
        list(page.audience.problems),
      ),
      section(
        'What the work can include',
        page.deliverables.map((item) => `### ${item.title}\n\n${item.description}`).join('\n\n'),
      ),
      section(
        'How we work: from the real problem to a useful first release',
        'You work directly with Orbitra’s founders, with a clear scope and a fixed price agreed before work starts.',
        orderedList(page.process.map((step) => `**${step.title}**: ${step.description}`)),
      ),
      section(
        'Pricing: a fixed price for a written scope',
        'After a free first conversation, you get a written scope with a fixed price and milestones. Nothing is billed by the hour, and changes are agreed with you before they are made. A short description is enough for an indicative range.',
        `### What affects the price\n\n${list(page.costFactors)}`,
      ),
      page.evidence &&
        section(
          'Proof of work: what we have built',
          page.evidence.body,
          evidenceProjects.length > 0 &&
            list(
              evidenceProjects.map(
                (project) =>
                  `${project.url ? link(project.name, project.url) : project.name} (client work, ${project.type}${project.location ? `, ${project.location}` : ''}): ${project.description}`,
              ),
            ),
          evidenceProducts.length > 0 &&
            list(
              evidenceProducts.map(
                (product) =>
                  `${link(product.title, product.href)} (Orbitra product · ${product.status}): ${PRODUCT_STATUS_NOTES[product.status]}`,
              ),
            ),
        ),
      section(
        `Common questions about ${page.name.toLowerCase()} with Orbitra`,
        faq([...page.faqs, INTERNATIONAL_FAQ]),
      ),
      section(
        'Tell us what you are trying to fix',
        'Share the business problem and what you have tried so far. There is no commitment, and you do not need a technical brief.',
        link('Discuss your project', contactHref),
      ),
    ],
    related: [
      ...SERVICE_PAGES.filter((other) => other.slug !== page.slug).map((other) => ({
        text: other.linkLabel,
        href: `/${other.slug}`,
      })),
      { text: 'How pricing works', href: '/#pricing' },
    ],
  });
}
