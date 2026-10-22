import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {
  CONTACT_EMAIL,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_E164,
  WHATSAPP_URL,
} from '@/lib/constants';
import { LANDING_PRODUCTS } from '@/lib/landing-data';
import { SERVICE_PAGES } from '@/lib/service-pages';
import { getCopyrightYear } from '@/lib/copyright-year';
import { WhatsAppIcon } from './ui/whatsapp-icon';

const SOCIALS = [
  {
    href: 'https://www.facebook.com/profile.php?id=61586622600161',
    icon: FaFacebook,
    label: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/orbitratech',
    icon: FaInstagram,
    label: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/company/orbitra-tech/',
    icon: FaLinkedin,
    label: 'LinkedIn',
  },
  { href: WHATSAPP_URL, icon: WhatsAppIcon, label: 'WhatsApp' },
];

const LINK_CLASS =
  'text-[length:var(--text-sm)] text-[var(--color-field-muted)] transition-colors duration-[var(--dur-fast)] hover:text-[var(--color-field-ink)]';

function Column({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className='min-w-0'>
      <p className='mb-4 text-[length:var(--text-sm)] font-semibold text-[var(--color-field-ink)]'>
        {title}
      </p>
      <ul className='flex flex-col gap-3'>{children}</ul>
    </div>
  );
}

export default async function Footer() {
  const year = await getCopyrightYear();

  return (
    <footer className='band-field relative z-20 overflow-hidden pt-20 md:pt-28'>
      <div className='shell'>
        <div className='grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:gap-20'>
          <div className='max-w-sm'>
            <Image
              src='/orbitra_logo.png'
              alt='Orbitra Tech'
              width={56}
              height={56}
              className='mb-6 size-12'
              loading='lazy'
            />
            <p className='text-[length:var(--text-base)] leading-relaxed text-[var(--color-field-muted)]'>
              Websites, apps, online stores and business tools for growing
              companies in Sri Lanka and worldwide. A fixed price, agreed
              before work starts.
            </p>
            <div className='mt-8 flex gap-2'>
              {SOCIALS.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={label}
                  className='inline-flex size-11 items-center justify-center rounded-full bg-[var(--color-field-2)] text-[var(--color-field-ink)] transition-colors hover:bg-[var(--color-accent)]'>
                  <Icon className='size-[1.125rem]' />
                </a>
              ))}
            </div>
          </div>

          <nav className='grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4' aria-label='Footer'>
            <Column title='Services'>
              {SERVICE_PAGES.map((page) => (
                <li key={page.slug}>
                  <Link href={`/${page.slug}`} className={LINK_CLASS}>
                    {page.name}
                  </Link>
                </li>
              ))}
            </Column>
            <Column title='Products'>
              {LANDING_PRODUCTS.map((product) => (
                <li key={product.id}>
                  <Link href={product.href} className={LINK_CLASS}>
                    {product.title}
                  </Link>
                </li>
              ))}
            </Column>
            <Column title='Company'>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={`/${link.href}`} className={LINK_CLASS}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </Column>
            <Column title='Contact'>
              <li className='flex items-center gap-2.5'>
                <Phone className='size-4 shrink-0 text-[var(--color-field-muted)]' aria-hidden />
                <a href={`tel:${PHONE_E164}`} className={LINK_CLASS}>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className='flex items-center gap-2.5'>
                <Mail className='size-4 shrink-0 text-[var(--color-field-muted)]' aria-hidden />
                <a href={`mailto:${CONTACT_EMAIL}`} className={`${LINK_CLASS} break-all`}>
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className='flex items-start gap-2.5'>
                <MapPin className='mt-0.5 size-4 shrink-0 text-[var(--color-field-muted)]' aria-hidden />
                <span className='text-[length:var(--text-sm)] text-[var(--color-field-muted)]'>
                  Beruwala, Sri Lanka
                </span>
              </li>
            </Column>
          </nav>
        </div>

        <p
          className='mt-20 select-none font-[family-name:var(--font-display)] text-[clamp(3.5rem,14vw,13rem)] font-semibold leading-[0.85] tracking-[-0.05em] text-[var(--color-field-2)] md:mt-28'
          aria-hidden='true'>
          Orbitra Tech
        </p>

        <div className='flex flex-col gap-2 py-8 text-[length:var(--text-sm)] text-[var(--color-field-muted)] sm:flex-row sm:justify-between'>
          <p>© {year} Orbitra Tech (Pvt) Ltd. All rights reserved.</p>
          <p>Designed and built in Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}
