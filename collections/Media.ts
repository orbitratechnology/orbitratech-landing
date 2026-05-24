import type { CollectionConfig } from 'payload'

import { isAdmin, publicRead } from '@/access/isAdmin'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    group: 'Landing Page',
  },
  access: {
    read: publicRead,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: false,
    },
  ],
  upload: {
    mimeTypes: ['image/*'],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 160,
        height: 160,
        position: 'centre',
      },
      {
        name: 'card',
        width: 320,
        height: 320,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
  },
}
