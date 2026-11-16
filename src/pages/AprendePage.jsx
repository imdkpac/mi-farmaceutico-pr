import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowLeft, Pill, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import MedicationLookup from './aprende-sections/MedicationLookup';

const sections = [
  { id: 'medicamentos', icon: Pill, label: { es: 'Mis Medicamentos', en: 'My Medications' }, component: MedicationLookup },
  { id: 'condiciones', icon: Heart, label: { es: 'Condiciones Comunes', en: 'Common Conditions' } },
];

export default function AprendePage() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('medicamentos');

  const t = {
    es: {
      back: 'Volver al inicio',
      title: 'Aprende sobre tu Salud',
      subtitle: 'Información clara sobre sus medicamentos y condiciones de salud comunes',
      condicionesSoon: 'Información sobre condiciones comunes estará disponible próximamente.',
      medListCta: {
        title: '¿Quiere crear su lista de medicamentos?',
        desc: 'Nuestra herramienta más popular: cree una lista imprimible con todos sus medicamentos.',
        cta: 'Crear mi lista',
      },
    },
    en: {
      back: 'Back to home',
      title: 'Learn About Your Health',
      subtitle: 'Clear information about your medications and common health conditions',
      condicionesSoon: 'Information about common conditions will be available soon.',
      medListCta: {
        title: 'Want to create your medication list?',
        desc: 'Our most popular tool: create a printable list with all your medications.',
        cta: 'Create my list',
      },
    },
  }[lang];

  const ActiveComponent = sections.find((s) => s.id === activeTab)?.component;

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
            <BookOpen className="w-4 h-4" strokeWidth={2.5} />
            {t.title}
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-medium text-[#0F2E30] mb-4">
            {t.title}
          </h1>
          <p className="font-body text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted-ink)' }}>
            {t.subtitle}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex max-w-full min-w-0 overflow-x-auto overscroll-x-contain gap-3 mb-10 pb-1">
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
        {ActiveComponent ? (
          <ActiveComponent />
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--sand)' }}>
              <Heart className="w-10 h-10" style={{ color: 'var(--muted-ink)' }} />
            </div>
            <h3 className="font-display text-2xl font-medium text-[#0F2E30] mb-4">
              {sections.find((s) => s.id === activeTab)?.label[lang]}
            </h3>
            <p className="font-body text-lg mb-8" style={{ color: 'var(--muted-ink)' }}>
              {t.condicionesSoon}
            </p>
            <Link to="/" className="btn-capsule btn-capsule-primary">
              {t.medListCta.cta}
            </Link>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 p-10 text-center" style={{ backgroundColor: 'var(--sand)', borderRadius: '28px' }}>
          <h3 className="font-display text-xl font-medium text-[#0F2E30] mb-2">{t.medListCta.title}</h3>
          <p className="font-body mb-6" style={{ color: 'var(--muted-ink)' }}>{t.medListCta.desc}</p>
          <Link to="/" className="btn-capsule btn-capsule-primary">
            {t.medListCta.cta}
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}
