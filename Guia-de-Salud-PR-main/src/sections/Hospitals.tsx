import { useState } from 'react'
import { useT, bi } from '@/lib/i18n'
import {
  VERIFIED_LABEL,
  heartAttackFacilities,
  strokeFacilities,
  cathLabMore,
  centroMedico,
  regionGroups,
} from '@/data/content'
import type { EmergencyFacility, DirectoryHospital } from '@/data/content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  MapPin,
  Phone,
  HeartPulse,
  Brain,
  Siren,
  CheckCircle2,
  Info,
  ExternalLink,
  Building2,
  Clock,
} from 'lucide-react'

const mapsUrl = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`

const telHref = (phone: string) => `tel:${phone.replace(/[^\d]/g, '')}`

function EmergencyCard({ f }: { f: EmergencyFacility }) {
  const t = useT()
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2.5">
      <div className="flex items-start justify-between gap-2">
        <p className="font-semibold text-slate-900 leading-snug">{f.name}</p>
        <Badge variant="secondary" className="shrink-0 font-normal">
          {t(f.town)}
        </Badge>
      </div>
      <ul className="space-y-1.5">
        {f.capabilities.map((c, i) => (
          <li key={i} className="flex gap-2 text-sm text-slate-600 leading-snug">
            <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-teal-600" />
            <span>{t(c)}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between gap-2 pt-1">
        {f.phone ? (
          <a
            href={telHref(f.phone)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 hover:underline"
          >
            <Phone className="h-4 w-4" />
            {f.phone}
          </a>
        ) : (
          <span />
        )}
        <span className="text-xs text-slate-400 whitespace-nowrap">{t(VERIFIED_LABEL)}</span>
      </div>
    </div>
  )
}

function HospitalCard({ h }: { h: DirectoryHospital }) {
  const t = useT()
  const mapTarget = h.address ?? `${h.town.es}, Puerto Rico`
  return (
    <Card>
      <CardHeader className="pb-2 space-y-2">
        <CardTitle className="text-base leading-snug">{h.name}</CardTitle>
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="secondary" className="font-normal">
            <MapPin />
            {t(h.town)}
          </Badge>
          {h.er24 && (
            <Badge className="font-normal bg-teal-600 text-white hover:bg-teal-600">
              <Clock />
              {t(bi('Emergencias 24/7', '24/7 ER'))}
            </Badge>
          )}
          <Badge variant="outline" className="font-normal">
            {h.publicHosp ? t(bi('Público', 'Public')) : t(bi('Privado', 'Private'))}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2.5 text-sm">
        <ul className="space-y-1.5">
          {h.services.map((s, i) => (
            <li key={i} className="flex gap-2 text-slate-600 leading-snug">
              <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-teal-600" />
              <span>{t(s)}</span>
            </li>
          ))}
        </ul>
        {h.note && <p className="text-[13px] text-slate-500 leading-relaxed">{t(h.note)}</p>}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1">
          {h.phone && (
            <a
              href={telHref(h.phone)}
              className="inline-flex items-center gap-1.5 font-medium text-teal-700 hover:underline"
            >
              <Phone className="h-4 w-4" />
              {h.phone}
            </a>
          )}
          <a
            href={mapsUrl(mapTarget)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-teal-700 hover:underline"
          >
            <ExternalLink className="h-4 w-4" />
            {t(bi('Ver en el mapa', 'View on map'))}
          </a>
        </div>
        <p className="text-xs text-slate-400">{t(VERIFIED_LABEL)}</p>
      </CardContent>
    </Card>
  )
}

export default function Hospitals() {
  const t = useT()
  const [region, setRegion] = useState('all')
  const visibleGroups = regionGroups.filter((r) => region === 'all' || r.region.es === region)

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h2 className="text-2xl font-bold text-slate-900">
          {t(bi('Hospitales y emergencias en Puerto Rico', 'Hospitals & emergencies in Puerto Rico'))}
        </h2>
        <p className="text-slate-600 leading-relaxed">
          {t(bi(
            'Directorio de hospitales activos, verificado en octubre de 2026: qué ofrece cada uno, si tiene sala de emergencias 24/7, teléfono y dirección. No es un ranking — en una emergencia, la mejor opción es la más cercana y el 9-1-1.',
            'A directory of active hospitals, verified October 2026: what each offers, whether it has a 24/7 ER, phone and address. Not a ranking — in an emergency, the best option is the closest one, and 9-1-1.'
          ))}
        </p>
      </header>

      <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
        <Siren className="h-6 w-6 shrink-0 text-red-600" />
        <p className="text-sm text-red-900 leading-relaxed">
          <strong>
            {t(bi('¿Emergencia que amenaza la vida? Llama al 9-1-1 primero. ', 'Life-threatening emergency? Call 9-1-1 first. '))}
          </strong>
          {t(bi(
            'No te transportes a ti mismo(a) si los síntomas son graves: la ambulancia empieza el tratamiento en camino y te lleva al hospital correcto.',
            'Don’t drive yourself if symptoms are severe: the ambulance starts treatment on the way and takes you to the right hospital.'
          ))}
        </p>
      </div>

      {/* 1. Heart attack & stroke quick reference */}
      <section className="rounded-2xl border border-red-200 bg-red-50/50 p-4 sm:p-6 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-red-900 flex items-center gap-2">
            <HeartPulse className="h-5 w-5 shrink-0" />
            {t(bi('Infarto al corazón: hospitales con sala de cateterismo 24/7', 'Heart attack: hospitals with a 24/7 cath lab'))}
          </h3>
          <p className="mt-1.5 text-sm text-red-900/80 leading-relaxed">
            {t(bi(
              'En un infarto, cada minuto cuenta — el tiempo es corazón. La angioplastia debe hacerse lo antes posible, y estos hospitales pueden abrirte la arteria a cualquier hora, todos los días. Si ninguno está cerca, ve a la sala de emergencias más cercana: el equipo te estabilizará y te trasladará.',
              'In a heart attack, every minute counts — time is heart. Angioplasty must be done as soon as possible, and these hospitals can open your artery at any hour, every day. If none is nearby, go to the nearest ER: the team will stabilize you and transfer you.'
            ))}
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {heartAttackFacilities.map((f) => (
              <EmergencyCard key={f.name} f={f} />
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500 leading-relaxed">
            {t(cathLabMore)}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-red-900 flex items-center gap-2">
            <Brain className="h-5 w-5 shrink-0" />
            {t(bi('Derrame cerebral (stroke): centros certificados', 'Stroke: certified centers'))}
          </h3>
          <p className="mt-1.5 text-sm text-red-900/80 leading-relaxed">
            {t(bi(
              'Con un derrame, el tiempo es cerebro: el tratamiento funciona mejor dentro de las primeras horas. Estos hospitales tienen programas de stroke certificados o tratamiento neuroendovascular 24/7.',
              'With a stroke, time is brain: treatment works best within the first hours. These hospitals have certified stroke programs or 24/7 neuroendovascular treatment.'
            ))}
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {strokeFacilities.map((f) => (
              <EmergencyCard key={f.name} f={f} />
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500 leading-relaxed">
            {t(bi(
              'En el oeste de la isla no hay un centro de stroke certificado por ahora; el 9-1-1 te llevará al centro con tratamiento disponible más cercano.',
              'There is no certified stroke center in the west of the island for now; 9-1-1 will take you to the closest center with treatment available.'
            ))}
          </p>
        </div>
      </section>

      {/* 2. Centro Médico spotlight */}
      <section className="rounded-2xl border border-teal-200 bg-teal-50/50 p-4 sm:p-6 space-y-4">
        <h3 className="text-xl font-bold text-teal-900 flex items-center gap-2">
          <Building2 className="h-5 w-5 shrink-0" />
          {t(bi('Centro Médico de Puerto Rico (Río Piedras): un campus, muchos hospitales', 'Centro Médico de Puerto Rico (Río Piedras): one campus, many hospitals'))}
        </h3>
        <p className="text-sm text-teal-900/80 leading-relaxed">
          {t(bi(
            'El Centro Médico no es un solo hospital: es el campus de salud pública principal de Puerto Rico, en Río Piedras, San Juan. Varios hospitales especializados comparten el mismo terreno y una sola sala de emergencias, abierta 24/7 — la única de la isla preparada para politraumatismos. Si una ambulancia te lleva “al Centro Médico”, casi siempre entra por esa sala de emergencias.',
            'The Centro Médico is not a single hospital: it is Puerto Rico’s main public health campus, in Río Piedras, San Juan. Several specialized hospitals share the same grounds and one ER, open 24/7 — the only one on the island equipped for polytrauma. If an ambulance takes you “to the Centro Médico”, you will almost always enter through that ER.'
          ))}
        </p>
        <ul className="space-y-2.5">
          {centroMedico.institutions.map((inst) => (
            <li key={inst.name} className="flex gap-2.5 text-sm leading-relaxed">
              <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-teal-700" />
              <span>
                <strong className="text-slate-900">{inst.name}</strong>
                {' — '}
                <span className="text-slate-600">{t(inst.knownFor)}</span>
              </span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1 text-sm">
          <a
            href={telHref(centroMedico.phone)}
            className="inline-flex items-center gap-1.5 font-medium text-teal-700 hover:underline"
          >
            <Phone className="h-4 w-4" />
            {t(bi('Emergencias del campus: ', 'Campus ER: '))}
            {centroMedico.phone}
          </a>
          <a
            href={mapsUrl(centroMedico.address)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-teal-700 hover:underline"
          >
            <ExternalLink className="h-4 w-4" />
            {t(bi('Ver en el mapa', 'View on map'))}
          </a>
          <span className="text-xs text-slate-400">{t(VERIFIED_LABEL)}</span>
        </div>
      </section>

      {/* 3. Directory by region */}
      <section className="space-y-5">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-900">
            {t(bi('Directorio de hospitales por región', 'Hospital directory by region'))}
          </h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setRegion('all')}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                region === 'all'
                  ? 'border-teal-600 bg-teal-600 text-white'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-teal-300 hover:text-teal-700'
              }`}
            >
              {t(bi('Todas las regiones', 'All regions'))}
            </button>
            {regionGroups.map((r) => {
              const selected = r.region.es === region
              return (
                <button
                  key={r.region.es}
                  onClick={() => setRegion(r.region.es)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    selected
                      ? 'border-teal-600 bg-teal-600 text-white'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-teal-300 hover:text-teal-700'
                  }`}
                >
                  {t(r.region)}
                </button>
              )
            })}
          </div>
        </div>

        {visibleGroups.map((g) => (
          <div key={g.region.es} className="space-y-3">
            <h4 className="text-lg font-semibold text-slate-900">{t(g.region)}</h4>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {g.hospitals.map((h) => (
                <HospitalCard key={h.name} h={h} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <Info className="h-5 w-5 shrink-0 mt-0.5" />
        <p>
          {t(bi(
            'Antes de una visita planificada, verifica que el hospital y el especialista participen en tu plan médico (Plan Vital o privado) y si necesitas referido o pre-autorización. La información de servicios proviene de fuentes públicas y puede cambiar.',
            'Before a planned visit, verify that the hospital and specialist participate in your health plan (Plan Vital or private) and whether you need a referral or pre-authorization. Service information comes from public sources and may change.'
          ))}
        </p>
      </div>
    </div>
  )
}
