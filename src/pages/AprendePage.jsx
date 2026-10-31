import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Heart, ArrowLeft, Search, Pill, Activity, Construction } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  es: {
    title: 'Aprende sobre tu salud',
    subtitle: 'Información clara y confiable sobre enfermedades comunes y sus tratamientos',
    back: 'Volver al inicio',
    searchPlaceholder: 'Buscar tema... (presione / para buscar)',
    comingSoon: 'Contenido en desarrollo',
    description: 'Estamos preparando guías visuales sobre diabetes, presión alta, colesterol, y más — con información sobre qué hace cada medicamento, cómo tomarlo correctamente, y cuándo llamar al médico.',
    topics: [
      { icon: Activity, title: 'Diabetes', desc: 'Tipos, síntomas, medicamentos y cuidado diario' },
      { icon: Heart, title: 'Presión Alta', desc: 'Cómo controlarla y qué medicamentos existen' },
      { icon: Pill, title: 'Colesterol', desc: 'Entienda sus números y sus opciones de tratamiento' },
      { icon: Activity, title: 'Dolor Crónico', desc: 'Manejo seguro del dolor sin riesgo de dependencia' },
    ],
    medListCta: {
      title: '¿Toma varios medicamentos?',
      desc: 'Organice todos sus medicamentos en una lista imprimible que puede llevar a sus citas.',
      cta: 'Crear mi lista',
    },
  },
  en: {
    title: 'Learn About Your Health',
    subtitle: 'Clear, reliable information about common conditions and their treatments',
    back: 'Back to home',
    searchPlaceholder: 'Search topics... (press / to search)',
    comingSoon: 'Content in development',
    description: 'We are preparing visual guides on diabetes, high blood pressure, cholesterol, and more — with information about what each medication does, how to take it correctly, and when to call your doctor.',
    topics: [
      { icon: Activity, title: 'Diabetes', desc: 'Types, symptoms, medications, and daily care' },
      { icon: Heart, title: 'High Blood Pressure', desc: 'How to control it and what medications exist' },
      { icon: Pill, title: 'Cholesterol', desc: 'Understand your numbers and treatment options' },
      { icon: Activity, title: 'Chronic Pain', desc: 'Safe pain management without risk of dependence' },
    ],
    medListCta: {
      title: 'Taking multiple medications?',
      desc: 'Organize all your medications in a printable list you can bring to appointments.',
      cta: 'Create my list',
    },
  },
};

export default function AprendePage() {
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

        {/* Coming soon banner */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-8 text-center mb-10">
          <Construction className="w-12 h-12 text-amber-600 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-900 mb-2">{t.comingSoon}</h2>
          <p className="text-slate-600 max-w-xl mx-auto">{t.description}</p>
        </div>

        {/* Topic previews */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {t.topics.map((topic, i) => {
            const Icon = topic.icon;
            return (
              <div
                key={i}
                className="border-2 border-slate-200 rounded-xl p-6 bg-white opacity-70"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-slate-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{topic.title}</h3>
                    <p className="text-slate-600 text-sm">{topic.desc}</p>
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
      </div>
    </div>
  );
}
