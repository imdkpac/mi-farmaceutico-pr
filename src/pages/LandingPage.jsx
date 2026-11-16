import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, Mail, Shield, CheckCircle, Clipboard,
  Award, Globe, ChevronDown,
  MapPin,
  Calendar, ArrowUpRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import CheckoutModal from '../components/CheckoutModal';
import { refundCopy } from '../lib/refundPolicy';

/* ─── Translations ─── */
const translations = {
  en: {
    hero: {
      title: "Your Parents' Medication Guardian in ", location: 'Puerto Rico',
      subtitle: 'Professional oversight for diaspora families managing care from 1,000 miles away',
      ctaPrimary: 'Schedule Free Consultation',
      credCentro: 'Currently: Independent Contractor Pharmacist at Centro Médico de Puerto Rico',
    },
    trust: {
      licensed: 'Puerto Rico and Florida Licensed Pharmacist', hipaa: 'HIPAA Compliant',
      bilingual: 'English/Spanish Bilingual', focused: '100% Focused on Medication Safety'
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Three simple steps to professional medication oversight for your loved ones',
      step1: { title: 'You Share', desc: "Build your parent's medication list using our free, private tool. No account needed—everything stays on your device. Then share it with us during your consultation.", cta: 'Create Medication List', ctaSub: 'Free & private. No download required.' },
      step2: { title: 'Free 15-Min Consult', desc: "Schedule a free 15-minute video call. We'll review your parent's medication history, discuss concerns, and recommend the right service level. No commitment required.", cta: 'Schedule Free Consult' },
      step3: { title: 'You Relax', desc: "Choose the service that fits your family's needs. Start with one conversation, or keep a pharmacist looking at the medications every month.", cta: 'See the services' },
      serviceArea: 'Serving families in NY, FL, Chicago, and beyond. Core service area: San Juan Metro, Bayamón, Carolina, Guaynabo.'
    },
    pricing: {
      sectionTitle: 'Services',
      sectionSubtitle: 'Choose the service that fits your family.',
      monthlyTitle: 'Each month',
      monthlyIntro: 'A pharmacist stays with the medications.',
      onceTitle: 'One time',
      onceIntro: 'A visit, the days after the hospital, or one conversation.',
      perMonth: '/mo',
      oneTimeLabel: 'one-time',
      badges: {
        founding: 'Founding price',
        popular: 'Most chosen',
        once: 'One-time',
        sameDay: 'Same day',
      },
      subscriptions: {
        foundation: {
          name: 'Foundation',
          amount: '$110',
          period: '/mo',
          plusName: 'Foundation, two parents',
          plusAmount: '$165',
          plusNote: 'two parents',
          forWhom: 'For a stable set of medications. The follow-up is remote.',
          includes: [
            'A medication review every month',
            'Coordination with the pharmacy',
            'A written report for the family',
            'A reply the next business day',
          ],
          cta: 'Get started',
          plusCta: 'Get started, two parents',
        },
        enhanced: {
          name: 'Enhanced',
          amount: '$195',
          period: '/mo',
          forWhom: 'For several medications, more than one doctor, or a recent hospital stay.',
          includes: [
            'Monthly review, pharmacy coordination, and a family report',
            'A reply the same business day',
            'Two home visits a year',
            'Pillbox, storage, and how to use the devices',
            'The pharmacist talks with the prescribers',
          ],
          cta: 'Get started',
        },
        concierge: {
          name: 'Concierge',
          amount: '$325',
          period: '/mo',
          forWhom: 'For many medications, several specialists, or worry about memory.',
          includes: [
            'The same pharmacist, with a reply within 4 business hours',
            'A home visit every month',
            'A deeper review each quarter, and the yearly review',
            'Coordination with family, pharmacy, and doctors',
            'First in line after a hospital stay',
          ],
          spots: '3 openings through December 2026.',
          cta: 'Get started',
        },
      },
      freeConsult: {
        line: 'If you are not sure which service fits, there is a 15-minute conversation. It is free and does not ask for a card.',
        cta: 'Reserve',
      },
      oneTime: {
        transition: {
          name: 'Transition of care',
          amount: '$650',
          forWhom: 'For the first days at home after the hospital.',
          includes: [
            'Calls on days 1, 3, 7, and 14',
            'One home visit',
            'Compares the discharge list, the earlier medicines, and the pharmacy',
            'Looks for duplicates, expired medicines, and higher-risk ones',
            'A closing report and a plan for the family',
          ],
          cta: 'Reserve',
        },
        express: {
          name: 'Expedited transition',
          amount: '$850',
          forWhom: 'For a discharge that cannot wait.',
          includes: [
            'The first call and the home visit are scheduled the same day',
            'Calls on days 1, 3, 7, and 14',
            'Compares the discharge list, the earlier medicines, and the pharmacy',
            'Looks for duplicates, expired medicines, and higher-risk ones',
            'A closing report and a plan for the family',
          ],
          cta: 'Reserve',
        },
        homeVisit: {
          name: 'Home visit',
          amount: '$425',
          forWhom: 'To see the medications where they are taken.',
          includes: [
            'The visit is scheduled ahead of time',
            'Looks at how the medicines are stored and organized',
            'Leaves a written note of what needs attention',
          ],
          cta: 'Reserve',
        },
        audit: {
          name: 'Safety audit',
          amount: '$425',
          forWhom: 'To look at everything in the home.',
          includes: [
            'A visit at a time you agree on',
            'Every prescription, non-prescription medicine, and supplement',
            'Interactions, duplicates, and fall risk',
            'A short summary of what was found',
          ],
          cta: 'Reserve',
        },
        consultation: {
          name: '1-hour consultation',
          amount: '$70',
          forWhom: 'One sitting, with the list and the questions.',
          includes: [
            'One hour with the pharmacist',
            'Goes through the medications one by one',
            'You leave with the questions answered',
          ],
          cta: 'Reserve',
        },
      },
      b2b: {
        title: 'For hospitals and homes',
        subtitle: 'A pharmacist for a group of patients.',
        transition10: {
          name: '10-patient transition', price: '$3,000', period: '/mo',
          desc: 'Up to 10 patients leaving the hospital each month, with follow-up and a report.',
          cta: 'Write to us',
        },
        review10: {
          name: '10-resident review', price: '$2,000', period: '/mo',
          desc: 'A monthly medication review for up to 10 residents.',
          cta: 'Write to us',
        },
        custom: 'If the group is a different size, write and we will talk it through.',
        cta: 'Write to us',
      },
      refund: refundCopy('en').refund,
    },
    trustSection: {
      title: 'Why Families Trust Us',
      independent: { title: 'Independent Practice', desc: "No insurance companies. No conflicts of interest. Clinical decisions based solely on your parent's needs." },
      licensed: { title: 'Licensed & Experienced', desc: 'Christian Portalatín is a Puerto Rico-licensed pharmacist with specialized training in medication therapy management, HIV care, and nuclear pharmacy. Former Nuclear Pharmacist at Cardinal Health PR. Currently serving at Centro Médico de Puerto Rico.' },
      diaspora: { title: 'Diaspora-Focused', desc: 'We speak your language—literally. English for you, Spanish for island providers. We understand the 1,000-mile worry.' },
    },
    scope: {
      title: "What We Do (And Don't Do)",
      do: { title: 'What We Do', items: ['Medication reconciliation and safety monitoring', 'Pharmacy and prescriber coordination', 'In-home medication organization (Enhanced/Concierge)', 'Family communication and monthly reporting', 'Post-hospitalization transition support'] },
      dont: { title: "What We Don't Do", items: ['Emergency or after-hours medical care (call 911)', 'Diagnose conditions or prescribe medications', "Replace your parent's physician", 'Provide caregiving or daily living assistance', 'Bill insurance (keeps us independent)'] }
    },
    faq: { title: 'Frequently Asked Questions' },
    finalCta: { title: 'Ready to Get Started?', subtitle: "Schedule a free 15-minute consultation to discuss your parent's medication needs", cta: 'Schedule Free Consultation' },
    footer: { contact: 'Contact', quickLinks: 'Quick Links', legal: 'Legal', copyright: '© 2026 Lucesnegras LLC', license: 'Licensed Clinical Pharmacy Practice in Puerto Rico', creds: 'Professional pharmaceutical services by Christian Alexis Portalatín Cordero, Pharm.D. | Puerto Rico & Florida Licensed Pharmacist' },
  },
  es: {
    hero: {
      title: 'El Guardián de Medicamentos de Tus Padres en ', location: 'Puerto Rico',
      subtitle: 'Supervisión profesional para familias de la diáspora manejando cuidado desde 1,000 millas de distancia',
      ctaPrimary: 'Agendar Consulta Gratis',
      credCentro: 'Actualmente: Farmacéutico Contratista Independiente en el Centro Médico de Puerto Rico',
    },
    trust: {
      licensed: 'Farmacéutico Licenciado en Puerto Rico y Florida', hipaa: 'Cumplimiento HIPAA',
      bilingual: 'Bilingüe Inglés/Español', focused: '100% Enfocado en Seguridad de Medicamentos'
    },
    howItWorks: {
      title: 'Cómo Funciona',
      subtitle: 'Tres pasos simples para obtener supervisión profesional de medicamentos para tus seres queridos',
      step1: { title: 'Tú Compartes', desc: 'Crea la lista de medicamentos de tu padre/madre usando nuestra herramienta gratuita y privada. No necesitas cuenta—todo se queda en tu dispositivo. Luego compártela con nosotros durante tu consulta.', cta: 'Crear Lista de Medicamentos', ctaSub: 'Gratis y privada. Sin descarga.' },
      step2: { title: 'Consulta Gratis 15 Min', desc: 'Agenda una videollamada gratuita de 15 minutos. Revisamos el historial de medicamentos de tu padre/madre, discutimos preocupaciones, y recomendamos el nivel de servicio adecuado. Sin compromiso.', cta: 'Agendar Consulta Gratis' },
      step3: { title: 'Tú descansas', desc: 'Elige el servicio que le hace falta a tu familia. Empieza con una conversación, o deja que el farmacéutico mire los medicamentos cada mes.', cta: 'Ver los servicios' },
      serviceArea: 'Sirviendo familias en NY, FL, Chicago y más. Área de servicio principal: Metro San Juan, Bayamón, Carolina, Guaynabo.'
    },
    pricing: {
      sectionTitle: 'Servicios',
      sectionSubtitle: 'Elige el servicio que le hace falta a tu familia.',
      monthlyTitle: 'Cada mes',
      monthlyIntro: 'Un farmacéutico sigue los medicamentos.',
      onceTitle: 'Una sola vez',
      onceIntro: 'Una visita, los días después del hospital, o una conversación.',
      perMonth: '/mes',
      oneTimeLabel: 'pago único',
      badges: {
        founding: 'Precio fundador',
        popular: 'Más elegido',
        once: 'Pago único',
        sameDay: 'Mismo día',
      },
      subscriptions: {
        foundation: {
          name: 'Fundación',
          amount: '$110',
          period: '/mes',
          plusName: 'Fundación, dos padres',
          plusAmount: '$165',
          plusNote: 'dos padres',
          forWhom: 'Para un tratamiento estable. El seguimiento es a distancia.',
          includes: [
            'Revisión de los medicamentos cada mes',
            'Coordinación con la farmacia',
            'Un informe para la familia',
            'Respuesta al día siguiente laborable',
          ],
          cta: 'Empezar',
          plusCta: 'Empezar, dos padres',
        },
        enhanced: {
          name: 'Mejorado',
          amount: '$195',
          period: '/mes',
          forWhom: 'Para varios medicamentos, más de un médico, o una salida reciente del hospital.',
          includes: [
            'Revisión mensual, farmacia e informe a la familia',
            'Respuesta el mismo día laborable',
            'Dos visitas al año en la casa',
            'Pastillero, almacenamiento y cómo usar los dispositivos',
            'Habla con los médicos que recetan',
          ],
          cta: 'Empezar',
        },
        concierge: {
          name: 'Concierge',
          amount: '$325',
          period: '/mes',
          forWhom: 'Para muchos medicamentos, varios especialistas, o preocupación por la memoria.',
          includes: [
            'El mismo farmacéutico, con respuesta en 4 horas laborables',
            'Una visita en la casa cada mes',
            'Una revisión más a fondo cada trimestre, y la revisión del año',
            'Coordinación con la familia, la farmacia y los médicos',
            'Agenda primero después de una hospitalización',
          ],
          spots: 'Hay 3 espacios hasta diciembre de 2026.',
          cta: 'Empezar',
        },
      },
      freeConsult: {
        line: 'Si todavía no sabes cuál servicio encaja, hay una conversación de 15 minutos. Es gratis y no pide tarjeta.',
        cta: 'Reservar',
      },
      oneTime: {
        transition: {
          name: 'Transición de cuidado',
          amount: '$650',
          forWhom: 'Para los primeros días en la casa después del hospital.',
          includes: [
            'Llamadas los días 1, 3, 7 y 14',
            'Una visita en la casa',
            'Compara el alta, los medicamentos de antes y la farmacia',
            'Busca duplicados, medicamentos vencidos y los de más riesgo',
            'Un informe de cierre y un plan para la familia',
          ],
          cta: 'Reservar',
        },
        express: {
          name: 'Transición expedita',
          amount: '$850',
          forWhom: 'Para un alta que no puede esperar.',
          includes: [
            'La primera llamada y la visita se agendan el mismo día',
            'Llamadas los días 1, 3, 7 y 14',
            'Compara el alta, los medicamentos de antes y la farmacia',
            'Busca duplicados, medicamentos vencidos y los de más riesgo',
            'Un informe de cierre y un plan para la familia',
          ],
          cta: 'Reservar',
        },
        homeVisit: {
          name: 'Visita en el hogar',
          amount: '$425',
          forWhom: 'Para ver los medicamentos donde se toman.',
          includes: [
            'La visita se acuerda antes',
            'Mira cómo están guardados y organizados',
            'Deja por escrito lo que hay que atender',
          ],
          cta: 'Reservar',
        },
        audit: {
          name: 'Auditoría de seguridad',
          amount: '$425',
          forWhom: 'Para revisar todo lo que hay en la casa.',
          includes: [
            'Una visita en un horario que se acuerda',
            'Cada receta, lo que se compra sin receta y los suplementos',
            'Interacciones, duplicados y riesgo de caídas',
            'Un resumen de lo que encontró',
          ],
          cta: 'Reservar',
        },
        consultation: {
          name: 'Consulta de 1 hora',
          amount: '$70',
          forWhom: 'Para sentarte una vez, con la lista y las preguntas.',
          includes: [
            'Una hora con el farmacéutico',
            'Repasa los medicamentos uno por uno',
            'Sales con las dudas aclaradas',
          ],
          cta: 'Reservar',
        },
      },
      b2b: {
        title: 'Para hospitales y hogares',
        subtitle: 'Un farmacéutico para un grupo de pacientes.',
        transition10: {
          name: 'Transición para 10 pacientes', price: '$3,000', period: '/mes',
          desc: 'Hasta 10 pacientes que salen del hospital cada mes, con seguimiento e informe.',
          cta: 'Escribir',
        },
        review10: {
          name: 'Revisión para 10 residentes', price: '$2,000', period: '/mes',
          desc: 'Revisión mensual de medicamentos para hasta 10 residentes.',
          cta: 'Escribir',
        },
        custom: 'Si el grupo es de otro tamaño, escribe y lo vemos.',
        cta: 'Escribir',
      },
      refund: refundCopy('es').refund,
    },
    trustSection: {
      title: 'Por Qué las Familias Confían en Nosotros',
      independent: { title: 'Práctica Independiente', desc: 'Sin compañías de seguros. Sin conflictos de interés. Decisiones clínicas basadas únicamente en las necesidades de tu padre/madre.' },
      licensed: { title: 'Licenciado y Experimentado', desc: 'Christian Portalatín es un farmacéutico licenciado en Puerto Rico con entrenamiento especializado en manejo de terapia de medicamentos, cuidado de VIH, y farmacia nuclear. Ex Farmacéutico Nuclear en Cardinal Health PR. Actualmente sirviendo en el Centro Médico de Puerto Rico.' },
      diaspora: { title: 'Enfocado en la Diáspora', desc: 'Hablamos tu idioma—literalmente. Inglés para ti, español para proveedores en la isla. Entendemos la preocupación de las 1,000 millas.' },
    },
    scope: {
      title: 'Qué Hacemos (Y No Hacemos)',
      do: { title: 'Qué Hacemos', items: ['Reconciliación de medicamentos y monitoreo de seguridad', 'Coordinación de farmacia y prescriptores', 'Organización de medicamentos en casa (Mejorado/Concierge)', 'Comunicación familiar y reportes mensuales', 'Apoyo de transición post-hospitalización'] },
      dont: { title: 'Qué No Hacemos', items: ['Cuidado médico de emergencia o fuera de horario (llama al 911)', 'Diagnosticar condiciones o prescribir medicamentos', 'Reemplazar al médico de tu padre/madre', 'Proveer cuidado o asistencia de vida diaria', 'Facturar seguros (nos mantiene independientes)'] }
    },
    faq: { title: 'Preguntas Frecuentes' },
    finalCta: { title: '¿Listo para Empezar?', subtitle: 'Agenda una consulta gratuita de 15 minutos para discutir las necesidades de medicamentos de tu padre/madre', cta: 'Agendar Consulta Gratis' },
    footer: { contact: 'Contacto', quickLinks: 'Enlaces Rápidos', legal: 'Legal', copyright: '© 2026 Lucesnegras LLC', license: 'Práctica de Farmacia Clínica Licenciada en Puerto Rico', creds: 'Servicios farmacéuticos profesionales por Christian Alexis Portalatín Cordero, Pharm.D. | Farmacéutico Licenciado en Puerto Rico y Florida' },
  }
};

