import { useEffect, useMemo, useState } from 'react'
import { Languages } from 'lucide-react'
import { DECKS } from '@/data/decks'
import { UI, loadLang, saveLang } from '@/lib/i18n'
import type { Lang } from '@/lib/i18n'
import { Library } from '@/components/Library'
import { SlideDetail } from '@/components/SlideDetail'

export default function App() {
  const [lang, setLang] = useState<Lang>(loadLang)
  const [detail, setDetail] = useState<number | null>(null)

  const t = UI[lang]
  const slides = useMemo(() => DECKS[lang], [lang])

  /* Idioma en el atributo <html lang> para lectores de pantalla */
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  /* «/» enfoca la búsqueda */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== '/') return
      const el = e.target as HTMLElement | null
      if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable)) return
      e.preventDefault()
      document.querySelector<HTMLInputElement>('.lib-search input')?.focus()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const toggleLang = () => {
    const next: Lang = lang === 'es' ? 'en' : 'es'
    setLang(next)
    saveLang(next)
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <span className="brand-mark">Mi Farmacéutico en PR</span>
        <span className="app-title">
          {t.titleA} <span>{t.titleB}</span>
        </span>
        <div className="header-spacer" />
        <button
          className="icon-btn lang-btn"
          onClick={toggleLang}
          title={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}
          aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}
        >
          <Languages size={14} aria-hidden="true" />
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
      </header>

      <Library slides={slides} lang={lang} t={t} onOpen={setDetail} />

      {detail !== null && detail < slides.length && (
        <SlideDetail
          slides={slides}
          index={detail}
          onIndex={setDetail}
          onClose={() => setDetail(null)}
          t={t}
        />
      )}
    </div>
  )
}
