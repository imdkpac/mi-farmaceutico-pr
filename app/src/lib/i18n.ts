import type { SlideData } from '@/types/slide'

export type Lang = 'es' | 'en'

export const LS_LANG = 'mfpr-carousel-lang'

export function loadLang(): Lang {
  try {
    return localStorage.getItem(LS_LANG) === 'en' ? 'en' : 'es'
  } catch {
    return 'es'
  }
}

export function saveLang(lang: Lang) {
  try {
    localStorage.setItem(LS_LANG, lang)
  } catch {
    /* sin almacenamiento */
  }
}

/* ── Textos de la interfaz ── */
export const UI = {
  es: {
    searchPh: 'Buscar por condición, guía, organismo…  ( / )',
    results: (n: number) => `${n} ${n === 1 ? 'resultado' : 'resultados'}`,
    all: 'Todas',
    its: 'ITS / salud sexual',
    noResults: 'SIN RESULTADOS',
    noMatch: (q: string, scoped: boolean) =>
      `No hay coincidencias para «${q}»${scoped ? ' en este grupo' : ''}. Prueba con otro término.`,
    foot: 'Ordenado por relevancia — el titular pesa más que el cuerpo.',
    importExcel: 'Importar Excel',
    importTitle: 'Importar un archivo .xlsx',
    resetTitle: 'Restablecer la baraja activa',
    deckTitle: 'Baraja activa',
    titleA: 'RUTA CLÍNICA',
    titleB: '10 FUENTES OFICIALES',
    close: 'Cerrar',
    prev: 'Anterior',
    next: 'Siguiente',
    tLoaded: (l: string) => `Baraja cargada: ${l}`,
    tReset: 'Baraja restablecida al contenido original',
    tRemoved: 'Baraja importada eliminada',
    tNoRows: 'No encontré filas utilizables en ese archivo',
    tReadFail: 'No se pudo leer el archivo .xlsx',
    tClinical: (n: number) => `${n} diapositivas generadas desde el libro clínico`,
    tSheet: (n: number) => `${n} diapositivas creadas desde la primera hoja`,
  },
  en: {
    searchPh: 'Search by condition, guideline, organization…  ( / )',
    results: (n: number) => `${n} ${n === 1 ? 'result' : 'results'}`,
    all: 'All',
    its: 'STIs / sexual health',
    noResults: 'NO RESULTS',
    noMatch: (q: string, scoped: boolean) =>
      `No matches for “${q}”${scoped ? ' in this group' : ''}. Try another term.`,
    foot: 'Sorted by relevance — titles weigh more than body text.',
    importExcel: 'Import Excel',
    importTitle: 'Import a .xlsx file',
    resetTitle: 'Reset the active deck',
    deckTitle: 'Active deck',
    titleA: 'CLINICAL ROUTE',
    titleB: '10 OFFICIAL SOURCES',
    close: 'Close',
    prev: 'Previous',
    next: 'Next',
    tLoaded: (l: string) => `Deck loaded: ${l}`,
    tReset: 'Deck restored to its original content',
    tRemoved: 'Imported deck removed',
    tNoRows: "Couldn't find usable rows in that file",
    tReadFail: "Couldn't read the .xlsx file",
    tClinical: (n: number) => `${n} slides generated from the clinical workbook`,
    tSheet: (n: number) => `${n} slides created from the first sheet`,
  },
}

export type T = (typeof UI)['es']

/* ── Categorías clínicas (badge → etiqueta de interfaz) ── */
const CAT_EN: Record<string, string> = {
  'INFECCIONES BACTERIANAS': 'BACTERIAL INFECTIONS',
  'INFECCIONES VIRALES': 'VIRAL INFECTIONS',
  'INFECCIONES FÚNGICAS': 'FUNGAL INFECTIONS',
  'INFECCIONES PARASITARIAS': 'PARASITIC INFECTIONS',
  RESPIRATORIO: 'RESPIRATORY',
  CARDIOVASCULAR: 'CARDIOVASCULAR',
  'ENDOCRINO Y METABÓLICO': 'ENDOCRINE & METABOLIC',
  GASTROINTESTINAL: 'GASTROINTESTINAL',
  'RENAL Y UROLÓGICO': 'RENAL & UROLOGIC',
  'NEUROLÓGICO Y PSIQUIÁTRICO': 'NEUROLOGIC & PSYCHIATRIC',
  DERMATOLÓGICO: 'DERMATOLOGIC',
  MUSCULOESQUELÉTICO: 'MUSCULOSKELETAL',
  'OÍDO, NARIZ, GARGANTA Y OJOS': 'ENT & EYE',
  'SALUD DE LA MUJER': "WOMEN'S HEALTH",
  OTROS: 'OTHER',
  'REFERENCIA CLÍNICA': 'CLINICAL REFERENCE',
  RESUMEN: 'SUMMARY',
  FUENTES: 'SOURCES',
}

