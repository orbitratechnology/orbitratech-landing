import type { GlobalConfig } from 'payload'

import { isAdmin, publicRead } from '@/access/isAdmin'
import { revalidateLandingGlobal } from '@/hooks/revalidateLanding'

const statFields = [
  {
    name: 'key',
    type: 'text' as const,
    required: true,
    admin: {
      readOnly: true,
      width: '25%',
    },
  },
  {
    name: 'label',
    type: 'text' as const,
    required: true,
    admin: {
      width: '35%',
    },
  },
  {
    name: 'badgeLabel',
    type: 'text' as const,
    admin: {
      width: '25%',
      description: 'Optional shorter label for hero badges',
    },
  },
  {
    name: 'value',
    type: 'number' as const,
    required: true,
    min: 0,
    admin: {
      width: '15%',
    },
  },
  {
    name: 'suffix',
    type: 'text' as const,
    admin: {
      width: '15%',
      description: 'e.g. +, /5, or leave empty',
    },
  },
]

export const SiteStats: GlobalConfig = {
  slug: 'site-stats',
  label: 'Company Stats',
  admin: {
    group: 'Landing Page',
    description:
      'Numbers shown in the About section and hero badges on the landing page.',
  },
  access: {
    read: publicRead,
    update: isAdmin,
  },
  hooks: {
    afterChange: [revalidateLandingGlobal],
  },
  fields: [
    {
      name: 'stats',
      type: 'array',
      minRows: 4,
      maxRows: 4,
      labels: {
        singular: 'Stat',
        plural: 'Stats',
      },
      defaultValue: [
        {
          key: 'smes',
          label: 'SMEs partnered',
          value: 5,
          suffix: '+',
        },
        {
          key: 'solutions',
          label: 'Solutions delivered',
          badgeLabel: 'solutions shipped',
          value: 7,
          suffix: '+',
        },
        {
          key: 'pipeline',
          label: 'Projects in pipeline',
          value: 2,
          suffix: '',
        },
        {
          key: 'satisfaction',
          label: 'Client satisfaction',
          value: 5,
          suffix: '/5',
        },
      ],
      fields: statFields,
    },
  ],
}
