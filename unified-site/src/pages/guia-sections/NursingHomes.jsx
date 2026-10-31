import React, { useState, useMemo } from 'react';
import { Search, Phone, MapPin, Home, Users, X, DollarSign } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { HOGARES, COSTOS, TIPOS_HOGAR, COLORES_COSTO } from '../../data/nursingHomes';

export default function NursingHomes() {
  const { lang } = useLanguage();
  const [search, setSearch] = useState('');
  const [costoFilter, setCostoFilter] = useState('');
  const [tipoFilter, setTipoFilter] = useState('');
  const [expanded, setExpanded] = useState(null);

  const t = {
    es: {
      title: 'Hogares de Cuidado en Puerto Rico',
      subtitle: 'Directorio de hogares de ancianos y centros de enfermería',
      search: 'Buscar hogar...',
      allCosts: 'Todos los costos',
      allTypes: 'Todos los tipos',
      camas: 'camas',
      costo: 'Costo estimado',
      tipo: 'Tipo',
      direccion: 'Dirección',
      telefono: 'Teléfono',
      noResults: 'No se encontraron hogares con esos filtros.',
      resultados: 'hogares encontrados',
      limpiar: 'Limpiar',
      nota: 'Los costos son estimados. Contacte directamente para precios actualizados.',
    },
    en: {
      title: 'Nursing Homes in Puerto Rico',
      subtitle: 'Directory of nursing homes and skilled nursing facilities',
      search: 'Search facility...',
      allCosts: 'All costs',
      allTypes: 'All types',
      camas: 'beds',
      costo: 'Estimated cost',
      tipo: 'Type',
      direccion: 'Address',
      telefono: 'Phone',
      noResults: 'No facilities found with those filters.',
      resultados: 'facilities found',
      limpiar: 'Clear',
      nota: 'Costs are estimates. Contact directly for current pricing.',
    },
  }[lang];

  const filtered = useMemo(() => {
    return HOGARES.filter((h) => {
      const matchesSearch = !search ||
        h.nombre.toLowerCase().includes(search.toLowerCase()) ||
        h.direccion.toLowerCase().includes(search.toLowerCase());
      const matchesCosto = !costoFilter || h.costo === costoFilter;
      const matchesTipo = !tipoFilter || h.tipo === tipoFilter;
      return matchesSearch && matchesCosto && matchesTipo;
    });
  }, [search, costoFilter, tipoFilter]);

  const costosList = Object.keys(COSTOS[lang]);
  const tiposList = Object.keys(TIPOS_HOGAR[lang]);
  const hasActiveFilters = search || costoFilter || tipoFilter;

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
            value={costoFilter}
            onChange={(e) => setCostoFilter(e.target.value)}
            className="px-4 py-2.5 rounded-lg border-2 border-slate-200 focus:border-teal-500 focus:outline-none text-base bg-white"
          >
            <option value="">{t.allCosts}</option>
            {costosList.map((c) => (
              <option key={c} value={c}>{COSTOS[lang][c]}</option>
            ))}
          </select>

          <select
            value={tipoFilter}
            onChange={(e) => setTipoFilter(e.target.value)}
            className="px-4 py-2.5 rounded-lg border-2 border-slate-200 focus:border-teal-500 focus:outline-none text-base bg-white"
          >
            <option value="">{t.allTypes}</option>
            {tiposList.map((tKey) => (
              <option key={tKey} value={tKey}>{TIPOS_HOGAR[lang][tKey]}</option>
            ))}
          </select>

          {hasActiveFilters && (
            <button
              onClick={() => { setSearch(''); setCostoFilter(''); setTipoFilter(''); }}
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

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 text-slate-500">{t.noResults}</div>
      ) : (
        <div className="grid gap-4">
          {filtered.map((h, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-teal-400 transition"
            >
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full text-left p-4 sm:p-5 flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                  <Home className="w-6 h-6 text-blue-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-slate-900">{h.nombre}</h3>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${COLORES_COSTO[h.costo]}`}>
                      {COSTOS[lang][h.costo]}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500">
                    {TIPOS_HOGAR[lang][h.tipo]} · {h.camas} {t.camas}
                  </p>
                </div>
              </button>

              {expanded === i && (
                <div className="px-4 sm:px-5 pb-5 pt-0 border-t border-slate-100">
                  <div className="pt-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-slate-700">{t.direccion}</p>
                        <p className="text-sm text-slate-600">{h.direccion}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-slate-700">{t.telefono}</p>
                        <a
                          href={`tel:${h.telefono.replace(/\D/g, '')}`}
                          className="text-sm text-teal-700 font-medium hover:underline"
                        >
                          {h.telefono}
                        </a>
                      </div>
                    </div>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.nombre + ' Puerto Rico')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-teal-700 font-semibold hover:underline"
                    >
                      <MapPin className="w-4 h-4" />
                      Google Maps
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <p className="text-sm text-slate-500 bg-slate-50 rounded-lg p-3">
        <DollarSign className="w-4 h-4 inline mr-1" />
        {t.nota}
      </p>
    </div>
  );
}
