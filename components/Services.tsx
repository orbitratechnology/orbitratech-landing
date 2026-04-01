import { Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';
import { FlickeringGrid } from './ui/flickering-grid';

// SVG components definitions
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

const TransformationVisual = ({ className }: { className?: string }) => (
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
    <path
      d='M70 70L85 85'
      stroke='currentColor'
      strokeWidth='3'
      strokeLinecap='round'
      strokeDasharray='4 4'
    />
    <path
      d='M50 70L35 85'
      stroke='currentColor'
      strokeWidth='3'
      strokeLinecap='round'
      strokeDasharray='4 4'
    />
  </svg>
);

const AIVisual = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox='0 0 120 120'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <rect
      x='25'
      y='30'
      width='70'
      height='60'
      rx='10'
      fill='currentColor'
      fillOpacity='0.05'
      stroke='currentColor'
      strokeWidth='3'
    />
    <circle cx='45' cy='55' r='6' fill='currentColor' />
    <circle cx='75' cy='55' r='6' fill='currentColor' />
    <path
      d='M50 75C50 75 55 80 60 80C65 80 70 75 70 75'
      stroke='currentColor'
      strokeWidth='3'
      strokeLinecap='round'
    />
    <path
      d='M60 15V30M15 60H25M95 60H105M60 90V105'
      stroke='currentColor'
      strokeWidth='3'
      strokeLinecap='round'
    />
  </svg>
);

const EcommerceVisual = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox='0 0 120 120'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M25 35H95L85 75H35L25 35Z'
      fill='currentColor'
      fillOpacity='0.05'
      stroke='currentColor'
      strokeWidth='3'
      strokeLinejoin='round'
    />
    <path
      d='M15 20H25L35 75'
      stroke='currentColor'
      strokeWidth='3'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <circle
      cx='45'
      cy='90'
      r='8'
      fill='currentColor'
      fillOpacity='0.2'
      stroke='currentColor'
      strokeWidth='3'
    />
    <circle
      cx='75'
      cy='90'
      r='8'
      fill='currentColor'
      fillOpacity='0.2'
      stroke='currentColor'
      strokeWidth='3'
    />
    <path
      d='M45 50H75'
      stroke='currentColor'
      strokeWidth='3'
      strokeLinecap='round'
    />
  </svg>
);

const ChatbotVisual = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox='0 0 120 120'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M25 35C25 29.4772 29.4772 25 35 25H85C90.5228 25 95 29.4772 95 35V75C95 80.5228 90.5228 85 85 85H40L25 100V35Z'
      fill='currentColor'
      fillOpacity='0.05'
      stroke='currentColor'
      strokeWidth='3'
      strokeLinejoin='round'
    />
    <circle cx='45' cy='55' r='5' fill='currentColor' />
    <circle cx='60' cy='55' r='5' fill='currentColor' />
    <circle cx='75' cy='55' r='5' fill='currentColor' />
  </svg>
);

const CloudVisual = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox='0 0 120 120'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M35 70C26.7157 70 20 63.2843 20 55C20 46.7157 26.7157 40 35 40C37.0706 40 39.043 40.4198 40.8306 41.1738C44.3855 31.5794 53.4839 25 64 25C76.993 25 87.6975 35.0359 88.8922 47.8184C95.7335 49.3364 101 55.4578 101 63C101 71.8366 93.8366 79 85 79H35Z'
      fill='currentColor'
      fillOpacity='0.05'
      stroke='currentColor'
      strokeWidth='3'
      strokeLinejoin='round'
    />
    <rect
      x='40'
      y='85'
      width='40'
      height='15'
      rx='4'
      fill='currentColor'
      fillOpacity='0.3'
      stroke='currentColor'
      strokeWidth='2'
    />
    <circle cx='50' cy='92.5' r='3' fill='currentColor' />
    <circle cx='70' cy='92.5' r='3' fill='currentColor' />
    <path
      d='M60 45V65M50 55L60 65L70 55'
      stroke='currentColor'
      strokeWidth='3'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const services = [
  {
    visual: WebVisual,
    title: 'Website Development',
    description: 'High-conversion, lightning-fast digital experiences.',
  },
  {
    visual: MobileVisual,
    title: 'Mobile Solutions',
    description: 'Premium iOS & Android apps that users love.',
  },
  {
    visual: TransformationVisual,
    title: 'Digital Transformation',
    description: 'Reinventing SMEs with modern tech stacks.',
  },
  {
    visual: AIVisual,
    title: 'AI Automation',
    description: 'Smart workflows that save hundreds of hours.',
  },
  {
    visual: EcommerceVisual,
    title: 'E-Commerce',
    description: 'Next-gen online stores with seamless payments.',
  },
  {
    visual: ChatbotVisual,
    title: 'AI Chatbots',
    description: '24/7 automated customer support agents.',
  },
  {
    visual: CloudVisual,
    title: 'Cloud Infrastructure',
    description: 'Secure, scalable, and reliable hosting.',
  },
];

export default function Services() {
  return (
    <section
      id='services'
      className='relative py-32 overflow-hidden bg-white text-slate-900'>
      {/* Dynamic Background with FlickeringGrid */}
      <div className='absolute inset-0 z-0'>
        <FlickeringGrid
          className='absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_100%)]'
          squareSize={6}
          gridGap={10}
          color='#111111'
          maxOpacity={0.1}
          flickerChance={0.5}
        />
      </div>

      {/* Decorative blurs */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-900/20 blur-[200px] rounded-full pointer-events-none mix-blend-screen' />

      <div className='container relative z-10 px-6 mx-auto'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-24 text-center'>
            <div className='inline-flex items-center gap-2 px-5 py-2 mb-6 text-sm font-bold text-black border rounded-full shadow-lg bg-cyan-900/20 border-cyan-800/30 backdrop-blur-md'>
              <Sparkles className='w-4 h-4' />
              <span>Full-Stack Expertise</span>
            </div>
            <h2 className='mb-6 text-4xl font-black tracking-tight text-black md:text-6xl'>
              Everything you need to{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500'>
                Scale
              </span>
            </h2>
            <p className='max-w-2xl mx-auto text-xl font-medium text-slate-500'>
              <strong className='text-slate-700'>Orbitra Tech</strong> combines
              cutting-edge technology with deep business understanding to
              deliver results that matter to your bottom line.
            </p>
          </div>

          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {services.map((service, index) => {
              const Visual = service.visual;
              return (
                <div key={index} className='h-full shadow-xl rounded-2xl'>
                  <div className='relative z-10 flex flex-col items-center h-full p-8 text-center'>
                    <div
                      className={cn(
                        'relative flex items-center justify-center mb-8 rounded-2xl w-full h-32 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105',
                        'bg-gradient-to-br from-white to-transparent border',
                      )}>
                      <Visual className='w-20 h-20 drop-shadow-lg' />
                      <div className='absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-cyan-500/20 to-transparent group-hover:opacity-100 rounded-2xl' />
                    </div>

                    <h3 className='mb-3 text-xl font-bold tracking-wide transition-colors group-hover:text-cyan-300'>
                      {service.title}
                    </h3>
                    <p className='font-medium leading-relaxed text-slate-500'>
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
