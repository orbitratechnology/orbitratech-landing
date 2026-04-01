import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://orbitratech.net'),
  title: 'Orbitra Tech - Digital Transformation for Sri Lankan SMEs',
  description:
    'Empowering Sri Lankan SMEs with practical, affordable digital solutions. Web development, mobile apps, AI automation, and more.',
  keywords:
    'digital transformation, Sri Lanka SMEs, web development Sri Lanka, mobile app development AI automation, business digitalization',
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
      'Empowering Sri Lankan SMEs with practical, affordable digital solutions. Web development & AI automation.',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${poppins.className} h-full antialiased`}>
      <head>
        <meta name='apple-mobile-web-app-title' content='Orbitra Tech' />
      </head>
      <body className='min-h-full flex flex-col'>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
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
