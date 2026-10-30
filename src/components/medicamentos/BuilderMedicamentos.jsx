import React, { useState, useEffect, useRef } from 'react';
import { Printer, Pencil, Trash2, Plus, X as IconoCerrar } from 'lucide-react';
import usePersistentState from '../../hooks/usePersistentState';
import {
  estadoInicial, reducerLista, crearId, camposVacios, EJEMPLO_MEDICAMENTO,
} from '../../utils/listaMedicamentos';
import { fechaLarga } from '../../utils/fechas';
import { trackEvent } from '../../utils/analytics';

const FORMAS_COMUNES = ['Tableta', 'Cápsula', 'Jarabe', 'Gotas', 'Inyección', 'Inhalador', 'Crema', 'Supositorio'];

const Campo = React.forwardRef(function Campo({ id, etiqueta, opcional, sugerencia, ...props }, ref) {
  return (
    <div>
      <label htmlFor={id} className="block font-semibold text-slate-800 mb-1">
        {etiqueta}
        {opcional && <span className="font-normal text-slate-500"> (opcional)</span>}
      </label>
      {sugerencia && <p className="text-sm text-slate-500 mb-1">{sugerencia}</p>}
      <input
        id={id}
        ref={ref}
        type="text"
        {...props}
        className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-base focus:border-teal-600 focus:ring-2 focus:ring-teal-600/25 outline-none bg-white"
      />
    </div>
  );
});

// Entrada de un medicamento — mismo formato en pantalla y en la impresión.
function EntradaMedicamento({ med }) {
  return (
    <article className="medicamento-entrada">
      <p className="text-lg font-bold">
        {med.nombre}
        {(med.concentracion || med.forma) && (
          <span className="font-normal"> — {[med.concentracion, med.forma].filter(Boolean).join(' · ')}</span>
        )}
      </p>
      {med.dosis && <p><span className="etiqueta-campo">Dosis y horario:</span> {med.dosis}</p>}
      {med.paraQue && <p><span className="etiqueta-campo">La uso para:</span> {med.paraQue}</p>}
      {med.medico && <p><span className="etiqueta-campo">Médico/a que la recetó:</span> {med.medico}</p>}
      {med.notas && <p><span className="etiqueta-campo">Notas:</span> {med.notas}</p>}
    </article>
  );
}

