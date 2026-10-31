import React, { useState, useMemo } from 'react';
import { Search, Pill, AlertTriangle, Clock, X, Stethoscope } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { MED_LOOKUP, CATEGORIAS_LOOKUP } from '../../data/medicationLookup';

export default function MedicationLookup() {
  const { lang } = useLanguage();
  const [search, setSearch] = useState('');
  const [categoriaFilter, setCategoriaFilter] = useState('');
  const [selectedMed, setSelectedMed] = useState(null);

  const t = {
    es: {
      title: '¿Para qué es este medicamento?',
      subtitle: 'Buscador simple de medicamentos comunes. Información educativa — no sustituye a su farmacéutico.',
      search: 'Escriba el nombre del medicamento...',
      allCategories: 'Todas las categorías',
      noResults: 'No encontrado. Pregunte a su farmacéutico.',
      resultados: 'medicamentos',
      limpiar: 'Limpiar',
      paraQue: '¿Para qué es?',
      comoTomar: '¿Cómo tomarlo?',
      advertencias: 'Advertencias importantes',
      nombresComerciales: 'Nombres comerciales',
      disclaimer: 'Esta información es educativa y no reemplaza la consulta con su médico o farmacéutico. Siempre verifique con un profesional de salud antes de hacer cambios en sus medicamentos.',
      emergencias: 'Emergencias: 9-1-1 · Línea PAS: 1-888-672-7622',
    },
    en: {
      title: 'What is this medication for?',
      subtitle: 'Simple lookup for common medications. Educational info — does not replace your pharmacist.',
      search: 'Type the medication name...',
      allCategories: 'All categories',
      noResults: 'Not found. Ask your pharmacist.',
      resultados: 'medications',
      limpiar: 'Clear',
      paraQue: 'What is it for?',
      comoTomar: 'How to take it?',
      advertencias: 'Important warnings',
      nombresComerciales: 'Brand names',
      disclaimer: 'This information is educational and does not replace consultation with your doctor or pharmacist. Always verify with a healthcare professional before making medication changes.',
      emergencias: 'Emergencies: 9-1-1 · PAS Helpline: 1-888-672-7622',
    },
  }[lang];

  const data = MED_LOOKUP[lang];

  const filtered = useMemo(() => {
    return data.filter((m) => {
      const matchesSearch = !search ||
        m.nombre.toLowerCase().includes(search.toLowerCase()) ||
        m.nombresComerciales.toLowerCase().includes(search.toLowerCase());
      const matchesCat = !categoriaFilter || m.categoria === categoriaFilter;
      return matchesSearch && matchesCat;
    });
  }, [search, categoriaFilter, data]);

  const categoriasList = Object.keys(CATEGORIAS_LOOKUP[lang]);
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
            onChange={(e) => { setSearch(e.target.value); setSelectedMed(null); }}
            placeholder={t.search}
            className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-slate-200 focus:border-teal-500 focus:outline-none text-base"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <select
            value={categoriaFilter}
            onChange={(e) => { setCategoriaFilter(e.target.value); setSelectedMed(null); }}
            className="px-4 py-2.5 rounded-lg border-2 border-slate-200 focus:border-teal-500 focus:outline-none text-base bg-white"
          >
            <option value="">{t.allCategories}</option>
            {categoriasList.map((c) => (
              <option key={c} value={c}>{CATEGORIAS_LOOKUP[lang][c]}</option>
            ))}
          </select>

          {hasActiveFilters && (
            <button
              onClick={() => { setSearch(''); setCategoriaFilter(''); setSelectedMed(null); }}
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

      {/* Results Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 text-slate-500">{t.noResults}</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((med, i) => (
            <button
              key={i}
              onClick={() => setSelectedMed(selectedMed === i ? null : i)}
              className={`text-left bg-white rounded-xl border-2 p-5 transition hover:border-teal-400 ${
                selectedMed === i ? 'border-teal-500 ring-2 ring-teal-100' : 'border-slate-200'
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center shrink-0">
                  <Pill className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{med.nombre}</h3>
                  <span className="text-xs text-slate-500">{CATEGORIAS_LOOKUP[lang][med.categoria]}</span>
                </div>
              </div>

              {selectedMed === i && (
                <div className="mt-4 space-y-4 border-t border-slate-100 pt-4">
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">{t.paraQue}</p>
                    <p className="text-sm text-slate-700">{med.paraQue}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {t.comoTomar}
                    </p>
                    <p className="text-sm text-slate-700">{med.comoTomar}</p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-3">
                    <p className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      {t.advertencias}
                    </p>
                    <p className="text-sm text-amber-800">{med.advertencias}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">{t.nombresComerciales}</p>
                    <p className="text-sm text-slate-600 italic">{med.nombresComerciales}</p>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
        <Stethoscope className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
        <p className="text-sm text-red-800">{t.disclaimer}</p>
      </div>

      <p className="text-center text-sm text-slate-500">
        {t.emergencias}
      </p>
    </div>
  );
}
