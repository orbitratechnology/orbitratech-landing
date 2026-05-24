import { revalidatePath, revalidateTag } from 'next/cache'
import type {
    CollectionAfterChangeHook,
    CollectionAfterDeleteHook,
    GlobalAfterChangeHook,
} from 'payload'

function revalidateLandingCache() {
  try {
    revalidatePath('/')
    revalidateTag('site-stats', 'max')
    revalidateTag('products', 'max')
  } catch {
    // No-op outside Next.js request context (e.g. seed scripts)
  }
}

export const revalidateLandingGlobal: GlobalAfterChangeHook = () => {
  revalidateLandingCache()
}

export const revalidateLandingCollection: CollectionAfterChangeHook = () => {
  revalidateLandingCache()
}

export const revalidateLandingAfterDelete: CollectionAfterDeleteHook = () => {
  revalidateLandingCache()
}
