import type { Metadata } from 'next';
import Link from 'next/link';
import { getCopyrightYear } from '@/lib/copyright-year';

export const metadata: Metadata = {
  title: 'Privacy Policy | Worknet by Orbitra Tech',
  description:
    'Privacy Policy for Worknet - Find local help fast. Learn how we collect, use, and protect your data.',
};

export default async function PrivacyPolicy() {
  const year = await getCopyrightYear();

  return (
    <div
      className={`min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden`}>
      {/* Background Glow */}
      <div className='fixed -top-[10%] -right-[5%] w-[40%] h-[40%] bg-[radial-gradient(circle,rgba(14,165,233,0.08)_0%,transparent_70%)] -z-10 pointer-events-none' />

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
            Legal Documentation
          </div>
          <h1 className='text-[clamp(2.5rem,8vw,4.5rem)] font-black tracking-tight leading-tight mb-4 text-slate-900'>
            Privacy{' '}
            <span className='bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent'>
              Policy
            </span>
          </h1>
          <p className='text-slate-600 text-xl font-medium max-w-[700px]'>
            Worknet &ndash; A product of Orbitra Tech. Your privacy is our
            priority as we build the future of local services.
          </p>
        </header>

        <div className='grid grid-cols-1 md:grid-cols-[280px_1fr] gap-14'>
          <aside className='hidden md:block sticky top-10 h-max'>
            <h3 className='text-xs uppercase tracking-[0.15em] text-sky-500 mb-6 font-extrabold'>
              In this policy
            </h3>
            <ul className='list-none'>
              {[
                { id: 'intro', text: '1. Introduction' },
                { id: 'collect', text: '2. Data Collection' },
                { id: 'usage', text: '3. Usage & Purpose' },
                { id: 'location', text: '4. Location Services' },
                { id: 'visibility', text: '5. Profile Visibility' },
                { id: 'sharing', text: '6. Third Parties' },
                { id: 'security', text: '7. Data Protection' },
                { id: 'rights', text: '8. Your Rights' },
                { id: 'contact', text: '9. Contact Us' },
              ].map((item) => (
                <li key={item.id} className='mb-4'>
                  <a
                    href={`#${item.id}`}
                    className='text-slate-600 text-[0.95rem] font-semibold transition-all duration-200 block hover:text-sky-500 hover:pl-2'>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <main id='content' tabIndex={-1} className='outline-none'>
            <section id='intro' className='mb-16 scroll-mt-10'>
              <h2 className='text-2xl font-extrabold mb-6 text-slate-900 tracking-tight flex items-center gap-4'>
                1. Introduction
              </h2>
              <p className='mb-5 text-slate-600 text-[1.05rem] leading-relaxed'>
                Worknet is a localized service discovery platform operated by{' '}
                <span className='text-slate-900 font-bold border-b-2 border-sky-500/20'>
                  Orbitra Tech
                </span>
                . We believe in transparency and autonomy over your personal
                information. This document outlines how we collect, process, and
                safeguard your data.
              </p>
            </section>

            <section id='collect' className='mb-16 scroll-mt-10'>
              <h2 className='text-2xl font-extrabold mb-6 text-slate-900 tracking-tight flex items-center gap-4'>
                2. Information We Collect
              </h2>
              <p className='mb-5 text-slate-600 text-[1.05rem] leading-relaxed'>
                We only collect information essential for connecting you with
                verified experts and clients:
              </p>
              <ul className='bg-white border border-slate-200 rounded-3xl p-8 my-6 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] list-none'>
                <ListItem
                  title='Identity:'
                  text='Full name and professional profile image.'
                />
                <ListItem
                  title='Connectivity:'
                  text='Phone number and direct WhatsApp integration.'
                />
                <ListItem
                  title='Professional:'
                  text='Biography, experience level, and community feedback.'
                />
                <ListItem
                  title='Metadata:'
                  text='Device type, performance logs, and interaction timestamps.'
                />
              </ul>
            </section>

            <section id='usage' className='mb-16 scroll-mt-10'>
              <h2 className='text-2xl font-extrabold mb-6 text-slate-900 tracking-tight flex items-center gap-4'>
                3. How We Use Your Data
              </h2>
              <p className='mb-5 text-slate-600 text-[1.05rem] leading-relaxed'>
                Your data is processed to ensure a safe and efficient
                marketplace:
              </p>
              <ul className='bg-white border border-slate-200 rounded-3xl p-8 my-6 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] list-none'>
                <ListItem text='Real-time mapping of service providers to user requests.' />
                <ListItem text='Personalized search results based on historical interactions.' />
                <ListItem text='Fraud detection and account security verification.' />
                <ListItem text='Technical optimization to improve app responsiveness.' />
              </ul>
            </section>

            <section id='location' className='mb-16 scroll-mt-10'>
              <h2 className='text-2xl font-extrabold mb-6 text-slate-900 tracking-tight flex items-center gap-4'>
                4. Essential Location Usage
              </h2>
              <p className='mb-5 text-slate-600 text-[1.05rem] leading-relaxed'>
                Worknet is a{' '}
                <span className='text-slate-900 font-bold border-b-2 border-sky-500/20'>
                  location-based engine
                </span>
                . To function correctly, the app requests access to your precise
                location to show services &quot;around you.&quot;
              </p>
              <p className='mb-5 text-slate-600 text-[1.05rem] leading-relaxed'>
                We recommend the &quot;While using the app&quot; permission.
                This data is never sold or used for off-platform advertising
                tracking.
              </p>
            </section>

            <section id='visibility' className='mb-16 scroll-mt-10'>
              <h2 className='text-2xl font-extrabold mb-6 text-slate-900 tracking-tight flex items-center gap-4'>
                5. Service Provider Visibility
              </h2>
              <p className='mb-5 text-slate-600 text-[1.05rem] leading-relaxed'>
                If you list a service on Worknet, your professional profile data
                becomes public to the community. This includes your name, photo,
                and primary contact number, enabling users to reach out for
                bookings immediately.
              </p>
            </section>

            <section id='sharing' className='mb-16 scroll-mt-10'>
              <h2 className='text-2xl font-extrabold mb-6 text-slate-900 tracking-tight flex items-center gap-4'>
                6. Commitment to Data Integrity
              </h2>
              <p className='mb-5 text-slate-600 text-[1.05rem] leading-relaxed'>
                <span className='text-slate-900 font-bold border-b-2 border-sky-500/20'>
                  Orbitra Tech does not sell personal data to third parties.
                </span>
              </p>
              <p className='mb-5 text-slate-600 text-[1.05rem] leading-relaxed'>
                Information is only shared under specific circumstances:
              </p>
              <ul className='bg-white border border-slate-200 rounded-3xl p-8 my-6 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] list-none'>
                <ListItem text='Facilitating the direct connection between you and a local provider/client.' />
                <ListItem text='Mandatory legal compliance under Sri Lankan jurisdiction.' />
                <ListItem text='Secure encryption via verified infrastructure partners.' />
              </ul>
            </section>

            <section id='security' className='mb-16 scroll-mt-10'>
              <h2 className='text-2xl font-extrabold mb-6 text-slate-900 tracking-tight flex items-center gap-4'>
                7. Security Architecture
              </h2>
              <p className='mb-5 text-slate-600 text-[1.05rem] leading-relaxed'>
                We utilize military-grade AES-256 encryption at rest and secure
                SSL/TLS channels for all network traffic. Our engineers
                periodically audit our systems to prevent unauthorized access.
              </p>
            </section>

            <section id='rights' className='mb-16 scroll-mt-10'>
              <h2 className='text-2xl font-extrabold mb-6 text-slate-900 tracking-tight flex items-center gap-4'>
                8. Your Digital Rights
              </h2>
              <p className='mb-5 text-slate-600 text-[1.05rem] leading-relaxed'>
                At any time, you may:
              </p>
              <ul className='bg-white border border-slate-200 rounded-3xl p-8 my-6 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] list-none'>
                <ListItem text='Download or view your complete profile history.' />
                <ListItem text='Update professional credentials and contact details.' />
                <ListItem text='Request immediate account termination and data erasure.' />
              </ul>
            </section>

            <section id='contact' className='mb-16 scroll-mt-10'>
              <h2 className='text-2xl font-extrabold mb-6 text-slate-900 tracking-tight flex items-center gap-4'>
                9. Reach Out
              </h2>
              <div className='bg-white border-2 border-slate-200 rounded-3xl p-10 mt-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] relative overflow-hidden'>
                <div className='absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-500 to-purple-600' />
                <p className='mb-5 text-slate-600 text-[1.05rem] leading-relaxed'>
                  For data inquiries, legal requests, or feedback:
                </p>
                <p className='mb-5 text-slate-600 text-[1.05rem] leading-relaxed'>
                  <strong>Orbitra Tech (Pvt) Ltd.</strong>
                  <br />
                  <strong>Email:</strong> admin@orbitratech.net
                  <br />
                  <strong>Headquarters:</strong> 198/41 Sheikh Jamaldeen Road,
                  Beruwala, Sri Lanka
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

function ListItem({ title, text }: { title?: string; text: string }) {
  return (
    <li className="mb-3.5 flex items-start gap-3 text-slate-600 font-medium before:content-['\2022'] before:text-sky-500 before:font-black before:text-[1.4rem] before:leading-none">
      <div>
        {title && <strong className='mr-1'>{title}</strong>}
        {text}
      </div>
    </li>
  );
}
