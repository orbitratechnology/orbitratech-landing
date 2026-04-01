'use client';

import { ArrowRight, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { AnimatedGradientText } from './ui/animated-gradient-text';
import { FlickeringGrid } from './ui/flickering-grid';
import { Meteors } from './ui/meteors';
import { Particles } from './ui/particles';
import { WhatsAppIcon } from './ui/whatsapp-icon';

const WHATSAPP_URL =
  "https://wa.me/94702495311?text=Hi%20Orbitra%20Tech,%20I'm%20interested%20in%20learning%20more%20about%20your%20services.%20Could%20you%20help%20me%20digitize%20my%20business?";

const WebVisual = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox='0 0 120 120'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <rect
      x='15'
      y='25'
      width='90'
      height='65'
      rx='6'
      fill='currentColor'
      fillOpacity='0.05'
      stroke='currentColor'
      strokeWidth='3'
    />
    <circle cx='27' cy='35' r='3' fill='currentColor' />
    <circle cx='37' cy='35' r='3' fill='currentColor' fillOpacity='0.4' />
    <circle cx='47' cy='35' r='3' fill='currentColor' fillOpacity='0.4' />
    <path d='M15 45H105' stroke='currentColor' strokeWidth='3' />
    <rect x='25' y='55' width='40' height='8' rx='4' fill='currentColor' />
    <rect
      x='25'
      y='70'
      width='25'
      height='6'
      rx='3'
      fill='currentColor'
      fillOpacity='0.4'
    />
    <path
      d='M80 58L90 68L80 78'
      stroke='currentColor'
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const MobileVisual = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox='0 0 120 120'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <rect
      x='35'
      y='15'
      width='50'
      height='90'
      rx='12'
      fill='currentColor'
      fillOpacity='0.05'
      stroke='currentColor'
      strokeWidth='3'
    />
    <rect x='50' y='23' width='20' height='4' rx='2' fill='currentColor' />
    <rect x='45' y='40' width='30' height='25' rx='6' fill='currentColor' />
    <circle cx='50' cy='85' r='4' fill='currentColor' fillOpacity='0.3' />
    <circle cx='60' cy='85' r='4' fill='currentColor' fillOpacity='0.6' />
    <circle cx='70' cy='85' r='4' fill='currentColor' fillOpacity='0.3' />
    <path
      d='M45 75H75'
      stroke='currentColor'
      strokeWidth='3'
      strokeLinecap='round'
    />
  </svg>
);

