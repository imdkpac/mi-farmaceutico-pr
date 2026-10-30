import { useMemo, useState } from 'react'
import { AlertTriangle, Search, X } from 'lucide-react'
import type { SlideData } from '@/types/slide'
import { groupOf, isDivider, isSti, matchScore, norm } from '@/lib/search'
import { categoryLabel, translateSlide } from '@/lib/i18n'
import type { Lang, T } from '@/lib/i18n'

interface Entry {
  slide: SlideData
  index: number
}

interface LibraryProps {
  slides: SlideData[]
  lang: Lang
  t: T
  onOpen: (index: number) => void
}

function treatmentLine(s: SlideData): string {
  for (const b of s.blocks) {
    if (b.type === 'cards' && b.items?.length) {
      return b.items
        .slice(0, 3)
        .map((it) => (it.title ?? '').replace(/^#\d+ · /, ''))
        .filter(Boolean)
        .join(' · ')
    }
  }
  return ''
}

function leadSnippet(s: SlideData): string {
  for (const b of s.blocks) {
    if (b.type === 'lead' && b.text) return b.text
  }
  return ''
}

export function Library({ slides, lang, t, onOpen }: LibraryProps) {
  const [query, setQuery] = useState('')
  const [chip, setChip] = useState<string>('todas')

  /* Entradas de la biblioteca: todo menos los divisores de sección */
  const entries = useMemo<Entry[]>(
    () => slides.map((slide, index) => ({ slide, index })).filter((e) => !isDivider(e.slide)),
    [slides]
  )

  /* Chips de categoría en orden de aparición + chip especial ITS */
  const chips = useMemo(() => {
    const counts = new Map<string, number>()
    for (const e of entries) {
      const g = groupOf(e.slide)
      counts.set(g, (counts.get(g) ?? 0) + 1)
    }
    const list = [...counts.entries()].map(([id, count]) => ({ id, count }))
    list.sort((a, b) => (a.id === 'GENERAL' ? 1 : b.id === 'GENERAL' ? -1 : 0))
    const stiCount = entries.filter((e) => isSti(e.slide)).length
    return { list, stiCount }
  }, [entries])

  /* Filtrado: chip + búsqueda (AND), ordenado por relevancia cuando hay consulta */
  const filtered = useMemo(() => {
    const q = norm(query.trim())
    let pool = entries
    if (chip === 'its') pool = pool.filter((e) => isSti(e.slide))
    else if (chip !== 'todas') pool = pool.filter((e) => groupOf(e.slide) === chip)
    if (!q) return pool
    return pool
      .map((e) => ({ e, score: matchScore(e.slide, q) }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score || a.e.index - b.e.index)
      .map((r) => r.e)
  }, [entries, chip, query])

  /* Agrupación por categoría solo en la vista completa */
  const grouped = useMemo(() => {
    if (query.trim() || chip !== 'todas') return null
    const map = new Map<string, Entry[]>()
    for (const e of filtered) {
      const g = groupOf(e.slide)
      if (!map.has(g)) map.set(g, [])
      map.get(g)!.push(e)
    }
    const groups = [...map.entries()]
    groups.sort((a, b) => (a[0] === 'GENERAL' ? 1 : b[0] === 'GENERAL' ? -1 : 0))
    return groups
  }, [filtered, query, chip])

  const searching = query.trim().length > 0

  return (
    <div className="lib-wrap">
      <div className="lib-head">
        <div className="lib-search">
          <Search size={16} />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') setQuery('')
            }}
            placeholder={t.searchPh}
            aria-label={t.searchPh}
            spellCheck={false}
          />
          {query && (
            <button className="lib-clear" onClick={() => setQuery('')} title="Limpiar búsqueda">
              <X size={14} />
            </button>
          )}
        </div>
        <span className="lib-count" aria-live="polite">
          {t.results(filtered.length)}
        </span>
      </div>

      <div className="chip-row">
        <button className={`chip${chip === 'todas' ? ' on' : ''}`} onClick={() => setChip('todas')}>
          {t.all} <b>{entries.length}</b>
        </button>
        {chips.stiCount > 0 && (
          <button className={`chip gold${chip === 'its' ? ' on' : ''}`} onClick={() => setChip('its')}>
            {t.its} <b>{chips.stiCount}</b>
          </button>
        )}
        {chips.list.map((c) => (
          <button key={c.id} className={`chip${chip === c.id ? ' on' : ''}`} onClick={() => setChip(c.id)}>
            {categoryLabel(c.id, lang)} <b>{c.count}</b>
          </button>
        ))}
      </div>

      <div className="lib-scroll">
        {filtered.length === 0 && (
          <div className="lib-empty">
            <p className="font-display">{t.noResults}</p>
            <span>{t.noMatch(query.trim(), chip !== 'todas')}</span>
          </div>
        )}

        {grouped
          ? grouped.map(([group, list]) => (
              <section key={group} className="lib-group">
                <div className="lib-group-head">
                  <span>{categoryLabel(group, lang)}</span>
                  <b>{list.length}</b>
                  <i />
                </div>
                <div className="lib-grid">
                  {list.map((e) => (
                    <LibCard key={e.slide.id} entry={e} lang={lang} onOpen={onOpen} />
                  ))}
                </div>
              </section>
            ))
          : filtered.length > 0 && (
              <div className="lib-grid">
                {filtered.map((e) => (
                  <LibCard key={e.slide.id} entry={e} lang={lang} onOpen={onOpen} />
                ))}
              </div>
            )}

        {searching && filtered.length > 0 && <p className="lib-foot">{t.foot}</p>}
      </div>
    </div>
  )
}

function LibCard({ entry, lang, onOpen }: { entry: Entry; lang: Lang; onOpen: (index: number) => void }) {
  const { slide, index } = entry
  const display = translateSlide(slide, lang)
  const treatments = treatmentLine(slide)
  const lead = leadSnippet(display)
  return (
    <button className="lib-card" onClick={() => onOpen(index)}>
      <div className="lc-top">
        <span className="lc-badge">{display.badge}</span>
        <span className="lc-num">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="lc-title font-display">
        {display.headlineA}
        {display.headlineB ? ` ${display.headlineB}` : ''}
      </div>
      {lead && <p className="lc-lead">{lead}</p>}
      <div className="lc-foot">
        {treatments && <span className="lc-tx">{treatments}</span>}
        {slide.alertText && (
          <span className="lc-alert" title="Tiene señales de alarma">
            <AlertTriangle size={12} />
          </span>
        )}
      </div>
    </button>
  )
}
