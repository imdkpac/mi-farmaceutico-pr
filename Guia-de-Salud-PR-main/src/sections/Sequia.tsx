import { useT, bi } from '@/lib/i18n'
import { sequia as s } from '@/data/sequia'
import { Card, CardContent } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Pill, Droplets, Users, Home as HomeIcon, AlertTriangle, Bug, CheckCircle2, Phone } from 'lucide-react'

function Stat({ figure, label }: { figure: string; label: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
      <p className="font-display text-3xl tracking-wide text-[#D4AF37]">{figure}</p>
      <p className="mt-2 text-sm text-slate-300 leading-relaxed">{label}</p>
    </div>
  )
}

export default function Sequia() {
  const t = useT()
  return (
    <div className="space-y-10">
      {/* Dark stencil-style hero */}
      <section
        className="relative overflow-hidden rounded-2xl text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(7,11,11,0.88), rgba(7,11,11,0.92)), url(/images/sequia.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="relative p-8 sm:p-12 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.2em] text-[#14A085]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#14A085]" />
              Mi Farmacéutico en PR
            </span>
            <span className="rounded border border-[#D4AF37] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[#D4AF37]">
              CDC · OMS
            </span>
          </div>
          <div>
            <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              {t(s.eyebrow)}
              <span className="h-0.5 w-12 bg-[#D4AF37]" />
            </p>
            <h2 className="font-display mt-4 text-5xl sm:text-7xl leading-[0.9] tracking-tight">
              {t(s.headline)}
            </h2>
          </div>
          <p className="max-w-2xl text-lg text-slate-300 leading-relaxed">{t(s.sub)}</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {s.stats.map((st, i) => (
              <Stat key={i} figure={typeof st.figure === 'string' ? st.figure : t(st.figure)} label={t(st.label)} />
            ))}
          </div>
        </div>
      </section>

      <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">{t(s.why)}</p>

      {/* Medications */}
      <section className="space-y-4">
        <h3 className="flex items-center gap-2.5 text-xl font-semibold text-slate-900">
          <Pill className="h-6 w-6 text-teal-600" />
          {t(s.medsHeading)}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {s.meds.map((m) => (
            <Card key={m.name.es} className="border-l-4 border-l-teal-600">
              <CardContent className="pt-5 space-y-1.5">
                <p className="font-semibold text-slate-900">{t(m.name)}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{t(m.body)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
          <p>{t(s.sickDayRule)}</p>
        </div>
      </section>

      {/* Water as treatment + dialysis */}
      <section className="space-y-4">
        <h3 className="flex items-center gap-2.5 text-xl font-semibold text-slate-900">
          <Droplets className="h-6 w-6 text-teal-600" />
          {t(s.waterHeading)}
        </h3>
        <div className="grid gap-4 lg:grid-cols-3">
          {s.waterPoints.map((p) => (
            <Card key={p.title.es}>
              <CardContent className="pt-5 space-y-1.5">
                <p className="font-semibold text-slate-900">{t(p.title)}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{t(p.body)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="rounded-xl bg-teal-700 text-white p-6 space-y-2">
          <p className="font-bold text-lg">{t(s.dialysis.title)}</p>
          <p className="text-teal-100 leading-relaxed">{t(s.dialysis.body)}</p>
          <p className="font-medium text-white">{t(s.dialysis.ask)}</p>
        </div>
      </section>

      {/* Older adults */}
      <section className="space-y-4">
        <h3 className="flex items-center gap-2.5 text-xl font-semibold text-slate-900">
          <Users className="h-6 w-6 text-teal-600" />
          {t(s.elderlyHeading)}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {s.elderlyPoints.map((p) => (
            <Card key={p.title.es}>
              <CardContent className="pt-5 space-y-1.5">
                <p className="font-semibold text-slate-900">{t(p.title)}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{t(p.body)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-900">
          <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
          <p>{t(s.elderlyAlert)}</p>
        </div>
      </section>

      {/* Home prep */}
      <section className="space-y-4">
        <h3 className="flex items-center gap-2.5 text-xl font-semibold text-slate-900">
          <HomeIcon className="h-6 w-6 text-teal-600" />
          {t(s.prepHeading)}
        </h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {s.prepStats.map((st, i) => (
            <Card key={i} className="bg-slate-900 text-white border-slate-800">
              <CardContent className="pt-5 text-center space-y-2">
                <p className="font-display text-2xl tracking-wide text-teal-400">{st.figure}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{t(st.label)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {s.prepPoints.map((p) => (
            <Card key={p.title.es}>
              <CardContent className="pt-5 space-y-1.5">
                <p className="font-semibold text-slate-900">{t(p.title)}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{t(p.body)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex gap-3 rounded-xl border border-teal-200 bg-teal-50 p-4 text-sm text-teal-900">
          <Bug className="h-5 w-5 shrink-0 mt-0.5" />
          <p>{t(s.dengue)}</p>
        </div>
      </section>

      {/* Living alone + ORS */}
      <section className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-6 space-y-4">
            <p className="font-semibold text-lg text-slate-900">{t(s.aloneHeading)}</p>
            <ul className="space-y-3">
              {s.aloneItems.map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-700 leading-relaxed text-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-600 mt-0.5" />
                  {t(item)}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="border-teal-200 bg-teal-50/50">
          <CardContent className="pt-6 space-y-4">
            <p className="font-semibold text-lg text-teal-900">{t(s.ors.title)}</p>
            <div className="flex flex-wrap gap-2">
              {s.ors.parts.map((p, i) => (
                <span key={i} className="rounded-lg bg-white border border-teal-200 px-3 py-2 text-sm font-semibold text-teal-800">
                  {i > 0 && '+ '}{t(p)}
                </span>
              ))}
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{t(s.ors.body)}</p>
          </CardContent>
        </Card>
      </section>

      {/* Red flags + essentials */}
      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl bg-red-600 text-white p-6 space-y-4">
          <p className="font-bold text-lg flex items-center gap-2">
            <Phone className="h-5 w-5" />
            {t(s.redFlagsHeading)}
          </p>
          <ul className="space-y-2.5">
            {s.redFlags.map((f, i) => (
              <li key={i} className="flex gap-2.5 leading-relaxed">
                <span className="font-bold">▸</span>
                {t(f)}
              </li>
            ))}
          </ul>
        </div>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <p className="font-semibold text-lg text-slate-900">{t(s.essentialsHeading)}</p>
            <ul className="space-y-3">
              {s.essentials.map((e, i) => (
                <li key={i} className="flex gap-3 text-slate-700 leading-relaxed">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-600 mt-0.5" />
                  {t(e)}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <Accordion type="single" collapsible>
        <AccordionItem value="credit" className="rounded-xl border bg-white px-5">
          <AccordionTrigger className="text-sm text-slate-500 hover:no-underline">
            {t(bi('Fuente y aviso', 'Source and disclaimer'))}
          </AccordionTrigger>
          <AccordionContent className="text-sm text-slate-500">{t(s.credit)}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
