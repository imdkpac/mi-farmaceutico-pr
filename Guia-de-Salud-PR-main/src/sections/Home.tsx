import { useT } from '@/lib/i18n'
import { bi } from '@/lib/i18n'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, Hospital, Pill, Wallet, ClipboardCheck, ArrowRight, Phone, Stethoscope, Home as HomeIcon, Activity } from 'lucide-react'
import type { SectionId } from '@/App'

const cards: {
  id: SectionId
  icon: typeof BookOpen
  title: { es: string; en: string }
  desc: { es: string; en: string }
}[] = [
  {
    id: 'guias',
    icon: BookOpen,
    title: bi('Guías del sistema de salud', 'Health system guides'),
    desc: bi(
      'Plan Vital, referidos, copagos, Medicare y cuándo ir a emergencia vs. urgencia.',
      'Plan Vital, referrals, copays, Medicare, and when to choose ER vs. urgent care.'
    ),
  },
  {
    id: 'hospitales',
    icon: Hospital,
    title: bi('Hospitales por especialidad', 'Hospitals by specialty'),
    desc: bi(
      'Dónde buscar cuidado de corazón, cáncer, neurología, pulmón, pediatría y trauma en PR.',
      'Where to find heart, cancer, neuro, lung, pediatric and trauma care in PR.'
    ),
  },
  {
    id: 'hogares',
    icon: HomeIcon,
    title: bi('Hogares de ancianos', 'Nursing homes'),
    desc: bi(
      'Los 9 hogares certificados de PR, quién es quién dentro de un hogar y qué hacer si no hay plaza.',
      'PR’s 9 certified nursing homes, who’s who inside a home, and what to do if there’s no bed.'
    ),
  },
  {
    id: 'medicamentos',
    icon: Pill,
    title: bi('Mi lista de medicamentos', 'My medication list'),
    desc: bi(
      'Crea, guarda e imprime tu lista de medicamentos y alergias para llevar a cada cita. También puedes añadir medicinas desde el Top 100.',
      'Create, save and print your medication and allergy list to bring to every visit. You can also add medicines from the Top 100.'
    ),
  },
  {
    id: 'top100',
    icon: Activity,
    title: bi('Top 100 enfermedades comunes', 'Top 100 common diseases'),
    desc: bi(
      '100 diagnósticos con sus tratamientos rankeados, signos de alarma y base de evidencia.',
      '100 diagnoses with ranked treatments, red flags, and evidence base.'
    ),
  },
  {
    id: 'costos',
    icon: Wallet,
    title: bi('Costos esperados', 'Expected costs'),
    desc: bi(
      'Rangos de referencia para citas, urgencias, hospitalización y dónde comparar precios.',
      'Reference ranges for visits, urgent care, hospital stays, and where to compare prices.'
    ),
  },
  {
    id: 'preparacion',
    icon: ClipboardCheck,
    title: bi('Prepárate para tu cita', 'Prepare for your visit'),
    desc: bi(
      'Listas de verificación interactivas para tu primera cita, especialista o procedimiento.',
      'Interactive checklists for your first visit, specialist or procedure.'
    ),
  },
  {
    id: 'servicios',
    icon: Stethoscope,
    title: bi('Servicios del farmacéutico', 'Pharmacist services'),
    desc: bi(
      'Revisión de medicamentos post-hospital: reconciliación completa y plan escrito de 14 días para tu familia.',
      'Post-hospital medication review: full reconciliation and a written 14-day plan for your family.'
    ),
  },
]

