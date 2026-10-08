import { cn } from '@/lib/utils'

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.77-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-2.99-.79-1.54.02-2.96.9-3.75 2.27-1.6 2.78-.41 6.89 1.15 9.14.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.78.74 2.99.72 1.24-.02 2.02-1.12 2.77-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.66ZM14.1 5.86c.63-.77 1.06-1.83.94-2.89-.91.04-2.02.61-2.67 1.37-.58.67-1.1 1.76-.96 2.8 1.02.08 2.06-.52 2.69-1.28Z" />
    </svg>
  )
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M3.6 2.3c-.2.2-.3.6-.3 1v17.4c0 .4.1.8.3 1l9.7-9.7L3.6 2.3Z" fill="#00A8FF" />
      <path d="m16.5 15.2-3.2-3.2 3.2-3.2 3.7 2.1c1 .6 1 1.6 0 2.2l-3.7 2.1Z" fill="#5AD1FF" />
      <path d="M16.5 15.2 13.3 12l-9.7 9.7c.4.4 1 .4 1.6.1l11.3-6.6Z" fill="#1E5EFF" />
      <path d="M16.5 8.8 5.2 2.2c-.6-.4-1.2-.3-1.6.1l9.7 9.7 3.2-3.2Z" fill="#7FE0FF" />
    </svg>
  )
}

type StoreButtonsProps = {
  className?: string
}

const buttonClass =
  'group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-left text-foreground backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-white/10 hover:shadow-[0_10px_40px_-10px_rgba(0,168,255,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

export function StoreButtons({ className }: StoreButtonsProps) {
  return (
    <div className={cn('flex flex-col gap-3 sm:flex-row', className)}>
      <a href="#" className={buttonClass} aria-label="Descargar en App Store">
        <AppleIcon className="size-7" />
        <span className="flex flex-col leading-tight">
          <span className="text-[11px] text-muted-foreground">Descárgalo en</span>
          <span className="text-base font-semibold">App Store</span>
        </span>
      </a>
      <a href="#" className={buttonClass} aria-label="Disponible en Google Play">
        <GooglePlayIcon className="size-7" />
        <span className="flex flex-col leading-tight">
          <span className="text-[11px] text-muted-foreground">Disponible en</span>
          <span className="text-base font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  )
}
