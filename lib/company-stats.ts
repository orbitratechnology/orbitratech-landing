export type CompanyStat = {
  id: string;
  label: string;
  badgeLabel?: string;
  value: number;
  suffix: string;
};

export const COMPANY_STATS: CompanyStat[] = [
  {
    id: 'smes',
    label: 'SMEs partnered',
    value: 5,
    suffix: '+',
  },
  {
    id: 'solutions',
    label: 'Solutions delivered',
    badgeLabel: 'solutions shipped',
    value: 7,
    suffix: '+',
  },
  {
    id: 'pipeline',
    label: 'Projects in pipeline',
    value: 2,
    suffix: '',
  },
  {
    id: 'satisfaction',
    label: 'Client satisfaction',
    value: 5,
    suffix: '/5',
  },
];

export function formatStatValue(stat: Pick<CompanyStat, 'value' | 'suffix'>) {
  return `${stat.value}${stat.suffix}`;
}

export function formatStatLine(
  stat: CompanyStat,
  variant: 'default' | 'badge' = 'default',
) {
  const label =
    variant === 'badge' && stat.badgeLabel ? stat.badgeLabel : stat.label;
  return `${formatStatValue(stat)} ${label}`;
}

export const SHOWCASE_STATS = COMPANY_STATS.slice(0, 2);
