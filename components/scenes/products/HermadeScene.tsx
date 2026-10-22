'use client';

import { Cake, CakeSlice, Cookie, Heart, MapPin, Sparkles } from 'lucide-react';

import { Card, Pill, Text, Tick } from '../parts';
import { tap } from '../scene-shell';
import { ProductFrame, SX, SW, type ProductSceneProps, type ProductScreen } from './ProductFrame';

const PRODUCTS = [
  { label: 'Chocolate cake', Icon: Cake, tone: 'sv-accent-soft' },
  { label: 'Cupcakes', Icon: CakeSlice, tone: 'hm-gold-soft' },
  { label: 'Cookies', Icon: Cookie, tone: 'hm-plum-soft' },
  { label: 'Custom orders', Icon: Sparkles, tone: 'sv-tint' },
];

const CUSTOMERS = [
  { initials: 'DS', name: 'Dilini', note: '3rd order', tag: 'Again', tone: 'success-soft' as const },
  { initials: 'RJ', name: 'Ruwan', note: '2nd order', tag: 'Again', tone: 'success-soft' as const },
  { initials: 'FN', name: 'Fathima', note: '1st order', tag: 'New', tone: 'accent-soft' as const },
];

const STEPS = [
  { label: 'Business profile', state: 'done' },
  { label: 'First orders', state: 'done' },
  { label: 'Payments', state: 'Next' },
  { label: 'Delivery', state: 'Later' },
];

