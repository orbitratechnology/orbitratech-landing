import {
  CheckCircle2,
  Eye,
  Languages,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';
import { cn } from '../lib/utils';
import { MagicCard } from './ui/magic-card';

export default function About() {
  const stats = [
    { label: 'SMEs Empowered', value: '5+' },
    { label: 'Solutions Delivered', value: '7+' },
    { label: 'Success Rate', value: '99%' },
    { label: 'Customer Satisfaction', value: '5/5' },
  ];

  return (
    <section
      id='about'
      className='relative py-32 bg-[#000000] overflow-hidden text-white border-t border-white/5'>
      <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent' />

      {/* Decorative Background Elements */}
      <div className='absolute pointer-events-none top-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-900/30 blur-[150px] rounded-full mix-blend-screen' />
      <div className='absolute pointer-events-none bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#121212] blur-[150px] rounded-full mix-blend-screen' />

      <div className='container relative z-10 px-6 mx-auto'>
        <div className='mx-auto max-w-7xl'>
          <div className='flex flex-col gap-16 lg:flex-row lg:items-center'>
            {/* Left Column: Text Content */}
            <div className='lg:w-1/2'>
              <div className='inline-flex items-center gap-2 px-5 py-2 mb-6 text-sm font-bold border rounded-full shadow-sm text-slate-300 bg-white/5 border-white/10 backdrop-blur-md'>
                <Languages className='w-4 h-4 text-cyan-400' />
                <span>Localized Excellence</span>
              </div>

              <h2 className='mb-8 text-4xl font-black tracking-tight text-white md:text-6xl'>
                Bridging the{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500'>
                  Digital Divide
                </span>
                <br />
                for Sri Lankan SMEs
              </h2>

              <p className='mb-10 text-xl font-medium leading-relaxed text-slate-400'>
                Based in the Beruwala region, Orbitra Tech is a powerhouse of
                digital innovation. We don't just sell software; we build the
                digital infrastructure that fuels local growth.
              </p>

              <div className='mb-12 space-y-4'>
                {[
                  'Fixed affordable pricing for growing businesses',
                  'Scalable solutions that grow with your revenue',
                ].map((item, i) => (
                  <div
                    key={i}
                    className='flex items-center gap-4 p-4 transition-all border rounded-2xl bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-500/50 backdrop-blur-md'>
                    <CheckCircle2 className='flex-shrink-0 w-6 h-6 text-cyan-400' />
                    <span className='text-lg font-bold text-slate-200'>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className='grid grid-cols-2 gap-8 lg:grid-cols-4'>
                {stats.map((stat, i) => (
                  <div key={i} className='text-left'>
                    <div className='mb-2 text-4xl font-black text-white'>
                      {stat.value}
                    </div>
                    <div className='text-sm font-bold tracking-wider uppercase text-cyan-500'>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Cards Grid */}
            <div className='grid gap-6 p-4 lg:w-1/2 sm:grid-cols-2'>
              {[
                {
                  icon: Target,
                  title: 'Our Mission',
                  desc: 'To democratize high-end technology for every Sri Lankan entrepreneur.',
                  color: 'cyan',
                },
                {
                  icon: Eye,
                  title: 'Our Vision',
                  desc: 'To be the catalyst for a fully digitized Sri Lankan SME ecosystem.',
                  color: 'purple',
                },
                {
                  icon: TrendingUp,
                  title: 'Our Value',
                  desc: 'ROI-focused Orbitra Tech systems that replace manual labor with smart automation.',
                  color: 'blue',
                },
                {
                  icon: Sparkles,
                  title: 'Our Style',
                  desc: 'Ultra-modern, fast, and secure designs that build trust with customers.',
                  color: 'purple',
                },
              ].map((card, i) => (
                <div key={i} className='h-full'>
                  <MagicCard
                    className='flex-col h-full shadow-2xl'
                    gradientColor='#1e293b'
                    gradientOpacity={0.5}
                    gradientFrom='#38bdf8'
                    gradientTo='#c084fc'>
                    <div className='relative z-10 flex flex-col items-start h-full p-8'>
                      <div
                        className={cn(
                          'relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 border border-white/10',
                          card.color === 'cyan'
                            ? 'bg-cyan-500/10 text-cyan-400'
                            : card.color === 'purple'
                              ? 'bg-purple-500/10 text-purple-400'
                              : 'bg-blue-500/10 text-blue-400',
                        )}>
                        <card.icon className='w-7 h-7' />
                      </div>
                      <h3 className='relative mb-3 text-2xl font-bold tracking-wide text-white'>
                        {card.title}
                      </h3>
                      <p className='relative font-medium leading-relaxed text-slate-400'>
                        {card.desc}
                      </p>
                    </div>
                  </MagicCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
