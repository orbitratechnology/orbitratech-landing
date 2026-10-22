'use client';

import { FileCheck, Gem, Lock, Plane, Search, ShieldCheck } from 'lucide-react';

import { Card, Pill, Text, Tick } from '../parts';
import { ProductFrame, SX, SW, type ProductSceneProps, type ProductScreen } from './ProductFrame';

const BUSINESSES = [
  { initials: 'RC', name: 'Ratnapura Cutters', type: 'Lapidary', checked: true },
  { initials: 'LG', name: 'Lanka Gem Lab', type: 'Laboratory', checked: true },
  { initials: 'BS', name: 'Blue Star Traders', type: 'Trader', checked: false },
];

const STORY = [
  { title: 'Bought', note: 'Blue Star Traders, 4 Mar' },
  { title: 'Cut and polished', note: 'Ratnapura Cutters' },
  { title: 'Certified', note: 'Lanka Gem Lab, ref 26114' },
  { title: 'On approval', note: 'With K. Hameed to 20 Apr' },
];

const CHEQUES = [
  { name: 'K. Hameed', note: 'Rs 120,000, Friday' },
  { name: 'Lanka Gem Lab', note: 'Rs 18,000, Monday' },
];

const SIGNALS = ['Business registered', 'Phone number checked', 'Licence on file'];

