import { AddMaintenanceSection } from '@/components/movant/add-maintenance-section'
import { CtaSection } from '@/components/movant/cta-section'
import { ExpensesSection } from '@/components/movant/expenses-section'
import { Hero } from '@/components/movant/hero'
import { MaintenanceSection } from '@/components/movant/maintenance-section'
import { Navbar } from '@/components/movant/navbar'
import { VehiclesSection } from '@/components/movant/vehicles-section'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <VehiclesSection />
        <MaintenanceSection />
        <AddMaintenanceSection />
        <ExpensesSection />
        <CtaSection />
      </main>
    </>
  )
}
