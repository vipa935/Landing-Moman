import { Logo, LogoMark } from './logo'
import { Reveal } from './reveal'
import { StoreButtons } from './store-buttons'

export function CtaSection() {
  return (
    <section id="descargar" className="relative scroll-mt-16 px-5 py-24 md:px-8 md:py-32" aria-labelledby="cta-title">
      <Reveal className="relative isolate mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-surface-strong to-background px-6 py-16 text-center md:px-16 md:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(0,168,255,0.3),transparent_70%)]"
        />
        <LogoMark className="absolute -right-10 -bottom-10 -z-10 size-64 opacity-[0.06]" />

        <div className="flex flex-col items-center gap-6">
          <LogoMark className="size-14" />
          <h2
            id="cta-title"
            className="max-w-2xl text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl"
          >
            Lleva el control de tus vehículos al siguiente nivel
          </h2>
          <p className="max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Descarga Moman gratis y empieza hoy a cuidar de tus vehículos como se merecen.
          </p>
          <StoreButtons className="mt-4 justify-center" />
        </div>
      </Reveal>

      <footer className="mx-auto mt-20 flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Logo size="sm" />
          <p className="text-sm text-muted-foreground">Tu vehículo, siempre en buenas manos.</p>
        </div>
        <nav aria-label="Legal">
          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <li>
              <a href="#" className="transition-colors hover:text-foreground">
                Privacidad
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-foreground">
                Términos
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-foreground">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        <p className="text-sm text-muted-foreground">{'© 2026 Moman. Todos los derechos reservados.'}</p>
      </footer>
    </section>
  )
}
