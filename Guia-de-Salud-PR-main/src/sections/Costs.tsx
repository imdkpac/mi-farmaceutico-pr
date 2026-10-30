import { useT, bi } from '@/lib/i18n'
import { costRows, costLinks } from '@/data/content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ExternalLink, Info } from 'lucide-react'

export default function Costs() {
  const t = useT()
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h2 className="text-2xl font-bold text-slate-900">
          {t(bi('¿Cuánto puede costar?', 'How much might it cost?'))}
        </h2>
        <p className="text-slate-600">
          {t(bi(
            'Rangos de referencia aproximados en Puerto Rico. Tu costo real depende de tu plan, tu deducible y el proveedor — pide siempre un estimado por adelantado.',
            'Approximate reference ranges in Puerto Rico. Your real cost depends on your plan, deductible and provider — always ask for an estimate in advance.'
          ))}
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{t(bi('Rangos típicos de referencia', 'Typical reference ranges'))}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t(bi('Servicio', 'Service'))}</TableHead>
                <TableHead>{t(bi('Rango aproximado', 'Approximate range'))}</TableHead>
                <TableHead className="hidden sm:table-cell">{t(bi('Nota', 'Note'))}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {costRows.map((r) => (
                <TableRow key={r.service.es}>
                  <TableCell className="font-medium">{t(r.service)}</TableCell>
                  <TableCell className="whitespace-nowrap text-teal-700 font-semibold">{typeof r.range === 'string' ? r.range : t(r.range)}</TableCell>
                  <TableCell className="hidden sm:table-cell text-slate-500 text-sm">{t(r.note)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <section className="space-y-3">
        <h3 className="text-xl font-semibold text-slate-900">
          {t(bi('Dónde verificar precios reales', 'Where to check real prices'))}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {costLinks.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="block">
              <Card className="h-full transition hover:shadow-md hover:border-teal-300">
                <CardContent className="pt-5 space-y-1.5">
                  <p className="flex items-center gap-2 font-semibold text-teal-700">
                    {t(l.label)}
                    <ExternalLink className="h-4 w-4" />
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">{t(l.note)}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>

      <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <Info className="h-5 w-5 shrink-0 mt-0.5" />
        <p>
          {t(bi(
            'Bajo la regla federal de transparencia de precios y la ley “No Surprises Act”, puedes pedir un estimado de buena fe (Good Faith Estimate) antes de recibir servicios si no tienes seguro o pagas de tu bolsillo.',
            'Under the federal price transparency rule and the No Surprises Act, you can request a Good Faith Estimate before receiving services if you’re uninsured or paying out of pocket.'
          ))}
        </p>
      </div>
    </div>
  )
}
