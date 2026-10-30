import { useEffect, useState } from 'react'
import { useT, bi } from '@/lib/i18n'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Pill, Plus, Printer, Trash2, ShieldAlert, ArrowUp, ArrowDown, ListOrdered,
} from 'lucide-react'
import {
  type Med, type MedListState, type PrefillMed,
  blankMed, emptyList, loadList, saveList, nowISO,
} from '@/lib/medList'

const FORMAS = ['Tableta', 'Cápsula', 'Jarabe', 'Gotas', 'Inyección', 'Inhalador', 'Crema', 'Supositorio', 'Parche']

const CAMPOS_MED: { key: keyof Med; etiqueta: { es: string; en: string }; opt?: boolean; ph: { es: string; en: string }; list?: string }[] = [
  { key: 'nombre', etiqueta: bi('Nombre del medicamento', 'Medication name'), ph: bi('Ej. Metformina', 'E.g. Metformin') },
  { key: 'concentracion', etiqueta: bi('Concentración', 'Strength'), ph: bi('Ej. 500 mg', 'E.g. 500 mg') },
  { key: 'forma', etiqueta: bi('Forma', 'Form'), ph: bi('Ej. Tableta', 'E.g. Tablet'), list: 'formas-medicamento' },
  { key: 'dosisYHorario', etiqueta: bi('Dosis y horario', 'Dose and schedule'), ph: bi('Ej. 1 tableta con el desayuno y la cena', 'E.g. 1 tablet with breakfast and dinner') },
  { key: 'paraQue', etiqueta: bi('Para qué la usa', 'What you use it for'), opt: true, ph: bi('Ej. Para el azúcar (opcional)', 'E.g. For blood sugar (optional)') },
  { key: 'medico', etiqueta: bi('Médico/a que la recetó', 'Prescribing doctor'), opt: true, ph: bi('Ej. Dra. Santos (opcional)', 'E.g. Dr. Santos (optional)') },
  { key: 'notas', etiqueta: bi('Notas', 'Notes'), opt: true, ph: bi('Ej. Tomarla con comida (opcional)', 'E.g. Take with food (optional)') },
]

function localeActual(): string {
  try {
    return localStorage.getItem('guia-salud-lang') === 'en' ? 'en-US' : 'es-PR'
  } catch {
    return 'es-PR'
  }
}

function fechaLarga(iso: string | null): string {
  if (!iso) return ''
  try {
    return new Date(iso).toLocaleDateString(localeActual(), { day: 'numeric', month: 'long', year: 'numeric' })
  } catch {
    return ''
  }
}

// Cuadrícula de campos de un medicamento (la misma en la tarjeta inicial y en las entradas).
function GrupoCamposMed({ med, onChange, idPrefix }: {
  med: Med
  onChange: (field: keyof Med, value: string) => void
  idPrefix: string
}) {
  const t = useT()
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {CAMPOS_MED.map((c) => (
        <div key={c.key} className="space-y-1">
          <Label htmlFor={`${idPrefix}-${c.key}`} className="text-xs">
            {t(c.etiqueta)}
            {c.opt && <span className="text-slate-400"> · {t(bi('opcional', 'optional'))}</span>}
          </Label>
          <Input
            id={`${idPrefix}-${c.key}`}
            value={med[c.key]}
            onChange={(e) => onChange(c.key, e.target.value)}
            placeholder={t(c.ph)}
            list={c.list}
            autoComplete="off"
          />
        </div>
      ))}
      <datalist id="formas-medicamento">
        {FORMAS.map((f) => <option key={f} value={f} />)}
      </datalist>
    </div>
  )
}

