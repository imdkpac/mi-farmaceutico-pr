/**
 * Lógica compartida de la lista personal de medicamentos.
 * - Tipos y persistencia en localStorage (solo en el dispositivo del usuario).
 * - Migración de listas guardadas con el formato anterior (v1).
 * - Puente "Añadir a mi lista" desde el Top 100: copia SOLO información
 *   identificatoria del dataset; las instrucciones personales las confirma el paciente.
 */

export interface Med {
  id: string
  nombre: string
  concentracion: string
  forma: string
  dosisYHorario: string
  paraQue: string
  medico: string
  notas: string
}

export interface MedListState {
  v: 2
  patient: string
  allergies: string
  notes: string
  meds: Med[]
  createdAt: string | null
  updatedAt: string | null
}

/** Datos que el Top 100 puede sugerir para una entrada nueva. */
export interface PrefillMed {
  nombre: string
  paraQue: string
  notas: string
}

export const STORAGE_KEY = 'guia-salud-medlist'

export function newId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
  return `med-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

export function emptyList(): MedListState {
  return { v: 2, patient: '', allergies: '', notes: '', meds: [], createdAt: null, updatedAt: null }
}

export function blankMed(): Med {
  return { id: newId(), nombre: '', concentracion: '', forma: '', dosisYHorario: '', paraQue: '', medico: '', notas: '' }
}

/** Migra datos guardados: v1 usaba name/dose/frequency/purpose/prescriber. */
export function migrateList(raw: unknown): MedListState {
  if (!raw || typeof raw !== 'object') return emptyList()
  const r = raw as Record<string, unknown>
  if (r.v === 2 && Array.isArray(r.meds)) return { ...emptyList(), ...r } as MedListState

  const meds: Med[] = Array.isArray(r.meds)
    ? (r.meds as Record<string, unknown>[]).map((m) => ({
        id: typeof m.id === 'string' ? m.id : newId(),
        nombre: typeof m.name === 'string' ? m.name : '',
        concentracion: typeof m.dose === 'string' ? m.dose : '',
        forma: '',
        dosisYHorario: typeof m.frequency === 'string' ? m.frequency : '',
        paraQue: typeof m.purpose === 'string' ? m.purpose : '',
        medico: typeof m.prescriber === 'string' ? m.prescriber : '',
        notas: '',
      }))
    : []

  return {
    v: 2,
    patient: typeof r.patient === 'string' ? r.patient : '',
    allergies: typeof r.allergies === 'string' ? r.allergies : '',
    notes: typeof r.notes === 'string' ? r.notes : '',
    meds,
    createdAt: null,
    updatedAt: null,
  }
}

export function loadList(): MedListState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return migrateList(raw ? JSON.parse(raw) : null)
  } catch {
    return emptyList()
  }
}

export function saveList(state: MedListState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    /* almacenamiento no disponible: la lista sigue funcionando en memoria */
  }
}

export const nowISO = () => new Date().toISOString()

/* ---------- Puente desde el Top 100 ---------- */

/**
 * Extrae el nombre de la molécula (principio activo o marca) de una tarjeta de
 * tratamiento, de forma conservadora. Si el formato no es reconocible, devuelve
 * '' y el paciente escribe el nombre a mano — nunca se inventa.
 *
 * Formatos soportados (ver baraja_top100_es.ts):
 *   "Hygroton; Microzide\nClortalidona 12.5-25 mg; HCTZ 25-50 mg · VO · 1 vez al día · Largo plazo"
 *   "Norvasc\n5-10 mg · VO · 1 vez al día · Largo plazo"
 *   "Amoxicilina 500 mg · VO · c/8h · 7-10 días"
 */
export function extraerMolecula(texto: string): string {
  const lineas = texto.split('\n').map((l) => l.trim()).filter(Boolean)
  if (lineas.length === 0) return ''

  // Línea de detalle (2ª si existe, si no la 1ª): "Molécula 12.5-25 mg [· vía · pauta…]"
  const detalle = (lineas[1] ?? lineas[0]).split('·')[0].split(';')[0].trim()
  const sinDosis = detalle
    .replace(/\s*\d+(?:[.,]\d+)?(?:\s*-\s*\d+(?:[.,]\d+)?)?\s*(?:mg|mcg|µg|g|ui|iu|u|ml|%)\b\.?/i, '')
    .replace(/\s+(?:VO|IV|IM|SC|SL|tópica?|sublingual|oral|inh)\b.*$/i, '')
    .trim()

  if (esNombrePlausible(sinDosis)) return sinDosis

  // Respaldo: una sola marca/genérico en la primera línea ("Norvasc")
  const primera = lineas[0]
  if (!primera.includes(';') && !primera.includes('·') && esNombrePlausible(primera)) return primera

  return ''
}

function esNombrePlausible(s: string): boolean {
  return s.length >= 3 && s.length <= 40 && /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ][A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9\s\-\(\)\.']+$/.test(s)
}

/**
 * Construye la sugerencia de entrada: identifica la medicina y la enfermedad,
 * y conserva el texto original de referencia en notas (sin interpretarlo).
 */
export function prefillDesdeTratamiento(perfilTitulo: string, tratamiento: { title?: string; text?: string }): PrefillMed {
  const referencia = [tratamiento.title, tratamiento.text].filter(Boolean).join(' — ')
  return {
    nombre: extraerMolecula(tratamiento.text ?? ''),
    paraQue: perfilTitulo,
    notas: `Referencia (Top 100 · ${perfilTitulo}): ${referencia}`,
  }
}
