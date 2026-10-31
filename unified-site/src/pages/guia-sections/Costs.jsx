import React, { useState, useMemo } from 'react';
import { Search, DollarSign, AlertCircle, Info, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { MEDICATION_COSTS, CATEGORIES } from '../../data/medicationCosts';

export default function Costs() {
  const { lang } = useLanguage();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [insurance, setInsurance] = useState('none');

  const t = {
    es: {
      title: 'Costos de Medicamentos',
      subtitle: 'Precios aproximados en Puerto Rico. Los precios varían por farmacia y seguro.',
      search: 'Buscar medicamento...',
      allCategories: 'Todas las categorías',
      sinSeguro: 'Sin seguro',
      conSeguro: 'Con seguro privado (copago típico)',
      medicamento: 'Medicamento',
      categoria: 'Categoría',
      precio: 'Precio aprox.',
      copago: 'Copago típ.',
      nota: 'Nota',
      disclaimer: 'Estos precios son estimaciones basadas en datos de 2024-2026. Los precios reales varían por farmacia, seguro, y programa de asistencia.',
      noResults: 'No se encontraron medicamentos con esos filtros.',
      limpiar: 'Limpiar',
    },
    en: {
      title: 'Medication Costs',
      subtitle: 'Approximate prices in Puerto Rico. Prices vary by pharmacy and insurance.',
      search: 'Search medication...',
      allCategories: 'All categories',
      sinSeguro: 'No insurance',
      conSeguro: 'With private insurance (typical copay)',
      medicamento: 'Medication',
      categoria: 'Category',
      precio: 'Approx. price',
      copago: 'Typ. copay',
      nota: 'Note',
      disclaimer: 'These prices are estimates based on 2024-2026 data. Actual prices vary by pharmacy, insurance, and assistance programs.',
      noResults: 'No medications found with those filters.',
      limpiar: 'Clear',
    },
  }[lang];

  const filtered = useMemo(() => {
    return MEDICATION_COSTS.filter((m) => {
      const matchesSearch = !search ||
        m.nombre.toLowerCase().includes(search.toLowerCase()) ||
        m.nombreEn?.toLowerCase().includes(search.toLowerCase()) ||
        m.generico?.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !category || m.categoria === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const categoriesList = Object.keys(CATEGORIES[lang]);
  const hasActiveFilters = search || category;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-medium text-[#0F2E30] mb-2">{t.title}</h2>
        <p className="font-body" style={{ color: 'var(--muted-ink)' }}>{t.subtitle}</p>
      </div>

      {/* Controls */}
      <div className="p-5" style={{ backgroundColor: 'var(--sand)', borderRadius: '28px' }}>
        <div className="flex flex-wrap gap-3 mb-4">
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
              <option key={c} value={c}>{CATEGORIES[lang][c]}</option>
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

        <div className="flex gap-4">
          <label className="flex items-center gap-2 font-body cursor-pointer">
            <input
              type="radio"
              name="insurance"
              checked={insurance === 'none'}
              onChange={() => setInsurance('none')}
              className="w-4 h-4 accent-pine"
            />
            <span className="text-sm text-[#0F2E30]">{t.sinSeguro}</span>
          </label>
          <label className="flex items-center gap-2 font-body cursor-pointer">
            <input
              type="radio"
              name="insurance"
              checked={insurance === 'private'}
              onChange={() => setInsurance('private')}
              className="w-4 h-4 accent-pine"
            />
            <span className="text-sm text-[#0F2E30]">{t.conSeguro}</span>
          </label>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="flex items-start gap-3 p-4" style={{ backgroundColor: 'var(--sand)', borderRadius: '28px' }}>
        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--flamboyan)' }} />
        <p className="font-body text-sm" style={{ color: 'var(--muted-ink)' }}>{t.disclaimer}</p>
      </div>

      {/* Table */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 font-body" style={{ color: 'var(--muted-ink)' }}>{t.noResults}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left" style={{ borderRadius: '28px', overflow: 'hidden' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--pine)' }}>
                <th className="table-header-rule">{t.medicamento}</th>
                <th className="table-header-rule">{t.categoria}</th>
                <th className="table-header-rule">{insurance === 'private' ? t.copago : t.precio}</th>
                <th className="table-header-rule">{t.nota}</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((m, i) => (
                <tr
                  key={i}
                  style={{ backgroundColor: i % 2 === 0 ? 'var(--sand)' : 'var(--paper)' }}
                >
                  <td className="p-4">
                    <div className="font-body font-semibold text-[#0F2E30]">{m.nombre}</div>
                    {m.generico && <div className="font-body text-sm" style={{ color: 'var(--muted-ink)' }}>({m.generico})</div>}
                  </td>
                  <td className="p-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: 'var(--paper)', color: 'var(--pine)' }}>
                      {CATEGORIES[lang][m.categoria]}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="font-display text-lg font-medium text-[#0F2E30]">
                      {insurance === 'private' ? m.copago || m.precio : m.precio}
                    </span>
                  </td>
                  <td className="p-4">
                    {m.nota && (
                      <div className="flex items-start gap-1.5">
                        <Info className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--muted-ink)' }} />
                        <span className="font-body text-sm" style={{ color: 'var(--muted-ink)' }}>{m.nota}</span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
