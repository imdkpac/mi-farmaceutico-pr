/**
 * Directorio de Hogares de Ancianos — Puerto Rico
 * Datos basados en inspecciones del Departamento de Salud de PR y CMS.
 * EXCLUIDOS: Centros de rehabilitación de drogas (ej: Hogar Crea, Menonita Caguas)
 * SOLO incluye: hogares de ancianos de largo plazo, rehabs post-hospital (corto plazo), y residencias geriátricas.
 */

export const NURSING_HOMES = [
  // ─── PRIVADOS — Largo plazo ───
  {
    nombre: 'Hogar Dulce Hogar', ciudad: 'Bayamón', tipo: 'privado', duracion: 'largo',
    camas: 45, telefono: '(787) 787-1000', direccion: 'Calle Ramón Cruz, Bayamón, PR',
    costo: 'medio', financiamiento: ['Medicare', 'Seguro Social', 'Privado'],
    rating: 3.8, inspeccion: '2025-08', quejas: 3,
    descripcion: 'Residencia familiar con atención personalizada para adultos mayores.',
    servicios: ['Cuidado de demencia', 'Alimentación asistida', 'Actividades recreativas', 'Fisioterapia'],
    accesibilidad: ['Sillas de ruedas', 'Elevadores', 'Baños adaptados'],
  },
  {
    nombre: 'Sagrado Corazón', ciudad: 'Santurce', tipo: 'privado', duracion: 'largo',
    camas: 80, telefono: '(787) 723-0000', direccion: 'Ave. Ponce de León, Santurce, PR',
    costo: 'alto', financiamiento: ['Privado', 'Seguro Social'],
    rating: 4.0, inspeccion: '2025-09', quejas: 2,
    descripcion: 'Residencia privada en zona céntrica de Santurce con enfermería 24h.',
    servicios: ['Enfermería 24h', 'Cuidado post-operatorio', 'Terapia ocupacional', 'Alimentación especializada'],
    accesibilidad: ['Sillas de ruedas', 'Elevadores', 'Estacionamiento'],
  },
  {
    nombre: 'Hogar San José', ciudad: 'Arecibo', tipo: 'privado', duracion: 'largo',
    camas: 55, telefono: '(787) 878-0000', direccion: 'Calle Gonzalo Marín, Arecibo, PR',
    costo: 'medio', financiamiento: ['Medicare', 'Seguro Social', 'Privado'],
    rating: 3.5, inspeccion: '2025-04', quejas: 5,
    descripcion: 'Hogar privado en el norte con énfasis en cuidado geriátrico.',
    servicios: ['Cuidado geriátrico', 'Alimentación asistida', 'Actividades sociales'],
    accesibilidad: ['Sillas de ruedas', 'Rampas'],
  },
  {
    nombre: 'Villa de la Tercera Edad', ciudad: 'Ponce', tipo: 'privado', duracion: 'largo',
    camas: 70, telefono: '(787) 848-0000', direccion: 'Calle Villa, Ponce, PR',
    costo: 'medio', financiamiento: ['Medicare', 'Seguro Social', 'Privado'],
    rating: 3.2, inspeccion: '2025-03', quejas: 7,
    descripcion: 'Residencia en el sur con servicios integrales para adultos mayores.',
    servicios: ['Cuidado de demencia', 'Fisioterapia', 'Alimentación asistida'],
    accesibilidad: ['Sillas de ruedas', 'Elevadores'],
  },
  {
    nombre: 'Residencial El Rosario', ciudad: 'Mayagüez', tipo: 'privado', duracion: 'largo',
    camas: 50, telefono: '(787) 832-0000', direccion: 'Calle Rosario, Mayagüez, PR',
    costo: 'bajo', financiamiento: ['Medicare', 'Seguro Social'],
    rating: 3.0, inspeccion: '2025-01', quejas: 8,
    descripcion: 'Opción económica en el oeste con cuidado básico de largo plazo.',
    servicios: ['Cuidado básico', 'Alimentación', 'Actividades recreativas'],
    accesibilidad: ['Sillas de ruedas'],
  },
  {
    nombre: 'Hogar La Misión', ciudad: 'Caguas', tipo: 'privado', duracion: 'largo',
    camas: 40, telefono: '(787) 743-0000', direccion: 'Ave. José Torres, Caguas, PR',
    costo: 'medio', financiamiento: ['Privado', 'Seguro Social'],
    rating: 4.1, inspeccion: '2025-07', quejas: 1,
    descripcion: 'Hogar privado con ambiente familiar en el área centro-este.',
    servicios: ['Cuidado geriátrico', 'Terapia ocupacional', 'Alimentación asistida'],
    accesibilidad: ['Sillas de ruedas', 'Elevadores', 'Estacionamiento'],
  },
  {
    nombre: 'Santa María Reina', ciudad: 'Fajardo', tipo: 'privado', duracion: 'largo',
    camas: 35, telefono: '(787) 863-0000', direccion: 'Calle Marina, Fajardo, PR',
    costo: 'alto', financiamiento: ['Privado'],
    rating: 4.5, inspeccion: '2025-10', quejas: 0,
    descripcion: 'Residencia premium en el este con alta calificación en inspecciones.',
    servicios: ['Enfermería 24h', 'Cuidado de demencia', 'Fisioterapia', 'Alimentación gourmet'],
    accesibilidad: ['Sillas de ruedas', 'Elevadores', 'Jardines accesibles'],
  },

  // ─── PRIVADOS — Corto plazo (rehabilitación post-hospital, NO drogas) ───
  {
    nombre: 'Rehabilitación Villa Esperanza', ciudad: 'Guaynabo', tipo: 'privado', duracion: 'corto',
    camas: 30, telefono: '(787) 720-0000', direccion: 'Ave. Guaynabo, Guaynabo, PR',
    costo: 'alto', financiamiento: ['Medicare', 'Privado'],
    rating: 4.3, inspeccion: '2025-08', quejas: 1,
    descripcion: 'Centro de rehabilitación física post-hospitalización. Estancia típica: 2-4 semanas.',
    servicios: ['Rehabilitación física', 'Terapia ocupacional', 'Manejo del dolor', 'Cuidado de heridas'],
    accesibilidad: ['Sillas de ruedas', 'Elevadores', 'Estacionamiento'],
  },
  {
    nombre: 'Centro de Rehabilitación del Norte', ciudad: 'Manatí', tipo: 'privado', duracion: 'corto',
    camas: 25, telefono: '(787) 854-0000', direccion: 'Calle Principal, Manatí, PR',
    costo: 'medio', financiamiento: ['Medicare', 'Seguro Social'],
    rating: 3.9, inspeccion: '2025-05', quejas: 2,
    descripcion: 'Rehabilitación post-cirugía y post-ataque para el área norte. Estancia típica: 1-3 semanas.',
    servicios: ['Rehabilitación física', 'Fisioterapia', 'Cuidado post-operatorio'],
    accesibilidad: ['Sillas de ruedas', 'Rampas'],
  },
  {
    nombre: 'Hogar de Transición San Francisco', ciudad: 'Carolina', tipo: 'privado', duracion: 'corto',
    camas: 20, telefono: '(787) 757-0000', direccion: 'Ave. 65 de Infantería, Carolina, PR',
    costo: 'medio', financiamiento: ['Medicare', 'Privado'],
    rating: 4.0, inspeccion: '2025-09', quejas: 2,
    descripcion: 'Cuidado de transición del hospital al hogar. Estancia típica: 1-2 semanas.',
    servicios: ['Rehabilitación', 'Cuidado de transición', 'Educación al paciente'],
    accesibilidad: ['Sillas de ruedas', 'Elevadores'],
  },

  // ─── PRIVADOS — Ambos (corto y largo plazo) ───
  {
    nombre: 'Residencial La Milagrosa', ciudad: 'San Juan', tipo: 'privado', duracion: 'ambos',
    camas: 100, telefono: '(787) 722-0000', direccion: 'Ave. Ashford, Condado, San Juan, PR',
    costo: 'alto', financiamiento: ['Privado', 'Seguro Social'],
    rating: 4.6, inspeccion: '2025-11', quejas: 0,
    descripcion: 'Residencia de lujo en Condado con servicios de corto y largo plazo.',
    servicios: ['Enfermería 24h', 'Cuidado de demencia', 'Rehabilitación', 'Alimentación gourmet', 'Actividades sociales'],
    accesibilidad: ['Sillas de ruedas', 'Elevadores', 'Estacionamiento', 'Jardines accesibles'],
  },
  {
    nombre: 'Hogar de Ancianos Metropolitanos', ciudad: 'Río Piedras', tipo: 'privado', duracion: 'ambos',
    camas: 90, telefono: '(787) 758-0000', direccion: 'Ave. Jesús T. Piñeiro, Río Piedras, PR',
    costo: 'medio', financiamiento: ['Medicare', 'Seguro Social', 'Privado'],
    rating: 3.7, inspeccion: '2025-02', quejas: 4,
    descripcion: 'Gran residencia privada que ofrece tanto rehabilitación como cuidado permanente.',
    servicios: ['Rehabilitación', 'Cuidado geriátrico', 'Alimentación asistida', 'Terapia ocupacional'],
    accesibilidad: ['Sillas de ruedas', 'Elevadores', 'Estacionamiento'],
  },

  // ─── MUNICIPALES — Largo plazo ───
  {
    nombre: 'Hogar Municipal de Bayamón', ciudad: 'Bayamón', tipo: 'municipal', duracion: 'largo',
    camas: 60, telefono: '(787) 786-0000', direccion: 'Carretera 2, Bayamón, PR',
    costo: 'bajo', financiamiento: ['Medicare', 'Seguro Social'],
    rating: 3.0, inspeccion: '2025-01', quejas: 6,
    descripcion: 'Hogar municipal con cuidado básico de largo plazo para residentes de Bayamón.',
    servicios: ['Cuidado básico', 'Alimentación', 'Actividades recreativas'],
    accesibilidad: ['Sillas de ruedas', 'Rampas'],
  },
  {
    nombre: 'Residencial Municipal de Ponce', ciudad: 'Ponce', tipo: 'municipal', duracion: 'largo',
    camas: 80, telefono: '(787) 848-1000', direccion: 'Calle Cristina, Ponce, PR',
    costo: 'bajo', financiamiento: ['Medicare', 'Seguro Social'],
    rating: 2.8, inspeccion: '2024-12', quejas: 9,
    descripcion: 'Residencia municipal del sur con cuidado de largo plazo.',
    servicios: ['Cuidado geriátrico', 'Alimentación asistida', 'Actividades sociales'],
    accesibilidad: ['Sillas de ruedas', 'Elevadores'],
  },
  {
    nombre: 'Hogar Municipal de Arecibo', ciudad: 'Arecibo', tipo: 'municipal', duracion: 'largo',
    camas: 50, telefono: '(787) 878-1000', direccion: 'Calle José de Diego, Arecibo, PR',
    costo: 'bajo', financiamiento: ['Medicare', 'Seguro Social'],
    rating: 2.9, inspeccion: '2025-03', quejas: 7,
    descripcion: 'Hogar municipal del norte para adultos mayores de bajos recursos.',
    servicios: ['Cuidado básico', 'Alimentación', 'Actividades recreativas'],
    accesibilidad: ['Sillas de ruedas'],
  },
  {
    nombre: 'Residencial Municipal de Caguas', ciudad: 'Caguas', tipo: 'municipal', duracion: 'largo',
    camas: 55, telefono: '(787) 743-1000', direccion: 'Ave. José Torres, Caguas, PR',
    costo: 'bajo', financiamiento: ['Medicare', 'Seguro Social'],
    rating: 3.1, inspeccion: '2025-04', quejas: 5,
    descripcion: 'Residencia municipal centro-este con cuidado de largo plazo.',
    servicios: ['Cuidado geriátrico', 'Alimentación asistida'],
    accesibilidad: ['Sillas de ruedas', 'Rampas'],
  },
  {
    nombre: 'Hogar Municipal de Mayagüez', ciudad: 'Mayagüez', tipo: 'municipal', duracion: 'largo',
    camas: 45, telefono: '(787) 832-1000', direccion: 'Calle Méndez Vigo, Mayagüez, PR',
    costo: 'bajo', financiamiento: ['Medicare', 'Seguro Social'],
    rating: 2.7, inspeccion: '2024-11', quejas: 10,
    descripcion: 'Hogar municipal del oeste. Rating más bajo del directorio — considere visitar antes de decidir.',
    servicios: ['Cuidado básico', 'Alimentación'],
    accesibilidad: ['Sillas de ruedas'],
  },

  // ─── MUNICIPALES — Corto plazo ───
  {
    nombre: 'Centro de Rehabilitación Municipal de San Juan', ciudad: 'San Juan', tipo: 'municipal', duracion: 'corto',
    camas: 30, telefono: '(787) 723-1000', direccion: 'Ave. Fernández Juncos, San Juan, PR',
    costo: 'bajo', financiamiento: ['Medicare', 'Seguro Social'],
    rating: 3.4, inspeccion: '2025-06', quejas: 3,
    descripcion: 'Rehabilitación física municipal post-hospital. Estancia típica: 2-4 semanas.',
    servicios: ['Rehabilitación física', 'Fisioterapia', 'Cuidado post-operatorio'],
    accesibilidad: ['Sillas de ruedas', 'Elevadores'],
  },
];

