import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, MapPin, Home, Calculator, ClipboardCheck, ArrowLeft, Construction } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  es: {
    title: 'Guía de Salud PR',
    subtitle: 'Herramientas para navegar el sistema de salud en Puerto Rico',
    back: 'Volver al inicio',
    comingSoon: 'Próximamente',
    sections: [
      {
        icon: MapPin,
        title: 'Hospitales',
        desc: 'Encuentre hospitales cercanos con información de contacto, especialidades y tiempos de espera.',
        color: 'blue',
      },
      {
        icon: Home,
        title: 'Hogares de Ancianos',
        desc: 'Directorio de hogares de cuidado con calificaciones, servicios y costos.',
        color: 'teal',
      },
      {
        icon: Calculator,
        title: 'Costos de Medicamentos',
        desc: 'Compare precios y encuentre programas de asistencia para medicamentos.',
        color: 'amber',
      },
      {
        icon: ClipboardCheck,
        title: 'Preparación para la Cita',
        desc: 'Lista de verificación para preparar su próxima visita médica.',
        color: 'rose',
      },
    ],
    medListCta: {
      title: '¿Ya tiene su lista de medicamentos?',
      desc: 'Use nuestra herramienta más popular para crear una lista imprimible antes de su cita.',
      cta: 'Crear mi lista',
    },
    emergency: 'Emergencias: 9-1-1 · Línea PAS: 1-888-672-7622',
  },
  en: {
    title: 'PR Health Guide',
    subtitle: 'Tools to navigate the Puerto Rico healthcare system',
    back: 'Back to home',
    comingSoon: 'Coming Soon',
    sections: [
      {
        icon: MapPin,
        title: 'Hospitals',
        desc: 'Find nearby hospitals with contact info, specialties, and wait times.',
        color: 'blue',
      },
      {
        icon: Home,
        title: 'Nursing Homes',
        desc: 'Directory of care homes with ratings, services, and costs.',
        color: 'teal',
      },
      {
        icon: Calculator,
        title: 'Medication Costs',
        desc: 'Compare prices and find assistance programs for medications.',
        color: 'amber',
      },
      {
        icon: ClipboardCheck,
        title: 'Appointment Prep',
        desc: 'Checklist to prepare for your next doctor visit.',
        color: 'rose',
      },
    ],
    medListCta: {
      title: 'Already have your medication list?',
      desc: 'Use our most popular tool to create a printable list before your appointment.',
      cta: 'Create my list',
    },
    emergency: 'Emergencies: 9-1-1 · PAS Helpline: 1-888-672-7622',
  },
};

const colorMap = {
  blue: { bg: 'bg-blue-100', icon: 'text-blue-700', border: 'border-blue-200' },
  teal: { bg: 'bg-teal-100', icon: 'text-teal-700', border: 'border-teal-200' },
  amber: { bg: 'bg-amber-100', icon: 'text-amber-700', border: 'border-amber-200' },
  rose: { bg: 'bg-rose-100', icon: 'text-rose-700', border: 'border-rose-200' },
};

export default function GuiaPage() {
  const { lang } = useLanguage();
  const t = translations[lang];

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

        <div className="text-center mb-12">
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

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {t.sections.map((section, i) => {
            const colors = colorMap[section.color];
            const Icon = section.icon;
            return (
              <div
                key={i}
                className={`border-2 ${colors.border} rounded-xl p-6 bg-white opacity-80`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center shrink-0`}>
                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-slate-900">{section.title}</h3>
                      <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded-full">
                        {t.comingSoon}
                      </span>
                    </div>
                    <p className="text-slate-600">{section.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA to medication list */}
        <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8 text-center border border-teal-200">
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

        <p className="text-center text-sm text-slate-500 mt-8">
          {t.emergency}
        </p>
      </div>
    </div>
  );
}
