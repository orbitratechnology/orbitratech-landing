'use client';

import { NAV_LINKS, WHATSAPP_URL } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { WhatsAppIcon } from './ui/whatsapp-icon';

// The one sticky bar on the page: a hairline edge appears once content scrolls under it.
const NAV_SOLID = 'bg-[var(--color-paper)] shadow-[0_1px_0_var(--color-paper-4)]'; // taste-skill-ignore

export default function Nav() {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => {
    dialogRef.current?.close();
    setOpen(false);
  };

  const toggleMenu = () => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (dialog.open) {
      closeMenu();
      return;
    }

    dialog.showModal();
    setOpen(true);
  };

  const hrefFor = (href: string) => `${pathname === '/' ? '' : '/'}${href}`;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-[var(--dur-base)]',
        scrolled || open ? NAV_SOLID : 'bg-transparent',
      )}>
      <nav className='shell flex h-[4.5rem] items-center justify-between gap-6' aria-label='Primary'>
        <Link href='/' className='flex shrink-0 items-center gap-2.5' aria-label='Orbitra Tech, home'>
          <Image
            src='/orbitra_logo.png'
            alt=''
            width={40}
            height={40}
            className='size-9'
            priority
          />
          <span className='font-[family-name:var(--font-display)] text-[1.1875rem] font-semibold tracking-[-0.02em] text-[var(--color-ink)]'>
            Orbitra Tech
          </span>
        </Link>

        <div className='hidden items-center gap-1 lg:flex'>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={hrefFor(link.href)}
              className='rounded-full px-4 py-2 text-[length:var(--text-sm)] font-semibold text-[var(--color-ink-muted)] transition-colors duration-[var(--dur-fast)] hover:bg-[var(--color-paper-3)] hover:text-[var(--color-ink)]'>
              {link.label}
            </Link>
          ))}
        </div>

        <div className='hidden shrink-0 lg:flex'>
          <a
            href={WHATSAPP_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='btn-cta btn-soft'>
            <WhatsAppIcon className='size-4 text-[var(--color-whatsapp-strong)]' aria-hidden />
            WhatsApp us
          </a>
        </div>

        <button
          type='button'
          onClick={toggleMenu}
          className='ml-auto inline-flex size-11 items-center justify-center rounded-full text-[var(--color-ink)] transition-colors hover:bg-[var(--color-paper-3)] lg:hidden'
          aria-expanded={open}
          aria-controls='mobile-nav'
          aria-haspopup='dialog'
          aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X className='size-6' aria-hidden /> : <Menu className='size-6' aria-hidden />}
        </button>
      </nav>

      <dialog
        ref={dialogRef}
        id='mobile-nav'
        aria-label='Mobile navigation'
        className='mobile-nav-dialog lg:hidden'
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            closeMenu();
          }
        }}>
        <div className='overflow-hidden rounded-[var(--radius-xl)] bg-[var(--color-paper-2)] p-3 shadow-[var(--shadow-menu)]'> {/* taste-skill-ignore: a real overlay */}
          <div className='flex flex-col'>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={hrefFor(link.href)}
                onClick={closeMenu}
                className='rounded-[var(--radius-md)] px-4 py-3.5 text-[length:var(--text-lg)] font-semibold text-[var(--color-ink)] hover:bg-[var(--color-paper-3)]'>
                {link.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target='_blank'
              rel='noopener noreferrer'
              onClick={closeMenu}
              className='btn-cta btn-cta-lg btn-whatsapp btn-cta-fluid mt-3'>
              <WhatsAppIcon className='size-5' aria-hidden />
              Talk on WhatsApp
            </a>
          </div>
        </div>
      </dialog>
    </header>
  );
}
