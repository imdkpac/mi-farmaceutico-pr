import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Heart, ArrowLeft, Pill, Activity, Stethoscope } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import MedicationLookup from './aprende-sections/MedicationLookup';

const sections = [
  { id: 'medicamentos', icon: Pill, label: { es: 'Mis Medicamentos', en: 'My Medications' } },
  { id: 'condiciones', icon: Activity, label: { es: 'Condiciones Comunes', en: 'Common Conditions' } },
];

export default function AprendePage() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('medicamentos');

  const t = {
    es: {
      back: 'Volver al inicio',
      title: 'Aprende sobre tu salud',
      subtitle: 'Información clara y confiable para entender mejor sus medicamentos y condiciones',
      medListCta: {
        title: '¿Toma varios medicamentos?',
        desc: 'Organice todos sus medicamentos en una lista imprimible que puede llevar a sus citas.',
        cta: 'Crear mi lista',
      },
      condiciones: {
        title: 'Condiciones Comunes',
        comingSoon: 'Estamos preparando guías visuales sobre diabetes, presión alta, colesterol y más. Vuelva pronto.',
      },
    },
    en: {
      back: 'Back to home',
      title: 'Learn About Your Health',
      subtitle: 'Clear, reliable information to better understand your medications and conditions',
      medListCta: {
        title: 'Taking multiple medications?',
        desc: 'Organize all your medications in a printable list you can bring to appointments.',
        cta: 'Create my list',
      },
      condiciones: {
        title: 'Common Conditions',
        comingSoon: 'We are preparing visual guides on diabetes, high blood pressure, cholesterol, and more. Check back soon.',
      },
    },
  }[lang];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-teal-700 font-semibold hover:text-teal-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.back}
        </Link>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <BookOpen className="w-4 h-4" />
            {t.title}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {t.title}
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto gap-2 mb-8 pb-1">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeTab === section.id;
            return (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`whitespace-nowrap flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-base transition ${
                  isActive
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-amber-400'
                }`}
              >
                <Icon className="w-5 h-5" />
                {section.label[lang]}
              </button>
            );
          })}
        </div>

        {/* Content */}
        {activeTab === 'medicamentos' ? (
          <MedicationLookup />
        ) : (
          <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-8 text-center">
            <Stethoscope className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-slate-900 mb-2">{t.condiciones.title}</h2>
            <p className="text-slate-600">{t.condiciones.comingSoon}</p>
          </div>
        )}

        {/* CTA to medication list */}
        <div className="mt-12 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8 text-center border border-teal-200">
          <h3 className="text-xl font-bold text-slate-900 mb-2">{t.medListCta.title}</h3>
          <p className="text-slate-600 mb-6">{t.medListCta.desc}</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-bold transition"
          >
            {t.medListCta.cta}
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}
