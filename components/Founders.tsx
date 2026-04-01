import { Globe, Mail } from 'lucide-react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const founders = [
  {
    name: 'Bilal',
    role: 'Founder & CEO',
    bio: "Leads Orbitra Tech's client strategy, commercial development, and project delivery. Built the company from zero capital into a full-service digital engineering firm, closing enterprise-level engagements",
    image: '/bilal.jpg',
    socials: [
      {
        icon: FaLinkedin,
        url: 'https://www.linkedin.com/in/mohamed-suhair-bilal-ahamed-bb5766344/',
        label: 'LinkedIn',
      },
      {
        icon: FaTwitter,
        url: 'https://x.com/AdhhamDev',
        label: 'Twitter',
      },
      {
        icon: Mail,
        url: 'mailto:ahamedbilal622@gmail.com',
        label: 'Email',
      },
    ],
  },
  {
    name: 'Adhham',
    role: 'Founder & CTO',
    bio: 'An expert software architect specializing in native mobile apps and modern web ecosystems. Adhham drives the technical innovation at Orbitra Tech, ensuring every line of code meets enterprise standards.',
    image: '/adhham.jpg',
    website: 'https://adhham.dev',
    socials: [
      {
        icon: FaTwitter,
        url: 'https://x.com/AdhhamDev',
        label: 'Twitter',
      },
      {
        icon: FaLinkedin,
        url: 'https://www.linkedin.com/in/adhham',
        label: 'LinkedIn',
      },
      {
        icon: Mail,
        url: 'mailto:msmadhhamg@gmail.com',
        label: 'Email',
      },
      {
        icon: Globe,
        url: 'https://adhham.dev',
        label: 'Website',
      },
    ],
  },
];

export default function Founders() {
  return (
    <section
      id='founders'
      className='relative py-32 bg-[#ffffff] overflow-hidden'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen' />

      <div className='container relative z-10 px-6 mx-auto'>
        <div className='max-w-5xl mx-auto'>
          <div className='mb-20 text-center'>
            <h2 className='mb-6 text-4xl font-black tracking-tight text-black md:text-5xl'>
              Meet the{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500'>
                Founders
              </span>
            </h2>
            <p className='max-w-2xl mx-auto text-xl font-medium text-slate-400'>
              The <strong>Orbitra Tech</strong> visionaries driving digital
              transformation for businesses in Sri Lanka and beyond.
            </p>
          </div>

          <div className='grid max-w-4xl gap-8 mx-auto md:grid-cols-2'>
            {founders.map((founder, index) => (
              <div key={index} className='h-full'>
                <div className='flex flex-col items-center h-full p-10 text-center border shadow-xl rounded-3xl'>
                  <div className='relative mb-6'>
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className='relative object-cover w-40 h-40 transition-transform duration-500 rounded-full shadow-lg border-slate-700 group-hover:scale-105'
                    />
                  </div>

                  <h3 className='mb-2 text-3xl font-black tracking-wide text-black'>
                    {founder.name}
                  </h3>
                  <p className='mb-4 text-lg font-bold text-slate-500'>
                    {founder.role}
                  </p>
                  <p className='max-w-xs mb-8 font-medium leading-relaxed text-slate-400'>
                    {founder.bio}
                  </p>

                  <div className='flex items-center gap-4 mt-auto'>
                    {founder.socials.map((social, idx) => {
                      const Icon = social.icon;
                      const isWebsite = social.label === 'Website';
                      return (
                        <a
                          key={idx}
                          href={
                            isWebsite && founder.website
                              ? founder.website
                              : social.url
                          }
                          target='_blank'
                          rel='noopener noreferrer'
                          className='p-3 transition-colors border rounded-full bg-white/5 border-slate-200 text-slate-500 hover:text-black hover:border-slate-400 hover:bg-slate-100'
                          title={social.label}>
                          <Icon className='w-5 h-5' />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
