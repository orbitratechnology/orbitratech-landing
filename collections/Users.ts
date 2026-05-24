import type { CollectionConfig } from 'payload'

import { allowFirstUserOrAdmin, hasAdminRole, isAdmin, type AuthUser } from '@/access/isAdmin'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    group: 'Administration',
  },
  auth: {
    tokenExpiration: 60 * 60 * 24 * 7,
    maxLoginAttempts: 5,
    lockTime: 600 * 1000,
  },
  access: {
    read: ({ req: { user } }) => {
      if (hasAdminRole(user as AuthUser)) return true
      if (user && 'id' in user) return { id: { equals: user.id } }
      return false
    },
    create: allowFirstUserOrAdmin,
    update: isAdmin,
    delete: isAdmin,
    admin: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      required: true,
      defaultValue: ['admin'],
      saveToJWT: true,
      options: [{ label: 'Admin', value: 'admin' }],
    },
  ],
}
