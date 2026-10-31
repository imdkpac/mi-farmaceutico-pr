import React, { useState, useMemo } from 'react';
import { Search, X, ExternalLink, BookOpen, Pill, AlertTriangle, Tag, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { MEDICATION_LOOKUP, MED_CATEGORIES } from '../../data/medicationLookup';

function ResourceButton({ href, label, icon, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 px-5 py-3 rounded-full font-body font-bold text-sm transition hover:brightness-95"
      style={{ backgroundColor: color, color: 'white' }}
    >
      {icon}
      <span>{label}</span>
      <ExternalLink className="w-4 h-4 opacity-70" />
    </a>
  );
}

export default function MedicationLookup() {
  const { lang } = useLanguage();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedMed, setSelectedMed] = useState(null);

  const t = {
    es: {
      title: 'Buscador de Medicamentos',
      subtitle: 'Encuentre información sobre sus medicamentos y cómo tomarlos correctamente',
      search: 'Buscar medicamento...',
      allCategories: 'Todas las categorías',
      queEs: '¿Qué es?',
      comoTomar: '¿Cómo tomarlo?',
      advertencias: '⚠️ Advertencias importantes',
      marcas: 'Nombres comerciales',
      aprendaMas: 'Aprenda más',
      dailymed: 'DailyMed (FDA)',
      medlineplus: 'MedlinePlus (NIH)',
      drugscom: 'Drugs.com',
      close: 'Cerrar',
      noResults: 'No se encontraron medicamentos.',
      resultados: 'medicamentos',
    },
    en: {
      title: 'Medication Lookup',
      subtitle: 'Find information about your medications and how to take them correctly',
      search: 'Search medication...',
      allCategories: 'All categories',
      queEs: 'What is it?',
      comoTomar: 'How to take it?',
      advertencias: '⚠️ Important warnings',
      marcas: 'Brand names',
      aprendaMas: 'Learn more',
      dailymed: 'DailyMed (FDA)',
      medlineplus: 'MedlinePlus (NIH)',
      drugscom: 'Drugs.com',
      close: 'Close',
      noResults: 'No medications found.',
      resultados: 'medications',
    },
  }[lang];

  const filtered = useMemo(() => {
    return MEDICATION_LOOKUP.filter((m) => {
      const matchesSearch = !search ||
        m.nombre.toLowerCase().includes(search.toLowerCase()) ||
        m.nombreEn.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !selectedCategory || m.categoria === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const categories = Object.keys(MED_CATEGORIES[lang]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-medium text-[#0F2E30] mb-2">{t.title}</h2>
        <p className="font-body" style={{ color: 'var(--muted-ink)' }}>{t.subtitle}</p>
      </div>

      {/* Search */}
      <div className="p-5" style={{ backgroundColor: 'var(--sand)', borderRadius: '28px' }}>
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--muted-ink)' }} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.search}
            className="w-full pl-11 pr-4 py-3 rounded-full font-body text-base focus:outline-none"
            style={{ backgroundColor: 'var(--paper)', color: 'var(--pine)' }}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('')}
            className="px-5 py-2.5 rounded-full font-body text-base transition"
            style={selectedCategory === '' ? { backgroundColor: 'var(--pine)', color: 'var(--paper)' } : { backgroundColor: 'var(--paper)', color: 'var(--pine)' }}
          >
            {t.allCategories}
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="px-5 py-2.5 rounded-full font-body text-base transition"
              style={selectedCategory === cat ? { backgroundColor: 'var(--pine)', color: 'var(--paper)' } : { backgroundColor: 'var(--paper)', color: 'var(--pine)' }}
            >
              {MED_CATEGORIES[lang][cat]}
            </button>
          ))}
        </div>
        <p className="font-body text-sm mt-4" style={{ color: 'var(--muted-ink)' }}>
          {filtered.length} {t.resultados}
        </p>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 font-body" style={{ color: 'var(--muted-ink)' }}>{t.noResults}</div>
      ) : (
        <div className="grid gap-3">
          {filtered.map((m, i) => (
            <button
              key={i}
              onClick={() => setSelectedMed(m)}
              className="w-full text-left p-5 transition hover:brightness-95 flex items-start gap-4"
              style={{ backgroundColor: 'var(--sand)', borderRadius: '28px' }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--pine)' }}>
                <Pill className="w-6 h-6 text-[#F4EFE6]" strokeWidth={2} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-lg font-medium text-[#0F2E30]">{m.nombre}</h3>
                <p className="font-body text-sm" style={{ color: 'var(--muted-ink)' }}>{m.nombreEn}</p>
                <span className="inline-block mt-2 text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--paper)', color: 'var(--pine)' }}>
                  {MED_CATEGORIES[lang][m.categoria]}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedMed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(15, 46, 48, 0.6)' }} onClick={() => setSelectedMed(null)}>
          <div className="w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 sm:p-8" style={{ backgroundColor: 'var(--paper)', borderRadius: '28px' }} onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="font-display text-2xl font-medium text-[#0F2E30]">{selectedMed.nombre}</h3>
                <p className="font-body" style={{ color: 'var(--muted-ink)' }}>{selectedMed.nombreEn}</p>
                <span className="inline-block mt-2 text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--sand)', color: 'var(--pine)' }}>
                  {MED_CATEGORIES[lang][selectedMed.categoria]}
                </span>
              </div>
              <button onClick={() => setSelectedMed(null)} className="p-2 rounded-full hover:brightness-95" style={{ backgroundColor: 'var(--sand)' }}>
                <X className="w-5 h-5" style={{ color: 'var(--pine)' }} />
              </button>
            </div>

            <div className="space-y-5">
              <div className="p-5" style={{ backgroundColor: 'var(--sand)', borderRadius: '28px' }}>
                <h4 className="font-display text-lg font-medium text-[#0F2E30] mb-2 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" style={{ color: 'var(--pine)' }} />
                  {t.queEs}
                </h4>
                <p className="font-body" style={{ color: 'var(--muted-ink)' }}>{selectedMed.queEs}</p>
              </div>

              <div className="p-5" style={{ backgroundColor: 'var(--sand)', borderRadius: '28px' }}>
                <h4 className="font-display text-lg font-medium text-[#0F2E30] mb-2 flex items-center gap-2">
                  <Pill className="w-5 h-5" style={{ color: 'var(--pine)' }} />
                  {t.comoTomar}
                </h4>
                <p className="font-body" style={{ color: 'var(--muted-ink)' }}>{selectedMed.comoTomar}</p>
              </div>

              <div className="p-5" style={{ backgroundColor: '#FCEAE7', borderRadius: '28px', border: '2px solid var(--flamboyan)' }}>
                <h4 className="font-display text-lg font-medium text-[#0F2E30] mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" style={{ color: 'var(--flamboyan)' }} />
                  {t.advertencias}
                </h4>
                <p className="font-body" style={{ color: 'var(--muted-ink)' }}>{selectedMed.advertencias}</p>
              </div>

              <div className="p-5" style={{ backgroundColor: 'var(--sand)', borderRadius: '28px' }}>
                <h4 className="font-display text-lg font-medium text-[#0F2E30] mb-2 flex items-center gap-2">
                  <Tag className="w-5 h-5" style={{ color: 'var(--pine)' }} />
                  {t.marcas}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMed.marcas.map((marca, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-full font-body text-sm" style={{ backgroundColor: 'var(--paper)', color: 'var(--pine)' }}>
                      {marca}
                    </span>
                  ))}
                </div>
              </div>

              {/* Resources Section */}
              <div className="p-5" style={{ backgroundColor: 'var(--sand)', borderRadius: '28px' }}>
                <h4 className="font-display text-lg font-medium text-[#0F2E30] mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5" style={{ color: 'var(--pine)' }} />
                  {t.aprendaMas}
                </h4>
                <div className="flex flex-wrap gap-3">
                  <ResourceButton
                    href={selectedMed.recursos.dailymed}
                    label={t.dailymed}
                    icon={<BookOpen className="w-4 h-4" />}
                    color="#0F2E30"
                  />
                  <ResourceButton
                    href={selectedMed.recursos.medlineplus}
                    label={t.medlineplus}
                    icon={<BookOpen className="w-4 h-4" />}
                    color="#20558A"
                  />
                  <ResourceButton
                    href={selectedMed.recursos.drugscom}
                    label={t.drugscom}
                    icon={<ExternalLink className="w-4 h-4" />}
                    color="#7BBF8E"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedMed(null)}
              className="w-full mt-6 py-3 rounded-full font-body font-bold text-base transition hover:brightness-95"
              style={{ backgroundColor: 'var(--pine)', color: 'var(--paper)' }}
            >
              {t.close}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
