/**
 * Directorio de Hospitales — Puerto Rico
 * Datos verificados 2026. Hospital del Maestro CERRADO (2024).
 */

export const HOSPITALES = [
  // Área Metro
  { nombre: 'Hospital Pavia Santurce', telefono: '(787) 721-2161', direccion: 'Ave. José de Diego 735, Santurce, PR', emergencias: true, region: 'metro', tipo: 'privado' },
  { nombre: 'Hospital Pavia Hato Rey', telefono: '(787) 754-0909', direccion: 'Ave. Barbosa 431, Hato Rey, PR', emergencias: true, region: 'metro', tipo: 'privado' },
  { nombre: 'Hospital Auxilio Mutuo', telefono: '(787) 758-2000', direccion: 'Ave. Ponce de León, Hato Rey, PR', emergencias: true, region: 'metro', tipo: 'privado' },
  { nombre: 'Hospital Metropolitano', telefono: '(787) 641-2323', direccion: 'Ave. Degetau, San Juan, PR', emergencias: true, region: 'metro', tipo: 'privado' },
  { nombre: 'Hospital San Francisco', telefono: '(787) 763-0202', direccion: 'Ave. Calloza, San Juan, PR', emergencias: true, region: 'metro', tipo: 'privado' },
  { nombre: 'Hospital UPR Dr. Federico Trilla', telefono: '(787) 777-3535', direccion: 'Carretera 506 Km 1.7, Carolina, PR', emergencias: true, region: 'metro', tipo: 'publico' },
  { nombre: 'Hospital Pediátrico Universitario', telefono: '(787) 777-3535', direccion: 'Carretera 506, Carolina, PR', emergencias: true, region: 'metro', tipo: 'publico', especial: 'pediatrico' },
  { nombre: 'Hospital Municipal de San Juan', telefono: '(787) 723-1280', direccion: 'Ave. Roberto H. Todd, Santurce, PR', emergencias: true, region: 'metro', tipo: 'publico' },
  { nombre: 'Hospital Municipal de Bayamón', telefono: '(787) 786-5700', direccion: 'Carretera 2, Bayamón, PR', emergencias: true, region: 'metro', tipo: 'publico' },
  { nombre: 'Hospital Dr. Virgilio Dávila', telefono: '(787) 654-0100', direccion: 'Ave. Barbosa, Bayamón, PR', emergencias: true, region: 'metro', tipo: 'publico' },

  // Norte
  { nombre: 'Hospital Pavia Arecibo', telefono: '(787) 878-7171', direccion: 'Carretera 2 Km 81.5, Arecibo, PR', emergencias: true, region: 'norte', tipo: 'privado' },
  { nombre: 'Hospital Dr. Cayetano Coll y Toste', telefono: '(787) 878-7340', direccion: 'Carretera 129, Arecibo, PR', emergencias: true, region: 'norte', tipo: 'publico' },
  { nombre: 'Hospital Dr. Jesús E. Pino', telefono: '(787) 878-7340', direccion: 'Carretera 129, Arecibo, PR', emergencias: true, region: 'norte', tipo: 'publico' },

  // Oeste
  { nombre: 'Hospital Buen Samaritano', telefono: '(787) 862-2161', direccion: 'Ave. Constitución, Aguadilla, PR', emergencias: true, region: 'oeste', tipo: 'privado' },
  { nombre: 'Hospital de la Concepción', telefono: '(787) 892-1010', direccion: 'Carretera 2 Km 173.5, San Germán, PR', emergencias: true, region: 'oeste', tipo: 'privado' },
  { nombre: 'Hospital Metropolitano de Cabo Rojo', telefono: '(787) 255-2424', direccion: 'Carretera 100, Cabo Rojo, PR', emergencias: true, region: 'oeste', tipo: 'privado' },

  // Sur
  { nombre: 'Hospital de Ponce', telefono: '(787) 848-8696', direccion: 'Ave. Las Américas, Ponce, PR', emergencias: true, region: 'sur', tipo: 'publico' },
  { nombre: 'Hospital San Lucas', telefono: '(787) 848-5191', direccion: 'Ave. Tito Castro, Ponce, PR', emergencias: true, region: 'sur', tipo: 'privado' },

  // Central
  { nombre: 'Hospital Menonita', telefono: '(787) 834-6000', direccion: 'Ave. Edwin Betances, Cayey, PR', emergencias: true, region: 'central', tipo: 'privado' },
  { nombre: 'Hospital Menonita de Aibonito', telefono: '(787) 735-8001', direccion: 'Carretera 14, Aibonito, PR', emergencias: true, region: 'central', tipo: 'privado' },

  // Este
  { nombre: 'Hospital HIMA • Caguas', telefono: '(787) 743-3161', direccion: 'Ave. José Torres, Caguas, PR', emergencias: true, region: 'este', tipo: 'privado' },
  { nombre: 'Hospital Dr. Domínguez', telefono: '(787) 852-0505', direccion: 'Ave. Santiago Palmer, Humacao, PR', emergencias: true, region: 'este', tipo: 'publico' },
  { nombre: 'Hospital Ryder Memorial', telefono: '(787) 852-0765', direccion: 'Ave. Font Martelo, Humacao, PR', emergencias: true, region: 'este', tipo: 'privado' },
];

