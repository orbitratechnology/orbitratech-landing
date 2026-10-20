import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import {
  CONTACT_EMAIL,
  PHONE_E164,
  SITE_URL,
  WHATSAPP_PHONE,
  siteUrl,
} from '@/lib/constants';
import { SERVICE_PAGES } from '@/lib/service-pages';
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  adjustFontFallback: true,
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fafbfd',
};

const DESCRIPTION =
  'Websites, mobile apps, online stores, and business automation software for growing companies in Sri Lanka and worldwide. Fixed scope, agreed upfront.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Website & App Development in Sri Lanka | Orbitra Tech',
    template: '%s | Orbitra Tech',
  },
  description: DESCRIPTION,
  authors: [
    { name: 'Bilal Ibn Suhair' },
    { name: 'Adhham Safwan', url: 'https://adhham.dev' },
  ],

  icons: {
    icon: '/orbitra_logo.png',
    apple: '/orbitra_logo.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Orbitra Tech',
    title: 'Website & App Development in Sri Lanka | Orbitra Tech',
    description: DESCRIPTION,
    images: ['/orbitra_logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website & App Development in Sri Lanka | Orbitra Tech',
    description: DESCRIPTION,
    images: ['/orbitra_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: 'technology',
};

const ORG_ID = `${SITE_URL}/#organization`;

const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '198/3 Sheikh Jamaldeen Road',
  addressLocality: 'Beruwala',
  addressCountry: 'LK',
};

const SAME_AS = [
  'https://www.linkedin.com/in/orbitra-tech-org-7206523a6',
  'https://www.facebook.com/profile.php?id=61586622600161',
  'https://github.com/orbitratechnology',
];

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': ORG_ID,
  name: 'Orbitra Tech',
  legalName: 'Orbitra Tech (Pvt) Ltd',
  url: siteUrl('/'),
  logo: `${SITE_URL}/orbitra_logo.png`,
  image: `${SITE_URL}/orbitra_logo.png`,
  description: DESCRIPTION,
  email: CONTACT_EMAIL,
  telephone: PHONE_E164,
  address: ADDRESS,
  areaServed: [
    { '@type': 'Country', name: 'Sri Lanka' },
    'Worldwide (remote)',
  ],
  knowsAbout: [
    'Website development',
    'Mobile app development',
    'E-commerce development',
    'Business process automation',
    'Custom software development',
  ],
  makesOffer: SERVICE_PAGES.map((page) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: page.name,
      url: `${SITE_URL}/${page.slug}`,
    },
  })),
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: PHONE_E164,
    email: CONTACT_EMAIL,
    contactType: 'sales',
    areaServed: 'Worldwide',
    availableLanguage: ['English', 'Sinhala'],
    url: `https://wa.me/${WHATSAPP_PHONE}`,
  },
  sameAs: SAME_AS,
  founder: [
    {
      '@type': 'Person',
      name: 'Bilal Ibn Suhair',
      jobTitle: 'Co-Founder & CEO',
      sameAs: [
        'https://www.linkedin.com/in/mohamed-suhair-bilal-ahamed-bb5766344/',
      ],
    },
    {
      '@type': 'Person',
      name: 'Adhham Safwan',
      jobTitle: 'Co-Founder & CTO',
      url: 'https://adhham.dev',
      sameAs: ['https://www.linkedin.com/in/adhham', 'https://x.com/AdhhamDev'],
    },
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: siteUrl('/'),
  name: 'Orbitra Tech',
  description: DESCRIPTION,
  publisher: { '@id': ORG_ID },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={cn('h-full antialiased font-sans', poppins.variable, inter.variable)}>
      <head>
        <meta name='apple-mobile-web-app-title' content='Orbitra Tech' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body className='flex min-h-full flex-col'>
        <a href='#content' className='skip-link'>
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
