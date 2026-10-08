'use client'

import { useState } from 'react'
import { expenseCategories, expensesByPeriod, type ExpensePeriod } from '@/lib/movant-data'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const periods: { id: ExpensePeriod; label: string }[] = [
  { id: 'mensual', label: 'Mensual' },
  { id: 'trimestral', label: 'Trimestral' },
  { id: 'anual', label: 'Anual' },
]

const RADIUS = 70
const CIRCUMFERENCE = 2 * Math.PI * RADIUS
const GAP = 4

const formatEuro = (value: number) =>
  value.toLocaleString('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })

function DonutChart({ period }: { period: ExpensePeriod }) {
  const values = expensesByPeriod[period]
  const total = Object.values(values).reduce((sum, v) => sum + v, 0)
  const segments = expenseCategories.filter((c) => values[c.id] > 0)

  let offset = 0
  const arcs = segments.map((category) => {
    const length = (values[category.id] / total) * CIRCUMFERENCE
    const arc = { ...category, length: Math.max(length - GAP, 0), offset }
    offset += length
    return arc
  })

  return (
    <div className="relative mx-auto aspect-square w-full max-w-64">
      <svg
        viewBox="0 0 180 180"
        className="size-full -rotate-90"
        role="img"
        aria-label={`Gráfica circular de gastos ${period}: ${segments.map((s) => `${s.label} ${formatEuro(values[s.id])}`).join(', ')}`}
      >
        <circle cx="90" cy="90" r={RADIUS} fill="none" stroke="var(--secondary)" strokeWidth="20" />
        {arcs.map((arc) => (
          <circle
            key={arc.id}
            cx="90"
            cy="90"
            r={RADIUS}
            fill="none"
            stroke={arc.color}
            strokeWidth="20"
            strokeDasharray={`${arc.length} ${CIRCUMFERENCE}`}
            strokeDashoffset={-arc.offset}
            className="transition-all duration-700 ease-out"
          />
        ))}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-xs font-medium text-slate-500">Total gastos</span>
        <span className="text-3xl font-bold tracking-tight text-card-foreground">{formatEuro(total)}</span>
      </div>
    </div>
  )
}

export function ExpensesSection() {
  const [period, setPeriod] = useState<ExpensePeriod>('trimestral')
  const values = expensesByPeriod[period]
  const total = Object.values(values).reduce((sum, v) => sum + v, 0)

  return (
    <section
      id="gastos"
      className="relative scroll-mt-16 overflow-hidden bg-surface py-24 md:py-32"
      aria-labelledby="gastos-title"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_90%_90%,rgba(0,168,255,0.12),transparent_70%)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <SectionHeading
            titleId="gastos-title"
            eyebrow="Finanzas del vehículo"
            title="Control de gastos"
            description="Descubre cuánto te cuesta realmente cada vehículo. Moman agrupa tus gastos por categoría para que tomes mejores decisiones."
          />
          <Reveal delay={100} className="grid grid-cols-2 gap-4 sm:max-w-md">
            <div className="rounded-2xl border border-white/10 bg-background/60 p-5">
              <p className="text-xs text-muted-foreground">Coste por km</p>
              <p className="mt-1 text-2xl font-bold text-foreground">0,14 €</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-background/60 p-5">
              <p className="text-xs text-muted-foreground">Ahorro estimado</p>
              <p className="mt-1 text-2xl font-bold text-primary">320 €/año</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <article className="rounded-3xl bg-card p-6 text-card-foreground shadow-[0_30px_80px_-30px_rgba(0,168,255,0.45)] md:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-bold">Resumen de gastos</h3>
              <div role="tablist" aria-label="Periodo" className="inline-flex rounded-full bg-secondary p-1">
                {periods.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    role="tab"
                    aria-selected={period === p.id}
                    onClick={() => setPeriod(p.id)}
                    className={cn(
                      'flex-1 rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-300',
                      period === p.id
                        ? 'bg-primary text-primary-foreground shadow-[0_6px_16px_-6px_rgba(0,168,255,0.9)]'
                        : 'text-slate-500 hover:text-card-foreground',
                    )}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 grid items-center gap-8 sm:grid-cols-2">
              <DonutChart period={period} />
              <ul className="flex flex-col gap-3">
                {expenseCategories.map((category) => {
                  const value = values[category.id]
                  const percent = total ? Math.round((value / total) * 100) : 0
                  return (
                    <li key={category.id} className="flex items-center gap-3">
                      <span
                        className="size-3 shrink-0 rounded-full"
                        style={{ backgroundColor: category.color }}
                        aria-hidden="true"
                      />
                      <span className="flex-1 text-sm text-slate-600">{category.label}</span>
                      <span className="text-sm font-semibold tabular-nums">{formatEuro(value)}</span>
                      <span className="w-9 text-right text-xs tabular-nums text-slate-400">{percent}%</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
