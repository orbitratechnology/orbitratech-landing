import type { Metadata } from 'next';
import { DM_Sans, Syne, Geist } from 'next/font/google';
import './globals.css';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const syne = Syne({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://orbitratech.net'),
  title: 'Orbitra Tech - Digital Transformation for Sri Lankan SMEs',
  description:
    'Empowering Sri Lankan SMEs with practical, affordable digital solutions. Web development, mobile apps, e-commerce, and more.',
  keywords:
    'digital transformation, Sri Lanka SMEs, web development Sri Lanka, mobile app development, business digitalization',
  authors: [{ name: 'Adhham Safwan', url: 'https://adhham.dev' }],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/orbitra_logo.png',
    apple: '/orbitra_logo.png',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Orbitra Tech - Digital Transformation for Sri Lankan SMEs',
    description:
      'Empowering Sri Lankan SMEs with practical, affordable digital solutions. Web & mobile development.',
    images: ['/orbitra_logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orbitra Tech - Digital Transformation for Sri Lankan SMEs',
    description:
      'Empowering Sri Lankan SMEs with practical, affordable digital solutions.',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={cn("h-full", "antialiased", syne.variable, dmSans.variable, "font-sans", geist.variable)}>
      <head>
        <meta name='apple-mobile-web-app-title' content='Orbitra Tech' />
      </head>
      <body className='flex min-h-full flex-col'>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Orbitra Tech',
              url: 'https://orbitratech.net',
              logo: 'https://orbitratech.net/orbitra_logo.png',
              description:
                'Empowering Sri Lankan SMEs with practical, affordable digital solutions.',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+94-702-495-311',
                contactType: 'customer service',
                areaServed: 'LK',
                availableLanguage: ['English', 'Sinhala'],
              },
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'LK',
              },
              sameAs: [
                'https://www.linkedin.com/in/orbitra-tech-org-7206523a6',
                'https://www.facebook.com/profile.php?id=61586622600161',
                'https://github.com/orbitratechnology',
              ],
            }),
          }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: 'https://orbitratech.net',
              name: 'Orbitra Tech',
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
