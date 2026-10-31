import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Languages, Phone, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const navItems = [
  { path: '/', label: { es: 'Inicio', en: 'Home' } },
  { path: '/guia', label: { es: 'Guía PR', en: 'PR Guide' } },
  { path: '/aprende', label: { es: 'Aprende', en: 'Learn' } },
  { path: '/servicios', label: { es: 'Servicios', en: 'Services' } },
];

function LogoMark({ className }) {
  return (
    <svg viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Two pills forming the logo mark */}
      <rect x="2" y="6" width="20" height="12" rx="6" fill="currentColor" />
      <rect x="14" y="2" width="20" height="12" rx="6" fill="currentColor" fillOpacity="0.4" />
    </svg>
  );
}

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const t = (obj) => obj[lang];

  return (
    <header
      className="sticky top-0 z-50 border-b-2"
      style={{ backgroundColor: 'var(--paper)', borderColor: 'var(--sand)' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 shrink-0 group">
            <LogoMark className="w-10 h-6 text-[#0F2E30]" />
            <span className="font-display text-xl sm:text-2xl font-semibold text-[#0F2E30] tracking-tight">
              Mi Farmacéutico<span style={{ color: 'var(--flamboyan)' }}> en PR</span>
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-5 py-2.5 rounded-full font-body font-medium text-base transition ${
                    isActive
                      ? 'bg-[#0F2E30] text-[#F4EFE6]'
                      : 'text-[#0F2E30] hover:bg-[#E2D6BF]'
                  }`
                }
              >
                {t(item.label)}
              </NavLink>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Phone - always visible on desktop */}
            <a
              href="tel:7876676560"
              className="hidden md:flex items-center gap-2 font-body font-bold text-base transition"
              style={{ color: 'var(--pine)' }}
            >
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              <span className="hidden xl:inline">(787) 667-6560</span>
            </a>

            {/* Language toggle — pill outline */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full font-body font-bold text-sm transition"
              style={{
                border: '3px solid var(--pine)',
                color: 'var(--pine)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--pine)';
                e.currentTarget.style.color = 'var(--paper)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--pine)';
              }}
              title={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}
            >
              <Languages className="w-4 h-4" strokeWidth={2.5} />
              {lang === 'es' ? 'EN' : 'ES'}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-[#E2D6BF] transition"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" strokeWidth={2.5} /> : <Menu className="w-6 h-6" strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t-2"
          style={{ backgroundColor: 'var(--paper)', borderColor: 'var(--sand)' }}
        >
          <div className="flex overflow-x-auto px-3 py-3 gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `whitespace-nowrap px-5 py-3 rounded-full font-body font-semibold text-base transition ${
                    isActive
                      ? 'bg-[#0F2E30] text-[#F4EFE6]'
                      : 'text-[#0F2E30] hover:bg-[#E2D6BF]'
                  }`
                }
              >
                {t(item.label)}
              </NavLink>
            ))}
            <a
              href="tel:7876676560"
              className="whitespace-nowrap px-5 py-3 rounded-full font-body font-bold flex items-center gap-2"
              style={{ color: 'var(--flamboyan)' }}
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              (787) 667-6560
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
