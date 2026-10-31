import React, { useState, useMemo } from 'react';
import { Search, Phone, MapPin, Home, Star, AlertTriangle, X, Calendar, MessageSquare } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { NURSING_HOMES, NH_FILTERS, NH_META } from '../../data/nursingHomes';

function StarRating({ rating, size = 16 }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f-${i}`} className="fill-current" style={{ width: size, height: size, color: '#E8A838' }} />
      ))}
      {half && <Star className="fill-current opacity-60" style={{ width: size, height: size, color: '#E8A838' }} />}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e-${i}`} style={{ width: size, height: size, color: '#E2D6BF' }} />
      ))}
      <span className="font-body text-sm font-bold ml-1" style={{ color: '#E8A838' }}>{rating.toFixed(1)}</span>
    </div>
  );
}

function RatingBadge({ rating, lang }) {
  const meta = NH_META[lang];
  let label = meta.belowAverage;
  let bg = '#D65A5A';
  if (rating >= 4.5) { label = meta.excellent; bg = '#7BBF8E'; }
  else if (rating >= 3.5) { label = meta.good; bg = '#6BA3D6'; }
  else if (rating >= 2.5) { label = meta.average; bg = '#E8A838'; }
  return (
    <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: bg }}>
      {label}
    </span>
  );
}