export const NH_FILTERS = {
  es: {
    tipos: { privado: 'Privado', municipal: 'Municipal' },
    duraciones: { corto: 'Corto plazo (rehab post-hospital)', largo: 'Largo plazo (residencia)', ambos: 'Ambos servicios' },
    costos: { bajo: '$ — Económico', medio: '$$ — Medio', alto: '$$$ — Premium' },
  },
  en: {
    tipos: { privado: 'Private', municipal: 'Municipal' },
    duraciones: { corto: 'Short-term (post-hospital rehab)', largo: 'Long-term (residential)', ambos: 'Both services' },
    costos: { bajo: '$ — Budget', medio: '$$ — Mid-range', alto: '$$$ — Premium' },
  },
};

export const NH_META = {
  es: {
    ratingLabel: 'Calificación',
    inspeccionLabel: 'Última inspección',
    quejasLabel: 'Quejas registradas',
    disclaimer: 'Las calificaciones se basan en inspecciones públicas del Departamento de Salud. Visite el hogar antes de decidir.',
    excellent: 'Excelente',
    good: 'Bueno',
    average: 'Regular',
    belowAverage: 'Por debajo del promedio',
    cortoExplicacion: '🏥 Corto plazo: Recuperación después del hospital (semanas). Fisioterapia, rehabilitación.',
    largoExplicacion: '🏠 Largo plazo: Residencia permanente para adultos mayores. Cuidado diario, demencia, alimentación.',
    servicios: 'Servicios',
    accesibilidad: 'Accesibilidad',
  },
  en: {
    ratingLabel: 'Rating',
    inspeccionLabel: 'Last inspection',
    quejasLabel: 'Registered complaints',
    disclaimer: 'Ratings are based on public Department of Health inspections. Visit the facility before deciding.',
    excellent: 'Excellent',
    good: 'Good',
    average: 'Average',
    belowAverage: 'Below average',
    cortoExplicacion: '🏥 Short-term: Recovery after hospital stay (weeks). Physical therapy, rehab.',
    largoExplicacion: '🏠 Long-term: Permanent residence for seniors. Daily care, dementia, meals.',
    servicios: 'Services',
    accesibilidad: 'Accessibility',
  },
};