/** Etiqueta de categoría según idioma (el grupo interno siempre es el español). */
export function categoryLabel(badge: string, lang: Lang): string {
  if (lang === 'en') return CAT_EN[badge] ?? badge
  return badge === 'SECCIÓN' ? 'SECCIÓN' : badge
}

/* ── Cromo de la diapositiva: frases fijas del diseño ── */
const PHRASE_EN: Record<string, string> = {
  'PANORAMA GENERAL': 'OVERVIEW',
  'CURABILIDAD DE LOS': 'CURABILITY OF THE',
  '100 DIAGNÓSTICOS.': '100 DIAGNOSES.',
  'PERFILES CLÍNICOS': 'CLINICAL PROFILES',
  'Y TRATAMIENTOS.': 'AND TREATMENTS.',
  'BASADO EN GUÍAS': 'BASED ON CLINICAL',
  CLÍNICAS: 'GUIDELINES.',
  'CURABLE*': 'CURABLE*',
  'CONTROLABLE (CRÓNICA)': 'MANAGEABLE (CHRONIC)',
  AUTOLIMITADA: 'SELF-LIMITING',
  'Los 100 diagnósticos más comunes con sus tratamientos rankeados, señales de alarma y base de evidencia — una diapositiva por enfermedad, lista para editar y exportar.':
    'The 100 most common diagnoses with ranked treatments, warning signs and evidence base — one slide per disease, ready to browse.',
  'enfermedades con perfil clínico completo.': 'diseases with a complete clinical profile.',
  'tratamientos detallados: dosis, vía, duración y mecanismo.':
    'detailed treatments: dose, route, duration and mechanism.',
  'categorías clínicas, de infecciones a salud de la mujer.':
    'clinical categories, from infections to women’s health.',
  'Material educativo de referencia. Verifica siempre con las guías clínicas vigentes y el criterio del médico o farmacéutico.':
    'Reference educational material. Always verify with current clinical guidelines and your doctor or pharmacist’s judgment.',
  'Más de la mitad de estas enfermedades son *curables* — y casi todas tienen un tratamiento de primera línea bien establecido.':
    'More than half of these diseases are *curable* — and almost all have a well-established first-line treatment.',
  '* Incluye condiciones curables por intervención definitiva (p. ej., cirugía). Datos de la hoja "Summary".':
    '* Includes conditions curable by definitive intervention (e.g., surgery). Data from the "Summary" sheet.',
  'IDSA y AAP — guías de práctica en enfermedades infecciosas.':
    'IDSA and AAP — infectious disease practice guidelines.',
  'ATS/IDSA 2019 — neumonía adquirida en comunidad.':
    'ATS/IDSA 2019 — community-acquired pneumonia.',
  'Gastroenterology, Gut, Hepatology, Circulation, NEJM y Annals of Internal Medicine.':
    'Gastroenterology, Gut, Hepatology, Circulation, NEJM and Annals of Internal Medicine.',
  'Material educativo — *no sustituye* la orientación de tu médico o farmacéutico. Dosis estándar de adulto; ajusta siempre por paciente.':
    'Educational material — *does not replace* guidance from your doctor or pharmacist. Standard adult dosing; always adjust per patient.',
  'Las 24 referencias completas están en la hoja "References" del archivo original.':
    'The full references are in the "References" sheet of the original file.',
}

function tr(s: string | undefined, lang: Lang): string | undefined {
  if (!s || lang === 'es') return s
  if (PHRASE_EN[s]) return PHRASE_EN[s]
  if (s.startsWith('Evidencia: ')) return `Evidence: ${s.slice('Evidencia: '.length)}`
  return s
}

function trEyebrow(s: string, lang: Lang): string {
  if (lang === 'es') return s
  let m = /^PERFIL CLÍNICO Nº (\d+)$/.exec(s)
  if (m) return `CLINICAL PROFILE No. ${m[1]}`
  m = /^TOP (\d+) · ENFERMEDADES COMUNES$/.exec(s)
  if (m) return `TOP ${m[1]} · COMMON DISEASES`
  return s
}

/** Devuelve la diapositiva con su cromo traducido (contenido clínico intacto). */
export function translateSlide(slide: SlideData, lang: Lang): SlideData {
  if (lang === 'es') return slide
  return {
    ...slide,
    badge: categoryLabel(slide.badge, lang),
    eyebrow: trEyebrow(slide.eyebrow, lang),
    headlineA: tr(slide.headlineA, lang) ?? slide.headlineA,
    headlineB: tr(slide.headlineB, lang) ?? slide.headlineB,
    blocks: slide.blocks.map((b) => ({
      ...b,
      title: tr(b.title, lang),
      text: tr(b.text, lang),
      quote: tr(b.quote, lang),
      note: tr(b.note, lang),
      items: b.items?.map((it) => ({
        value: it.value,
        label: tr(it.label, lang),
        title: tr(it.title, lang),
        text: tr(it.text, lang),
      })),
    })),
    alertTitle: tr(slide.alertTitle, lang),
    alertText: tr(slide.alertText, lang),
    note: tr(slide.note, lang),
  }
}
