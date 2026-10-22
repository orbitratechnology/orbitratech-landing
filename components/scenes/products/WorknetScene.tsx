'use client';

import { Briefcase, MapPin, Phone, Search } from 'lucide-react';

import { Card, Pill, Text, Tick } from '../parts';
import { tap } from '../scene-shell';
import { ProductFrame, SX, SW, type ProductSceneProps, type ProductScreen } from './ProductFrame';

const PINS = [
  { x: 152, y: 150 },
  { x: 236, y: 190 },
  { x: 190, y: 236 },
];

const RESULTS = [
  { initials: 'NP', name: 'Nimal P.', note: 'Electrician, 2 km' },
  { initials: 'SF', name: 'Sunil F.', note: 'Electrician, 4 km' },
];

const SKILLS = [
  { label: 'Wiring', w: 56, x: 118 },
  { label: 'Fans', w: 46, x: 180 },
  { label: 'Solar', w: 50, x: 232 },
];

const JOBS = [
  { title: 'Plumber needed', note: 'Kalutara, this week' },
  { title: 'Carpenter, shop fit-out', note: 'Panadura, next month' },
  { title: 'Driver for deliveries', note: 'Beruwala, weekends' },
];

const DAY = [
  { time: '9:00', title: 'Fan repair', note: 'Mrs. Fernando', done: true },
  { time: '11:30', title: 'Wiring check', note: 'Hotel Sea Breeze', done: true },
  { time: '15:00', title: 'New sockets', note: 'Kumara Stores', done: false },
];

function Avatar({ cx, cy, r, initials, tone = 'accent' }: { cx: number; cy: number; r: number; initials: string; tone?: 'accent' | 'soft' }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} className={tone === 'accent' ? 'sv-accent' : 'sv-accent-soft'} />
      <text
        x={cx}
        y={cy + r * 0.32}
        textAnchor='middle'
        className={tone === 'accent' ? 'sv-on-accent' : 'sv-text sv-accent'}
        style={{ fontSize: r * 0.8, fontWeight: 600 }}>
        {initials}
      </text>
    </g>
  );
}

