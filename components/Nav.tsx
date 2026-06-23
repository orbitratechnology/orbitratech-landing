'use client';

import { NAV_LINKS, WHATSAPP_URL } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { WhatsAppIcon } from './ui/whatsapp-icon';

export default function Nav() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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

  return (
    <header className='fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6'>
      <nav
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border px-4 py-2.5 transition-[background,border-color,box-shadow] duration-[var(--dur-base)] md:px-5',
          scrolled
            ? 'border-[var(--color-rule)] bg-[var(--color-paper-2)]/95 shadow-[0_4px_24px_var(--color-shadow-soft)] backdrop-blur-xl'
            : 'border-transparent bg-[var(--color-paper)]/70 backdrop-blur-sm',
        )}
        aria-label='Primary'>
        <Link href='/' className='flex shrink-0 items-center gap-2.5'>
          <Image
            src='/orbitra_logo.png'
            alt='Orbitra Tech'
            width={40}
            height={40}
            className='h-9 w-9 md:h-10 md:w-10'
            priority
          />
          <span className='hidden font-[family-name:var(--font-display)] text-sm font-semibold tracking-tight text-[var(--color-ink)] sm:inline'>
            Orbitra Tech
          </span>
        </Link>

        <div className='hidden items-center gap-1 md:flex'>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='rounded-full px-3.5 py-2 text-sm font-semibold text-[var(--color-ink-muted)] transition-colors duration-[var(--dur-fast)] hover:bg-[var(--color-paper-3)] hover:text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]'>
              {link.label}
            </Link>
          ))}
        </div>

        <div className='hidden shrink-0 md:flex'>
          <a
            href={WHATSAPP_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='btn-cta btn-whatsapp'>
            <WhatsAppIcon className='h-4 w-4' aria-hidden />
            Talk on WhatsApp
          </a>
        </div>

        <button
          type='button'
          onClick={toggleMenu}
          className='ml-auto inline-flex rounded-full p-2.5 text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-paper-3)] hover:text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] md:hidden'
          aria-expanded={open}
          aria-controls='mobile-nav'
          aria-haspopup='dialog'
          aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X className='h-6 w-6' aria-hidden /> : <Menu className='h-6 w-6' aria-hidden />}
        </button>
      </nav>

      <dialog
        ref={dialogRef}
        id='mobile-nav'
        aria-label='Mobile navigation'
        className='mobile-nav-dialog md:hidden'
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            closeMenu();
          }
        }}>
        <div className='mx-auto max-w-6xl overflow-hidden rounded-2xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-4 shadow-[0_8px_32px_var(--color-shadow-soft)]'>
          <div className='flex flex-col gap-1'>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className='rounded-xl px-4 py-3 text-base font-semibold text-[var(--color-ink)] hover:bg-[var(--color-paper-3)]'>
                {link.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target='_blank'
              rel='noopener noreferrer'
              onClick={closeMenu}
              className='btn-cta btn-cta-lg btn-whatsapp btn-cta-fluid mt-2'>
              <WhatsAppIcon className='h-5 w-5' aria-hidden />
              Talk on WhatsApp
            </a>
          </div>
        </div>
      </dialog>
    </header>
  );
}