const SystemVisual = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox='0 0 120 120'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M60 20L95 40V80L60 100L25 80V40L60 20Z'
      fill='currentColor'
      fillOpacity='0.05'
      stroke='currentColor'
      strokeWidth='3'
      strokeLinejoin='round'
    />
    <path
      d='M60 20V60M60 60L95 40M60 60L25 40'
      stroke='currentColor'
      strokeWidth='3'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <circle cx='60' cy='60' r='6' fill='currentColor' />
    <circle cx='60' cy='20' r='5' fill='currentColor' />
    <circle cx='95' cy='40' r='5' fill='currentColor' />
    <circle cx='25' cy='40' r='5' fill='currentColor' />
    <circle cx='95' cy='80' r='5' fill='currentColor' />
    <circle cx='25' cy='80' r='5' fill='currentColor' />
    <circle cx='60' cy='100' r='5' fill='currentColor' />
  </svg>
);

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className='relative min-h-screen overflow-hidden bg-slate-50 text-slate-900'>
      {/* Dynamic Background */}
      <div className='absolute inset-0 z-0'>
        <FlickeringGrid
          className='absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]'
          squareSize={4}
          gridGap={6}
          color='#0ea5e9'
          maxOpacity={0.15}
          flickerChance={0.3}
        />
        <Particles
          className='absolute inset-0 z-0'
          quantity={100}
          ease={80}
          color='#0ea5e9'
          refresh
        />
        <Meteors number={15} />
      </div>

      <nav className='container relative z-40 p-8 mx-auto'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Link
              href='/'
              className='relative z-10 w-auto transition-transform duration-300 hover:scale-105'>
              <img
                src='/orbitra_logo.png'
                alt='Orbitra Tech'
                className='relative z-10 w-auto h-20 transition-transform duration-300 hover:scale-105'
              />
            </Link>
          </div>
          <div className='items-center hidden gap-8 px-8 font-semibold transition-all duration-300 md:flex text-slate-600'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='transition-colors duration-200 hover:text-cyan-600'>
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='p-2 transition-colors rounded-lg md:hidden text-slate-600 hover:text-cyan-600 hover:bg-cyan-50'>
            {isMenuOpen ? (
              <X className='w-8 h-8' />
            ) : (
              <Menu className='w-8 h-8' />
            )}
          </button>
        </div>

        {/* Mobile menu content */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className='absolute left-0 right-0 z-50 p-6 mx-6 mt-4 border shadow-2xl md:hidden top-24 bg-white/90 backdrop-blur-xl rounded-3xl border-slate-200'>
              <div className='flex flex-col gap-6 text-center'>
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * idx }}
                    onClick={() => setIsMenuOpen(false)}
                    className='text-xl font-bold transition-all duration-200 text-slate-700 hover:text-cyan-600'>
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className='container relative z-10 px-6 pb-32 mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <img
            src='/orbitra_logo_wide.png'
            alt='Orbitra Tech'
            className='w-auto h-32 mb-8 md:h-48 drop-shadow-xl'
          />

          <h1 className='max-w-5xl mb-8 text-6xl font-black tracking-tight leading-[1.1] md:text-8xl text-slate-900'>
            Build your <br className='hidden md:block' />
            <AnimatedGradientText
              speed={2}
              colorFrom='#0ea5e9'
              colorTo='#9333ea'>
              Digital Empire
            </AnimatedGradientText>
          </h1>

          <p className='max-w-2xl mb-12 text-lg font-medium leading-relaxed md:text-xl text-slate-600'>
            At <strong className='text-slate-900'>Orbitra Tech</strong>, we
            don&apos;t just build software. We architect the future of Sri
            Lankan businesses through high-performance digital solutions that
            scale.
          </p>

          <div className='flex flex-col items-center justify-center gap-6 mb-24 sm:flex-row'>
            <a
              href={WHATSAPP_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='relative w-full group sm:w-auto hover:scale-[1.02] transition-transform duration-300'>
              <div className='relative flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white transition-all duration-300 bg-black rounded-full shadow-lg'>
                <WhatsAppIcon className='w-6 h-6 text-white' />
                <span>Start Transformation</span>
                <ArrowRight className='w-5 h-5 text-white transition-transform group-hover:translate-x-1' />
              </div>
            </a>
            <a
              href='#services'
              className='flex items-center justify-center w-full px-10 py-5 text-lg font-medium text-black transition-all duration-300 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-100 hover:shadow-md hover:-translate-y-1 sm:w-auto'>
              Explore Services
            </a>
          </div>

          <div className='grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3'>
            {[
              {
                visual: WebVisual,
                title: 'Modern Web',
                desc: 'Enterprise-grade fast web apps',
                color: 'cyan',
              },
              {
                visual: MobileVisual,
                title: 'Native Mobile',
                desc: 'Exquisite iOS & Android apps',
                color: 'purple',
              },
              {
                visual: SystemVisual,
                title: 'Smart Systems',
                desc: 'Next-gen AI Automation',
                color: 'blue',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className='relative p-6 overflow-hidden text-center transition-all duration-500 border shadow-xl sm:p-8 bg-white/80 border-slate-200 backdrop-blur-xl group rounded-3xl hover:border-cyan-400/50 hover:shadow-2xl'>
                <div className='absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-b from-slate-50 to-transparent group-hover:opacity-100' />

                <div
                  className={cn(
                    'relative flex items-center justify-center mb-8 rounded-2xl w-full h-40 transition-transform duration-500 group-hover:scale-105 shadow-inner bg-gradient-to-br',
                    feature.color === 'cyan'
                      ? 'from-cyan-50 to-white text-cyan-500 border border-cyan-100'
                      : feature.color === 'purple'
                        ? 'from-purple-50 to-white text-purple-500 border border-purple-100'
                        : 'from-blue-50 to-white text-blue-500 border border-blue-100',
                  )}>
                  <feature.visual className='w-24 h-24 drop-shadow-sm' />
                </div>
                <h3 className='relative mb-2 text-2xl font-bold tracking-wide text-slate-900'>
                  {feature.title}
                </h3>
                <p className='relative font-medium text-slate-600'>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
