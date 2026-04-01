import { Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';
import { FlickeringGrid } from './ui/flickering-grid';
import { MagicCard } from './ui/magic-card';

const projects = [
  {
    image: '/worknet-logo.png',
    title: 'Worknet',
    status: 'In Development',
    statusColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    description:
      'A dedicated mobile application empowering the workforce. Designed to connect workers with vast opportunities, streamline job hunting, and manage daily operations efficiently.',
    features: ['Job matching', 'Worker profile', 'Task management'],
  },
  {
    image: '/gemnet-logo.png',
    title: 'Gemnet',
    status: 'Planned',
    statusColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    description:
      'An exclusive mobile network tailored for Gem businessmen. Discover, trade, and connect within a secure digital marketplace dedicated to the precious stone industry.',
    features: ['B2B trading', 'Authenticity verification', 'Market insights'],
  },
];

export default function Projects() {
  return (
    <section
      id='projects'
      className='relative py-32 bg-[#030712] text-white overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 z-0'>
        <FlickeringGrid
          className='absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_100%)]'
          squareSize={6}
          gridGap={10}
          color='#ffffff'
          maxOpacity={0.05}
          flickerChance={0.3}
        />
      </div>

      <div className='absolute top-0 right-1/4 w-[800px] h-[800px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen' />

      <div className='container relative z-10 px-6 mx-auto'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-24 text-center'>
            <div className='inline-flex items-center gap-2 px-5 py-2 mb-6 text-sm font-bold text-purple-300 border rounded-full shadow-lg bg-purple-900/20 border-purple-800/30 backdrop-blur-md'>
              <Sparkles className='w-4 h-4' />
              <span>Our Products</span>
            </div>
            <h2 className='mb-6 text-4xl font-black tracking-tight text-white md:text-6xl'>
              Innovation in{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500'>
                Motion
              </span>
            </h2>
            <p className='max-w-2xl mx-auto text-xl font-medium text-slate-400'>
              Explore the innovative public products and mobile applications{' '}
              <strong className='text-slate-200'>Orbitra Tech</strong> is
              building to solve vital industry challenges in Sri Lanka and
              worldwide.
            </p>
          </div>

          <div className='grid gap-8 lg:grid-cols-2'>
            {projects.map((project, index) => {
              return (
                <div key={index} className='h-full'>
                  <MagicCard
                    className='flex-col h-full shadow-2xl cursor-pointer group bg-black/40'
                    gradientColor='#aaaaaa'
                    gradientOpacity={0.4}
                    gradientFrom='#a855f7'
                    gradientTo='#06b6d4'
                    gradientSize={200}>
                    <div className='relative z-10 flex flex-col p-8 sm:p-12'>
                      <div className='flex items-center justify-between mb-8'>
                        <div
                          className={cn(
                            'flex items-center justify-center rounded-full w-24 h-24 transition-transform duration-500 group-hover:scale-110',
                            'bg-gradient-to-br from-white/5 to-transparent border border-white/10 text-white',
                          )}>
                          <img
                            src={project.image}
                            alt={project.title}
                            className='object-contain w-20 h-20 rounded-full'
                          />
                        </div>
                        <span
                          className={cn(
                            'px-4 py-1.5 text-sm font-bold rounded-full border',
                            project.statusColor,
                          )}>
                          {project.status}
                        </span>
                      </div>

                      <h3 className='mb-4 text-3xl font-black tracking-wide text-white transition-colors'>
                        {project.title}
                      </h3>

                      <p className='mb-8 text-lg font-medium leading-relaxed text-slate-400'>
                        {project.description}
                      </p>

                      <div className='flex flex-col gap-4 mt-auto'>
                        <div className='flex flex-wrap gap-3'>
                          {project.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className='px-4 py-2 text-sm font-medium border rounded-full bg-white/5 border-white/10 text-slate-300'>
                              {feature}
                            </span>
                          ))}
                        </div>

                        {project.title === 'Worknet' && (
                          <div className='flex items-center gap-6 pt-4 mt-4 border-t border-white/5'>
                            <a
                              href='/worknet/privacy-policy'
                              className='text-xs font-semibold tracking-widest uppercase transition-colors duration-200 text-slate-500 hover:text-cyan-400'>
                              Privacy Policy
                            </a>
                            <a
                              href='/worknet/terms-and-conditions'
                              className='text-xs font-semibold tracking-widest uppercase transition-colors duration-200 text-slate-500 hover:text-purple-400'>
                              Terms & Conditions
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </MagicCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
