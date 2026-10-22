'use client';

import { Bell, Store } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { Canvas, Pill, Text, Tick } from './parts';
import { SceneShell, type SceneBuild } from './scene-shell';

const W = 560;
const H = 480;
const CX = 280;
const CY = 236;
const RX = 194;
const RY = 158;
const CARD_W = 178;
const CARD_H = 100;
const START = -45;

type Satellite = { key: string; label: string; body: ReactNode };

const SATELLITES: Satellite[] = [
  {
    key: 'website',
    label: 'Website',
    body: (
      <>
        <Text x={16} y={54} lines='Example Bakery' size={15.5} weight={600} />
        <Pill x={16} y={66} w={104} h={24} label='Order a cake' tone='accent' size={12} />
      </>
    ),
  },
  {
    key: 'store',
    label: 'Online store',
    body: (
      <>
        <Text x={16} y={54} lines='New order' size={15.5} weight={600} />
        <Text x={162} y={54} lines='Rs 3,200' size={14} weight={600} anchor='end' />
        <Pill x={16} y={66} w={54} h={24} label='Paid' tone='success-soft' size={12} />
      </>
    ),
  },
  {
    key: 'tools',
    label: 'Business tools',
    body: (
      <>
        <Text x={16} y={54} lines='Jobs today' size={15.5} weight={600} />
        <Text x={16} y={76} lines='3 done, 1 to go' size={12.5} className='sv-muted' />
        <Tick cx={150} cy={60} r={12} />
      </>
    ),
  },
  {
    key: 'app',
    label: 'Mobile app',
    body: (
      <>
        <rect x={16} y={42} width={34} height={34} rx={9} className='sv-accent' />
        <Bell x={24} y={50} width={18} height={18} className='sv-icon-on-accent' />
        <Text x={60} y={56} lines='Order ready' size={15} weight={600} />
        <Text x={60} y={75} lines='Pick up at 4 pm' size={12.5} className='sv-muted' />
      </>
    ),
  },
];

function place(angle: number, index: number) {
  const a = ((angle + index * 90) * Math.PI) / 180;
  const depth = (Math.sin(a) + 1) / 2;
  const s = 0.84 + depth * 0.16;
  const x = CX + RX * Math.cos(a);
  const y = CY + RY * Math.sin(a);
  return {
    x,
    y,
    s,
    opacity: 0.78 + depth * 0.22,
    transform: `translate(${(x - (CARD_W / 2) * s).toFixed(2)} ${(y - (CARD_H / 2) * s).toFixed(2)}) scale(${s.toFixed(3)})`,
  };
}

const build: SceneBuild = (tl, q) => {
  const cards = q('.o-sat');
  const spokes = q('.o-spoke');
  const proxy = { a: START };
  const apply = () => {
    cards.forEach((card, index) => {
      const p = place(proxy.a, index);
      card.setAttribute('transform', p.transform);
      (card as unknown as SVGGElement).style.opacity = String(p.opacity);
      spokes[index]?.setAttribute('d', `M ${CX} ${CY} L ${p.x.toFixed(2)} ${p.y.toFixed(2)}`);
    });
  };
  for (let step = 0; step < 4; step += 1) {
    tl.to({}, { duration: 2.4 });
    tl.to(proxy, { a: `+=90`, duration: 1.4, ease: 'power2.inOut', onUpdate: apply });
  }
};

export function OrbitScene({ className }: { className?: string }) {
  return (
    <SceneShell
      build={build}
      className={cn('[--toggle-y:97%]', className)}
      caption='Your business at the centre, with the four things Orbitra builds around it: a website, an online store, business tools and a mobile app.'>
      <Canvas w={W} h={H}>
        <ellipse cx={CX} cy={CY} rx={RX} ry={RY} className='sv-grid' style={{ strokeWidth: 1.5 }} />
        <ellipse cx={CX} cy={CY} rx={RX * 0.62} ry={RY * 0.62} className='sv-grid' />
        {SATELLITES.map((satellite, index) => {
          const p = place(START, index);
          return (
            <path
              key={`spoke-${satellite.key}`}
              d={`M ${CX} ${CY} L ${p.x.toFixed(2)} ${p.y.toFixed(2)}`}
              className='sv-path o-spoke'
              style={{ strokeOpacity: 0.22, strokeWidth: 1.5 }}
            />
          );
        })}
        <g className='scene-card'>
          <circle cx={CX} cy={CY} r={80} className='sv-card' />
        </g>
        <circle cx={CX} cy={CY} r={63} className='sv-accent-soft' />
        <Store x={CX - 16} y={CY - 36} width={32} height={32} className='sv-icon-accent' />
        <Text x={CX} y={CY + 18} lines='Your' size={16.5} weight={600} anchor='middle' />
        <Text x={CX} y={CY + 38} lines='business' size={16.5} weight={600} anchor='middle' />
        {SATELLITES.map((satellite, index) => {
          const p = place(START, index);
          return (
            <g key={satellite.key} className='o-sat' transform={p.transform} style={{ opacity: p.opacity }}>
              <g className='scene-card'>
                <rect width={CARD_W} height={CARD_H} rx={18} className='sv-card' />
              </g>
              <Text x={16} y={27} lines={satellite.label} size={13} weight={600} className='sv-accent' />
              {satellite.body}
            </g>
          );
        })}
      </Canvas>
    </SceneShell>
  );
}
