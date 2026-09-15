import type { Metadata } from 'next';
import Link from 'next/link';

import GemFortLegalPage, {
  LegalCallout,
  LegalList,
  LegalParagraph,
  LegalSection,
  LegalSubheading,
  type LegalNavItem,
} from '@/components/GemFortLegalPage';

export const metadata: Metadata = {
  title: 'Terms and Conditions | GemFort by Orbitra Tech',
  description:
    'Terms and Conditions for GemFort, including GemNet, GemTrack, public listings, verification, user content, third-party services, account deletion, and liability.',
};

const navItems: LegalNavItem[] = [
  { id: 'agreement', text: '1. Agreement' },
  { id: 'eligibility', text: '2. Eligibility and authority' },
  { id: 'service', text: '3. The Service' },
  { id: 'accounts', text: '4. Accounts and verification' },
  { id: 'public-content', text: '5. Public profiles and dealings' },
  { id: 'gemtrack', text: '6. GemTrack records' },
  { id: 'contacts-files', text: '7. Contacts and files' },
  { id: 'third-party', text: '8. Flights and third parties' },
  { id: 'acceptable-use', text: '9. Acceptable use' },
  { id: 'user-content', text: '10. User content' },
  { id: 'enforcement', text: '11. Reports and enforcement' },
  { id: 'fees', text: '12. Fees and charges' },
  { id: 'intellectual-property', text: '13. Intellectual property' },
  { id: 'privacy', text: '14. Privacy' },
  { id: 'disclaimers', text: '15. Availability and disclaimers' },
  { id: 'liability', text: '16. Limitation of liability' },
  { id: 'indemnity', text: '17. Indemnity' },
  { id: 'termination', text: '18. Termination and deletion' },
  { id: 'governing-law', text: '19. Governing law' },
  { id: 'changes', text: '20. Changes' },
  { id: 'general', text: '21. General' },
  { id: 'contact', text: '22. Contact' },
];

