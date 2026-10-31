import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Languages, Phone, Heart, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const navItems = [
  { path: '/', label: { es: 'Inicio', en: 'Home' } },
  { path: '/guia', label: { es: 'Guía PR', en: 'PR Guide' } },
  { path: '/aprende', label: { es: 'Aprende', en: 'Learn' } },
  { path: '/servicios', label: { es: 'Servicios', en: 'Services' } },
];

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

  const t = (obj) => obj[lang];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 shrink-0">
            <Heart className="w-7 h-7 text-teal-600" />
            <span className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
              Mi Farmacéutico<span className="text-teal-600"> en PR</span>
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg text-base font-semibold transition ${
                    isActive
                      ? 'bg-teal-50 text-teal-700'
                      : 'text-slate-700 hover:text-teal-700 hover:bg-slate-50'
                  }`
                }
              >
                {t(item.label)}
              </NavLink>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Phone - always visible */}
            <a
              href="tel:7876676560"
              className="hidden sm:flex items-center gap-1.5 text-teal-700 font-bold text-base hover:text-teal-800 transition"
            >
              <Phone className="w-5 h-5" />
              <span className="hidden md:inline">(787) 667-6560</span>
            </a>

            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border-2 border-slate-300 hover:border-teal-500 hover:bg-teal-50 transition text-sm font-bold text-slate-700"
              title={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}
            >
              <Languages className="w-4 h-4" />
              {lang === 'es' ? 'EN' : 'ES'}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav - scrollable horizontal tabs */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="flex overflow-x-auto px-2 py-2 gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `whitespace-nowrap px-4 py-3 rounded-lg text-base font-semibold transition ${
                    isActive
                      ? 'bg-teal-50 text-teal-700'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                {t(item.label)}
              </NavLink>
            ))}
            <a
              href="tel:7876676560"
              className="whitespace-nowrap px-4 py-3 rounded-lg text-base font-bold text-teal-700 hover:bg-teal-50 flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4" />
              (787) 667-6560
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