/** A small cut stone, drawn at icon size from the GemFort mark. */
function Stone({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  const p = (dx: number, dy: number) => `${x + dx * s},${y + dy * s}`;
  return (
    <g>
      <polygon points={[p(0, -14), p(13, -6), p(13, 8), p(0, 16), p(-13, 8), p(-13, -6)].join(' ')} className='sv-accent' />
      <polygon points={[p(0, -14), p(13, -6), p(0, 1), p(-13, -6)].join(' ')} className='sv-accent-soft' style={{ opacity: 0.55 }} />
      <polygon points={[p(0, 1), p(13, 8), p(0, 16)].join(' ')} className='sv-accent-2' />
    </g>
  );
}

const SCREENS: ProductScreen[] = [
  {
    short: 'Discover',
    label: 'A directory of gem businesses, with labs and cutters marked as ID checked, and buttons to call or message',
    intro: (tl, q) => {
      tl.from(q('.gf0-row'), { autoAlpha: 0, y: 10, stagger: 0.12, duration: 0.4, ease: 'power2.out' }, '<0.15');
      tl.from(q('.gf0-badge'), { autoAlpha: 0, scale: 0.6, transformOrigin: '50% 50%', stagger: 0.15, duration: 0.3, ease: 'back.out(2)' }, '>0');
      tl.from(q('.gf0-note'), { autoAlpha: 0, x: 12, duration: 0.4, ease: 'power3.out' }, '<');
    },
    render: () => (
      <g>
        <rect x={SX} y={34} width={SW} height={34} rx={17} className='sv-tint' />
        <Search x={SX + 12} y={44} width={14} height={14} className='sv-icon' />
        <Text x={SX + 34} y={56} lines='Cutters and labs' size={13} />
        {BUSINESSES.map((business, index) => {
          const y = 82 + index * 84;
          return (
            <g key={business.name} className='gf0-row'>
              <rect x={SX} y={y} width={SW} height={74} rx={14} className='sv-tint' />
              <rect x={SX + 10} y={y + 12} width={34} height={34} rx={10} className='sv-dark' />
              <Text x={SX + 27} y={y + 34} lines={business.initials} size={12} weight={600} anchor='middle' className='sv-on-dark' />
              <Text x={SX + 54} y={y + 26} lines={business.name} size={12.5} weight={600} />
              <Text x={SX + 54} y={y + 43} lines={business.type} size={11} className='sv-muted' />
              {business.checked ? (
                <g className='gf0-badge'>
                  <Pill x={SX + 54} y={y + 50} w={74} h={18} label='ID checked' tone='success-soft' size={10} />
                </g>
              ) : null}
            </g>
          );
        })}
        <Pill x={SX} y={346} w={78} h={36} label='Call' tone='outline' size={12.5} />
        <Pill x={SX + 86} y={346} w={SW - 86} h={36} label='WhatsApp' tone='success' size={12.5} />
        <Card x={300} y={110} w={100} h={96} className='gf0-note'>
          <Text x={312} y={132} lines='Also find' size={11.5} className='sv-muted' />
          <Text x={312} y={154} lines={['Traders', 'Exporters', 'Jewellers']} size={12} weight={600} lineHeight={1.35} />
        </Card>
      </g>
    ),
  },
  {
    short: 'Stone record',
    label: 'One sapphire’s record: bought, cut, certified and now on approval with a trader',
    intro: (tl, q) => {
      tl.from(q('.gf1-stone'), { autoAlpha: 0, rotation: -20, scale: 0.6, transformOrigin: '50% 50%', duration: 0.5, ease: 'power3.out' }, '<0.1');
      tl.from(q('.gf1-line'), { drawSVG: '0%', duration: 0.9, ease: 'power2.inOut' }, '>0');
      tl.from(q('.gf1-event'), { autoAlpha: 0, x: -8, stagger: 0.18, duration: 0.35, ease: 'power2.out' }, '<0.05');
      tl.from(q('.gf1-cert'), { autoAlpha: 0, x: -12, duration: 0.45, ease: 'power3.out' }, '>0');
    },
    render: () => (
      <g>
        <g className='gf1-stone'>
          <Stone x={SX + 18} y={58} s={1.15} />
        </g>
        <Text x={SX + 46} y={54} lines='Blue sapphire' size={15} weight={600} />
        <Text x={SX + 46} y={72} lines='2.14 ct, oval' size={11.5} className='sv-muted' />
        <path d={`M ${SX + 11} 112 V 352`} className='sv-path gf1-line' />
        {STORY.map((event, index) => {
          const y = 112 + index * 78;
          return (
            <g key={event.title} className='gf1-event'>
              <circle cx={SX + 11} cy={y} r={7} className={index === STORY.length - 1 ? 'sv-accent' : 'sv-card'} style={{ stroke: 'var(--p-accent)', strokeWidth: 2 }} />
              <Text x={SX + 30} y={y + 5} lines={event.title} size={13.5} weight={600} />
              <Text x={SX + 30} y={y + 23} lines={event.note} size={11} className='sv-muted' />
            </g>
          );
        })}
        <Card x={0} y={250} w={108} h={78} className='gf1-cert'>
          <FileCheck x={12} y={264} width={18} height={18} className='sv-icon-accent' />
          <Text x={12} y={302} lines={['Lab report', 'ref 26114']} size={12} weight={600} lineHeight={1.25} />
        </Card>
      </g>
    ),
  },
  {
    short: 'Workspace',
    label: 'The business workspace: money to collect and to pay, cheques due this week, and stones out on approval',
    intro: (tl, q) => {
      tl.from(q('.gf2-tile'), { autoAlpha: 0, y: 10, stagger: 0.12, duration: 0.4, ease: 'power2.out' }, '<0.1');
      tl.from(q('.gf2-row'), { autoAlpha: 0, x: -8, stagger: 0.1, duration: 0.35, ease: 'power2.out' }, '>0');
      tl.from(q('.gf2-trip'), { autoAlpha: 0, x: 12, duration: 0.4, ease: 'power3.out' }, '>0');
    },
    render: () => (
      <g>
        <Text x={SX} y={52} lines='This month' size={17} weight={600} />
        {[
          { label: 'To collect', value: 'Rs 450k', tone: 'sv-accent-soft' },
          { label: 'To pay', value: 'Rs 180k', tone: 'sv-tint' },
        ].map((tile, index) => (
          <g key={tile.label} className='gf2-tile'>
            <rect x={SX + index * 88} y={68} width={80} height={72} rx={14} className={tile.tone} />
            <Text x={SX + index * 88 + 12} y={92} lines={tile.label} size={11} className='sv-muted' />
            <Text x={SX + index * 88 + 12} y={120} lines={tile.value} size={16} weight={600} />
          </g>
        ))}
        <Text x={SX} y={172} lines='Cheques due' size={12.5} weight={600} />
        {CHEQUES.map((cheque, index) => (
          <g key={cheque.name} className='gf2-row'>
            <rect x={SX} y={182 + index * 52} width={SW} height={44} rx={12} className='sv-tint' />
            <Text x={SX + 12} y={200 + index * 52} lines={cheque.name} size={12.5} weight={600} />
            <Text x={SX + 12} y={216 + index * 52} lines={cheque.note} size={11} className='sv-muted' />
          </g>
        ))}
        <g className='gf2-row'>
          <rect x={SX} y={300} width={SW} height={48} rx={12} className='sv-accent-soft' />
          <Gem x={SX + 12} y={315} width={18} height={18} className='sv-icon-accent' />
          <Text x={SX + 40} y={329} lines='3 stones on approval' size={12.5} weight={600} />
        </g>
        <Card x={300} y={190} w={100} h={84} className='gf2-trip'>
          <Plane x={312} y={202} width={16} height={16} className='sv-icon-accent' />
          <Text x={312} y={238} lines={['Trip costs', 'kept too']} size={12} weight={600} lineHeight={1.25} />
        </Card>
      </g>
    ),
  },
  {
    short: 'Trust',
    label: 'A business profile with the checks behind it, private prices, and a button to report a concern',
    intro: (tl, q) => {
      tl.from(q('.gf3-head'), { autoAlpha: 0, y: 10, duration: 0.4, ease: 'power3.out' }, '<0.1');
      tl.from(q('.gf3-signal'), { autoAlpha: 0, x: -8, stagger: 0.14, duration: 0.35, ease: 'power2.out' }, '>0');
      tl.from(q('.gf3-lock'), { autoAlpha: 0, y: 8, duration: 0.35 }, '>0');
      tl.from(q('.gf3-shield'), { autoAlpha: 0, x: -12, duration: 0.4, ease: 'power3.out' }, '<');
    },
    render: () => (
      <g>
        <g className='gf3-head'>
          <rect x={SX} y={34} width={SW} height={78} rx={16} className='sv-dark' />
          <rect x={SX + 12} y={50} width={44} height={44} rx={12} className='sv-accent' />
          <Text x={SX + 34} y={77} lines='BS' size={14} weight={600} anchor='middle' className='sv-on-accent' />
          <Text x={SX + 66} y={68} lines='Blue Star' size={13.5} weight={600} className='sv-on-dark' />
          <Text x={SX + 66} y={86} lines='Trader, Beruwala' size={11} className='sv-on-dark-muted' />
        </g>
        {SIGNALS.map((signal, index) => (
          <g key={signal} className='gf3-signal'>
            <Tick cx={SX + 11} cy={140 + index * 40} r={10} />
            <Text x={SX + 30} y={145 + index * 40} lines={signal} size={12.5} weight={600} />
          </g>
        ))}
        <g className='gf3-lock'>
          <rect x={SX} y={262} width={SW} height={48} rx={12} className='sv-tint' />
          <Lock x={SX + 12} y={277} width={16} height={16} className='sv-icon' />
          <Text x={SX + 38} y={282} lines={['Your prices and', 'stock stay private']} size={11.5} lineHeight={1.2} />
        </g>
        <Pill x={SX} y={330} w={SW} h={36} label='Report a concern' tone='outline' size={12.5} />
        <Card x={0} y={120} w={108} h={84} className='gf3-shield'>
          <ShieldCheck x={12} y={132} width={20} height={20} className='sv-icon-accent' />
          <Text x={12} y={172} lines={['Easier to', 'trust']} size={12.5} weight={600} lineHeight={1.25} />
        </Card>
      </g>
    ),
  },
];

export function GemfortScene(props: ProductSceneProps) {
  return (
    <ProductFrame
      {...props}
      screens={SCREENS}
      caption='GemFort screens: a directory of cutters and labs with ID checks, one sapphire’s record from purchase to certificate, the business workspace with money to collect and cheques due, and a trader’s profile with its checks.'
    />
  );
}
