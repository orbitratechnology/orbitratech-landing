import { Text } from './parts';

/**
 * The three-step legend under a scene: numbered markers joined by a line that
 * fills as the story plays. Columns are 150 units wide on a 440 canvas.
 */
export function StepLegend({
  y,
  steps,
  columns = [0, 150, 300],
}: {
  y: number;
  steps: [string[], string[], string[]];
  columns?: [number, number, number];
}) {
  const cx = columns.map((x) => x + 12);
  return (
    <g className='s-legend'>
      <path d={`M ${cx[0]} ${y} H ${cx[2]}`} className='sv-grid' style={{ strokeWidth: 2 }} />
      <path d={`M ${cx[0]} ${y} H ${cx[2]}`} className='sv-path s-legend-fill' style={{ strokeOpacity: 1 }} />
      {steps.map((lines, index) => (
        <g key={lines.join(' ')} className={`s-legend-step s-legend-step-${index}`}>
          <circle cx={cx[index]} cy={y} r={12} className='sv-accent' />
          <text
            x={cx[index]}
            y={y + 4.5}
            textAnchor='middle'
            className='sv-on-accent'
            style={{ fontSize: 13, fontWeight: 600 }}>
            {index + 1}
          </text>
          <Text x={columns[index]} y={y + 34} lines={lines} size={15} weight={600} lineHeight={1.25} />
        </g>
      ))}
    </g>
  );
}
