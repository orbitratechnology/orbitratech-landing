import type { Metadata } from 'next';
import Link from 'next/link';

import GemFortLegalPage, {
  LegalCallout,
  LegalList,
  LegalParagraph,
  LegalSection,
  LegalSubheading,
  LegalTable,
  type LegalNavItem,
} from '@/components/GemFortLegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | GemFort by Orbitra Tech',
  description:
    'Privacy Policy for GemFort, including GemNet, GemTrack, account data, public profiles, workspace records, contacts, location, uploads, and deletion.',
};

const navItems: LegalNavItem[] = [
  { id: 'who-we-are', text: '1. Who we are' },
  { id: 'what-gemfort-does', text: '2. What GemFort does' },
  { id: 'data-we-collect', text: '3. Personal data we collect' },
  { id: 'how-we-use-data', text: '4. How we use data' },
  { id: 'grounds-and-permissions', text: '5. Grounds and permissions' },
  { id: 'sharing', text: '6. When we share data' },
  { id: 'international-processing', text: '7. International processing' },
  { id: 'retention-and-deletion', text: '8. Retention and deletion' },
  { id: 'rights-and-choices', text: '9. Your rights and choices' },
  { id: 'security', text: '10. Security' },
  { id: 'children', text: '11. Children' },
  { id: 'third-party-services', text: '12. Third-party services' },
  { id: 'changes', text: '13. Changes' },
  { id: 'contact', text: '14. Contact' },
];

