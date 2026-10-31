import React, { useState, useEffect } from 'react';
import {
  Phone, Mail, Shield, CheckCircle, Clipboard,
  Award, Globe, AlertCircle, ChevronDown, ChevronRight,
  Star, Clock, MapPin, Heart, Moon, Sun
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import CheckoutModal from '../components/CheckoutModal';
import CalendlyModal from '../components/CalendlyModal';
import { STRIPE_PRICES } from '../config/stripeConfig';
import { trackScheduleClick, trackTierSelection, trackOneTimeService, trackPhoneClick } from '../utils/analytics';

/* ─── Translations ─── */
const translations = {
  en: {
    hero: {
      title: "Your Parents' Medication Guardian in ", location: 'Puerto Rico',
      subtitle: 'Professional oversight for diaspora families managing care from 1,000 miles away',
      ctaPrimary: 'Schedule Free Consultation', ctaSecondary: 'See How It Works'
    },
    trust: {
      licensed: 'Puerto Rico and Florida Licensed Pharmacist', hipaa: 'HIPAA Compliant',
      bilingual: 'English/Spanish Bilingual', focused: '100% Focused on Medication Safety'
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Simple, transparent process to get professional medication oversight for your loved ones',
      step1: { title: 'You Share', desc: "Schedule a free 15-minute consultation. Share your parent's medication list and concerns." },
      step2: { title: 'We Assess', desc: "We review your parent's complete medication history, coordinate with their pharmacies and doctors in Puerto Rico, and conduct an in-home evaluation if clinically indicated. All findings are documented in a secure report shared with your family." },
      step3: { title: 'You Relax', desc: 'Receive monthly reports and have direct access to your pharmacist via secure messaging.' },
      serviceArea: 'Serving families in NY, FL, Chicago, and beyond. Core service area: San Juan Metro, Bayamón, Carolina, Guaynabo.'
    },
    pricing: {
      notSure: 'Not Sure Where to Start?', mostChoose: 'Most families choose this:',
      foundation: { badge: 'Remote Monitoring Only', name: 'Foundation', price: '$110', period: '/month', note: '$165 for 2 parents', desc: 'Professional monitoring without home visits', bestFor: 'Best for: Simple regimens, families who visit often', cta: 'Choose Foundation' },
      enhanced: { badge: 'Hybrid Care', popular: 'Most Popular', name: 'Enhanced', price: '$195', period: '/month', desc: 'Remote oversight + in-home visits when clinically needed', cta: 'Start with Enhanced' },
      concierge: { badge: 'Limited Availability', name: 'Concierge', price: '$325', period: '/month', desc: 'White-glove advocacy for high-complexity situations', bestFor: 'Best for: 10+ medications, multiple specialists, cognitive concerns', spots: 'Only 3 spots available for September 2026 intake', cta: 'Apply for Concierge' },
      guarantee: { title: '30-Day Peace of Mind Guarantee', desc: "Not satisfied after your first month? Request a full refund in writing within 30 days of your service start date. Subsequent months are non-refundable. We only succeed when your family truly benefits." }
    },
    immediate: {
      title: 'Need Immediate Help? Start Here', subtitle: 'One-time services for urgent situations',
      transition: { title: 'Just Out of Hospital?', price: '$650', desc: 'Transition of Care - Post-hospital medication reconciliation', cta: 'Book Transition Care', note: 'Most families upgrade to Enhanced after' },
      homeVisit: { title: 'Medication Chaos at Home?', price: '$350', desc: 'In-Home Pharmacist Visit', cta: 'Schedule Home Visit', note: 'Travel fee may apply outside core area' },
      audit: { title: 'Not Sure What They Need?', price: '$250', desc: 'Senior Safety & Medication Audit', cta: 'Book Safety Audit', note: 'Entry-level service' }
    },
    trustSection: {
      title: 'Why Families Trust Us',
      independent: { title: 'Independent Practice', desc: "No insurance companies. No conflicts of interest. Clinical decisions based solely on your parent's needs." },
      licensed: { title: 'Licensed & Experienced', desc: 'Christian Portalatín is a Puerto Rico-licensed pharmacist with specialized training in medication therapy management, HIV care, and nuclear pharmacy. Former Nuclear Pharmacist at Cardinal Health PR with clinical pharmacy experience.' },
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
      ctaPrimary: 'Agendar Consulta Gratis', ctaSecondary: 'Ver Cómo Funciona'
    },
    trust: {
      licensed: 'Farmacéutico Licenciado en Puerto Rico y Florida', hipaa: 'Cumplimiento HIPAA',
      bilingual: 'Bilingüe Inglés/Español', focused: '100% Enfocado en Seguridad de Medicamentos'
    },
    howItWorks: {
      title: 'Cómo Funciona',
      subtitle: 'Proceso simple y transparente para obtener supervisión profesional de medicamentos para tus seres queridos',
      step1: { title: 'Tú Compartes', desc: 'Agenda una consulta gratuita de 15 minutos. Comparte la lista de medicamentos de tu padre/madre y tus preocupaciones.' },
      step2: { title: 'Nosotros Evaluamos', desc: 'Revisamos el historial completo de medicamentos de tu padre/madre, coordinamos con sus farmacias y doctores en Puerto Rico, y realizamos una evaluación en casa si es clínicamente indicado. Todos los hallazgos se documentan en un reporte seguro compartido con tu familia.' },
      step3: { title: 'Tú Descansas', desc: 'Recibe reportes mensuales y ten acceso directo a tu farmacéutico vía mensajería segura.' },
      serviceArea: 'Sirviendo familias en NY, FL, Chicago y más. Área de servicio principal: Metro San Juan, Bayamón, Carolina, Guaynabo.'
    },
    pricing: {
      notSure: '¿No Sabes Por Dónde Empezar?', mostChoose: 'La mayoría de familias elige esto:',
      foundation: { badge: 'Monitoreo Remoto Solamente', name: 'Fundación', price: '$110', period: '/mes', note: '$165 por 2 padres', desc: 'Monitoreo profesional sin visitas a domicilio', bestFor: 'Ideal para: Regímenes simples, familias que visitan frecuentemente', cta: 'Elegir Fundación' },
      enhanced: { badge: 'Cuidado Híbrido', popular: 'Más Popular', name: 'Mejorado', price: '$195', period: '/mes', desc: 'Supervisión remota + visitas a domicilio cuando sea clínicamente necesario', cta: 'Comenzar con Mejorado' },
      concierge: { badge: 'Disponibilidad Limitada', name: 'Concierge', price: '$325', period: '/mes', desc: 'Abogacía de guante blanco para situaciones de alta complejidad', bestFor: 'Ideal para: 10+ medicamentos, múltiples especialistas, preocupaciones cognitivas', spots: 'Solo 3 espacios disponibles para septiembre de 2026', cta: 'Aplicar para Concierge' },
      guarantee: { title: 'Garantía de Tranquilidad de 30 Días', desc: '¿No está satisfecho después del primer mes? Solicite un reembolso completo por escrito dentro de 30 días de su fecha de inicio. Los meses subsiguientes no son reembolsables.' }
    },
    immediate: {
      title: '¿Necesitas Ayuda Inmediata? Empieza Aquí', subtitle: 'Servicios únicos para situaciones urgentes',
      transition: { title: '¿Recién Salido del Hospital?', price: '$650', desc: 'Transición de Cuidado - Reconciliación de medicamentos post-hospital', cta: 'Reservar Transición de Cuidado', note: 'La mayoría de familias mejora a Mejorado después' },
      homeVisit: { title: '¿Caos de Medicamentos en Casa?', price: '$350', desc: 'Visita de Farmacéutico a Domicilio', cta: 'Agendar Visita a Domicilio', note: 'Tarifa de viaje puede aplicar fuera del área principal' },
      audit: { title: '¿No Sabes Qué Necesitan?', price: '$250', desc: 'Auditoría de Seguridad y Medicamentos para Adultos Mayores', cta: 'Reservar Auditoría de Seguridad', note: 'Servicio de nivel inicial' }
    },
    trustSection: {
      title: 'Por Qué las Familias Confían en Nosotros',
      independent: { title: 'Práctica Independiente', desc: 'Sin compañías de seguros. Sin conflictos de interés. Decisiones clínicas basadas únicamente en las necesidades de tu padre/madre.' },
      licensed: { title: 'Licenciado y Experimentado', desc: 'Christian Portalatín es un farmacéutico licenciado en Puerto Rico con entrenamiento especializado en manejo de terapia de medicamentos, cuidado de VIH, y farmacia nuclear. Ex Farmacéutico Nuclear en Cardinal Health PR con experiencia en farmacia clínica.' },
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

export default function LandingPage() {
  const { lang } = useLanguage();
  const [checkoutModal, setCheckoutModal] = useState({ isOpen: false, plan: null, type: null });
  const [calendlyModal, setCalendlyModal] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const handleScheduleClick = (location) => {
    trackScheduleClick(location);
    setCalendlyModal(true);
  };

  const handlePlanSelect = (plan, priceId, type = 'subscription') => {
    const priceNum = parseInt(plan.price.replace(/[^0-9]/g, ''));
    if (type === 'subscription') trackTierSelection(plan.name, priceNum);
    else trackOneTimeService(plan.name, priceNum);
    setCheckoutModal({ isOpen: true, plan: { ...plan, priceId }, type });
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
                <button onClick={() => handleScheduleClick('hero')} className="btn-capsule btn-capsule-primary text-lg px-8 py-4">
                  {t.hero.ctaPrimary}<ChevronRight className="w-5 h-5" strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Profile card — deep pine surface */}
            <div className="p-8 sm:p-10" style={{ backgroundColor: 'var(--deep-pine)', borderRadius: '28px' }}>
              <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden" style={{ backgroundColor: 'var(--pine)' }}>
                <img src="/christian-portalatin.jpg" alt="Christian Alexis Portalatín Cordero, Pharm.D." className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <div className="text-center">
                <h3 className="font-display text-2xl font-medium text-[#F4EFE6] mb-1">Christian Alexis Portalatín Cordero, Pharm.D.</h3>
                <p className="font-body font-medium mb-4" style={{ color: 'var(--sage)' }}>Clinical Pharmacist</p>
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
              { step: lang === 'es' ? 'Paso 1' : 'Step 1', icon: Phone, color: 'var(--pine)', t: t.howItWorks.step1 },
              { step: lang === 'es' ? 'Paso 2' : 'Step 2', icon: Clipboard, color: 'var(--deep-pine)', t: t.howItWorks.step2 },
              { step: lang === 'es' ? 'Paso 3' : 'Step 3', icon: Shield, color: 'var(--sage)', t: t.howItWorks.step3 },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-8" style={{ backgroundColor: 'var(--sand)', borderRadius: '28px' }}>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: item.color }}>
                    <Icon className="w-10 h-10 text-[#F4EFE6]" strokeWidth={2} />
                  </div>
                  <div className="font-body font-bold text-lg mb-2 text-center" style={{ color: 'var(--flamboyan)' }}>{item.step}</div>
                  <h3 className="font-display text-2xl font-medium text-[#0F2E30] mb-4 text-center">{item.t.title}</h3>
                  <p className="font-body text-base text-center" style={{ color: 'var(--muted-ink)' }}>{item.t.desc}</p>
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

      {/* Pricing — Sand background */}
      <section className="py-20 px-6 sm:px-8" style={{ backgroundColor: 'var(--sand)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-medium text-[#0F2E30] mb-4">{t.pricing.notSure}</h2>
            <p className="font-display text-2xl" style={{ color: 'var(--flamboyan)' }}>{t.pricing.mostChoose}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Foundation */}
            <div className="p-8" style={{ backgroundColor: 'var(--paper)', borderRadius: '28px' }}>
              <span className="inline-block px-4 py-1 rounded-full font-body font-semibold text-sm mb-4" style={{ backgroundColor: 'var(--sand)', color: 'var(--muted-ink)' }}>{t.pricing.foundation.badge}</span>
              <h3 className="font-display text-3xl font-medium text-[#0F2E30] mb-2">{t.pricing.foundation.name}</h3>
              <div className="mb-4"><span className="font-display text-4xl font-medium text-[#0F2E30]">{t.pricing.foundation.price}</span><span className="font-body" style={{ color: 'var(--muted-ink)' }}>{t.pricing.foundation.period}</span></div>
              <p className="text-sm mb-6" style={{ color: 'var(--muted-ink)' }}>{t.pricing.foundation.note}</p>
              <p className="font-body mb-6" style={{ color: 'var(--muted-ink)' }}>{t.pricing.foundation.desc}</p>
              <p className="text-sm mb-6 italic" style={{ color: 'var(--muted-ink)' }}>{t.pricing.foundation.bestFor}</p>
              <button onClick={() => handlePlanSelect({ name: t.pricing.foundation.name, sub: lang === 'en' ? 'Single Parent' : 'Padre Soltero', price: t.pricing.foundation.price }, STRIPE_PRICES.subscriptions.foundation, 'subscription')} className="btn-capsule btn-capsule-outline w-full">
                {t.pricing.foundation.cta}
              </button>
            </div>

            {/* Enhanced — highlighted */}
            <div className="p-8 relative lg:scale-105" style={{ backgroundColor: 'var(--paper)', borderRadius: '28px', border: '4px solid var(--pine)' }}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="px-6 py-2 rounded-full font-body font-bold text-sm text-[#F4EFE6]" style={{ backgroundColor: 'var(--flamboyan)' }}>⭐ {t.pricing.enhanced.popular}</span>
              </div>
              <span className="inline-block px-4 py-1 rounded-full font-body font-semibold text-sm mb-4 mt-6" style={{ backgroundColor: 'var(--sage)', color: 'var(--pine)' }}>{t.pricing.enhanced.badge}</span>
              <h3 className="font-display text-3xl font-medium text-[#0F2E30] mb-2">{t.pricing.enhanced.name}</h3>
              <div className="mb-6"><span className="font-display text-5xl font-medium text-[#0F2E30]">{t.pricing.enhanced.price}</span><span className="font-body" style={{ color: 'var(--muted-ink)' }}>{t.pricing.enhanced.period}</span></div>
              <p className="font-body font-medium mb-6" style={{ color: 'var(--muted-ink)' }}>{t.pricing.enhanced.desc}</p>
              <button onClick={() => handlePlanSelect({ name: t.pricing.enhanced.name, sub: lang === 'en' ? 'Most Popular Plan' : 'Plan Más Popular', price: t.pricing.enhanced.price }, STRIPE_PRICES.subscriptions.enhanced, 'subscription')} className="btn-capsule btn-capsule-primary w-full text-lg py-4">
                {t.pricing.enhanced.cta}
              </button>
            </div>

            {/* Concierge */}
            <div className="p-8" style={{ backgroundColor: 'var(--paper)', borderRadius: '28px' }}>
              <span className="inline-block px-4 py-1 rounded-full font-body font-semibold text-sm mb-4" style={{ backgroundColor: 'var(--sand)', color: 'var(--muted-ink)' }}>{t.pricing.concierge.badge}</span>
              <h3 className="font-display text-3xl font-medium text-[#0F2E30] mb-2">{t.pricing.concierge.name}</h3>
              <div className="mb-6"><span className="font-display text-4xl font-medium text-[#0F2E30]">{t.pricing.concierge.price}</span><span className="font-body" style={{ color: 'var(--muted-ink)' }}>{t.pricing.concierge.period}</span></div>
              <p className="font-body mb-6" style={{ color: 'var(--muted-ink)' }}>{t.pricing.concierge.desc}</p>
              <p className="text-sm mb-6 italic" style={{ color: 'var(--muted-ink)' }}>{t.pricing.concierge.bestFor}</p>
              <div className="p-3 mb-6 rounded-xl" style={{ backgroundColor: 'var(--sand)' }}>
                <p className="text-xs font-semibold text-center" style={{ color: 'var(--muted-ink)' }}>⚠️ {t.pricing.concierge.spots}</p>
              </div>
              <button onClick={() => handlePlanSelect({ name: t.pricing.concierge.name, sub: lang === 'en' ? 'Complex Cases' : 'Casos Complejos', price: t.pricing.concierge.price }, STRIPE_PRICES.subscriptions.concierge, 'subscription')} className="btn-capsule w-full" style={{ border: '3px solid var(--pine)', color: 'var(--pine)' }}>
                {t.pricing.concierge.cta}
              </button>
            </div>
          </div>

          <div className="p-8 text-center max-w-3xl mx-auto" style={{ backgroundColor: 'var(--paper)', borderRadius: '28px' }}>
            <Shield className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--sage)' }} strokeWidth={2} />
            <h3 className="font-display text-2xl font-medium text-[#0F2E30] mb-2">{t.pricing.guarantee.title}</h3>
            <p className="font-body" style={{ color: 'var(--muted-ink)' }}>{t.pricing.guarantee.desc}</p>
          </div>
        </div>
      </section>

      {/* Immediate Help — Paper */}
      <section className="py-20 px-6 sm:px-8" style={{ backgroundColor: 'var(--paper)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-medium text-[#0F2E30] mb-4">{t.immediate.title}</h2>
            <p className="text-xl" style={{ color: 'var(--muted-ink)' }}>{t.immediate.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: t.immediate.transition, priceId: STRIPE_PRICES.oneTime.transition, icon: AlertCircle, iconBg: 'var(--flamboyan)' },
              { t: t.immediate.homeVisit, priceId: STRIPE_PRICES.oneTime.homeVisit, icon: MapPin, iconBg: 'var(--deep-pine)' },
              { t: t.immediate.audit, priceId: STRIPE_PRICES.oneTime.safetyAudit, icon: Clipboard, iconBg: 'var(--sage)' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-8 transition hover:brightness-95" style={{ backgroundColor: 'var(--sand)', borderRadius: '28px' }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: item.iconBg }}>
                    <Icon className="w-8 h-8 text-[#F4EFE6]" strokeWidth={2} />
                  </div>
                  <h3 className="font-display text-2xl font-medium text-[#0F2E30] mb-3">{item.t.title}</h3>
                  <div className="mb-4"><span className="font-display text-3xl font-medium" style={{ color: 'var(--flamboyan)' }}>{item.t.price}</span></div>
                  <p className="font-body mb-6" style={{ color: 'var(--muted-ink)' }}>{item.t.desc}</p>
                  <button onClick={() => handlePlanSelect({ name: item.t.title, sub: item.t.desc, price: item.t.price }, item.priceId, 'payment')} className="btn-capsule btn-capsule-primary w-full">
                    {item.t.cta}
                  </button>
                  <p className="text-xs text-center mt-4" style={{ color: 'var(--muted-ink)' }}>{item.t.note}</p>
                </div>
              );
            })}
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
          <button onClick={() => handleScheduleClick('final_cta')} className="btn-capsule" style={{ backgroundColor: 'var(--paper)', color: 'var(--pine)' }}>
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
                <a href="/#services" className="block hover:text-[#F4EFE6] transition">{t.pricing.notSure}</a>
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

      {/* Modals */}
      <CheckoutModal isOpen={checkoutModal.isOpen} onClose={() => setCheckoutModal({ isOpen: false, plan: null, type: null })} plan={checkoutModal.plan} type={checkoutModal.type} />
      <CalendlyModal isOpen={calendlyModal} onClose={() => setCalendlyModal(false)} />
    </div>
  );
}
