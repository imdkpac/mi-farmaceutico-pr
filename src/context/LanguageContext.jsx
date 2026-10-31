import React, { createContext, useContext, useState, useCallback } from 'react';

const LanguageContext = createContext(null);

const STORAGE_KEY = 'mfp-lang-preference';

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'es';
    } catch {
      return 'es';
    }
  });

  const toggleLang = useCallback(() => {
    setLang((current) => {
      const next = current === 'es' ? 'en' : 'es';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {}
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

export function useT(dictionary) {
  const { lang } = useLanguage();
  return (key) => {
    const keys = key.split('.');
    let value = dictionary[lang];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };
}
