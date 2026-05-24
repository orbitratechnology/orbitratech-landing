import type { CollectionConfig } from 'payload'

import { hasAdminRole, isAdmin, type AuthUser } from '@/access/isAdmin'
import {
  revalidateLandingAfterDelete,
  revalidateLandingCollection,
} from '@/hooks/revalidateLanding'

export const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    singular: 'Product',
    plural: 'Products',
  },
  admin: {
    group: 'Landing Page',
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'sortOrder', 'published', 'updatedAt'],
    description:
      'Products shown in the Work section of the Orbitra Tech landing page.',
  },
  access: {
    read: ({ req: { user } }) => {
      if (hasAdminRole(user as AuthUser)) return true

      return {
        published: {
          equals: true,
        },
      }
    },
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  defaultSort: 'sortOrder',
  hooks: {
    afterChange: [revalidateLandingCollection],
    afterDelete: [revalidateLandingAfterDelete],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      index: true,
      required: true,
      admin: {
        description: 'URL-safe identifier (e.g. worknet)',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'In development',
      options: [
        { label: 'In development', value: 'In development' },
        { label: 'Planned', value: 'Planned' },
        { label: 'Beta', value: 'Beta' },
        { label: 'Live', value: 'Live' },
      ],
    },
    {
      name: 'features',
      type: 'array',
      minRows: 1,
      labels: {
        singular: 'Feature',
        plural: 'Features',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        description: 'Lower numbers appear first',
      },
    },
    {
      name: 'published',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar',
        description: 'Only published products appear on the site',
      },
    },
    {
      type: 'group',
      name: 'legalLinks',
      label: 'Legal links',
      admin: {
        description: 'Optional footer links shown on the product card',
      },
      fields: [
        {
          name: 'privacyPolicyUrl',
          type: 'text',
          admin: {
            description: 'Relative path (e.g. /worknet/privacy-policy)',
          },
        },
        {
          name: 'termsUrl',
          type: 'text',
          admin: {
            description: 'Relative path (e.g. /worknet/terms-and-conditions)',
          },
        },
      ],
    },
  ],
}