export default function BuilderMedicamentos() {
  const [estado, setEstado] = usePersistentState('mfp-lista-medicamentos', estadoInicial);
  const dispatch = (accion) => setEstado((s) => reducerLista(s, accion));

  const [form, setForm] = useState(camposVacios());
  const [editandoId, setEditandoId] = useState(null);
  const [error, setError] = useState('');
  const nombreRef = useRef(null);
  const formularioRef = useRef(null);

  // Al imprimir, el nombre del archivo sugiere "Mi lista de medicamentos".
  useEffect(() => {
    const tituloOriginal = document.title;
    const antes = () => { document.title = 'Mi lista de medicamentos'; };
    const despues = () => { document.title = tituloOriginal; };
    window.addEventListener('beforeprint', antes);
    window.addEventListener('afterprint', despues);
    return () => {
      window.removeEventListener('beforeprint', antes);
      window.removeEventListener('afterprint', despues);
      document.title = tituloOriginal;
    };
  }, []);

  const actualizar = (campo) => (e) => setForm((f) => ({ ...f, [campo]: e.target.value }));

  const enviar = (e) => {
    e.preventDefault();
    if (!form.nombre.trim()) {
      setError('Escriba al menos el nombre del medicamento. Los demás campos pueden quedarse en blanco.');
      nombreRef.current?.focus();
      return;
    }
    setError('');
    const datos = {
      nombre: form.nombre.trim(),
      concentracion: form.concentracion.trim(),
      forma: form.forma.trim(),
      dosis: form.dosis.trim(),
      paraQue: form.paraQue.trim(),
      medico: form.medico.trim(),
      notas: form.notas.trim(),
    };
    if (editandoId) {
      dispatch({ type: 'EDITAR', id: editandoId, datos });
      setEditandoId(null);
    } else {
      dispatch({ type: 'AÑADIR', id: crearId(), datos });
      trackEvent('medication_added', 'medication_list');
    }
    setForm(camposVacios());
    nombreRef.current?.focus();
  };

  const editar = (med) => {
    setEditandoId(med.id);
    setError('');
    setForm({
      nombre: med.nombre, concentracion: med.concentracion, forma: med.forma,
      dosis: med.dosis, paraQue: med.paraQue, medico: med.medico, notas: med.notas,
    });
    formularioRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => nombreRef.current?.focus(), 350);
  };

  const cancelarEdicion = () => {
    setEditandoId(null);
    setError('');
    setForm(camposVacios());
  };

  const eliminar = (med) => {
    if (window.confirm(`¿Eliminar "${med.nombre}" de su lista?`)) {
      dispatch({ type: 'ELIMINAR', id: med.id });
      if (editandoId === med.id) cancelarEdicion();
    }
  };

  const imprimir = () => {
    trackEvent('print_list', 'medication_list', `${estado.medicamentos.length}_medicamentos`);
    window.print();
  };

  const cantidad = estado.medicamentos.length;

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Formulario */}
      <div ref={formularioRef} className="no-print scroll-mt-28">
        <form onSubmit={enviar} className="bg-white border border-slate-200 rounded-lg p-5 sm:p-6 space-y-4 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">
            {editandoId ? 'Editar medicamento' : 'Añadir un medicamento'}
          </h3>

          <Campo
            id="campo-nombre" ref={nombreRef} etiqueta="Nombre del medicamento" required autoComplete="off"
            placeholder='Ej.: "Metformina"' value={form.nombre} onChange={actualizar('nombre')}
          />
          <div className="grid sm:grid-cols-2 gap-4">
            <Campo
              id="campo-concentracion" etiqueta="Concentración" autoComplete="off"
              placeholder='Ej.: "500 mg"' value={form.concentracion} onChange={actualizar('concentracion')}
            />
            <div>
              <Campo
                id="campo-forma" etiqueta="Forma" autoComplete="off" list="formas-comunes"
                placeholder='Ej.: "Tableta"' value={form.forma} onChange={actualizar('forma')}
              />
              <datalist id="formas-comunes">
                {FORMAS_COMUNES.map((f) => <option key={f} value={f} />)}
              </datalist>
            </div>
          </div>
          <Campo
            id="campo-dosis" etiqueta="Dosis y horario" autoComplete="off"
            placeholder='Ej.: "1 tableta con el desayuno y la cena"' value={form.dosis} onChange={actualizar('dosis')}
          />
          <Campo
            id="campo-paraque" etiqueta="¿Para qué la usa?" opcional autoComplete="off"
            placeholder='Ej.: "Para el azúcar" o "Para la presión"' value={form.paraQue} onChange={actualizar('paraQue')}
          />
          <Campo
            id="campo-medico" etiqueta="Médico/a que la recetó" opcional autoComplete="off"
            placeholder='Ej.: "Dra. Rivera"' value={form.medico} onChange={actualizar('medico')}
          />
          <Campo
            id="campo-notas" etiqueta="Notas" opcional autoComplete="off"
            placeholder='Ej.: "Tomarla con comida" o "Se acaba a mitad de mes"'
            value={form.notas} onChange={actualizar('notas')}
          />

          {error && (
            <p role="alert" className="text-sm font-semibold text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">
              {error}
            </p>
          )}

          <div className="flex flex-wrap gap-2 pt-1">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-semibold px-5 py-3 rounded-md transition"
            >
              <Plus className="w-4 h-4" />
              {editandoId ? 'Guardar cambios' : 'Añadir a mi lista'}
            </button>
            {editandoId && (
              <button
                type="button" onClick={cancelarEdicion}
                className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 font-semibold px-4 py-3 rounded-md hover:bg-slate-50 transition"
              >
                <IconoCerrar className="w-4 h-4" /> Cancelar
              </button>
            )}
          </div>
        </form>

        {/* Ejemplo de referencia — guía visual, nunca forma parte de la lista */}
        <div className="mt-4 border border-dashed border-slate-300 rounded-lg p-4 bg-slate-50">
          <p className="text-sm font-bold text-slate-600 mb-2">¿No está seguro de qué escribir? Así se ve una entrada completa:</p>
          <div className="opacity-75 select-none">
            <EntradaMedicamento med={EJEMPLO_MEDICAMENTO} />
          </div>
          <p className="text-xs text-slate-500 mt-2 italic">Ejemplo de referencia — no forma parte de su lista.</p>
        </div>
      </div>

      {/* Lista = documento imprimible */}
      <div
        id="documento-imprimible"
        className="scroll-mt-28 bg-white border border-slate-200 rounded-lg p-5 sm:p-6 shadow-sm"
      >
        {/* Encabezado del documento (solo visible al imprimir) */}
        <div className="solo-imprimir">
          <h1 className="text-2xl font-bold">Mi lista de medicamentos</h1>
          <p className="mt-1">
            <span className="etiqueta-campo">Paciente:</span> {estado.nombrePaciente || '__________________________________'}
          </p>
          {estado.creadaEl && (
            <p>
              <span className="etiqueta-campo">Fecha:</span> {fechaLarga(estado.creadaEl)}
              {estado.actualizadaEl && estado.actualizadaEl.slice(0, 10) !== estado.creadaEl.slice(0, 10) && (
                <> · <span className="etiqueta-campo">Última actualización:</span> {fechaLarga(estado.actualizadaEl)}</>
              )}
            </p>
          )}
          <p className="instrucciones-impresion">
            Lleve esta lista a sus citas médicas y a la farmacia. Seleccione «Guardar como PDF» para conservarla en su dispositivo.
          </p>
        </div>

        <div className="no-print flex flex-wrap items-start justify-between gap-3 mb-4">
          <h3 className="text-xl font-bold text-slate-900" aria-live="polite">
            Su lista{cantidad > 0 ? ` (${cantidad} ${cantidad === 1 ? 'medicamento' : 'medicamentos'})` : ''}
          </h3>
          <button
            onClick={imprimir} disabled={cantidad === 0}
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-900 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-5 py-3 rounded-md transition"
          >
            <Printer className="w-4 h-4" /> Imprimir / Guardar PDF
          </button>
        </div>

        <div className="no-print mb-4">
          <label htmlFor="nombre-paciente" className="block text-sm font-semibold text-slate-700 mb-1">
            Nombre del paciente (opcional — aparece en la lista impresa)
          </label>
          <input
            id="nombre-paciente" type="text" autoComplete="name"
            placeholder="Ej.: Carmen Rosa Ortiz"
            value={estado.nombrePaciente}
            onChange={(e) => dispatch({ type: 'FIJAR_NOMBRE_PACIENTE', nombre: e.target.value })}
            className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-base focus:border-teal-600 focus:ring-2 focus:ring-teal-600/25 outline-none bg-white"
          />
        </div>

        {cantidad === 0 ? (
          <p className="no-print text-slate-600 border border-slate-200 rounded-md px-4 py-6 text-center">
            Su lista está vacía. Use el formulario para añadir su primera medicina — solo el nombre es necesario para empezar.
          </p>
        ) : (
          <div className="space-y-3">
            {estado.medicamentos.map((med) => (
              <div key={med.id} className="medicamento-entrada border border-slate-300 rounded-md p-4 pr-20 relative bg-white">
                <EntradaMedicamento med={med} />
                <div className="no-print absolute top-3 right-3 flex gap-1">
                  <button
                    onClick={() => editar(med)} aria-label={`Editar ${med.nombre}`}
                    className="p-2 rounded-md text-slate-500 hover:text-teal-700 hover:bg-teal-50 transition"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => eliminar(med)} aria-label={`Eliminar ${med.nombre}`}
                    className="p-2 rounded-md text-slate-500 hover:text-red-700 hover:bg-red-50 transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cantidad > 0 && estado.actualizadaEl && (
          <p className="no-print text-xs text-slate-500 mt-4">
            Última actualización: {fechaLarga(estado.actualizadaEl)}
          </p>
        )}
      </div>
    </div>
  );
}
