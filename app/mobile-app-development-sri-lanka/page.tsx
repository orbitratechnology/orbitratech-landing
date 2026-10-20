import type { Metadata } from 'next';
import ServiceLandingPage from '@/components/ServiceLandingPage';
import { SERVICE_PAGE_BY_SLUG } from '@/lib/service-pages';

const page = SERVICE_PAGE_BY_SLUG['mobile-app-development-sri-lanka'];

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.description,
  alternates: { canonical: `/${page.slug}` },
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

export default function MobileAppDevelopmentSriLankaPage() {
  return <ServiceLandingPage page={page} />;
}
