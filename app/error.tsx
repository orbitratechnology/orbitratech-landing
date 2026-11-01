'use client'

import { useEffect } from 'react'

import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className='flex min-h-screen flex-col items-center justify-center px-6 text-center'>
      <p className='text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]'>
        Something went wrong
      </p>
      <h1 className='mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-ink)]'>
        We hit a snag loading this page
      </h1>
      <p className='mt-4 max-w-md text-[var(--color-ink-muted)]'>
        Please try again. If the problem persists, contact Orbitra Tech support.
      </p>
      <Button size='lg' onClick={reset} className='mt-8'>
        Try again
      </Button>
    </main>
  )
}
