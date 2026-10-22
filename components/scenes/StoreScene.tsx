'use client';

import { Leaf, ShoppingBag } from 'lucide-react';

import { Canvas, Card, Pill, Text } from './parts';
import { legendReset, legendStep, SceneShell, tap, type SceneBuild } from './scene-shell';
import { StepLegend } from './StepLegend';

const ORDERS = [
  { name: 'Dilini, Ceylon tea', status: 'Paid', tone: 'success-soft' as const },
  { name: 'Kasun, Green tea x2', status: 'Packed', tone: 'accent-soft' as const },
  { name: 'Ayesha, Spice box', status: 'Sent', tone: 'tint' as const },
];

const build: SceneBuild = (tl, q) => {
  legendReset(tl, q);
  tl.set(q('.e-after'), { autoAlpha: 0 }, 0.001);
  tl.set(q('.e-before'), { autoAlpha: 1 }, 0.001);
  tl.from(q('.e-phone'), { autoAlpha: 0, y: 18, duration: 0.6, ease: 'power3.out' }, 0.1);
  tl.from(q('.e-phone-part'), { autoAlpha: 0, y: 10, stagger: 0.08, duration: 0.4, ease: 'power2.out' }, 0.4);
  legendStep(tl, q, 0, 0.6);
  tap(tl, q('.e-tap-add')[0], 1.5);
  tl.to(q('.e-badge'), { autoAlpha: 1, duration: 0.2 }, 1.6);
  tl.fromTo(q('.e-badge'), { scale: 0.4, transformOrigin: '50% 50%' }, { scale: 1, duration: 0.4, ease: 'back.out(2.4)' }, 1.6);
  tl.from(q('.e-checkout'), { autoAlpha: 0, x: 16, duration: 0.55, ease: 'power3.out' }, 2.0);
  tl.from(q('.e-pay-row'), { autoAlpha: 0, y: 8, stagger: 0.08, duration: 0.35, ease: 'power2.out' }, 2.25);
  legendStep(tl, q, 1, 2.3);
  tap(tl, q('.e-tap-pay')[0], 3.0);
  tl.to(q('.e-pay-pick'), { autoAlpha: 1, duration: 0.25 }, 3.05);
  tl.to(q('.e-price-before'), { autoAlpha: 0, duration: 0.2 }, 3.5);
  tl.to(q('.e-price-after'), { autoAlpha: 1, duration: 0.3 }, 3.55);
  tl.from(q('.e-orders'), { autoAlpha: 0, y: 16, duration: 0.55, ease: 'power3.out' }, 3.8);
  tl.from(q('.e-order-old'), { y: -34, duration: 0.5, ease: 'power2.inOut' }, 4.4);
  tl.from(q('.e-order-new'), { autoAlpha: 0, x: -14, duration: 0.45, ease: 'power3.out' }, 4.6);
  tl.to(q('.e-stock-before'), { autoAlpha: 0, duration: 0.2 }, 4.9);
  tl.to(q('.e-stock-after'), { autoAlpha: 1, duration: 0.3 }, 4.95);
  legendStep(tl, q, 2, 4.4);
  tl.addLabel('hold', 5.4);
  tl.to({}, { duration: 2.8 }, 'hold');
  tl.to(q('.e-all'), { autoAlpha: 0, duration: 0.4, ease: 'power1.in' });
};

