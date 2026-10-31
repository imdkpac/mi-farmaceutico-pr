import React from 'react';
import { Link } from 'react-router-dom';
import { Pill, BookOpen, Stethoscope, Phone, ChevronRight, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import BuilderMedicamentos from '../components/medicamentos/BuilderMedicamentos';

const translations = {
  es: {
    hero: {
      badge: 'Herramienta #1 para pacientes en Puerto Rico',
      title: 'Su lista de medicamentos,',
      titleAccent: 'siempre a la mano',
      subtitle: 'Cree, guarde e imprima su lista de medicamentos. Llévela a sus citas médicas y a la farmacia.',
      cta: 'Empezar mi lista',
    },
    builder: {
      badge: 'Gratis y privado — su información nunca sale de su dispositivo',
      title: 'Cree su lista de medicamentos',
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
      title: 'Your medication list,',
      titleAccent: 'always at hand',
      subtitle: 'Create, save, and print your medication list. Take it to your doctor appointments and pharmacy.',
      cta: 'Start my list',
    },
    builder: {
      badge: 'Free and private — your data never leaves your device',
      title: 'Create Your Medication List',
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
    <div style={{ backgroundColor: 'var(--paper)' }}>
      {/* Hero — Pine Dark */}
      <section
        className="py-20 sm:py-28 px-6 sm:px-8"
        style={{ backgroundColor: 'var(--pine)' }}
      >
        <div className="max-w-4xl mx-auto">
          <span
            className="inline-block px-5 py-2 rounded-full font-body font-semibold text-sm mb-8"
            style={{ backgroundColor: 'var(--deep-pine)', color: 'var(--sage)' }}
          >
            {t.hero.badge}
          </span>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-medium text-[#F4EFE6] mb-6 leading-[1.05] tracking-tight">
            {t.hero.title}
            <br />
            <span style={{ color: 'var(--flamboyan)' }}>{t.hero.titleAccent}</span>
          </h1>

          <p className="text-lg sm:text-xl mb-10 max-w-2xl leading-relaxed" style={{ color: 'var(--sage)' }}>
            {t.hero.subtitle}
          </p>

          <button
            onClick={scrollToBuilder}
            className="btn-capsule btn-capsule-primary text-lg px-8 py-4"
          >
            {t.hero.cta}
            <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
          </button>
        </div>
      </section>

      {/* Medication Builder — Paper bg, builder inside deep-pine card for contrast */}
      <section id="medication-builder" className="py-16 px-6 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-body font-bold text-sm mb-5"
              style={{ backgroundColor: 'var(--sand)', color: 'var(--pine)' }}
            >
              <Pill className="w-4 h-4" strokeWidth={2.5} />
              {t.builder.badge}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#0F2E30]">
              {t.builder.title}
            </h2>
          </div>

          {/* Builder wrapped in a card for contrast */}
          <div
            className="p-6 sm:p-10"
            style={{ backgroundColor: 'var(--pine)', borderRadius: '28px' }}
          >
            <BuilderMedicamentos />
          </div>
        </div>
      </section>

      {/* Quick Access Cards — Sand surfaces on paper */}
      <section className="py-16 px-6 sm:px-8" style={{ backgroundColor: 'var(--sand)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#0F2E30] text-center mb-12">
            {t.features.title}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/"
              onClick={scrollToBuilder}
              className="group p-8 transition"
              style={{ backgroundColor: 'var(--paper)', borderRadius: '28px' }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-5 transition"
                style={{ backgroundColor: 'var(--pine)' }}
              >
                <Pill className="w-7 h-7 text-[#F4EFE6]" strokeWidth={2} />
              </div>
              <h3 className="font-display text-xl font-medium text-[#0F2E30] mb-2">{t.features.pill.title}</h3>
              <p className="font-body text-base leading-relaxed" style={{ color: 'var(--muted-ink)' }}>{t.features.pill.desc}</p>
            </Link>

            <Link
              to="/guia"
              className="group p-8 transition"
              style={{ backgroundColor: 'var(--paper)', borderRadius: '28px' }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-5 transition"
                style={{ backgroundColor: 'var(--deep-pine)' }}
              >
                <Stethoscope className="w-7 h-7 text-[#F4EFE6]" strokeWidth={2} />
              </div>
              <h3 className="font-display text-xl font-medium text-[#0F2E30] mb-2">{t.features.guide.title}</h3>
              <p className="font-body text-base leading-relaxed" style={{ color: 'var(--muted-ink)' }}>{t.features.guide.desc}</p>
            </Link>

            <Link
              to="/aprende"
              className="group p-8 transition"
              style={{ backgroundColor: 'var(--paper)', borderRadius: '28px' }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-5 transition"
                style={{ backgroundColor: 'var(--sage)' }}
              >
                <BookOpen className="w-7 h-7 text-[#0F2E30]" strokeWidth={2} />
              </div>
              <h3 className="font-display text-xl font-medium text-[#0F2E30] mb-2">{t.features.learn.title}</h3>
              <p className="font-body text-base leading-relaxed" style={{ color: 'var(--muted-ink)' }}>{t.features.learn.desc}</p>
            </Link>

            <Link
              to="/servicios"
              className="group p-8 transition"
              style={{ backgroundColor: 'var(--paper)', borderRadius: '28px' }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-5 transition"
                style={{ backgroundColor: 'var(--flamboyan)' }}
              >
                <Heart className="w-7 h-7 text-[#F4EFE6]" strokeWidth={2} />
              </div>
              <h3 className="font-display text-xl font-medium text-[#0F2E30] mb-2">{t.features.services.title}</h3>
              <p className="font-body text-base leading-relaxed" style={{ color: 'var(--muted-ink)' }}>{t.features.services.desc}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar — Paper bg, sand cards */}
      <section className="py-16 px-6 sm:px-8" style={{ backgroundColor: 'var(--paper)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#0F2E30] text-center mb-10">
            {t.trust.title}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[t.trust.licensed, t.trust.independent, t.trust.bilingual, t.trust.secure].map((text, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6"
                style={{ backgroundColor: 'var(--sand)', borderRadius: '28px' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'var(--pine)' }}
                >
                  <Heart className="w-5 h-5 text-[#F4EFE6]" strokeWidth={2} />
                </div>
                <p className="font-body font-medium text-base text-[#0F2E30] leading-relaxed pt-1">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Footer — Pine */}
      <section className="py-12 px-6 sm:px-8" style={{ backgroundColor: 'var(--pine)' }}>
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="font-display text-xl font-medium" style={{ color: 'var(--flamboyan)' }}>{t.emergency}</p>
          <p className="font-body text-base" style={{ color: 'var(--sage)' }}>{t.crisis}</p>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:911"
              className="btn-capsule"
              style={{ backgroundColor: 'var(--flamboyan)', color: 'var(--paper)' }}
            >
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              9-1-1
            </a>
            <a
              href="tel:18886727622"
              className="btn-capsule"
              style={{ backgroundColor: 'var(--deep-pine)', color: 'var(--paper)' }}
            >
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              1-888-672-7622
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