const SCREENS: ProductScreen[] = [
  {
    short: 'Find',
    label: 'Searching for an electrician near Beruwala, with workers shown on a map and listed by distance',
    intro: (tl, q) => {
      tl.from(q('.wn0-pin'), { autoAlpha: 0, y: -14, stagger: 0.12, duration: 0.4, ease: 'back.out(2)' }, '<0.2');
      tl.from(q('.wn0-row'), { autoAlpha: 0, y: 10, stagger: 0.1, duration: 0.4, ease: 'power2.out' }, '>0');
      tl.from(q('.wn0-trades'), { autoAlpha: 0, x: 12, duration: 0.45, ease: 'power3.out' }, '<0.1');
    },
    render: () => (
      <g>
        <rect x={SX} y={34} width={SW} height={34} rx={17} className='sv-tint' />
        <Search x={SX + 12} y={44} width={14} height={14} className='sv-icon' />
        <Text x={SX + 34} y={56} lines='Electrician' size={13} />
        <Pill x={SX} y={76} w={112} h={24} label='Near Beruwala' tone='accent-soft' size={11.5} />
        <rect x={SX} y={110} width={SW} height={150} rx={14} className='sv-accent-soft' />
        <path d={`M ${SX} 176 C ${SX + 50} 160, ${SX + 110} 206, ${SX + SW} 180`} className='wn-road' />
        <path d={`M ${SX + 54} 110 V 260`} className='wn-road' />
        <path d={`M ${SX} 232 H ${SX + SW}`} className='wn-road' />
        <circle cx={204} cy={168} r={9} className='sv-mint' style={{ opacity: 0.25 }} />
        <circle cx={204} cy={168} r={5} className='sv-mint' />
        {PINS.map((pin) => (
          <g key={`${pin.x}-${pin.y}`} className='wn0-pin'>
            <path
              d={`M ${pin.x} ${pin.y + 14} C ${pin.x - 4} ${pin.y + 8}, ${pin.x - 11} ${pin.y + 3}, ${pin.x - 11} ${pin.y - 4} A 11 11 0 1 1 ${pin.x + 11} ${pin.y - 4} C ${pin.x + 11} ${pin.y + 3}, ${pin.x + 4} ${pin.y + 8}, ${pin.x} ${pin.y + 14} Z`}
              className='sv-accent'
            />
            <circle cx={pin.x} cy={pin.y - 4} r={4} className='sv-card' />
          </g>
        ))}
        {RESULTS.map((result, index) => (
          <g key={result.name} className='wn0-row'>
            <Avatar cx={SX + 17} cy={292 + index * 50} r={17} initials={result.initials} tone='soft' />
            <Text x={SX + 44} y={288 + index * 50} lines={result.name} size={13.5} weight={600} />
            <Text x={SX + 44} y={305 + index * 50} lines={result.note} size={11} className='sv-muted' />
            <Phone x={SX + SW - 18} y={283 + index * 50} width={17} height={17} className='sv-icon-accent' />
          </g>
        ))}
        <Pill x={SX} y={384} w={SW} h={34} label='Show more' tone='outline' size={12.5} />
        <Card x={300} y={120} w={100} h={118} className='wn0-trades'>
          <Text x={312} y={142} lines='Also find' size={11.5} className='sv-muted' />
          {['Plumbers', 'Masons', 'Cleaners'].map((trade, index) => (
            <Pill key={trade} x={312} y={152 + index * 26} w={76} h={22} label={trade} tone='tint' size={11} />
          ))}
        </Card>
      </g>
    ),
  },
  {
    short: 'Profile',
    label: 'A worker profile with trade, skills, experience, service area and buttons to call or WhatsApp',
    intro: (tl, q) => {
      tl.from(q('.wn1-head'), { autoAlpha: 0, y: 10, duration: 0.45, ease: 'power3.out' }, '<0.1');
      tl.from(q('.wn1-chip'), { autoAlpha: 0, scale: 0.8, transformOrigin: '50% 50%', stagger: 0.08, duration: 0.3 }, '>0');
      tl.from(q('.wn1-fact'), { autoAlpha: 0, x: -8, stagger: 0.1, duration: 0.35 }, '>0');
      tap(tl, q('.wn1-tap')[0], '>0.3');
      tl.from(q('.wn1-note'), { autoAlpha: 0, x: -10, duration: 0.4, ease: 'power3.out' }, '<');
    },
    render: () => (
      <g>
        <rect x={108} y={22} width={184} height={70} rx={22} className='sv-accent' />
        <g className='wn1-head'>
          <circle cx={200} cy={96} r={32} className='sv-card' />
          <Avatar cx={200} cy={96} r={28} initials='NP' tone='soft' />
          <Text x={200} y={150} lines='Nimal Perera' size={16} weight={600} anchor='middle' />
          <Text x={200} y={168} lines='Electrician' size={12.5} anchor='middle' className='sv-muted' />
        </g>
        {SKILLS.map((chip) => (
          <g key={chip.label} className='wn1-chip'>
            <Pill x={chip.x} y={182} w={chip.w} h={24} label={chip.label} tone='accent-soft' size={11.5} />
          </g>
        ))}
        <g className='wn1-fact'>
          <Briefcase x={SX + 4} y={226} width={15} height={15} className='sv-icon' />
          <Text x={SX + 28} y={238} lines='8 years experience' size={12.5} />
        </g>
        <g className='wn1-fact'>
          <MapPin x={SX + 4} y={252} width={15} height={15} className='sv-icon' />
          <Text x={SX + 28} y={264} lines={['Serves Beruwala', 'and Aluthgama']} size={12.5} />
        </g>
        <Pill x={SX} y={318} w={78} h={38} label='Call' tone='outline' size={13} />
        <Pill x={SX + 86} y={318} w={SW - 86} h={38} label='WhatsApp' tone='success' size={13} />
        <circle cx={SX + 127} cy={337} r={20} className='sv-success wn1-tap' style={{ opacity: 0 }} />
        <Card x={0} y={196} w={108} h={70} className='wn1-note'>
          <Text x={12} y={222} lines={['A profile that', 'goes with you']} size={12} weight={600} />
        </Card>
      </g>
    ),
  },
  {
    short: 'Jobs',
    label: 'A list of jobs near the worker, each with a button to say they are interested',
    intro: (tl, q) => {
      tl.set(q('.wn2-sent'), { autoAlpha: 0 }, '<');
      tl.set(q('.wn2-ask'), { autoAlpha: 1 }, '<');
      tl.from(q('.wn2-job'), { autoAlpha: 0, y: 12, stagger: 0.12, duration: 0.4, ease: 'power2.out' }, '<0.1');
      tap(tl, q('.wn2-tap')[0], '>0.4');
      tl.to(q('.wn2-ask'), { autoAlpha: 0, duration: 0.2 }, '<0.1');
      tl.to(q('.wn2-sent'), { autoAlpha: 1, duration: 0.3 }, '<0.1');
      tl.from(q('.wn2-note'), { autoAlpha: 0, x: 10, duration: 0.4, ease: 'power3.out' }, '<');
    },
    render: () => (
      <g>
        <Text x={SX} y={52} lines='Work near you' size={17} weight={600} />
        {JOBS.map((job, index) => {
          const y = 70 + index * 96;
          return (
            <g key={job.title} className='wn2-job'>
              <rect x={SX} y={y} width={SW} height={84} rx={14} className='sv-tint' />
              <Text x={SX + 12} y={y + 24} lines={job.title} size={13} weight={600} />
              <Text x={SX + 12} y={y + 42} lines={job.note} size={11} className='sv-muted' />
              {index === 0 ? (
                <>
                  <g className='wn2-ask' style={{ opacity: 0, visibility: 'hidden' }}>
                    <Pill x={SX + 12} y={y + 52} w={96} h={24} label='I’m interested' tone='accent' size={11} />
                  </g>
                  <g className='wn2-sent'>
                    <Pill x={SX + 12} y={y + 52} w={96} h={24} label='Sent' tone='success-soft' size={11} />
                  </g>
                  <circle cx={SX + 60} cy={y + 64} r={18} className='sv-accent wn2-tap' style={{ opacity: 0 }} />
                </>
              ) : (
                <Pill x={SX + 12} y={y + 52} w={96} h={24} label='I’m interested' tone='accent-soft' size={11} />
              )}
            </g>
          );
        })}
        <Card x={300} y={92} w={100} h={70} className='wn2-note'>
          <Text x={312} y={118} lines={['Businesses', 'find local', 'talent']} size={12} weight={600} lineHeight={1.2} />
        </Card>
      </g>
    ),
  },
  {
    short: 'My day',
    label: 'The worker’s jobs for today with times and places, two done and one still to go',
    intro: (tl, q) => {
      tl.from(q('.wn3-line'), { drawSVG: '0%', duration: 0.7, ease: 'power2.inOut' }, '<0.1');
      tl.from(q('.wn3-item'), { autoAlpha: 0, x: -8, stagger: 0.14, duration: 0.4, ease: 'power2.out' }, '<0.1');
      tl.from(q('.wn3-tick'), { autoAlpha: 0, scale: 0.4, transformOrigin: '50% 50%', stagger: 0.2, duration: 0.3, ease: 'back.out(2)' }, '>0');
      tl.from(q('.wn3-sum'), { autoAlpha: 0, y: 10, duration: 0.4 }, '>0');
    },
    render: () => (
      <g>
        <Text x={SX} y={52} lines='Today' size={17} weight={600} />
        <Text x={SX + SW} y={52} lines='Tue 13' size={12} anchor='end' className='sv-muted' />
        <path d={`M ${SX + 11} 84 V 270`} className='sv-path wn3-line' />
        {DAY.map((item, index) => {
          const y = 88 + index * 84;
          return (
            <g key={item.title}>
              <g className='wn3-item'>
                <circle cx={SX + 11} cy={y} r={11} className={item.done ? 'sv-card' : 'sv-tint-2'} style={{ stroke: 'var(--p-accent)', strokeWidth: 2 }} />
                <Text x={SX + 32} y={y + 4} lines={item.time} size={12} weight={600} className='sv-accent' />
                <Text x={SX + 32} y={y + 24} lines={item.title} size={14} weight={600} />
                <Text x={SX + 32} y={y + 42} lines={item.note} size={11} className='sv-muted' />
              </g>
              {item.done ? (
                <g className='wn3-tick'>
                  <Tick cx={SX + 11} cy={y} r={11} />
                </g>
              ) : null}
            </g>
          );
        })}
        <g className='wn3-sum'>
          <rect x={SX} y={340} width={SW} height={66} rx={14} className='sv-accent-soft' />
          <Text x={SX + 14} y={364} lines='This week' size={11.5} className='sv-muted' />
          <Text x={SX + 14} y={388} lines='5 jobs done' size={16} weight={600} />
        </g>
        <Card x={0} y={150} w={108} h={70} className='wn3-sum'>
          <Text x={12} y={176} lines={['Your jobs and', 'history, kept']} size={12} weight={600} />
        </Card>
      </g>
    ),
  },
];

export function WorknetScene(props: ProductSceneProps) {
  return (
    <ProductFrame
      {...props}
      screens={SCREENS}
      caption='Worknet screens: searching for an electrician near Beruwala on a map, a worker’s profile with skills and contact buttons, jobs near the worker, and the worker’s plan for today.'
    />
  );
}
