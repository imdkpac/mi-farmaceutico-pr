import { useT, bi } from '@/lib/i18n'
import { servicesContent as s, CALENDLY_URL, PHONE_DISPLAY, PHONE_HREF, EMAIL } from '@/data/services'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { CalendarCheck, Check, X, Mail, Phone, Clock, AlertTriangle } from 'lucide-react'

export default function Services() {
  const t = useT()
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="grid gap-8 lg:grid-cols-[1fr_320px] items-start">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <img src="/images/mfpr-logo.png" alt="" className="h-10 w-10" />
            <span className="rounded-full bg-teal-100 text-teal-800 px-4 py-1 text-sm font-medium">
              {s.brand} · {t(s.eyebrow)}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">{t(s.headline)}</h2>
          <p className="text-slate-600 text-lg leading-relaxed">{t(s.subhead)}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-2 bg-teal-600 hover:bg-teal-700">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                <CalendarCheck className="h-5 w-5" />
                {t(s.booking.cta)}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href={PHONE_HREF}>
                <Phone className="h-5 w-5" />
                {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
        </div>
        <Card className="overflow-hidden">
          <img
            src="/images/christian-portalatin.jpg"
            alt={t(s.pharmacist.photoAlt)}
            className="w-full aspect-square object-cover"
          />
          <CardContent className="pt-4 space-y-2">
            <p className="font-semibold text-slate-900">{s.pharmacist.name}</p>
            <p className="text-sm text-teal-700 font-medium">{t(s.pharmacist.credential)}</p>
            <p className="text-sm text-slate-600 leading-relaxed">{t(s.pharmacist.bio)}</p>
          </CardContent>
        </Card>
      </section>

      {/* What we do */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-900">{t(s.whatHeading)}</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {s.whatItems.map((item) => (
            <Card key={item.title.es}>
              <CardContent className="pt-5 space-y-1.5">
                <p className="font-semibold text-slate-900">{t(item.title)}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{t(item.body)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-900">{t(s.timelineHeading)}</h3>
        <ol className="relative border-l-2 border-teal-200 ml-2 space-y-6">
          {s.timeline.map((stop) => (
            <li key={stop.marker.es} className="pl-6 relative">
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-teal-600 border-2 border-white" />
              <p className="font-semibold text-teal-700">{t(stop.marker)}</p>
              <p className="text-slate-600 leading-relaxed">{t(stop.body)}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Pricing */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-900">{t(s.pricingHeading)}</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {s.plans.map((p) => (
            <Card key={p.name.es} className="border-teal-200">
              <CardContent className="pt-6 space-y-3">
                <div className="flex items-baseline justify-between">
                  <p className="text-lg font-semibold text-slate-900">{t(p.name)}</p>
                  <p className="text-3xl font-bold text-teal-700">{p.price}</p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{t(p.body)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-sm text-slate-500">{t(s.pricingNote)}</p>
      </section>

      {/* Scope */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-900">{t(s.scopeHeading)}</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="border-teal-200 bg-teal-50/50">
            <CardContent className="pt-5">
              <p className="font-semibold text-teal-800 mb-3">{t(s.scopeIs.title)}</p>
              <ul className="space-y-2.5">
                {s.scopeIs.items.map((i) => (
                  <li key={i.es} className="flex gap-2.5 text-sm text-slate-700">
                    <Check className="h-4 w-4 shrink-0 text-teal-600 mt-0.5" />
                    {t(i)}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-slate-200 bg-slate-50">
            <CardContent className="pt-5">
              <p className="font-semibold text-slate-700 mb-3">{t(s.scopeIsNot.title)}</p>
              <ul className="space-y-2.5">
                {s.scopeIsNot.items.map((i) => (
                  <li key={i.es} className="flex gap-2.5 text-sm text-slate-600">
                    <X className="h-4 w-4 shrink-0 text-slate-400 mt-0.5" />
                    {t(i)}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <p className="text-sm text-slate-500 italic">{t(s.scopeClosing)}</p>
      </section>

      {/* FAQ */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-900">{t(bi('Preguntas frecuentes', 'Common questions'))}</h3>
        <Accordion type="multiple" className="space-y-3">
          {s.faq.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border bg-white px-5">
              <AccordionTrigger className="text-left hover:no-underline font-medium text-slate-900">
                {t(f.q)}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">{t(f.a)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Booking CTA */}
      <section className="rounded-2xl bg-teal-700 text-white p-8 space-y-5 text-center">
        <h3 className="text-2xl font-bold">{t(s.booking.heading)}</h3>
        <p className="text-teal-100 max-w-xl mx-auto">{t(s.booking.sub)}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" variant="secondary" className="gap-2">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              <CalendarCheck className="h-5 w-5" />
              {t(s.booking.cta)}
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent text-white border-teal-300 hover:bg-teal-600 hover:text-white">
            <a href={PHONE_HREF}>
              <Phone className="h-5 w-5" />
              {PHONE_DISPLAY}
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent text-white border-teal-300 hover:bg-teal-600 hover:text-white">
            <a href={`mailto:${EMAIL}`}>
              <Mail className="h-5 w-5" />
              {EMAIL}
            </a>
          </Button>
        </div>
        <p className="flex items-center justify-center gap-2 text-sm text-teal-200">
          <Clock className="h-4 w-4" />
          {t(s.booking.hours)}
        </p>
        <p className="flex items-start justify-center gap-2 text-xs text-teal-200 max-w-lg mx-auto">
          <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
          {t(s.booking.emergency)}
        </p>
      </section>
    </div>
  )
}
