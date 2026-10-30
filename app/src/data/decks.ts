import type { SlideData } from '@/types/slide'
import type { Lang } from '@/lib/i18n'
import { DECK_RUTA_CLINICA } from './deckRutaClinica'
import { DECK_RUTA_CLINICA_EN } from './deckRutaClinicaEn'

/**
 * Ruta Clínica — 10 condiciones, la fuente oficial de cada una.
 * Una baraja completa por idioma: agregar otro idioma = agregar un archivo
 * aquí (y sus textos de interfaz en lib/i18n.ts).
 */
export const DECKS: Record<Lang, SlideData[]> = {
  es: DECK_RUTA_CLINICA,
  en: DECK_RUTA_CLINICA_EN,
}
