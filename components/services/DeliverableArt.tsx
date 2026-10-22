import { ArrowRight, BookOpen, KeyRound } from 'lucide-react';
import type { ReactNode } from 'react';

import { Canvas, Card, Pill, Text, Tick } from '@/components/scenes/parts';
import type { DeliverableArt as ArtId } from '@/lib/service-pages';

const W = 280;
const H = 168;

function Box({ x, y, w, h = 30, label, tone = 'card' }: { x: number; y: number; w: number; h?: number; label: string; tone?: 'card' | 'accent' | 'tint' | 'note' }) {
  return (
    <g>
      {tone === 'card' ? (
        <Card x={x} y={y} w={w} h={h} r={10} />
      ) : (
        <rect x={x} y={y} width={w} height={h} rx={10} className={tone === 'accent' ? 'sv-accent' : tone === 'note' ? 'sv-warning-soft' : 'sv-tint-2'} />
      )}
      <Text
        x={x + w / 2}
        y={y + h / 2 + 4.5}
        lines={label}
        size={12.5}
        weight={600}
        anchor='middle'
        className={tone === 'accent' ? 'sv-on-accent' : undefined}
      />
    </g>
  );
}

function Arrow({ x, y }: { x: number; y: number }) {
  return <ArrowRight x={x} y={y} width={14} height={14} className='sv-icon' />;
}

