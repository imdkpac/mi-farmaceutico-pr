import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, Shield, CheckCircle, Upload, Clipboard, 
  Award, Globe, AlertCircle, ChevronDown, ChevronRight,
  Star, Clock, MapPin, Heart, Menu, X as CloseIcon, Moon, Sun, X
} from 'lucide-react';
import CheckoutModal from '../components/CheckoutModal';
import CalendlyModal from '../components/CalendlyModal';
import { STRIPE_PRICES } from '../config/stripeConfig';
import { trackScheduleClick, trackTierSelection, trackOneTimeService, trackPhoneClick } from '../utils/analytics';

// Translation dictionary
const translations = {
  en: {
    nav: {
      howItWorks: 'How It Works',
      services: 'Services',
      about: 'About',
      schedule: 'Schedule Consultation'
    },
    hero: {
      title: "Your Parents' Medication Guardian in ",
      location: 'Puerto Rico',
      subtitle: 'Professional oversight for diaspora families managing care from 1,000 miles away',
      ctaPrimary: 'Schedule Free Consultation',
      ctaSecondary: 'See How It Works'
    },
    trust: {
      licensed: 'Puerto Rico and Florida Licensed Pharmacist',
      hipaa: 'HIPAA Compliant',
      bilingual: 'English/Spanish Bilingual',
      focused: '100% Focused on Medication Safety'
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Simple, transparent process to get professional medication oversight for your loved ones',
      step1: {
        title: 'You Share',
        desc: 'Schedule a free 15-minute consultation. Share your parent\'s medication list and concerns.'
      },
      step2: {
        title: 'We Assess',
        desc: 'We review your parent\'s complete medication history, coordinate with their pharmacies and doctors in Puerto Rico, and conduct an in-home evaluation if clinically indicated. All findings are documented in a secure report shared with your family.'
      },
      step3: {
        title: 'You Relax',
        desc: 'Receive monthly reports and have direct access to your pharmacist via secure messaging.'
      },
      serviceArea: 'Serving families in NY, FL, Chicago, and beyond. Core service area: San Juan Metro, Bayamón, Carolina, Guaynabo.'
    },
    pricing: {
      notSure: 'Not Sure Where to Start?',
      mostChoose: 'Most families choose this:',
      foundation: {
        badge: 'Remote Monitoring Only',
        name: 'Foundation',
        price: '$110',
        period: '/month',
        note: '$165 for 2 parents',
        desc: 'Professional monitoring without home visits',
        bestFor: 'Best for: Simple regimens, families who visit often',
        cta: 'Choose Foundation'
      },
      enhanced: {
        badge: 'Hybrid Care',
        popular: 'Most Popular',
        name: 'Enhanced',
        price: '$195',
        period: '/month',
        desc: 'Remote oversight + in-home visits when clinically needed',
        cta: 'Start with Enhanced'
      },
      concierge: {
        badge: 'Limited Availability',
        name: 'Concierge',
        price: '$325',
        period: '/month',
        desc: 'White-glove advocacy for high-complexity situations',
        bestFor: 'Best for: 10+ medications, multiple specialists, cognitive concerns',
        spots: 'Only 3 spots available for February 2026 intake',
        cta: 'Apply for Concierge'
      },
      guarantee: {
        title: '30-Day Peace of Mind Guarantee',
        desc: "If you're not satisfied after the first month, we'll refund 100% of your subscription fee. No questions asked."
      }
    },
    immediate: {
      title: 'Need Immediate Help? Start Here',
      subtitle: 'One-time services for urgent situations',
      transition: {
        title: 'Just Out of Hospital?',
        price: '$650',
        desc: 'Transition of Care - Post-hospital medication reconciliation',
        cta: 'Book Transition Care',
        note: 'Most families upgrade to Enhanced after'
      },
      homeVisit: {
        title: 'Medication Chaos at Home?',
        price: '$350',
        desc: 'In-Home Pharmacist Visit',
        cta: 'Schedule Home Visit',
        note: 'Travel fee may apply outside core area'
      },
      audit: {
        title: 'Not Sure What They Need?',
        price: '$250',
        desc: 'Senior Safety & Medication Audit',
        cta: 'Book Safety Audit',
        note: 'Entry-level service'
      }
    },
    trustSection: {
      title: 'Why Families Trust Us',
      independent: {
        title: 'Independent Practice',
        desc: "No insurance companies. No conflicts of interest. Clinical decisions based solely on your parent's needs."
      },
      licensed: {
        title: 'Licensed & Experienced',
        desc: 'Christian Portalatín is a Puerto Rico-licensed pharmacist with specialized training in medication therapy management, HIV care, and nuclear pharmacy. Former Nuclear Pharmacist at Cardinal Health PR with clinical pharmacy experience.'
      },
      diaspora: {
        title: 'Diaspora-Focused',
        desc: 'We speak your language—literally. English for you, Spanish for island providers. We understand the 1,000-mile worry.'
      },
      guarantee: {
        title: '30-Day Peace of Mind Guarantee',
        desc: "Not satisfied after your first month? We'll refund 100% of your subscription fee. No questions asked. We only succeed when your family truly benefits from our service."
      }
    },
    scope: {
      title: 'What We Do (And Don\'t Do)',
      do: {
        title: 'What We Do',
        items: [
          'Medication reconciliation and safety monitoring',
          'Pharmacy and prescriber coordination',
          'In-home medication organization (Enhanced/Concierge)',
          'Family communication and monthly reporting',
          'Post-hospitalization transition support'
        ]
      },
      dont: {
        title: "What We Don't Do",
        items: [
          'Emergency or after-hours medical care (call 911)',
          'Diagnose conditions or prescribe medications',
          "Replace your parent's physician",
          'Provide caregiving or daily living assistance',
          'Bill insurance (keeps us independent)'
        ]
      }
    },
    faq: {
      title: 'Frequently Asked Questions'
    },
    finalCta: {
      title: 'Ready to Get Started?',
      subtitle: "Schedule a free 15-minute consultation to discuss your parent's medication needs",
      cta: 'Schedule Free Consultation'
    },
    footer: {
      contact: 'Contact',
      quickLinks: 'Quick Links',
      legal: 'Legal',
      copyright: '© 2026 Lucesnegras LLC',
      license: 'Licensed Clinical Pharmacy Practice in Puerto Rico',
      creds: 'Professional pharmaceutical services by Christian Alexis Portalatín Cordero, Pharm.D. | Puerto Rico & Florida Licensed Pharmacist'
    },
    mobile: {
      questions: 'Questions?',
      cta: 'Text or Call'
    }
  },
  es: {
    nav: {
      howItWorks: 'Cómo Funciona',
      services: 'Servicios',
      about: 'Nosotros',
      schedule: 'Agendar Consulta'
    },
    hero: {
      title: 'El Guardián de Medicamentos de Tus Padres en ',
      location: 'Puerto Rico',
      subtitle: 'Supervisión profesional para familias de la diáspora manejando cuidado desde 1,000 millas de distancia',
      ctaPrimary: 'Agendar Consulta Gratis',
      ctaSecondary: 'Ver Cómo Funciona'
    },
    trust: {
      licensed: 'Farmacéutico Licenciado en Puerto Rico y Florida',
      hipaa: 'Cumplimiento HIPAA',
      bilingual: 'Bilingüe Inglés/Español',
      focused: '100% Enfocado en Seguridad de Medicamentos'
    },
    howItWorks: {
      title: 'Cómo Funciona',
      subtitle: 'Proceso simple y transparente para obtener supervisión profesional de medicamentos para tus seres queridos',
      step1: {
        title: 'Tú Compartes',
        desc: 'Agenda una consulta gratuita de 15 minutos. Comparte la lista de medicamentos de tu padre/madre y tus preocupaciones.'
      },
      step2: {
        title: 'Nosotros Evaluamos',
        desc: 'Revisamos el historial completo de medicamentos de tu padre/madre, coordinamos con sus farmacias y doctores en Puerto Rico, y realizamos una evaluación en casa si es clínicamente indicado. Todos los hallazgos se documentan en un reporte seguro compartido con tu familia.'
      },
      step3: {
        title: 'Tú Descansas',
        desc: 'Recibe reportes mensuales y ten acceso directo a tu farmacéutico vía mensajería segura.'
      },
      serviceArea: 'Sirviendo familias en NY, FL, Chicago y más. Área de servicio principal: Metro San Juan, Bayamón, Carolina, Guaynabo.'
    },
    pricing: {
      notSure: '¿No Sabes Por Dónde Empezar?',
      mostChoose: 'La mayoría de familias elige esto:',
      foundation: {
        badge: 'Monitoreo Remoto Solamente',
        name: 'Fundación',
        price: '$110',
        period: '/mes',
        note: '$165 por 2 padres',
        desc: 'Monitoreo profesional sin visitas a domicilio',
        bestFor: 'Ideal para: Regímenes simples, familias que visitan frecuentemente',
        cta: 'Elegir Fundación'
      },
      enhanced: {
        badge: 'Cuidado Híbrido',
        popular: 'Más Popular',
        name: 'Mejorado',
        price: '$195',
        period: '/mes',
        desc: 'Supervisión remota + visitas a domicilio cuando sea clínicamente necesario',
        cta: 'Comenzar con Mejorado'
      },
      concierge: {
        badge: 'Disponibilidad Limitada',
        name: 'Concierge',
        price: '$325',
        period: '/mes',
        desc: 'Abogacía de guante blanco para situaciones de alta complejidad',
        bestFor: 'Ideal para: 10+ medicamentos, múltiples especialistas, preocupaciones cognitivas',
        spots: 'Solo 3 espacios disponibles para intake de febrero 2026',
        cta: 'Aplicar para Concierge'
      },
      guarantee: {
        title: 'Garantía de Tranquilidad de 30 Días',
        desc: 'Si no estás satisfecho después del primer mes, te reembolsaremos el 100% de tu cuota de suscripción. Sin preguntas.'
      }
    },
    immediate: {
      title: '¿Necesitas Ayuda Inmediata? Empieza Aquí',
      subtitle: 'Servicios únicos para situaciones urgentes',
      transition: {
        title: '¿Recién Salido del Hospital?',
        price: '$650',
        desc: 'Transición de Cuidado - Reconciliación de medicamentos post-hospital',
        cta: 'Reservar Transición de Cuidado',
        note: 'La mayoría de familias mejora a Mejorado después'
      },
      homeVisit: {
        title: '¿Caos de Medicamentos en Casa?',
        price: '$350',
        desc: 'Visita de Farmacéutico a Domicilio',
        cta: 'Agendar Visita a Domicilio',
        note: 'Tarifa de viaje puede aplicar fuera del área principal'
      },
      audit: {
        title: '¿No Sabes Qué Necesitan?',
        price: '$250',
        desc: 'Auditoría de Seguridad y Medicamentos para Adultos Mayores',
        cta: 'Reservar Auditoría de Seguridad',
        note: 'Servicio de nivel inicial'
      }
    },
    trustSection: {
      title: 'Por Qué las Familias Confían en Nosotros',
      independent: {
        title: 'Práctica Independiente',
        desc: 'Sin compañías de seguros. Sin conflictos de interés. Decisiones clínicas basadas únicamente en las necesidades de tu padre/madre.'
      },
      licensed: {
        title: 'Licenciado y Experimentado',
        desc: 'Christian Portalatín es un farmacéutico licenciado en Puerto Rico con entrenamiento especializado en manejo de terapia de medicamentos, cuidado de VIH, y farmacia nuclear. Ex Farmacéutico Nuclear en Cardinal Health PR con experiencia en farmacia clínica.'
      },
      diaspora: {
        title: 'Enfocado en la Diáspora',
        desc: 'Hablamos tu idioma—literalmente. Inglés para ti, español para proveedores en la isla. Entendemos la preocupación de las 1,000 millas.'
      },
      guarantee: {
        title: 'Garantía de Tranquilidad de 30 Días',
        desc: '¿No satisfecho después de tu primer mes? Te reembolsaremos el 100% de tu cuota de suscripción. Sin preguntas. Solo tenemos éxito cuando tu familia realmente se beneficia de nuestro servicio.'
      }
    },
    scope: {
      title: 'Qué Hacemos (Y No Hacemos)',
      do: {
        title: 'Qué Hacemos',
        items: [
          'Reconciliación de medicamentos y monitoreo de seguridad',
          'Coordinación de farmacia y prescriptores',
          'Organización de medicamentos en casa (Mejorado/Concierge)',
          'Comunicación familiar y reportes mensuales',
          'Apoyo de transición post-hospitalización'
        ]
      },
      dont: {
        title: 'Qué No Hacemos',
        items: [
          'Cuidado médico de emergencia o fuera de horario (llama al 911)',
          'Diagnosticar condiciones o prescribir medicamentos',
          'Reemplazar al médico de tu padre/madre',
          'Proveer cuidado o asistencia de vida diaria',
          'Facturar seguros (nos mantiene independientes)'
        ]
      }
    },
    faq: {
      title: 'Preguntas Frecuentes'
    },
    finalCta: {
      title: '¿Listo para Empezar?',
      subtitle: 'Agenda una consulta gratuita de 15 minutos para discutir las necesidades de medicamentos de tu padre/madre',
      cta: 'Agendar Consulta Gratis'
    },
    footer: {
      contact: 'Contacto',
      quickLinks: 'Enlaces Rápidos',
      legal: 'Legal',
      copyright: '© 2026 Lucesnegras LLC',
      license: 'Práctica de Farmacia Clínica Licenciada en Puerto Rico',
      creds: 'Servicios farmacéuticos profesionales por Christian Alexis Portalatín Cordero, Pharm.D. | Farmacéutico Licenciado en Puerto Rico y Florida'
    },
    mobile: {
      questions: '¿Preguntas?',
      cta: 'Textear o Llamar'
    }
  }
};

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [checkoutModal, setCheckoutModal] = useState({ isOpen: false, plan: null, type: null });
  const [calendlyModal, setCalendlyModal] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  const t = translations[language];

  // Dark mode effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleScheduleClick = (location) => {
    trackScheduleClick(location);
    setCalendlyModal(true);
  };

  const handlePlanSelect = (plan, priceId, type = 'subscription') => {
    const priceNum = parseInt(plan.price.replace(/[^0-9]/g, ''));
    if (type === 'subscription') {
      trackTierSelection(plan.name, priceNum);
    } else {
      trackOneTimeService(plan.name, priceNum);
    }
    
    setCheckoutModal({
      isOpen: true,
      plan: { ...plan, priceId },
      type
    });
  };

  const faqs = [
    {
      q: language === 'en' ? "Do you visit my parent's home unannounced?" : "¿Visitas la casa de mi padre/madre sin anunciar?",
      a: language === 'en' 
        ? "Never. All visits are scheduled in advance with your parent (and you, if you'd like to join virtually). We respect their privacy and independence."
        : "Nunca. Todas las visitas se agendan con anticipación con tu padre/madre (y contigo, si deseas unirte virtualmente). Respetamos su privacidad e independencia."
    },
    {
      q: language === 'en' ? "How do you communicate with my parent's doctor?" : "¿Cómo te comunicas con el médico de mi padre/madre?",
      a: language === 'en'
        ? "We use SBAR (Situation-Background-Assessment-Recommendation) format to provide clear, clinical recommendations. We don't replace the physician—we support their care plan with medication expertise."
        : "Usamos el formato SBAR (Situación-Antecedentes-Evaluación-Recomendación) para proveer recomendaciones clínicas claras. No reemplazamos al médico—apoyamos su plan de cuidado con experiencia en medicamentos."
    },
    {
      q: language === 'en' ? "What if my parent lives outside San Juan?" : "¿Qué pasa si mi padre/madre vive fuera de San Juan?",
      a: language === 'en'
        ? "We serve the greater San Juan metro area (Bayamón, Carolina, Guaynabo, Trujillo Alto) at standard rates. We can travel to Dorado, Caguas, and Arecibo with a travel surcharge. For areas outside these, we recommend starting with our Remote Foundation tier."
        : "Servimos el área metropolitana de San Juan (Bayamón, Carolina, Guaynabo, Trujillo Alto) a tarifas estándar. Podemos viajar a Dorado, Caguas y Arecibo con tarifa de viaje adicional. Para áreas fuera de estas, recomendamos comenzar con nuestro nivel Fundación Remoto."
    },
    {
      q: language === 'en' ? "Can I cancel anytime?" : "¿Puedo cancelar en cualquier momento?",
      a: language === 'en'
        ? "Yes. Subscriptions are month-to-month. We also offer a 30-day money-back guarantee for your first month."
        : "Sí. Las suscripciones son de mes a mes. También ofrecemos una garantía de reembolso de 30 días para tu primer mes."
    },
    {
      q: language === 'en' ? "Do you accept insurance?" : "¿Aceptan seguro?",
      a: language === 'en'
        ? "No, we operate on a cash-pay basis. This keeps us independent and ensures our clinical decisions are based solely on your parent's needs, without insurance company interference."
        : "No, operamos con pago en efectivo. Esto nos mantiene independientes y asegura que nuestras decisiones clínicas se basen únicamente en las necesidades de tu padre/madre, sin interferencia de compañías de seguros."
    },
    {
      q: language === 'en' ? "How quickly can you start?" : "¿Qué tan rápido pueden empezar?",
      a: language === 'en'
        ? "Most families can begin within 3-5 business days after the initial consultation. For urgent situations like hospital discharges, we offer expedited Transition of Care services."
        : "La mayoría de familias pueden comenzar dentro de 3-5 días hábiles después de la consulta inicial. Para situaciones urgentes como altas hospitalarias, ofrecemos servicios de Transición de Cuidado acelerados."
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen">
      {/* Sticky Header */}
      <header className="fixed top-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Heart className="w-8 h-8 text-teal-600 mr-2" />
              <span className="text-xl font-bold text-slate-900 dark:text-white">Mi Farmacéutico en PR</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                <Globe className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                <span className="font-semibold text-sm text-slate-900 dark:text-white">{language === 'en' ? 'ES' : 'EN'}</span>
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                )}
              </button>

              <button onClick={() => scrollToSection('how-it-works')} className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition">
                {t.nav.howItWorks}
              </button>
              <button onClick={() => scrollToSection('services')} className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition">
                {t.nav.services}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition">
                {t.nav.about}
              </button>
              <a 
                href="tel:7874570388" 
                onClick={() => trackPhoneClick()}
                className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 font-semibold flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                (787) 457-0388
              </a>
              <button 
                onClick={() => handleScheduleClick('header')}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-lg font-semibold transition shadow-lg hover:shadow-xl"
              >
                {t.nav.schedule}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <CloseIcon className="w-6 h-6 text-slate-900 dark:text-white" /> : <Menu className="w-6 h-6 text-slate-900 dark:text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-700">
            <div className="px-4 py-4 space-y-3">
              <div className="flex items-center gap-3 mb-3">
                <button
                  onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                >
                  <Globe className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  <span className="font-semibold text-sm text-slate-900 dark:text-white">{language === 'en' ? 'ES' : 'EN'}</span>
                </button>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <Moon className="w-5 h-5 text-slate-600" />
                  )}
                </button>
              </div>
              
              <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded">
                {t.nav.howItWorks}
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded">
                {t.nav.services}
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded">
                {t.nav.about}
              </button>
              <a 
                href="tel:7874570388" 
                onClick={() => trackPhoneClick()}
                className="block w-full text-left px-4 py-2 text-teal-600 dark:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded font-semibold"
              >
                <Phone className="w-4 h-4 inline mr-2" />
                (787) 457-0388
              </a>
              <button 
                onClick={() => handleScheduleClick('mobile_menu')}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold"
              >
                {t.nav.schedule}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-blue-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                {t.hero.title}<span className="text-teal-600">{t.hero.location}</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                {t.hero.subtitle}
              </p>

              {/* Trust Bar */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{t.trust.licensed}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{t.trust.hipaa}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{t.trust.bilingual}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{t.trust.focused}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => handleScheduleClick('hero')}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition"
                >
                  {t.hero.ctaPrimary}
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 px-8 py-4 rounded-lg font-bold text-lg transition dark:text-teal-400 dark:border-teal-400"
                >
                  {t.hero.ctaSecondary}
                </button>
              </div>
            </div>

            {/* Right Column - Pharmacist Photo & Info */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
              <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden bg-gradient-to-br from-teal-100 to-blue-100">
                <img 
                  src="/christian-portalatin.jpg" 
                  alt="Christian Alexis Portalatín Cordero, Pharm.D., Puerto Rico Licensed Pharmacist"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full hidden items-center justify-center text-6xl">👨‍⚕️</div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Christian Alexis Portalatín Cordero, Pharm.D.
                </h3>
                <p className="text-teal-600 font-semibold mb-4">Clinical Pharmacist</p>
                <div className="text-left space-y-2 text-sm text-slate-600 dark:text-slate-300">
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

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{t.howItWorks.title}</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <div className="text-teal-600 font-bold text-lg mb-2">Step 1</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t.howItWorks.step1.title}</h3>
              <p className="text-slate-700 dark:text-slate-300">
                {t.howItWorks.step1.desc}
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clipboard className="w-10 h-10 text-white" />
              </div>
              <div className="text-blue-600 font-bold text-lg mb-2">Step 2</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t.howItWorks.step2.title}</h3>
              <p className="text-slate-700 dark:text-slate-300">
                {t.howItWorks.step2.desc}
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div className="text-green-600 font-bold text-lg mb-2">Step 3</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t.howItWorks.step3.title}</h3>
              <p className="text-slate-700 dark:text-slate-300">
                {t.howItWorks.step3.desc}
              </p>
            </div>
          </div>

          <div className="text-center bg-slate-50 dark:bg-slate-800 rounded-xl p-6">
            <p className="text-slate-600 dark:text-slate-300">
              <MapPin className="w-5 h-5 inline text-teal-600 mr-2" />
              {t.howItWorks.serviceArea}
            </p>
          </div>
        </div>
      </section>

      {/* Recommended Path Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{t.pricing.notSure}</h2>
            <p className="text-2xl text-teal-600 font-semibold">{t.pricing.mostChoose}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Foundation Tier */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 border-2 border-slate-200 dark:border-slate-700">
              <div className="inline-block bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                {t.pricing.foundation.badge}
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{t.pricing.foundation.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-teal-600">{t.pricing.foundation.price}</span>
                <span className="text-slate-600 dark:text-slate-400">{t.pricing.foundation.period}</span>
              </div>
              <p className="text-sm text-slate-500 mb-6">{t.pricing.foundation.note}</p>
              <p className="text-slate-700 dark:text-slate-300 mb-6">{t.pricing.foundation.desc}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 italic">
                {t.pricing.foundation.bestFor}
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{language === 'en' ? 'Monthly medication reconciliation' : 'Reconciliación mensual de medicamentos'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{language === 'en' ? 'Refill synchronization and pharmacy coordination' : 'Sincronización de recargas y coordinación de farmacia'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{language === 'en' ? 'Drug interaction monitoring' : 'Monitoreo de interacciones de medicamentos'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{language === 'en' ? 'Secure messaging during business hours' : 'Mensajería segura durante horas de oficina'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{language === 'en' ? 'Monthly family update summary' : 'Resumen mensual de actualización familiar'}</span>
                </li>
              </ul>
              <button 
                onClick={() => handlePlanSelect(
                  { name: t.pricing.foundation.name, sub: language === 'en' ? 'Single Parent' : 'Padre Soltero', price: t.pricing.foundation.price },
                  STRIPE_PRICES.subscriptions.foundation,
                  'subscription'
                )}
                className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 py-3 rounded-lg font-semibold transition dark:text-teal-400 dark:border-teal-400"
              >
                {t.pricing.foundation.cta}
              </button>
            </div>

            {/* Enhanced Tier - RECOMMENDED */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-8 border-4 border-teal-600 relative transform lg:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  ⭐ {t.pricing.enhanced.popular}
                </span>
              </div>
              <div className="inline-block bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-4 py-1 rounded-full text-sm font-semibold mb-4 mt-6">
                {t.pricing.enhanced.badge}
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{t.pricing.enhanced.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-teal-600">{t.pricing.enhanced.price}</span>
                <span className="text-slate-600 dark:text-slate-400">{t.pricing.enhanced.period}</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6 font-medium">{t.pricing.enhanced.desc}</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 dark:text-slate-300"><strong>{language === 'en' ? 'Everything in Foundation' : 'Todo en Fundación'}</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{language === 'en' ? 'Up to 1 in-home visit every 6 months' : 'Hasta 1 visita a domicilio cada 6 meses'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{language === 'en' ? 'Medication organization support' : 'Apoyo en organización de medicamentos'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{language === 'en' ? 'Same-business-day message response' : 'Respuesta de mensajes el mismo día hábil'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{language === 'en' ? 'Prescriber coordination for clarifications' : 'Coordinación con prescriptores para aclaraciones'}</span>
                </li>
              </ul>
              <button 
                onClick={() => handlePlanSelect(
                  { name: t.pricing.enhanced.name, sub: language === 'en' ? 'Most Popular Plan' : 'Plan Más Popular', price: t.pricing.enhanced.price },
                  STRIPE_PRICES.subscriptions.enhanced,
                  'subscription'
                )}
                className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white py-4 rounded-lg font-bold text-lg transition shadow-lg"
              >
                {t.pricing.enhanced.cta}
              </button>
            </div>

            {/* Concierge Tier */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 border-2 border-amber-200 dark:border-amber-800">
              <div className="inline-block bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                {t.pricing.concierge.badge}
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{t.pricing.concierge.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-amber-600">{t.pricing.concierge.price}</span>
                <span className="text-slate-600 dark:text-slate-400">{t.pricing.concierge.period}</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6">{t.pricing.concierge.desc}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 italic">
                {t.pricing.concierge.bestFor}
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 dark:text-slate-300"><strong>{language === 'en' ? 'Everything in Enhanced' : 'Todo en Mejorado'}</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{language === 'en' ? 'Quarterly virtual check-ins' : 'Check-ins virtuales trimestrales'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{language === 'en' ? 'Up to 2 in-home visits per year' : 'Hasta 2 visitas a domicilio por año'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{language === 'en' ? 'Highest message priority' : 'Prioridad más alta en mensajes'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{language === 'en' ? 'One Structured Medication Review annually' : 'Una Revisión Estructurada de Medicamentos anualmente'}</span>
                </li>
              </ul>
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3 mb-6">
                <p className="text-xs text-amber-800 dark:text-amber-300 font-semibold text-center">
                  ⚠️ {t.pricing.concierge.spots}
                </p>
              </div>
              <button 
                onClick={() => handlePlanSelect(
                  { name: t.pricing.concierge.name, sub: language === 'en' ? 'Complex Cases' : 'Casos Complejos', price: t.pricing.concierge.price },
                  STRIPE_PRICES.subscriptions.concierge,
                  'subscription'
                )}
                className="w-full border-2 border-amber-600 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20 py-3 rounded-lg font-semibold transition dark:text-amber-400 dark:border-amber-400"
              >
                {t.pricing.concierge.cta}
              </button>
            </div>
          </div>

          {/* 30-Day Guarantee */}
          <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-8 text-center max-w-3xl mx-auto">
            <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t.pricing.guarantee.title}</h3>
            <p className="text-slate-700 dark:text-slate-300">
              {t.pricing.guarantee.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Start Here Section - Immediate Help */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{t.immediate.title}</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">{t.immediate.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Transition of Care */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700 hover:border-teal-600 transition">
              <div className="bg-red-100 dark:bg-red-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{t.immediate.transition.title}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-teal-600">{t.immediate.transition.price}</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6">{t.immediate.transition.desc}</p>
              <ul className="space-y-2 mb-6 text-sm text-slate-600 dark:text-slate-400">
                <li>• {language === 'en' ? 'Discharge medication reconciliation' : 'Reconciliación de medicamentos de alta'}</li>
                <li>• {language === 'en' ? 'Conflict resolution with home meds' : 'Resolución de conflictos con medicamentos de casa'}</li>
                <li>• {language === 'en' ? '7-14 day stabilization plan' : 'Plan de estabilización de 7-14 días'}</li>
                <li>• {language === 'en' ? 'Pharmacy coordination' : 'Coordinación de farmacia'}</li>
              </ul>
              <button 
                onClick={() => handlePlanSelect(
                  { name: language === 'en' ? 'Transition of Care' : 'Transición de Cuidado', sub: language === 'en' ? 'Post-Hospital Service' : 'Servicio Post-Hospital', price: t.immediate.transition.price },
                  STRIPE_PRICES.oneTime.transition,
                  'payment'
                )}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold transition"
              >
                {t.immediate.transition.cta}
              </button>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 text-center">
                {t.immediate.transition.note}
              </p>
            </div>

            {/* In-Home Visit */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700 hover:border-teal-600 transition">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{t.immediate.homeVisit.title}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-teal-600">{t.immediate.homeVisit.price}</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6">{t.immediate.homeVisit.desc}</p>
              <ul className="space-y-2 mb-6 text-sm text-slate-600 dark:text-slate-400">
                <li>• {language === 'en' ? 'Pillbox setup and organization' : 'Configuración y organización de pastillero'}</li>
                <li>• {language === 'en' ? 'Medication purge (expired/duplicates)' : 'Purgado de medicamentos (expirados/duplicados)'}</li>
                <li>• {language === 'en' ? 'Technique education (inhalers, etc.)' : 'Educación de técnica (inhaladores, etc.)'}</li>
                <li>• {language === 'en' ? 'Home safety review' : 'Revisión de seguridad del hogar'}</li>
              </ul>
              <button 
                onClick={() => handlePlanSelect(
                  { name: language === 'en' ? 'In-Home Visit' : 'Visita a Domicilio', sub: language === 'en' ? 'Medication Organization' : 'Organización de Medicamentos', price: t.immediate.homeVisit.price },
                  STRIPE_PRICES.oneTime.homeVisit,
                  'payment'
                )}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold transition"
              >
                {t.immediate.homeVisit.cta}
              </button>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 text-center">
                {t.immediate.homeVisit.note}
              </p>
            </div>

            {/* Safety Audit */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700 hover:border-teal-600 transition">
              <div className="bg-amber-100 dark:bg-amber-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clipboard className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{t.immediate.audit.title}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-teal-600">{t.immediate.audit.price}</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6">{t.immediate.audit.desc}</p>
              <ul className="space-y-2 mb-6 text-sm text-slate-600 dark:text-slate-400">
                <li>• {language === 'en' ? '90-minute home assessment' : 'Evaluación de hogar de 90 minutos'}</li>
                <li>• {language === 'en' ? 'Medication storage evaluation' : 'Evaluación de almacenamiento de medicamentos'}</li>
                <li>• {language === 'en' ? 'Fall-risk review' : 'Revisión de riesgo de caídas'}</li>
                <li>• {language === 'en' ? 'PDF report with photos' : 'Reporte PDF con fotos'}</li>
              </ul>
              <button 
                onClick={() => handlePlanSelect(
                  { name: language === 'en' ? 'Safety Audit' : 'Auditoría de Seguridad', sub: language === 'en' ? 'Home Assessment' : 'Evaluación de Hogar', price: t.immediate.audit.price },
                  STRIPE_PRICES.oneTime.safetyAudit,
                  'payment'
                )}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold transition"
              >
                {t.immediate.audit.cta}
              </button>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 text-center">
                {t.immediate.audit.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{t.trustSection.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Independent Practice */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg">
              <div className="bg-teal-100 dark:bg-teal-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t.trustSection.independent.title}</h3>
              <p className="text-slate-700 dark:text-slate-300">
                {t.trustSection.independent.desc}
              </p>
            </div>

            {/* Licensed & Experienced */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t.trustSection.licensed.title}</h3>
              <p className="text-slate-700 dark:text-slate-300">
                {t.trustSection.licensed.desc}
              </p>
            </div>

            {/* Diaspora-Focused */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg">
              <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t.trustSection.diaspora.title}</h3>
              <p className="text-slate-700 dark:text-slate-300">
                {t.trustSection.diaspora.desc}
              </p>
            </div>

            {/* 30-Day Guarantee - NEW */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg border-2 border-green-200 dark:border-green-800">
              <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t.trustSection.guarantee.title}</h3>
              <p className="text-slate-700 dark:text-slate-300">
                {t.trustSection.guarantee.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Clarity Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{t.scope.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* What We Do */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-8 border-2 border-green-200 dark:border-green-800">
              <h3 className="text-2xl font-bold text-green-900 dark:text-green-300 mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                {t.scope.do.title}
              </h3>
              <ul className="space-y-3">
                {t.scope.do.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What We Don't Do - WITH X ICONS */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 border-2 border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <X className="w-6 h-6 text-red-500" />
                {t.scope.dont.title}
              </h3>
              <ul className="space-y-3">
                {t.scope.dont.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{t.faq.title}</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                >
                  <span className="font-semibold text-slate-900 dark:text-white pr-8">{faq.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-teal-600 flex-shrink-0 transition-transform ${
                      faqOpen === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {faqOpen === index && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-700 dark:text-slate-300">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t.finalCta.title}</h2>
          <p className="text-xl mb-8 opacity-90">
            {t.finalCta.subtitle}
          </p>
          <button 
            onClick={() => handleScheduleClick('final_cta')}
            className="bg-white text-teal-600 hover:bg-slate-100 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center gap-2 shadow-xl transition"
          >
            {t.finalCta.cta}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Contact */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">{t.footer.contact}</h4>
              <div className="space-y-3">
                <a href="tel:7874570388" className="flex items-center gap-2 hover:text-teal-400 transition">
                  <Phone className="w-4 h-4" />
                  (787) 457-0388
                </a>
                <a href="mailto:BoticaRxPR@outlook.com" className="flex items-center gap-2 hover:text-teal-400 transition">
                  <Mail className="w-4 h-4" />
                  BoticaRxPR@outlook.com
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">{t.footer.quickLinks}</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('how-it-works')} className="block hover:text-teal-400 transition">
                  {t.nav.howItWorks}
                </button>
                <button onClick={() => scrollToSection('services')} className="block hover:text-teal-400 transition">
                  {t.nav.services}
                </button>
                <button onClick={() => scrollToSection('about')} className="block hover:text-teal-400 transition">
                  {t.nav.about}
                </button>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">{t.footer.legal}</h4>
              <div className="space-y-2 text-sm">
                <p>{t.footer.copyright}</p>
                <p>{t.footer.license}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p className="text-slate-400">
              {t.footer.creds}
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Bar - Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 bg-teal-600 text-white p-4 md:hidden shadow-2xl z-40">
        <div className="flex items-center justify-between">
          <span className="font-semibold">{t.mobile.questions}</span>
          <a 
            href="tel:7874570388"
            onClick={() => trackPhoneClick()} 
            className="bg-white text-teal-600 px-4 py-2 rounded-lg font-bold hover:bg-slate-100 transition"
          >
            {t.mobile.cta}
          </a>
        </div>
      </div>

      {/* Modals */}
      {checkoutModal.isOpen && (
        <CheckoutModal
          isOpen={checkoutModal.isOpen}
          onClose={() => setCheckoutModal({ isOpen: false, plan: null, type: null })}
          plan={checkoutModal.plan}
          type={checkoutModal.type}
        />
      )}

      <CalendlyModal
        isOpen={calendlyModal}
        onClose={() => setCalendlyModal(false)}
      />
    </div>
  );
}
