'use client';

import { CalendarCheck } from 'lucide-react';

import { Canvas, Card, Pill, Text, Tick } from './parts';
import { legendReset, legendStep, SceneShell, tap, type SceneBuild } from './scene-shell';
import { StepLegend } from './StepLegend';

const PLAN = ['Choose a time', 'Confirm', 'Reminder'];
const DATES = ['Mon 12', 'Tue 13', 'Wed 14'];
const TIMES = ['9:00', '10:30', '13:00', '15:30'];

const build: SceneBuild = (tl, q) => {
  legendReset(tl, q);
  tl.set(q('.m-pick'), { autoAlpha: 0 }, 0.001);
  tl.from(q('.m-plan'), { autoAlpha: 0, y: 14, duration: 0.5, ease: 'power3.out' }, 0.1);
  tl.from(q('.m-plan-row'), { autoAlpha: 0, x: -10, stagger: 0.12, duration: 0.4, ease: 'power2.out' }, 0.4);
  legendStep(tl, q, 0, 0.6);
  tl.from(q('.m-phone'), { autoAlpha: 0, y: 18, duration: 0.6, ease: 'power3.out' }, 1.3);
  tl.from(q('.m-phone-part'), { autoAlpha: 0, y: 10, stagger: 0.08, duration: 0.4, ease: 'power2.out' }, 1.6);
  legendStep(tl, q, 1, 2.0);
  tap(tl, q('.m-tap-date')[0], 2.5);
  tl.to(q('.m-pick-date'), { autoAlpha: 1, duration: 0.25 }, 2.55);
  tap(tl, q('.m-tap-time')[0], 3.0);
  tl.to(q('.m-pick-time'), { autoAlpha: 1, duration: 0.25 }, 3.05);
  tl.to(q('.m-pick-summary'), { autoAlpha: 1, duration: 0.3 }, 3.2);
  tap(tl, q('.m-tap-confirm')[0], 3.6);
  tl.from(q('.m-store'), { autoAlpha: 0, x: 14, stagger: 0.15, duration: 0.5, ease: 'power3.out' }, 3.9);
  tl.from(q('.m-live'), { autoAlpha: 0, scale: 0.4, transformOrigin: '50% 50%', stagger: 0.15, duration: 0.35, ease: 'back.out(2)' }, 4.3);
  legendStep(tl, q, 2, 4.2);
  tl.from(q('.m-toast'), { autoAlpha: 0, y: -14, duration: 0.5, ease: 'power3.out' }, 4.8);
  tl.addLabel('hold', 5.4);
  tl.to({}, { duration: 2.8 }, 'hold');
  tl.to(q('.m-all'), { autoAlpha: 0, duration: 0.4, ease: 'power1.in' });
};

export function MobileAppScene({ className, active }: { className?: string; active?: boolean }) {
  return (
    <SceneShell
      build={build}
      active={active}
      className={className}
      caption='A booking app is planned screen by screen, built once for iPhone and Android, published on the App Store and Google Play, and sends the customer a booking confirmation.'>
      <Canvas w={440} h={440}>
        <g className='m-all'>
          {/* 1. The plan */}
          <Card x={0} y={10} w={150} h={196} className='m-plan'>
            <Text x={14} y={38} lines='App plan' weight={600} />
            {PLAN.map((label, index) => (
              <g key={label} className='m-plan-row'>
                <rect x={14} y={52 + index * 48} width={122} height={40} rx={10} className='sv-tint' />
                <rect x={22} y={58 + index * 48} width={18} height={28} rx={4} className='sv-tint-2' />
                <Text x={48} y={77 + index * 48} lines={label} size={12.5} />
              </g>
            ))}
          </Card>

          {/* 2. The app itself */}
          <Card x={164} y={10} w={170} h={330} r={28} className='m-phone'>
            <g className='m-phone-part'>
              <Text x={178} y={46} lines='Book a visit' size={15} weight={600} />
              <Text x={178} y={64} lines='Example Clinic' size={11.5} className='sv-muted' />
            </g>
            <g className='m-phone-part'>
              {DATES.map((label, index) => (
                <Pill key={label} x={178 + index * 48} y={78} w={44} h={30} label={label} tone='tint' size={10.5} />
              ))}
              <g className='m-pick m-pick-date'>
                <Pill x={226} y={78} w={44} h={30} label='Tue 13' tone='accent' size={10.5} />
              </g>
              <circle cx={248} cy={93} r={18} className='sv-accent m-tap-date' style={{ opacity: 0 }} />
            </g>
            <g className='m-phone-part'>
              <Text x={178} y={130} lines='Morning and afternoon' size={11.5} className='sv-muted' />
              {TIMES.map((label, index) => (
                <Pill
                  key={label}
                  x={178 + (index % 2) * 74}
                  y={140 + Math.floor(index / 2) * 38}
                  w={68}
                  h={30}
                  label={label}
                  tone='outline'
                  size={12}
                />
              ))}
              <g className='m-pick m-pick-time'>
                <Pill x={252} y={140} w={68} h={30} label='10:30' tone='accent' size={12} />
              </g>
              <circle cx={286} cy={155} r={18} className='sv-accent m-tap-time' style={{ opacity: 0 }} />
            </g>
            <g className='m-phone-part'>
              <rect x={178} y={222} width={142} height={54} rx={12} className='sv-tint' />
              <Text x={190} y={244} lines='Tue 13 at 10:30' weight={600} />
              <Text x={190} y={263} lines='General check-up' size={11.5} className='sv-muted' />
              <g className='m-pick m-pick-summary'>
                <Tick cx={304} cy={240} r={8} />
              </g>
            </g>
            <g className='m-phone-part'>
              <Pill x={178} y={290} w={142} h={36} label='Confirm booking' tone='accent' size={13} />
              <circle cx={249} cy={308} r={22} className='sv-accent m-tap-confirm' style={{ opacity: 0 }} />
            </g>
          </Card>

          {/* 3. Published to both stores */}
          {[
            { label: 'App Store', src: '/platforms/app-store.png', y: 40 },
            { label: 'Google Play', src: '/platforms/google-play.png', y: 156 },
          ].map((store) => (
            <g key={store.label}>
              <Card x={348} y={store.y} w={92} h={100} className='m-store'>
                <image href={store.src} x={374} y={store.y + 18} width={40} height={40} />
                <Text x={394} y={store.y + 82} lines={store.label} size={12} weight={600} anchor='middle' />
              </Card>
              <g className='m-live'>
                <Tick cx={436} cy={store.y + 4} r={10} />
              </g>
            </g>
          ))}

          {/* The confirmation reaches the customer */}
          <Card x={0} y={226} w={150} h={78} className='m-toast'>
            <rect x={12} y={240} width={30} height={30} rx={8} className='sv-accent' />
            <CalendarCheck x={19} y={247} width={16} height={16} className='sv-icon-on-accent' />
            <Text x={50} y={252} lines='Booked' size={13} weight={600} />
            <Text x={50} y={270} lines={['Tue 13, 10:30']} size={11.5} className='sv-muted' />
            <Text x={12} y={292} lines='Reminder sent' size={11.5} className='sv-muted' />
          </Card>

          <StepLegend
            y={372}
            steps={[
              ['Plan the', 'key screens'],
              ['Build for iPhone', 'and Android'],
              ['Publish to', 'both stores'],
            ]}
          />
        </g>
      </Canvas>
    </SceneShell>
  );
}
