import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type PhoneFrameProps = {
  children: ReactNode
  className?: string
}

export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div className={cn('relative mx-auto w-full max-w-[360px]', className)}>
      <div aria-hidden="true" className="absolute -inset-8 -z-10 rounded-full bg-primary/20 blur-3xl" />
      <div className="rounded-[2.75rem] border border-white/15 bg-[#060f1d] p-2.5 shadow-[0_40px_100px_-30px_rgba(0,168,255,0.45)]">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-secondary">
          <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[11px] font-semibold text-card-foreground">
            <span>9:41</span>
            <span aria-hidden="true" className="h-5 w-20 rounded-full bg-[#060f1d]" />
            <span className="flex items-center gap-1" aria-hidden="true">
              <span className="h-2.5 w-4 rounded-[3px] border border-card-foreground/70" />
            </span>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