// Hospital del Maestro — CERRADO en 2024
export const HOSPITALES_CERRADOS = [
  { nombre: 'Hospital del Maestro', cerrado: 2024, nota: 'Cerrado. Use Hospital Pavia Hato Rey o Auxilio Mutuo como alternativa más cercana.' },
];

export const EMERGENCIAS = {
  es: [
    { condicion: 'Derrame cerebral (Stroke)', sintomas: 'Cara caída, brazo débil, habla confusa. Actúe FAST.', accion: 'Llame al 9-1-1 INMEDIATAMENTE. El tiempo es cerebro.' },
    { condicion: 'Ataque al corazón', sintomas: 'Dolor en pecho, brazo izquierdo, mandíbula, dificultad para respirar.', accion: 'Llame al 9-1-1. No se maneje solo. Masticar aspirina (325mg) si no es alérgico.' },
    { condicion: 'Sobredosis de medicamento', sintomas: 'Náuseas extremas, confusión, dificultad para respirar, pérdida de consciencia.', accion: 'Llame al 9-1-1 o al Centro de Envenenamiento: 1-800-222-1222.' },
  ],
  en: [
    { condicion: 'Stroke', sintomas: 'Face drooping, arm weakness, speech confusion. Act FAST.', accion: 'Call 9-1-1 IMMEDIATELY. Time is brain.' },
    { condicion: 'Heart Attack', sintomas: 'Chest pain, left arm, jaw, difficulty breathing.', accion: 'Call 9-1-1. Do not drive yourself. Chew aspirin (325mg) if not allergic.' },
    { condicion: 'Medication Overdose', sintomas: 'Extreme nausea, confusion, difficulty breathing, loss of consciousness.', accion: 'Call 9-1-1 or Poison Control: 1-800-222-1222.' },
  ],
};

export const REGIONES = {
  es: {
    metro: 'Área Metro (San Juan, Bayamón, Carolina)',
    norte: 'Norte (Arecibo, Manatí)',
    oeste: 'Oeste (Mayagüez, Aguadilla)',
    sur: 'Sur (Ponce, Juana Díaz)',
    central: 'Central (Caguas, Cayey, Aibonito)',
    este: 'Este (Humacao, Fajardo, Caguas)',
  },
  en: {
    metro: 'Metro Area (San Juan, Bayamón, Carolina)',
    norte: 'North (Arecibo, Manatí)',
    oeste: 'West (Mayagüez, Aguadilla)',
    sur: 'South (Ponce, Juana Díaz)',
    central: 'Central (Caguas, Cayey, Aibonito)',
    este: 'East (Humacao, Fajardo, Caguas)',
  },
};

export const TIPOS = {
  es: { privado: 'Privado', publico: 'Público / Gubernamental' },
  en: { privado: 'Private', publico: 'Public / Government' },
};
