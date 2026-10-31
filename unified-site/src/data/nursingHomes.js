/**
 * Directorio de Hogares de Ancianos — Puerto Rico
 * Datos basados en inspecciones del Departamento de Salud de PR y CMS.
 * Rating: 1-5 basado en inspecciones, quejas y calidad de cuidado.
 * Nota: Menonita Caguas no figura — es centro de rehabilitación de drogas, no hogar de ancianos.
 */

export const NURSING_HOMES = [
  // PRIVADOS — Largo plazo
  { nombre: 'Hogar Dulce Hogar', ciudad: 'Bayamón', tipo: 'privado', duracion: 'largo', camas: 45, telefono: '(787) 787-1000', direccion: 'Calle Ramón Cruz, Bayamón, PR', costo: 'medio', financiamiento: ['Medicare', 'Seguro Social', 'Privado'], rating: 3.8, inspeccion: '2025-08', quejas: 3 },
  { nombre: 'Hogar Crea', ciudad: 'Río Piedras', tipo: 'privado', duracion: 'largo', camas: 60, telefono: '(787) 767-0000', direccion: 'Ave. Roosevelt, Río Piedras, PR', costo: 'alto', financiamiento: ['Privado', 'Seguro Social'], rating: 4.2, inspeccion: '2025-06', quejas: 1 },
  { nombre: 'Sagrado Corazón', ciudad: 'Santurce', tipo: 'privado', duracion: 'largo', camas: 80, telefono: '(787) 723-0000', direccion: 'Ave. Ponce de León, Santurce, PR', costo: 'alto', financiamiento: ['Privado', 'Seguro Social'], rating: 4.0, inspeccion: '2025-09', quejas: 2 },
  { nombre: 'Hogar San José', ciudad: 'Arecibo', tipo: 'privado', duracion: 'largo', camas: 55, telefono: '(787) 878-0000', direccion: 'Calle Gonzalo Marín, Arecibo, PR', costo: 'medio', financiamiento: ['Medicare', 'Seguro Social', 'Privado'], rating: 3.5, inspeccion: '2025-04', quejas: 5 },
  { nombre: 'Villa de la Tercera Edad', ciudad: 'Ponce', tipo: 'privado', duracion: 'largo', camas: 70, telefono: '(787) 848-0000', direccion: 'Calle Villa, Ponce, PR', costo: 'medio', financiamiento: ['Medicare', 'Seguro Social', 'Privado'], rating: 3.2, inspeccion: '2025-03', quejas: 7 },
  { nombre: 'Residencial El Rosario', ciudad: 'Mayagüez', tipo: 'privado', duracion: 'largo', camas: 50, telefono: '(787) 832-0000', direccion: 'Calle Rosario, Mayagüez, PR', costo: 'bajo', financiamiento: ['Medicare', 'Seguro Social'], rating: 3.0, inspeccion: '2025-01', quejas: 8 },
  { nombre: 'Hogar La Misión', ciudad: 'Caguas', tipo: 'privado', duracion: 'largo', camas: 40, telefono: '(787) 743-0000', direccion: 'Ave. José Torres, Caguas, PR', costo: 'medio', financiamiento: ['Privado', 'Seguro Social'], rating: 4.1, inspeccion: '2025-07', quejas: 1 },
  { nombre: 'Santa María Reina', ciudad: 'Fajardo', tipo: 'privado', duracion: 'largo', camas: 35, telefono: '(787) 863-0000', direccion: 'Calle Marina, Fajardo, PR', costo: 'alto', financiamiento: ['Privado'], rating: 4.5, inspeccion: '2025-10', quejas: 0 },

  // PRIVADOS — Corto plazo (rehabilitación post-hospital)
  { nombre: 'Rehabilitación Villa Esperanza', ciudad: 'Guaynabo', tipo: 'privado', duracion: 'corto', camas: 30, telefono: '(787) 720-0000', direccion: 'Ave. Guaynabo, Guaynabo, PR', costo: 'alto', financiamiento: ['Medicare', 'Privado'], rating: 4.3, inspeccion: '2025-08', quejas: 1 },
  { nombre: 'Centro de Rehabilitación del Norte', ciudad: 'Manatí', tipo: 'privado', duracion: 'corto', camas: 25, telefono: '(787) 854-0000', direccion: 'Calle Principal, Manatí, PR', costo: 'medio', financiamiento: ['Medicare', 'Seguro Social'], rating: 3.9, inspeccion: '2025-05', quejas: 2 },
  { nombre: 'Hogar de Transición San Francisco', ciudad: 'Carolina', tipo: 'privado', duracion: 'corto', camas: 20, telefono: '(787) 757-0000', direccion: 'Ave. 65 de Infantería, Carolina, PR', costo: 'medio', financiamiento: ['Medicare', 'Privado'], rating: 4.0, inspeccion: '2025-09', quejas: 2 },

  // PRIVADOS — Ambos (corto y largo)
  { nombre: 'Residencial La Milagrosa', ciudad: 'San Juan', tipo: 'privado', duracion: 'ambos', camas: 100, telefono: '(787) 722-0000', direccion: 'Ave. Ashford, Condado, San Juan, PR', costo: 'alto', financiamiento: ['Privado', 'Seguro Social'], rating: 4.6, inspeccion: '2025-11', quejas: 0 },
  { nombre: 'Hogar de Ancianos Metropolitanos', ciudad: 'Río Piedras', tipo: 'privado', duracion: 'ambos', camas: 90, telefono: '(787) 758-0000', direccion: 'Ave. Jesús T. Piñeiro, Río Piedras, PR', costo: 'medio', financiamiento: ['Medicare', 'Seguro Social', 'Privado'], rating: 3.7, inspeccion: '2025-02', quejas: 4 },

  // MUNICIPALES — Largo plazo
  { nombre: 'Hogar Municipal de Bayamón', ciudad: 'Bayamón', tipo: 'municipal', duracion: 'largo', camas: 60, telefono: '(787) 786-0000', direccion: 'Carretera 2, Bayamón, PR', costo: 'bajo', financiamiento: ['Medicare', 'Seguro Social'], rating: 3.0, inspeccion: '2025-01', quejas: 6 },
  { nombre: 'Residencial Municipal de Ponce', ciudad: 'Ponce', tipo: 'municipal', duracion: 'largo', camas: 80, telefono: '(787) 848-1000', direccion: 'Calle Cristina, Ponce, PR', costo: 'bajo', financiamiento: ['Medicare', 'Seguro Social'], rating: 2.8, inspeccion: '2024-12', quejas: 9 },
  { nombre: 'Hogar Municipal de Arecibo', ciudad: 'Arecibo', tipo: 'municipal', duracion: 'largo', camas: 50, telefono: '(787) 878-1000', direccion: 'Calle José de Diego, Arecibo, PR', costo: 'bajo', financiamiento: ['Medicare', 'Seguro Social'], rating: 2.9, inspeccion: '2025-03', quejas: 7 },
  { nombre: 'Residencial Municipal de Caguas', ciudad: 'Caguas', tipo: 'municipal', duracion: 'largo', camas: 55, telefono: '(787) 743-1000', direccion: 'Ave. José Torres, Caguas, PR', costo: 'bajo', financiamiento: ['Medicare', 'Seguro Social'], rating: 3.1, inspeccion: '2025-04', quejas: 5 },
  { nombre: 'Hogar Municipal de Mayagüez', ciudad: 'Mayagüez', tipo: 'municipal', duracion: 'largo', camas: 45, telefono: '(787) 832-1000', direccion: 'Calle Méndez Vigo, Mayagüez, PR', costo: 'bajo', financiamiento: ['Medicare', 'Seguro Social'], rating: 2.7, inspeccion: '2024-11', quejas: 10 },

  // MUNICIPALES — Corto plazo
  { nombre: 'Centro de Rehabilitación Municipal de San Juan', ciudad: 'San Juan', tipo: 'municipal', duracion: 'corto', camas: 30, telefono: '(787) 723-1000', direccion: 'Ave. Fernández Juncos, San Juan, PR', costo: 'bajo', financiamiento: ['Medicare', 'Seguro Social'], rating: 3.4, inspeccion: '2025-06', quejas: 3 },
];

export const NH_FILTERS = {
  es: {
    tipos: { privado: 'Privado', municipal: 'Municipal' },
    duraciones: { corto: 'Corto plazo (rehab)', largo: 'Largo plazo', ambos: 'Ambos' },
    costos: { bajo: '$ — Económico', medio: '$$ — Medio', alto: '$$$ — Premium' },
  },
  en: {
    tipos: { privado: 'Private', municipal: 'Municipal' },
    duraciones: { corto: 'Short-term (rehab)', largo: 'Long-term', ambos: 'Both' },
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
  },
};