const ART: Record<ArtId, () => ReactNode> = {
  sitemap: () => (
    <>
      <path d='M 140 40 V 62 M 45 62 H 235 M 45 62 V 84 M 140 62 V 84 M 235 62 V 84 M 45 114 V 130 M 235 114 V 130' className='sv-path' />
      <Box x={100} y={10} w={80} label='Home' tone='accent' />
      <Box x={8} y={84} w={74} label='Services' />
      <Box x={103} y={84} w={74} label='About' />
      <Box x={198} y={84} w={74} label='Contact' />
      <Box x={8} y={130} w={74} h={28} label='Prices' tone='tint' />
      <Box x={198} y={130} w={74} h={28} label='Map' tone='tint' />
    </>
  ),
  screens: () => (
    <>
      <Card x={6} y={14} w={176} h={124} r={12}>
        <Text x={20} y={38} lines='Example Tailors' size={11.5} weight={600} />
        <rect x={20} y={48} width={148} height={56} rx={10} className='sv-accent-soft' />
        <Text x={30} y={72} lines='Made to measure' size={13} weight={600} />
        <Pill x={30} y={80} w={84} h={18} label='Book a fitting' tone='accent' size={9.5} />
        <Text x={20} y={124} lines='Suits    Dresses    Alterations' size={10.5} className='sv-muted' />
      </Card>
      <Card x={196} y={26} w={78} h={136} r={16}>
        <Text x={206} y={46} lines='Example' size={10} weight={600} />
        <rect x={204} y={54} width={62} height={56} rx={8} className='sv-accent-soft' />
        <Text x={210} y={74} lines={['Made to', 'measure']} size={10.5} weight={600} lineHeight={1.2} />
        <Pill x={204} y={118} w={62} h={16} label='Book' tone='accent' size={9} />
        <Pill x={204} y={138} w={62} h={16} label='WhatsApp' tone='success' size={9} />
      </Card>
    </>
  ),
  launch: () => (
    <>
      <Card x={6} y={8} w={268} h={152} r={14}>
        <Text x={22} y={36} lines='Launch checklist' size={13} weight={600} />
        <Pill x={210} y={21} w={50} h={22} label='Live' tone='success' size={11} />
        {['Loads fast on mobile data', 'Enquiry form tested', 'Visitor stats switched on', 'Ready for Google'].map((item, index) => (
          <g key={item}>
            <Tick cx={30} cy={60 + index * 26} r={8} />
            <Text x={46} y={64 + index * 26} lines={item} size={12} />
          </g>
        ))}
      </Card>
    </>
  ),
  flow: () => (
    <>
      {[
        { x: 6, title: 'Choose', lines: ['9:00', '10:30'] },
        { x: 108, title: 'Confirm', lines: ['Tue 13', '10:30'] },
        { x: 210, title: 'Done', lines: ['Booked', 'See you'] },
      ].map((screen, index) => (
        <g key={screen.title}>
          <Card x={screen.x} y={14} w={64} h={124} r={12}>
            <Text x={screen.x + 32} y={36} lines={screen.title} size={11} weight={600} anchor='middle' />
            {screen.lines.map((line, row) => (
              <Pill key={line} x={screen.x + 8} y={48 + row * 28} w={48} h={20} label={line} tone={index === 2 && row === 0 ? 'success-soft' : row === 1 && index < 2 ? 'accent' : 'tint'} size={9.5} />
            ))}
            <Pill x={screen.x + 8} y={110} w={48} h={18} label='Next' tone='outline' size={9} />
          </Card>
          {index < 2 ? <Arrow x={screen.x + 77} y={70} /> : null}
        </g>
      ))}
      <Text x={140} y={160} lines='Three screens, agreed first' size={11.5} anchor='middle' className='sv-muted' />
    </>
  ),
  platforms: () => (
    <>
      {[
        { x: 40, label: 'iPhone' },
        { x: 160, label: 'Android' },
      ].map((phone) => (
        <g key={phone.label}>
          <Card x={phone.x} y={8} w={80} h={128} r={16}>
            <Text x={phone.x + 12} y={32} lines='Book a visit' size={10.5} weight={600} />
            <Pill x={phone.x + 10} y={42} w={60} h={20} label='Tue 13' tone='accent-soft' size={9.5} />
            <Pill x={phone.x + 10} y={68} w={60} h={20} label='10:30' tone='accent' size={9.5} />
            <Pill x={phone.x + 10} y={104} w={60} h={20} label='Confirm' tone='accent' size={9.5} />
          </Card>
          <Text x={phone.x + 40} y={158} lines={phone.label} size={12.5} weight={600} anchor='middle' />
        </g>
      ))}
      <Text x={140} y={78} lines='=' size={20} weight={600} anchor='middle' className='sv-muted' />
    </>
  ),
  release: () => (
    <>
      <Card x={6} y={14} w={140} h={140} r={14}>
        <KeyRound x={20} y={26} width={16} height={16} className='sv-icon-accent' />
        <Text x={42} y={39} lines='Sign in' size={13} weight={600} />
        <rect x={20} y={54} width={112} height={24} rx={8} className='sv-tint' />
        <Text x={28} y={70} lines='you@example.com' size={10.5} className='sv-muted' />
        <rect x={20} y={84} width={112} height={24} rx={8} className='sv-tint' />
        <Text x={28} y={100} lines='••••••••' size={10.5} className='sv-muted' />
        <Pill x={20} y={118} w={112} h={24} label='Continue' tone='accent' size={11} />
      </Card>
      {[
        { label: 'App Store', src: '/platforms/app-store.png', y: 14 },
        { label: 'Google Play', src: '/platforms/google-play.png', y: 86 },
      ].map((store) => (
        <g key={store.label}>
          <Card x={160} y={store.y} w={114} h={64} r={12}>
            <image href={store.src} x={172} y={store.y + 16} width={32} height={32} />
            <Text x={212} y={store.y + 37} lines={store.label} size={11.5} weight={600} />
          </Card>
          <Tick cx={270} cy={store.y + 4} r={8} />
        </g>
      ))}
    </>
  ),
  catalogue: () => (
    <>
      {[
        { x: 6, name: 'Black tea', price: 'Rs 1,450', tone: 'sv-warning-soft' },
        { x: 100, name: 'Green tea', price: 'Rs 1,600', tone: 'sv-success-soft' },
        { x: 194, name: 'Spice box', price: 'Rs 2,900', tone: 'sv-accent-soft' },
      ].map((product) => (
        <Card key={product.name} x={product.x} y={8} w={80} h={128} r={12}>
          <rect x={product.x + 8} y={16} width={64} height={52} rx={8} className={product.tone} />
          <Text x={product.x + 10} y={86} lines={product.name} size={11} weight={600} />
          <Text x={product.x + 10} y={103} lines={product.price} size={11} className='sv-accent' />
          <Pill x={product.x + 8} y={110} w={64} h={18} label='200 g, 500 g' tone='tint' size={8.5} />
        </Card>
      ))}
      <Pill x={6} y={144} w={86} h={22} label='12 in stock' tone='success-soft' size={10.5} />
    </>
  ),
  checkout: () => (
    <>
      <path d='M 40 30 H 240' className='sv-path' />
      {['Cart', 'Details', 'Pay'].map((step, index) => (
        <g key={step}>
          <circle cx={40 + index * 100} cy={30} r={13} className={index < 2 ? 'sv-accent' : 'sv-card'} style={index < 2 ? undefined : { stroke: 'var(--p-accent)', strokeWidth: 2 }} />
          <Text x={40 + index * 100} y={34.5} lines={String(index + 1)} size={11.5} weight={600} anchor='middle' className={index < 2 ? 'sv-on-accent' : undefined} />
          <Text x={40 + index * 100} y={62} lines={step} size={12} weight={600} anchor='middle' />
        </g>
      ))}
      <Card x={6} y={80} w={268} h={80} r={12}>
        <image href='/brands/visa.svg' x={22} y={98} width={40} height={16} />
        <image href='/brands/mastercard.svg' x={70} y={96} width={28} height={20} />
        <image href='/brands/payhere.png' x={110} y={96} width={70} height={20} />
        <Pill x={20} y={126} w={124} h={24} label='Cash on delivery' tone='tint' size={11} />
        <Pill x={190} y={126} w={70} h={24} label='Pay now' tone='accent' size={11} />
      </Card>
    </>
  ),
  orders: () => (
    <>
      <Card x={6} y={8} w={268} h={152} r={14}>
        <Text x={20} y={34} lines='Orders today' size={13} weight={600} />
        <Text x={260} y={34} lines='Black tea: 11 left' size={10.5} anchor='end' className='sv-muted' />
        {[
          { name: 'Dilini, Black tea', status: 'Paid', tone: 'success-soft' as const },
          { name: 'Kasun, Green tea x2', status: 'Packed', tone: 'accent-soft' as const },
          { name: 'Ayesha, Spice box', status: 'Sent', tone: 'tint' as const },
        ].map((order, index) => (
          <g key={order.name}>
            <rect x={20} y={46 + index * 36} width={240} height={30} rx={8} className='sv-tint' />
            <Text x={30} y={65 + index * 36} lines={order.name} size={11.5} />
            <Pill x={198} y={51 + index * 36} w={54} h={20} label={order.status} tone={order.tone} size={10} />
          </g>
        ))}
      </Card>
    </>
  ),
  map: () => (
    <>
      <path d='M 72 31 H 102 M 172 31 H 202 M 237 46 V 92 M 202 107 H 172 M 102 107 H 72' className='sv-path' />
      <Box x={6} y={16} w={66} label='Order' />
      <Box x={102} y={16} w={70} label='Check' />
      <Box x={202} y={16} w={72} label='Approve' />
      <Box x={202} y={92} w={72} label='Invoice' />
      <Box x={102} y={92} w={70} label='Typed again' tone='note' />
      <Box x={6} y={92} w={66} label='Deliver' />
      <Text x={137} y={150} lines='The step that wastes time stands out' size={11.5} anchor='middle' className='sv-muted' />
    </>
  ),
  plan: () => (
    <>
      {[
        { x: 6, title: 'Now', items: ['Job list', 'Status'], tone: 'accent' as const },
        { x: 100, title: 'Next', items: ['Invoices'], tone: 'accent-soft' as const },
        { x: 194, title: 'Later', items: ['Reports', 'Mobile'], tone: 'tint' as const },
      ].map((column) => (
        <g key={column.title}>
          <rect x={column.x} y={8} width={80} height={152} rx={12} className='sv-tint' />
          <Text x={column.x + 12} y={32} lines={column.title} size={12.5} weight={600} />
          {column.items.map((item, index) => (
            <Pill key={item} x={column.x + 8} y={44 + index * 30} w={64} h={24} label={item} tone={column.tone} size={10.5} />
          ))}
        </g>
      ))}
    </>
  ),
  rollout: () => (
    <>
      <path d='M 30 40 H 250' className='sv-path' />
      {[
        { x: 30, label: 'Stage 1', note: 'Jobs', done: true },
        { x: 140, label: 'Stage 2', note: 'Invoices', done: false },
        { x: 250, label: 'Stage 3', note: 'Reports', done: false },
      ].map((stage) => (
        <g key={stage.label}>
          {stage.done ? (
            <Tick cx={stage.x} cy={40} r={12} />
          ) : (
            <circle cx={stage.x} cy={40} r={11} className='sv-card' style={{ stroke: 'var(--p-accent)', strokeWidth: 2 }} />
          )}
          <Text x={stage.x} y={76} lines={stage.label} size={12} weight={600} anchor='middle' />
          <Text x={stage.x} y={94} lines={stage.note} size={11} anchor='middle' className='sv-muted' />
        </g>
      ))}
      <Card x={6} y={112} w={268} h={48} r={12}>
        <BookOpen x={20} y={128} width={16} height={16} className='sv-icon-accent' />
        <Text x={44} y={141} lines='Training and a simple guide' size={12} weight={600} />
      </Card>
    </>
  ),
};

export function DeliverableArt({ art }: { art: ArtId }) {
  return (
    <div className='scene rounded-[var(--radius-xl)] bg-[var(--color-paper-3)] p-6'>
      <Canvas w={W} h={H}>{ART[art]()}</Canvas>
    </div>
  );
}
