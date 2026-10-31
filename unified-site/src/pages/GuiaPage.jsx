import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, ArrowLeft, MapPin, Home, Calculator, ClipboardCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Hospitals from './guia-sections/Hospitals';
import NursingHomes from './guia-sections/NursingHomes';
import Costs from './guia-sections/Costs';
import Checklist from './guia-sections/Checklist';

const sections = [
  { id: 'hospitals', icon: MapPin, label: { es: 'Hospitales', en: 'Hospitals' }, component: Hospitals },
  { id: 'hogares', icon: Home, label: { es: 'Hogares de Cuidado', en: 'Nursing Homes' }, component: NursingHomes },
  { id: 'costos', icon: Calculator, label: { es: 'Costos', en: 'Costs' }, component: Costs },
  { id: 'checklist', icon: ClipboardCheck, label: { es: 'Preparación', en: 'Preparation' }, component: Checklist },
];

export default function GuiaPage() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('hospitals');

  const t = {
    es: {
      back: 'Volver al inicio',
      title: 'Guía de Salud PR',
      subtitle: 'Herramientas prácticas para navegar el sistema de salud en Puerto Rico',
      medListCta: {
        title: '¿Ya tiene su lista de medicamentos?',
        desc: 'Use nuestra herramienta más popular para crear una lista imprimible antes de su cita.',
        cta: 'Crear mi lista',
      },
    },
    en: {
      back: 'Back to home',
      title: 'PR Health Guide',
      subtitle: 'Practical tools to navigate the Puerto Rico healthcare system',
      medListCta: {
        title: 'Already have your medication list?',
        desc: 'Use our most popular tool to create a printable list before your appointment.',
        cta: 'Create my list',
      },
    },
  }[lang];

  const ActiveComponent = sections.find((s) => s.id === activeTab)?.component || Hospitals;

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
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Stethoscope className="w-4 h-4" />
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
                    ? 'bg-teal-600 text-white shadow-md'
                    : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-teal-400'
                }`}
              >
                <Icon className="w-5 h-5" />
                {section.label[lang]}
              </button>
            );
          })}
        </div>

        {/* Active Section */}
        <ActiveComponent />

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