export default function NursingHomes() {
  const { lang } = useLanguage();
  const [search, setSearch] = useState('');
  const [tipoFilter, setTipoFilter] = useState('');
  const [duracionFilter, setDuracionFilter] = useState('');
  const [costoFilter, setCostoFilter] = useState('');
  const [expanded, setExpanded] = useState(null);

  const t = {
    es: {
      title: 'Hogares de Ancianos',
      subtitle: 'Encuentre hogares de cuidado con calificaciones, inspecciones y opciones de financiamiento',
      search: 'Buscar hogar...',
      allTypes: 'Todos los tipos',
      allDurations: 'Todas las duraciones',
      allCosts: 'Todos los costos',
      direccion: 'Dirección',
      telefono: 'Teléfono',
      camas: 'Camas',
      costoLabel: 'Costo aproximado',
      financiamiento: 'Financiamiento aceptado',
      verMapa: 'Ver en Google Maps',
      noResults: 'No se encontraron hogares con esos filtros.',
      resultados: 'hogares encontrados',
      limpiar: 'Limpiar',
    },
    en: {
      title: 'Nursing Homes',
      subtitle: 'Find care homes with ratings, inspections, and financing options',
      search: 'Search home...',
      allTypes: 'All types',
      allDurations: 'All durations',
      allCosts: 'All costs',
      direccion: 'Address',
      telefono: 'Phone',
      camas: 'Beds',
      costoLabel: 'Approximate cost',
      financiamiento: 'Accepted financing',
      verMapa: 'View on Google Maps',
      noResults: 'No homes found with those filters.',
      resultados: 'homes found',
      limpiar: 'Clear',
    },
  }[lang];

  const filtered = useMemo(() => {
    return NURSING_HOMES.filter((h) => {
      const matchesSearch = !search ||
        h.nombre.toLowerCase().includes(search.toLowerCase()) ||
        h.ciudad.toLowerCase().includes(search.toLowerCase());
      const matchesTipo = !tipoFilter || h.tipo === tipoFilter;
      const matchesDuracion = !duracionFilter || h.duracion === duracionFilter;
      const matchesCosto = !costoFilter || h.costo === costoFilter;
      return matchesSearch && matchesTipo && matchesDuracion && matchesCosto;
    });
  }, [search, tipoFilter, duracionFilter, costoFilter]);

  const hasActiveFilters = search || tipoFilter || duracionFilter || costoFilter;
  const meta = NH_META[lang];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-medium text-[#0F2E30] mb-2">{t.title}</h2>
        <p className="font-body" style={{ color: 'var(--muted-ink)' }}>{t.subtitle}</p>
      </div>

      {/* Disclaimer */}
      <div className="flex items-start gap-3 p-4" style={{ backgroundColor: 'var(--sand)', borderRadius: '28px' }}>
        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--flamboyan)' }} />
        <p className="font-body text-sm" style={{ color: 'var(--muted-ink)' }}>{meta.disclaimer}</p>
      </div>

      {/* Filters */}
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
            value={tipoFilter}
            onChange={(e) => setTipoFilter(e.target.value)}
            className="px-5 py-2.5 rounded-full font-body text-base focus:outline-none"
            style={{ backgroundColor: 'var(--paper)', color: 'var(--pine)' }}
          >
            <option value="">{t.allTypes}</option>
            {Object.entries(NH_FILTERS[lang].tipos).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
          <select
            value={duracionFilter}
            onChange={(e) => setDuracionFilter(e.target.value)}
            className="px-5 py-2.5 rounded-full font-body text-base focus:outline-none"
            style={{ backgroundColor: 'var(--paper)', color: 'var(--pine)' }}
          >
            <option value="">{t.allDurations}</option>
            {Object.entries(NH_FILTERS[lang].duraciones).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
          <select
            value={costoFilter}
            onChange={(e) => setCostoFilter(e.target.value)}
            className="px-5 py-2.5 rounded-full font-body text-base focus:outline-none"
            style={{ backgroundColor: 'var(--paper)', color: 'var(--pine)' }}
          >
            <option value="">{t.allCosts}</option>
            {Object.entries(NH_FILTERS[lang].costos).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
          {hasActiveFilters && (
            <button
              onClick={() => { setSearch(''); setTipoFilter(''); setDuracionFilter(''); setCostoFilter(''); }}
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

      {/* Cards Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 font-body" style={{ color: 'var(--muted-ink)' }}>{t.noResults}</div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {filtered.map((h, i) => (
            <div
              key={i}
              className="overflow-hidden transition hover:brightness-95"
              style={{ backgroundColor: 'var(--sand)', borderRadius: '28px' }}
            >
              <button onClick={() => setExpanded(expanded === i ? null : i)} className="w-full text-left p-5 sm:p-6">
                {/* Header row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: h.tipo === 'municipal' ? '#4A90D9' : '#7BBF8E' }}
                    >
                      <Home className="w-6 h-6 text-[#F4EFE6]" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-medium text-[#0F2E30]">{h.nombre}</h3>
                      <p className="font-body text-sm" style={{ color: 'var(--muted-ink)' }}>{h.ciudad}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: h.tipo === 'municipal' ? '#4A90D9' : '#7BBF8E' }}
                    >
                      {NH_FILTERS[lang].tipos[h.tipo]}
                    </span>
                  </div>
                </div>

                {/* Rating row */}
                <div className="flex items-center justify-between mb-3">
                  <StarRating rating={h.rating} />
                  <RatingBadge rating={h.rating} lang={lang} />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-body font-bold" style={{ backgroundColor: 'var(--paper)', color: 'var(--pine)' }}>
                    {NH_FILTERS[lang].duraciones[h.duracion]}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-body font-bold" style={{ backgroundColor: 'var(--paper)', color: 'var(--pine)' }}>
                    {NH_FILTERS[lang].costos[h.costo]}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-body" style={{ backgroundColor: 'var(--paper)', color: 'var(--muted-ink)' }}>
                    {h.camas} {t.camas}
                  </span>
                </div>

                {/* Inspection & Complaints preview */}
                <div className="flex items-center gap-4 text-xs font-body" style={{ color: 'var(--muted-ink)' }}>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {meta.inspeccionLabel}: {h.inspeccion}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5" /> {meta.quejasLabel}: {h.quejas}
                  </span>
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
                        <a href={`tel:${h.telefono.replace(/\D/g, '')}`} className="font-body text-sm font-medium hover:underline" style={{ color: 'var(--pine)' }}>{h.telefono}</a>
                      </div>
                    </div>
                    <p className="font-body text-sm" style={{ color: 'var(--muted-ink)' }}>
                      <span className="font-semibold text-[#0F2E30]">{t.costoLabel}:</span> {NH_FILTERS[lang].costos[h.costo]}
                    </p>
                    <p className="font-body text-sm" style={{ color: 'var(--muted-ink)' }}>
                      <span className="font-semibold text-[#0F2E30]">{t.financiamiento}:</span> {h.financiamiento.join(', ')}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1 font-body" style={{ color: 'var(--muted-ink)' }}>
                        <Calendar className="w-4 h-4" /> {meta.inspeccionLabel}: {h.inspeccion}
                      </span>
                      <span className="flex items-center gap-1 font-body" style={{ color: h.quejas > 5 ? 'var(--flamboyan)' : 'var(--muted-ink)' }}>
                        <MessageSquare className="w-4 h-4" /> {meta.quejasLabel}: {h.quejas}
                      </span>
                    </div>
                    <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.nombre + ' Puerto Rico')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-body text-sm font-semibold hover:underline" style={{ color: 'var(--pine)' }}>
                      <MapPin className="w-4 h-4" />{t.verMapa}
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