export default function Home({ go }: { go: (id: SectionId) => void }) {
  const t = useT()
  return (
    <div className="space-y-10">
      <section className="text-center space-y-4 pt-6">
        <span className="inline-block rounded-full bg-teal-100 text-teal-800 px-4 py-1 text-sm font-medium">
          {t(bi('Recursos gratuitos para pacientes', 'Free resources for patients'))}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          {t(bi('Navega el sistema de salud de Puerto Rico con confianza', 'Navigate Puerto Rico’s health system with confidence'))}
        </h1>
        <p className="max-w-2xl mx-auto text-slate-600 text-lg">
          {t(bi(
            'Guías claras, herramientas prácticas e información verificada — sin registros, sin costo.',
            'Clear guides, practical tools and verified information — no sign-ups, no cost.'
          ))}
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Button
            size="lg"
            className="gap-2 bg-teal-600 hover:bg-teal-700"
            onClick={() => go('medicamentos')}
          >
            <Pill className="h-5 w-5" />
            {t(bi('Crear mi lista de medicamentos', 'Create my medication list'))}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2"
            onClick={() => go('top100')}
          >
            <Activity className="h-5 w-5" />
            {t(bi('Buscar en el Top 100', 'Search the Top 100'))}
          </Button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Featured story — stencil design language */}
        <button
          onClick={() => go('sequia')}
          className="group relative overflow-hidden rounded-2xl text-left text-white sm:col-span-2 lg:col-span-3 transition hover:shadow-xl"
          style={{
            backgroundImage: `linear-gradient(100deg, rgba(7,11,11,0.95) 45%, rgba(7,11,11,0.55)), url(/images/sequia.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="bg-grid absolute inset-0 opacity-50" />
          <span className="absolute top-5 left-5 h-8 w-8 border-t-2 border-l-2 border-[#14A085] opacity-60" />
          <span className="absolute bottom-5 right-5 h-8 w-8 border-b-2 border-r-2 border-[#14A085] opacity-60" />
          <div className="relative p-8 sm:p-10 flex flex-col gap-4 min-h-[240px] justify-center">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded border border-[#D4AF37] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                {t(bi('Historia del mes', 'Story of the month'))}
              </span>
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#14A085]">
                <span className="h-2 w-2 rounded-full bg-[#14A085]" />
                Mi Farmacéutico en PR
              </span>
            </div>
            <h3 className="font-display text-5xl sm:text-6xl leading-[0.9] tracking-tight">
              {t(bi('Sequía y racionamiento:', 'Drought & water rationing:'))}
              <br />
              <span className="text-[#14A085]">{t(bi('cuando el agua se va.', 'when the water runs out.'))}</span>
            </h3>
            <p className="max-w-xl text-slate-300 leading-relaxed">
              {t(bi(
                'Guía práctica: medicamentos que se vuelven peligrosos, cuidado del adulto mayor y una reserva de agua segura de 7–14 días.',
                'A practical guide: medications that turn dangerous, older-adult care, and a safe 7–14 day water reserve.'
              ))}
            </p>
            <span className="inline-flex items-center gap-2 font-semibold text-[#D4AF37]">
              {t(bi('Leer la guía', 'Read the guide'))}
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1.5" />
            </span>
          </div>
        </button>
        {cards.map(({ id, icon: Icon, title, desc }) => (
          <Card
            key={id}
            className="group cursor-pointer transition hover:shadow-md hover:border-teal-300"
            onClick={() => go(id)}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="rounded-lg bg-teal-50 p-2.5 text-teal-700 group-hover:bg-teal-100">
                  <Icon className="h-6 w-6" />
                </div>
                <ArrowRight className="h-5 w-5 text-slate-300 transition group-hover:text-teal-600 group-hover:translate-x-1" />
              </div>
              <CardTitle className="text-lg">{t(title)}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">{t(desc)}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section className="rounded-xl border border-red-200 bg-red-50 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="rounded-full bg-red-100 p-3 text-red-700">
          <Phone className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-red-900">
            {t(bi('¿Emergencia que amenaza tu vida? Llama al 9-1-1.', 'Life-threatening emergency? Call 9-1-1.'))}
          </p>
          <p className="text-sm text-red-800">
            {t(bi(
              'Para crisis de salud mental, la Línea PAS está disponible 24/7 al 1-888-672-7622.',
              'For mental health crises, Línea PAS is available 24/7 at 1-888-672-7622.'
            ))}
          </p>
        </div>
        <Button variant="destructive" asChild>
          <a href="tel:911">{t(bi('Llamar 9-1-1', 'Call 9-1-1'))}</a>
        </Button>
      </section>
    </div>
  )
}
