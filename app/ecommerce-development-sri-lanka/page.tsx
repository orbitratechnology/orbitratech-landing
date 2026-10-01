import type { Metadata } from 'next';
import ServiceLandingPage from '@/components/ServiceLandingPage';
import { SERVICE_PAGE_BY_SLUG } from '@/lib/service-pages';

const page = SERVICE_PAGE_BY_SLUG['ecommerce-development-sri-lanka'];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `https://orbitratech.net/${page.slug}` },
  openGraph: { title: page.title, description: page.description, url: `https://orbitratech.net/${page.slug}`, type: 'website' },
  twitter: { title: page.title, description: page.description, card: 'summary_large_image' },
};

export default function EcommerceDevelopmentSriLankaPage() {
  return <ServiceLandingPage page={page} />;
}