const SCREENS: ProductScreen[] = [
  {
    short: 'Profile',
    label: 'A home baker’s profile with her area and four things she makes',
    intro: (tl, q) => {
      tl.from(q('.hm0-head'), { autoAlpha: 0, y: 10, duration: 0.45, ease: 'power3.out' }, '<0.1');
      tl.from(q('.hm0-tile'), { autoAlpha: 0, scale: 0.85, transformOrigin: '50% 50%', stagger: 0.1, duration: 0.4, ease: 'power2.out' }, '>0');
      tl.from(q('.hm0-note'), { autoAlpha: 0, x: 12, duration: 0.4, ease: 'power3.out' }, '>0');
    },
    render: () => (
      <g>
        <rect x={108} y={22} width={184} height={76} rx={22} className='sv-accent' />
        <g className='hm0-head'>
          <circle cx={SX + 30} cy={100} r={28} className='sv-card' />
          <circle cx={SX + 30} cy={100} r={24} className='sv-dark' />
          <Text x={SX + 30} y={106} lines='AK' size={15} weight={600} anchor='middle' className='sv-on-dark' />
          <Text x={SX} y={150} lines='Amaya’s Kitchen' size={15} weight={600} />
          <Text x={SX} y={168} lines='Home baker, Negombo' size={11.5} className='sv-muted' />
        </g>
        {PRODUCTS.map((product, index) => {
          const x = SX + (index % 2) * 88;
          const y = 182 + Math.floor(index / 2) * 92;
          const Icon = product.Icon;
          return (
            <g key={product.label} className='hm0-tile'>
              <rect x={x} y={y} width={80} height={84} rx={14} className={product.tone} />
              <Icon x={x + 28} y={y + 16} width={24} height={24} className='sv-icon' />
              <Text x={x + 40} y={y + 64} lines={product.label} size={10.5} weight={600} anchor='middle' />
            </g>
          );
        })}
        <Pill x={SX} y={372} w={SW} h={38} label='Ask about an order' tone='dark' size={13} />
        <Card x={300} y={150} w={100} h={70} className='hm0-note'>
          <MapPin x={312} y={162} width={15} height={15} className='sv-icon-accent' />
          <Text x={312} y={198} lines={['Found by', 'neighbours']} size={12} weight={600} lineHeight={1.2} />
        </Card>
      </g>
    ),
  },
  {
    short: 'Orders',
    label: 'A customer asks for a cake on Saturday, the seller replies with a price, and the order is confirmed',
    intro: (tl, q) => {
      tl.from(q('.hm1-bubble'), { autoAlpha: 0, y: 10, stagger: 0.45, duration: 0.4, ease: 'power2.out' }, '<0.15');
      tl.from(q('.hm1-order'), { autoAlpha: 0, y: 12, scale: 0.96, transformOrigin: '50% 0%', duration: 0.45, ease: 'power3.out' }, '>0.2');
      tl.from(q('.hm1-note'), { autoAlpha: 0, x: -12, duration: 0.4, ease: 'power3.out' }, '<');
    },
    render: () => (
      <g>
        <circle cx={SX + 16} cy={46} r={16} className='sv-accent-soft' />
        <Text x={SX + 16} y={51} lines='DS' size={12} weight={600} anchor='middle' className='sv-accent' />
        <Text x={SX + 42} y={51} lines='Dilini' size={15} weight={600} />
        <g className='hm1-bubble'>
          <rect x={SX} y={80} width={146} height={54} rx={14} className='sv-tint' />
          <Text x={SX + 12} y={102} lines={['Can you make a cake', 'for Saturday?']} size={12} />
        </g>
        <g className='hm1-bubble'>
          <rect x={SX + 22} y={146} width={146} height={54} rx={14} className='sv-accent-soft' />
          <Text x={SX + 34} y={168} lines={['Yes! 1 kg chocolate', 'is Rs 4,500']} size={12} />
        </g>
        <g className='hm1-order'>
          <rect x={SX} y={222} width={SW} height={104} rx={16} className='sv-card' style={{ stroke: 'var(--color-paper-4)', strokeWidth: 1.5 }} />
          <Tick cx={SX + 22} cy={248} r={10} />
          <Text x={SX + 40} y={253} lines='Order confirmed' size={13.5} weight={600} />
          <Text x={SX + 16} y={280} lines='Chocolate cake, 1 kg' size={12} />
          <Text x={SX + 16} y={300} lines='Pickup Saturday, 10:00' size={11.5} className='sv-muted' />
        </g>
        <Pill x={SX} y={346} w={SW} h={36} label='Mark as ready' tone='outline' size={12.5} />
        <Card x={0} y={250} w={108} h={78} className='hm1-note'>
          <Text x={12} y={276} lines={['Orders kept', 'in one place,', 'not lost in chat']} size={11.5} weight={600} lineHeight={1.25} />
        </Card>
      </g>
    ),
  },
  {
    short: 'Repeat',
    label: 'The seller’s customers, two of them ordering again',
    intro: (tl, q) => {
      tl.from(q('.hm2-row'), { autoAlpha: 0, x: -10, stagger: 0.12, duration: 0.4, ease: 'power2.out' }, '<0.15');
      tl.from(q('.hm2-heart'), { scale: 0.3, autoAlpha: 0, transformOrigin: '50% 50%', stagger: 0.15, duration: 0.35, ease: 'back.out(2.4)' }, '>0');
      tap(tl, q('.hm2-tap')[0], '>0.2');
    },
    render: () => (
      <g>
        <Text x={SX} y={52} lines='Your customers' size={17} weight={600} />
        {CUSTOMERS.map((customer, index) => {
          const y = 70 + index * 70;
          return (
            <g key={customer.name}>
              <g className='hm2-row'>
                <rect x={SX} y={y} width={SW} height={60} rx={14} className='sv-tint' />
                <circle cx={SX + 26} cy={y + 30} r={16} className='sv-accent-soft' />
                <Text x={SX + 26} y={y + 35} lines={customer.initials} size={11.5} weight={600} anchor='middle' className='sv-accent' />
                <Text x={SX + 50} y={y + 26} lines={customer.name} size={13} weight={600} />
                <Text x={SX + 50} y={y + 43} lines={customer.note} size={11} className='sv-muted' />
                <Pill x={SX + SW - 54} y={y + 20} w={46} h={20} label={customer.tag} tone={customer.tone} size={10.5} />
              </g>
              {customer.tag === 'Again' ? (
                <g className='hm2-heart'>
                  <Heart x={SX + SW - 74} y={y + 23} width={14} height={14} className='hm-heart' />
                </g>
              ) : null}
            </g>
          );
        })}
        <Pill x={SX} y={290} w={SW} h={36} label='Ask for a review' tone='dark' size={12.5} />
        <circle cx={200} cy={308} r={20} className='sv-accent hm2-tap' style={{ opacity: 0 }} />
        <Card x={300} y={100} w={100} h={70} className='hm2-row'>
          <Text x={312} y={126} lines={['Trust that', 'grows', 'over time']} size={12} weight={600} lineHeight={1.2} />
        </Card>
      </g>
    ),
  },
  {
    short: 'Grow',
    label: 'Next steps for the business: profile and first orders done, online payments next, delivery later',
    intro: (tl, q) => {
      tl.from(q('.hm3-step'), { autoAlpha: 0, x: -8, stagger: 0.14, duration: 0.4, ease: 'power2.out' }, '<0.15');
      tl.from(q('.hm3-learn'), { autoAlpha: 0, y: 12, duration: 0.45, ease: 'power3.out' }, '>0.1');
      tl.from(q('.hm3-note'), { autoAlpha: 0, x: -12, duration: 0.4, ease: 'power3.out' }, '<');
    },
    render: () => (
      <g>
        <Text x={SX} y={52} lines='Your next steps' size={17} weight={600} />
        {STEPS.map((step, index) => {
          const y = 72 + index * 56;
          return (
            <g key={step.label} className='hm3-step'>
              <rect x={SX} y={y} width={SW} height={46} rx={12} className='sv-tint' />
              {step.state === 'done' ? (
                <Tick cx={SX + 20} cy={y + 23} r={10} />
              ) : (
                <circle cx={SX + 20} cy={y + 23} r={9} className='sv-card' style={{ stroke: 'var(--color-ink-subtle)', strokeWidth: 1.5 }} />
              )}
              <Text x={SX + 38} y={y + 28} lines={step.label} size={12.5} weight={600} />
              {step.state !== 'done' ? (
                <Pill
                  x={SX + SW - 50}
                  y={y + 13}
                  w={42}
                  h={20}
                  label={step.state}
                  tone={step.state === 'Next' ? 'accent-soft' : 'outline'}
                  size={10}
                />
              ) : null}
            </g>
          );
        })}
        <g className='hm3-learn'>
          <rect x={SX} y={306} width={SW} height={84} rx={16} className='sv-dark' />
          <Sparkles x={SX + 14} y={322} width={18} height={18} className='sv-icon-on-dark' />
          <Text x={SX + 14} y={362} lines='Learn and connect' size={13.5} weight={600} className='sv-on-dark' />
          <Text x={SX + 14} y={378} lines='Workshops and partners' size={11} className='sv-on-dark-muted' />
        </g>
        <Card x={0} y={150} w={108} h={70} className='hm3-note'>
          <Text x={12} y={176} lines={['At your', 'own pace']} size={12.5} weight={600} lineHeight={1.25} />
        </Card>
      </g>
    ),
  },
];

export function HermadeScene(props: ProductSceneProps) {
  return (
    <ProductFrame
      {...props}
      screens={SCREENS}
      caption='Hermade screens: a home baker’s profile with what she makes, a customer’s enquiry turning into a confirmed order, returning customers, and the next steps for growing the business.'
    />
  );
}
