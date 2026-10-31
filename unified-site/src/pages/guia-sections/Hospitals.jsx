import React, { useState, useMemo } from 'react';
import { Search, Phone, MapPin, Heart, AlertTriangle, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { HOSPITALES, HOSPITALES_CERRADOS, EMERGENCIAS, REGIONES, TIPOS, ESPECIALIDADES } from '../../data/hospitals';

export default function Hospitals() {
  const { lang } = useLanguage();
  const [viewMode, setViewMode] = useState('area'); // 'area' | 'especialidad'
  const [search, setSearch] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [tipoFilter, setTipoFilter] = useState('');
  const [specFilter, setSpecFilter] = useState('');
  const [expanded, setExpanded] = useState(null);
  const [showEmergencias, setShowEmergencias] = useState(false);

  const t = {
    es: {
      title: 'Hospitales en Puerto Rico',
      subtitle: 'Encuentre hospitales por área o por especialidad médica',
      search: 'Buscar hospital...',
      allRegions: 'Todas las regiones',
      allTypes: 'Todos los tipos',
      allSpecs: 'Todas las especialidades',
      byArea: 'Ver por área',
      bySpecialty: 'Ver por especialidad',
      emergencias: 'Emergencias',
      pediatrico: 'Pediátrico',
      direccion: 'Dirección',
      telefono: 'Teléfono',
      verMapa: 'Ver en Google Maps',
      noResults: 'No se encontraron hospitales con esos filtros.',
      resultados: 'hospitales encontrados',
      limpiar: 'Limpiar',
      emergenciasTitle: '¿Es una emergencia?',
      emergenciasBtn: 'Ver señales de emergencia',
      cerradosTitle: 'Hospitales cerrados recientemente',
      cerradoNota: 'CERRADO —',
      alternativa: 'Alternativa',
      hospCount: (n) => `${n} hospital${n !== 1 ? 'es' : ''}`,
    },
    en: {
      title: 'Hospitals in Puerto Rico',
      subtitle: 'Find hospitals by area or medical specialty',
      search: 'Search hospital...',
      allRegions: 'All regions',
      allTypes: 'All types',
      allSpecs: 'All specialties',
      byArea: 'View by area',
      bySpecialty: 'View by specialty',
      emergencias: 'Emergency Room',
      pediatrico: 'Pediatric',
      direccion: 'Address',
      telefono: 'Phone',
      verMapa: 'View on Google Maps',
      noResults: 'No hospitals found with those filters.',
      resultados: 'hospitals found',
      limpiar: 'Clear',
      emergenciasTitle: 'Is this an emergency?',
      emergenciasBtn: 'See emergency warning signs',
      cerradosTitle: 'Recently closed hospitals',
      cerradoNota: 'CLOSED —',
      alternativa: 'Alternative',
      hospCount: (n) => `${n} hospital${n !== 1 ? 's' : ''}`,
    },
  }[lang];

  const filtered = useMemo(() => {
    return HOSPITALES.filter((h) => {
      const matchesSearch = !search ||
        h.nombre.toLowerCase().includes(search.toLowerCase()) ||
        h.direccion.toLowerCase().includes(search.toLowerCase());
      const matchesRegion = !regionFilter || h.region === regionFilter;
      const matchesTipo = !tipoFilter || h.tipo === tipoFilter;
      const matchesSpec = !specFilter || h.especialidades.includes(specFilter);
      return matchesSearch && matchesRegion && matchesTipo && matchesSpec;
    });
  }, [search, regionFilter, tipoFilter, specFilter]);

  // Group by region (for area view)
  const groupedByRegion = useMemo(() => {
    const groups = {};
    filtered.forEach((h) => {
      if (!groups[h.region]) groups[h.region] = [];
      groups[h.region].push(h);
    });
    return groups;
  }, [filtered]);

  // Group by specialty (for specialty view)
  const groupedBySpec = useMemo(() => {
    const groups = {};
    filtered.forEach((h) => {
      h.especialidades.forEach((spec) => {
        if (!groups[spec]) groups[spec] = [];
        groups[spec].push(h);
      });
    });
    // Sort by specialty name
    return Object.fromEntries(
      Object.entries(groups).sort((a, b) => {
        const nameA = ESPECIALIDADES[lang][a[0]] || a[0];
        const nameB = ESPECIALIDADES[lang][b[0]] || b[0];
        return nameA.localeCompare(nameB);
      })
    );
  }, [filtered, lang]);

  const regionesList = Object.keys(REGIONES[lang]);
  const tiposList = Object.keys(TIPOS[lang]);
  const specsList = Object.keys(ESPECIALIDADES[lang]);
  const hasActiveFilters = search || regionFilter || tipoFilter || specFilter;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-medium text-[#0F2E30] mb-2">{t.title}</h2>
        <p className="font-body" style={{ color: 'var(--muted-ink)' }}>{t.subtitle}</p>
      </div>

      {/* Closed hospitals notice */}
      {HOSPITALES_CERRADOS.length > 0 && (
        <div className="p-5" style={{ backgroundColor: 'var(--sand)', borderRadius: '28px', border: '2px solid var(--flamboyan)' }}>
          <h3 className="font-display text-lg font-medium text-[#0F2E30] mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" style={{ color: 'var(--flamboyan)' }} />
            {t.cerradosTitle}
          </h3>
          {HOSPITALES_CERRADOS.map((h, i) => (
            <p key={i} className="font-body text-sm" style={{ color: 'var(--muted-ink)' }}>
              <span className="font-bold" style={{ color: 'var(--flamboyan)' }}>{t.cerradoNota} {h.nombre} ({h.cerrado})</span>
              <br />{h.nota}
            </p>
          ))}
        </div>
      )}

      {/* Emergency toggle */}
      <button
        onClick={() => setShowEmergencias(!showEmergencias)}
        className="w-full flex items-center justify-between p-5 text-left transition"
        style={{ backgroundColor: 'var(--flamboyan)', borderRadius: '28px', color: 'var(--paper)' }}
      >
        <span className="font-display text-lg font-medium flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" />
          {t.emergenciasTitle}
        </span>
        {showEmergencias ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>

      {showEmergencias && (
        <div className="grid gap-4">
          {EMERGENCIAS[lang].map((e, i) => (
            <div key={i} className="p-5" style={{ backgroundColor: 'var(--sand)', borderRadius: '28px', borderLeft: '6px solid var(--flamboyan)' }}>
              <h4 className="font-display text-lg font-medium text-[#0F2E30] mb-2">{e.condicion}</h4>
              <p className="font-body text-sm mb-2" style={{ color: 'var(--muted-ink)' }}><strong>Señales:</strong> {e.sintomas}</p>
              <p className="font-body text-sm font-bold" style={{ color: 'var(--flamboyan)' }}>{e.accion}</p>
            </div>
          ))}
        </div>
      )}

      {/* View Toggle */}
      <div className="flex gap-2">
        <button
          onClick={() => setViewMode('area')}
          className="flex-1 px-5 py-3 rounded-full font-body font-bold text-base transition"
          style={viewMode === 'area' ? { backgroundColor: 'var(--pine)', color: 'var(--paper)' } : { backgroundColor: 'var(--sand)', color: 'var(--pine)' }}
        >
          {t.byArea}
        </button>
        <button
          onClick={() => setViewMode('especialidad')}
          className="flex-1 px-5 py-3 rounded-full font-body font-bold text-base transition"
          style={viewMode === 'especialidad' ? { backgroundColor: 'var(--pine)', color: 'var(--paper)' } : { backgroundColor: 'var(--sand)', color: 'var(--pine)' }}
        >
          {t.bySpecialty}
        </button>
      </div>

      {/* Search & Filters */}
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

          {viewMode === 'especialidad' && (
            <select
              value={specFilter}
              onChange={(e) => setSpecFilter(e.target.value)}
              className="px-5 py-2.5 rounded-full font-body text-base focus:outline-none"
              style={{ backgroundColor: 'var(--paper)', color: 'var(--pine)' }}
            >
              <option value="">{t.allSpecs}</option>
              {specsList.map((s) => (
                <option key={s} value={s}>{ESPECIALIDADES[lang][s]}</option>
              ))}
            </select>
          )}

          {hasActiveFilters && (
            <button
              onClick={() => { setSearch(''); setRegionFilter(''); setTipoFilter(''); setSpecFilter(''); }}
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
      ) : viewMode === 'area' ? (
        /* ─── AREA VIEW ─── */
        <div className="space-y-8">
          {Object.entries(groupedByRegion).map(([region, hospitales]) => (
            <div key={region}>
              <h3 className="font-display text-xl font-medium text-[#0F2E30] mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" style={{ color: 'var(--pine)' }} />
                {REGIONES[lang][region]}
                <span className="text-sm font-body font-normal" style={{ color: 'var(--muted-ink)' }}>({hospitales.length})</span>
              </h3>
              <div className="grid gap-3">
                {hospitales.map((h, i) => {
                  const globalIndex = `area-${region}-${i}`;
                  return (
                    <div key={i} className="overflow-hidden transition hover:brightness-95" style={{ backgroundColor: 'var(--sand)', borderRadius: '28px' }}>
                      <button onClick={() => setExpanded(expanded === globalIndex ? null : globalIndex)} className="w-full text-left p-5 sm:p-6 flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: h.emergencias ? 'var(--flamboyan)' : 'var(--pine)' }}>
                          <Heart className="w-6 h-6 text-[#F4EFE6]" strokeWidth={2} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="font-display text-lg font-medium text-[#0F2E30]">{h.nombre}</h3>
                            {h.emergencias && <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--flamboyan)', color: 'var(--paper)' }}>{t.emergencias}</span>}
                            {h.especial === 'pediatrico' && <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--deep-pine)', color: 'var(--paper)' }}>{t.pediatrico}</span>}
                          </div>
                          <p className="font-body text-sm" style={{ color: 'var(--muted-ink)' }}>{TIPOS[lang][h.tipo]}</p>
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {h.especialidades.slice(0, 4).map((spec, si) => (
                              <span key={si} className="text-xs px-2 py-0.5 rounded-full font-body" style={{ backgroundColor: 'var(--paper)', color: 'var(--pine)' }}>
                                {ESPECIALIDADES[lang][spec] || spec}
                              </span>
                            ))}
                          </div>
                        </div>
                        <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${expanded === globalIndex ? 'rotate-180' : ''}`} style={{ color: 'var(--muted-ink)' }} />
                      </button>

                      {expanded === globalIndex && (
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
                            <div className="flex flex-wrap gap-1.5">
                              {h.especialidades.map((spec, si) => (
                                <span key={si} className="text-xs px-2 py-0.5 rounded-full font-body" style={{ backgroundColor: 'var(--paper)', color: 'var(--pine)' }}>
                                  {ESPECIALIDADES[lang][spec] || spec}
                                </span>
                              ))}
                            </div>
                            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.nombre + ' Puerto Rico')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-body text-sm font-semibold hover:underline" style={{ color: 'var(--pine)' }}>
                              <MapPin className="w-4 h-4" />{t.verMapa}
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* ─── SPECIALTY VIEW ─── */
        <div className="grid sm:grid-cols-2 gap-4">
          {Object.entries(groupedBySpec).map(([spec, hospitales]) => (
            <div key={spec} className="p-5 sm:p-6" style={{ backgroundColor: 'var(--sand)', borderRadius: '28px' }}>
              <h3 className="font-display text-lg font-medium text-[#0F2E30] mb-1">
                {ESPECIALIDADES[lang][spec] || spec}
              </h3>
              <p className="font-body text-sm mb-4" style={{ color: 'var(--muted-ink)' }}>
                {t.hospCount(hospitales.length)}
              </p>
              <div className="space-y-3">
                {hospitales.map((h, i) => {
                  const globalIndex = `spec-${spec}-${i}`;
                  return (
                    <div key={i} className="overflow-hidden" style={{ backgroundColor: 'var(--paper)', borderRadius: '16px' }}>
                      <button onClick={() => setExpanded(expanded === globalIndex ? null : globalIndex)} className="w-full text-left p-4 flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: h.emergencias ? 'var(--flamboyan)' : 'var(--pine)' }}>
                          <Heart className="w-5 h-5 text-[#F4EFE6]" strokeWidth={2} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-display text-base font-medium text-[#0F2E30]">{h.nombre}</h4>
                          <p className="font-body text-xs" style={{ color: 'var(--muted-ink)' }}>{REGIONES[lang][h.region]}</p>
                        </div>
                        <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform ${expanded === globalIndex ? 'rotate-180' : ''}`} style={{ color: 'var(--muted-ink)' }} />
                      </button>
                      {expanded === globalIndex && (
                        <div className="px-4 pb-4 pt-0">
                          <div className="pt-3 space-y-2 border-t-2" style={{ borderColor: 'var(--sand)' }}>
                            <p className="font-body text-sm" style={{ color: 'var(--muted-ink)' }}><strong style={{ color: 'var(--pine)' }}>{t.direccion}:</strong> {h.direccion}</p>
                            <a href={`tel:${h.telefono.replace(/\D/g, '')}`} className="font-body text-sm font-medium hover:underline block" style={{ color: 'var(--pine)' }}>{h.telefono}</a>
                            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.nombre + ' Puerto Rico')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-body text-sm font-semibold hover:underline" style={{ color: 'var(--pine)' }}>
                              <MapPin className="w-3 h-3" />{t.verMapa}
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