export function StoreScene({ className, active }: { className?: string; active?: boolean }) {
  return (
    <SceneShell
      build={build}
      active={active}
      className={className}
      caption='A customer adds a pack of tea to the cart on their phone, pays with PayHere, and the order appears at the top of the shop’s order list while the stock count goes down by one.'>
      <Canvas w={440} h={440}>
        <g className='e-all'>
          {/* 1. Shopping on a phone */}
          <Card x={0} y={10} w={170} h={330} r={28} className='e-phone'>
            <g className='e-phone-part'>
              <Text x={14} y={45} lines='Example Tea Co.' weight={600} />
              <ShoppingBag x={130} y={32} width={17} height={17} className='sv-icon' />
              <g className='e-after e-badge'>
                <circle cx={150} cy={32} r={8} className='sv-accent' />
                <text x={150} y={36} textAnchor='middle' className='sv-on-accent' style={{ fontSize: 10, fontWeight: 600 }}>
                  1
                </text>
              </g>
            </g>
            <g className='e-phone-part'>
              <rect x={14} y={58} width={142} height={110} rx={14} className='sv-warning-soft' />
              <Leaf x={65} y={88} width={40} height={40} className='sv-icon-success' />
            </g>
            <g className='e-phone-part'>
              <Text x={14} y={192} lines='Ceylon black tea' size={14} weight={600} />
              <Text x={14} y={212} lines='Rs 1,450' size={14} weight={600} className='sv-accent' />
            </g>
            <g className='e-phone-part'>
              <Pill x={14} y={224} w={56} h={26} label='200 g' tone='accent-soft' size={11.5} />
              <Pill x={76} y={224} w={56} h={26} label='500 g' tone='outline' size={11.5} />
            </g>
            <g className='e-phone-part'>
              <Pill x={14} y={264} w={142} h={36} label='Add to cart' tone='accent' size={13} />
              <circle cx={85} cy={282} r={22} className='sv-accent e-tap-add' style={{ opacity: 0 }} />
              <Text x={14} y={322} lines='Delivery across Sri Lanka' size={11} className='sv-muted' />
            </g>
          </Card>

          {/* 2. Paying the way they like */}
          <Card x={184} y={10} w={256} h={168} className='e-checkout'>
            <Text x={198} y={38} lines='Checkout' weight={600} />
            <g className='e-before e-price-before' style={{ opacity: 0 }}>
              <Text x={426} y={38} lines='Rs 1,450' weight={600} anchor='end' />
            </g>
            <g className='e-after e-price-after'>
              <Pill x={370} y={22} w={56} h={24} label='Paid' tone='success' size={11.5} />
            </g>
            <g className='e-pay-row'>
              <rect x={198} y={52} width={228} height={34} rx={10} className='sv-tint' />
              <image href='/brands/visa.svg' x={210} y={62} width={34} height={14} />
              <image href='/brands/mastercard.svg' x={250} y={60} width={24} height={18} />
              <Text x={282} y={73} lines='Card' size={12.5} />
              <circle cx={410} cy={69} r={7} className='sv-card' style={{ stroke: 'var(--color-ink-subtle)', strokeWidth: 1.5 }} />
            </g>
            <g className='e-pay-row'>
              <rect x={198} y={92} width={228} height={34} rx={10} className='sv-tint' />
              <g className='e-after e-pay-pick'>
                <rect x={198} y={92} width={228} height={34} rx={10} className='sv-accent-soft' />
              </g>
              <image href='/brands/payhere.png' x={210} y={100} width={64} height={18} />
              <circle cx={410} cy={109} r={7} className='sv-card' style={{ stroke: 'var(--color-ink-subtle)', strokeWidth: 1.5 }} />
              <g className='e-after e-pay-pick'>
                <circle cx={410} cy={109} r={7} className='sv-accent' />
                <circle cx={410} cy={109} r={2.6} className='sv-card' />
              </g>
              <circle cx={330} cy={109} r={20} className='sv-accent e-tap-pay' style={{ opacity: 0 }} />
            </g>
            <g className='e-pay-row'>
              <rect x={198} y={132} width={228} height={34} rx={10} className='sv-tint' />
              <Text x={210} y={153} lines='Cash on delivery' size={12.5} />
              <circle cx={410} cy={149} r={7} className='sv-card' style={{ stroke: 'var(--color-ink-subtle)', strokeWidth: 1.5 }} />
            </g>
          </Card>

          {/* 3. The order lands in one list */}
          <Card x={184} y={192} w={256} h={150} className='e-orders'>
            <Text x={198} y={218} lines='Orders today' weight={600} />
            <g className='e-before e-stock-before' style={{ opacity: 0 }}>
              <Text x={426} y={218} lines='Tea: 12 left' size={11.5} anchor='end' className='sv-muted' />
            </g>
            <g className='e-after e-stock-after'>
              <Text x={426} y={218} lines='Tea: 11 left' size={11.5} anchor='end' className='sv-muted' />
            </g>
            {ORDERS.map((order, index) => (
              <g key={order.name} className={index === 0 ? 'e-order-new' : 'e-order-old'}>
                <rect x={198} y={230 + index * 36} width={228} height={30} rx={9} className='sv-tint' />
                <Text x={210} y={250 + index * 36} lines={order.name} size={12} />
                <Pill x={364} y={235 + index * 36} w={54} h={20} label={order.status} tone={order.tone} size={10.5} />
              </g>
            ))}
          </Card>

          <StepLegend
            y={372}
            steps={[
              ['Orders on', 'their phone'],
              ['Pays the way', 'they like'],
              ['Your team sees', 'every order'],
            ]}
          />
        </g>
      </Canvas>
    </SceneShell>
  );
}
