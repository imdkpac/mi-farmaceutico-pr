import React from 'react';
import { Link } from 'react-router-dom';
import { Pill, BookOpen, Stethoscope, Phone, Printer, ChevronRight, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import BuilderMedicamentos from '../components/medicamentos/BuilderMedicamentos';

const translations = {
  es: {
    hero: {
      badge: 'Herramienta #1 para pacientes en Puerto Rico',
      title: 'Su lista de medicamentos, siempre a la mano',
      subtitle: 'Cree, guarde e imprima su lista de medicamentos. Llévela a sus citas médicas y a la farmacia.',
      cta: 'Empezar mi lista',
    },
    features: {
      title: 'Más herramientas para su salud',
      pill: {
        title: 'Lista de Medicamentos',
        desc: 'La herramienta más popular. Cree una lista imprimible con todos sus medicamentos, dosis y horarios.',
      },
      guide: {
        title: 'Guía de Salud PR',
        desc: 'Encuentre hospitales, hogares de ancianos, compare costos y prepare su próxima cita médica.',
      },
      learn: {
        title: 'Aprende sobre tu salud',
        desc: 'Información clara sobre enfermedades comunes, sus medicamentos y cómo usarlos correctamente.',
      },
      services: {
        title: 'Servicios Profesionales',
        desc: 'Consulta farmacéutica personalizada para usted o sus padres. Supervisión remota y visitas a domicilio.',
      },
    },
    trust: {
      title: 'Por qué confían en nosotros',
      licensed: 'Farmacéutico licenciado en Puerto Rico y Florida',
      independent: 'Práctica independiente — sin conflictos de interés',
      bilingual: 'Atención en español e inglés',
      secure: 'Su información se guarda solo en su dispositivo',
    },
    emergency: 'Emergencias: llame al 9-1-1',
    crisis: 'Línea PAS (salud mental 24/7): 1-888-672-7622',
  },
  en: {
    hero: {
      badge: '#1 Tool for Patients in Puerto Rico',
      title: 'Your Medication List, Always at Hand',
      subtitle: 'Create, save, and print your medication list. Take it to your doctor appointments and pharmacy.',
      cta: 'Start my list',
    },
    features: {
      title: 'More Tools for Your Health',
      pill: {
        title: 'Medication List',
        desc: 'Our most popular tool. Create a printable list with all your medications, doses, and schedules.',
      },
      guide: {
        title: 'PR Health Guide',
        desc: 'Find hospitals, nursing homes, compare costs, and prepare for your next medical appointment.',
      },
      learn: {
        title: 'Learn About Your Health',
        desc: 'Clear information about common conditions, their medications, and how to use them correctly.',
      },
      services: {
        title: 'Professional Services',
        desc: 'Personalized pharmacy consultation for you or your parents. Remote monitoring and home visits.',
      },
    },
    trust: {
      title: 'Why Families Trust Us',
      licensed: 'Licensed pharmacist in Puerto Rico and Florida',
      independent: 'Independent practice — no conflicts of interest',
      bilingual: 'Care in Spanish and English',
      secure: 'Your information is stored only on your device',
    },
    emergency: 'Emergencies: call 9-1-1',
    crisis: 'PAS Helpline (mental health 24/7): 1-888-672-7622',
  },
};

export default function HomePage() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const scrollToBuilder = () => {
    document.getElementById('medication-builder')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-16 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 backdrop-blur rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
            {t.hero.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-lg sm:text-xl text-teal-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          <button
            onClick={scrollToBuilder}
            className="bg-white text-teal-700 hover:bg-teal-50 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition inline-flex items-center gap-2"
          >
            {t.hero.cta}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Medication Builder — Front and Center */}
      <section id="medication-builder" className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Pill className="w-4 h-4" />
              {lang === 'es' ? 'Gratis y privado — su información nunca sale de su dispositivo' : 'Free and private — your data never leaves your device'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {lang === 'es' ? 'Cree su lista de medicamentos' : 'Create Your Medication List'}
            </h2>
          </div>
          <BuilderMedicamentos />
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-16 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-10">
            {t.features.title}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Medication List */}
            <Link
              to="/"
              onClick={scrollToBuilder}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:border-teal-400 hover:shadow-md transition group"
            >
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-200 transition">
                <Pill className="w-6 h-6 text-teal-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{t.features.pill.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{t.features.pill.desc}</p>
            </Link>

            {/* Health Guide */}
            <Link
              to="/guia"
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:border-teal-400 hover:shadow-md transition group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
                <Stethoscope className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{t.features.guide.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{t.features.guide.desc}</p>
            </Link>

            {/* Learn */}
            <Link
              to="/aprende"
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:border-teal-400 hover:shadow-md transition group"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-200 transition">
                <BookOpen className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{t.features.learn.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{t.features.learn.desc}</p>
            </Link>

            {/* Services */}
            <Link
              to="/servicios"
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:border-teal-400 hover:shadow-md transition group"
            >
              <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-rose-200 transition">
                <Heart className="w-6 h-6 text-rose-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{t.features.services.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{t.features.services.desc}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 px-4 sm:px-6 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 text-center mb-8">
            {t.trust.title}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-slate-50 rounded-lg p-4">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                <Heart className="w-4 h-4 text-teal-700" />
              </div>
              <p className="text-slate-700 font-medium">{t.trust.licensed}</p>
            </div>
            <div className="flex items-start gap-3 bg-slate-50 rounded-lg p-4">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                <Heart className="w-4 h-4 text-teal-700" />
              </div>
              <p className="text-slate-700 font-medium">{t.trust.independent}</p>
            </div>
            <div className="flex items-start gap-3 bg-slate-50 rounded-lg p-4">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                <Heart className="w-4 h-4 text-teal-700" />
              </div>
              <p className="text-slate-700 font-medium">{t.trust.bilingual}</p>
            </div>
            <div className="flex items-start gap-3 bg-slate-50 rounded-lg p-4">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                <Heart className="w-4 h-4 text-teal-700" />
              </div>
              <p className="text-slate-700 font-medium">{t.trust.secure}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Footer */}
      <section className="bg-slate-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <p className="text-lg font-bold text-red-300">{t.emergency}</p>
          <p className="text-slate-300">{t.crisis}</p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:911"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition"
            >
              <Phone className="w-5 h-5" />
              9-1-1
            </a>
            <a
              href="tel:18886727622"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-bold transition"
            >
              <Phone className="w-5 h-5" />
              1-888-672-7622
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
