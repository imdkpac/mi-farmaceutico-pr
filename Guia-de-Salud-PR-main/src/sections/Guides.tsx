import { useT, bi } from '@/lib/i18n'
import { guides } from '@/data/content'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ExternalLink, CheckCircle2 } from 'lucide-react'

export default function Guides() {
  const t = useT()
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-2xl font-bold text-slate-900">
          {t(bi('Guías para navegar el sistema de salud de PR', 'Guides to navigate PR’s health system'))}
        </h2>
        <p className="text-slate-600">
          {t(bi(
            'Información general verificada con fuentes oficiales. Los detalles de tu plan pueden variar — confirma con tu aseguradora.',
            'General information verified against official sources. Your plan’s details may vary — confirm with your insurer.'
          ))}
        </p>
      </header>

      <Accordion type="multiple" className="space-y-3">
        {guides.map((g) => (
          <AccordionItem key={g.id} value={g.id} className="rounded-xl border bg-white px-5">
            <AccordionTrigger className="text-left hover:no-underline">
              <div>
                <p className="font-semibold text-slate-900">{t(g.title)}</p>
                <p className="text-sm text-slate-500 font-normal">{t(g.summary)}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-3 pb-2">
                {g.points.map((p, i) => (
                  <li key={i} className="flex gap-3 text-slate-700 leading-relaxed">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-600 mt-0.5" />
                    <span>{t(p)}</span>
                  </li>
                ))}
              </ul>
              {g.links && (
                <div className="flex flex-wrap gap-3 pt-1 pb-2">
                  {g.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 hover:text-teal-900 underline underline-offset-4"
                    >
                      {t(l.label)}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
