import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, Shield, CheckCircle, Upload, Clipboard, 
  Award, Globe, AlertCircle, ChevronDown, ChevronRight,
  Star, Clock, MapPin, Heart, Menu, X as CloseIcon, Moon, Sun
} from 'lucide-react';
import CheckoutModal from '../components/CheckoutModal';
import CalendlyModal from '../components/CalendlyModal';
import { STRIPE_PRICES } from '../config/stripeConfig';
import { trackScheduleClick, trackTierSelection, trackOneTimeService, trackPhoneClick } from '../utils/analytics';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [checkoutModal, setCheckoutModal] = useState({ isOpen: false, plan: null, type: null });
  const [calendlyModal, setCalendlyModal] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

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
    // Track tier selection
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
      q: "Do you visit my parent's home unannounced?",
      a: "Never. All visits are scheduled in advance with your parent (and you, if you'd like to join virtually). We respect their privacy and independence."
    },
    {
      q: "How do you communicate with my parent's doctor?",
      a: "We use SBAR (Situation-Background-Assessment-Recommendation) format to provide clear, clinical recommendations. We don't replace the physicianâ€”we support their care plan with medication expertise."
    },
    {
      q: "What if my parent lives outside San Juan?",
      a: "We serve the greater San Juan metro area (BayamÃ³n, Carolina, Guaynabo, Trujillo Alto) at standard rates. We can travel to Dorado, Caguas, and Arecibo with a travel surcharge. For areas outside these, we recommend starting with our Remote Foundation tier."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Subscriptions are month-to-month. We also offer a 30-day money-back guarantee for your first month."
    },
    {
      q: "Do you accept insurance?",
      a: "No, we operate on a cash-pay basis. This keeps us independent and ensures our clinical decisions are based solely on your parent's needs, without insurance company interference."
    },
    {
      q: "How quickly can you start?",
      a: "Most families can begin within 3-5 business days after the initial consultation. For urgent situations like hospital discharges, we offer expedited Transition of Care services."
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-900">
      {/* Sticky Header */}
      <header className="fixed top-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Heart className="w-8 h-8 text-teal-600 mr-2" />
              <span className="text-xl font-bold text-slate-900">Mi FarmacÃ©utico en PR</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                <Globe className="w-4 h-4" />
                <span className="font-semibold text-sm dark:text-white">{language === 'en' ? 'ES' : 'EN'}</span>
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
                  <Moon className="w-5 h-5 text-slate-600" />
                )}
              </button>

              
              <button onClick={() => scrollToSection('how-it-works')} className="text-slate-700 dark:text-slate-300 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition">
                How It Works
              </button>
              <button onClick={() => scrollToSection('services')} className="text-slate-700 dark:text-slate-300 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="text-slate-700 dark:text-slate-300 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition">
                About
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
                Schedule Consultation
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <CloseIcon className="w-6 h-6 dark:text-white" /> : <Menu className="w-6 h-6 dark:text-white" />}
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
                  <Globe className="w-4 h-4" />
                  <span className="font-semibold text-sm dark:text-white">{language === 'en' ? 'ES' : 'EN'}</span>
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
                How It Works
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded">
                About
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
                Schedule Consultation
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
                Your Parents' Medication Guardian in <span className="text-teal-600">Puerto Rico</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 dark:text-slate-300 mb-8">
                Professional oversight for diaspora families managing care from 1,000 miles away
              </p>

              {/* Trust Bar */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">Puerto Rico and Florida Licensed Pharmacist</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">HIPAA Compliant</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">English/Spanish Bilingual</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">100% Focused on Medication Safety</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => handleScheduleClick('hero')}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition"
                >
                  Schedule Free Consultation
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 px-8 py-4 rounded-lg font-bold text-lg transition"
                >
                  See How It Works
                </button>
              </div>
            </div>

            {/* Right Column - Pharmacist Photo & Info */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
              <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden bg-gradient-to-br from-teal-100 to-blue-100">
                {/* TODO: Replace with professional headshot */}
                <img 
                  src="/christian-portalatin.jpg" 
                  alt="Christian Alexis PortalatÃ­n Cordero, Pharm.D., Puerto Rico Licensed Pharmacist"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to emoji if image not found
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full hidden items-center justify-center text-6xl">ðŸ‘¨â€âš•ï¸</div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white dark:text-white mb-2">
                  Christian Alexis PortalatÃ­n Cordero, Pharm.D.
                </h3>
                <p className="text-teal-600 font-semibold mb-4">Clinical Pharmacist</p>
                <div className="text-left space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <p>âœ“ Puerto Rico & Florida Licensed Pharmacist</p>
                  <p>âœ“ Community and Hospital Pharmacy Experience</p>
                  <p>âœ“ Nova Southeastern University Pharm.D. (2020)</p>
                  <p>âœ“ Former Clinical Staff Pharmacist at CPS</p>
                  <p>âœ“ Former Nuclear Pharmacist at Cardinal Health PR</p>
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
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">How It Works</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Simple, transparent process to get professional medication oversight for your loved ones
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <div className="text-teal-600 font-bold text-lg mb-2">Step 1</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">You Share</h3>
              <p className="text-slate-700 dark:text-slate-300 dark:text-slate-300">
                Schedule a free 15-minute consultation. Share your parent's medication list and concerns.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clipboard className="w-10 h-10 text-white" />
              </div>
              <div className="text-blue-600 font-bold text-lg mb-2">Step 2</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">We Assess</h3>
              <p className="text-slate-700 dark:text-slate-300 dark:text-slate-300">
                We review your parent's complete medication history, coordinate with their pharmacies and doctors in Puerto Rico, and conduct an in-home evaluation if clinically indicated. All findings are documented in a secure report shared with your family.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div className="text-green-600 font-bold text-lg mb-2">Step 3</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">You Relax</h3>
              <p className="text-slate-700 dark:text-slate-300 dark:text-slate-300">
                Receive monthly reports and have direct access to your pharmacist via secure messaging.
              </p>
            </div>
          </div>

          <div className="text-center bg-slate-50 dark:bg-slate-800 rounded-xl p-6">
            <p className="text-slate-600">
              <MapPin className="w-5 h-5 inline text-teal-600 mr-2" />
              <strong>Serving families in NY, FL, Chicago, and beyond.</strong> Core service area: San Juan Metro, BayamÃ³n, Carolina, Guaynabo.
            </p>
          </div>
        </div>
      </section>

      {/* Recommended Path Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Not Sure Where to Start?</h2>
            <p className="text-2xl text-teal-600 font-semibold">Most families choose this:</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Foundation Tier */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 border-2 border-slate-200 dark:border-slate-700">
              <div className="inline-block bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Remote Monitoring Only
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Foundation</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-teal-600">$110</span>
                <span className="text-slate-600">/month</span>
              </div>
              <p className="text-sm text-slate-500 mb-6">$165 for 2 parents</p>
              <p className="text-slate-700 dark:text-slate-300 mb-6">Professional monitoring without home visits</p>
              <p className="text-sm text-slate-600 mb-6 italic">
                Best for: Simple regimens, families who visit often
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Monthly medication reconciliation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Refill synchronization and pharmacy coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Drug interaction monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Secure messaging during business hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Monthly family update summary</span>
                </li>
              </ul>
              <button 
                onClick={() => handlePlanSelect(
                  { name: 'Foundation', sub: 'Single Parent', price: '$110' },
                  STRIPE_PRICES.subscriptions.foundation,
                  'subscription'
                )}
                className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 py-3 rounded-lg font-semibold transition"
              >
                Choose Foundation
              </button>
            </div>

            {/* Enhanced Tier - RECOMMENDED */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-8 border-4 border-teal-600 relative transform lg:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  â­ Most Popular
                </span>
              </div>
              <div className="inline-block bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-4 py-1 rounded-full text-sm font-semibold mb-4 mt-6">
                Hybrid Care
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Enhanced</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-teal-600">$195</span>
                <span className="text-slate-600">/month</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6 font-medium">Remote oversight + in-home visits when clinically needed</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700"><strong>Everything in Foundation</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Up to 1 in-home visit every 6 months</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Medication organization support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Same-business-day message response</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Prescriber coordination for clarifications</span>
                </li>
              </ul>
              <button 
                onClick={() => handlePlanSelect(
                  { name: 'Enhanced', sub: 'Most Popular Plan', price: '$195' },
                  STRIPE_PRICES.subscriptions.enhanced,
                  'subscription'
                )}
                className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white py-4 rounded-lg font-bold text-lg transition shadow-lg"
              >
                Start with Enhanced
              </button>
            </div>

            {/* Concierge Tier */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 border-2 border-amber-200">
              <div className="inline-block bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Limited Availability
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Concierge</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-amber-600">$325</span>
                <span className="text-slate-600">/month</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6">White-glove advocacy for high-complexity situations</p>
              <p className="text-sm text-slate-600 mb-6 italic">
                Best for: 10+ medications, multiple specialists, cognitive concerns
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700"><strong>Everything in Enhanced</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Quarterly virtual check-ins</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Up to 2 in-home visits per year</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Highest message priority</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">One Structured Medication Review annually</span>
                </li>
              </ul>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
                <p className="text-xs text-amber-800 font-semibold text-center">
                  âš ï¸ Only 3 spots available for February 2026 intake
                </p>
              </div>
              <button 
                onClick={() => handlePlanSelect(
                  { name: 'Concierge', sub: 'Complex Cases', price: '$325' },
                  STRIPE_PRICES.subscriptions.concierge,
                  'subscription'
                )}
                className="w-full border-2 border-amber-600 text-amber-600 hover:bg-amber-50 py-3 rounded-lg font-semibold transition"
              >
                Apply for Concierge
              </button>
            </div>
          </div>

          {/* 30-Day Guarantee */}
          <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-8 text-center max-w-3xl mx-auto">
            <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">30-Day Peace of Mind Guarantee</h3>
            <p className="text-slate-700 dark:text-slate-300 dark:text-slate-300">
              If you're not satisfied after the first month, we'll refund 100% of your subscription fee. No questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* Start Here Section - Immediate Help */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Need Immediate Help? Start Here</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">One-time services for urgent situations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Transition of Care */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700 hover:border-teal-600 transition">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Just Out of Hospital?</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-teal-600">$650</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6">Transition of Care - Post-hospital medication reconciliation</p>
              <ul className="space-y-2 mb-6 text-sm text-slate-600">
                <li>â€¢ Discharge medication reconciliation</li>
                <li>â€¢ Conflict resolution with home meds</li>
                <li>â€¢ 7-14 day stabilization plan</li>
                <li>â€¢ Pharmacy coordination</li>
              </ul>
              <button 
                onClick={() => handlePlanSelect(
                  { name: 'Transition of Care', sub: 'Post-Hospital Service', price: '$650' },
                  STRIPE_PRICES.oneTime.transition,
                  'payment'
                )}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Book Transition Care
              </button>
              <p className="text-xs text-slate-500 mt-4 text-center">
                Most families upgrade to Enhanced after
              </p>
            </div>

            {/* In-Home Visit */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700 hover:border-teal-600 transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Medication Chaos at Home?</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-teal-600">$350</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6">In-Home Pharmacist Visit</p>
              <ul className="space-y-2 mb-6 text-sm text-slate-600">
                <li>â€¢ Pillbox setup and organization</li>
                <li>â€¢ Medication purge (expired/duplicates)</li>
                <li>â€¢ Technique education (inhalers, etc.)</li>
                <li>â€¢ Home safety review</li>
              </ul>
              <button 
                onClick={() => handlePlanSelect(
                  { name: 'In-Home Visit', sub: 'Medication Organization', price: '$350' },
                  STRIPE_PRICES.oneTime.homeVisit,
                  'payment'
                )}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Schedule Home Visit
              </button>
              <p className="text-xs text-slate-500 mt-4 text-center">
                Travel fee may apply outside core area
              </p>
            </div>

            {/* Safety Audit */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700 hover:border-teal-600 transition">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clipboard className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Not Sure What They Need?</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-teal-600">$250</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6">Senior Safety & Medication Audit</p>
              <ul className="space-y-2 mb-6 text-sm text-slate-600">
                <li>â€¢ 90-minute home assessment</li>
                <li>â€¢ Medication storage evaluation</li>
                <li>â€¢ Fall-risk review</li>
                <li>â€¢ PDF report with photos</li>
              </ul>
              <button 
                onClick={() => handlePlanSelect(
                  { name: 'Safety Audit', sub: 'Home Assessment', price: '$250' },
                  STRIPE_PRICES.oneTime.safetyAudit,
                  'payment'
                )}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Book Safety Audit
              </button>
              <p className="text-xs text-slate-500 mt-4 text-center">
                Entry-level service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Families Trust Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Independent Practice */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Independent Practice</h3>
              <p className="text-slate-700 dark:text-slate-300 dark:text-slate-300">
                No insurance companies. No conflicts of interest. Clinical decisions based solely on your parent's needs.
              </p>
            </div>

            {/* Licensed & Experienced */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Licensed & Experienced</h3>
              <p className="text-slate-700 dark:text-slate-300 dark:text-slate-300">
                Christian PortalatÃ­n is a Puerto Rico-licensed pharmacist with specialized training in medication therapy management, HIV care, and nuclear pharmacy. Former Nuclear Pharmacist at Cardinal Health PR with clinical pharmacy experience.
              </p>
            </div>

            {/* Diaspora-Focused */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Diaspora-Focused</h3>
              <p className="text-slate-700 dark:text-slate-300 dark:text-slate-300">
                We speak your languageâ€”literally. English for you, Spanish for island providers. We understand the 1,000-mile worry.
              </p>
            </div>

            {/* 30-Day Guarantee - NEW */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg border-2 border-green-200">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">30-Day Peace of Mind Guarantee</h3>
              <p className="text-slate-700 dark:text-slate-300 dark:text-slate-300">
                Not satisfied after your first month? We'll refund 100% of your subscription fee. No questions asked. We only succeed when your family truly benefits from our service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Clarity Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">What We Do (And Don't Do)</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* What We Do */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-8 border-2 border-green-200 dark:border-green-800">
              <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                What We Do
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 dark:text-slate-300">Medication reconciliation and safety monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 dark:text-slate-300">Pharmacy and prescriber coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 dark:text-slate-300">In-home medication organization (Enhanced/Concierge)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 dark:text-slate-300">Family communication and monthly reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 dark:text-slate-300">Post-hospitalization transition support</span>
                </li>
              </ul>
            </div>

            {/* What We Don't Do */}
            <div className="bg-slate-50 rounded-xl p-8 border-2 border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <AlertCircle className="w-6 h-6" />
                What We Don't Do
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span>â€¢</span>
                  <span>Emergency or after-hours medical care (call 911)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>â€¢</span>
                  <span>Diagnose conditions or prescribe medications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>â€¢</span>
                  <span>Replace your parent's physician</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>â€¢</span>
                  <span>Provide caregiving or daily living assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>â€¢</span>
                  <span>Bill insurance (keeps us independent)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition"
                >
                  <span className="font-semibold text-slate-900 pr-8">{faq.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-teal-600 flex-shrink-0 transition-transform ${
                      faqOpen === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {faqOpen === index && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-700 dark:text-slate-300 dark:text-slate-300">{faq.a}</p>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a free 15-minute consultation to discuss your parent's medication needs
          </p>
          <button 
            onClick={() => handleScheduleClick('final_cta')}
            className="bg-white text-teal-600 hover:bg-slate-100 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center gap-2 shadow-xl transition"
          >
            Schedule Free Consultation
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
              <h4 className="text-white font-bold text-lg mb-4">Contact</h4>
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
              <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('how-it-works')} className="block hover:text-teal-400 transition">
                  How It Works
                </button>
                <button onClick={() => scrollToSection('services')} className="block hover:text-teal-400 transition">
                  Services & Pricing
                </button>
                <button onClick={() => scrollToSection('about')} className="block hover:text-teal-400 transition">
                  About Us
                </button>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Legal</h4>
              <div className="space-y-2 text-sm">
                <p>Â© 2026 Lucesnegras LLC</p>
                <p>Licensed Clinical Pharmacy Practice in Puerto Rico</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p className="text-slate-400">
              Professional pharmaceutical services by Christian Alexis PortalatÃ­n Cordero, Pharm.D. | Puerto Rico & Florida Licensed Pharmacist
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Bar - Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 bg-teal-600 text-white p-4 md:hidden shadow-2xl z-40">
        <div className="flex items-center justify-between">
          <span className="font-semibold">Questions?</span>
          <a 
            href="tel:7874570388"
            onClick={() => trackPhoneClick()} 
            className="bg-white text-teal-600 px-4 py-2 rounded-lg font-bold hover:bg-slate-100 transition"
          >
            Text or Call (787) 457-0388
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
