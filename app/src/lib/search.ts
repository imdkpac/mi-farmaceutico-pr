import type { SlideData } from '@/types/slide'

/** Normaliza para búsqueda: minúsculas y sin acentos. */
export function norm(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

/** Todo el texto buscable de una diapositiva. */
export function slideHaystack(s: SlideData): string {
  const parts: string[] = [s.badge, s.eyebrow, s.headlineA, s.headlineB, s.alertTitle ?? '', s.alertText ?? '', s.note ?? '']
  for (const b of s.blocks) {
    parts.push(b.title ?? '', b.text ?? '', b.quote ?? '', b.note ?? '')
    for (const it of b.items ?? []) parts.push(it.value ?? '', it.label ?? '', it.title ?? '', it.text ?? '')
  }
  return norm(parts.join(' · '))
}

/** Puntuación de coincidencia: titular pesa más que el cuerpo. */
export function matchScore(s: SlideData, q: string): number {
  if (!q) return 1
  const title = norm(`${s.headlineA} ${s.headlineB}`)
  if (title.startsWith(q)) return 100
  if (title.includes(q)) return 60
  const treatments = norm(
    s.blocks.flatMap((b) => (b.items ?? []).map((it) => `${it.title ?? ''} ${it.text ?? ''}`)).join(' · ')
  )
  if (treatments.includes(q)) return 40
  if (slideHaystack(s).includes(q)) return 10
  return 0
}

/** Los divisores de sección no aparecen en la biblioteca (ella misma agrupa). */
export function isDivider(s: SlideData): boolean {
  return s.badge === 'SECCIÓN'
}

const GENERAL_BADGES = new Set(['REFERENCIA CLÍNICA', 'RESUMEN', 'FUENTES'])

/** Grupo de la biblioteca: la categoría clínica (badge) o GENERAL. */
export function groupOf(s: SlideData): string {
  return GENERAL_BADGES.has(s.badge) ? 'GENERAL' : s.badge
}

/* ITS / salud sexual: cruza categorías del libro (bacterianas, virales, salud de la mujer) */
const STI_RE =
  /syphilis|gonorr|chlamydia|genital herpes|hsv|hiv|immunodeficienc|hepatitis b|trichomon|bacterial vaginosis|hpv|papilloma|pelvic inflammatory|condyloma|sifilis|gonorrea|clamidia|herpes genital/i

export function isSti(s: SlideData): boolean {
  return STI_RE.test(`${s.headlineA} ${s.headlineB}`)
}
