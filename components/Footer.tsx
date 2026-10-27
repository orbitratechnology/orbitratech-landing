import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
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

export default async function Footer() {
  const year = await getCopyrightYear();

  return (
    <footer className='deferred-section relative z-20 border-t border-[var(--color-rule)] bg-[var(--color-paper)] py-16'>
      <div className='container mx-auto max-w-6xl px-6'>
        <div className='flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between'>
          <div className='max-w-sm min-w-0'>
            <Image
              src='/orbitra_logo.png'
              alt='Orbitra Tech'
              width={56}
              height={56}
              className='mb-4 h-14 w-auto'
              loading='lazy'
            />
            <p className='text-[length:var(--text-base)] leading-relaxed text-[var(--color-ink-muted)]'>
              Websites, mobile apps, online stores, and business automation for
              growing companies in Sri Lanka and worldwide. Fixed scope, agreed
              before work starts.
            </p>
            <div className='mt-6 flex gap-3'>
              {[
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
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={label}
                  className='rounded-full border border-[var(--color-rule)] p-3 text-[var(--color-ink-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]'>
                  <Icon className='h-5 w-5' />
                </a>
              ))}
            </div>
          </div>

          <nav
            className='grid grid-cols-2 gap-x-10 gap-y-8 sm:flex sm:flex-wrap sm:gap-x-12'
            aria-label='Footer'>
            <div className='min-w-0'>
              <p className='mb-3 text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-ink-subtle)]'>
                Services
              </p>
              <ul className='flex flex-col gap-3'>
                {SERVICE_PAGES.map((page) => (
                  <li key={page.slug}>
                    <Link
                      href={`/${page.slug}`}
                      className='text-sm font-semibold text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]'>
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='min-w-0'>
              <p className='mb-3 text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-ink-subtle)]'>
                Products
              </p>
              <ul className='flex flex-col gap-3'>
                {LANDING_PRODUCTS.map((product) => (
                  <li key={product.id}>
                    <Link
                      href={product.href}
                      className='text-sm font-semibold text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]'>
                      {product.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='min-w-0'>
              <p className='mb-3 text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-ink-subtle)]'>
                Company
              </p>
              <ul className='flex flex-col gap-3'>
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={`/${link.href}`}
                      className='text-sm font-semibold text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='min-w-0'>
            <p className='mb-3 text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-ink-subtle)]'>
              Contact
            </p>
            <ul className='flex flex-col gap-3 text-sm text-[var(--color-ink-muted)]'>
              <li className='flex items-center gap-2'>
                <Phone className='h-4 w-4 shrink-0' aria-hidden />
                <a href={`tel:${PHONE_E164}`} className='hover:text-[var(--color-ink)]'>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className='flex items-center gap-2'>
                <Mail className='h-4 w-4 shrink-0' aria-hidden />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className='hover:text-[var(--color-ink)]'>
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className='flex items-start gap-2'>
                <MapPin className='mt-0.5 h-4 w-4 shrink-0' aria-hidden />
                <span>Beruwala, Sri Lanka</span>
              </li>
            </ul>
            </div>
          </nav>
        </div>

        <div className='mt-12 flex flex-col items-center justify-between gap-3 border-t border-[var(--color-rule)] pt-8 text-center text-sm text-[var(--color-ink-subtle)] md:flex-row md:text-left'>
          <p>© {year} Orbitra Tech (Pvt) Ltd. All rights reserved.</p>
          <div className='flex flex-wrap items-center justify-center gap-x-4 gap-y-2'>
            <Link
              href='/privacy-policy'
              className='font-semibold transition-colors hover:text-[var(--color-ink)]'>
              Privacy Policy
            </Link>
            <p>Engineered in Sri Lanka</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
