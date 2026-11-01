import { CONTENT_UPDATED } from '@/lib/constants';
import { PRODUCT_STATUS_NOTES } from '@/lib/landing-data';
import { PRODUCT_DETAILS, type ProductDetails } from '@/lib/product-data';
import { link, list, markdownDocument, orderedList, section } from '../format';

// Mirrors components/ProductPage.tsx section by section.
export function renderProductPage(product: ProductDetails) {
  const relatedProducts = Object.values(PRODUCT_DETAILS).filter(
    (relatedProduct) => relatedProduct.id !== product.id,
  );

  return markdownDocument({
    title: `${product.title}: ${product.tagline}`,
    summary: product.description,
    path: product.path,
    lastModified: CONTENT_UPDATED,
    sections: [
      `**${product.status}.** ${PRODUCT_STATUS_NOTES[product.status]} ${product.title} is an Orbitra Tech product, not a client project.`,
      section(
        product.promise.title,
        product.promise.body,
        `### Built for\n\n${product.audience}`,
      ),
      section(
        product.pillarsHeading,
        product.pillars
          .map((pillar) => `### ${pillar.title}\n\n${pillar.summary}\n\n${list(pillar.details)}`)
          .join('\n\n'),
      ),
      section(
        product.journeyHeading,
        orderedList(product.journey.map((step) => `**${step.title}**: ${step.description}`)),
      ),
      section(
        product.closingTitle,
        product.closingBody,
        product.legalLinks &&
          list(product.legalLinks.map((legalLink) => link(legalLink.label, legalLink.href))),
      ),
    ],
    related: [
      ...relatedProducts.map((relatedProduct) => ({
        text: `${relatedProduct.title}: ${relatedProduct.tagline}`,
        href: relatedProduct.path,
      })),
      { text: 'Talk to Orbitra', href: '/#contact' },
      { text: 'All Orbitra products', href: '/#products' },
    ],
  });
}
