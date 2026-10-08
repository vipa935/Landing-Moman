'use client'

import { useState, type FormEvent } from 'react'
import { Camera, Check, Clock, Sparkles } from 'lucide-react'
import { maintenanceTypes, vehicleTypes, type VehicleType } from '@/lib/movant-data'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const highlights = [
  { icon: Clock, text: 'Registra un mantenimiento en menos de 30 segundos' },
  { icon: Camera, text: 'Adjunta la foto de la factura o el ticket' },
  { icon: Sparkles, text: 'Moman calcula automáticamente el próximo aviso' },
]

const inputClass =
  'w-full rounded-xl border border-input bg-secondary px-4 py-3 text-sm text-card-foreground placeholder:text-slate-400 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/15'

const labelClass = 'text-xs font-semibold text-slate-600'

export function AddMaintenanceSection() {
  const [vehicleType, setVehicleType] = useState<VehicleType>('coche')
  const [saved, setSaved] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSaved(true)
    window.setTimeout(() => setSaved(false), 2500)
  }

  return (
    <section id="anadir" className="relative scroll-mt-16 py-24 md:py-32" aria-labelledby="anadir-title">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1" delay={100}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-card p-6 text-card-foreground shadow-[0_30px_80px_-30px_rgba(0,168,255,0.45)] md:p-8"
            aria-label="Formulario de ejemplo para añadir un mantenimiento"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">Nuevo mantenimiento</h3>
              <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-accent-foreground">
                Demo
              </span>
            </div>

            <fieldset className="mt-6">
              <legend className={labelClass}>Tipo de vehículo</legend>
              <div className="mt-2 grid grid-cols-5 gap-2">
                {vehicleTypes.map(({ id, label, icon: Icon }) => {
                  const active = vehicleType === id
                  return (
                    <label
                      key={id}
                      className={cn(
                        'flex cursor-pointer flex-col items-center gap-1.5 rounded-xl border px-1 py-3 text-center transition-all duration-200 has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-primary/25',
                        active
                          ? 'border-primary bg-primary text-primary-foreground shadow-[0_8px_20px_-8px_rgba(0,168,255,0.8)]'
                          : 'border-input bg-secondary text-slate-600 hover:border-primary/50 hover:text-card-foreground',
                      )}
                    >
                      <input
                        type="radio"
                        name="vehicleType"
                        value={id}
                        checked={active}
                        onChange={() => setVehicleType(id)}
                        className="sr-only"
                      />
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                      <span className="text-[10px] font-semibold leading-none sm:text-[11px]">{label}</span>
                    </label>
                  )
                })}
              </div>
            </fieldset>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="maintenance-type" className={labelClass}>
                  Tipo de mantenimiento
                </label>
                <select id="maintenance-type" name="maintenanceType" className={inputClass} defaultValue={maintenanceTypes[0]}>
                  {maintenanceTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="maintenance-date" className={labelClass}>
                  Fecha
                </label>
                <input id="maintenance-date" name="date" type="date" defaultValue="2026-10-08" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="maintenance-km" className={labelClass}>
                  Kilometraje
                </label>
                <input
                  id="maintenance-km"
                  name="km"
                  type="number"
                  inputMode="numeric"
                  min={0}
                  defaultValue={78450}
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="maintenance-cost" className={labelClass}>
                  Coste
                </label>
                <div className="relative">
                  <input
                    id="maintenance-cost"
                    name="cost"
                    type="number"
                    inputMode="decimal"
                    min={0}
                    step="0.01"
                    defaultValue={89.9}
                    className={cn(inputClass, 'pr-10')}
                  />
                  <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-sm font-semibold text-slate-400">
                    €
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="maintenance-notes" className={labelClass}>
                  Notas
                </label>
                <textarea
                  id="maintenance-notes"
                  name="notes"
                  rows={3}
                  placeholder="Aceite 5W-30 y filtro nuevo. Taller Martínez."
                  className={cn(inputClass, 'resize-none')}
                />
              </div>
            </div>

            <button
              type="submit"
              className={cn(
                'mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                saved
                  ? 'bg-emerald-500'
                  : 'bg-primary hover:bg-[#1E90FF] hover:shadow-[0_12px_30px_-10px_rgba(0,168,255,0.9)]',
              )}
            >
              {saved ? (
                <>
                  <Check className="size-4" aria-hidden="true" />
                  Guardado
                </>
              ) : (
                'Guardar'
              )}
            </button>
            <p className="sr-only" aria-live="polite">
              {saved ? 'Mantenimiento guardado' : ''}
            </p>
          </form>
        </Reveal>

        <div className="order-1 flex flex-col gap-10 lg:order-2">
          <SectionHeading
            titleId="anadir-title"
            eyebrow="Registro rápido"
            title="Añade mantenimientos fácilmente"
            description="Un formulario pensado para el día a día: elige el vehículo, el tipo de mantenimiento y listo. Sin papeles, sin olvidos."
          />
          <ul className="flex flex-col gap-4">
            {highlights.map(({ icon: Icon, text }, i) => (
              <Reveal as="li" key={text} delay={i * 100} className="flex items-center gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="text-sm text-foreground md:text-base">{text}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