export default function MedList({ pendiente, onPendienteConsumed }: {
  pendiente?: PrefillMed | null
  onPendienteConsumed?: () => void
}) {
  const t = useT()
  const [state, setState] = useState<MedListState>(loadList)
  // Tarjeta inicial: visible de inmediato para que se sepa qué escribir en cada campo.
  const [borrador, setBorrador] = useState<Med>(blankMed)
  const [error, setError] = useState('')

  // Persistencia automática: un cierre o refresco accidental no borra la lista.
  useEffect(() => {
    saveList(state)
  }, [state])

  // Consumir la sugerencia "Añadir a mi lista" del Top 100.
  useEffect(() => {
    if (!pendiente) return
    setState((s) => ({
      ...s,
      meds: [...s.meds, { ...blankMed(), nombre: pendiente.nombre, paraQue: pendiente.paraQue, notas: pendiente.notas }],
      createdAt: s.createdAt ?? nowISO(),
      updatedAt: nowISO(),
    }))
    onPendienteConsumed?.()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendiente])

  // Al imprimir, el nombre del archivo sugiere "Mi lista de medicamentos".
  useEffect(() => {
    const original = document.title
    const antes = () => { document.title = t(bi('Mi lista de medicamentos', 'My medication list')) }
    const despues = () => { document.title = original }
    window.addEventListener('beforeprint', antes)
    window.addEventListener('afterprint', despues)
    return () => {
      window.removeEventListener('beforeprint', antes)
      window.removeEventListener('afterprint', despues)
      document.title = original
    }
  }, [t])

  const update = (id: string, field: keyof Med, value: string) =>
    setState((s) => ({
      ...s,
      meds: s.meds.map((m) => (m.id === id ? { ...m, [field]: value } : m)),
      updatedAt: nowISO(),
    }))

  const addMed = () =>
    setState((s) => ({
      ...s,
      meds: [...s.meds, blankMed()],
      createdAt: s.createdAt ?? nowISO(),
      updatedAt: nowISO(),
    }))

  // La primera medicina se confirma desde la tarjeta inicial (borrador → lista).
  const confirmarBorrador = () => {
    if (!borrador.nombre.trim()) {
      setError(t(bi(
        'Escriba al menos el nombre de la medicina para empezar su lista. Los demás campos pueden quedarse en blanco.',
        'Type at least the medicine’s name to start your list. The other fields can stay blank.'
      )))
      return
    }
    setError('')
    setState((s) => ({
      ...s,
      meds: [{ ...borrador, nombre: borrador.nombre.trim() }],
      createdAt: s.createdAt ?? nowISO(),
      updatedAt: nowISO(),
    }))
    setBorrador(blankMed())
  }

  const removeMed = (id: string) =>
    setState((s) => ({ ...s, meds: s.meds.filter((m) => m.id !== id), updatedAt: nowISO() }))

  const move = (index: number, dir: -1 | 1) =>
    setState((s) => {
      const target = index + dir
      if (target < 0 || target >= s.meds.length) return s
      const meds = [...s.meds]
      ;[meds[index], meds[target]] = [meds[target], meds[index]]
      return { ...s, meds, updatedAt: nowISO() }
    })

  const clearAll = () => {
    if (window.confirm(t(bi(
      '¿Borrar toda la lista? Esta acción no se puede deshacer.',
      'Delete the whole list? This cannot be undone.'
    )))) {
      setState(emptyList())
    }
  }

  const imprimir = () => window.print()
  const vacia = state.meds.length === 0

  return (
    <div className="space-y-6">
      <header className="space-y-2 no-print">
        <h2 className="text-2xl font-bold text-slate-900">
          {t(bi('Mi lista de medicamentos', 'My medication list'))}
        </h2>
        <p className="text-slate-600 max-w-3xl leading-relaxed">
          {t(bi(
            'Escriba las medicinas que toma usted o la persona a su cuidado. Complétela, imprímala y llévela a cada cita, farmacia o emergencia. Se guarda automáticamente en este navegador — nada se envía a ningún servidor.',
            'Write down the medicines you take or the person you care for takes. Complete it, print it, and bring it to every appointment, pharmacy or emergency. It saves automatically in this browser — nothing is sent to any server.'
          ))}
        </p>
      </header>

      <div className="flex gap-3 rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm text-sky-900 no-print">
        <ShieldAlert className="h-5 w-5 shrink-0 mt-0.5" />
        <p>
          {t(bi(
            'Privacidad: esta lista vive solo en este navegador y dispositivo (almacenamiento local). No se transmite a ningún servidor. Si usa una computadora compartida, pulse «Borrar lista» al terminar.',
            'Privacy: this list lives only in this browser and device (local storage). It is never transmitted to any server. On a shared computer, press “Delete list” when you’re done.'
          ))}
        </p>
      </div>

      {/* Formulario */}
      <div className="space-y-4 no-print">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="ml-paciente">{t(bi('Nombre del paciente (opcional)', 'Patient name (optional)'))}</Label>
            <Input
              id="ml-paciente"
              value={state.patient}
              onChange={(e) => setState((s) => ({ ...s, patient: e.target.value }))}
              placeholder={t(bi('Ej. María Rivera', 'E.g. Maria Rivera'))}
              autoComplete="name"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="ml-alergias">{t(bi('Alergias (opcional)', 'Allergies (optional)'))}</Label>
            <Input
              id="ml-alergias"
              value={state.allergies}
              onChange={(e) => setState((s) => ({ ...s, allergies: e.target.value }))}
              placeholder={t(bi('Ej. Penicilina', 'E.g. Penicillin'))}
            />
          </div>
        </div>

        {vacia && (
          <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-4">
            <div className="space-y-3">
              <p className="font-semibold text-slate-900 flex items-center gap-2">
                <ListOrdered className="h-5 w-5 text-teal-700" />
                {t(bi('Empiece su lista aquí', 'Start your list here'))}
              </p>
              <ol className="list-decimal list-inside space-y-1.5 text-slate-700 text-sm leading-relaxed">
                <li>{t(bi('Escriba el nombre de la medicina en la tarjeta de abajo.', 'Type the medicine’s name in the card below.'))}</li>
                <li>{t(bi('Complete lo que sepa: concentración, forma, dosis y horario. Solo el nombre es necesario; lo demás puede dejarse en blanco.', 'Fill in what you know: strength, form, dose and schedule. Only the name is required; everything else can stay blank.'))}</li>
                <li>{t(bi('Pulse «Añadir a mi lista» y repita con cada medicina. Al terminar, use «Imprimir / Guardar PDF».', 'Press “Add to my list” and repeat for each medicine. When done, use “Print / Save PDF”.'))}</li>
              </ol>
              <p className="text-sm text-slate-500">
                {t(bi(
                  'Consejo: en la sección Top 100 puede pulsar «Añadir a mi lista» sobre un tratamiento para empezar una entrada con el nombre de la medicina — verifíquela y complete su dosis antes de imprimir.',
                  'Tip: in the Top 100 section you can press “Add to my list” on a treatment to start an entry with the medicine’s name — verify it and complete your dose before printing.'
                ))}
              </p>
            </div>

            {/* Tarjeta inicial: los campos y sus ejemplos son visibles de inmediato */}
            <Card className="border-teal-200">
              <CardContent className="pt-5 space-y-3">
                <p className="flex items-center gap-2 font-medium text-slate-800">
                  <Pill className="h-4 w-4 text-teal-600" />
                  {t(bi('Medicamento 1', 'Medication 1'))}
                </p>
                <GrupoCamposMed
                  med={borrador}
                  idPrefix="borrador"
                  onChange={(field, value) => setBorrador((b) => ({ ...b, [field]: value }))}
                />
                {error && (
                  <p role="alert" className="text-sm font-semibold text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">
                    {error}
                  </p>
                )}
                <Button onClick={confirmarBorrador} className="gap-2 bg-teal-600 hover:bg-teal-700">
                  <Plus className="h-4 w-4" />
                  {t(bi('Añadir a mi lista', 'Add to my list'))}
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {state.meds.map((med, i) => (
          <Card key={med.id}>
            <CardContent className="pt-5 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <p className="flex items-center gap-2 font-medium text-slate-800">
                  <Pill className="h-4 w-4 text-teal-600" />
                  {t(bi(`Medicamento ${i + 1}`, `Medication ${i + 1}`))}
                </p>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" onClick={() => move(i, -1)} disabled={i === 0}
                    aria-label={t(bi(`Subir ${med.nombre || 'medicamento'}`, `Move ${med.nombre || 'medication'} up`))}>
                    <ArrowUp className="h-4 w-4 text-slate-400" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => move(i, 1)} disabled={i === state.meds.length - 1}
                    aria-label={t(bi(`Bajar ${med.nombre || 'medicamento'}`, `Move ${med.nombre || 'medication'} down`))}>
                    <ArrowDown className="h-4 w-4 text-slate-400" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => removeMed(med.id)}
                    aria-label={t(bi(`Eliminar ${med.nombre || 'medicamento'}`, `Remove ${med.nombre || 'medication'}`))}>
                    <Trash2 className="h-4 w-4 text-slate-400 hover:text-red-600" />
                  </Button>
                </div>
              </div>
              <GrupoCamposMed
                med={med}
                idPrefix={med.id}
                onChange={(field, value) => update(med.id, field, value)}
              />
            </CardContent>
          </Card>
        ))}

        <div className="flex flex-wrap gap-3">
          {!vacia && (
            <Button onClick={addMed} variant="outline" className="gap-2">
              <Plus className="h-4 w-4" />
              {t(bi('Añadir medicamento', 'Add medication'))}
            </Button>
          )}
          <Button onClick={imprimir} disabled={vacia} className="gap-2 bg-teal-600 hover:bg-teal-700">
            <Printer className="h-4 w-4" />
            {t(bi('Imprimir / Guardar PDF', 'Print / Save PDF'))}
          </Button>
          {!vacia && (
            <Button variant="ghost" className="text-red-600" onClick={clearAll}>
              {t(bi('Borrar lista', 'Delete list'))}
            </Button>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="ml-notas">{t(bi('Notas generales (condiciones, farmacia preferida, contactos)', 'General notes (conditions, preferred pharmacy, contacts)'))}</Label>
          <Input
            id="ml-notas"
            value={state.notes}
            onChange={(e) => setState((s) => ({ ...s, notes: e.target.value }))}
            placeholder={t(bi('Ej. Diabética tipo 2 · Farmacia: CVS Mayagüez', 'E.g. Type 2 diabetes · Pharmacy: CVS Mayagüez'))}
          />
        </div>

        {(state.createdAt || state.updatedAt) && (
          <p className="text-xs text-slate-500">
            {state.createdAt && <>{t(bi('Creada:', 'Created:'))} {fechaLarga(state.createdAt)} · </>}
            {t(bi('Última actualización:', 'Last updated:'))} {fechaLarga(state.updatedAt)}
          </p>
        )}
      </div>

      {/* Documento imprimible */}
      <div className="print-only hidden" aria-hidden="true">
        <h1>{t(bi('Mi lista de medicamentos', 'My medication list'))}</h1>
        <p>
          <strong>{t(bi('Paciente:', 'Patient:'))}</strong> {state.patient || '______________________'}
          {state.allergies && <> · <strong>{t(bi('Alergias:', 'Allergies:'))}</strong> {state.allergies}</>}
        </p>
        <p>
          {state.createdAt && <><strong>{t(bi('Fecha:', 'Date:'))}</strong> {fechaLarga(state.createdAt)}</>}
          {state.updatedAt && <> · <strong>{t(bi('Última actualización:', 'Last updated:'))}</strong> {fechaLarga(state.updatedAt)}</>}
        </p>
        <p className="print-instruccion">
          {t(bi(
            'Lleve esta lista a sus citas médicas y a la farmacia. Seleccione «Guardar como PDF» para conservar una copia en su dispositivo.',
            'Bring this list to your medical appointments and the pharmacy. Choose “Save as PDF” to keep a copy on your device.'
          ))}
        </p>
        <ol className="print-med-lista">
          {state.meds.map((m) => (
            <li key={m.id} className="print-med">
              <p className="print-med-titulo">
                {m.nombre}
                {(m.concentracion || m.forma) && <> — {[m.concentracion, m.forma].filter(Boolean).join(' · ')}</>}
              </p>
              {m.dosisYHorario && <p><strong>{t(bi('Dosis y horario:', 'Dose and schedule:'))}</strong> {m.dosisYHorario}</p>}
              {m.paraQue && <p><strong>{t(bi('La uso para:', 'I use it for:'))}</strong> {m.paraQue}</p>}
              {m.medico && <p><strong>{t(bi('Médico/a que la recetó:', 'Prescribing doctor:'))}</strong> {m.medico}</p>}
              {m.notas && <p><strong>{t(bi('Notas:', 'Notes:'))}</strong> {m.notas}</p>}
            </li>
          ))}
        </ol>
        {state.notes && (
          <p><strong>{t(bi('Notas generales:', 'General notes:'))}</strong> {state.notes}</p>
        )}
      </div>
    </div>
  )
}
