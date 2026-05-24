import type { Metadata } from 'next';
import Link from 'next/link';
import { getCopyrightYear } from '@/lib/copyright-year';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Worknet by Orbitra Tech',
  description:
    'Terms and Conditions for Worknet - Read about our service overview, user eligibility, account responsibilities, and legal disclaimers.',
};

export default async function TermsAndConditions() {
  const year = await getCopyrightYear();

  return (
    <div
      className={`min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden`}>
      {/* Background Glow */}
      <div className='fixed -top-[10%] -left-[5%] w-[40%] h-[40%] bg-[radial-gradient(circle,rgba(147,51,234,0.05)_0%,transparent_70%)] -z-10 pointer-events-none' />

      <div className='max-w-[1100px] mx-auto px-6 py-20 relative'>
        <Link
          href='/'
          className='inline-flex items-center text-slate-600 font-semibold mb-12 transition-all duration-300 gap-2 bg-white px-5 py-2.5 rounded-full border border-slate-200 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:text-sky-500 hover:-translate-x-1 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]'>
          <svg
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2.5'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <line x1='19' y1='12' x2='5' y2='12'></line>
            <polyline points='12 19 5 12 12 5'></polyline>
          </svg>
          Back to Home
        </Link>

        <header className='text-left mb-20 border-b-2 border-slate-200 pb-10'>
          <div className='inline-block bg-sky-500/10 text-sky-500 px-4 py-1.5 rounded-full text-[0.85rem] font-bold mb-3'>
            Last Updated: April 1, 2026
          </div>
          <h1 className='text-[clamp(2.5rem,8vw,4.5rem)] font-black tracking-tight leading-tight mb-4 text-slate-900'>
            Terms & <br />
            <span className='bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent'>
              Conditions
            </span>
          </h1>
          <p className='text-slate-600 text-xl font-medium max-w-[700px]'>
            Please read these terms carefully before using Worknet. By using the
            platform, you agree to these legally binding terms.
          </p>
        </header>

        <div className='grid grid-cols-1 md:grid-cols-[300px_1fr] gap-14'>
          <aside className='hidden md:block sticky top-10 h-max'>
            <h3 className='text-xs uppercase tracking-[0.15em] text-sky-500 mb-6 font-extrabold'>
              Agreement Sections
            </h3>
            <ul className='list-none'>
              {[
                { id: 'overview', text: '1. Service Overview' },
                { id: 'eligibility', text: '2. User Eligibility' },
                { id: 'accounts', text: '3. User Accounts' },
                { id: 'providers', text: '4. Provider Responsibilities' },
                { id: 'conduct', text: '5. User Conduct' },
                { id: 'reviews', text: '6. Reviews & Ratings' },
                { id: 'disclaimer', text: '7. Contact Disclaimer' },
                { id: 'liability', text: '8. No Liability for Services' },
                { id: 'property', text: '9. Intellectual Property' },
                { id: 'contact', text: '10. Contact Us' },
              ].map((item) => (
                <li key={item.id} className='mb-4'>
                  <a
                    href={`#${item.id}`}
                    className='text-slate-600 text-[0.9rem] font-semibold transition-all duration-200 block hover:text-sky-500 hover:pl-2'>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <main id='content' tabIndex={-1} className='outline-none'>
            <section id='overview' className='mb-16 scroll-mt-10'>
              <h2 className='text-2xl font-extrabold mb-6 text-slate-900 tracking-tight flex items-center gap-4'>
                1. Overview of the Service
              </h2>
              <p className='mb-5 text-slate-600 text-[1.05rem] leading-relaxed'>
                Worknet is a localized service discovery platform operated by{' '}
                <strong className='font-bold'>Orbitra Tech</strong>. Our primary
                role is enabling connections between service providers and those
                seeking help.
              </p>

              <HighlightBox title='What We Do'>
                <ul className='list-none my-4'>
                  <ListItem text='Facilitate discovery of nearby experts.' />
                  <ListItem text='Support transparent reviewing and rating systems.' />
                  <ListItem text='Enable direct contact via phone or WhatsApp.' />
                </ul>
              </HighlightBox>

              <WarningBox>
                <strong>What We Do NOT Do:</strong> We do not provide services
                ourselves, employ providers, or facilitate payments/bookings
                within the app. All contracts are between the users.
              </WarningBox>
            </section>

            <section id='eligibility' className='mb-16 scroll-mt-10'>
              <h2 className='text-2xl font-extrabold mb-6 text-slate-900 tracking-tight flex items-center gap-4'>
                2. Eligibility
              </h2>
              <p className='mb-5 text-slate-600 text-[1.05rem] leading-relaxed'>
                To access or use Worknet, you must be at least 18 years of age.
                If you are under 18, you may only use the app under the direct
                supervision of a legal guardian. You agree to provide accurate,
                current, and complete information during registration.
              </p>
            </section>

            <section id='accounts' className='mb-16 scroll-mt-10'>
              <h2 className='text-2xl font-extrabold mb-6 text-slate-900 tracking-tight flex items-center gap-4'>
                3. User Accounts
              </h2>
              <p className='mb-5 text-slate-600 text-[1.05rem] leading-relaxed'>
                While browsing is available without an account, certain features
                require registration:
              </p>
              <ul className='list-none my-4'>
                <ListItem text='Listing yourself as a professional service provider.' />
                <ListItem text='Leaving reviews and submitting ratings.' />
                <ListItem text='Saving favorite providers and reporting misconduct.' />
              </ul>
              <p className='mb-5 text-slate-600 text-[1.05rem] leading-relaxed'>
                You are solely responsible for all activity that occurs under
                your account and for maintaining the confidentiality of your
                login credentials.
              </p>
            </section>

            <section id='providers' className='mb-16 scroll-mt-10'>
              <h2 className='text-2xl font-extrabold mb-6 text-slate-900 tracking-tight flex items-center gap-4'>
                4. Service Provider Responsibilities
              </h2>
              <p className='mb-5 text-slate-600 text-[1.05rem] leading-relaxed'>
                Providers listing services on Worknet agree to:
              </p>
              <ul className='list-none my-4'>
                <ListItem text='Possess all necessary licenses and permits for their services.' />
                <ListItem text='Provide honest descriptions of their skills and experience.' />
                <ListItem text='Charge fair prices and honor agreed-upon commitments.' />
              </ul>
              <p className='mb-5 text-slate-600 text-[1.05rem] leading-relaxed'>
                Worknet does not verify the credentials of providers and makes
                no warranties regarding the quality of their work.
              </p>
            </section>

            <section id='conduct' className='mb-16 scroll-mt-10'>
              <h2 className='text-2xl font-extrabold mb-6 text-slate-900 tracking-tight flex items-center gap-4'>
                5. User Responsibilities & Conduct
              </h2>
              <p className='mb-5 text-slate-600 text-[1.05rem] leading-relaxed'>
                By using the platform, you agree not to:
              </p>
              <ul className='list-none my-4'>
                <ListItem text='Post fraudulent, misleading, or illegal content.' />
                <ListItem text='Harass, stalk, or abuse other community members.' />
                <ListItem text='Scrape data or attempt to reverse-engineer the application.' />
              </ul>
            </section>

            <section id='reviews' className='mb-16 scroll-mt-10'>
              <h2 className='text-2xl font-extrabold mb-6 text-slate-900 tracking-tight flex items-center gap-4'>
                6. Reviews & Ratings
              </h2>
              <p className='mb-5 text-slate-600 text-[1.05rem] leading-relaxed'>
                Reviews must be based on actual interactions. We reserve the
                right to remove any review that is determined to be fake,
                offensive, or irrelevant to the service provided. We do not edit
                user reviews prior to posting.
              </p>
            </section>

            <section id='disclaimer' className='mb-16 scroll-mt-10'>
              <h2 className='text-2xl font-extrabold mb-6 text-slate-900 tracking-tight flex items-center gap-4'>
                7. Direct Contact Disclaimer
              </h2>
              <WarningBox>
                <strong>Risk Disclosure:</strong> Worknet provides communication
                tools (WhatsApp/Phone) but does not monitor private
                conversations. You assume all risk when contacting and meeting
                users identified through the app.
              </WarningBox>
            </section>

            <section id='liability' className='mb-16 scroll-mt-10'>
              <h2 className='text-2xl font-extrabold mb-6 text-slate-900 tracking-tight flex items-center gap-4'>
                8. No Liability for Services
              </h2>
              <p className='mb-5 text-slate-600 text-[1.05rem] leading-relaxed'>
                Orbitra Tech is not responsible for any damage, injury,
                financial loss, or misconduct resulting from an interaction
                initiated on Worknet. Any disputes regarding quality, pricing,
                or professionalism must be resolved directly between the parties
                involved.
              </p>
            </section>

            <section id='property' className='mb-16 scroll-mt-10'>
              <h2 className='text-2xl font-extrabold mb-6 text-slate-900 tracking-tight flex items-center gap-4'>
                9. Intellectual Property
              </h2>
              <p className='mb-5 text-slate-600 text-[1.05rem] leading-relaxed'>
                The &quot;Worknet&quot; name, branding, logo, and source code
                are the exclusive property of Orbitra Tech. No part of the
                application may be reproduced or commercially exploited without
                our written consent.
              </p>
            </section>

            <section id='contact' className='mb-16 scroll-mt-10'>
              <h2 className='text-2xl font-extrabold mb-6 text-slate-900 tracking-tight flex items-center gap-4'>
                10. Contact Information
              </h2>
              <div className='bg-white border text-slate-900 border-slate-200 rounded-[20px] p-6 my-6 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.05)] border-l-4 !border-l-purple-600'>
                <p className='mb-5 text-slate-600 text-[1.05rem] leading-relaxed'>
                  For legal inquiries or reporting violations:
                </p>
                <p className='mb-5 text-slate-600 text-[1.05rem] leading-relaxed'>
                  <strong>Orbitra Tech (Pvt) Ltd.</strong>
                  <br />
                  <strong>Email:</strong> admin@orbitratech.net
                  <br />
                  <strong>Location:</strong> Beruwala, Sri Lanka
                </p>
              </div>
            </section>
          </main>
        </div>

        <footer className='text-center mt-24 py-16 border-t border-slate-200 text-slate-600 font-medium'>
          <p>
            &copy; {year} Orbitra Tech. All rights reserved.
          </p>
          <p className='mt-3 text-[0.85rem] opacity-70'>
            Crafted with excellence in Sri Lanka.
          </p>
        </footer>
      </div>
    </div>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="mb-3 flex items-start gap-3 text-slate-600 font-medium before:content-['\2713'] before:text-sky-500 before:font-black">
      <span>{text}</span>
    </li>
  );
}

function HighlightBox({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className='bg-white border text-slate-900 border-slate-200 rounded-[20px] p-6 my-6 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.05)]'>
      {title && <h4 className='mb-3 text-slate-900 font-bold'>{title}</h4>}
      {children}
    </div>
  );
}

function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-[#fffafa] border border-[#fee2e2] border-l-4 border-l-[#ef4444] rounded-xl p-5 my-6 text-[#991b1b]'>
      {children}
    </div>
  );
}
