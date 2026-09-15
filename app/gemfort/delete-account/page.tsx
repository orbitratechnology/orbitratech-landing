import type { Metadata } from 'next';
import Link from 'next/link';

import GemFortLegalPage, {
  LegalCallout,
  LegalList,
  LegalParagraph,
  LegalSection,
  type LegalNavItem,
} from '@/components/GemFortLegalPage';

export const metadata: Metadata = {
  title: 'Delete your GemFort account | GemFort',
  description:
    'Request deletion of your GemFort account and associated personal data.',
};

const navItems: LegalNavItem[] = [
  { id: 'how-to-request', text: '1. How to request deletion' },
  { id: 'data-deleted', text: '2. Data deleted' },
  { id: 'data-kept', text: '3. Data that may be kept' },
  { id: 'timing', text: '4. Deletion timing' },
];

export default function GemFortDeleteAccount() {
  return (
    <GemFortLegalPage
      badge='Account support'
      title='Request deletion of your GemFort account'
      description='This page is for GemFort users who want their account and associated personal data deleted. The fastest route is the in-app deletion flow. Email is available if you cannot access the app.'
      asideTitle='On this page'
      navItems={navItems}>
      <LegalCallout>
        <p className='text-base font-semibold text-[var(--color-ink)]'>
          Cannot access the app?
        </p>
        <a
          href='mailto:orbitra.technology@gmail.com?subject=GemFort%20account%20deletion%20request'
          className='btn-cta btn-cta-lg btn-brand mt-5'>
          Email a deletion request
        </a>
        <p className='mt-4 text-sm text-[var(--color-ink-muted)]'>
          Send the request from the email address on your GemFort account. Do
          not include your password or identity-document images in email.
        </p>
      </LegalCallout>

      <LegalSection id='how-to-request' title='1. How to request deletion'>
        <LegalList ordered>
          <li>
            If you can sign in, open GemFort, then Profile, Account, and Delete
            account. Complete the recent-sign-in confirmation.
          </li>
          <li>
            If you cannot sign in, email{' '}
            <a
              href='mailto:orbitra.technology@gmail.com?subject=GemFort%20account%20deletion%20request'
              className='font-semibold text-[var(--color-accent-strong)] underline underline-offset-4'>
              orbitra.technology@gmail.com
            </a>{' '}
            with the subject &quot;GemFort account deletion request&quot;. Include your
            account email or phone number, display name, and business name if
            applicable. Do not include your password or identity-document images
            in email.
          </li>
          <li>
            GemFort support verifies account ownership before processing an
            email request. The in-app flow starts deletion after successful
            verification. An email request starts after support confirms
            ownership.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection id='data-deleted' title='2. Data deleted'>
        <LegalList>
          <li>Firebase Authentication account and GemFort user profile.</li>
          <li>Owned business profile, public listings, and gem records.</li>
          <li>Private GemTrack records, including costs, events, services, AP records, payments, bills, cheques, trips, expenses, contacts, notifications, and related account records.</li>
          <li>Uploaded account, business, verification, gem, cheque, receipt, trip, and listing files in GemFort-managed storage.</li>
          <li>Push-token data and account preferences stored by GemFort.</li>
        </LegalList>
      </LegalSection>

      <LegalSection id='data-kept' title='3. Data that may be kept'>
        <LegalList>
          <li>Security and audit records needed to protect GemFort, investigate abuse, or comply with law. Routine Google Cloud logs are retained for up to 30 days. Required audit logs are retained for up to 400 days under the current configuration.</li>
          <li>Information needed for an active fraud investigation, dispute, legal claim, or accounting obligation, only for the applicable required period and with identity removed where feasible.</li>
          <li>Information another user or an independent third party copied or stored outside GemFort. GemFort cannot delete those copies.</li>
        </LegalList>
      </LegalSection>

      <LegalSection id='timing' title='4. Deletion timing'>
        <LegalParagraph>
          Live GemFort account, Firestore, and Storage data are removed when the
          verified deletion workflow completes. Some security, audit, legal, or
          accounting records may remain for the retention periods described
          above. Provider-level caches or backup copies, if any, are removed
          according to the provider&apos;s normal expiry cycle.
        </LegalParagraph>
        <LegalCallout tone='warning'>
          Deletion is permanent. If you need a copy of information before
          requesting deletion, contact support first.
        </LegalCallout>
      </LegalSection>

      <LegalCallout>
        Questions about the process? Email{' '}
        <a
          href='mailto:orbitra.technology@gmail.com'
          className='font-semibold text-[var(--color-accent-strong)] underline underline-offset-4'>
          orbitra.technology@gmail.com
        </a>{' '}
        or read the{' '}
        <Link
          href='/gemfort/privacy-policy'
          className='font-semibold text-[var(--color-accent-strong)] underline underline-offset-4'>
          GemFort Privacy Policy
        </Link>
        .
      </LegalCallout>
    </GemFortLegalPage>
  );
}
