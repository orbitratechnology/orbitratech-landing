import type { Access } from 'payload'

import type { User } from '@/payload-types'

export type AuthUser = User | null | undefined

export function hasAdminRole(user: AuthUser): boolean {
  if (!user || !('roles' in user)) return false
  return Boolean(user.roles?.includes('admin'))
}

export const isAdmin: Access = ({ req: { user } }) => {
  return hasAdminRole(user as AuthUser)
}

export const isAuthenticated: Access = ({ req: { user } }) => Boolean(user)

export const publicRead: Access = () => true

export const allowFirstUserOrAdmin: Access = async ({ req }) => {
  if (hasAdminRole(req.user as AuthUser)) return true

  const { totalDocs } = await req.payload.find({
    collection: 'users',
    limit: 0,
    overrideAccess: true,
  })

  return totalDocs === 0
}
