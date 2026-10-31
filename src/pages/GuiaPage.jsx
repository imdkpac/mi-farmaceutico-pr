import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, ArrowLeft, MapPin, Home, Calculator, ClipboardCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Hospitals from './guia-sections/Hospitals';
import NursingHomes from './guia-sections/NursingHomes';
import Costs from './guia-sections/Costs';
import Checklist from './guia-sections/Checklist';

const sections = [
  { id: 'hospitals', icon: MapPin, label: { es: 'Hospitales', en: 'Hospitals' } },
  { id: 'hogares', icon: Home, label: { es: 'Hogares', en: 'Nursing Homes' } },
  { id: 'costos', icon: Calculator, label: { es: 'Costos', en: 'Costs' } },
  { id: 'checklist', icon: ClipboardCheck, label: { es: 'Preparación', en: 'Preparation' } },
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
    <div className="min-h-screen" style={{ backgroundColor: 'var(--paper)' }}>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 font-body font-semibold mb-6 transition hover:underline"
          style={{ color: 'var(--pine)' }}
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
          {t.back}
        </Link>

        <div className="text-center mb-8">
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-body font-bold text-sm mb-4"
            style={{ backgroundColor: 'var(--sand)', color: 'var(--pine)' }}
          >
            <Stethoscope className="w-4 h-4" strokeWidth={2.5} />
            {t.title}
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-medium text-[#0F2E30] mb-4">
            {t.title}
          </h1>
          <p className="font-body text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted-ink)' }}>
            {t.subtitle}
          </p>
        </div>

        {/* Tabs — scrollable pills */}
        <div className="flex overflow-x-auto gap-3 mb-10 pb-1">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeTab === section.id;
            return (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className="whitespace-nowrap flex items-center gap-2 px-6 py-3 rounded-full font-body font-semibold text-base transition"
                style={
                  isActive
                    ? { backgroundColor: 'var(--pine)', color: 'var(--paper)' }
                    : { backgroundColor: 'var(--sand)', color: 'var(--pine)' }
                }
              >
                <Icon className="w-5 h-5" strokeWidth={2} />
                {section.label[lang]}
              </button>
            );
          })}
        </div>

        {/* Active Section */}
        <ActiveComponent />

        {/* CTA */}
        <div className="mt-12 p-10 text-center" style={{ backgroundColor: 'var(--sand)', borderRadius: '28px' }}>
          <h3 className="font-display text-xl font-medium text-[#0F2E30] mb-2">{t.medListCta.title}</h3>
          <p className="font-body mb-6" style={{ color: 'var(--muted-ink)' }}>{t.medListCta.desc}</p>
          <Link
            to="/"
            className="btn-capsule btn-capsule-primary"
          >
            {t.medListCta.cta}
            <ArrowLeft className="w-4 h-4 rotate-180" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </div>
  );
}
