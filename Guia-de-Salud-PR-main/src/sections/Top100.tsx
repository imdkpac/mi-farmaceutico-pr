import { useMemo, useState } from 'react'
import { useLang, useT, bi } from '@/lib/i18n'
import { DECK_TOP100_ES } from '@/data/baraja_top100_es'
import { DECK_TOP100 as DECK_TOP100_EN } from '@/data/baraja_top100_en'
import type { SlideData, Block } from '@/types/slide'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, AlertTriangle, BookOpen, CheckCircle2, Activity, ListFilter, Plus, ArrowDownAZ } from 'lucide-react'
import type { PrefillMed } from '@/lib/medList'
import { prefillDesdeTratamiento } from '@/lib/medList'

const strip = (s: string) =>
  s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

/** Renders *emphasis* markers used in the deck's alert/note strings. */
function Em({ text }: { text: string }) {
  const parts = text.split('*')
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i} className="font-semibold">{part}</strong> : <span key={i}>{part}</span>
      )}
    </>
  )
}

/** Etiqueta bilingüe para el botón de añadir a la lista personal. */
function AddToListLabel() {
  const t = useT()
  return <>{t(bi('Añadir a mi lista', 'Add to my list'))}</>
}

function BlockView({ block, onAddItem }: { block: Block; onAddItem?: (item: { title?: string; text?: string }) => void }) {
  switch (block.type) {
    case 'lead':
      return <p className="text-slate-600 leading-relaxed"><Em text={block.text ?? ''} /></p>
    case 'stats':
      return (
        <div className="grid gap-3 sm:grid-cols-3">
          {(block.items ?? []).map((item, i) => (
            <div key={i} className="rounded-lg bg-slate-50 border p-3 text-center">
              <p className="font-display text-2xl tracking-wide text-teal-700">{item.value}</p>
              <p className="mt-1 text-xs text-slate-500 leading-snug">{item.label}</p>
            </div>
          ))}
        </div>
      )
    case 'cards':
      return (
        <ol className="space-y-3">
          {(block.items ?? []).map((item, i) => (
            <li key={i} className="rounded-lg border-l-4 border-l-teal-600 bg-white p-3.5 space-y-2">
              <p className="font-semibold text-slate-900 text-sm leading-snug">{item.title}</p>
              {item.text && <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{item.text}</p>}
              {onAddItem && (
                <button
                  type="button"
                  onClick={() => onAddItem({ title: item.title, text: item.text })}
                  className="no-print inline-flex items-center gap-1.5 rounded-md border border-teal-200 bg-teal-50 px-2.5 py-1.5 text-xs font-semibold text-teal-700 transition hover:bg-teal-100"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <AddToListLabel />
                </button>
              )}
            </li>
          ))}
        </ol>
      )
    case 'checklist':
      return (
        <ul className="space-y-2">
          {(block.items ?? []).map((item, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-slate-700 leading-relaxed">
              <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-teal-600 mt-0.5" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      )
    case 'bars':
      return (
        <div className="space-y-3">
          {(block.items ?? []).map((item, i) => {
            const width = Number(item.value)
            return (
              <div key={i}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="font-medium text-slate-700">{item.label}</span>
                  <span className="font-bold text-teal-700">{item.text ?? item.value}</span>
                </div>
                <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-teal-600"
                    style={{ width: `${Number.isFinite(width) ? Math.min(100, Math.max(0, width)) : 0}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      )
    case 'flags':
      return (
        <ul className="space-y-2">
          {(block.items ?? []).map((item, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-red-800 leading-relaxed">
              <span className="font-bold">▸</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      )
    default:
      return (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 space-y-1">
          {block.title && <p className="font-semibold text-amber-900">{block.title}</p>}
          {block.text && <p className="text-sm text-amber-800 leading-relaxed"><Em text={block.text} /></p>}
        </div>
      )
  }
}

function ProfileCard({ slide, onAddToList }: { slide: SlideData; onAddToList?: (prefill: PrefillMed) => void }) {
  const t = useT()
  const title = `${slide.headlineA}${slide.headlineB ? ' ' + slide.headlineB : ''}`.trim()
  return (
    <Card className="flex flex-col">
      <CardContent className="pt-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-50">{slide.badge}</Badge>
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{slide.eyebrow}</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 leading-snug">{title}</h3>
        {slide.blocks.map((block) => (
          <BlockView
            key={block.id}
            block={block}
            onAddItem={onAddToList ? (item) => onAddToList(prefillDesdeTratamiento(title, item)) : undefined}
          />
        ))}
        {slide.alertText && (
          <div className="flex gap-3 rounded-lg border border-red-200 bg-red-50 p-3.5 text-sm text-red-900">
            <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold mb-0.5">
                {t(bi('Signos de alarma — cuándo derivar', 'Red flags — when to refer'))}
              </p>
              <p className="leading-relaxed"><Em text={slide.alertText} /></p>
            </div>
          </div>
        )}
        {slide.note && (
          <p className="flex gap-2 text-xs text-slate-500 leading-relaxed">
            <BookOpen className="h-4 w-4 shrink-0 mt-0.5" />
            <Em text={slide.note} />
          </p>
        )}
      </CardContent>
    </Card>
  )
}

export default function Top100({ onAddToList }: { onAddToList?: (prefill: PrefillMed) => void }) {
  const { lang } = useLang()
  const t = useT()
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState('all')
  const [orden, setOrden] = useState<'cat' | 'az'>('cat')

  const deck = lang === 'es' ? DECK_TOP100_ES : DECK_TOP100_EN

  // The ES deck ships one duplicated English-language slide (a second "d42");
  // dedupe by id, keep first occurrence, and skip cover/summary/dividers/closing.
  const profiles = useMemo(() => {
    const seen = new Set<string>()
    return deck.filter((s) => {
      if (s.badge === 'SECCIÓN' || s.id === 'cover' || s.id === 'summary' || s.id === 'closing') return false
      if (seen.has(s.id)) return false
      seen.add(s.id)
      return true
    })
  }, [deck])

  const categories = useMemo(() => [...new Set(profiles.map((p) => p.badge))], [profiles])

  const cover = deck.find((s) => s.id === 'cover')
  const summary = deck.find((s) => s.id === 'summary')
  const closing = deck.find((s) => s.id === 'closing')

  const q = strip(query.trim())
  const filtered = profiles.filter((p) => {
    if (cat !== 'all' && p.badge !== cat) return false
    if (!q) return true
    const haystack = [
      p.headlineA,
      p.headlineB,
      p.badge,
      ...p.blocks.flatMap((b) => [
        b.text ?? '',
        ...(b.items ?? []).map((i) => `${i.title ?? ''} ${i.text ?? ''} ${i.label ?? ''}`),
      ]),
    ].join(' ')
    return strip(haystack).includes(q)
  })

  if (orden === 'az') {
    filtered.sort((a, b) => strip(a.headlineA).localeCompare(strip(b.headlineA)))
  }

  return (
    <div className="space-y-8">
      {/* Hero from the deck's cover slide */}
      {cover && (
        <section className="relative overflow-hidden rounded-2xl bg-slate-900 text-white">
          <div className="bg-grid absolute inset-0 opacity-40" />
          <div className="relative p-8 sm:p-10 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-lg bg-teal-600 p-1.5 text-white">
                <Activity className="h-5 w-5" />
              </span>
              <span className="rounded border border-[#D4AF37] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                {cover.badge}
              </span>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#14A085]">{cover.eyebrow}</p>
              <h2 className="font-display mt-2 text-5xl sm:text-6xl leading-[0.9] tracking-tight">
                {cover.headlineA}
                {cover.headlineB && <><br /><span className="text-[#14A085]">{cover.headlineB}</span></>}
              </h2>
            </div>
            {cover.blocks.find((b) => b.type === 'lead')?.text && (
              <p className="max-w-2xl text-slate-300 leading-relaxed">
                {cover.blocks.find((b) => b.type === 'lead')!.text}
              </p>
            )}
            {cover.blocks.find((b) => b.type === 'stats') && (
              <div className="grid gap-4 sm:grid-cols-3">
                {(cover.blocks.find((b) => b.type === 'stats')!.items ?? []).map((item, i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
                    <p className="font-display text-3xl tracking-wide text-[#D4AF37]">{item.value}</p>
                    <p className="mt-1.5 text-sm text-slate-300 leading-snug">{item.label}</p>
                  </div>
                ))}
              </div>
            )}
            {cover.note && <p className="text-xs text-slate-400 leading-relaxed max-w-3xl">{cover.note}</p>}
          </div>
        </section>
      )}

      {/* Curability overview from the summary slide */}
      {summary && (
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-semibold text-lg text-slate-900">
                {summary.headlineA} {summary.headlineB}
              </p>
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{summary.eyebrow}</span>
            </div>
            {summary.blocks.map((block) => (
              <BlockView key={block.id} block={block} />
            ))}
            {summary.alertText && (
              <p className="rounded-lg border border-teal-200 bg-teal-50 p-3.5 text-sm text-teal-900 leading-relaxed">
                <Em text={summary.alertText} />
              </p>
            )}
            {summary.note && <p className="text-xs text-slate-500 leading-relaxed">{summary.note}</p>}
          </CardContent>
        </Card>
      )}

      {/* Search + category filter */}
      <div className="flex flex-col sm:flex-row gap-3 no-print">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t(bi('Buscar enfermedad, síntoma o tratamiento…', 'Search disease, symptom or treatment…'))}
            className="pl-9"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="sr-only">{t(bi('Filtrar por categoría', 'Filter by category'))}</span>
          <ListFilter className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
          <Select value={cat} onValueChange={setCat}>
            <SelectTrigger className="w-full sm:w-56" aria-label={t(bi('Filtrar por categoría', 'Filter by category'))}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t(bi('Todas las categorías', 'All categories'))}</SelectItem>
              {categories.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <span className="sr-only">{t(bi('Orden de la lista', 'List order'))}</span>
          <ArrowDownAZ className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
          <Select value={orden} onValueChange={(v) => setOrden(v as 'cat' | 'az')}>
            <SelectTrigger className="w-full sm:w-52" aria-label={t(bi('Orden de la lista', 'List order'))}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cat">{t(bi('Orden: por categoría', 'Order: by category'))}</SelectItem>
              <SelectItem value="az">{t(bi('Orden: A–Z', 'Order: A–Z'))}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <p className="text-sm text-slate-500">
        {t(bi('Mostrando ', 'Showing '))}
        <strong className="text-slate-700">{filtered.length}</strong>
        {' / '}
        {profiles.length}
        {t(bi(' perfiles clínicos', ' clinical profiles'))}
      </p>

      {/* Profiles */}
      {filtered.length > 0 ? (
        <div className="grid gap-4 lg:grid-cols-2 items-start">
          {filtered.map((slide, i) => (
            <ProfileCard key={`${slide.id}-${i}`} slide={slide} onAddToList={onAddToList} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed p-10 text-center text-slate-500">
          <p className="font-medium text-slate-700">
            {t(bi('Sin resultados para tu búsqueda.', 'No results for your search.'))}
          </p>
          <p className="text-sm mt-1">
            {t(bi('Prueba con otro término o cambia la categoría.', 'Try another term or change the category.'))}
          </p>
        </div>
      )}

      {/* References / closing slide */}
      {closing && (
        <Card className="bg-slate-50">
          <CardContent className="pt-6 space-y-3">
            <p className="font-semibold text-slate-900">
              {closing.headlineA} {closing.headlineB}
            </p>
            {closing.blocks.find((b) => b.type === 'lead')?.text && (
              <p className="text-sm text-slate-600 leading-relaxed">
                {closing.blocks.find((b) => b.type === 'lead')!.text}
              </p>
            )}
            {closing.note && <p className="text-xs text-slate-500 leading-relaxed">{closing.note}</p>}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
