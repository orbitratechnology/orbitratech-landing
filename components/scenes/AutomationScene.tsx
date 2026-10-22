'use client';

import { RefreshCw } from 'lucide-react';

import { Canvas, Card, Pill, Text } from './parts';
import { legendReset, legendStep, SceneShell, tap, travel, type SceneBuild } from './scene-shell';
import { StepLegend } from './StepLegend';

const JOBS = [
  { name: 'Job 12, Mr. Silva', status: 'Ready', tone: 'success-soft' as const, w: 54 },
  { name: 'Job 13, Hotel Ruby', status: 'In progress', tone: 'warning-soft' as const, w: 78 },
  { name: 'Job 14, Nimal Stores', status: 'New', tone: 'accent-soft' as const, w: 46 },
];

const FLOWS = [
  'M 70 112 C 70 150, 120 160, 150 184',
  'M 212 106 C 212 140, 220 160, 220 184',
  'M 364 120 C 364 150, 320 160, 290 184',
];

const build: SceneBuild = (tl, q) => {
  legendReset(tl, q);
  tl.set(q('.a-ready'), { autoAlpha: 0 }, 0.001);
  tl.set(q('.a-doing'), { autoAlpha: 1 }, 0.001);
  tl.fromTo(
    q('.a-scrap'),
    { autoAlpha: 0, y: 12 },
    { autoAlpha: 1, y: 0, stagger: 0.15, duration: 0.45, ease: 'power3.out' },
    0.1,
  );
  legendStep(tl, q, 0, 0.3);
  tl.to(q('.a-scrap'), { rotation: '+=2', yoyo: true, repeat: 1, duration: 0.25, stagger: 0.08, transformOrigin: '50% 50%' }, 0.9);
  tl.from(q('.a-flow'), { drawSVG: '0%', stagger: 0.12, duration: 0.6, ease: 'power2.inOut' }, 1.5);
  const dots = q('.a-dot');
  q('.a-flow').forEach((path, index) => travel(tl, dots[index], path, 1.6 + index * 0.12, 0.7));
  legendStep(tl, q, 1, 1.6);
  tl.to(q('.a-scrap'), { autoAlpha: 0.55, duration: 0.5 }, 2.4);
  tl.from(q('.a-board'), { autoAlpha: 0, y: 16, duration: 0.6, ease: 'power3.out' }, 2.3);
  tl.from(q('.a-row'), { autoAlpha: 0, x: -12, stagger: 0.12, duration: 0.45, ease: 'power2.out' }, 2.7);
  legendStep(tl, q, 2, 3.0);
  tap(tl, q('.a-tap')[0], 3.9);
  tl.to(q('.a-doing'), { autoAlpha: 0, duration: 0.2 }, 4.0);
  tl.to(q('.a-ready'), { autoAlpha: 1, duration: 0.3 }, 4.05);
  tl.addLabel('hold', 4.6);
  tl.to({}, { duration: 2.8 }, 'hold');
  tl.to(q('.a-all'), { autoAlpha: 0, duration: 0.4, ease: 'power1.in' });
};

export function AutomationScene({ className, active }: { className?: string; active?: boolean }) {
  return (
    <SceneShell
      build={build}
      active={active}
      className={className}
      caption='Jobs tracked in a spreadsheet, a notebook and WhatsApp chats flow into one shared list, where each job shows its status and job 12 changes from in progress to ready.'>
      <Canvas w={440} h={440}>
        <g className='a-all'>
          {FLOWS.map((d) => (
            <path key={d} d={d} className='sv-path a-flow' />
          ))}

          {/* 1. Work spread across tools */}
          <g className='a-scrap' style={{ opacity: 0.55 }}>
            <g transform='rotate(-4 69 60)'>
              <Card x={0} y={14} w={138} h={92} r={10}>
                <Text x={12} y={36} lines='jobs_final_v3.xlsx' size={11} weight={600} />
                <path d='M 12 46 H 126 M 12 66 H 126 M 12 86 H 126 M 50 46 V 98 M 92 46 V 98' className='sv-grid' />
                <Text x={16} y={60} lines='12' size={11} />
                <Text x={56} y={60} lines='Silva' size={11} />
                <Text x={98} y={60} lines='?' size={11} className='sv-muted' />
                <Text x={16} y={80} lines='13' size={11} />
                <Text x={56} y={80} lines='Ruby' size={11} />
                <Text x={98} y={80} lines='?' size={11} className='sv-muted' />
              </Card>
            </g>
          </g>
          <g className='a-scrap' style={{ opacity: 0.55 }}>
            <g transform='rotate(3 212 50)'>
              <Card x={150} y={2} w={124} h={98} r={10} tone='note'>
                <Text x={164} y={30} lines={['Call Mr. Silva', 'Invoice for 13', 'Order paper']} size={12} lineHeight={1.55} />
              </Card>
            </g>
          </g>
          <g className='a-scrap' style={{ opacity: 0.55 }}>
            <g transform='rotate(-2 365 66)'>
              <Card x={290} y={18} w={150} h={98} r={10}>
                <rect x={302} y={32} width={116} height={28} rx={10} className='sv-tint' />
                <Text x={312} y={50} lines='Is job 12 ready?' size={11.5} />
                <rect x={330} y={68} width={98} height={28} rx={10} className='sv-success-soft' />
                <Text x={342} y={86} lines='Checking…' size={11.5} />
              </Card>
            </g>
          </g>

          {/* 2 and 3. One shared list */}
          <Card x={20} y={186} w={400} h={152} className='a-board'>
            <Text x={36} y={214} lines='All jobs' size={15} weight={600} />
            <RefreshCw x={296} y={204} width={12} height={12} className='sv-icon' />
            <Text x={404} y={214} lines='Updated just now' size={11.5} anchor='end' className='sv-muted' />
            {JOBS.map((job, index) => (
              <g key={job.name} className='a-row'>
                <rect x={36} y={226 + index * 36} width={368} height={30} rx={9} className='sv-tint' />
                <Text x={48} y={246 + index * 36} lines={job.name} size={12.5} />
                {index === 0 ? (
                  <>
                    <g className='a-doing' style={{ opacity: 0 }}>
                      <Pill x={318} y={231} w={78} h={20} label='In progress' tone='warning-soft' size={10.5} />
                    </g>
                    <g className='a-ready'>
                      <Pill x={342} y={231} w={54} h={20} label='Ready' tone='success-soft' size={10.5} />
                    </g>
                    <circle cx={370} cy={241} r={18} className='sv-success a-tap' style={{ opacity: 0 }} />
                  </>
                ) : (
                  <Pill
                    x={396 - job.w}
                    y={231 + index * 36}
                    w={job.w}
                    h={20}
                    label={job.status}
                    tone={job.tone}
                    size={10.5}
                  />
                )}
              </g>
            ))}
          </Card>

          {FLOWS.map((d) => (
            <circle key={`dot-${d}`} r={5} className='sv-accent a-dot' style={{ opacity: 0 }} />
          ))}

          <StepLegend
            y={372}
            steps={[
              ['Work is spread', 'across chats'],
              ['We bring it', 'into one place'],
              ['Everyone sees', 'every job'],
            ]}
          />
        </g>
      </Canvas>
    </SceneShell>
  );
}
