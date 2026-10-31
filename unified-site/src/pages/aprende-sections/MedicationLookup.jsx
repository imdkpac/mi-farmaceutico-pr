import React, { useState, useMemo } from 'react';
import { Search, Pill, AlertTriangle, CheckCircle, Info, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { MEDICATION_LOOKUP, MED_CATEGORIES } from '../../data/medicationLookup';

export default function MedicationLookup() {
  const { lang } = useLanguage();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [selected, setSelected] = useState(null);

  const t = {
    es: {
      title: 'Mis Medicamentos',
      subtitle: 'Busque información sobre sus medicamentos: para qué sirven, cómo tomarlos, y precauciones',
      search: 'Buscar medicamento...',
      allCategories: 'Todas las categorías',
      noResults: 'No se encontraron medicamentos con esos filtros.',
      limpiar: 'Limpiar',
      queEs: '¿Para qué sirve?',
      comoTomar: '¿Cómo tomarlo?',
      advertencias: 'Advertencias',
      marcas: 'Nombres comunes',
      categoria: 'Categoría',
      close: 'Cerrar',
    },
    en: {
      title: 'My Medications',
      subtitle: 'Search information about your medications: what they are for, how to take them, and precautions',
      search: 'Search medication...',
      allCategories: 'All categories',
      noResults: 'No medications found with those filters.',
      limpiar: 'Clear',
      queEs: 'What is it for?',
      comoTomar: 'How to take it?',
      advertencias: 'Warnings',
      marcas: 'Common brand names',
      categoria: 'Category',
      close: 'Close',
    },
  }[lang];

  const filtered = useMemo(() => {
    return MEDICATION_LOOKUP.filter((m) => {
      const matchesSearch = !search ||
        m.nombre.toLowerCase().includes(search.toLowerCase()) ||
        m.nombreEn?.toLowerCase().includes(search.toLowerCase()) ||
        m.marcas?.some((marca) => marca.toLowerCase().includes(search.toLowerCase()));
      const matchesCategory = !category || m.categoria === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const categoriesList = Object.keys(MED_CATEGORIES[lang]);
  const hasActiveFilters = search || category;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-medium text-[#0F2E30] mb-2">{t.title}</h2>
        <p className="font-body" style={{ color: 'var(--muted-ink)' }}>{t.subtitle}</p>
      </div>

      {/* Search */}
      <div className="p-5" style={{ backgroundColor: 'var(--sand)', borderRadius: '28px' }}>
        <div className="flex flex-wrap gap-3">
          <div className="relative flex-1 min-w-[200px]">
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
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-5 py-3 rounded-full font-body text-base focus:outline-none"
            style={{ backgroundColor: 'var(--paper)', color: 'var(--pine)' }}
          >
            <option value="">{t.allCategories}</option>
            {categoriesList.map((c) => (
              <option key={c} value={c}>{MED_CATEGORIES[lang][c]}</option>
            ))}
          </select>
          {hasActiveFilters && (
            <button
              onClick={() => { setSearch(''); setCategory(''); }}
              className="px-5 py-3 rounded-full font-body font-medium flex items-center gap-1.5 transition hover:brightness-95"
              style={{ backgroundColor: 'var(--paper)', color: 'var(--muted-ink)' }}
            >
              <X className="w-4 h-4" />
              {t.limpiar}
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 font-body" style={{ color: 'var(--muted-ink)' }}>{t.noResults}</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((m, i) => (
            <button
              key={i}
              onClick={() => setSelected(m)}
              className="text-left p-6 transition hover:brightness-95"
              style={{ backgroundColor: 'var(--sand)', borderRadius: '28px' }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--pine)' }}>
                  <Pill className="w-5 h-5 text-[#F4EFE6]" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-medium text-[#0F2E30]">{m.nombre}</h3>
                  {m.nombreEn && <p className="font-body text-sm" style={{ color: 'var(--muted-ink)' }}>{m.nombreEn}</p>}
                </div>
              </div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: 'var(--paper)', color: 'var(--pine)' }}>
                {MED_CATEGORIES[lang][m.categoria]}
              </span>
              <p className="font-body text-sm mt-3 line-clamp-2" style={{ color: 'var(--muted-ink)' }}>{m.queEs}</p>
            </button>
          ))}
        </div>
      )}

      {/* Detail Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(15,46,48,0.7)' }} onClick={() => setSelected(null)}>
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8"
            style={{ backgroundColor: 'var(--paper)', borderRadius: '28px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="font-display text-2xl font-medium text-[#0F2E30]">{selected.nombre}</h3>
                {selected.nombreEn && <p className="font-body" style={{ color: 'var(--muted-ink)' }}>{selected.nombreEn}</p>}
              </div>
              <button
                onClick={() => setSelected(null)}
                className="p-2 rounded-full transition hover:bg-[#E2D6BF]"
              >
                <X className="w-6 h-6" style={{ color: 'var(--muted-ink)' }} />
              </button>
            </div>

            <span className="inline-block px-4 py-1.5 rounded-full font-body font-bold text-sm mb-6" style={{ backgroundColor: 'var(--sand)', color: 'var(--pine)' }}>
              {MED_CATEGORIES[lang][selected.categoria]}
            </span>

            {selected.queEs && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="w-5 h-5" style={{ color: 'var(--sage)' }} />
                  <h4 className="font-display text-lg font-medium text-[#0F2E30]">{t.queEs}</h4>
                </div>
                <p className="font-body" style={{ color: 'var(--muted-ink)' }}>{selected.queEs}</p>
              </div>
            )}

            {selected.comoTomar && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5" style={{ color: 'var(--sage)' }} />
                  <h4 className="font-display text-lg font-medium text-[#0F2E30]">{t.comoTomar}</h4>
                </div>
                <p className="font-body" style={{ color: 'var(--muted-ink)' }}>{selected.comoTomar}</p>
              </div>
            )}

            {selected.advertencias && (
              <div className="mb-6 p-5" style={{ backgroundColor: 'var(--sand)', borderRadius: '28px' }}>
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5" style={{ color: 'var(--flamboyan)' }} />
                  <h4 className="font-display text-lg font-medium text-[#0F2E30]">{t.advertencias}</h4>
                </div>
                <p className="font-body" style={{ color: 'var(--muted-ink)' }}>{selected.advertencias}</p>
              </div>
            )}

            {selected.marcas && selected.marcas.length > 0 && (
              <div>
                <p className="font-body text-sm font-semibold text-[#0F2E30] mb-2">{t.marcas}:</p>
                <div className="flex flex-wrap gap-2">
                  {selected.marcas.map((marca, i) => (
                    <span key={i} className="px-3 py-1 rounded-full font-body text-sm" style={{ backgroundColor: 'var(--sand)', color: 'var(--pine)' }}>
                      {marca}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={() => setSelected(null)}
              className="btn-capsule w-full mt-8"
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
