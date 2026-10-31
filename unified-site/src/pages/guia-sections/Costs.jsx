import React, { useState, useMemo } from 'react';
import { Search, Pill, DollarSign, ShieldAlert, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { MEDICATION_COSTS, CATEGORIAS } from '../../data/medicationCosts';

export default function Costs() {
  const { lang } = useLanguage();
  const [search, setSearch] = useState('');
  const [categoriaFilter, setCategoriaFilter] = useState('');

  const t = {
    es: {
      title: 'Costos de Medicamentos en Puerto Rico',
      subtitle: 'Precios estimados para medicamentos comunes. Siempre verifique en su farmacia.',
      search: 'Buscar medicamento...',
      allCategories: 'Todas las categorías',
      medicamento: 'Medicamento',
      sinSeguro: 'Sin seguro (aprox.)',
      conSeguro: 'Con seguro (aprox.)',
      nota: 'Nota',
      noResults: 'No se encontraron medicamentos.',
      resultados: 'medicamentos encontrados',
      limpiar: 'Limpiar',
      disclaimer: 'Estos precios son estimados de referencia. Los costos reales varían por farmacia, seguro y programa de asistencia. Siempre consulte a su farmacéutico.',
    },
    en: {
      title: 'Medication Costs in Puerto Rico',
      subtitle: 'Estimated prices for common medications. Always verify at your pharmacy.',
      search: 'Search medication...',
      allCategories: 'All categories',
      medicamento: 'Medication',
      sinSeguro: 'Without insurance (approx.)',
      conSeguro: 'With insurance (approx.)',
      nota: 'Note',
      noResults: 'No medications found.',
      resultados: 'medications found',
      limpiar: 'Clear',
      disclaimer: 'These prices are reference estimates. Actual costs vary by pharmacy, insurance, and assistance programs. Always consult your pharmacist.',
    },
  }[lang];

  const filtered = useMemo(() => {
    return MEDICATION_COSTS.filter((m) => {
      const matchesSearch = !search ||
        m.nombre.toLowerCase().includes(search.toLowerCase());
      const matchesCat = !categoriaFilter || m.categoria === categoriaFilter;
      return matchesSearch && matchesCat;
    });
  }, [search, categoriaFilter]);

  const categoriasList = Object.keys(CATEGORIAS[lang]);
  const hasActiveFilters = search || categoriaFilter;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">{t.title}</h2>
        <p className="text-slate-600">{t.subtitle}</p>
      </div>

      {/* Search & Filters */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.search}
            className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-slate-200 focus:border-teal-500 focus:outline-none text-base"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <select
            value={categoriaFilter}
            onChange={(e) => setCategoriaFilter(e.target.value)}
            className="px-4 py-2.5 rounded-lg border-2 border-slate-200 focus:border-teal-500 focus:outline-none text-base bg-white"
          >
            <option value="">{t.allCategories}</option>
            {categoriasList.map((c) => (
              <option key={c} value={c}>{CATEGORIAS[lang][c]}</option>
            ))}
          </select>

          {hasActiveFilters && (
            <button
              onClick={() => { setSearch(''); setCategoriaFilter(''); }}
              className="px-4 py-2.5 rounded-lg border-2 border-slate-300 text-slate-600 hover:bg-slate-50 font-medium flex items-center gap-1.5"
            >
              <X className="w-4 h-4" />
              {t.limpiar}
            </button>
          )}
        </div>

        <p className="text-sm text-slate-500">
          {filtered.length} {t.resultados}
        </p>
      </div>

      {/* Results Table */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 text-slate-500">{t.noResults}</div>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-sm font-bold text-slate-700">{t.medicamento}</th>
                  <th className="px-4 py-3 text-sm font-bold text-slate-700">{t.sinSeguro}</th>
                  <th className="px-4 py-3 text-sm font-bold text-slate-700">{t.conSeguro}</th>
                  <th className="px-4 py-3 text-sm font-bold text-slate-700 hidden sm:table-cell">{t.nota}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((m, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Pill className="w-4 h-4 text-teal-600 shrink-0" />
                        <span className="font-medium text-slate-900">{m.nombre}</span>
                      </div>
                      <span className="text-xs text-slate-500 ml-6">{CATEGORIAS[lang][m.categoria]}</span>
                    </td>
                    <td className="px-4 py-3 text-sm text-rose-700 font-semibold">{m.precioSinSeguro}</td>
                    <td className="px-4 py-3 text-sm text-green-700 font-semibold">{m.precioConSeguro}</td>
                    <td className="px-4 py-3 text-sm text-slate-500 hidden sm:table-cell">{m.nota}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <p className="text-sm text-amber-800">{t.disclaimer}</p>
      </div>
    </div>
  );
}