function Pill({ children }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 font-body text-base"
      style={{ backgroundColor: 'var(--sand)', color: 'var(--pine)' }}
    >
      {children}
    </span>
  );
}

function PriceTag({ amount, period }) {
  return (
    <p className="flex items-baseline gap-2">
      <span className="font-display text-4xl sm:text-5xl font-bold leading-none text-[#0F2E30]">{amount}</span>
      <span className="font-body text-base text-[#0F2E30]">{period}</span>
    </p>
  );
}

function PlanCard({ badges, name, forWhom, prices, includes, note, children }) {
  return (
    <article className="p-6 sm:p-8 flex flex-col h-full" style={{ backgroundColor: 'var(--paper)', borderRadius: '28px' }}>
      {badges.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {badges.map((label) => <Pill key={label}>{label}</Pill>)}
        </div>
      )}
      <h3 className="font-display text-3xl font-medium text-[#0F2E30]">{name}</h3>
      <p className="font-body text-base mt-2 leading-snug text-[#0F2E30]">{forWhom}</p>
      <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">{prices}</div>
      <ul className="mt-5 space-y-2">
        {includes.map((item) => (
          <li key={item} className="flex items-start gap-3 font-body text-base leading-snug text-[#0F2E30]">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--pine)' }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {note && <p className="font-body text-base mt-3 text-[#0F2E30]">{note}</p>}
      <div className="mt-auto pt-6 space-y-3">{children}</div>
    </article>
  );
}

const CALENDLY_URL = 'https://calendly.com/mifarmaceuticoenpr';

function openCalendly() {
  window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
}

export default function LandingPage() {
  const { lang } = useLanguage();
  const [faqOpen, setFaqOpen] = useState(null);
  const [checkoutPlan, setCheckoutPlan] = useState(null);
  const t = translations[lang];

  const checkoutCatalog = {
    foundation: {
      key: 'foundation',
      mode: 'subscription',
      name: t.pricing.subscriptions.foundation.name,
      price: t.pricing.subscriptions.foundation.amount,
      period: t.pricing.subscriptions.foundation.period,
    },
    foundationPlus: {
      key: 'foundationPlus',
      mode: 'subscription',
      name: t.pricing.subscriptions.foundation.plusName,
      price: t.pricing.subscriptions.foundation.plusAmount,
      period: t.pricing.subscriptions.foundation.period,
    },
    enhanced: {
      key: 'enhanced',
      mode: 'subscription',
      name: t.pricing.subscriptions.enhanced.name,
      price: t.pricing.subscriptions.enhanced.amount,
      period: t.pricing.subscriptions.enhanced.period,
    },
    concierge: {
      key: 'concierge',
      mode: 'subscription',
      name: t.pricing.subscriptions.concierge.name,
      price: t.pricing.subscriptions.concierge.amount,
      period: t.pricing.subscriptions.concierge.period,
    },
    consult: {
      key: 'consult',
      mode: 'payment',
      name: t.pricing.oneTime.consultation.name,
      price: t.pricing.oneTime.consultation.amount,
      period: '',
    },
    safetyAudit: {
      key: 'safetyAudit',
      mode: 'payment',
      name: t.pricing.oneTime.audit.name,
      price: t.pricing.oneTime.audit.amount,
      period: '',
    },
    homeVisit: {
      key: 'homeVisit',
      mode: 'payment',
      name: t.pricing.oneTime.homeVisit.name,
      price: t.pricing.oneTime.homeVisit.amount,
      period: '',
    },
    transition: {
      key: 'transition',
      mode: 'payment',
      name: t.pricing.oneTime.transition.name,
      price: t.pricing.oneTime.transition.amount,
      period: '',
    },
    transitionExpress: {
      key: 'transitionExpress',
      mode: 'payment',
      name: t.pricing.oneTime.express.name,
      price: t.pricing.oneTime.express.amount,
      period: '',
    },
  };
  const checkoutSelection = checkoutCatalog[checkoutPlan] || null;

  const faqs = [
    { q: lang === 'en' ? "Do you visit my parent's home unannounced?" : "¿Visitas la casa de mi padre/madre sin anunciar?", a: lang === 'en' ? "Never. All visits are scheduled in advance with your parent (and you, if you'd like to join virtually). We respect their privacy and independence." : "Nunca. Todas las visitas se agendan con anticipación con tu padre/madre (y contigo, si deseas unirte virtualmente). Respetamos su privacidad e independencia." },
    { q: lang === 'en' ? "How do you communicate with my parent's doctor?" : "¿Cómo te comunicas con el médico de mi padre/madre?", a: lang === 'en' ? "We use SBAR (Situation-Background-Assessment-Recommendation) format to provide clear, clinical recommendations. We don't replace the physician—we support their care plan with medication expertise." : "Usamos el formato SBAR (Situación-Antecedentes-Evaluación-Recomendación) para proveer recomendaciones clínicas claras. No reemplazamos al médico—apoyamos su plan de cuidado con experiencia en medicamentos." },
    { q: lang === 'en' ? "What if my parent lives outside San Juan?" : "¿Qué pasa si mi padre/madre vive fuera de San Juan?", a: lang === 'en' ? "We serve the greater San Juan metro area (Bayamón, Carolina, Guaynabo, Trujillo Alto) at standard rates. We can travel to Dorado, Caguas, and Arecibo with a travel surcharge. For areas outside these, we recommend starting with our Remote Foundation tier." : "Servimos el área metropolitana de San Juan (Bayamón, Carolina, Guaynabo, Trujillo Alto) a tarifas estándar. Podemos viajar a Dorado, Caguas y Arecibo con tarifa de viaje adicional. Para áreas fuera de estas, recomendamos comenzar con nuestro nivel Fundación Remoto." },
    { q: lang === 'en' ? 'How do I cancel a subscription?' : '¿Cómo cancelo una suscripción?', a: lang === 'en' ? "Subscriptions run month to month. You can cancel with 30 days' written notice." : 'Las suscripciones son de mes a mes. Puedes cancelar con un aviso por escrito de 30 días.' },
    { q: lang === 'en' ? "Do you accept insurance?" : "¿Aceptan seguro?", a: lang === 'en' ? "No, we operate on a cash-pay basis. This keeps us independent and ensures our clinical decisions are based solely on your parent's needs, without insurance company interference." : "No, operamos con pago en efectivo. Esto nos mantiene independientes y asegura que nuestras decisiones clínicas se basen únicamente en las necesidades de tu padre/madre, sin interferencia de compañías de seguros." },
    { q: lang === 'en' ? "How quickly can you start?" : "¿Qué tan rápido pueden empezar?", a: lang === 'en' ? "Most families can begin within 3-5 business days after the initial consultation. For urgent situations like hospital discharges, we offer expedited Transition of Care services." : "La mayoría de familias pueden comenzar dentro de 3-5 días hábiles después de la consulta inicial. Para situaciones urgentes como altas hospitalarias, ofrecemos servicios de Transición de Cuidado acelerados." }
  ];

  return (
    <div style={{ backgroundColor: 'var(--paper)' }}>
      <CheckoutModal
        isOpen={Boolean(checkoutSelection)}
        onClose={() => setCheckoutPlan(null)}
        plan={checkoutSelection}
      />

      {/* Hero — Pine Dark */}
      <section className="py-20 px-6 sm:px-8" style={{ backgroundColor: 'var(--pine)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-[#F4EFE6] leading-[1.05] tracking-tight mb-6">
                {t.hero.title}<span style={{ color: 'var(--flamboyan)' }}>{t.hero.location}</span>
              </h1>
              <p className="text-xl mb-8" style={{ color: 'var(--sage)' }}>{t.hero.subtitle}</p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {Object.values(t.trust).map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--sage)' }} strokeWidth={2.5} />
                    <span className="text-base" style={{ color: 'var(--sage)' }}>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button type="button" data-action="calendly" data-plan="hero-consult" onClick={openCalendly} className="btn-capsule btn-capsule-primary text-lg px-8 py-4 inline-flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" strokeWidth={2.5} />
                  {t.hero.ctaPrimary}
                </button>
              </div>
            </div>

            {/* Profile card */}
            <div className="p-8 sm:p-10" style={{ backgroundColor: 'var(--deep-pine)', borderRadius: '28px' }}>
              <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden" style={{ backgroundColor: 'var(--pine)' }}>
                <img src="/christian-portalatin.jpg" alt="Christian Alexis Portalatín Cordero, Pharm.D." className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <div className="text-center">
                <h3 className="font-display text-2xl font-medium text-[#F4EFE6] mb-1">Christian Alexis Portalatín Cordero, Pharm.D.</h3>
                <p className="font-body font-medium mb-4" style={{ color: 'var(--sage)' }}>Clinical Pharmacist</p>
                <div className="p-3 mb-4 rounded-xl" style={{ backgroundColor: 'var(--flamboyan)' }}>
                  <p className="text-base font-semibold text-[#F4EFE6]">{t.hero.credCentro}</p>
                </div>
                <div className="text-left space-y-2 text-base" style={{ color: 'var(--sage)' }}>
                  <p>✓ Puerto Rico & Florida Licensed Pharmacist</p>
                  <p>✓ Community and Hospital Pharmacy Experience</p>
                  <p>✓ Nova Southeastern University Pharm.D. (2020)</p>
                  <p>✓ Former Clinical Staff Pharmacist at CPS</p>
                  <p>✓ Former Nuclear Pharmacist at Cardinal Health PR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — Paper */}
      <section className="py-20 px-6 sm:px-8" style={{ backgroundColor: 'var(--paper)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-medium text-[#0F2E30] mb-4">{t.howItWorks.title}</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--muted-ink)' }}>{t.howItWorks.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { step: lang === 'es' ? 'Paso 1' : 'Step 1', icon: Phone, color: 'var(--pine)', t: t.howItWorks.step1, action: 'builder' },
              { step: lang === 'es' ? 'Paso 2' : 'Step 2', icon: Clipboard, color: 'var(--deep-pine)', t: t.howItWorks.step2, action: 'calendly' },
              { step: lang === 'es' ? 'Paso 3' : 'Step 3', icon: Shield, color: 'var(--sage)', t: t.howItWorks.step3, action: 'scroll' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-8 flex flex-col" style={{ backgroundColor: 'var(--sand)', borderRadius: '28px' }}>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: item.color }}>
                    <Icon className="w-10 h-10 text-[#F4EFE6]" strokeWidth={2} />
                  </div>
                  <div className="font-body font-bold text-lg mb-2 text-center" style={{ color: 'var(--flamboyan)' }}>{item.step}</div>
                  <h3 className="font-display text-2xl font-medium text-[#0F2E30] mb-4 text-center">{item.t.title}</h3>
                  <p className="font-body text-base text-center mb-6 flex-1" style={{ color: 'var(--muted-ink)' }}>{item.t.desc}</p>
                  <div className="mt-auto text-center">
                    {item.action === 'builder' && (
                      <a href="/builder.html" className="btn-capsule btn-capsule-primary w-full inline-flex items-center justify-center gap-2 text-base px-6 py-3">
                        <Clipboard className="w-4 h-4 flex-shrink-0" strokeWidth={2.5} />
                        {item.t.cta}
                      </a>
                    )}
                    {item.action === 'calendly' && (
                      <button type="button" data-action="calendly" data-plan="step2-consult" onClick={openCalendly} className="btn-capsule btn-capsule-primary w-full inline-flex items-center justify-center gap-2 text-base px-6 py-3">
                        <Calendar className="w-4 h-4 flex-shrink-0" strokeWidth={2.5} />
                        {item.t.cta}
                      </button>
                    )}
                    {item.action === 'scroll' && (
                      <a href="#services" className="btn-capsule btn-capsule-primary w-full inline-flex items-center justify-center gap-2 text-base px-6 py-3">
                        <ArrowUpRight className="w-4 h-4 flex-shrink-0" strokeWidth={2.5} />
                        {item.t.cta}
                      </a>
                    )}
                    <p className="text-base mt-3 min-h-[1.25rem]" style={{ color: 'var(--muted-ink)' }}>{item.t.ctaSub || ''}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center p-6" style={{ backgroundColor: 'var(--sand)', borderRadius: '28px' }}>
            <p className="font-body" style={{ color: 'var(--muted-ink)' }}>
              <MapPin className="w-5 h-5 inline mr-2" style={{ color: 'var(--pine)' }} strokeWidth={2.5} />
              {t.howItWorks.serviceArea}
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 px-6 sm:px-8" style={{ backgroundColor: 'var(--sand)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-8">
            <h2 className="font-display text-4xl font-medium text-[#0F2E30] mb-3">{t.pricing.sectionTitle}</h2>
            <p className="font-body text-xl text-[#0F2E30]">{t.pricing.sectionSubtitle}</p>
          </div>

          <div className="mb-8 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" style={{ backgroundColor: 'var(--paper)', borderRadius: '28px' }}>
            <p className="font-body text-base text-[#0F2E30]">{t.pricing.freeConsult.line}</p>
            <button type="button" data-action="calendly" data-plan="free-consult" onClick={openCalendly} className="btn-capsule btn-capsule-primary shrink-0">
              {t.pricing.freeConsult.cta}
            </button>
          </div>

          <h3 className="font-display text-3xl font-medium text-[#0F2E30] mb-2">{t.pricing.monthlyTitle}</h3>
          <p className="font-body text-base mb-6 text-[#0F2E30]">{t.pricing.monthlyIntro}</p>
          <div className="grid lg:grid-cols-3 gap-6 mb-14">
            <PlanCard
              badges={[t.pricing.badges.founding]}
              name={t.pricing.subscriptions.foundation.name}
              forWhom={t.pricing.subscriptions.foundation.forWhom}
              prices={(
                <>
                  <PriceTag amount={t.pricing.subscriptions.foundation.amount} period={t.pricing.perMonth} />
                  <PriceTag amount={t.pricing.subscriptions.foundation.plusAmount} period={`${t.pricing.perMonth} · ${t.pricing.subscriptions.foundation.plusNote}`} />
                </>
              )}
              includes={t.pricing.subscriptions.foundation.includes}
            >
              <button type="button" data-action="checkout" data-plan="foundation" onClick={() => setCheckoutPlan('foundation')} className="btn-capsule btn-capsule-primary w-full">
                {t.pricing.subscriptions.foundation.cta}
              </button>
              <button type="button" data-action="checkout" data-plan="foundationPlus" onClick={() => setCheckoutPlan('foundationPlus')} className="btn-capsule btn-capsule-outline w-full">
                {t.pricing.subscriptions.foundation.plusCta}
              </button>
            </PlanCard>
            <PlanCard
              badges={[t.pricing.badges.popular, t.pricing.badges.founding]}
              name={t.pricing.subscriptions.enhanced.name}
              forWhom={t.pricing.subscriptions.enhanced.forWhom}
              prices={<PriceTag amount={t.pricing.subscriptions.enhanced.amount} period={t.pricing.perMonth} />}
              includes={t.pricing.subscriptions.enhanced.includes}
            >
              <button type="button" data-action="checkout" data-plan="enhanced" onClick={() => setCheckoutPlan('enhanced')} className="btn-capsule btn-capsule-primary w-full">
                {t.pricing.subscriptions.enhanced.cta}
              </button>
            </PlanCard>
            <PlanCard
              badges={[t.pricing.badges.founding]}
              name={t.pricing.subscriptions.concierge.name}
              forWhom={t.pricing.subscriptions.concierge.forWhom}
              prices={<PriceTag amount={t.pricing.subscriptions.concierge.amount} period={t.pricing.perMonth} />}
              includes={t.pricing.subscriptions.concierge.includes}
              note={t.pricing.subscriptions.concierge.spots}
            >
              <button type="button" data-action="checkout" data-plan="concierge" onClick={() => setCheckoutPlan('concierge')} className="btn-capsule btn-capsule-primary w-full">
                {t.pricing.subscriptions.concierge.cta}
              </button>
            </PlanCard>
          </div>

          <h3 className="font-display text-3xl font-medium text-[#0F2E30] mb-2">{t.pricing.onceTitle}</h3>
          <p className="font-body text-base mb-6 text-[#0F2E30]">{t.pricing.onceIntro}</p>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-14">
            {[
              ['transition', t.pricing.oneTime.transition, [t.pricing.badges.once, t.pricing.badges.founding]],
              ['transitionExpress', t.pricing.oneTime.express, [t.pricing.badges.sameDay, t.pricing.badges.founding]],
              ['homeVisit', t.pricing.oneTime.homeVisit, [t.pricing.badges.once, t.pricing.badges.founding]],
              ['safetyAudit', t.pricing.oneTime.audit, [t.pricing.badges.once, t.pricing.badges.founding]],
              ['consult', t.pricing.oneTime.consultation, [t.pricing.badges.once, t.pricing.badges.founding]],
            ].map(([key, service, badges]) => (
              <PlanCard
                key={key}
                badges={badges}
                name={service.name}
                forWhom={service.forWhom}
                prices={<PriceTag amount={service.amount} period={t.pricing.oneTimeLabel} />}
                includes={service.includes}
              >
                <button type="button" data-action="checkout" data-plan={key} onClick={() => setCheckoutPlan(key)} className="btn-capsule btn-capsule-primary w-full">
                  {service.cta}
                </button>
              </PlanCard>
            ))}
          </div>

          <h3 className="font-display text-3xl font-medium text-[#0F2E30] mb-2">{t.pricing.b2b.title}</h3>
          <p className="font-body text-base mb-6 text-[#0F2E30]">{t.pricing.b2b.subtitle}</p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {[t.pricing.b2b.transition10, t.pricing.b2b.review10].map((item) => (
              <article key={item.name} className="p-6 sm:p-8 flex flex-col" style={{ backgroundColor: 'var(--paper)', borderRadius: '28px' }}>
                <h4 className="font-display text-3xl font-medium text-[#0F2E30]">{item.name}</h4>
                <p className="font-body text-base mt-2 text-[#0F2E30]">{item.desc}</p>
                <div className="mt-4 mb-6">
                  <PriceTag amount={item.price} period={item.period} />
                </div>
                <button type="button" data-action="calendly" data-plan={item === t.pricing.b2b.transition10 ? 'b2b-transition' : 'b2b-review'} onClick={openCalendly} className="btn-capsule btn-capsule-outline w-full mt-auto">
                  {item.cta}
                </button>
              </article>
            ))}
          </div>
          <p className="font-body text-base mb-4 text-[#0F2E30]">{t.pricing.b2b.custom}</p>
          <a href="mailto:portalatin@mifarmaceuticopr.com" className="btn-capsule inline-flex items-center gap-2 mb-10" style={{ backgroundColor: 'var(--pine)', color: 'var(--paper)' }}>
            <Mail className="w-5 h-5" strokeWidth={2.5} />
            {t.pricing.b2b.cta}
          </a>

          {/* PENDING LEGAL REVIEW by Natalie Ramos. See src/lib/refundPolicy.js. Stated once on this page. */}
          <p className="font-body text-base max-w-3xl text-[#0F2E30]">{t.pricing.refund}</p>
        </div>
      </section>

      {/* Trust — Sand */}
      <section className="py-20 px-6 sm:px-8" style={{ backgroundColor: 'var(--sand)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16"><h2 className="font-display text-4xl font-medium text-[#0F2E30]">{t.trustSection.title}</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, t: t.trustSection.independent, bg: 'var(--pine)' },
              { icon: Award, t: t.trustSection.licensed, bg: 'var(--deep-pine)' },
              { icon: Globe, t: t.trustSection.diaspora, bg: 'var(--sage)' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-8" style={{ backgroundColor: 'var(--paper)', borderRadius: '28px' }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: item.bg }}>
                    <Icon className="w-8 h-8 text-[#F4EFE6]" strokeWidth={2} />
                  </div>
                  <h3 className="font-display text-2xl font-medium text-[#0F2E30] mb-4">{item.t.title}</h3>
                  <p className="font-body" style={{ color: 'var(--muted-ink)' }}>{item.t.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scope — Paper */}
      <section className="py-20 px-6 sm:px-8" style={{ backgroundColor: 'var(--paper)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-medium text-[#0F2E30] text-center mb-12">{t.scope.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8" style={{ backgroundColor: 'var(--sand)', borderRadius: '28px' }}>
              <h3 className="font-display text-2xl font-medium text-[#0F2E30] mb-6">{t.scope.do.title}</h3>
              <ul className="space-y-3">
                {t.scope.do.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--sage)' }} strokeWidth={2.5} />
                    <span className="font-body" style={{ color: 'var(--muted-ink)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8" style={{ backgroundColor: 'var(--sand)', borderRadius: '28px' }}>
              <h3 className="font-display text-2xl font-medium text-[#0F2E30] mb-6">{t.scope.dont.title}</h3>
              <ul className="space-y-3">
                {t.scope.dont.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-bold text-lg leading-none" style={{ color: 'var(--flamboyan)' }}>×</span>
                    <span className="font-body" style={{ color: 'var(--muted-ink)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — Sand */}
      <section className="py-20 px-6 sm:px-8" style={{ backgroundColor: 'var(--sand)' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-medium text-[#0F2E30] text-center mb-12">{t.faq.title}</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="overflow-hidden" style={{ backgroundColor: 'var(--paper)', borderRadius: '28px' }}>
                <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                  <span className="font-display text-lg font-medium text-[#0F2E30] pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${faqOpen === i ? 'rotate-180' : ''}`} style={{ color: 'var(--muted-ink)' }} strokeWidth={2.5} />
                </button>
                {faqOpen === i && (
                  <div className="px-6 pb-6"><p className="font-body leading-relaxed" style={{ color: 'var(--muted-ink)' }}>{faq.a}</p></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — Pine */}
      <section className="py-20 px-6 sm:px-8" style={{ backgroundColor: 'var(--pine)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl font-medium text-[#F4EFE6] mb-4">{t.finalCta.title}</h2>
          <p className="text-xl mb-8" style={{ color: 'var(--sage)' }}>{t.finalCta.subtitle}</p>
          <button type="button" data-action="calendly" data-plan="final-consult" onClick={openCalendly} className="btn-capsule inline-flex items-center gap-2" style={{ backgroundColor: 'var(--paper)', color: 'var(--pine)' }}>
            <Calendar className="w-5 h-5" strokeWidth={2.5} />
            {t.finalCta.cta}
          </button>
        </div>
      </section>

      {/* Footer — Deep Pine */}
      <footer className="py-12 px-6 sm:px-8" style={{ backgroundColor: 'var(--deep-pine)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-display text-lg font-medium text-[#F4EFE6] mb-4">{t.footer.contact}</h4>
              <div className="space-y-2 font-body text-base" style={{ color: 'var(--sage)' }}>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" strokeWidth={2.5} />(787) 667-6560</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" strokeWidth={2.5} />portalatin@mifarmaceuticopr.com</p>
              </div>
            </div>
            <div>
              <h4 className="font-display text-lg font-medium text-[#F4EFE6] mb-4">{t.footer.quickLinks}</h4>
              <div className="space-y-2 font-body text-base" style={{ color: 'var(--sage)' }}>
                <a href="/#how-it-works" className="block hover:text-[#F4EFE6] transition">{t.howItWorks.title}</a>
                <a href="/#services" className="block hover:text-[#F4EFE6] transition">{t.pricing.sectionTitle}</a>
              </div>
            </div>
            <div>
              <h4 className="font-display text-lg font-medium text-[#F4EFE6] mb-4">{t.footer.legal}</h4>
              <p className="font-body text-base mb-2" style={{ color: 'var(--sage)' }}>{t.footer.license}</p>
              <Link to="/acuerdo-de-servicio" className="font-body text-base block hover:text-[#F4EFE6] transition" style={{ color: 'var(--sage)' }}>
                {lang === 'es' ? 'Acuerdo de servicio' : 'Service agreement'}
              </Link>
            </div>
          </div>
          <div className="border-t pt-8 text-center" style={{ borderColor: 'var(--pine)' }}>
            <p className="font-body text-base mb-2" style={{ color: 'var(--sage)' }}>{t.footer.copyright}</p>
            <p className="font-body text-base" style={{ color: 'var(--sage)' }}>{t.footer.creds}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
