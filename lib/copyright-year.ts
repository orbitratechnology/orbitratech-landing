import { cacheLife } from 'next/cache'

export async function getCopyrightYear(): Promise<number> {
  'use cache'
  cacheLife('days')
  return new Date().getFullYear()
}
