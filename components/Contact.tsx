import { Mail, MapPin, Phone } from 'lucide-react';
import { Particles } from './ui/particles';
import { WhatsAppIcon } from './ui/whatsapp-icon';

const WHATSAPP_URL =
  "https://wa.me/94702495311?text=Hi%20Orbitra%20Tech,%20I'd%20like%20to%20discuss%20a%20project.";

export default function Contact() {
  return (
    <section
      id='contact'
      className='py-24 bg-[#ffffff] relative overflow-hidden text-black'>
      <Particles
        className='absolute inset-0 z-0'
        quantity={60}
        ease={80}
        color='#000000'
        refresh
      />

      <div className='container relative z-10 px-6 mx-auto'>
        <div className='max-w-3xl mx-auto mb-16 text-center'>
          <h2 className='mb-6 text-4xl font-extrabold tracking-tight md:text-5xl'>
            Let&apos;s Start a{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500'>
              Conversation
            </span>
          </h2>
          <p className='text-lg text-slate-500'>
            Ready to elevate your business with{' '}
            <strong className='text-slate-800'>Orbitra Tech</strong>? Reach out
            to us for a free consultation and discover how our digital
            transformation services can accelerate your growth.
          </p>
        </div>

        <div className='grid max-w-5xl gap-12 mx-auto lg:grid-cols-2'>
          {/* Contact Info */}
          <div className='space-y-8'>
            <div className='p-8 border bg-white/5 border-white/10 rounded-3xl backdrop-blur-sm'>
              <h3 className='mb-8 text-2xl font-bold'>Contact Information</h3>
              <div className='space-y-6'>
                <div className='flex items-start gap-4'>
                  <div className='flex items-center justify-center flex-shrink-0 w-12 h-12 border rounded-xl bg-cyan-500/20 text-cyan-600 border-cyan-500/30'>
                    <Phone className='w-6 h-6' />
                  </div>
                  <div>
                    <h4 className='mb-1 font-semibold text-slate-800'>
                      Phone & WhatsApp
                    </h4>
                    <p className='text-slate-500'>+94 70 249 5311</p>
                    <a
                      href={WHATSAPP_URL}
                      target='_blank'
                      rel='noreferrer'
                      className='inline-block mt-2 text-sm text-cyan-400 hover:text-cyan-300 hover:underline'>
                      Message us on WhatsApp &rarr;
                    </a>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='flex items-center justify-center flex-shrink-0 w-12 h-12 text-purple-400 border rounded-xl bg-purple-500/20 border-purple-500/30'>
                    <Mail className='w-6 h-6' />
                  </div>
                  <div>
                    <h4 className='mb-1 font-semibold text-slate-800'>Email</h4>
                    <a
                      href='mailto:admin@orbitratech.net'
                      className='transition-colors text-slate-500 hover:text-cyan-400'>
                      admin@orbitratech.net
                    </a>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='flex items-center justify-center flex-shrink-0 w-12 h-12 text-blue-400 border rounded-xl bg-blue-500/20 border-blue-500/30'>
                    <MapPin className='w-6 h-6' />
                  </div>
                  <div>
                    <h4 className='mb-1 font-semibold text-slate-800'>
                      Location
                    </h4>
                    <p className='text-slate-500'>
                      Beruwala, Sri Lanka
                      <br />
                      Available for remote work worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form / Action Box */}
          <div className='relative flex flex-col justify-center h-full p-8 overflow-hidden border shadow-lg rounded-3xl backdrop-blur-sm'>
            <div className='relative z-10 space-y-6 text-center'>
              <div className='inline-flex items-center justify-center w-16 h-16 mb-2 rounded-full bg-white/10'>
                <WhatsAppIcon className='w-8 h-8 text-cyan-400' />
              </div>
              <h3 className='text-2xl font-bold'>Ready to get started?</h3>
              <p className='mb-8 text-slate-400'>
                Click the button below to send us a message directly via
                WhatsApp. We usually reply within an hour.
              </p>
              <div className='flex justify-center'>
                <a
                  href={WHATSAPP_URL}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white transition-all duration-300 bg-black rounded-full hover:bg-gray-800 hover:-translate-y-1 hover:shadow-lg'>
                  <WhatsAppIcon className='w-5 h-5 mr-2 -ml-1 text-white' />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
