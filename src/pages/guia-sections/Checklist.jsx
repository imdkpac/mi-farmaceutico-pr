import React, { useState, useEffect } from 'react';
import { ClipboardCheck, ArrowLeft, Check, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const CHECKLIST_ITEMS = {
  es: [
    { id: 1, text: '¿Tiene su lista de medicamentos actualizada?' },
    { id: 2, text: '¿Sabe la dirección y teléfono del hospital?' },
    { id: 3, text: '¿Tiene su tarjeta de seguro médico?' },
    { id: 4, text: '¿Llevó una identificación con foto?' },
    { id: 5, text: '¿Tiene copia de órdenes médicas recientes?' },
    { id: 6, text: '¿Sabe el nombre de su médico primario?' },
    { id: 7, text: '¿Tiene contacto de emergencia anotado?' },
    { id: 8, text: '¿Llevó sus medicamentos actuales (en sus frascos)?' },
    { id: 9, text: '¿Sabe a qué hora debe tomar cada medicamento?' },
    { id: 10, text: '¿Tiene preguntas escritas para el médico?' },
    { id: 11, text: '¿Conoce su tipo de sangre?' },
    { id: 12, text: '¿Tiene alguien que lo acompañe o lo pueda llamar?' },
  ],
  en: [
    { id: 1, text: 'Do you have your updated medication list?' },
    { id: 2, text: 'Do you know the hospital address and phone number?' },
    { id: 3, text: 'Do you have your health insurance card?' },
    { id: 4, text: 'Did you bring photo identification?' },
    { id: 5, text: 'Do you have copies of recent medical orders?' },
    { id: 6, text: 'Do you know your primary doctor\'s name?' },
    { id: 7, text: 'Do you have an emergency contact written down?' },
    { id: 8, text: 'Did you bring your current medications (in their bottles)?' },
    { id: 9, text: 'Do you know what time to take each medication?' },
    { id: 10, text: 'Do you have written questions for the doctor?' },
    { id: 11, text: 'Do you know your blood type?' },
    { id: 12, text: 'Do you have someone who can accompany you or call?' },
  ],
};

export default function Checklist() {
  const { lang } = useLanguage();
  const [checked, setChecked] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('guia-checklist')) || {};
    } catch { return {}; }
  });

  useEffect(() => {
    localStorage.setItem('guia-checklist', JSON.stringify(checked));
  }, [checked]);

  const toggle = (id) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  const completedCount = Object.values(checked).filter(Boolean).length;
  const total = CHECKLIST_ITEMS[lang].length;
  const progress = Math.round((completedCount / total) * 100);

  const t = {
    es: {
      title: 'Lista de Preparación',
      subtitle: 'Marque lo que ya tiene listo antes de ir a su cita médica',
      progress: 'Completado',
      print: 'Imprimir lista',
      medListCta: {
        title: '¿Necesita su lista de medicamentos?',
        desc: 'Cree una lista imprimible para llevar a su cita.',
        cta: 'Crear mi lista',
      },
    },
    en: {
      title: 'Preparation Checklist',
      subtitle: 'Check off what you have ready before your medical appointment',
      progress: 'Completed',
      print: 'Print checklist',
      medListCta: {
        title: 'Need your medication list?',
        desc: 'Create a printable list to bring to your appointment.',
        cta: 'Create my list',
      },
    },
  }[lang];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-medium text-[#0F2E30] mb-2">{t.title}</h2>
        <p className="font-body" style={{ color: 'var(--muted-ink)' }}>{t.subtitle}</p>
      </div>

      {/* Progress */}
      <div className="p-5" style={{ backgroundColor: 'var(--sand)', borderRadius: '28px' }}>
        <div className="flex items-center justify-between mb-2">
          <span className="font-body font-semibold text-[#0F2E30]">{t.progress}: {completedCount}/{total}</span>
          <span className="font-display text-xl font-medium" style={{ color: progress === 100 ? 'var(--sage)' : 'var(--flamboyan)' }}>{progress}%</span>
        </div>
        <div className="w-full h-3 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--paper)' }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, backgroundColor: progress === 100 ? 'var(--sage)' : 'var(--flamboyan)' }}
          />
        </div>
      </div>

      {/* Items */}
      <div className="space-y-3">
        {CHECKLIST_ITEMS[lang].map((item) => {
          const isChecked = !!checked[item.id];
          return (
            <button
              key={item.id}
              onClick={() => toggle(item.id)}
              className="w-full text-left p-4 sm:p-5 flex items-start gap-4 transition"
              style={{
                backgroundColor: isChecked ? 'var(--sage)' : 'var(--sand)',
                borderRadius: '28px',
                opacity: isChecked ? 0.85 : 1,
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition"
                style={{ backgroundColor: isChecked ? 'var(--pine)' : 'var(--paper)' }}
              >
                {isChecked ? (
                  <Check className="w-5 h-5 text-[#F4EFE6]" strokeWidth={3} />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2" style={{ borderColor: 'var(--muted-ink)' }} />
                )}
              </div>
              <span className={`font-body text-lg ${isChecked ? 'line-through' : ''}`} style={{ color: 'var(--pine)' }}>
                {item.text}
              </span>
            </button>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-4">
        <button onClick={handlePrint} className="btn-capsule" style={{ backgroundColor: 'var(--pine)', color: 'var(--paper)' }}>
          <Printer className="w-5 h-5" />
          {t.print}
        </button>
        <Link to="/" className="btn-capsule btn-capsule-primary">
          {t.medListCta.cta}
          <ArrowLeft className="w-4 h-4 rotate-180" />
        </Link>
      </div>

      {/* Print-only footer */}
      <div className="hidden print:block mt-8 text-center">
        <p className="font-body text-sm" style={{ color: 'var(--muted-ink)' }}>www.mifarmaceuticopr.com · (787) 667-6560</p>
      </div>
    </div>
  );
}
