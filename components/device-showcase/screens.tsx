export function WebsiteScreenContent() {
  return (
    <div className='flex h-full flex-col bg-white p-[4%] text-neutral-900'>
      <div className='max-w-[58%] space-y-[2.5%]'>
        <div className='h-[2.2%] min-h-2 w-[72%] rounded-full bg-neutral-900' />
        <div className='h-[1.4%] min-h-1.5 w-[88%] rounded-full bg-neutral-400' />
        <div className='h-[1.4%] min-h-1.5 w-[64%] rounded-full bg-neutral-300' />
        <div className='mt-[2%] h-[3.5%] min-h-4 w-[28%] rounded-full bg-[#0071e3]' />
      </div>

      <div className='mt-auto ml-auto w-[38%] rounded-xl border border-neutral-200 bg-neutral-50 p-[3.5%]'>
        <p className='text-[clamp(8px,1.1vw,12px)] font-bold text-neutral-900'>
          Website reach
        </p>
        <div className='mt-[3%] flex gap-[2%]'>
          <span className='rounded-full bg-blue-100 px-[6%] py-[1%] text-[clamp(6px,0.8vw,9px)] font-semibold text-blue-700'>
            SEO
          </span>
          <span className='rounded-full border border-neutral-200 bg-white px-[6%] py-[1%] text-[clamp(6px,0.8vw,9px)] font-semibold text-neutral-500'>
            Marketing
          </span>
        </div>
        <div className='relative mt-[6%] h-[28%] min-h-10'>
          <div className='absolute inset-x-0 bottom-0 flex h-full items-end justify-between gap-[3%] px-[2%]'>
            {[45, 62, 54, 78].map((height, index) => (
              <div
                key={height}
                className='w-[14%] rounded-sm bg-[#0071e3]'
                style={{
                  height: `${height}%`,
                  opacity: 0.35 + index * 0.15,
                }}
              />
            ))}
          </div>
          <svg
            className='absolute inset-0 size-full'
            viewBox='0 0 100 40'
            preserveAspectRatio='none'
            aria-hidden>
            <path
              d='M0 28 L25 20 L50 24 L75 12 L100 6'
              fill='none'
              stroke='#0071e3'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
        <p className='mt-[4%] text-[clamp(6px,0.85vw,10px)] font-bold text-green-600'>
          +38% visibility
        </p>
      </div>
    </div>
  );
}

export function MobileScreenContent() {
  return (
    <div className='flex h-full flex-col bg-white px-[6%] pb-[8%] pt-[10%] text-neutral-900'>
      <div className='space-y-[2%]'>
        <div className='h-[1.8%] min-h-2 w-[58%] rounded-full bg-neutral-900' />
        <div className='h-[1.2%] min-h-1.5 w-[44%] rounded-full bg-neutral-400' />
      </div>

      <div className='mt-[6%] rounded-2xl border border-blue-200 bg-blue-50 p-[5%]'>
        <div className='h-[1.2%] min-h-1.5 w-[42%] rounded-full bg-blue-600 opacity-80' />
        <div className='mt-[3%] h-[1%] min-h-1 w-[62%] rounded-full bg-blue-400 opacity-50' />
      </div>

      <div className='mt-[5%] space-y-[3%]'>
        {[72, 58, 64].map((width) => (
          <div
            key={width}
            className='rounded-xl border border-neutral-200 bg-neutral-50 p-[4%]'>
            <div
              className='h-[1.2%] min-h-1.5 rounded-full bg-neutral-400'
              style={{ width: `${width}%` }}
            />
            <div className='mt-[2.5%] h-[1%] min-h-1 w-[38%] rounded-full bg-neutral-300' />
          </div>
        ))}
      </div>

      <div className='mt-auto flex justify-around border-t border-neutral-200 pt-[4%]'>
        {['Home', 'Tasks', 'Profile'].map((label) => (
          <div
            key={label}
            className='flex flex-col items-center gap-[4%]'>
            <div className='min-h-2.5 min-w-2.5 size-[2.8%] rounded-full bg-[#007AFF] opacity-80' />
            <span className='text-[clamp(6px,0.75vw,9px)] text-neutral-500'>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
