import React, { useState } from 'react';
import {
  Phone, Mail, Shield, CheckCircle, Clipboard,
  Award, Globe, ChevronDown,
  Star, MapPin, Building2, Users, Stethoscope,
  Calendar, ArrowUpRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

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
      step3: { title: 'You Relax', desc: "Choose the service that fits your family's needs and budget. Start small with a one-time consultation, or get ongoing peace of mind with a monthly subscription. We'll handle the rest.", cta: 'See Services & Pricing' },
      serviceArea: 'Serving families in NY, FL, Chicago, and beyond. Core service area: San Juan Metro, Bayamón, Carolina, Guaynabo.'
    },
    pricing: {
      sectionTitle: 'Services & Pricing',
      sectionSubtitle: 'Clear, upfront pricing. No hidden fees. No insurance required.',
      promoLabel: 'First 10 families',
      regularLabel: 'Regular price',
      monthly: '/month',
      subscriptions: {
        title: 'Monthly Subscriptions',
        subtitle: 'Ongoing medication oversight for your family',
        foundation: {
          name: 'Foundation', badge: 'Remote Monitoring Only',
          regular: '$169', promo: '$110', period: '/mo',
          note: '$165 for 2 parents at promo price',
          desc: 'Professional monitoring without home visits. Monthly medication review, pharmacy coordination, and family reports.',
          bestFor: 'Best for: Simple regimens, families who visit often',
          cta: 'Choose Foundation'
        },
        enhanced: {
          name: 'Enhanced', badge: 'Hybrid Care', popular: 'Most Popular',
          regular: '$259', promo: '$195', period: '/mo',
          desc: 'Remote oversight + in-home visits when clinically needed. Everything in Foundation, plus on-site medication organization and prescriber advocacy.',
          bestFor: 'Best for: 5+ medications, multiple doctors, recent hospitalization',
          cta: 'Start with Enhanced'
        },
        concierge: {
          name: 'Concierge', badge: 'Limited Availability',
          regular: '$429', promo: '$325', period: '/mo',
          desc: 'White-glove advocacy for high-complexity situations. Unlimited access, priority scheduling, and dedicated pharmacist assignment.',
          bestFor: 'Best for: 10+ medications, multiple specialists, cognitive concerns',
          spots: 'Only 3 spots available until December 2026',
          cta: 'Apply for Concierge'
        }
      },
      freeConsult: {
        title: 'Start Here — Free',
        subtitle: 'No commitment. No credit card required.',
        name: '15-Minute Consultation',
        price: 'FREE',
        desc: 'A quick video call to understand your situation, review your medication list, and recommend the right next step. Perfect for diaspora families exploring options for the first time.',
        cta: 'Schedule Free Consult'
      },
      oneTime: {
        title: 'One-Time Services',
        subtitle: 'Pay once, get clarity immediately',
        consultation: {
          name: '1-Hour Consultation', price: '$70', oldPrice: '',
          desc: 'One-on-one medication review with a licensed pharmacist. Bring your list, your questions, and your concerns.',
          cta: 'Book Consultation'
        },
        audit: {
          name: 'Safety Audit', price: '$425', oldPrice: '',
          desc: 'Comprehensive in-home medication safety assessment. We review every prescription, OTC, and supplement for interactions, duplicates, and fall risks.',
          cta: 'Book Safety Audit'
        },
        transition: {
          name: 'Transition of Care', price: '$650', oldPrice: '$1,050',
          note: 'Introductory price for now — regular price $1,050 after.',
          desc: 'Post-hospital medication reconciliation. We coordinate with discharge instructions, reconcile new prescriptions, and ensure safe transitions home.',
          cta: 'Book Transition Care'
        }
      },
      compare: {
        title: "Compare what's included",
        feature: 'Feature',
        priceLabel: 'Price',
        rows: [
          { label: 'Best for', values: ['Stable regimens', 'Changing regimens', 'Complex medication care'] },
          { label: 'Secure messaging', values: ['Next business day', 'Same business day', 'Within 4 business hours'] },
          { label: 'Direct prescriber coordination', values: ['no', 'yes', 'yes'] },
          { label: 'In-home medication reviews', values: ['no', '2 per year', 'Monthly'] },
          { label: 'Pillbox and organization review', values: ['no', 'yes', 'yes'] },
          { label: 'Storage and expiration review', values: ['no', 'yes', 'yes'] },
          { label: 'Device-technique education', values: ['no', 'yes', 'yes'] },
          { label: 'Caregiver medication education', values: ['no', 'yes', 'yes'] },
          { label: 'Quarterly deeper review', values: ['no', 'no', 'yes'] },
          { label: 'Annual comprehensive review', values: ['Add-on', 'Add-on', 'Included'] },
          { label: 'Deprescribing recommendations', values: ['no', 'Limited', 'yes'] },
          { label: 'Care-circle coordination', values: ['no', 'Prescribers only', 'Family, pharmacy, prescribers, caregiver, nurse, or PT'] },
          { label: 'Priority transition scheduling', values: ['no', 'no', 'yes'] },
          { label: 'Additional home visits', values: ['Standalone rate', 'Subscriber rate', 'Subscriber rate'] }
        ]
      },
      transitionDetail: {
        title: 'Transition of Care — The First 14 Days',
        subtitle: 'A structured post-hospital program, from intake call to closing report.',
        days: [
          { day: 'Day 1', label: 'Intake call' },
          { day: 'Day 3', label: 'Follow-up' },
          { day: 'Day 7', label: 'Follow-up' },
          { day: 'Day 14', label: 'Closing call + report' }
        ],
        included: [
          'Rapid family intake call',
          'One in-home medication review',
          'Three-source medication reconciliation — discharge, pre-admission, and pharmacy profile — with discrepancy documentation',
          'Safety pass: duplicates, expired and discontinued medications, and high-risk review',
          'Coordination with pharmacy and prescriber-ready SBAR',
          'Stabilization Plan, Closing Report, and handoff to a monthly plan'
        ],
        standard: { name: 'Standard', price: '$650', oldPrice: '$1,050', note: 'Founding price — first 10 families. Regular price $1,050 after.', perk: '', cta: 'Book Standard' },
        expedited: { name: 'Expedited', price: '$800', oldPrice: '$1,200', note: 'Founding price — first 10 families. Regular price $1,200 after.', perk: 'Priority intake call and priority in-home scheduling', cta: 'Book Expedited' }
      },
      b2b: {
        title: 'Hospital & Senior Home Partnerships',
        subtitle: 'Enterprise pricing for healthcare facilities',
        transition10: {
          name: '10-Patient Transition Program', price: '$3,000', period: '/mo',
          desc: 'Dedicated pharmacist support for up to 10 post-discharge patients per month: medication reconciliation, follow-ups on days 3, 7, and 14, and a monthly report for your team.',
          cta: 'Inquire Now'
        },
        review10: {
          name: '10-Resident Medication Review', price: '$2,000', period: '/mo',
          desc: 'Monthly comprehensive medication reviews for up to 10 long-term care residents. Interaction screening, deprescribing recommendations, and regulatory documentation.',
          cta: 'Inquire Now'
        },
        custom: 'Contact us for custom enterprise pricing and volume discounts.',
        cta: 'Contact for Enterprise'
      },
      guarantee: {
        title: '30-Day Peace of Mind Guarantee',
        desc: "Not satisfied after your first month? Request a full refund in writing within 30 days of your service start date. Subsequent months are non-refundable. We only succeed when your family truly benefits."
      }
    },
    trustSection: {
      title: 'Why Families Trust Us',
      independent: { title: 'Independent Practice', desc: "No insurance companies. No conflicts of interest. Clinical decisions based solely on your parent's needs." },
      licensed: { title: 'Licensed & Experienced', desc: 'Christian Portalatín is a Puerto Rico-licensed pharmacist with specialized training in medication therapy management, HIV care, and nuclear pharmacy. Former Nuclear Pharmacist at Cardinal Health PR. Currently serving at Centro Médico de Puerto Rico.' },
      diaspora: { title: 'Diaspora-Focused', desc: 'We speak your language—literally. English for you, Spanish for island providers. We understand the 1,000-mile worry.' },
      guarantee: { title: '30-Day Peace of Mind Guarantee', desc: "Not satisfied after your first month? Request a full refund in writing within 30 days of your service start date. Subsequent months are non-refundable. We only succeed when your family truly benefits." }
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
      step3: { title: 'Tú Descansas', desc: 'Elige el servicio que se ajuste a las necesidades y presupuesto de tu familia. Empieza pequeño con una consulta única, o obtén tranquilidad continua con una suscripción mensual. Nosotros nos encargamos del resto.', cta: 'Ver Servicios y Precios' },
      serviceArea: 'Sirviendo familias en NY, FL, Chicago y más. Área de servicio principal: Metro San Juan, Bayamón, Carolina, Guaynabo.'
    },
    pricing: {
      sectionTitle: 'Servicios y Precios',
      sectionSubtitle: 'Precios claros y transparentes. Sin cargos ocultos. Sin seguro requerido.',
      promoLabel: 'Primeras 10 familias',
      regularLabel: 'Precio regular',
      monthly: '/mes',
      subscriptions: {
        title: 'Suscripciones Mensuales',
        subtitle: 'Supervisión continua de medicamentos para tu familia',
        foundation: {
          name: 'Fundación', badge: 'Monitoreo Remoto Solamente',
          regular: '$169', promo: '$110', period: '/mes',
          note: '$165 por 2 padres al precio promocional',
          desc: 'Monitoreo profesional sin visitas a domicilio. Revisión mensual de medicamentos, coordinación con farmacia, y reportes familiares.',
          bestFor: 'Ideal para: Regímenes simples, familias que visitan frecuentemente',
          cta: 'Elegir Fundación'
        },
        enhanced: {
          name: 'Mejorado', badge: 'Cuidado Híbrido', popular: 'Más Popular',
          regular: '$259', promo: '$195', period: '/mes',
          desc: 'Supervisión remota + visitas a domicilio cuando sea clínicamente necesario. Todo lo de Fundación, más organización de medicamentos en casa y abogacía con prescriptores.',
          bestFor: 'Ideal para: 5+ medicamentos, múltiples doctores, hospitalización reciente',
          cta: 'Comenzar con Mejorado'
        },
        concierge: {
          name: 'Concierge', badge: 'Disponibilidad Limitada',
          regular: '$429', promo: '$325', period: '/mes',
          desc: 'Abogacía de guante blanco para situaciones de alta complejidad. Acceso ilimitado, prioridad en agenda, y farmacéutico asignado dedicado.',
          bestFor: 'Ideal para: 10+ medicamentos, múltiples especialistas, preocupaciones cognitivas',
          spots: 'Solo 3 espacios disponibles hasta diciembre de 2026',
          cta: 'Aplicar para Concierge'
        }
      },
      freeConsult: {
        title: 'Empieza Aquí — Gratis',
        subtitle: 'Sin compromiso. Sin tarjeta de crédito.',
        name: 'Consulta de 15 Minutos',
        price: 'GRATIS',
        desc: 'Una videollamada rápida para entender tu situación, revisar tu lista de medicamentos, y recomendarte el siguiente paso adecuado. Perfecta para familias de la diáspora explorando opciones por primera vez.',
        cta: 'Agendar Consulta Gratis'
      },
      oneTime: {
        title: 'Servicios Únicos',
        subtitle: 'Paga una vez, obtén claridad inmediatamente',
        consultation: {
          name: 'Consulta de 1 Hora', price: '$70', oldPrice: '',
          desc: 'Revisión de medicamentos uno-a-uno con un farmacéutico licenciado. Trae tu lista, tus preguntas, y tus preocupaciones.',
          cta: 'Reservar Consulta'
        },
        audit: {
          name: 'Auditoría de Seguridad', price: '$425', oldPrice: '',
          desc: 'Evaluación integral de seguridad de medicamentos en el hogar. Revisamos cada receta, medicamento de venta libre, y suplemento en busca de interacciones, duplicados, y riesgos de caídas.',
          cta: 'Reservar Auditoría'
        },
        transition: {
          name: 'Transición de Cuidado', price: '$650', oldPrice: '$1,050',
          note: 'Precio introductorio por ahora — precio regular $1,050 después.',
          desc: 'Reconciliación de medicamentos post-hospitalización. Coordinamos con instrucciones de alta, reconciliamos nuevas recetas, y aseguramos transiciones seguras a casa.',
          cta: 'Reservar Transición'
        }
      },
      compare: {
        title: 'Compara lo que incluye',
        feature: 'Característica',
        priceLabel: 'Precio',
        rows: [
          { label: 'Ideal para', values: ['Regímenes estables', 'Regímenes cambiantes', 'Cuidado de medicamentos complejo'] },
          { label: 'Mensajería segura', values: ['Siguiente día laborable', 'Mismo día laborable', 'Dentro de 4 horas laborables'] },
          { label: 'Coordinación directa con prescriptores', values: ['no', 'yes', 'yes'] },
          { label: 'Revisiones de medicamentos en casa', values: ['no', '2 al año', 'Mensual'] },
          { label: 'Revisión de pastillero y organización', values: ['no', 'yes', 'yes'] },
          { label: 'Revisión de almacenamiento y expiración', values: ['no', 'yes', 'yes'] },
          { label: 'Educación en técnica de dispositivos', values: ['no', 'yes', 'yes'] },
          { label: 'Educación de medicamentos para cuidadores', values: ['no', 'yes', 'yes'] },
          { label: 'Revisión trimestral profunda', values: ['no', 'no', 'yes'] },
          { label: 'Revisión anual comprehensiva', values: ['Complemento', 'Complemento', 'Incluida'] },
          { label: 'Recomendaciones de desprescripción', values: ['no', 'Limitadas', 'yes'] },
          { label: 'Coordinación del círculo de cuidado', values: ['no', 'Solo prescriptores', 'Familia, farmacia, prescriptores, cuidador, enfermera o PT'] },
          { label: 'Agenda prioritaria de transiciones', values: ['no', 'no', 'yes'] },
          { label: 'Visitas adicionales a casa', values: ['Tarifa independiente', 'Tarifa de suscriptor', 'Tarifa de suscriptor'] }
        ]
      },
      transitionDetail: {
        title: 'Transición de Cuidado — Los Primeros 14 Días',
        subtitle: 'Un programa estructurado post-hospitalización, desde la llamada inicial hasta el informe de cierre.',
        days: [
          { day: 'Día 1', label: 'Llamada inicial' },
          { day: 'Día 3', label: 'Seguimiento' },
          { day: 'Día 7', label: 'Seguimiento' },
          { day: 'Día 14', label: 'Llamada de cierre + informe' }
        ],
        included: [
          'Llamada rápida de admisión familiar',
          'Una revisión de medicamentos en casa',
          'Reconciliación de medicamentos de tres fuentes — alta, pre-admisión y perfil de farmacia — con documentación de discrepancias',
          'Revisión de seguridad: duplicados, medicamentos expirados y descontinuados, y revisión de alto riesgo',
          'Coordinación con farmacia y SBAR listo para prescriptores',
          'Plan de Estabilización, Informe de Cierre, y traspaso a un plan mensual'
        ],
        standard: { name: 'Estándar', price: '$650', oldPrice: '$1,050', note: 'Precio de fundador — primeras 10 familias. Precio regular $1,050 después.', perk: '', cta: 'Reservar Estándar' },
        expedited: { name: 'Expedita', price: '$800', oldPrice: '$1,200', note: 'Precio de fundador — primeras 10 familias. Precio regular $1,200 después.', perk: 'Llamada inicial prioritaria y agenda prioritaria en casa', cta: 'Reservar Expedita' }
      },
      b2b: {
        title: 'Alianzas con Hospitales y Hogares de Ancianos',
        subtitle: 'Precios empresariales para facilidades de salud',
        transition10: {
          name: 'Programa de Transición para 10 Pacientes', price: '$3,000', period: '/mes',
          desc: 'Apoyo farmacéutico dedicado para hasta 10 pacientes post-alta por mes: reconciliación de medicamentos, seguimiento los días 3, 7 y 14, e informe mensual para su equipo.',
          cta: 'Consultar Ahora'
        },
        review10: {
          name: 'Revisión de Medicamentos para 10 Residentes', price: '$2,000', period: '/mes',
          desc: 'Revisiones mensuales comprehensivas de medicamentos para hasta 10 residentes de cuidado largo. Detección de interacciones, recomendaciones de desprescripción, y documentación regulatoria.',
          cta: 'Consultar Ahora'
        },
        custom: 'Contáctenos para precios empresariales personalizados y descuentos por volumen.',
        cta: 'Contactar para Empresas'
      },
      guarantee: {
        title: 'Garantía de Tranquilidad de 30 Días',
        desc: '¿No está satisfecho después del primer mes? Solicite un reembolso completo por escrito dentro de 30 días de su fecha de inicio. Los meses subsiguientes no son reembolsables.'
      }
    },
    trustSection: {
      title: 'Por Qué las Familias Confían en Nosotros',
      independent: { title: 'Práctica Independiente', desc: 'Sin compañías de seguros. Sin conflictos de interés. Decisiones clínicas basadas únicamente en las necesidades de tu padre/madre.' },
      licensed: { title: 'Licenciado y Experimentado', desc: 'Christian Portalatín es un farmacéutico licenciado en Puerto Rico con entrenamiento especializado en manejo de terapia de medicamentos, cuidado de VIH, y farmacia nuclear. Ex Farmacéutico Nuclear en Cardinal Health PR. Actualmente sirviendo en el Centro Médico de Puerto Rico.' },
      diaspora: { title: 'Enfocado en la Diáspora', desc: 'Hablamos tu idioma—literalmente. Inglés para ti, español para proveedores en la isla. Entendemos la preocupación de las 1,000 millas.' },
      guarantee: { title: 'Garantía de Tranquilidad de 30 Días', desc: '¿No está satisfecho después del primer mes? Solicite un reembolso completo por escrito dentro de 30 días de su fecha de inicio. Los meses subsiguientes no son reembolsables.' }
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

const CALENDLY_URL = 'https://calendly.com/mifarmaceuticoenpr';

function openCalendly() {
  window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
}

export default function LandingPage() {
  const { lang } = useLanguage();
  const [faqOpen, setFaqOpen] = useState(null);
  const t = translations[lang];

  const renderCompareValue = (v) => {
    if (v === 'yes') return <CheckCircle className="w-5 h-5 mx-auto" style={{ color: 'var(--pine)' }} strokeWidth={2.5} />;
    if (v === 'no') return <span style={{ color: 'var(--muted-ink)' }}>—</span>;
    return <span>{v}</span>;
  };

  const faqs = [
    { q: lang === 'en' ? "Do you visit my parent's home unannounced?" : "¿Visitas la casa de mi padre/madre sin anunciar?", a: lang === 'en' ? "Never. All visits are scheduled in advance with your parent (and you, if you'd like to join virtually). We respect their privacy and independence." : "Nunca. Todas las visitas se agendan con anticipación con tu padre/madre (y contigo, si deseas unirte virtualmente). Respetamos su privacidad e independencia." },
    { q: lang === 'en' ? "How do you communicate with my parent's doctor?" : "¿Cómo te comunicas con el médico de mi padre/madre?", a: lang === 'en' ? "We use SBAR (Situation-Background-Assessment-Recommendation) format to provide clear, clinical recommendations. We don't replace the physician—we support their care plan with medication expertise." : "Usamos el formato SBAR (Situación-Antecedentes-Evaluación-Recomendación) para proveer recomendaciones clínicas claras. No reemplazamos al médico—apoyamos su plan de cuidado con experiencia en medicamentos." },
    { q: lang === 'en' ? "What if my parent lives outside San Juan?" : "¿Qué pasa si mi padre/madre vive fuera de San Juan?", a: lang === 'en' ? "We serve the greater San Juan metro area (Bayamón, Carolina, Guaynabo, Trujillo Alto) at standard rates. We can travel to Dorado, Caguas, and Arecibo with a travel surcharge. For areas outside these, we recommend starting with our Remote Foundation tier." : "Servimos el área metropolitana de San Juan (Bayamón, Carolina, Guaynabo, Trujillo Alto) a tarifas estándar. Podemos viajar a Dorado, Caguas y Arecibo con tarifa de viaje adicional. Para áreas fuera de estas, recomendamos comenzar con nuestro nivel Fundación Remoto." },
    { q: lang === 'en' ? "Can I cancel anytime?" : "¿Puedo cancelar en cualquier momento?", a: lang === 'en' ? "Yes. Subscriptions are month-to-month with 30 days written notice to cancel. Your first month is eligible for a full refund if requested in writing within 30 days of your service start date. Subsequent months are non-refundable." : "Sí. Las suscripciones son mes a mes con 30 días de aviso por escrito. El primer mes es reembolsable si se solicita por escrito dentro de 30 días de la fecha de inicio." },
    { q: lang === 'en' ? "Do you accept insurance?" : "¿Aceptan seguro?", a: lang === 'en' ? "No, we operate on a cash-pay basis. This keeps us independent and ensures our clinical decisions are based solely on your parent's needs, without insurance company interference." : "No, operamos con pago en efectivo. Esto nos mantiene independientes y asegura que nuestras decisiones clínicas se basen únicamente en las necesidades de tu padre/madre, sin interferencia de compañías de seguros." },
    { q: lang === 'en' ? "How quickly can you start?" : "¿Qué tan rápido pueden empezar?", a: lang === 'en' ? "Most families can begin within 3-5 business days after the initial consultation. For urgent situations like hospital discharges, we offer expedited Transition of Care services." : "La mayoría de familias pueden comenzar dentro de 3-5 días hábiles después de la consulta inicial. Para situaciones urgentes como altas hospitalarias, ofrecemos servicios de Transición de Cuidado acelerados." }
  ];

  return (
    <div style={{ backgroundColor: 'var(--paper)' }}>

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
                    <span className="text-sm" style={{ color: 'var(--sage)' }}>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={openCalendly} className="btn-capsule btn-capsule-primary text-lg px-8 py-4 inline-flex items-center justify-center gap-2">
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
                  <p className="text-sm font-semibold text-[#F4EFE6]">{t.hero.credCentro}</p>
                </div>
                <div className="text-left space-y-2 text-sm" style={{ color: 'var(--sage)' }}>
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
                      <button onClick={openCalendly} className="btn-capsule btn-capsule-primary w-full inline-flex items-center justify-center gap-2 text-base px-6 py-3">
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
                    <p className="text-sm mt-3 min-h-[1.25rem]" style={{ color: 'var(--muted-ink)' }}>{item.t.ctaSub || ''}</p>
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

      {/* ═══ PRICING SECTION — COMPLETE OVERHAUL ═══ */}
      <section id="services" className="py-20 px-6 sm:px-8" style={{ backgroundColor: 'var(--sand)' }}>
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-medium text-[#0F2E30] mb-4">{t.pricing.sectionTitle}</h2>
            <p className="text-xl" style={{ color: 'var(--muted-ink)' }}>{t.pricing.sectionSubtitle}</p>
          </div>

          {/* ─── FREE CONSULTATION — START HERE ─── */}
          <div className="mb-20">
            <div className="max-w-2xl mx-auto p-10 text-center relative overflow-hidden" style={{ backgroundColor: 'var(--pine)', borderRadius: '28px' }}>
              <div className="absolute top-0 right-0 px-6 py-2 rounded-bl-2xl font-body font-bold text-sm text-[#F4EFE6]" style={{ backgroundColor: 'var(--flamboyan)' }}>
                {lang === 'es' ? 'Recomendado' : 'Recommended'}
              </div>
              <h3 className="font-display text-3xl font-medium text-[#F4EFE6] mb-2">{t.pricing.freeConsult.title}</h3>
              <p className="text-lg mb-8" style={{ color: 'var(--sage)' }}>{t.pricing.freeConsult.subtitle}</p>

              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'var(--flamboyan)' }}>
                <Calendar className="w-10 h-10 text-[#F4EFE6]" strokeWidth={2} />
              </div>
              <h4 className="font-display text-2xl font-medium text-[#F4EFE6] mb-3">{t.pricing.freeConsult.name}</h4>
              <div className="mb-6">
                <span className="font-display text-6xl font-medium" style={{ color: 'var(--flamboyan)' }}>{t.pricing.freeConsult.price}</span>
              </div>
              <p className="font-body mb-8 max-w-md mx-auto" style={{ color: 'var(--sage)' }}>{t.pricing.freeConsult.desc}</p>
              <button onClick={openCalendly} className="btn-capsule inline-flex items-center gap-2 text-lg px-8 py-4" style={{ backgroundColor: 'var(--flamboyan)', color: 'var(--paper)' }}>
                <Calendar className="w-5 h-5" strokeWidth={2.5} />
                {t.pricing.freeConsult.cta}
              </button>
            </div>
          </div>

          {/* ─── ONE-TIME SERVICES ─── */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <p className="font-body font-semibold text-sm uppercase tracking-widest mb-2" style={{ color: 'var(--flamboyan)' }}>{lang === 'es' ? 'Pago único' : 'One-time payment'}</p>
              <h3 className="font-display text-3xl font-medium text-[#0F2E30] mb-2">{t.pricing.oneTime.title}</h3>
              <p className="text-lg" style={{ color: 'var(--muted-ink)' }}>{t.pricing.oneTime.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Stethoscope, bg: 'var(--sage)', data: t.pricing.oneTime.consultation },
                { icon: Clipboard, bg: 'var(--deep-pine)', data: t.pricing.oneTime.audit },
              ].map((service, i) => {
                const Icon = service.icon;
                return (
                  <div key={i} className="p-8 flex flex-col transition hover:brightness-95" style={{ backgroundColor: 'var(--paper)', borderRadius: '28px' }}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: service.bg }}>
                      <Icon className="w-8 h-8 text-[#F4EFE6]" strokeWidth={2} />
                    </div>
                    <h4 className="font-display text-2xl font-medium text-[#0F2E30] mb-3">{service.data.name}</h4>
                    <div className="mb-2">
                      {service.data.oldPrice && <span className="text-lg line-through mr-2" style={{ color: 'var(--muted-ink)' }}>{service.data.oldPrice}</span>}
                      <span className="font-display text-4xl font-medium" style={{ color: 'var(--flamboyan)' }}>{service.data.price}</span>
                    </div>
                    <p className="text-sm mb-4 min-h-[1.25rem]" style={{ color: 'var(--muted-ink)' }}>{service.data.note || ''}</p>
                    <p className="font-body mb-6 flex-1" style={{ color: 'var(--muted-ink)' }}>{service.data.desc}</p>
                    <button onClick={openCalendly} className="btn-capsule btn-capsule-primary w-full">
                      {service.data.cta}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Transition of Care — 14-day program detail */}
            <div className="mt-8 p-8 sm:p-10" style={{ backgroundColor: 'var(--paper)', borderRadius: '28px' }}>
              <h4 className="font-display text-2xl sm:text-3xl font-medium text-[#0F2E30] mb-2 text-center">{t.pricing.transitionDetail.title}</h4>
              <p className="text-center mb-8" style={{ color: 'var(--muted-ink)' }}>{t.pricing.transitionDetail.subtitle}</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {t.pricing.transitionDetail.days.map((d, i) => (
                  <div key={i} className="text-center p-4" style={{ backgroundColor: 'var(--sand)', borderRadius: '20px' }}>
                    <p className="font-body font-bold text-sm mb-1" style={{ color: 'var(--flamboyan)' }}>{d.day}</p>
                    <p className="font-body text-sm" style={{ color: 'var(--pine)' }}>{d.label}</p>
                  </div>
                ))}
              </div>

              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                {t.pricing.transitionDetail.included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--sage)' }} strokeWidth={2.5} />
                    <span className="font-body text-sm" style={{ color: 'var(--muted-ink)' }}>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="grid sm:grid-cols-2 gap-6">
                {['standard', 'expedited'].map((key) => {
                  const opt = t.pricing.transitionDetail[key];
                  return (
                    <div key={key} className="p-6 text-center flex flex-col" style={{ backgroundColor: 'var(--sand)', borderRadius: '20px' }}>
                      <h5 className="font-display text-xl font-medium text-[#0F2E30] mb-2">{opt.name}</h5>
                      <div className="mb-2">
                        <span className="text-base line-through mr-2" style={{ color: 'var(--muted-ink)' }}>{opt.oldPrice}</span>
                        <span className="font-display text-4xl font-medium" style={{ color: 'var(--flamboyan)' }}>{opt.price}</span>
                      </div>
                      <p className="text-sm mb-2 flex-1" style={{ color: 'var(--muted-ink)' }}>{opt.note}</p>
                      {opt.perk && <p className="text-sm font-semibold mb-2" style={{ color: 'var(--pine)' }}>{opt.perk}</p>}
                      <button onClick={openCalendly} className="btn-capsule btn-capsule-primary w-full mt-4">{opt.cta}</button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ─── SUBSCRIPTIONS ─── */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <p className="font-body font-semibold text-sm uppercase tracking-widest mb-2" style={{ color: 'var(--pine)' }}>{lang === 'es' ? 'Suscripción mensual' : 'Monthly subscription'}</p>
              <h3 className="font-display text-3xl font-medium text-[#0F2E30] mb-2">{t.pricing.subscriptions.title}</h3>
              <p className="text-lg" style={{ color: 'var(--muted-ink)' }}>{t.pricing.subscriptions.subtitle}</p>
            </div>

            {/* Plans, pricing, features, and buy buttons — one table */}
            <div>
              <div className="hidden md:block overflow-x-auto p-2 sm:p-4" style={{ backgroundColor: 'var(--paper)', borderRadius: '28px' }}>
                <table className="w-full font-body text-sm" style={{ borderCollapse: 'collapse', minWidth: '640px' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'var(--pine)' }}>
                      <th className="p-4 text-left font-semibold text-[#F4EFE6] align-bottom">{t.pricing.compare.feature}</th>
                      {['foundation', 'enhanced', 'concierge'].map((key) => {
                        const tier = t.pricing.subscriptions[key];
                        return (
                          <th key={key} className="p-4 text-center text-[#F4EFE6] align-bottom">
                            {tier.popular && <span className="inline-block px-3 py-1 mb-2 rounded-full text-xs font-bold text-[#F4EFE6]" style={{ backgroundColor: 'var(--flamboyan)' }}>⭐ {tier.popular}</span>}
                            <div className="font-display text-xl font-medium">{tier.name}</div>
                            <div className="text-xs font-normal mt-1" style={{ color: 'var(--sage)' }}>{tier.badge}</div>
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Pricing */}
                    <tr style={{ backgroundColor: 'var(--paper)', borderBottom: '1px solid var(--sand)' }}>
                      <td className="p-4 font-semibold align-top" style={{ color: 'var(--pine)' }}>{t.pricing.compare.priceLabel}</td>
                      {['foundation', 'enhanced', 'concierge'].map((key) => {
                        const tier = t.pricing.subscriptions[key];
                        return (
                          <td key={key} className="p-4 text-center align-top">
                            <div className="font-display text-3xl font-medium" style={{ color: 'var(--flamboyan)' }}>{tier.promo}<span className="font-body text-base" style={{ color: 'var(--muted-ink)' }}>{tier.period}</span></div>
                            <div className="text-sm mt-1"><span className="line-through" style={{ color: 'var(--muted-ink)' }}>{tier.regular}{t.pricing.monthly}</span></div>
                            <div className="mt-2"><span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: 'var(--flamboyan-light)', color: 'var(--flamboyan)' }}>{t.pricing.promoLabel}</span></div>
                            {tier.note && <p className="text-xs mt-2" style={{ color: 'var(--muted-ink)' }}>{tier.note}</p>}
                            {tier.spots && <p className="text-xs font-semibold mt-2" style={{ color: 'var(--muted-ink)' }}>⚠️ {tier.spots}</p>}
                          </td>
                        );
                      })}
                    </tr>
                    {/* Buy buttons */}
                    <tr style={{ backgroundColor: 'var(--sand)', borderBottom: '1px solid var(--sand)' }}>
                      <td className="p-4"></td>
                      {['foundation', 'enhanced', 'concierge'].map((key) => {
                        const tier = t.pricing.subscriptions[key];
                        return (
                          <td key={key} className="p-4 text-center">
                            <button onClick={openCalendly} className="btn-capsule btn-capsule-primary w-full text-sm px-4 py-3 leading-tight min-h-[3rem]">{tier.cta}</button>
                          </td>
                        );
                      })}
                    </tr>
                    {t.pricing.compare.rows.map((row, i) => (
                      <tr key={i} style={{ backgroundColor: i % 2 ? 'var(--sand)' : 'var(--paper)', borderBottom: '1px solid var(--sand)' }}>
                        <td className="p-4 font-semibold" style={{ color: 'var(--pine)' }}>{row.label}</td>
                        {row.values.map((v, j) => (
                          <td key={j} className="p-4 text-center" style={{ color: 'var(--muted-ink)' }}>{renderCompareValue(v)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile: one card per tier, same content */}
              <div className="md:hidden space-y-6">
                {['foundation', 'enhanced', 'concierge'].map((key, tierIndex) => {
                  const tier = t.pricing.subscriptions[key];
                  return (
                    <div key={key} className="overflow-hidden" style={{ backgroundColor: 'var(--paper)', borderRadius: '28px' }}>
                      <div className="p-6 text-center" style={{ backgroundColor: 'var(--pine)' }}>
                        {tier.popular && <span className="inline-block px-3 py-1 mb-2 rounded-full text-xs font-bold text-[#F4EFE6]" style={{ backgroundColor: 'var(--flamboyan)' }}>⭐ {tier.popular}</span>}
                        <h4 className="font-display text-2xl font-medium text-[#F4EFE6]">{tier.name}</h4>
                        <p className="text-sm mt-1" style={{ color: 'var(--sage)' }}>{tier.badge}</p>
                      </div>
                      <div className="p-6">
                        <div className="text-center mb-4">
                          <div className="font-display text-4xl font-medium" style={{ color: 'var(--flamboyan)' }}>{tier.promo}<span className="font-body text-lg" style={{ color: 'var(--muted-ink)' }}>{tier.period}</span></div>
                          <div className="text-sm mt-1"><span className="line-through" style={{ color: 'var(--muted-ink)' }}>{tier.regular}{t.pricing.monthly}</span></div>
                          <div className="mt-2"><span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: 'var(--flamboyan-light)', color: 'var(--flamboyan)' }}>{t.pricing.promoLabel}</span></div>
                          {tier.note && <p className="text-xs mt-2" style={{ color: 'var(--muted-ink)' }}>{tier.note}</p>}
                          {tier.spots && <p className="text-xs font-semibold mt-2" style={{ color: 'var(--muted-ink)' }}>⚠️ {tier.spots}</p>}
                        </div>
                        <button onClick={openCalendly} className="btn-capsule btn-capsule-primary w-full text-sm px-4 py-3 leading-tight min-h-[3rem]">{tier.cta}</button>
                        <ul className="mt-6 space-y-3">
                          {t.pricing.compare.rows.map((row, i) => (
                            <li key={i} className="flex items-start justify-between gap-4 text-sm">
                              <span className="font-semibold" style={{ color: 'var(--pine)' }}>{row.label}</span>
                              <span className="text-right flex-shrink-0 max-w-[45%]" style={{ color: 'var(--muted-ink)' }}>{renderCompareValue(row.values[tierIndex])}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ─── B2B / ENTERPRISE ─── */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h3 className="font-display text-3xl font-medium text-[#0F2E30] mb-2">{t.pricing.b2b.title}</h3>
              <p className="text-lg" style={{ color: 'var(--muted-ink)' }}>{t.pricing.b2b.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* 10-Patient Transition */}
              <div className="p-8 flex flex-col" style={{ backgroundColor: 'var(--paper)', borderRadius: '28px', border: '2px solid var(--deep-pine)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--pine)' }}>
                  <Building2 className="w-8 h-8 text-[#F4EFE6]" strokeWidth={2} />
                </div>
                <h4 className="font-display text-2xl font-medium text-[#0F2E30] mb-3">{t.pricing.b2b.transition10.name}</h4>
                <div className="mb-4">
                  <span className="font-display text-4xl font-medium" style={{ color: 'var(--flamboyan)' }}>{t.pricing.b2b.transition10.price}</span>
                  <span className="font-body text-xl" style={{ color: 'var(--muted-ink)' }}>{t.pricing.b2b.transition10.period}</span>
                </div>
                <p className="font-body mb-6 flex-1" style={{ color: 'var(--muted-ink)' }}>{t.pricing.b2b.transition10.desc}</p>
                <button onClick={openCalendly} className="btn-capsule btn-capsule-outline w-full">
                  {t.pricing.b2b.transition10.cta}
                </button>
              </div>

              {/* 10-Resident Review */}
              <div className="p-8 flex flex-col" style={{ backgroundColor: 'var(--paper)', borderRadius: '28px', border: '2px solid var(--deep-pine)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--deep-pine)' }}>
                  <Users className="w-8 h-8 text-[#F4EFE6]" strokeWidth={2} />
                </div>
                <h4 className="font-display text-2xl font-medium text-[#0F2E30] mb-3">{t.pricing.b2b.review10.name}</h4>
                <div className="mb-4">
                  <span className="font-display text-4xl font-medium" style={{ color: 'var(--flamboyan)' }}>{t.pricing.b2b.review10.price}</span>
                  <span className="font-body text-xl" style={{ color: 'var(--muted-ink)' }}>{t.pricing.b2b.review10.period}</span>
                </div>
                <p className="font-body mb-6 flex-1" style={{ color: 'var(--muted-ink)' }}>{t.pricing.b2b.review10.desc}</p>
                <button onClick={openCalendly} className="btn-capsule btn-capsule-outline w-full">
                  {t.pricing.b2b.review10.cta}
                </button>
              </div>
            </div>

            {/* Custom enterprise CTA */}
            <div className="text-center p-8" style={{ backgroundColor: 'var(--paper)', borderRadius: '28px' }}>
              <p className="font-body text-lg mb-4" style={{ color: 'var(--muted-ink)' }}>{t.pricing.b2b.custom}</p>
              <a href="mailto:boticarxpr@outlook.com" className="btn-capsule inline-flex items-center gap-2" style={{ backgroundColor: 'var(--pine)', color: 'var(--paper)' }}>
                <Mail className="w-5 h-5" strokeWidth={2.5} />
                {t.pricing.b2b.cta}
                <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
              </a>
            </div>
          </div>

          {/* Guarantee */}
          <div className="p-8 text-center max-w-3xl mx-auto" style={{ backgroundColor: 'var(--paper)', borderRadius: '28px' }}>
            <Shield className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--sage)' }} strokeWidth={2} />
            <h3 className="font-display text-2xl font-medium text-[#0F2E30] mb-2">{t.pricing.guarantee.title}</h3>
            <p className="font-body" style={{ color: 'var(--muted-ink)' }}>{t.pricing.guarantee.desc}</p>
          </div>
        </div>
      </section>

      {/* Trust — Sand */}
      <section className="py-20 px-6 sm:px-8" style={{ backgroundColor: 'var(--sand)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16"><h2 className="font-display text-4xl font-medium text-[#0F2E30]">{t.trustSection.title}</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, t: t.trustSection.independent, bg: 'var(--pine)' },
              { icon: Award, t: t.trustSection.licensed, bg: 'var(--deep-pine)' },
              { icon: Globe, t: t.trustSection.diaspora, bg: 'var(--sage)' },
              { icon: Star, t: t.trustSection.guarantee, bg: 'var(--flamboyan)' },
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
          <button onClick={openCalendly} className="btn-capsule inline-flex items-center gap-2" style={{ backgroundColor: 'var(--paper)', color: 'var(--pine)' }}>
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
              <div className="space-y-2 font-body text-sm" style={{ color: 'var(--sage)' }}>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" strokeWidth={2.5} />(787) 667-6560</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" strokeWidth={2.5} />boticarxpr@outlook.com</p>
              </div>
            </div>
            <div>
              <h4 className="font-display text-lg font-medium text-[#F4EFE6] mb-4">{t.footer.quickLinks}</h4>
              <div className="space-y-2 font-body text-sm" style={{ color: 'var(--sage)' }}>
                <a href="/#how-it-works" className="block hover:text-[#F4EFE6] transition">{t.howItWorks.title}</a>
                <a href="/#services" className="block hover:text-[#F4EFE6] transition">{t.pricing.sectionTitle}</a>
              </div>
            </div>
            <div>
              <h4 className="font-display text-lg font-medium text-[#F4EFE6] mb-4">{t.footer.legal}</h4>
              <p className="font-body text-sm" style={{ color: 'var(--sage)' }}>{t.footer.license}</p>
            </div>
          </div>
          <div className="border-t pt-8 text-center" style={{ borderColor: 'var(--pine)' }}>
            <p className="font-body text-sm mb-2" style={{ color: 'var(--sage)' }}>{t.footer.copyright}</p>
            <p className="font-body text-xs" style={{ color: 'var(--muted-ink)' }}>{t.footer.creds}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
