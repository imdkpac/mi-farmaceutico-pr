import { useState } from 'react'
import { useT, bi } from '@/lib/i18n'
import { checklistTemplates } from '@/data/content'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Progress } from '@/components/ui/progress'
import { Printer, RotateCcw } from 'lucide-react'

export default function Checklist() {
  const t = useT()
  const [templateId, setTemplateId] = useState(checklistTemplates[0].id)
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  const template = checklistTemplates.find((c) => c.id === templateId)!
  const done = template.items.filter((_, i) => checked[`${templateId}-${i}`]).length
  const pct = Math.round((done / template.items.length) * 100)

  return (
    <div className="space-y-6">
      <header className="space-y-2 no-print">
        <h2 className="text-2xl font-bold text-slate-900">
          {t(bi('Prepárate para tu cita', 'Prepare for your visit'))}
        </h2>
        <p className="text-slate-600">
          {t(bi(
            'Escoge el tipo de visita y marca lo que ya tienes listo. Imprime la lista si la prefieres en papel.',
            'Pick the visit type and check off what you have ready. Print the list if you prefer paper.'
          ))}
        </p>
      </header>

      <div className="flex flex-wrap gap-2 no-print">
        {checklistTemplates.map((c) => (
          <button
            key={c.id}
            onClick={() => setTemplateId(c.id)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              c.id === templateId
                ? 'border-teal-600 bg-teal-600 text-white'
                : 'border-slate-200 bg-white text-slate-700 hover:border-teal-300 hover:text-teal-700'
            }`}
          >
            {t(c.label)}
          </button>
        ))}
      </div>

      <Card className="no-print">
        <CardContent className="pt-6 space-y-5">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-slate-700">{t(template.label)}</span>
              <span className="text-slate-500">{done}/{template.items.length} · {pct}%</span>
            </div>
            <Progress value={pct} className="h-2" />
          </div>

          <ul className="space-y-3">
            {template.items.map((item, i) => {
              const key = `${templateId}-${i}`
              return (
                <li key={key} className="flex items-start gap-3">
                  <Checkbox
                    id={key}
                    checked={!!checked[key]}
                    onCheckedChange={(v) => setChecked((c) => ({ ...c, [key]: v === true }))}
                    className="mt-0.5"
                  />
                  <label
                    htmlFor={key}
                    className={`leading-relaxed cursor-pointer ${checked[key] ? 'text-slate-400 line-through' : 'text-slate-700'}`}
                  >
                    {t(item)}
                  </label>
                </li>
              )
            })}
          </ul>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button onClick={() => window.print()} variant="outline" className="gap-2">
              <Printer className="h-4 w-4" />
              {t(bi('Imprimir lista', 'Print list'))}
            </Button>
            <Button
              variant="ghost"
              className="gap-2"
              onClick={() =>
                setChecked((c) => {
                  const next = { ...c }
                  template.items.forEach((_, i) => delete next[`${templateId}-${i}`])
                  return next
                })
              }
            >
              <RotateCcw className="h-4 w-4" />
              {t(bi('Reiniciar', 'Reset'))}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Print-only view */}
      <div className="print-only hidden">
        <h1>{t(template.label)}</h1>
        <p>{t(bi('Lista de preparación para tu visita', 'Visit preparation checklist'))}</p>
        <ul>
          {template.items.map((item, i) => (
            <li key={i}>☐ {t(item)}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