export default function GemFortPrivacyPolicy() {
  return (
    <GemFortLegalPage
      badge='Audit-reviewed draft'
      title='Privacy Policy'
      description='GemFort by Orbitra Tech. This policy explains what data GemFort collects, how it is used, when it is shared, and how you can request deletion.'
      asideTitle='In this policy'
      navItems={navItems}>
      <LegalCallout tone='warning'>
        <strong>Draft for review.</strong> This page is based on the September
        2026 code, security, and cloud audit. The final legal entity,
        retention schedule, and jurisdiction-specific wording still require
        legal review.
        <span className='mt-2 block'>
          Last updated: September 16, 2026
        </span>
      </LegalCallout>

      <LegalSection id='who-we-are' title='1. Who we are'>
        <LegalParagraph>
          GemFort is a product of Orbitra Tech, based at 198/3 Sheikh Jamaldeen
          Road, Beruwala, Sri Lanka. GemFort provides a gem-trade directory and
          listing service called GemNet and a private business workspace called
          GemTrack for traders, lapidaries, and related businesses. GemFort does
          not process payments, subscriptions, or user-to-user transactions.
        </LegalParagraph>
        <LegalParagraph>
          For privacy requests or questions, email{' '}
          <a
            href='mailto:orbitra.technology@gmail.com'
            className='font-semibold text-[var(--color-accent-strong)] underline underline-offset-4'>
            orbitra.technology@gmail.com
          </a>
          . This policy applies to the GemFort mobile applications, public
          GemFort links, and related services. It does not govern third-party
          sites or services that GemFort links to.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='what-gemfort-does' title='2. What GemFort does'>
        <LegalParagraph>
          Depending on your role and choices, GemFort lets you:
        </LegalParagraph>
        <LegalList>
          <li>browse public business profiles, gem listings, announcements, and external certificate-verification portals without an account;</li>
          <li>create a trader or lapidary account using email/password, Google, Apple, or phone verification where offered;</li>
          <li>apply for manual identity or business verification using business and identity documents;</li>
          <li>publish a business profile, contact channels, location, services, photos, and gem listings;</li>
          <li>manage private gem inventory, stones, costs, services, account balances, payment obligations, cheques, bills, trips, receipts, and contacts;</li>
          <li>create or respond to service requests, offers, custody and AP records, sale or transfer records, fraud reports, and other listing or business interactions; any actual user dealings occur outside GemFort;</li>
          <li>receive in-app and push notifications; and</li>
          <li>search for flights and follow third-party booking links.</li>
        </LegalList>
      </LegalSection>

      <LegalSection id='data-we-collect' title='3. Personal data we collect'>
        <LegalParagraph>
          We collect data you provide, data created by your use of GemFort, and
          data received from services you choose to connect.
        </LegalParagraph>

        <LegalSubheading>A. Account and authentication data</LegalSubheading>
        <LegalParagraph>
          This may include your name, email address, phone number,
          authentication-provider identifiers, role, verification status,
          preferred language and currency, date of birth where required for
          verification, account status, notification preferences, and account
          timestamps. Passwords are handled by the authentication provider and
          are not stored in the GemFort application database as readable
          passwords.
        </LegalParagraph>
        <LegalParagraph>
          When you use Google, Apple, or phone sign-in, we receive the account
          information that the provider makes available for authentication and
          account setup. Phone verification may involve your phone number, a
          one-time code, device or carrier verification signals, and
          authentication security data.
        </LegalParagraph>

        <LegalSubheading>B. Business and public-profile data</LegalSubheading>
        <LegalParagraph>
          If you create or manage a business profile, we may collect the
          business name, owner name, business type, registration or licence
          identifiers, NGJA-related information, tax identifier, year
          established, description, address, city, district, province, country,
          map coordinates, public contact channels, social links, services,
          specialisations, price ranges, logos, cover images, gallery images,
          verification badges, and profile or listing engagement counters.
        </LegalParagraph>
        <LegalParagraph>
          Verified active business profiles and public listings are
          designed to be visible to other users or visitors. If you publish a
          phone number, WhatsApp number, email address, website, social link,
          address, or exact map pin, it may be copied, indexed, shared, or used
          to contact you outside GemFort. Do not publish information that must
          remain confidential. Some legacy listings may remain readable by link
          until their access controls and existing records are corrected.
        </LegalParagraph>

        <LegalSubheading>C. Verification and fraud-prevention data</LegalSubheading>
        <LegalParagraph>
          For manual verification or fraud handling, we may collect your date
          of birth, business registration information, NGJA number, gem licence
          number, tax identifier, national identity document image,
          business-registration image, licence image, tax or address proof,
          business photos, other documents, submitted explanations, fraud
          reports, evidence files, review decisions, and administrative audit
          records.
        </LegalParagraph>
        <LegalParagraph>
          Verification documents are sensitive information. They are intended
          for restricted access by the applicant and authorised GemFort
          administrators, and for the verification, safety, fraud-prevention,
          and legal-compliance purposes described here. Public profile reads do
          not include these private identifiers or documents.
        </LegalParagraph>

        <LegalSubheading>D. GemTrack workspace and business-record data</LegalSubheading>
        <LegalParagraph>
          GemTrack may contain confidential business records, including gem and
          AP-stone attributes, origin, mine, acquisition method and date,
          weights, colour, clarity, cut, shape, natural or treatment status,
          current location and custody, costs, asking, minimum, and sale
          prices, counterparties, profit information, private notes, tags,
          photos, service instructions, job records, bills, receivables,
          payables, payment records, cheque numbers and bank details, trip
          destinations and dates, cash or budget information, expenses,
          receipts, and related identifiers.
        </LegalParagraph>
        <LegalParagraph>
          These records are intended for your private workspace, except when
          you deliberately share a record with a counterparty or use a GemFort
          flow that gives another participant access. Counterparties may see the
          data needed for a shared AP, service, offer, or business record. Any
          underlying purchase, sale, payment, or settlement occurs outside
          GemFort.
        </LegalParagraph>

        <LegalSubheading>E. Contacts</LegalSubheading>
        <LegalParagraph>
          If you choose to import phone contacts, GemFort can read selected
          contact names, company names, phone numbers, email addresses, contact
          photos, and device contact identifiers. Imported contact records and
          selected contact photos are stored in your GemTrack workspace and can
          be linked to a GemFort business.
        </LegalParagraph>
        <LegalParagraph>
          Only import contacts when you have the authority to do so. The people
          in your address book may not use GemFort and may not know that you
          stored their information in your workspace. You are responsible for
          using imported contact information lawfully and fairly.
        </LegalParagraph>

        <LegalSubheading>F. Photos, documents, and other files</LegalSubheading>
        <LegalParagraph>
          When you choose to upload media or documents, we process the selected
          local file and store it in Firebase Cloud Storage. This can include
          gem photos, business logos and gallery images, verification documents,
          cheque images, trip or expense receipts, contact photos, and other
          files supported by the relevant feature.
        </LegalParagraph>

        <LegalSubheading>G. Location</LegalSubheading>
        <LegalParagraph>
          GemFort requests foreground location only when you choose to use
          location features. It can obtain a one-time device location,
          reverse-geocode it into a place label, and save the coordinates and
          place details to a business profile. A business map pin can be
          displayed publicly and can open Apple Maps or Google Maps. GemFort
          does not use the audited profile-location flow for continuous
          background tracking.
        </LegalParagraph>

        <LegalSubheading>H. Notifications and device data</LegalSubheading>
        <LegalParagraph>
          If you enable notifications, GemFort stores a push-token identifier
          and notification preferences and may send notifications containing
          titles, messages, actor names or photos, image URLs, and references to
          a listing, request, service, offer, verification, report, payment,
          cheque, or other event.
        </LegalParagraph>
        <LegalParagraph>
          The app also uses security and operational data such as
          authentication tokens, App Check signals, request identifiers,
          timestamps, device and app information, and service logs. Firebase
          and Google Cloud may process technical information such as IP
          addresses and user-agent or similar security data to operate and
          protect their services.
        </LegalParagraph>

        <LegalSubheading>I. Flight searches and third-party links</LegalSubheading>
        <LegalParagraph>
          If you use flight search, GemFort may send search parameters such as
          origin, destination, travel dates, passenger or cabin selections, and
          currency to Travelpayouts or Aviasales services. GemFort can create or
          display an Aviasales booking link and may receive affiliate
          compensation if you use an eligible link. Booking, payment, ticketing,
          refunds, and the third-party website&apos;s privacy practices are
          controlled by the third party.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='how-we-use-data' title='4. How we use personal data'>
        <LegalParagraph>We use personal data to:</LegalParagraph>
        <LegalList ordered>
          <li>create and secure accounts, authenticate users, verify phone numbers, and recover or delete accounts;</li>
          <li>operate GemNet, GemTrack, profiles, listings, searches, requests, offers, transfers, services, reports, notifications, and other requested features;</li>
          <li>display information that you choose to publish and connect users with businesses or counterparties;</li>
          <li>review verification applications, prevent fraud, investigate abuse, enforce rules, and protect users and the platform;</li>
          <li>store and retrieve your workspace records, media, documents, receipts, and preferences;</li>
          <li>send operational, security, and optional notification messages;</li>
          <li>provide flight search and affiliate-link functionality;</li>
          <li>troubleshoot, monitor performance and security, maintain backups and audit records, and improve reliability;</li>
          <li>comply with legal obligations, lawful requests, tax and accounting requirements, and dispute or safety processes; and</li>
          <li>respond to support requests and exercise or defend legal rights.</li>
        </LegalList>
        <LegalParagraph>
          The audited dependency set did not identify a dedicated advertising,
          analytics, or crash-reporting SDK. Firebase, Cloud Functions, hosting,
          app stores, and other infrastructure providers may still create
          ordinary technical or security logs.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='grounds-and-permissions' title='5. Legal grounds and permissions'>
        <LegalParagraph>
          Where privacy law requires a legal basis, the basis may include
          performing a contract or providing a requested service, your consent,
          our legitimate interests in security and platform operation,
          compliance with law, and establishing or defending legal claims. The
          appropriate basis depends on the data and purpose.
        </LegalParagraph>
        <LegalParagraph>
          Device permissions are optional unless a feature requires them. You
          can refuse or later withdraw access to contacts, location, photos or
          files, notifications, biometrics, or other device capabilities in
          system settings, but the related feature may stop working. We will
          not treat a permission refusal as permission to access the underlying
          data.
        </LegalParagraph>
        <LegalParagraph>
          The audited source and Expo configuration found use of contacts,
          foreground location, photos and files, notifications, biometric
          authentication, and secure local storage. A release build still
          needs a separate permission review, and this policy must be updated if
          the released app requests additional permissions.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='sharing' title='6. When we share personal data'>
        <LegalParagraph>We may share or make data available to:</LegalParagraph>
        <LegalList>
          <li><strong>Google Firebase and Google Cloud</strong>, including Firebase Authentication, Firestore, Cloud Storage, Cloud Functions and Cloud Run, App Check, Cloud Messaging, logging, monitoring, and related infrastructure;</li>
          <li><strong>Apple and Google</strong>, when you use their sign-in, maps, operating-system, push-notification, or app-distribution services;</li>
          <li><strong>Travelpayouts, Aviasales, and related travel providers</strong>, when you use flight search or booking links;</li>
          <li><strong>other GemFort users or the public</strong>, when you publish a business profile, listing, shareable link, public location, public contact channel, report outcome, or other content intended for sharing;</li>
          <li><strong>authorised administrators and service providers</strong>, for verification, moderation, fraud prevention, support, security, hosting, maintenance, and legal compliance;</li>
          <li><strong>professional advisers, regulators, law enforcement, or other parties</strong>, when required by law or necessary to protect rights, safety, users, or the platform; and</li>
          <li><strong>a successor or transaction party</strong>, if GemFort or relevant assets are reorganised, financed, sold, or transferred, subject to applicable law and safeguards.</li>
        </LegalList>
        <LegalParagraph>
          We do not sell imported contacts, verification documents, or GemTrack
          records. We do not use contact-import data to advertise to the people
          in your address book. Any future material change to sharing or purpose
          will be reflected in an updated policy and, where required, a new
          consent request.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='international-processing' title='7. International processing'>
        <LegalParagraph>
          GemFort&apos;s Firebase project uses the <code>asia-south1</code> Firestore
          and storage region, but Firebase Authentication is operated from
          United States data centres and many Firebase services use global
          Google infrastructure. Travel, identity, maps, app-store, and other
          providers may process information in their own countries. Where
          required, we will use an applicable transfer mechanism and contractual
          or organisational safeguards.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='retention-and-deletion' title='8. Retention and deletion'>
        <LegalParagraph>
          We keep personal data only for as long as reasonably necessary for the
          purposes in this policy, including account operation, security, fraud
          prevention, verification, dispute handling, legal compliance,
          accounting, and backup recovery. We begin verified deletion promptly
          and ordinarily complete deletion of active GemFort records within 30
          days. Narrow security, fraud, dispute, legal, or regulatory records
          may be retained only as necessary and normally for no longer than
          seven years, unless applicable law or an active proceeding requires
          longer. This schedule remains subject to legal review.
        </LegalParagraph>

        <LegalTable>
          <thead className='border-b border-[var(--color-rule)] bg-[var(--color-paper-3)]'>
            <tr>
              <th className='px-4 py-4 font-bold text-[var(--color-ink)]'>Data category</th>
              <th className='px-4 py-4 font-bold text-[var(--color-ink)]'>Current handling summary</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-[var(--color-rule)]'>
            <tr><td className='px-4 py-4 align-top font-semibold text-[var(--color-ink)]'>Account and profile data</td><td className='px-4 py-4 align-top text-[var(--color-ink-muted)]'>Ordinarily deleted within 30 days after verified deletion, subject to applicable exceptions.</td></tr>
            <tr><td className='px-4 py-4 align-top font-semibold text-[var(--color-ink)]'>Verification and identity documents</td><td className='px-4 py-4 align-top text-[var(--color-ink-muted)]'>Ordinarily deleted within 30 days, subject only to necessary fraud, regulatory, or dispute evidence retention.</td></tr>
            <tr><td className='px-4 py-4 align-top font-semibold text-[var(--color-ink)]'>Public listings and business content</td><td className='px-4 py-4 align-top text-[var(--color-ink-muted)]'>GemFort-controlled records are ordinarily removed within 30 days; public copies, shared records, caches, and provider copies may persist.</td></tr>
            <tr><td className='px-4 py-4 align-top font-semibold text-[var(--color-ink)]'>GemTrack records</td><td className='px-4 py-4 align-top text-[var(--color-ink-muted)]'>Owned live records are ordinarily deleted within 30 days; necessary legal, accounting, fraud, or dispute evidence may remain.</td></tr>
            <tr><td className='px-4 py-4 align-top font-semibold text-[var(--color-ink)]'>Contacts and contact photos</td><td className='px-4 py-4 align-top text-[var(--color-ink-muted)]'>Owned records and managed files are ordinarily deleted within 30 days.</td></tr>
            <tr><td className='px-4 py-4 align-top font-semibold text-[var(--color-ink)]'>Notifications and operational logs</td><td className='px-4 py-4 align-top text-[var(--color-ink-muted)]'>Current Cloud Logging configuration retains ordinary logs for up to 30 days and required audit logs for up to 400 days.</td></tr>
            <tr><td className='px-4 py-4 align-top font-semibold text-[var(--color-ink)]'>Backups and recovery copies</td><td className='px-4 py-4 align-top text-[var(--color-ink-muted)]'>Firebase Storage soft-delete is configured for 7 days. Recovery copies are not used as live records and expire under provider settings; the exact Firestore recovery window must be verified.</td></tr>
          </tbody>
        </LegalTable>

        <LegalParagraph>
          You can initiate account deletion from in-app account settings. The
          deletion workflow is intended to remove the account and associated
          records and files, while shared records may be retained in
          de-identified form where necessary. Shared company audit records,
          fraud or report records, legal evidence, and administrator audit
          records may be retained or anonymised where necessary and permitted
          by law.
        </LegalParagraph>
        <LegalParagraph>
          For a request outside the in-app flow, use the{' '}
          <Link
            href='/gemfort/delete-account'
            className='font-semibold text-[var(--color-accent-strong)] underline underline-offset-4'>
            GemFort account deletion page
          </Link>{' '}
          or contact us by email. Deletion does not automatically remove
          information another user lawfully copied from a public profile,
          listing, message, report, or shared record, nor does it control
          retention by independent third parties.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='rights-and-choices' title='9. Your rights and choices'>
        <LegalParagraph>
          Subject to applicable law and reasonable identity verification, you
          may request access to, correction of, deletion of, restriction of, or
          information about the processing of your personal data. Depending on
          the law that applies to you, you may also object to particular
          processing, withdraw consent, request portability, or complain to a
          data-protection regulator.
        </LegalParagraph>
        <LegalParagraph>
          To exercise a right, email{' '}
          <a
            href='mailto:orbitra.technology@gmail.com'
            className='font-semibold text-[var(--color-accent-strong)] underline underline-offset-4'>
            orbitra.technology@gmail.com
          </a>{' '}
          with the account email or UID, the request, and enough information to
          verify identity. We may refuse or limit a request where permitted by
          law, for example to protect another person&apos;s rights, preserve
          evidence, prevent fraud, or comply with a legal obligation.
        </LegalParagraph>
        <LegalParagraph>
          If Sri Lanka&apos;s Personal Data Protection Act applies to the
          processing, you may also contact the{' '}
          <a
            href='https://www.dpa.gov.lk/'
            target='_blank'
            rel='noopener noreferrer'
            className='font-semibold text-[var(--color-accent-strong)] underline underline-offset-4'>
            Sri Lanka Data Protection Authority
          </a>
          .
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='security' title='10. Security'>
        <LegalParagraph>
          GemFort uses Firebase Authentication, Firestore and Storage security
          rules, App Check, authenticated API requests, HTTPS and TLS, role
          checks, and restricted administrative access. No online service is
          completely secure. You are responsible for protecting your device,
          authentication factors, and any information you choose to publish or
          share.
        </LegalParagraph>
        <LegalParagraph>
          GemFort continues to improve validation, access-control tests,
          deletion monitoring, and release-manifest review. The security audit
          linked from the repository identifies controls that must be completed
          before the Service is treated as production-ready.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='children' title='11. Children'>
        <LegalParagraph>
          GemFort is a business and trading service and is not directed to
          children. Do not create an account or submit identity, financial,
          contact, or business data if you are not legally able to use the
          Service. If you believe a child provided personal data, contact us so
          we can investigate and delete it where appropriate.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='third-party-services' title='12. Third-party services and links'>
        <LegalParagraph>
          GemFort may open external certificate portals, maps, travel sites,
          app-store services, identity providers, or other third-party links.
          Those services have their own terms and privacy policies. GemFort does
          not control their data practices and is not responsible for content or
          transactions completed outside GemFort.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='changes' title='13. Changes'>
        <LegalParagraph>
          We may update this policy when the service, law, or data practices
          change. We will post the updated version with a new &quot;Last updated&quot;
          date and, where required, provide additional notice or request
          consent. Continued use after the effective date of an update is
          subject to the updated policy to the extent permitted by law.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id='contact' title='14. Contact'>
        <LegalCallout>
          <p className='font-semibold'>Privacy requests and general support</p>
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
            The formal legal entity and final retention schedule remain subject
            to confirmation before final legal publication.
          </p>
        </LegalCallout>
      </LegalSection>
    </GemFortLegalPage>
  );
}
