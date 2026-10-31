import React, { useState, useEffect } from 'react';
import { ClipboardCheck, Check, RotateCcw, Printer, Save } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const CHECKLIST_ITEMS = {
  es: [
    { id: 'docs', text: 'Tarjeta de seguro médico (Plan de Salud / Medicare / Medicaid)', checked: false },
    { id: 'id', text: 'Identificación con foto (licencia o pasaporte)', checked: false },
    { id: 'meds', text: 'Lista de medicamentos actualizada (con dosis y horarios)', checked: false },
    { id: 'allergies', text: 'Lista de alergias a medicamentos o alimentos', checked: false },
    { id: 'symptoms', text: 'Notas sobre síntomas nuevos o cambios en su salud', checked: false },
    { id: 'questions', text: 'Preguntas escritas para el médico (mínimo 3)', checked: false },
    { id: 'history', text: 'Resultados recientes de análisis de sangre o estudios', checked: false },
    { id: 'pharmacy', text: 'Nombre y teléfono de su farmacia preferida', checked: false },
    { id: 'emergency', text: 'Teléfono de contacto de emergencia (familiar o cuidador)', checked: false },
    { id: 'insurance', text: 'Copago o forma de pago lista', checked: false },
    { id: 'glasses', text: 'Lentes de lectura (si los usa)', checked: false },
    { id: 'hearing', text: 'Audífono con baterías funcionando (si lo usa)', checked: false },
  ],
  en: [
    { id: 'docs', text: 'Health insurance card (Health Plan / Medicare / Medicaid)', checked: false },
    { id: 'id', text: 'Photo ID (driver license or passport)', checked: false },
    { id: 'meds', text: 'Updated medication list (with doses and schedules)', checked: false },
    { id: 'allergies', text: 'List of medication or food allergies', checked: false },
    { id: 'symptoms', text: 'Notes about new symptoms or health changes', checked: false },
    { id: 'questions', text: 'Written questions for the doctor (at least 3)', checked: false },
    { id: 'history', text: 'Recent blood test results or studies', checked: false },
    { id: 'pharmacy', text: 'Name and phone of preferred pharmacy', checked: false },
    { id: 'emergency', text: 'Emergency contact phone (family or caregiver)', checked: false },
    { id: 'insurance', text: 'Copay or payment method ready', checked: false },
    { id: 'glasses', text: 'Reading glasses (if used)', checked: false },
    { id: 'hearing', text: 'Hearing aid with working batteries (if used)', checked: false },
  ],
};

export default function Checklist() {
  const { lang } = useLanguage();
  const STORAGE_KEY = `guia-checklist-${lang}`;

  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return CHECKLIST_ITEMS[lang].map((item) => ({ ...item }));
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items, STORAGE_KEY]);

  const toggleItem = (index) => {
    setItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, checked: !item.checked } : item))
    );
  };

  const resetAll = () => {
    setItems(CHECKLIST_ITEMS[lang].map((item) => ({ ...item })));
  };

  const allChecked = items.every((i) => i.checked);
  const progress = Math.round((items.filter((i) => i.checked).length / items.length) * 100);

  const handlePrint = () => {
    window.print();
  };

  const t = {
    es: {
      title: 'Lista para la Cita Médica',
      subtitle: 'Marque cada item antes de salir de casa. Guarde su progreso automáticamente.',
      progress: 'Progreso',
      completado: '¡Todo listo!',
      reset: 'Reiniciar lista',
      print: 'Imprimir',
      tip: 'Consejo: Lleve esta lista en su teléfono o impresa. Compártala con su acompañante.',
    },
    en: {
      title: 'Doctor Appointment Checklist',
      subtitle: 'Check each item before leaving home. Your progress is saved automatically.',
      progress: 'Progress',
      completado: 'All ready!',
      reset: 'Reset list',
      print: 'Print',
      tip: 'Tip: Keep this list on your phone or printed. Share it with your companion.',
    },
  }[lang];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">{t.title}</h2>
        <p className="text-slate-600">{t.subtitle}</p>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-slate-700">{t.progress}</span>
          <span className="text-sm font-bold text-teal-700">{progress}%</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-3">
          <div
            className="bg-teal-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        {allChecked && (
          <p className="mt-2 text-sm font-bold text-green-700 flex items-center gap-1.5">
            <Check className="w-4 h-4" />
            {t.completado}
          </p>
        )}
      </div>

      {/* Checklist Items */}
      <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
        {items.map((item, i) => (
          <button
            key={item.id}
            onClick={() => toggleItem(i)}
            className={`w-full text-left p-4 flex items-start gap-3 transition hover:bg-slate-50 ${
              item.checked ? 'opacity-60' : ''
            }`}
          >
            <div
              className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 mt-0.5 transition ${
                item.checked
                  ? 'bg-teal-600 border-teal-600'
                  : 'border-slate-300'
              }`}
            >
              {item.checked && <Check className="w-4 h-4 text-white" />}
            </div>
            <span className={`text-base ${item.checked ? 'line-through text-slate-500' : 'text-slate-900'}`}>
              {item.text}
            </span>
          </button>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={resetAll}
          className="px-5 py-2.5 rounded-lg border-2 border-slate-300 text-slate-600 hover:bg-slate-50 font-medium flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          {t.reset}
        </button>
        <button
          onClick={handlePrint}
          className="px-5 py-2.5 rounded-lg bg-teal-600 text-white hover:bg-teal-700 font-medium flex items-center gap-2"
        >
          <Printer className="w-4 h-4" />
          {t.print}
        </button>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
        <ClipboardCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <p className="text-sm text-blue-800">{t.tip}</p>
      </div>
    </div>
  );
}
