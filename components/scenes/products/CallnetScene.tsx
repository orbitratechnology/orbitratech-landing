'use client';

import { ArrowRight, Check, Mic, Phone, PhoneOff, Search, Signal, Video, Volume2, WifiOff } from 'lucide-react';

import { Card, Pill, Text } from '../parts';
import { tap } from '../scene-shell';
import { ProductFrame, SX, SW, type ProductSceneProps, type ProductScreen } from './ProductFrame';

const RECENT = [
  { name: 'Dilini', note: 'Video call, 2 min ago', initial: 'D' },
  { name: 'Amal', note: 'Voice call, 1 hr ago', initial: 'A' },
  { name: 'Amma', note: 'Voice call, yesterday', initial: 'A' },
  { name: 'Kasun', note: 'Missed call, Monday', initial: 'K' },
];

function CallControls({ y, className }: { y: number; className?: string }) {
  const icons = [Mic, Video, Volume2];
  return (
    <g className={className}>
      {icons.map((Icon, index) => (
        <g key={index}>
          <circle cx={140 + index * 40} cy={y} r={18} className='sv-raise' />
          <Icon x={131 + index * 40} y={y - 9} width={18} height={18} className='sv-icon-on-dark' />
        </g>
      ))}
      <circle cx={262} cy={y} r={18} className='sv-danger' />
      <PhoneOff x={253} y={y - 9} width={18} height={18} className='sv-icon-on-dark' />
    </g>
  );
}

