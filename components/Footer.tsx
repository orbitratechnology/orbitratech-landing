import { Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { WhatsAppIcon } from './ui/whatsapp-icon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='relative bg-[#020408] border-t border-white/5 pt-20 pb-10 overflow-hidden z-20'>
      {/* Subtle Background Glow */}
      <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen' />
      <div className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen' />

      <div className='container relative z-10 px-6 mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 gap-12 mb-16 md:grid-cols-2 lg:grid-cols-4'>
          {/* Brand & Description */}
          <div className='flex flex-col gap-6 lg:col-span-2'>
            <a href='#' className='flex items-center gap-3'>
              <img
                src='/orbitra_logo.png'
                alt='Orbitra Tech Logo'
                className='w-auto h-16'
              />
            </a>
            <p className='max-w-md text-lg leading-relaxed text-slate-400'>
              Empowering Sri Lankan SMEs with practical, affordable digital
              solutions. From high-conversion web apps to AI automation.
            </p>
            <div className='flex items-center gap-4 mt-2'>
              <a
                href='https://www.facebook.com/profile.php?id=61586622600161'
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 transition-colors border rounded-full bg-white/5 border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-900/20'>
                <FaFacebook className='w-5 h-5' />
              </a>
              <a
                href='https://www.instagram.com/orbitratech'
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 transition-colors border rounded-full bg-white/5 border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-900/20'>
                <FaInstagram className='w-5 h-5' />
              </a>
              <a
                href='https://www.linkedin.com/in/orbitra-tech-org-7206523a6/'
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 transition-colors border rounded-full bg-white/5 border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-900/20'>
                <FaLinkedin className='w-5 h-5' />
              </a>
              <a
                href='https://wa.me/94702495311'
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 transition-colors border rounded-full bg-white/5 border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-900/20'>
                <WhatsAppIcon className='w-5 h-5' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='flex flex-col gap-6'>
            <h3 className='text-xl font-bold tracking-wide text-white'>
              Quick Links
            </h3>
            <ul className='flex flex-col gap-4'>
              <li>
                <a
                  href='#about'
                  className='font-medium transition-colors text-slate-400 hover:text-cyan-400'>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='#services'
                  className='font-medium transition-colors text-slate-400 hover:text-cyan-400'>
                  Services
                </a>
              </li>
              <li>
                <a
                  href='#projects'
                  className='font-medium transition-colors text-slate-400 hover:text-cyan-400'>
                  Projects
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='font-medium transition-colors text-slate-400 hover:text-cyan-400'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='flex flex-col gap-6'>
            <h3 className='text-xl font-bold tracking-wide text-white'>
              Get in Touch
            </h3>
            <ul className='flex flex-col gap-5'>
              <li className='flex items-center gap-4 text-slate-400'>
                <Phone className='w-5 h-5 text-white' />

                <a
                  href='tel:+94702495311'
                  className='font-medium transition-colors hover:text-white'>
                  +94 70 249 5311
                </a>
              </li>
              <li className='flex items-center gap-4 text-slate-400'>
                <Mail className='w-5 h-5 text-white' />

                <a
                  href='mailto:admin@orbitratech.net'
                  className='font-medium transition-colors hover:text-white'>
                  admin@orbitratech.net
                </a>
              </li>
              <li className='flex items-center gap-4 text-slate-400'>
                <MapPin className='w-5 h-5 text-white' />

                <span className='font-medium'>Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='flex flex-col items-center justify-between gap-4 pt-8 text-center border-t border-white/10 text-slate-500 md:flex-row'>
          <p className='font-medium'>
            © {currentYear} Orbitra Tech. All rights reserved.
          </p>
          <p className='text-sm font-medium'>
            Developed with{' '}
            <span className='inline-block text-red-500 animate-pulse'>♥</span>{' '}
            in Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}
