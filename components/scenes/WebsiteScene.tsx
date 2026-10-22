'use client';

import { Menu, MapPin, MessageCircle, Search } from 'lucide-react';

import { Canvas, Card, Pill, Text } from './parts';
import { legendReset, legendStep, SceneShell, tap, type SceneBuild } from './scene-shell';
import { StepLegend } from './StepLegend';

const build: SceneBuild = (tl, q) => {
  legendReset(tl, q);
  tl.from(q('.w-search'), { autoAlpha: 0, y: 14, duration: 0.5, ease: 'power3.out' }, 0.1);
  tl.set(q('.w-cover'), { autoAlpha: 1, scaleX: 1, transformOrigin: '100% 50%' }, 0.001);
  tl.to(q('.w-cover'), { scaleX: 0, duration: 0.9, ease: 'steps(14)' }, 0.55);
  tl.from(q('.w-result'), { autoAlpha: 0, y: 8, stagger: 0.08, duration: 0.4, ease: 'power2.out' }, 1.5);
  legendStep(tl, q, 0, 1.5);
  tap(tl, q('.w-tap-1')[0], 2.2);
  tl.from(q('.w-phone'), { autoAlpha: 0, y: 18, duration: 0.6, ease: 'power3.out' }, 2.5);
  tl.from(q('.w-phone-part'), { autoAlpha: 0, y: 10, stagger: 0.09, duration: 0.45, ease: 'power2.out' }, 2.8);
  legendStep(tl, q, 1, 3.2);
  tap(tl, q('.w-tap-2')[0], 4.1);
  tl.fromTo(q('.w-whatsapp'), { scale: 1 }, { scale: 0.92, duration: 0.12, yoyo: true, repeat: 1, transformOrigin: '50% 50%' }, 4.1);
  tl.from(q('.w-message'), { autoAlpha: 0, x: -16, duration: 0.55, ease: 'power3.out' }, 4.5);
  tl.from(q('.w-bubble'), { autoAlpha: 0, scale: 0.9, transformOrigin: '0% 0%', duration: 0.4, ease: 'power2.out' }, 4.8);
  legendStep(tl, q, 2, 4.8);
  tl.addLabel('hold', 5.4);
  tl.to({}, { duration: 2.8 }, 'hold');
  tl.to(q('.w-all'), { autoAlpha: 0, duration: 0.4, ease: 'power1.in' });
};

export function WebsiteScene({ className, active }: { className?: string; active?: boolean }) {
  return (
    <SceneShell
      build={build}
      active={active}
      className={className}
      caption='A customer searches for a tailor near Galle, finds the business, reads its website on a phone, and sends an enquiry on WhatsApp.'>
      <Canvas w={440} h={440}>
        <g className='w-all'>
          {/* 1. Found in search */}
          <Card x={0} y={10} w={250} h={106} className='w-search'>
            <rect x={14} y={24} width={222} height={32} rx={16} className='sv-tint' />
            <Search x={26} y={33} width={14} height={14} className='sv-icon' />
            <Text x={48} y={45} lines='tailor near Galle' className='sv-muted' />
            <rect x={46} y={30} width={186} height={20} className='sv-tint w-cover' style={{ opacity: 0 }} />
            <g className='w-result'>
              <Text x={14} y={84} lines='Example Tailors' size={15} weight={600} className='sv-accent' />
            </g>
            <g className='w-result'>
              <Text x={14} y={103} lines='Open now, Galle' size={12.5} className='sv-muted' />
              <Pill x={176} y={78} w={60} h={24} label='Website' tone='accent-soft' size={11.5} />
            </g>
            <circle cx={206} cy={90} r={18} className='sv-accent w-tap-1' style={{ opacity: 0 }} />
          </Card>

          {/* 2. Reads the site on a phone */}
          <Card x={262} y={10} w={178} h={330} r={28} className='w-phone'>
            <g className='w-phone-part'>
              <Text x={276} y={45} lines='Example Tailors' weight={600} />
              <Menu x={408} y={33} width={16} height={16} className='sv-icon' />
            </g>
            <g className='w-phone-part'>
              <rect x={276} y={58} width={150} height={92} rx={14} className='sv-accent-soft' />
              <Text x={288} y={86} lines={['Made to measure,', 'ready in 7 days']} size={14} weight={600} />
              <Pill x={288} y={114} w={96} h={24} label='Book a fitting' tone='accent' size={11} />
            </g>
            {['Suits', 'Dresses', 'Alterations'].map((label, index) => (
              <g key={label} className='w-phone-part'>
                <rect x={276} y={162 + index * 30} width={150} height={24} rx={8} className='sv-tint' />
                <Text x={288} y={178 + index * 30} lines={label} size={12.5} />
                <Text x={414} y={178 + index * 30} lines='›' size={14} anchor='end' className='sv-muted' />
              </g>
            ))}
            <g className='w-phone-part'>
              <MapPin x={276} y={258} width={13} height={13} className='sv-icon' />
              <Text x={294} y={269} lines='Galle Fort, open 9 to 6' size={11.5} className='sv-muted' />
            </g>
            <g className='w-phone-part'>
              <Pill x={276} y={288} w={68} h={34} label='Call' tone='outline' size={13} />
              <g className='w-whatsapp'>
                <Pill x={350} y={288} w={76} h={34} label='WhatsApp' tone='success' size={13} />
              </g>
              <circle cx={388} cy={305} r={20} className='sv-success w-tap-2' style={{ opacity: 0 }} />
            </g>
          </Card>

          {/* 3. Sends a message */}
          <Card x={0} y={190} w={250} h={110} className='w-message'>
            <circle cx={25} cy={212} r={11} className='sv-success' />
            <MessageCircle x={18} y={205} width={14} height={14} className='sv-icon-on-accent' />
            <Text x={44} y={217} lines='New enquiry' weight={600} />
            <Text x={236} y={217} lines='10:24' size={11.5} anchor='end' className='sv-muted' />
            <g className='w-bubble'>
              <rect x={14} y={230} width={222} height={56} rx={12} className='sv-success-soft' />
              <Text x={26} y={253} lines={['Hi, can you make a suit', 'by the 20th?']} />
            </g>
          </Card>

          <StepLegend
            y={372}
            steps={[
              ['Finds you', 'on Google'],
              ['Reads your site', 'on a phone'],
              ['Sends you', 'a message'],
            ]}
          />
        </g>
      </Canvas>
    </SceneShell>
  );
}
