import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'es' | 'en'

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
}

const Ctx = createContext<LangCtx>({ lang: 'es', setLang: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('guia-salud-lang')
    return saved === 'en' || saved === 'es' ? saved : 'es'
  })
  useEffect(() => {
    localStorage.setItem('guia-salud-lang', lang)
    document.documentElement.lang = lang
  }, [lang])
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>
}

export function useLang() {
  return useContext(Ctx)
}

/** Pick the string for the current language from a bilingual pair. */
export function useT() {
  const { lang } = useLang()
  return (pair: { es: string; en: string }) => pair[lang]
}

export const bi = (es: string, en: string) => ({ es, en })
export type Bi = { es: string; en: string }
