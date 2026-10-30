export type BlockType =
  | 'lead'
  | 'stats'
  | 'cards'
  | 'checklist'
  | 'flags'
  | 'feature'
  | 'recap'
  | 'bars'

/** Fila unificada: cada bloque usa los campos que necesita. */
export interface BlockItem {
  value?: string
  label?: string
  title?: string
  text?: string
}

export interface Block {
  id: string
  type: BlockType
  title?: string
  text?: string
  quote?: string
  note?: string
  dense?: boolean
  items?: BlockItem[]
}

export interface SlideData {
  id: string
  badge: string
  eyebrow: string
  headlineA: string
  headlineB: string
  blocks: Block[]
  alertTitle?: string
  alertText?: string
  note?: string
}

export const BLOCK_META: Record<BlockType, { label: string; hint: string }> = {
  lead: { label: 'Párrafo', hint: 'Texto introductorio grande' },
  stats: { label: 'Cifras', hint: 'Tarjetas de número + descripción' },
  cards: { label: 'Tarjetas', hint: 'Apiladas: título + texto' },
  checklist: { label: 'Lista ✓', hint: 'Lista con marcas de verificación' },
  flags: { label: 'Señales', hint: 'Lista de alerta con ▸ rojo' },
  feature: { label: 'Destacado', hint: 'Caja dorada con título y pasos' },
  recap: { label: 'Resumen', hint: 'Caja "Lo esencial" con puntos' },
  bars: { label: 'Barras', hint: 'Barras 0–100 con etiqueta' },
}

export function makeId(): string {
  return Math.random().toString(36).slice(2, 9)
}
