import {
  Bike,
  CalendarCheck,
  Car,
  Caravan,
  ClipboardCheck,
  Droplet,
  Truck,
  Van,
  type LucideIcon,
} from 'lucide-react'

export type VehicleType = 'coche' | 'moto' | 'furgoneta' | 'camion' | 'autocaravana'

export const vehicleTypes: { id: VehicleType; label: string; icon: LucideIcon }[] = [
  { id: 'coche', label: 'Coche', icon: Car },
  { id: 'moto', label: 'Moto', icon: Bike },
  { id: 'furgoneta', label: 'Furgoneta', icon: Van },
  { id: 'camion', label: 'Camión', icon: Truck },
  { id: 'autocaravana', label: 'Autocaravana', icon: Caravan },
]

export const vehicles = [
  {
    name: 'Toyota Corolla',
    type: 'Coche',
    plate: '4821 KLM',
    km: '78.450 km',
    image: '/vehicles/toyota-corolla.png',
    status: 'Al día',
  },
  {
    name: 'Yamaha MT-07',
    type: 'Moto',
    plate: '1593 JHB',
    km: '21.300 km',
    image: '/vehicles/moto.png',
    status: 'Revisión pronto',
  },
  {
    name: 'Renault Trafic',
    type: 'Furgoneta',
    plate: '7364 LPR',
    km: '134.900 km',
    image: '/vehicles/furgoneta.png',
    status: 'Al día',
  },
  {
    name: 'Volvo FH 500',
    type: 'Camión',
    plate: '2205 MCD',
    km: '412.780 km',
    image: '/vehicles/camion.png',
    status: 'ITV en 12 días',
  },
  {
    name: 'Hymer B-Class',
    type: 'Autocaravana',
    plate: '9017 KTS',
    km: '56.120 km',
    image: '/vehicles/autocaravana.png',
    status: 'Al día',
  },
]

export const upcomingMaintenance: {
  title: string
  detail: string
  due: string
  icon: LucideIcon
  urgent?: boolean
}[] = [
  {
    title: 'Cambio de aceite',
    detail: 'A los 80.000 km',
    due: 'Faltan 1.550 km',
    icon: Droplet,
    urgent: true,
  },
  {
    title: 'Revisión anual',
    detail: '15 nov 2026',
    due: 'En 38 días',
    icon: ClipboardCheck,
  },
  {
    title: 'ITV',
    detail: '02 mar 2027',
    due: 'En 145 días',
    icon: CalendarCheck,
  },
]

export const monthlyExpenses = [
  { month: 'May', value: 120 },
  { month: 'Jun', value: 340 },
  { month: 'Jul', value: 180 },
  { month: 'Ago', value: 260 },
  { month: 'Sep', value: 90 },
  { month: 'Oct', value: 410 },
]

export const maintenanceTypes = [
  'Cambio de aceite',
  'Revisión anual',
  'ITV',
  'Neumáticos',
  'Frenos',
  'Batería',
  'Otro',
]

export type ExpensePeriod = 'mensual' | 'trimestral' | 'anual'

export const expenseCategories = [
  { id: 'mantenimiento', label: 'Mantenimiento', color: 'var(--chart-1)' },
  { id: 'combustible', label: 'Combustible', color: 'var(--chart-2)' },
  { id: 'seguros', label: 'Seguros', color: 'var(--chart-3)' },
  { id: 'itv', label: 'ITV', color: 'var(--chart-4)' },
  { id: 'documentacion', label: 'Documentación', color: 'var(--chart-5)' },
  { id: 'otros', label: 'Otros', color: 'var(--chart-6)' },
] as const

export const expensesByPeriod: Record<ExpensePeriod, Record<string, number>> = {
  mensual: {
    mantenimiento: 145,
    combustible: 210,
    seguros: 48,
    itv: 0,
    documentacion: 12,
    otros: 25,
  },
  trimestral: {
    mantenimiento: 420,
    combustible: 630,
    seguros: 144,
    itv: 45,
    documentacion: 30,
    otros: 68,
  },
  anual: {
    mantenimiento: 1380,
    combustible: 2460,
    seguros: 576,
    itv: 45,
    documentacion: 110,
    otros: 240,
  },
}

export const navLinks = [
  { href: '#vehiculos', label: 'Vehículos' },
  { href: '#mantenimiento', label: 'Mantenimiento' },
  { href: '#anadir', label: 'Añadir' },
  { href: '#gastos', label: 'Gastos' },
]