export default function GemFortTermsAndConditions() {
  return (
    <GemFortLegalPage
      badge='GemFort legal'
      title='Terms and Conditions'
      description='These terms govern access to GemFort, GemNet, GemTrack, public GemFort links, and related services. Read them before using the Service.'
      asideTitle='Agreement sections'
      navItems={navItems}>
      <LegalCallout>
        <p className='text-sm text-[var(--color-ink-muted)]'>
          Effective date: September 16, 2026
          <br />
          Last updated: September 16, 2026
        </p>
      </LegalCallout>

      <LegalSection id='agreement' title='1. Agreement'>
        <LegalParagraph>
          These Terms and Conditions govern your access to and use of the
          GemFort mobile applications, public GemFort links, GemNet, GemTrack,
          and related services (the &quot;Service&quot;). The Service is provided by
          Orbitra Tech (Pvt) Ltd, based at 198/3 Sheikh Jamaldeen Road,
          Beruwala, Sri Lanka (&quot;GemFort&quot;,
          &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
        </LegalParagraph>
        <LegalParagraph>
          By creating an account, accessing a protected feature, publishing
          content, or using the Service, you agree to these Terms and the{' '}
          <Link
            href='/gemfort/privacy-policy'
            className='font-semibold text-[var(--color-accent-strong)] underline underline-offset-4'>
            GemFort Privacy Policy
          </Link>
          , which explains how personal data is handled. If you do not agree, do
          not use the Service.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='eligibility' title='2. Eligibility and authority'>
        <LegalParagraph>
          You must be legally able to enter a binding contract and use the
          Service lawfully in your country. If you use GemFort for a business,
          you represent that you have authority to bind that business. GemFort
          is not directed to children and is limited to users aged 18 or older.
        </LegalParagraph>
        <LegalParagraph>
          You must provide accurate information, keep it current, and use only
          your own account. Do not create an account for another person without
          authority, impersonate another person or business, or allow someone
          else to use your authentication factors.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='service' title='3. The Service'>
        <LegalParagraph>GemFort provides software for:</LegalParagraph>
        <LegalList>
          <li>a public directory and listing network for gem-trade businesses;</li>
          <li>business profiles, verification workflows, badges, announcements, reports, and service requests;</li>
          <li>private inventory and operational records for gems, AP stones, service work, amounts, cheques, bills, trips, expenses, contacts, and related business activity;</li>
          <li>communication and workflow notifications; and</li>
          <li>flight search and links to third-party travel sites.</li>
        </LegalList>
        <LegalParagraph>
          Features, roles, limits, availability, and eligibility may vary by
          country, account status, device, and verification level. We may add,
          remove, suspend, or change features where reasonably necessary to
          operate, secure, or improve the Service or comply with law.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='accounts' title='4. Accounts, verification, and security'>
        <LegalParagraph>
          GemFort supports email/password, Google, Apple, and phone-based
          authentication. You are responsible for your credentials, device
          security, and activity under your account. Tell us promptly if you
          suspect unauthorised access.
        </LegalParagraph>
        <LegalParagraph>
          Some features require phone verification, manual identity or business
          verification, or an approved trader or lapidary role. A verification
          badge, NGJA signal, business-registration detail, profile, or approval
          means only that GemFort completed the applicable workflow using
          information available to it. It is not a guarantee of identity,
          licensing, gem authenticity, ownership, title, quality, treatment
          status, valuation, solvency, safety, or legal compliance.
        </LegalParagraph>
        <LegalParagraph>
          We may request documents, suspend review, decline verification, revoke
          a badge, restrict features, or ask for updated information. You must
          not submit forged, misleading, stolen, or unlawfully obtained
          documents.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='public-content' title='5. Public profiles, listings, and user dealings'>
        <LegalParagraph>
          You decide whether to publish a business profile or public listing,
          but published content may be visible to visitors without an
          account and may be shared through public links. Public content can
          include business name, owner or display name, description, services,
          photos, listing attributes, price information, public contact
          channels, social links, and a map location. Do not place confidential
          registration, tax, identity, financial, or counterparty information
          in a public field.
        </LegalParagraph>
        <LegalParagraph>
          GemFort is a technology platform. Unless a separate written agreement
          says otherwise, GemFort is not the seller, buyer, broker, agent,
          lapidary, certifier, carrier, insurer, lender, escrow provider,
          payment processor, or party to a transaction between users. GemFort
          does not take custody of gems or money and does not facilitate,
          process, settle, or guarantee any user-to-user transaction. Any
          dealings between users take place independently of GemFort.
        </LegalParagraph>
        <LegalParagraph>
          You must independently verify identity, licences, ownership, title,
          authenticity, quality, weight, treatment, origin, price, tax,
          import/export status, delivery, insurance, payment instructions, and
          all other transaction terms. Use qualified professionals and official
          certificate or regulatory sources where appropriate.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='gemtrack' title='6. GemTrack records and financial information'>
        <LegalParagraph>
          GemTrack is a recordkeeping and workflow tool. It does not provide
          banking, accounting, tax, investment, valuation, legal, insurance,
          credit, or financial advice. Entered amounts, profit calculations,
          currency conversions, exchange rates, due dates, cheque statuses,
          reminders, and reports may be incomplete, delayed, or wrong. You
          remain responsible for source documents, reconciliations, backups,
          tax filings, decisions about dealings outside GemFort, and compliance.
        </LegalParagraph>
        <LegalParagraph>
          GemFort does not guarantee the validity, negotiability, clearance,
          payment, or replacement of a cheque, nor the accuracy of a
          counterparty&apos;s information. Do not use the Service as your only record
          of a legally or financially important matter.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='contacts-files' title='7. Contacts and uploaded files'>
        <LegalParagraph>
          If you import contacts, attach contact photos, or upload documents,
          you represent that you have the necessary authority and that the use
          is lawful. You must not use GemFort to harass, spam, surveil, profile,
          or unlawfully contact people. You must not upload malware, secrets
          that you are not authorised to disclose, or another person&apos;s identity
          or financial documents without a lawful basis.
        </LegalParagraph>
        <LegalParagraph>
          You are responsible for the accuracy, legality, consent, and security
          of your content and for complying with applicable data-protection,
          telecommunications, banking, export, sanctions, consumer,
          intellectual-property, and recordkeeping laws.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='third-party' title='8. Flights and third-party services'>
        <LegalParagraph>
          Flight search results, availability, prices, schedules, airline
          information, booking links, and travel terms come from third parties
          and can change without notice. GemFort does not issue tickets, take
          booking payments, guarantee availability, or control cancellations,
          refunds, baggage, visas, delays, or travel safety. A booking link may
          be an affiliate link, meaning GemFort or an affiliate may receive
          compensation if you use it. Your transaction is with the third-party
          provider and is subject to that provider&apos;s terms and privacy policy.
        </LegalParagraph>
        <LegalParagraph>
          The Service may also link to external certificate portals, maps,
          social sites, messaging services, and other websites. GemFort does not
          control or endorse third-party content, availability, security, or
          data practices.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='acceptable-use' title='9. Acceptable use'>
        <LegalParagraph>You must not:</LegalParagraph>
        <LegalList>
          <li>break the law or use GemFort for fraud, money laundering, sanctions evasion, smuggling, stolen goods, or unlawful gem trading;</li>
          <li>misrepresent identity, business authority, verification status, licences, origin, treatment, weight, quality, price, ownership, availability, or transaction history;</li>
          <li>upload or publish content that is unlawful, defamatory, threatening, hateful, deceptive, invasive of privacy, sexually exploitative, or infringing;</li>
          <li>collect, scrape, copy, index, resell, or bulk-export profiles, listings, contacts, or other data except as permitted by the Service and law;</li>
          <li>use imported contacts to build an unauthorised contact database or send unsolicited messages;</li>
          <li>bypass authentication, App Check, access controls, rate limits, verification, moderation, or deletion controls;</li>
          <li>probe, scan, reverse engineer, decompile, interfere with, overload, or introduce malicious code into the Service;</li>
          <li>use automated access or bots without our written permission;</li>
          <li>submit documents or media that you do not have the right to use;</li>
          <li>manipulate engagement counters, offers, reports, reviews, badges, or listing visibility; or</li>
          <li>use GemFort to provide professional advice or regulated services without the licences and disclosures required by law.</li>
        </LegalList>
      </LegalSection>

      <LegalSection id='user-content' title='10. User content and licence'>
        <LegalParagraph>
          You retain ownership of content you submit. You grant GemFort a
          worldwide, non-exclusive, royalty-free licence to host, store,
          reproduce, format, process, display, transmit, and make that content
          available as necessary to operate, secure, support, and improve the
          Service and to show content to the audiences and counterparties you
          select. This licence ends when the content is deleted, except for
          copies retained in backups, audit records, legal evidence, or
          shared/public copies that cannot reasonably be recalled.
        </LegalParagraph>
        <LegalParagraph>
          You represent that you have all rights, permissions, consents, and
          legal bases needed for your content and this licence. You are
          responsible for claims arising from your content or your use of it.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='enforcement' title='11. Reports, moderation, and enforcement'>
        <LegalParagraph>
          You may report suspected fraud, abuse, inaccurate information, or
          policy violations through available features. A report is an
          allegation, not a finding. We may investigate, request evidence, limit
          visibility, remove content, contact relevant parties, notify
          authorities, revoke verification, or take no action based on the
          information and risk available to us.
        </LegalParagraph>
        <LegalParagraph>
          We may warn, restrict, suspend, or terminate an account or feature if
          we reasonably believe you breached these Terms, created risk, supplied
          false information, threatened safety, or exposed GemFort or another
          person to legal or operational harm. Where appropriate, we may provide
          a reason and an appeal or support route, subject to security, fraud,
          legal, and confidentiality limits.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='fees' title='12. Fees and third-party charges'>
        <LegalParagraph>
          GemFort is provided without a GemFort fee. GemFort does not offer
          subscriptions, paid features, in-app purchases, checkout, wallets,
          escrow, payment processing, or user-to-user transaction services, and
          does not receive or hold transaction funds. Third-party providers may
          charge separately for mobile data, SMS, app-store, map, travel,
          booking, or other services outside GemFort.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='intellectual-property' title='13. Intellectual property'>
        <LegalParagraph>
          GemFort and its software, names, logos, designs, interfaces,
          documentation, and underlying technology are owned by GemFort or its
          licensors and are protected by applicable law. We grant you a limited,
          revocable, non-transferable, non-exclusive right to use the Service
          for its intended purpose while you comply with these Terms. You may
          not copy, modify, distribute, sell, lease, sublicense, or create
          derivative works from GemFort except as allowed by law or written
          permission.
        </LegalParagraph>
        <LegalParagraph>
          Third-party names, marks, data, maps, images, and services belong to
          their respective owners.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='privacy' title='14. Privacy'>
        <LegalParagraph>
          Our{' '}
          <Link
            href='/gemfort/privacy-policy'
            className='font-semibold text-[var(--color-accent-strong)] underline underline-offset-4'>
            Privacy Policy
          </Link>{' '}
          describes the data GemFort collects and processes, including account
          data, verification documents, public profiles, workspace records,
          contacts, location, notifications, uploads, and flight searches.
          Review it before using features that require sensitive data or device
          permissions.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='disclaimers' title='15. Availability and disclaimers'>
        <LegalParagraph>
          The Service is provided on an &quot;as available&quot; and &quot;as is&quot; basis to the
          maximum extent permitted by law. We do not promise that it will always
          be available, uninterrupted, secure, accurate, current, error-free,
          compatible with every device, or free of harmful components. We do not
          promise that public content, verification, a listing, a report, a
          notification, a calculation, a search result, or a third-party
          service will produce a particular result.
        </LegalParagraph>
        <LegalParagraph>
          Nothing in these Terms excludes a warranty, right, remedy, or
          liability that cannot lawfully be excluded or limited. You should not
          rely on GemFort alone for emergency communication, safety, custody,
          settlement, legal compliance, financial records, or any transaction
          of material value.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='liability' title='16. Limitation of liability'>
        <LegalParagraph>
          To the maximum extent permitted by law, GemFort and its officers,
          employees, contractors, licensors, and service providers will not be
          liable for indirect, incidental, special, consequential, exemplary,
          punitive, or loss-of-profit, loss-of-data, loss-of-goodwill,
          loss-of-business, loss-of-opportunity, or transaction losses arising
          from or related to the Service, user content, user dealings,
          verification, public disclosure, third-party services, travel, device
          permissions, account compromise, suspension, or deletion.
        </LegalParagraph>
        <LegalParagraph>
          To the maximum extent permitted by law, for direct loss proven to
          have been caused by GemFort&apos;s breach of
          these Terms, GemFort&apos;s total aggregate liability is limited to the
          lesser of the proven direct loss and LKR 25,000. This is a risk-
          allocation term for a free service, not a fee, payment, or refund
          policy. It does not exclude or limit liability, rights, or remedies
          that cannot lawfully be excluded or limited, including applicable
          liability for fraud, wilful misconduct, or death or personal injury
          caused by negligence.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='indemnity' title='17. Indemnity'>
        <LegalParagraph>
          To the maximum extent permitted by law, you agree to defend,
          indemnify, and hold harmless GemFort and its officers, employees,
          contractors, licensors, and service providers from claims, losses,
          liabilities, costs, and expenses arising from your content, your
          dealings with another user, your violation of these Terms or law, your
          misuse of personal data, or your infringement of another person&apos;s
          rights. We may take control of the defence of a claim for which you
          must indemnify us, and you will reasonably cooperate.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='termination' title='18. Suspension, termination, and account deletion'>
        <LegalParagraph>
          You may stop using GemFort and request account deletion through
          in-app account settings or the{' '}
          <Link
            href='/gemfort/delete-account'
            className='font-semibold text-[var(--color-accent-strong)] underline underline-offset-4'>
            GemFort account deletion page
          </Link>
          . Deletion is intended to remove your account and associated data,
          subject to legal retention, shared records, fraud or security
          evidence, backups, and third-party copies. Review the Privacy Policy
          for the current retention and deletion rules.
        </LegalParagraph>
        <LegalParagraph>
          We may suspend or terminate access as described in Section 11.
          Sections concerning user content, intellectual property, privacy,
          disclaimers, liability, indemnity, disputes, and any rights that by
          their nature should survive will continue after termination.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='governing-law' title='19. Governing law and disputes'>
        <LegalParagraph>
          These Terms are governed by the laws of Sri Lanka. Before starting
          court proceedings, send a written complaint to{' '}
          <a
            href='mailto:orbitra.technology@gmail.com'
            className='font-semibold text-[var(--color-accent-strong)] underline underline-offset-4'>
            orbitra.technology@gmail.com
          </a>{' '}
          and allow 30 days for good-faith resolution. Subject to mandatory
          consumer and data-protection rights, the courts in Kalutara District,
          Sri Lanka, have exclusive jurisdiction. No arbitration requirement
          applies.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='changes' title='20. Changes to these Terms'>
        <LegalParagraph>
          We may update these Terms when the Service, law, or business changes.
          We will post the updated version with a new &quot;Last updated&quot; date and
          provide additional notice where required. If you continue to use the
          Service after the effective date, the updated Terms apply to the
          extent permitted by law. If you do not accept an update, stop using
          the Service and request deletion if appropriate.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='general' title='21. General'>
        <LegalParagraph>
          If a provision is held invalid, the remaining provisions remain
          effective. Our failure to enforce a provision is not a waiver. You may
          not assign these Terms without our consent; we may assign them in
          connection with a reorganisation, financing, sale, or transfer of the
          Service. These Terms, the Privacy Policy, and any feature-specific
          terms form the agreement between you and GemFort about the Service,
          subject to any mandatory law.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='contact' title='22. Contact'>
        <LegalCallout>
          <p className='font-semibold'>Legal and support questions</p>
          <a
            href='mailto:orbitra.technology@gmail.com'
            className='mt-2 inline-block text-[var(--color-accent-strong)] underline underline-offset-4'>
            orbitra.technology@gmail.com
          </a>
          <p className='mt-4'>
            GemFort by Orbitra Tech · 198/3 Sheikh Jamaldeen Road, Beruwala,
            Sri Lanka
          </p>
          <p className='mt-4 text-xs text-[var(--color-ink-muted)]'>
            Controller/operator: Orbitra Tech (Pvt) Ltd.
          </p>
        </LegalCallout>
      </LegalSection>
    </GemFortLegalPage>
  );
}
