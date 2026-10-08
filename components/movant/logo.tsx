import Image from 'next/image'
import { cn } from '@/lib/utils'

type LogoMarkProps = {
  className?: string
}

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <Image
      src="/logo.png"
      alt=""
      aria-hidden="true"
      width={720}
      height={432}
      priority
      className={cn('h-8 w-auto', className)}
    />
  )
}

type LogoProps = {
  variant?: 'stacked' | 'inline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const markSizes = { sm: 'h-7', md: 'h-10', lg: 'h-16 md:h-20' }
const textSizes = {
  sm: 'text-base tracking-[0.25em]',
  md: 'text-xl tracking-[0.3em]',
  lg: 'text-3xl md:text-4xl tracking-[0.35em]',
}

export function Logo({ variant = 'inline', size = 'sm', className }: LogoProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center text-foreground',
        variant === 'stacked' ? 'flex-col gap-4' : 'flex-row gap-2.5',
        className,
      )}
    >
      <LogoMark className={markSizes[size]} />
      <span className={cn('font-bold uppercase leading-none', textSizes[size], variant === 'stacked' && 'pl-[0.35em]')}>
        Moman
      </span>
    </span>
  )
}
