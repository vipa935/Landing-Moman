import { ArrowRight, ChevronDown } from 'lucide-react'
import { vehicleTypes } from '@/lib/movant-data'
import { Logo } from './logo'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-svh items-center overflow-hidden pt-24 pb-16"
      aria-labelledby="hero-title"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,168,255,0.22),transparent_70%),radial-gradient(ellipse_50%_40%_at_85%_80%,rgba(30,94,255,0.18),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-5 text-center md:px-8">
        <div className="animate-in fade-in zoom-in-95 duration-1000">
          <div className="relative">
            <div aria-hidden="true" className="absolute inset-0 -z-10 scale-150 rounded-full bg-primary/20 blur-3xl" />
            <Logo variant="stacked" size="lg" />
          </div>
        </div>

        <h1
          id="hero-title"
          className="mt-10 max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight text-foreground animate-in fade-in slide-in-from-bottom-4 fill-mode-both delay-200 duration-1000 sm:text-5xl md:text-6xl"
        >
          Tu vehículo, siempre en <span className="text-primary">buenas manos.</span>
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-bottom-4 fill-mode-both delay-300 duration-1000 md:text-lg">
          Mantenimientos, gastos, ITV y documentación de todos tus vehículos, organizados en una sola app.
          Recibe avisos antes de que sea tarde.
        </p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-4 fill-mode-both delay-500 duration-1000 sm:w-auto sm:flex-row">
          <a
            href="#descargar"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1E90FF] hover:shadow-[0_12px_40px_-8px_rgba(0,168,255,0.8)] sm:w-auto"
          >
            Descargar App
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href="#vehiculos"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-foreground backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-white/10 sm:w-auto"
          >
            Ver funcionalidades
          </a>
        </div>

        <ul
          className="mt-16 flex flex-wrap items-center justify-center gap-3 animate-in fade-in fill-mode-both delay-700 duration-1000 md:mt-20 md:gap-4"
          aria-label="Tipos de vehículos compatibles"
        >
          {vehicleTypes.map(({ id, label, icon: Icon }) => (
            <li
              key={id}
              className="group flex flex-col items-center gap-2"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-surface text-primary transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/50 group-hover:bg-surface-strong md:size-16">
                <Icon className="size-6 md:size-7" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <span className="text-xs font-medium text-muted-foreground">{label}</span>
            </li>
          ))}
        </ul>

        <a
          href="#vehiculos"
          className="mt-12 hidden text-muted-foreground transition-colors hover:text-primary md:block"
          aria-label="Desplazarse a la siguiente sección"
        >
          <ChevronDown className="size-6 motion-safe:animate-bounce" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
