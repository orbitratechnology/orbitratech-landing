import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import GemFortLegalPage, {
  LegalCallout,
  LegalList,
  LegalParagraph,
  LegalSection,
  LegalSubheading,
  LegalTable,
  type LegalNavItem,
} from '@/components/GemFortLegalPage';
import {
  CONTACT_EMAIL,
  PHONE_DISPLAY,
  PHONE_E164,
  SITE_URL,
  WHATSAPP_PHONE,
} from '@/lib/constants';

// Keep in sync with the "Last updated" line below and PRIVACY_UPDATED in sitemap.ts.
const LAST_UPDATED_ISO = '2026-10-25';
const LAST_UPDATED_LABEL = 'October 25, 2026';

const PAGE_PATH = '/privacy-policy';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const TITLE = 'Privacy Policy | Orbitra Tech (Pvt) Ltd';
const DESCRIPTION =
  'How Orbitra Tech (Pvt) Ltd collects, uses, shares and protects personal data under Sri Lanka’s Personal Data Protection Act No. 9 of 2022. We never sell your data.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: 'Orbitra Tech',
    type: 'article',
    modifiedTime: LAST_UPDATED_ISO,
    images: ['/orbitra_logo.png'],
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
    card: 'summary_large_image',
    images: ['/orbitra_logo.png'],
  },
};

const navItems: LegalNavItem[] = [
  { id: 'who-we-are', text: '1. Who we are' },
  { id: 'information-we-collect', text: '2. Information we collect' },
  { id: 'how-we-use-information', text: '3. How we use your information' },
  { id: 'client-data', text: '4. Data we handle for clients' },
  { id: 'sharing', text: '5. Who we share it with' },
  { id: 'cookies', text: '6. Cookies and analytics' },
  { id: 'retention-and-security', text: '7. Retention and security' },
  { id: 'your-rights', text: '8. Your rights' },
  { id: 'children-changes-contact', text: '9. Children, changes and contact' },
  { id: 'sources', text: 'Sources' },
];

// Answer-first summaries. Each answer is the opening sentence of its section,
// so the FAQPage schema mirrors text that is visible on the page.
const faqs = [
  {
    question: 'What personal data does Orbitra Tech collect?',
    answer:
      'We collect contact, project and payment details you give us, plus basic technical data when you use our website.',
  },
  {
    question: 'How does Orbitra Tech use my personal data?',
    answer:
      'We use your information to deliver the work you hired us for, to get paid and to meet our legal duties. Each use has a lawful basis under Sri Lanka’s Personal Data Protection Act, No. 9 of 2022, as amended.',
  },
  {
    question: 'Does Orbitra Tech sell personal data?',
    answer:
      'No. We share personal data only with service providers who help us do the work, and never sell it.',
  },
  {
    question: 'Who controls the data inside systems Orbitra Tech builds for clients?',
    answer:
      'When we build or run a system for a client, the client controls its users’ data and we act only as their processor.',
  },
  {
    question: 'Does the Orbitra Tech website use cookies?',
    answer:
      'Our website uses essential cookies to work and, with your consent, analytics cookies to see how it is used.',
  },
  {
    question: 'How long does Orbitra Tech keep personal data?',
    answer:
      'We keep personal data only as long as we need it for the purpose it was collected, then delete or anonymise it. Enquiries that do not become projects are kept for up to 12 months, and client project files for the length of the engagement plus 3 years.',
  },
  {
    question: 'How do I access, correct or delete my data held by Orbitra Tech?',
    answer: `Email ${CONTACT_EMAIL} with the subject "Privacy request". You can ask us at any time to see, correct or delete your personal data, and we will reply within 21 working days.`,
  },
];

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Orbitra Tech Privacy Policy',
  description: DESCRIPTION,
  inLanguage: 'en',
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#organization` },
  publisher: { '@id': `${SITE_URL}/#organization` },
  dateModified: LAST_UPDATED_ISO,
  lastReviewed: LAST_UPDATED_ISO,
  breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: PAGE_URL },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

const linkClass =
  'font-semibold text-[var(--color-accent-strong)] underline underline-offset-4';

function EmailLink({ email = CONTACT_EMAIL }: { email?: string }) {
  return (
    <a href={`mailto:${email}`} className={linkClass}>
      {email}
    </a>
  );
}

function Lead({ children }: { children: ReactNode }) {
  return (
    <p className='mb-5 text-[length:var(--text-lg)] font-semibold leading-relaxed text-[var(--color-ink)]'>
      {children}
    </p>
  );
}

