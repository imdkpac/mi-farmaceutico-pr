import React, { useState, useMemo } from 'react';
import { Search, Phone, MapPin, Heart, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { HOSPITALES, REGIONES, TIPOS } from '../../data/hospitals';

export default function Hospitals() {
  const { lang } = useLanguage();
  const [search, setSearch] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [tipoFilter, setTipoFilter] = useState('');
  const [expanded, setExpanded] = useState(null);

  const t = {
    es: {
      title: 'Hospitales en Puerto Rico',
      subtitle: 'Encuentre hospitales cercanos con información de contacto',
      search: 'Buscar hospital...',
      allRegions: 'Todas las regiones',
      allTypes: 'Todos los tipos',
      emergencias: 'Emergencias',
      pediatrico: 'Pediátrico',
      direccion: 'Dirección',
      telefono: 'Teléfono',
      verMapa: 'Ver en Google Maps',
      noResults: 'No se encontraron hospitales con esos filtros.',
      resultados: 'hospitales encontrados',
      limpiar: 'Limpiar',
    },
    en: {
      title: 'Hospitals in Puerto Rico',
      subtitle: 'Find nearby hospitals with contact information',
      search: 'Search hospital...',
      allRegions: 'All regions',
      allTypes: 'All types',
      emergencias: 'Emergency Room',
      pediatrico: 'Pediatric',
      direccion: 'Address',
      telefono: 'Phone',
      verMapa: 'View on Google Maps',
      noResults: 'No hospitals found with those filters.',
      resultados: 'hospitals found',
      limpiar: 'Clear',
    },
  }[lang];

  const filtered = useMemo(() => {
    return HOSPITALES.filter((h) => {
      const matchesSearch = !search ||
        h.nombre.toLowerCase().includes(search.toLowerCase()) ||
        h.direccion.toLowerCase().includes(search.toLowerCase());
      const matchesRegion = !regionFilter || h.region === regionFilter;
      const matchesTipo = !tipoFilter || h.tipo === tipoFilter;
      return matchesSearch && matchesRegion && matchesTipo;
    });
  }, [search, regionFilter, tipoFilter]);

  const regionesList = Object.keys(REGIONES[lang]);
  const tiposList = Object.keys(TIPOS[lang]);
  const hasActiveFilters = search || regionFilter || tipoFilter;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-medium text-[#0F2E30] mb-2">{t.title}</h2>
        <p className="font-body" style={{ color: 'var(--muted-ink)' }}>{t.subtitle}</p>
      </div>

      {/* Search & Filters — sand card */}
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

        <div className="flex flex-wrap gap-3">
          <select
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
            className="px-5 py-2.5 rounded-full font-body text-base focus:outline-none"
            style={{ backgroundColor: 'var(--paper)', color: 'var(--pine)' }}
          >
            <option value="">{t.allRegions}</option>
            {regionesList.map((r) => (
              <option key={r} value={r}>{REGIONES[lang][r]}</option>
            ))}
          </select>

          <select
            value={tipoFilter}
            onChange={(e) => setTipoFilter(e.target.value)}
            className="px-5 py-2.5 rounded-full font-body text-base focus:outline-none"
            style={{ backgroundColor: 'var(--paper)', color: 'var(--pine)' }}
          >
            <option value="">{t.allTypes}</option>
            {tiposList.map((tKey) => (
              <option key={tKey} value={tKey}>{TIPOS[lang][tKey]}</option>
            ))}
          </select>

          {hasActiveFilters && (
            <button
              onClick={() => { setSearch(''); setRegionFilter(''); setTipoFilter(''); }}
              className="px-5 py-2.5 rounded-full font-body font-medium flex items-center gap-1.5 transition hover:brightness-95"
              style={{ backgroundColor: 'var(--paper)', color: 'var(--muted-ink)' }}
            >
              <X className="w-4 h-4" />
              {t.limpiar}
            </button>
          )}
        </div>

        <p className="font-body text-sm mt-4" style={{ color: 'var(--muted-ink)' }}>
          {filtered.length} {t.resultados}
        </p>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 font-body" style={{ color: 'var(--muted-ink)' }}>{t.noResults}</div>
      ) : (
        <div className="grid gap-4">
          {filtered.map((h, i) => (
            <div
              key={i}
              className="overflow-hidden transition hover:brightness-95"
              style={{ backgroundColor: 'var(--sand)', borderRadius: '28px' }}
            >
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full text-left p-5 sm:p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--pine)' }}>
                  <Heart className="w-6 h-6 text-[#F4EFE6]" strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-display text-lg font-medium text-[#0F2E30]">{h.nombre}</h3>
                    {h.emergencias && (
                      <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--flamboyan)', color: 'var(--paper)' }}>
                        {t.emergencias}
                      </span>
                    )}
                    {h.especial === 'pediatrico' && (
                      <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--deep-pine)', color: 'var(--paper)' }}>
                        {t.pediatrico}
                      </span>
                    )}
                  </div>
                  <p className="font-body text-sm" style={{ color: 'var(--muted-ink)' }}>
                    {REGIONES[lang][h.region]} · {TIPOS[lang][h.tipo]}
                  </p>
                </div>
              </button>

              {expanded === i && (
                <div className="px-5 sm:px-6 pb-6 pt-0">
                  <div className="pt-4 space-y-3 border-t-2" style={{ borderColor: 'var(--paper)' }}>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 mt-0.5 shrink-0" style={{ color: 'var(--muted-ink)' }} />
                      <div>
                        <p className="font-body text-sm font-semibold text-[#0F2E30]">{t.direccion}</p>
                        <p className="font-body text-sm" style={{ color: 'var(--muted-ink)' }}>{h.direccion}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 mt-0.5 shrink-0" style={{ color: 'var(--muted-ink)' }} />
                      <div>
                        <p className="font-body text-sm font-semibold text-[#0F2E30]">{t.telefono}</p>
                        <a href={`tel:${h.telefono.replace(/\D/g, '')}`} className="font-body text-sm font-medium hover:underline" style={{ color: 'var(--pine)' }}>
                          {h.telefono}
                        </a>
                      </div>
                    </div>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.nombre + ' Puerto Rico')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-body text-sm font-semibold hover:underline"
                      style={{ color: 'var(--pine)' }}
                    >
                      <MapPin className="w-4 h-4" />
                      {t.verMapa}
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
