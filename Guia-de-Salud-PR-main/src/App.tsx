import { useState } from 'react'
import { LangProvider, useLang, useT, bi } from '@/lib/i18n'
import type { PrefillMed } from '@/lib/medList'
import Home from '@/sections/Home'
import Guides from '@/sections/Guides'
import Hospitals from '@/sections/Hospitals'
import NursingHomes from '@/sections/NursingHomes'
import MedList from '@/sections/MedList'
import Costs from '@/sections/Costs'
import Checklist from '@/sections/Checklist'
import Services from '@/sections/Services'
import Sequia from '@/sections/Sequia'
import Top100 from '@/sections/Top100'
import { Button } from '@/components/ui/button'
import { Languages, ArrowLeft } from 'lucide-react'

export type SectionId = 'inicio' | 'sequia' | 'top100' | 'guias' | 'hospitales' | 'hogares' | 'medicamentos' | 'costos' | 'preparacion' | 'servicios'

const navItems: { id: SectionId; label: { es: string; en: string } }[] = [
  { id: 'inicio', label: bi('Inicio', 'Home') },
  { id: 'sequia', label: bi('Sequía', 'Drought') },
  { id: 'top100', label: bi('Top 100', 'Top 100') },
  { id: 'guias', label: bi('Guías', 'Guides') },
  { id: 'hospitales', label: bi('Hospitales', 'Hospitals') },
  { id: 'hogares', label: bi('Hogares', 'Nursing homes') },
  { id: 'medicamentos', label: bi('Medicamentos', 'Medications') },
  { id: 'costos', label: bi('Costos', 'Costs') },
  { id: 'preparacion', label: bi('Tu cita', 'Your visit') },
  { id: 'servicios', label: bi('Servicios', 'Services') },
]

function Shell() {
  const [section, setSection] = useState<SectionId>('inicio')
  const [pendiente, setPendiente] = useState<PrefillMed | null>(null)
  const { lang, setLang } = useLang()
  const t = useT()

  const go = (id: SectionId) => {
    setSection(id)
    window.scrollTo({ top: 0 })
  }

  // "Añadir a mi lista" desde el Top 100: lleva al builder con la entrada sugerida.
  const addToList = (prefill: PrefillMed) => {
    setPendiente(prefill)
    go('medicamentos')
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur no-print">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
          <button onClick={() => go('inicio')} className="flex items-center gap-2 font-bold text-slate-900">
            <img src="/images/logo2sinbackground.png" alt="" className="h-8 w-8" />
            <span className="hidden sm:inline">{t(bi('Guía de Salud PR', 'PR Health Guide'))}</span>
          </button>
          <nav className="ml-auto hidden md:flex items-center gap-1">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
                  section === n.id ? 'bg-teal-50 text-teal-700' : 'text-slate-600 hover:text-teal-700'
                }`}
              >
                {t(n.label)}
              </button>
            ))}
          </nav>
          <Button
            variant="outline"
            size="sm"
            className="ml-auto md:ml-2 gap-1.5"
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          >
            <Languages className="h-4 w-4" />
            {lang === 'es' ? 'English' : 'Español'}
          </Button>
        </div>
        {/* Mobile nav */}
        <div className="md:hidden border-t overflow-x-auto">
          <div className="flex px-2">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className={`whitespace-nowrap px-3 py-2 text-sm font-medium border-b-2 transition ${
                  section === n.id
                    ? 'border-teal-600 text-teal-700'
                    : 'border-transparent text-slate-500'
                }`}
              >
                {t(n.label)}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        {section !== 'inicio' && (
          <button
            onClick={() => go('inicio')}
            className="no-print mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 hover:text-teal-900"
          >
            <ArrowLeft className="h-4 w-4" />
            {t(bi('Volver al inicio', 'Back to home'))}
          </button>
        )}
        {section === 'inicio' && <Home go={go} />}
        {section === 'guias' && <Guides />}
        {section === 'hospitales' && <Hospitals />}
        {section === 'hogares' && <NursingHomes />}
        {section === 'medicamentos' && (
          <MedList pendiente={pendiente} onPendienteConsumed={() => setPendiente(null)} />
        )}
        {section === 'costos' && <Costs />}
        {section === 'preparacion' && <Checklist />}
        {section === 'servicios' && <Services />}
        {section === 'sequia' && <Sequia />}
        {section === 'top100' && <Top100 onAddToList={addToList} />}
      </main>

      <footer className="border-t bg-white no-print">
        <div className="mx-auto max-w-6xl px-4 py-8 space-y-3 text-sm text-slate-500">
          <p className="font-medium text-slate-700">
            {t(bi('Aviso importante', 'Important notice'))}
          </p>
          <p className="leading-relaxed max-w-3xl">
            {t(bi(
              'Este recurso es educativo e informativo; no sustituye el consejo, diagnóstico o tratamiento médico profesional. La información sobre planes, aseguradoras y hospitales proviene de fuentes públicas y puede cambiar — verifica siempre con tu plan médico y proveedor. Información recopilada en agosto de 2026.',
              'This resource is educational and informational; it is not a substitute for professional medical advice, diagnosis or treatment. Information about plans, insurers and hospitals comes from public sources and may change — always verify with your health plan and provider. Information compiled August 2026.'
            ))}
          </p>
          <p>
            {t(bi('Emergencias: 9-1-1 · Línea PAS (salud mental, 24/7): 1-888-672-7622', 'Emergencies: 9-1-1 · Línea PAS (mental health, 24/7): 1-888-672-7622'))}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <LangProvider>
      <Shell />
    </LangProvider>
  )
}