function DataTable({
  headings,
  rows,
}: {
  headings: string[];
  rows: ReactNode[][];
}) {
  return (
    <LegalTable>
      <thead className='border-b border-[var(--color-rule)] bg-[var(--color-paper-3)]'>
        <tr>
          {headings.map((heading) => (
            <th key={heading} scope='col' className='px-4 py-4 font-bold text-[var(--color-ink)]'>
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className='divide-y divide-[var(--color-rule)]'>
        {rows.map(([first, ...rest], index) => (
          <tr key={index}>
            <th scope='row' className='px-4 py-4 align-top font-semibold text-[var(--color-ink)]'>
              {first}
            </th>
            {rest.map((cell, cellIndex) => (
              <td key={cellIndex} className='px-4 py-4 align-top text-[var(--color-ink-muted)]'>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </LegalTable>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <GemFortLegalPage
      badge='Orbitra Tech legal'
      title='Privacy Policy'
      description='How Orbitra Tech (Pvt) Ltd collects, uses, shares and protects personal data, and the rights you have under Sri Lanka’s Personal Data Protection Act.'
      asideTitle='In this policy'
      navItems={navItems}
      backHref='/'
      backLabel='Back to home'>
      {[webPageJsonLd, breadcrumbJsonLd, faqJsonLd].map((schema) => (
        <script
          key={schema['@type']}
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <LegalCallout>
        <p className='text-sm text-[var(--color-ink-muted)]'>
          Last updated: <time dateTime={LAST_UPDATED_ISO}>{LAST_UPDATED_LABEL}</time>
          <br />
          Published by Orbitra Tech (Pvt) Ltd · Company number PV 00362568
        </p>
      </LegalCallout>

      <LegalSection id='who-we-are' title='1. Who we are'>
        <Lead>
          Orbitra Tech (Pvt) Ltd (&quot;Orbitra Tech&quot;, &quot;we&quot;,
          &quot;us&quot;) collects only the personal data needed to answer
          enquiries, deliver client projects and run our business, and we never
          sell it.
        </Lead>
        <LegalParagraph>
          We are a private limited company incorporated in Sri Lanka under the
          Companies Act No. 7 of 2007 (company number PV 00362568), based in the
          Kalutara–Beruwala region. We build websites, mobile apps, POS and
          business systems, AI and automation tools, and our own software
          products.
        </LegalParagraph>
        <LegalParagraph>This policy applies to:</LegalParagraph>
        <LegalList>
          <li>Visitors to orbitratech.net and our social media pages</li>
          <li>Prospective and current clients, and the people we deal with at those businesses</li>
          <li>Anyone who contacts us by email, phone, WhatsApp or web form</li>
        </LegalList>
        <LegalParagraph>
          The software we build for clients, and our own products, may have
          their own privacy policies. Where they do, those policies apply to
          that product&apos;s users.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='information-we-collect' title='2. Information we collect'>
        <Lead>
          We collect contact, project and payment details you give us, plus
          basic technical data when you use our website.
        </Lead>
        <DataTable
          headings={['Category', 'Examples', 'Where it comes from']}
          rows={[
            ['Contact details', 'Name, business name, job title, email, phone or WhatsApp number', 'You, when you enquire, book a call or sign an agreement'],
            ['Project information', 'Requirements, briefs, logos, content, product lists, photos, feedback, meeting notes', 'You and your team during a project'],
            ['Account and access details', 'Login access to hosting, domains, app stores, Google Business or ad accounts you share with us', 'You, when a project needs it'],
            ['Billing details', 'Invoice name and address, payment records, bank transfer references', 'You and our bank'],
            ['Communications', 'Emails, WhatsApp and phone messages, support requests', 'You'],
            ['Website usage data', 'IP address, browser and device type, pages visited, referring site, approximate location', 'Automatically, through our website and analytics tools'],
            ['Marketing preferences', 'Whether you want updates from us', 'You'],
          ]}
        />
        <LegalParagraph>
          We do not ask for sensitive data such as health, religious or
          financial account information about you. Please do not send it unless
          a project specifically requires it and we have agreed how it will be
          handled.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='how-we-use-information' title='3. How we use your information'>
        <Lead>
          We use your information to deliver the work you hired us for, to get
          paid and to meet our legal duties. Each use has a lawful basis under
          Sri Lanka&apos;s Personal Data Protection Act, No. 9 of 2022, as
          amended.
        </Lead>
        <DataTable
          headings={['Purpose', 'Lawful basis']}
          rows={[
            ['Answering enquiries and preparing quotes or proposals', 'Steps you asked for before a contract'],
            ['Designing, building, launching and maintaining your project', 'Performance of our contract with you'],
            ['Invoicing, collecting payments and keeping accounts', 'Contract and legal obligation (tax and company law)'],
            ['Providing support, hosting and maintenance', 'Contract'],
            ['Improving our website and services, and keeping them secure', 'Our legitimate interests'],
            ['Sending updates, offers or newsletters', 'Your consent, which you can withdraw at any time'],
            ['Showing a completed project in our portfolio', 'Your consent'],
            ['Responding to legal requests and protecting our rights', 'Legal obligation and legitimate interests'],
          ]}
        />
        <LegalParagraph>
          We do not make decisions about you based solely on automated
          processing that have legal or similarly significant effects.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='client-data' title='4. Data we handle on behalf of clients'>
        <Lead>
          When we build or run a system for a client, the client controls its
          users&apos; data and we act only as their processor.
        </Lead>
        <LegalParagraph>
          This covers data inside the websites, apps, POS, booking, LMS, CRM,
          employee and order systems we build, host or maintain, such as
          customer records, sales, staff details or student information. In
          these cases we:
        </LegalParagraph>
        <LegalList>
          <li>Process the data only on the client&apos;s documented instructions and for the agreed project</li>
          <li>Keep it confidential and limit access to team members who need it</li>
          <li>
            Apply the security measures in{' '}
            <a href='#retention-and-security' className={linkClass}>
              section 7
            </a>
          </li>
          <li>Do not use it for our own marketing or sell it</li>
          <li>Return or delete it when the engagement ends, unless the law requires us to keep it</li>
          <li>Tell the client without undue delay if we become aware of a personal data breach</li>
        </LegalList>
        <LegalParagraph>
          If you are a customer of one of our clients and want to access or
          change your data, please contact that business first. We will help
          them respond.
        </LegalParagraph>
        <LegalParagraph>
          All client work is also covered by our Service Agreement, including
          its confidentiality terms.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='sharing' title='5. Who we share it with'>
        <Lead>
          We share personal data only with service providers who help us do the
          work, and never sell it.
        </Lead>
        <DataTable
          headings={['Type of provider', 'Why', 'Examples']}
          rows={[
            ['Cloud hosting and databases', 'Hosting websites, apps and data', 'Vercel, Firebase, Supabase, Cloudflare'],
            ['Email and productivity', 'Communication and documents', 'Google Workspace'],
            ['Messaging', 'Client communication', 'WhatsApp'],
            ['Analytics', 'Understanding website use', 'Google Analytics or similar'],
            ['Payment and banking', 'Receiving payments', 'Our bank and any payment gateway used'],
            ['App stores and domain registrars', 'Publishing apps and managing domains', 'Apple App Store, Google Play, domain registrars'],
            ['Professional advisers', 'Legal, tax and audit', 'Lawyers, accountants'],
          ]}
        />
        <LegalParagraph>
          We may also disclose data when required by Sri Lankan law, a court or
          a regulator, or as part of a merger or sale of our business.
        </LegalParagraph>

        <LegalSubheading>International transfers</LegalSubheading>
        <LegalParagraph>
          Some of these providers store data outside Sri Lanka, for example in
          the United States, Singapore or the European Union. Where we transfer
          personal data abroad, we rely on providers with strong security and
          contractual safeguards, as required by the PDPA.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='cookies' title='6. Cookies and analytics'>
        <Lead>
          Our website uses essential cookies to work and, with your consent,
          analytics cookies to see how it is used.
        </Lead>
        <LegalList>
          <li>
            <strong>Essential cookies</strong> keep the site secure and working.
            They cannot be switched off.
          </li>
          <li>
            <strong>Analytics cookies</strong> tell us which pages are visited
            and how people find us. We use this in aggregate to improve the
            site.
          </li>
          <li>
            <strong>Marketing cookies</strong>, if used for ads on Google or
            Meta, help us measure campaigns. We set them only with your consent.
          </li>
        </LegalList>
        <LegalParagraph>
          You can accept or reject non-essential cookies through our cookie
          banner and change your choice at any time. You can also block cookies
          in your browser settings, though some features may stop working.
        </LegalParagraph>
      </LegalSection>

      <LegalSection
        id='retention-and-security'
        title='7. How long we keep it and how we protect it'>
        <Lead>
          We keep personal data only as long as we need it for the purpose it
          was collected, then delete or anonymise it.
        </Lead>
        <DataTable
          headings={['Data', 'Kept for']}
          rows={[
            ['Enquiries that do not become projects', 'Up to 12 months'],
            ['Client project files and communications', 'Length of the engagement plus 3 years'],
            ['Invoices and financial records', 'As long as Sri Lankan tax and company law requires'],
            ['Data processed for clients', 'Until the engagement ends, then returned or deleted'],
            ['Marketing contacts', 'Until you unsubscribe'],
            ['Website analytics', 'Up to 26 months'],
          ]}
        />

        <LegalSubheading>Security</LegalSubheading>
        <LegalParagraph>
          We protect data with encrypted connections (HTTPS), access controls
          and two-factor authentication on our accounts, least-privilege access
          for our team, secure hosting providers and regular backups. Login
          credentials you share for a project are stored securely and used only
          for that project; we recommend changing them when the project ends.
        </LegalParagraph>
        <LegalParagraph>
          No system is completely secure. If a personal data breach is likely
          to harm you, we will notify you and the Data Protection Authority of
          Sri Lanka as the law requires.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='your-rights' title='8. Your rights'>
        <Lead>
          You can ask us at any time to see, correct or delete your personal
          data, and we will reply within 21 working days.
        </Lead>
        <LegalParagraph>
          Under the Personal Data Protection Act, No. 9 of 2022 (as amended by
          Act No. 22 of 2025), you have the right to:
        </LegalParagraph>
        <LegalList>
          <li>Access the personal data we hold about you</li>
          <li>Withdraw consent where we rely on it, such as for marketing</li>
          <li>Correct or complete inaccurate data</li>
          <li>Erase your data where we no longer have a lawful reason to keep it</li>
          <li>Object to processing based on our legitimate interests</li>
          <li>Ask for review of any decision made solely by automated means</li>
        </LegalList>
        <LegalParagraph>
          To use these rights, email{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Privacy request')}`}
            className={linkClass}>
            {CONTACT_EMAIL}
          </a>{' '}
          with the subject &quot;Privacy request&quot;. We may ask you to
          confirm your identity first. We will not charge you unless a request
          is clearly excessive.
        </LegalParagraph>
        <LegalParagraph>
          If you are unhappy with our response, you may complain to the{' '}
          <a
            href='https://www.dpa.gov.lk/'
            target='_blank'
            rel='noopener noreferrer'
            className={linkClass}>
            Data Protection Authority of Sri Lanka
          </a>
          .
        </LegalParagraph>
      </LegalSection>

      <LegalSection
        id='children-changes-contact'
        title='9. Children, changes and contact'>
        <LegalSubheading>Children</LegalSubheading>
        <LegalParagraph>
          Our services are for businesses, and we do not knowingly collect
          personal data from anyone under 18. If you believe a child has sent us
          their data, contact us and we will delete it. Systems we build for
          schools or tuition centres are handled under{' '}
          <a href='#client-data' className={linkClass}>
            section 4
          </a>
          , on the institution&apos;s instructions.
        </LegalParagraph>

        <LegalSubheading>Changes to this policy</LegalSubheading>
        <LegalParagraph>
          We may update this policy as our services or the law change. The date
          at the top shows the latest version, and we will tell clients directly
          about significant changes.
        </LegalParagraph>

        <LegalSubheading>Contact us</LegalSubheading>
        <DataTable
          headings={['Contact', 'Details']}
          rows={[
            ['Company', 'Orbitra Tech (Pvt) Ltd, PV 00362568'],
            ['Data protection contact', 'Bilal Ibn Suhair, CEO'],
            [
              'Email',
              <>
                <EmailLink /> (alternative:{' '}
                <EmailLink email='orbitra.technology@gmail.com' />)
              </>,
            ],
            [
              'Phone / WhatsApp',
              <>
                <a href={`tel:${PHONE_E164}`} className={linkClass}>
                  {PHONE_DISPLAY}
                </a>{' '}
                ·{' '}
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={linkClass}>
                  WhatsApp
                </a>
              </>,
            ],
            ['Address', 'Kalutara–Beruwala Region, Sri Lanka'],
            [
              'Website',
              <a key='website' href={`${SITE_URL}/`} className={linkClass}>
                orbitratech.net
              </a>,
            ],
          ]}
        />
      </LegalSection>

      <LegalSection id='sources' title='Sources'>
        <LegalList>
          <li>
            Extraordinary Gazette No. 2498/16, 22 July 2026: key PDPA provisions
            in force from 1 January 2027
          </li>
          <li>
            <a
              href='https://www.dpa.gov.lk/'
              target='_blank'
              rel='noopener noreferrer'
              className={linkClass}>
              Data Protection Authority of Sri Lanka
            </a>
          </li>
        </LegalList>
      </LegalSection>
    </GemFortLegalPage>
  );
}
