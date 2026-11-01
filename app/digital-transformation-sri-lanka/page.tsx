import type { Metadata } from 'next';
import ServiceLandingPage from '@/components/ServiceLandingPage';
import { markdownAlternates } from '@/lib/page-metadata';
import { SERVICE_PAGE_BY_SLUG } from '@/lib/service-pages';

const page = SERVICE_PAGE_BY_SLUG['digital-transformation-sri-lanka'];

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.description,
  alternates: markdownAlternates(`/${page.slug}`),
  other: { 'ai-summary': page.summary },
  openGraph: {
    title: `${page.metaTitle} | Orbitra Tech`,
    description: page.description,
    url: `/${page.slug}`,
    type: 'website',
  },
  twitter: {
    title: `${page.metaTitle} | Orbitra Tech`,
    description: page.description,
    card: 'summary_large_image',
  },
};

export default function DigitalTransformationSriLankaPage() {
  return <ServiceLandingPage page={page} />;
}
