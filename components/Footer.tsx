import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { NAV_LINKS, WHATSAPP_URL } from '@/lib/constants';
import { WhatsAppIcon } from './ui/whatsapp-icon';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='relative z-20 border-t border-[var(--color-rule)] bg-[var(--color-paper)] pb-24 pt-16 md:pb-12'>
      <div className='container mx-auto max-w-6xl px-6'>
        <div className='flex flex-col gap-10 md:flex-row md:items-start md:justify-between'>
          <div className='max-w-md min-w-0'>
            <Image
              src='/orbitra_logo.png'
              alt='Orbitra Tech'
              width={56}
              height={56}
              className='mb-4 h-14 w-auto'
            />
            <p className='text-[length:var(--text-base)] leading-relaxed text-[var(--color-ink-muted)]'>
              Practical digital products for Sri Lankan SMEs — web, mobile, and
              cloud with clear pricing and local context.
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
                  href: 'https://www.linkedin.com/in/orbitra-tech-org-7206523a6/',
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
            className='flex flex-wrap gap-x-10 gap-y-4'
            aria-label='Footer'>
            <ul className='flex min-w-0 flex-col gap-3'>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className='text-sm font-semibold text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]'>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className='flex min-w-0 flex-col gap-3 text-sm text-[var(--color-ink-muted)]'>
              <li className='flex items-center gap-2'>
                <Phone className='h-4 w-4 shrink-0' aria-hidden />
                <a href='tel:+94702495311' className='hover:text-[var(--color-ink)]'>
                  +94 70 249 5311
                </a>
              </li>
              <li className='flex items-center gap-2'>
                <Mail className='h-4 w-4 shrink-0' aria-hidden />
                <a
                  href='mailto:admin@orbitratech.net'
                  className='hover:text-[var(--color-ink)]'>
                  admin@orbitratech.net
                </a>
              </li>
              <li className='flex items-start gap-2'>
                <MapPin className='mt-0.5 h-4 w-4 shrink-0' aria-hidden />
                <span>Beruwala, Sri Lanka</span>
              </li>
            </ul>
          </nav>
        </div>

        <div className='mt-12 flex flex-col items-center justify-between gap-3 border-t border-[var(--color-rule)] pt-8 text-center text-sm text-[var(--color-ink-subtle)] md:flex-row md:text-left'>
          <p>© {year} Orbitra Tech. All rights reserved.</p>
          <p>Engineered in Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}