const SCREENS: ProductScreen[] = [
  {
    short: 'One tap',
    label: 'Recent calls, each person one tap away from a voice or video call',
    intro: (tl, q) => {
      tl.from(q('.cn0-row'), { autoAlpha: 0, x: -10, stagger: 0.08, duration: 0.4, ease: 'power2.out' }, '<0.15');
      tap(tl, q('.cn0-tap')[0], '>0.3');
      tl.from(q('.cn0-note'), { autoAlpha: 0, x: 10, duration: 0.45, ease: 'power3.out' }, '<0.2');
    },
    render: () => (
      <g>
        <Text x={SX} y={52} lines='Recent' size={19} weight={600} className='sv-on-dark' />
        <Search x={266} y={38} width={17} height={17} className='sv-icon-on-dark' />
        {RECENT.map((person, index) => {
          const y = 74 + index * 60;
          return (
            <g key={person.name} className='cn0-row'>
              <circle cx={SX + 17} cy={y + 22} r={17} className={index === 0 ? 'sv-accent' : 'sv-raise'} />
              <text
                x={SX + 17}
                y={y + 27}
                textAnchor='middle'
                className={index === 0 ? 'sv-on-accent' : 'sv-text sv-on-dark'}
                style={{ fontSize: 14, fontWeight: 600 }}>
                {person.initial}
              </text>
              <Text x={SX + 44} y={y + 18} lines={person.name} size={14} weight={600} className='sv-on-dark' />
              <Text x={SX + 44} y={y + 35} lines={person.note} size={10.5} className='sv-on-dark-muted' />
              <Phone x={SX + SW - 18} y={y + 13} width={17} height={17} className='sv-icon-accent' />
            </g>
          );
        })}
        <circle cx={SX + SW - 9} cy={96} r={18} className='sv-accent cn0-tap' style={{ opacity: 0 }} />
        <Pill x={SX} y={372} w={SW} h={40} label='Call someone' tone='accent' size={14} />
        <Card x={300} y={78} w={100} h={62} className='cn0-note'>
          <Text x={312} y={104} lines={['One tap', 'to call']} size={13} weight={600} />
        </Card>
      </g>
    ),
  },
  {
    short: 'Video',
    label: 'A one-to-one video call with the other person large and controls that fade back',
    intro: (tl, q) => {
      tl.from(q('.cn1-face'), { autoAlpha: 0, scale: 0.85, transformOrigin: '50% 50%', duration: 0.5, ease: 'power3.out' }, '<0.1');
      tl.from(q('.cn1-self'), { autoAlpha: 0, y: -10, duration: 0.4, ease: 'power2.out' }, '<0.2');
      tl.from(q('.cn1-controls'), { autoAlpha: 0, y: 12, duration: 0.4, ease: 'power2.out' }, '<0.15');
      tl.to(q('.cn1-controls'), { opacity: 0.45, duration: 0.6 }, '>1');
      tl.to(q('.cn1-controls'), { opacity: 1, duration: 0.3 }, '>0.8');
    },
    render: () => (
      <g>
        <rect x={108} y={22} width={184} height={398} rx={24} className='sv-raise' />
        <g className='cn1-face'>
          <circle cx={200} cy={176} r={46} className='sv-accent' />
          <text x={200} y={192} textAnchor='middle' className='sv-on-accent' style={{ fontSize: 40, fontWeight: 600 }}>
            D
          </text>
          <Text x={200} y={250} lines='Dilini' size={17} weight={600} anchor='middle' className='sv-on-dark' />
          <Text x={200} y={270} lines='04:12' size={12.5} anchor='middle' className='sv-on-dark-muted' />
        </g>
        <g className='cn1-self'>
          <rect x={226} y={38} width={54} height={76} rx={12} className='sv-dark' />
          <Text x={253} y={81} lines='You' size={11.5} weight={600} anchor='middle' className='sv-on-dark' />
        </g>
        <CallControls y={366} className='cn1-controls' />
      </g>
    ),
  },
  {
    short: 'Private',
    label: 'Privacy settings where only people you know can call you, with no public profile or feed',
    intro: (tl, q) => {
      tl.from(q('.cn2-card'), { autoAlpha: 0, y: 10, duration: 0.45, ease: 'power3.out' }, '<0.1');
      tl.from(q('.cn2-knob'), { x: -12, duration: 0.35, ease: 'power2.out' }, '>0.1');
      tl.from(q('.cn2-row'), { autoAlpha: 0, x: -8, stagger: 0.12, duration: 0.4, ease: 'power2.out' }, '>0.1');
    },
    render: () => (
      <g>
        <Text x={SX} y={52} lines='Privacy' size={19} weight={600} className='sv-on-dark' />
        <g className='cn2-card'>
          <rect x={SX} y={72} width={SW} height={84} rx={16} className='sv-raise' />
          <Text x={SX + 14} y={98} lines='Who can call me' size={11.5} className='sv-on-dark-muted' />
          <Text x={SX + 14} y={122} lines='People I know' size={15} weight={600} className='sv-on-dark' />
          <rect x={SX + SW - 46} y={108} width={34} height={20} rx={10} className='sv-accent' />
          <circle cx={SX + SW - 22} cy={118} r={7.5} className='sv-card cn2-knob' />
        </g>
        {['No public profile', 'No social feed', ['Calls go straight', 'between phones']].map((line, index) => (
          <g key={index} className='cn2-row'>
            <circle cx={SX + 11} cy={190 + index * 52} r={11} className='sv-accent' />
            <Check x={SX + 4} y={183 + index * 52} width={14} height={14} className='sv-icon-on-dark' />
            <Text x={SX + 32} y={195 + index * 52} lines={line} size={13} weight={600} className='sv-on-dark' />
          </g>
        ))}
        <Card x={0} y={330} w={108} h={66} className='cn2-row'>
          <Text x={12} y={356} lines={['Only what a', 'call needs']} size={12.5} weight={600} />
        </Card>
      </g>
    ),
  },
  {
    short: 'Steady',
    label: 'A call that keeps going when Wi-Fi drops, switching to mobile data',
    intro: (tl, q) => {
      tl.set(q('.cn3-after'), { autoAlpha: 0 }, '<');
      tl.set(q('.cn3-before'), { autoAlpha: 1 }, '<');
      tl.from(q('.cn3-face'), { autoAlpha: 0, scale: 0.9, transformOrigin: '50% 50%', duration: 0.45, ease: 'power3.out' }, '<0.1');
      tl.from(q('.cn3-arrow'), { autoAlpha: 0, x: -8, duration: 0.35 }, '>0.5');
      tl.to(q('.cn3-before'), { autoAlpha: 0, duration: 0.25 }, '>0.4');
      tl.to(q('.cn3-after'), { autoAlpha: 1, duration: 0.35 }, '<0.1');
      tl.from(q('.cn3-note'), { autoAlpha: 0, x: -10, duration: 0.4, ease: 'power3.out' }, '<0.1');
    },
    render: () => (
      <g>
        <g className='cn3-face'>
          <circle cx={200} cy={134} r={42} className='sv-raise' />
          <text x={200} y={148} textAnchor='middle' className='sv-text sv-on-dark' style={{ fontSize: 36, fontWeight: 600 }}>
            A
          </text>
          <Text x={200} y={206} lines='Amal' size={17} weight={600} anchor='middle' className='sv-on-dark' />
        </g>
        <g className='cn3-before' style={{ opacity: 0, visibility: 'hidden' }}>
          <Text x={200} y={228} lines='Wi-Fi lost, reconnecting' size={12.5} anchor='middle' className='sv-on-dark-muted' />
        </g>
        <g className='cn3-after'>
          <Text x={200} y={228} lines='Connected, 12:40' size={12.5} weight={600} anchor='middle' className='sv-accent-bright' />
        </g>
        <rect x={SX + 6} y={256} width={SW - 12} height={48} rx={24} className='sv-raise' />
        <WifiOff x={SX + 24} y={271} width={18} height={18} className='sv-icon-on-dark' />
        <Text x={SX + 48} y={285} lines='Wi-Fi' size={12} className='sv-on-dark-muted' />
        <ArrowRight x={SX + 86} y={272} width={16} height={16} className='sv-icon-on-dark cn3-arrow' />
        <Signal x={SX + 110} y={271} width={18} height={18} className='sv-icon-accent' />
        <Text x={SX + 134} y={285} lines='4G' size={12} weight={600} className='sv-on-dark' />
        <CallControls y={366} />
        <Card x={0} y={240} w={108} h={74} className='cn3-note'>
          <Text x={12} y={264} lines={['Network', 'changed,', 'call kept']} size={12} weight={600} lineHeight={1.25} />
        </Card>
      </g>
    ),
  },
];

export function CallnetScene(props: ProductSceneProps) {
  return (
    <ProductFrame
      {...props}
      dark
      screens={SCREENS}
      caption='Callnet screens: recent calls with one-tap calling, a one-to-one video call, privacy settings that only let people you know call you, and a call that keeps going when Wi-Fi drops.'
    />
  );
}
