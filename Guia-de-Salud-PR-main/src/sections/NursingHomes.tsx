import { useT, bi } from '@/lib/i18n'
import {
  certifiedHomes,
  roles,
  tourChecklist,
  uncertifiedChecklist,
  noBedOptions,
} from '@/data/nursingHomes'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, BedDouble, Info, Check, ExternalLink, Users, ClipboardList, Home, AlertTriangle, Compass } from 'lucide-react'

export default function NursingHomes() {
  const t = useT()

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h2 className="text-2xl font-bold text-slate-900">
          {t(bi('Hogares de ancianos en Puerto Rico', 'Nursing homes in Puerto Rico'))}
        </h2>
        <p className="text-slate-600 max-w-3xl">
          {t(bi(
            'Puerto Rico tiene solo 9 hogares de enfermería certificados por Medicare — todos los que existen en la isla. La mayoría son pequeños y se enfocan en rehabilitación de corto plazo, no en residencia de largo plazo. Esta guía completa los lista a todos, explica quién es quién dentro de un hogar, y qué hacer si no encuentras plaza.',
            'Puerto Rico has only 9 Medicare-certified nursing homes — every one that exists on the island. Most are small and focus on short-term rehabilitation rather than long-term residence. This complete guide lists them all, explains who’s who inside a home, and what to do if you can’t find a bed.'
          ))}
        </p>
      </header>

      {/* 1. Certified directory */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
          <Home className="h-5 w-5 text-teal-700" />
          {t(bi('Los 9 hogares certificados por Medicare', 'The 9 Medicare-certified nursing homes'))}
        </h3>
        <p className="text-sm text-slate-600 max-w-3xl">
          {t(bi(
            'Todos aceptan Medicare y Medicaid. Las calificaciones de CMS tienden a ser más bajas en PR que en EE. UU. continental (promedio ~2.5 estrellas vs. ~3.4) — úsalas como punto de partida, no como veredicto. Revisa la inspección completa de cada hogar en Medicare Care Compare.',
            'All nine accept Medicare and Medicaid. CMS ratings in PR tend to be lower than on the mainland (average ~2.5 stars vs. ~3.4) — use them as a starting point, not a verdict. Review each home’s full inspection report on Medicare Care Compare.'
          ))}
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifiedHomes.map((h) => (
            <Card key={h.name}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base leading-snug">{h.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="flex items-center gap-2 text-slate-500">
                  <MapPin className="h-4 w-4 shrink-0" />
                  {t(h.town)}
                </p>
                <p className="flex items-center gap-2 text-slate-500">
                  <BedDouble className="h-4 w-4 shrink-0" />
                  {t(bi(`${h.beds} camas`, `${h.beds} beds`))}
                </p>
                <Badge variant="secondary" className="font-normal">{t(h.rehab)}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
        <a
          href="https://www.medicare.gov/care-compare/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 hover:underline"
        >
          {t(bi('Ver calificaciones e inspecciones en Medicare Care Compare', 'See ratings and inspections on Medicare Care Compare'))}
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </section>

      {/* 2. Who's who glossary */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
          <Users className="h-5 w-5 text-teal-700" />
          {t(bi('¿Quién es quién en un hogar de ancianos?', 'Who’s who in a nursing home?'))}
        </h3>
        <p className="text-sm text-slate-600 max-w-3xl">
          {t(bi(
            'Guía para familias e hijos adultos. Saber quién hace qué te ayuda a hacer las preguntas correctas y obtener respuestas más rápido. (Los títulos pueden variar según el hogar.)',
            'A guide for families and adult children. Knowing who does what helps you ask the right questions and get answers faster. (Titles may vary by facility.)'
          ))}
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {roles.map((r) => (
            <Card key={r.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base leading-snug">{t(r.role)}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="text-slate-600 leading-relaxed">{t(r.who)}</p>
                <p className="rounded-md bg-teal-50 px-3 py-2 text-teal-900 leading-relaxed">
                  <span className="font-medium">{t(bi('Habla con ellos sobre: ', 'Talk to them about: '))}</span>
                  {t(r.ask)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 3. Tour checklist */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
          <ClipboardList className="h-5 w-5 text-teal-700" />
          {t(bi('Qué preguntar en tu visita', 'What to ask on your tour'))}
        </h3>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-3">
              {tourChecklist.map((q) => (
                <li key={q.es} className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="h-4 w-4 shrink-0 mt-0.5 text-teal-700" />
                  {t(q)}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* 4. Non-certified hogares */}
      <section className="space-y-4">
        <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-medium">
              {t(bi('Sobre los hogares de envejecientes no certificados', 'About non-certified assisted living homes'))}
            </p>
            <p className="leading-relaxed">
              {t(bi(
                'La mayoría de los hogares de envejecientes en PR no están certificados por Medicare, así que no aparecen en las calificaciones federales ni en esta lista. Esto no significa que sean malos — pero significa que tú tienes que verificar todo personalmente. Usa esta lista de preguntas en cada visita.',
                'Most assisted living homes in PR are not Medicare-certified, so they don’t appear in federal ratings or in this list. That doesn’t make them bad — but it means you have to verify everything yourself. Use this question list on every visit.'
              ))}
            </p>
          </div>
        </div>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">
              {t(bi('Preguntas para hogares no certificados', 'Questions for non-certified homes'))}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {uncertifiedChecklist.map((q) => (
                <li key={q.es} className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="h-4 w-4 shrink-0 mt-0.5 text-teal-700" />
                  {t(q)}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* 5. What if there's no bed */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
          <Compass className="h-5 w-5 text-teal-700" />
          {t(bi('¿Y si no encuentras plaza?', 'What if there’s no bed?'))}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {noBedOptions.map((o) => (
            <Card key={o.title.es}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base leading-snug">{t(o.title)}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 leading-relaxed">{t(o.body)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="flex gap-3 rounded-xl border border-teal-200 bg-teal-50 p-4 text-sm text-teal-900">
        <Info className="h-5 w-5 shrink-0 mt-0.5" />
        <p>
          {t(bi(
            '¿Una queja o preocupación sobre un hogar? Contacta a la Oficina del Procurador de las Personas de Edad Avanzada (OPPEA), el ombudsman estatal de cuidado a largo plazo: (787) 721-6121. Datos recopilados de Medicare Care Compare y U.S. News, septiembre de 2026 — verifica siempre la información más reciente con el hogar.',
            'A complaint or concern about a home? Contact the Office of the Ombudsman for Elderly Persons (OPPEA), Puerto Rico’s state long-term care ombudsman: (787) 721-6121. Data compiled from Medicare Care Compare and U.S. News, September 2026 — always verify current information with the facility.'
          ))}
        </p>
      </div>
    </div>
  )
}
