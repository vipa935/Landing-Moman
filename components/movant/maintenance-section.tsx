import Image from 'next/image'
import { Gauge, TrendingUp } from 'lucide-react'
import { monthlyExpenses, upcomingMaintenance, vehicles } from '@/lib/movant-data'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const featured = vehicles[0]
const maxExpense = Math.max(...monthlyExpenses.map((m) => m.value))
const totalExpenses = monthlyExpenses.reduce((sum, m) => sum + m.value, 0)

const cardClass =
  'h-full rounded-3xl bg-card p-6 text-card-foreground shadow-[0_20px_60px_-30px_rgba(0,168,255,0.35)] transition-transform duration-500 hover:-translate-y-1 md:p-7'

function VehicleDetailCard() {
  return (
    <article className={cn(cardClass, 'flex flex-col')}>
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted">
        <Image src={featured.image} alt={featured.name} fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" />
        <span className="absolute top-3 left-3 rounded-full bg-emerald-500/90 px-2.5 py-1 text-[11px] font-semibold text-white">
          {featured.status}
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold">{featured.name}</h3>
          <p className="text-sm text-slate-500">Híbrido · 2021</p>
        </div>
        <span className="rounded-md border border-slate-300 px-2 py-1 font-mono text-xs font-semibold tracking-wider">
          {featured.plate}
        </span>
      </div>

      <div className="mt-6 rounded-2xl bg-background p-5 text-foreground">
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <Gauge className="size-4 text-primary" aria-hidden="true" />
          Kilometraje actual
        </div>
        <p className="mt-2 text-4xl font-bold tracking-tight">
          78.450 <span className="text-lg font-semibold text-primary">km</span>
        </p>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10" role="presentation">
          <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-[#1E90FF] to-primary" />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">1.550 km hasta el próximo cambio de aceite</p>
      </div>

      <dl className="mt-4 grid grid-cols-3 gap-3 lg:mt-auto lg:pt-4">
        {[
          { label: 'Último servicio', value: '12 sep' },
          { label: 'Seguro hasta', value: 'Jun 2027' },
          { label: 'Media mensual', value: '1.240 km' },
        ].map((stat) => (
          <div key={stat.label} className="rounded-2xl bg-secondary p-3">
            <dt className="text-[11px] text-slate-500">{stat.label}</dt>
            <dd className="mt-1 text-sm font-bold">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  )
}

function UpcomingCard() {
  return (
    <article className={cardClass}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">Próximos mantenimientos</h3>
        <span className="text-xs font-semibold text-accent-foreground">Ver todos</span>
      </div>
      <ul className="mt-5 flex flex-col gap-3">
        {upcomingMaintenance.map(({ title, detail, due, icon: Icon, urgent }) => (
          <li key={title} className="flex items-center gap-4 rounded-2xl bg-secondary p-3.5">
            <span
              className={cn(
                'flex size-11 shrink-0 items-center justify-center rounded-xl',
                urgent ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground',
              )}
            >
              <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-semibold">{title}</p>
              <p className="text-xs text-slate-500">{detail}</p>
            </div>
            <span
              className={cn(
                'shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold',
                urgent ? 'bg-amber-100 text-amber-700' : 'bg-white text-slate-600',
              )}
            >
              {due}
            </span>
          </li>
        ))}
      </ul>
    </article>
  )
}

function ExpensesBarCard() {
  return (
    <article className={cardClass}>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold">Gastos acumulados</h3>
          <p className="text-sm text-slate-500">Últimos 6 meses</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold tracking-tight">{totalExpenses.toLocaleString('es-ES')} €</p>
          <p className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600">
            <TrendingUp className="size-3.5" aria-hidden="true" />
            12% menos que el año pasado
          </p>
        </div>
      </div>

      <div
        className="mt-6 flex h-40 items-end gap-3 md:gap-5"
        role="img"
        aria-label={`Gráfica de barras de gastos mensuales: ${monthlyExpenses.map((m) => `${m.month} ${m.value} euros`).join(', ')}`}
      >
        {monthlyExpenses.map((m, i) => {
          const isLast = i === monthlyExpenses.length - 1
          return (
            <div key={m.month} className="group flex h-full flex-1 flex-col items-center justify-end gap-2">
              <span className="text-[11px] font-semibold text-slate-500 opacity-0 transition-opacity group-hover:opacity-100">
                {m.value} €
              </span>
              <div
                className={cn(
                  'w-full max-w-12 rounded-t-lg rounded-b-sm transition-colors duration-300',
                  isLast ? 'bg-primary' : 'bg-accent group-hover:bg-primary/60',
                )}
                style={{ height: `${(m.value / maxExpense) * 100}%` }}
              />
              <span className="text-xs font-medium text-slate-500">{m.month}</span>
            </div>
          )
        })}
      </div>
    </article>
  )
}

export function MaintenanceSection() {
  return (
    <section
      id="mantenimiento"
      className="relative scroll-mt-16 overflow-hidden bg-surface py-24 md:py-32"
      aria-labelledby="mantenimiento-heading"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_10%,rgba(0,168,255,0.12),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div>
          <SectionHeading
            titleId="mantenimiento-heading"
            align="center"
            eyebrow="Ficha del vehículo"
            title="Control total del mantenimiento"
            description="Kilometraje, próximas revisiones y gastos en una vista clara. Sabrás siempre qué toca y cuándo."
          />
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-5">
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <VehicleDetailCard />
          </Reveal>
          <Reveal className="lg:col-span-3" delay={100}>
            <UpcomingCard />
          </Reveal>
          <Reveal className="lg:col-span-3" delay={200}>
            <ExpensesBarCard />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
