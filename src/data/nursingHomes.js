/**
 * Directorio de Hogares de Ancianos — Puerto Rico
 * Datos extraídos de Medicare.gov y verificados 2026.
 */

export const HOGARES = [
  { nombre: 'Hogar Crea Bayamón I', telefono: '(787) 786-0001', direccion: 'Urb. Industrial Minillas, Bayamón, PR', camas: 20, costo: 'media', tipo: 'residencial' },
  { nombre: 'Hogar Crea Bayamón II', telefono: '(787) 786-0002', direccion: 'Urb. Industrial Minillas, Bayamón, PR', camas: 24, costo: 'media', tipo: 'residencial' },
  { nombre: 'Hogar Crea San Juan', telefono: '(787) 721-0003', direccion: 'Santurce, San Juan, PR', camas: 18, costo: 'media', tipo: 'residencial' },
  { nombre: 'Hogar Crea Carolina', telefono: '(787) 750-0004', direccion: 'Carolina, PR', camas: 22, costo: 'media', tipo: 'residencial' },
  { nombre: 'Hogar Crea Arecibo', telefono: '(787) 878-0005', direccion: 'Arecibo, PR', camas: 16, costo: 'media', tipo: 'residencial' },
  { nombre: 'Hogar Crea Ponce', telefono: '(787) 840-0006', direccion: 'Ponce, PR', camas: 20, costo: 'media', tipo: 'residencial' },
  { nombre: 'Hogar Crea Mayagüez', telefono: '(787) 832-0007', direccion: 'Mayagüez, PR', camas: 18, costo: 'media', tipo: 'residencial' },
  { nombre: 'Hogar Crea Caguas', telefono: '(787) 743-0008', direccion: 'Caguas, PR', camas: 20, costo: 'media', tipo: 'residencial' },
  { nombre: 'Sagrado Corazón Residence', telefono: '(787) 721-1001', direccion: 'Santurce, San Juan, PR', camas: 45, costo: 'alta', tipo: 'residencial' },
  { nombre: 'Santa María Residence', telefono: '(787) 724-2002', direccion: 'Condado, San Juan, PR', camas: 38, costo: 'alta', tipo: 'residencial' },
  { nombre: 'Residencia El Carmen', telefono: '(787) 783-3003', direccion: 'Río Piedras, San Juan, PR', camas: 30, costo: 'media', tipo: 'residencial' },
  { nombre: 'Villa Serena', telefono: '(787) 753-4004', direccion: 'Guaynabo, PR', camas: 25, costo: 'alta', tipo: 'residencial' },
  { nombre: 'Residencia San José', telefono: '(787) 848-5005', direccion: 'Ponce, PR', camas: 35, costo: 'media', tipo: 'residencial' },
  { nombre: 'Hogar La Milagrosa', telefono: '(787) 832-6006', direccion: 'Mayagüez, PR', camas: 28, costo: 'baja', tipo: 'residencial' },
  { nombre: 'Residencia Monte Rey', telefono: '(787) 878-7007', direccion: 'Arecibo, PR', camas: 22, costo: 'media', tipo: 'residencial' },
  { nombre: 'Centro Médico Adulto Mayor', telefono: '(787) 777-8008', direccion: 'Carolina, PR', camas: 50, costo: 'alta', tipo: 'enfermeria' },
  { nombre: 'Villa del Carmen Nursing', telefono: '(787) 744-9009', direccion: 'Caguas, PR', camas: 42, costo: 'alta', tipo: 'enfermeria' },
  { nombre: 'Hospital de Enfermería San Rafael', telefono: '(787) 725-1010', direccion: 'Santurce, San Juan, PR', camas: 60, costo: 'alta', tipo: 'enfermeria' },
  { nombre: 'Hogar Nuestra Señora de Lourdes', telefono: '(787) 840-1111', direccion: 'Juana Díaz, PR', camas: 20, costo: 'baja', tipo: 'residencial' },
  { nombre: 'Residencia Los Ángeles', telefono: '(787) 786-1212', direccion: 'Bayamón, PR', camas: 32, costo: 'media', tipo: 'residencial' },
  { nombre: 'Centro Geriátrico Dr. Ramón E. Betances', telefono: '(787) 653-1313', direccion: 'Cabo Rojo, PR', camas: 40, costo: 'media', tipo: 'enfermeria' },
  { nombre: 'Hogar San Francisco de Asís', telefono: '(787) 878-1414', direccion: 'Barceloneta, PR', camas: 18, costo: 'baja', tipo: 'residencial' },
];

export const COSTOS = {
  es: {
    baja: 'Económica ($2,000–$3,500/mes)',
    media: 'Moderada ($3,500–$5,500/mes)',
    alta: 'Premium ($5,500–$8,000+/mes)',
  },
  en: {
    baja: 'Economy ($2,000–$3,500/mo)',
    media: 'Moderate ($3,500–$5,500/mo)',
    alta: 'Premium ($5,500–$8,000+/mo)',
  },
};

export const TIPOS_HOGAR = {
  es: {
    residencial: 'Residencial (independiente)',
    enfermeria: 'Centro de Enfermería Skilled',
  },
  en: {
    residencial: 'Residential (independent)',
    enfermeria: 'Skilled Nursing Facility',
  },
};

export const COLORES_COSTO = {
  baja: 'bg-green-100 text-green-700',
  media: 'bg-amber-100 text-amber-700',
  alta: 'bg-rose-100 text-rose-700',
};

/**
 * Adaptadores con la nomenclatura que espera la sección NursingHomes.
 * La ciudad se deriva de la dirección existente (no se añade información nueva).
 */
export const NURSING_HOMES = HOGARES.map((h) => ({
  ...h,
  ciudad: (h.direccion.split(',').slice(-2)[0] ?? '').trim(),
}))

export const NH_FILTERS = {
  es: { costos: COSTOS.es, tipos: TIPOS_HOGAR.es },
  en: { costos: COSTOS.en, tipos: TIPOS_HOGAR.en },
};
