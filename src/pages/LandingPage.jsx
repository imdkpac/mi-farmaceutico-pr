import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, Mail, Shield, CheckCircle, Clipboard,
  Award, Globe, ChevronDown,
  Star, MapPin, Building2, Users,
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
      sectionSubtitle: 'Each service starts with your family’s situation and with what the pharmacist actually does. The price is next to the button.',
      foundingNote: 'These prices are for the first 10 families.',
      labels: { forWhom: "Who it's for", does: 'What the pharmacist does', detail: 'The detail' },
      monthlyTitle: 'Each month',
      onceTitle: 'One time',
      subscriptions: {
        title: 'Each month',
        subtitle: 'A pharmacist keeps looking at the medications with your family.',
        foundation: {
          name: 'Foundation', badge: 'Remote only',
          amount: '$110', period: '/mo', priceLine: '$110 a month',
          plusName: 'Foundation, two parents', plusAmount: '$165', plusPriceLine: '$165 a month, two parents in the same home',
          forWhom: 'For a parent on a stable set of medications, when someone in the family can visit often.',
          does: 'Each month the pharmacist reviews the medications, coordinates with the pharmacy, and sends the family a report. This follow-up is remote. It does not include home visits.',
          cta: 'Get started', plusCta: 'Get started, two parents'
        },
        enhanced: {
          name: 'Enhanced', badge: 'Home visits when needed',
          amount: '$195', period: '/mo', priceLine: '$195 a month',
          forWhom: 'For someone who takes several medications, sees more than one doctor, or came home from the hospital recently.',
          does: 'The pharmacist does the same remote follow-up as Foundation and comes to the home when it is needed. There, the medications are organized and the pharmacist talks with the prescribers.',
          cta: 'Get started'
        },
        concierge: {
          name: 'Concierge', badge: 'Few openings',
          amount: '$325', period: '/mo', priceLine: '$325 a month',
          forWhom: 'For a more complicated situation: many medications, several specialists, or worry about memory.',
          does: 'The same pharmacist stays with the family. Replies come first, and the pharmacist coordinates with the family, the pharmacy, and the doctors. A nurse or therapist can be included when that person is already part of the care.',
          spots: '3 openings through December 2026.',
          cta: 'Get started'
        }
      },
      freeConsult: {
        name: '15-minute conversation',
        forWhom: 'For a family that wants to know where to start, with no commitment.',
        does: 'The pharmacist listens, looks at the medication list, and says which service fits. It is a 15-minute video call. No card is asked for.',
        priceLine: 'Free',
        cta: 'Reserve'
      },
      oneTime: {
        title: 'One time',
        subtitle: 'For a question, a visit, or the days after a hospital stay.',
        consultation: {
          name: '1-hour consultation', amount: '$70', priceLine: '$70, one time',
          forWhom: 'For someone who wants one sitting with the pharmacist, list and questions in hand.',
          does: 'The pharmacist goes through the medications one by one. Bring questions about your parents, a new prescription, or something that does not look right.',
          cta: 'Reserve'
        },
        audit: {
          name: 'Safety audit', amount: '$425', priceLine: '$425, one time',
          forWhom: 'For a family that wants every medication in the home looked at.',
          does: 'The pharmacist comes to the home at a time you agree on. Every prescription, non-prescription medicine, and supplement is checked for interactions, duplicates, and fall risk.',
          cta: 'Reserve'
        },
        homeVisit: {
          name: 'Home medication visit', amount: '$425', priceLine: '$425, one time',
          forWhom: 'For a family that wants the pharmacist to see the medications where they are taken.',
          does: 'The visit is scheduled ahead of time. The pharmacist looks at how the medications are stored and organized, and leaves a written note of what needs attention.',
          cta: 'Reserve'
        },
        transition: {
          name: 'Transition of Care', amount: '$650', priceLine: '$650, one time',
          cta: 'Reserve'
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
        forWhom: 'For a family that just got home from the hospital and needs the medications sorted before something is missed.',
        does: 'The pharmacist stays with the family for the first 14 days at home. The discharge list, the medicines from before the stay, and the pharmacy profile are compared. There is one home visit, and the family receives a plan and a closing report.',
        standard: { name: 'Standard', amount: '$650', priceLine: '$650, one time', perk: '', cta: 'Reserve' },
        expedited: { name: 'Expedited', amount: '$850', priceLine: '$850, one time', perk: 'The first call and the home visit are scheduled first.', cta: 'Reserve' }
      },
      b2b: {
        title: 'Hospital & Senior Home Partnerships',
        subtitle: 'For a hospital or a home that wants a pharmacist for a group of patients.',
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
        custom: 'If the group is a different size, write and we will talk it through.',
        cta: 'Contact for Enterprise'
      },
      guarantee: {
        title: 'Refunds',
        desc: refundCopy('en').combined,
      }
    },
    trustSection: {
      title: 'Why Families Trust Us',
      independent: { title: 'Independent Practice', desc: "No insurance companies. No conflicts of interest. Clinical decisions based solely on your parent's needs." },
      licensed: { title: 'Licensed & Experienced', desc: 'Christian Portalatín is a Puerto Rico-licensed pharmacist with specialized training in medication therapy management, HIV care, and nuclear pharmacy. Former Nuclear Pharmacist at Cardinal Health PR. Currently serving at Centro Médico de Puerto Rico.' },
      diaspora: { title: 'Diaspora-Focused', desc: 'We speak your language—literally. English for you, Spanish for island providers. We understand the 1,000-mile worry.' },
      guarantee: { title: 'Refunds', desc: refundCopy('en').combined }
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
      sectionSubtitle: 'Cada servicio empieza por la situación de tu familia y por lo que hace el farmacéutico. El precio está junto al botón.',
      foundingNote: 'Estos precios son para las primeras 10 familias.',
      labels: { forWhom: 'Para quién', does: 'Qué hace el farmacéutico', detail: 'El detalle' },
      monthlyTitle: 'Cada mes',
      onceTitle: 'Una sola vez',
      subscriptions: {
        title: 'Cada mes',
        subtitle: 'Un farmacéutico sigue los medicamentos con tu familia.',
        foundation: {
          name: 'Fundación', badge: 'Solo a distancia',
          amount: '$110', period: '/mes', priceLine: '$110 al mes',
          plusName: 'Fundación, dos padres', plusAmount: '$165', plusPriceLine: '$165 al mes, dos padres en la misma casa',
          forWhom: 'Para un papá o una mamá con un tratamiento estable, cuando alguien de la familia puede visitarlos con frecuencia.',
          does: 'Cada mes el farmacéutico revisa los medicamentos, coordina con la farmacia y le envía un informe a la familia. El seguimiento es a distancia. No incluye visitas a la casa.',
          cta: 'Empezar', plusCta: 'Empezar, dos padres'
        },
        enhanced: {
          name: 'Mejorado', badge: 'Visitas a la casa cuando hacen falta',
          amount: '$195', period: '/mes', priceLine: '$195 al mes',
          forWhom: 'Para quien toma varios medicamentos, ve a más de un médico, o salió del hospital hace poco.',
          does: 'El farmacéutico hace el mismo seguimiento a distancia de Fundación y va a la casa cuando hace falta. Allí organiza los medicamentos y habla con los médicos que recetan.',
          cta: 'Empezar'
        },
        concierge: {
          name: 'Concierge', badge: 'Pocos espacios',
          amount: '$325', period: '/mes', priceLine: '$325 al mes',
          forWhom: 'Para un caso más complicado: muchos medicamentos, varios especialistas, o preocupación por la memoria.',
          does: 'El mismo farmacéutico se queda con la familia. Contesta primero, y coordina con la familia, la farmacia y los médicos. Puede incluir a la enfermera o al terapista cuando esa persona ya forma parte del cuidado.',
          spots: 'Hay 3 espacios hasta diciembre de 2026.',
          cta: 'Empezar'
        }
      },
      freeConsult: {
        name: 'Conversación de 15 minutos',
        forWhom: 'Para la familia que quiere saber por dónde empezar, sin compromiso.',
        does: 'El farmacéutico escucha, mira la lista de medicamentos y dice qué servicio encaja. Es una videollamada de 15 minutos. No pide tarjeta.',
        priceLine: 'Gratis',
        cta: 'Reservar'
      },
      oneTime: {
        title: 'Una sola vez',
        subtitle: 'Para una duda, una visita, o los días después del hospital.',
        consultation: {
          name: 'Consulta de 1 hora', amount: '$70', priceLine: '$70, una vez',
          forWhom: 'Para quien quiere sentarse una vez con el farmacéutico, con la lista y las preguntas en la mano.',
          does: 'Revisa los medicamentos uno por uno. Puedes traer las dudas de tus papás, de una receta nueva, o de algo que no cuadra.',
          cta: 'Reservar'
        },
        audit: {
          name: 'Auditoría de seguridad', amount: '$425', priceLine: '$425, una vez',
          forWhom: 'Para la familia que quiere que se mire todo lo que hay en la casa.',
          does: 'El farmacéutico va a la casa, en un horario que se acuerda antes. Revisa cada receta, lo que se compra sin receta y los suplementos: interacciones, duplicados y riesgo de caídas.',
          cta: 'Reservar'
        },
        homeVisit: {
          name: 'Visita de medicamentos en el hogar', amount: '$425', priceLine: '$425, una vez',
          forWhom: 'Para la familia que quiere que el farmacéutico vea los medicamentos donde se toman.',
          does: 'La visita se acuerda antes. Mira cómo están guardados y organizados, y deja por escrito lo que hay que atender.',
          cta: 'Reservar'
        },
        transition: {
          name: 'Transición de cuidado', amount: '$650', priceLine: '$650, una vez',
          cta: 'Reservar'
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
        forWhom: 'Para la familia que acaba de llegar a la casa después del hospital y necesita ordenar los medicamentos antes de que algo se pase.',
        does: 'El farmacéutico acompaña los primeros 14 días en la casa. Compara la lista del alta, los medicamentos de antes y el perfil de la farmacia. Hay una visita en la casa, y la familia recibe un plan y un informe de cierre.',
        standard: { name: 'Estándar', amount: '$650', priceLine: '$650, una vez', perk: '', cta: 'Reservar' },
        expedited: { name: 'Expedita', amount: '$850', priceLine: '$850, una vez', perk: 'La primera llamada y la visita en la casa se agendan primero.', cta: 'Reservar' }
      },
      b2b: {
        title: 'Alianzas con Hospitales y Hogares de Ancianos',
        subtitle: 'Para un hospital o un hogar que quiere un farmacéutico para un grupo de pacientes.',
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
        custom: 'Si el grupo es de otro tamaño, escribe y lo vemos.',
        cta: 'Contactar para Empresas'
      },
      guarantee: {
        title: 'Reembolsos',
        desc: refundCopy('es').combined,
      }
    },
    trustSection: {
      title: 'Por Qué las Familias Confían en Nosotros',
      independent: { title: 'Práctica Independiente', desc: 'Sin compañías de seguros. Sin conflictos de interés. Decisiones clínicas basadas únicamente en las necesidades de tu padre/madre.' },
      licensed: { title: 'Licenciado y Experimentado', desc: 'Christian Portalatín es un farmacéutico licenciado en Puerto Rico con entrenamiento especializado en manejo de terapia de medicamentos, cuidado de VIH, y farmacia nuclear. Ex Farmacéutico Nuclear en Cardinal Health PR. Actualmente sirviendo en el Centro Médico de Puerto Rico.' },
      diaspora: { title: 'Enfocado en la Diáspora', desc: 'Hablamos tu idioma—literalmente. Inglés para ti, español para proveedores en la isla. Entendemos la preocupación de las 1,000 millas.' },
      guarantee: { title: 'Reembolsos', desc: refundCopy('es').combined }
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

function detailLines(rows, index, lang) {
  return rows.map((row) => {
    let value = row.values[index];
    if (value === 'yes') value = lang === 'es' ? 'Sí' : 'Yes';
    if (value === 'no') value = lang === 'es' ? 'No' : 'No';
    return `${row.label}: ${value}`;
  });
}

function ServiceNarrative({
  eyebrow, title, forLabel, forWhom, doesLabel, does, note, detailsLabel, details, children,
}) {
  return (
    <article className="p-6 sm:p-8 flex flex-col h-full" style={{ backgroundColor: 'var(--paper)', borderRadius: '28px' }}>
      {eyebrow && (
        <p className="font-body text-sm font-semibold mb-2" style={{ color: 'var(--pine)' }}>{eyebrow}</p>
      )}
      <h3 className="font-display text-2xl font-medium text-[#0F2E30]">{title}</h3>
      <p className="font-body text-sm font-semibold mt-5" style={{ color: 'var(--pine)' }}>{forLabel}</p>
      <p className="font-body mt-1 leading-relaxed" style={{ color: 'var(--muted-ink)' }}>{forWhom}</p>
      <p className="font-body text-sm font-semibold mt-4" style={{ color: 'var(--pine)' }}>{doesLabel}</p>
      <p className="font-body mt-1 leading-relaxed" style={{ color: 'var(--muted-ink)' }}>{does}</p>
      {note && <p className="font-body text-sm mt-3" style={{ color: 'var(--pine)' }}>{note}</p>}
      {details?.length > 0 && (
        <div className="mt-4">
          <p className="font-body text-sm font-semibold" style={{ color: 'var(--pine)' }}>{detailsLabel}</p>
          <ul className="mt-2 space-y-2">
            {details.map((item) => (
              <li key={item} className="font-body text-sm leading-relaxed" style={{ color: 'var(--muted-ink)' }}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-auto pt-6">{children}</div>
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
      name: `${t.pricing.oneTime.transition.name} (${t.pricing.transitionDetail.standard.name})`,
      price: t.pricing.transitionDetail.standard.amount,
      period: '',
    },
    transitionExpress: {
      key: 'transitionExpress',
      mode: 'payment',
      name: `${t.pricing.oneTime.transition.name} (${t.pricing.transitionDetail.expedited.name})`,
      price: t.pricing.transitionDetail.expedited.amount,
      period: '',
    },
  };
  const checkoutSelection = checkoutCatalog[checkoutPlan] || null;

  const faqs = [
    { q: lang === 'en' ? "Do you visit my parent's home unannounced?" : "¿Visitas la casa de mi padre/madre sin anunciar?", a: lang === 'en' ? "Never. All visits are scheduled in advance with your parent (and you, if you'd like to join virtually). We respect their privacy and independence." : "Nunca. Todas las visitas se agendan con anticipación con tu padre/madre (y contigo, si deseas unirte virtualmente). Respetamos su privacidad e independencia." },
    { q: lang === 'en' ? "How do you communicate with my parent's doctor?" : "¿Cómo te comunicas con el médico de mi padre/madre?", a: lang === 'en' ? "We use SBAR (Situation-Background-Assessment-Recommendation) format to provide clear, clinical recommendations. We don't replace the physician—we support their care plan with medication expertise." : "Usamos el formato SBAR (Situación-Antecedentes-Evaluación-Recomendación) para proveer recomendaciones clínicas claras. No reemplazamos al médico—apoyamos su plan de cuidado con experiencia en medicamentos." },
    { q: lang === 'en' ? "What if my parent lives outside San Juan?" : "¿Qué pasa si mi padre/madre vive fuera de San Juan?", a: lang === 'en' ? "We serve the greater San Juan metro area (Bayamón, Carolina, Guaynabo, Trujillo Alto) at standard rates. We can travel to Dorado, Caguas, and Arecibo with a travel surcharge. For areas outside these, we recommend starting with our Remote Foundation tier." : "Servimos el área metropolitana de San Juan (Bayamón, Carolina, Guaynabo, Trujillo Alto) a tarifas estándar. Podemos viajar a Dorado, Caguas y Arecibo con tarifa de viaje adicional. Para áreas fuera de estas, recomendamos comenzar con nuestro nivel Fundación Remoto." },
    // PENDING LEGAL REVIEW by Natalie Ramos. See src/lib/refundPolicy.js
    { q: lang === 'en' ? 'How do I cancel a subscription?' : '¿Cómo cancelo una suscripción?', a: refundCopy(lang === 'en' ? 'en' : 'es').combined },
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
                    <span className="text-sm" style={{ color: 'var(--sage)' }}>{item}</span>
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

      <section id="services" className="py-20 px-6 sm:px-8" style={{ backgroundColor: 'var(--sand)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-4xl font-medium text-[#0F2E30] mb-4">{t.pricing.sectionTitle}</h2>
            <p className="text-xl mb-3" style={{ color: 'var(--muted-ink)' }}>{t.pricing.sectionSubtitle}</p>
            <p className="font-body text-base" style={{ color: 'var(--pine)' }}>{t.pricing.foundingNote}</p>
          </div>

          <div className="mb-16 max-w-3xl">
            <ServiceNarrative
              title={t.pricing.freeConsult.name}
              forLabel={t.pricing.labels.forWhom}
              forWhom={t.pricing.freeConsult.forWhom}
              doesLabel={t.pricing.labels.does}
              does={t.pricing.freeConsult.does}
            >
              <p className="font-body text-sm mb-3" style={{ color: 'var(--muted-ink)' }}>{t.pricing.freeConsult.priceLine}</p>
              <button type="button" data-action="calendly" data-plan="free-consult" onClick={openCalendly} className="btn-capsule btn-capsule-primary w-full sm:w-auto inline-flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" strokeWidth={2.5} />
                {t.pricing.freeConsult.cta}
              </button>
            </ServiceNarrative>
          </div>

          <h3 className="font-display text-3xl font-medium text-[#0F2E30] mb-2">{t.pricing.monthlyTitle}</h3>
          <p className="font-body text-lg mb-8" style={{ color: 'var(--muted-ink)' }}>{t.pricing.subscriptions.subtitle}</p>
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {['foundation', 'enhanced', 'concierge'].map((key, tierIndex) => {
              const tier = t.pricing.subscriptions[key];
              return (
                <ServiceNarrative
                  key={key}
                  eyebrow={tier.badge}
                  title={tier.name}
                  forLabel={t.pricing.labels.forWhom}
                  forWhom={tier.forWhom}
                  doesLabel={t.pricing.labels.does}
                  does={tier.does}
                  note={tier.spots}
                  detailsLabel={t.pricing.labels.detail}
                  details={detailLines(t.pricing.compare.rows, tierIndex, lang)}
                >
                  <p className="font-body text-sm mb-3" style={{ color: 'var(--muted-ink)' }}>{tier.priceLine}</p>
                  <button
                    type="button"
                    data-action="checkout"
                    data-plan={key}
                    onClick={() => setCheckoutPlan(key)}
                    className="btn-capsule btn-capsule-primary w-full"
                  >
                    {tier.cta}
                  </button>
                  {key === 'foundation' && (
                    <div className="mt-5">
                      <p className="font-body text-sm mb-3" style={{ color: 'var(--muted-ink)' }}>{tier.plusPriceLine}</p>
                      <button
                        type="button"
                        data-action="checkout"
                        data-plan="foundationPlus"
                        onClick={() => setCheckoutPlan('foundationPlus')}
                        className="btn-capsule btn-capsule-outline w-full"
                      >
                        {tier.plusCta}
                      </button>
                    </div>
                  )}
                </ServiceNarrative>
              );
            })}
          </div>

          <h3 className="font-display text-3xl font-medium text-[#0F2E30] mb-2">{t.pricing.onceTitle}</h3>
          <p className="font-body text-lg mb-8" style={{ color: 'var(--muted-ink)' }}>{t.pricing.oneTime.subtitle}</p>
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {[
              ['consult', t.pricing.oneTime.consultation],
              ['safetyAudit', t.pricing.oneTime.audit],
              ['homeVisit', t.pricing.oneTime.homeVisit],
            ].map(([key, service]) => (
              <ServiceNarrative
                key={key}
                title={service.name}
                forLabel={t.pricing.labels.forWhom}
                forWhom={service.forWhom}
                doesLabel={t.pricing.labels.does}
                does={service.does}
              >
                <p className="font-body text-sm mb-3" style={{ color: 'var(--muted-ink)' }}>{service.priceLine}</p>
                <button
                  type="button"
                  data-action="checkout"
                  data-plan={key}
                  onClick={() => setCheckoutPlan(key)}
                  className="btn-capsule btn-capsule-primary w-full"
                >
                  {service.cta}
                </button>
              </ServiceNarrative>
            ))}
          </div>

          <div className="p-6 sm:p-10 mb-16" style={{ backgroundColor: 'var(--paper)', borderRadius: '28px' }}>
            <h3 className="font-display text-3xl font-medium text-[#0F2E30] mb-2">{t.pricing.transitionDetail.title}</h3>
            <p className="font-body text-lg mb-6" style={{ color: 'var(--muted-ink)' }}>{t.pricing.transitionDetail.subtitle}</p>
            <p className="font-body text-sm font-semibold" style={{ color: 'var(--pine)' }}>{t.pricing.labels.forWhom}</p>
            <p className="font-body mt-1 mb-4 leading-relaxed" style={{ color: 'var(--muted-ink)' }}>{t.pricing.transitionDetail.forWhom}</p>
            <p className="font-body text-sm font-semibold" style={{ color: 'var(--pine)' }}>{t.pricing.labels.does}</p>
            <p className="font-body mt-1 mb-8 leading-relaxed" style={{ color: 'var(--muted-ink)' }}>{t.pricing.transitionDetail.does}</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {t.pricing.transitionDetail.days.map((d) => (
                <div key={d.day} className="p-4" style={{ backgroundColor: 'var(--sand)', borderRadius: '20px' }}>
                  <p className="font-body font-semibold text-sm mb-1" style={{ color: 'var(--pine)' }}>{d.day}</p>
                  <p className="font-body text-sm" style={{ color: 'var(--muted-ink)' }}>{d.label}</p>
                </div>
              ))}
            </div>

            <p className="font-body text-sm font-semibold mb-3" style={{ color: 'var(--pine)' }}>{t.pricing.labels.detail}</p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
              {t.pricing.transitionDetail.included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--sage)' }} strokeWidth={2.5} />
                  <span className="font-body text-sm leading-relaxed" style={{ color: 'var(--muted-ink)' }}>{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                ['transition', t.pricing.transitionDetail.standard],
                ['transitionExpress', t.pricing.transitionDetail.expedited],
              ].map(([key, opt]) => (
                <div key={key} className="p-6 flex flex-col" style={{ backgroundColor: 'var(--sand)', borderRadius: '20px' }}>
                  <h4 className="font-display text-xl font-medium text-[#0F2E30] mb-2">{opt.name}</h4>
                  {opt.perk && <p className="font-body text-sm mb-4" style={{ color: 'var(--pine)' }}>{opt.perk}</p>}
                  <div className="mt-auto">
                    <p className="font-body text-sm mb-3" style={{ color: 'var(--muted-ink)' }}>{opt.priceLine}</p>
                    <button
                      type="button"
                      data-action="checkout"
                      data-plan={key}
                      onClick={() => setCheckoutPlan(key)}
                      className="btn-capsule btn-capsule-primary w-full"
                    >
                      {opt.cta}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h3 className="font-display text-3xl font-medium text-[#0F2E30] mb-2">{t.pricing.b2b.title}</h3>
          <p className="font-body text-lg mb-8" style={{ color: 'var(--muted-ink)' }}>{t.pricing.b2b.subtitle}</p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              ['b2b-transition', t.pricing.b2b.transition10, Building2],
              ['b2b-review', t.pricing.b2b.review10, Users],
            ].map(([plan, item, Icon]) => (
              <article key={plan} className="p-6 sm:p-8 flex flex-col" style={{ backgroundColor: 'var(--paper)', borderRadius: '28px' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--pine)' }}>
                  <Icon className="w-6 h-6 text-[#F4EFE6]" strokeWidth={2} />
                </div>
                <h4 className="font-display text-2xl font-medium text-[#0F2E30] mb-3">{item.name}</h4>
                <p className="font-body leading-relaxed flex-1" style={{ color: 'var(--muted-ink)' }}>{item.desc}</p>
                <p className="font-body text-sm mt-6 mb-3" style={{ color: 'var(--muted-ink)' }}>{item.price}{item.period}</p>
                <button type="button" data-action="calendly" data-plan={plan} onClick={openCalendly} className="btn-capsule btn-capsule-outline w-full">
                  {item.cta}
                </button>
              </article>
            ))}
          </div>
          <div className="p-8 mb-16" style={{ backgroundColor: 'var(--paper)', borderRadius: '28px' }}>
            <p className="font-body text-lg mb-4" style={{ color: 'var(--muted-ink)' }}>{t.pricing.b2b.custom}</p>
            <a href="mailto:portalatin@mifarmaceuticopr.com" className="btn-capsule inline-flex items-center gap-2" style={{ backgroundColor: 'var(--pine)', color: 'var(--paper)' }}>
              <Mail className="w-5 h-5" strokeWidth={2.5} />
              {t.pricing.b2b.cta}
            </a>
          </div>

          {/* PENDING LEGAL REVIEW by Natalie Ramos. See src/lib/refundPolicy.js */}
          <div className="p-8 max-w-3xl" style={{ backgroundColor: 'var(--paper)', borderRadius: '28px' }}>
            <h3 className="font-display text-2xl font-medium text-[#0F2E30] mb-2">{t.pricing.guarantee.title}</h3>
            <p className="font-body leading-relaxed" style={{ color: 'var(--muted-ink)' }}>{t.pricing.guarantee.desc}</p>
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
              <div className="space-y-2 font-body text-sm" style={{ color: 'var(--sage)' }}>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" strokeWidth={2.5} />(787) 667-6560</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" strokeWidth={2.5} />portalatin@mifarmaceuticopr.com</p>
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
              <p className="font-body text-sm mb-2" style={{ color: 'var(--sage)' }}>{t.footer.license}</p>
              <Link to="/acuerdo-de-servicio" className="font-body text-sm block hover:text-[#F4EFE6] transition" style={{ color: 'var(--sage)' }}>
                {lang === 'es' ? 'Acuerdo de servicio' : 'Service agreement'}
              </Link>
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
