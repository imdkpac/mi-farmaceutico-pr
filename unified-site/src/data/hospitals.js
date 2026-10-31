/**
 * Directorio de Hospitales — Puerto Rico
 * Datos verificados 2026. Hospital del Maestro CERRADO (2024).
 * Especialidades basadas en servicios certificados y reputación clínica.
 */

export const HOSPITALES = [
  // Área Metro
  { nombre: 'Hospital Pavia Santurce', telefono: '(787) 721-2161', direccion: 'Ave. José de Diego 735, Santurce, PR', emergencias: true, region: 'metro', tipo: 'privado', especialidades: ['general', 'emergencias', 'cirugia'] },
  { nombre: 'Hospital Pavia Hato Rey', telefono: '(787) 754-0909', direccion: 'Ave. Barbosa 431, Hato Rey, PR', emergencias: true, region: 'metro', tipo: 'privado', especialidades: ['general', 'emergencias', 'cirugia'] },
  { nombre: 'Hospital Auxilio Mutuo', telefono: '(787) 758-2000', direccion: 'Ave. Ponce de León, Hato Rey, PR', emergencias: true, region: 'metro', tipo: 'privado', especialidades: ['general', 'cardiovascular', 'emergencias', 'cirugia'] },
  { nombre: 'Hospital Metropolitano', telefono: '(787) 641-2323', direccion: 'Ave. Degetau, San Juan, PR', emergencias: true, region: 'metro', tipo: 'privado', especialidades: ['general', 'emergencias', 'ortopedia'] },
  { nombre: 'Hospital San Francisco', telefono: '(787) 763-0202', direccion: 'Ave. Calloza, San Juan, PR', emergencias: true, region: 'metro', tipo: 'privado', especialidades: ['general', 'emergencias', 'maternidad'] },
  { nombre: 'Hospital UPR Dr. Federico Trilla', telefono: '(787) 777-3535', direccion: 'Carretera 506 Km 1.7, Carolina, PR', emergencias: true, region: 'metro', tipo: 'publico', especialidades: ['general', 'emergencias', 'ensename'] },
  { nombre: 'Hospital Pediátrico Universitario', telefono: '(787) 777-3535', direccion: 'Carretera 506, Carolina, PR', emergencias: true, region: 'metro', tipo: 'publico', especial: 'pediatrico', especialidades: ['pediatrico', 'emergencias'] },
  { nombre: 'Hospital Municipal de San Juan', telefono: '(787) 723-1280', direccion: 'Ave. Roberto H. Todd, Santurce, PR', emergencias: true, region: 'metro', tipo: 'publico', especialidades: ['general', 'emergencias', 'salud_mental'] },
  { nombre: 'Hospital Municipal de Bayamón', telefono: '(787) 786-5700', direccion: 'Carretera 2, Bayamón, PR', emergencias: true, region: 'metro', tipo: 'publico', especialidades: ['general', 'emergencias'] },
  { nombre: 'Hospital Dr. Virgilio Dávila', telefono: '(787) 654-0100', direccion: 'Ave. Barbosa, Bayamón, PR', emergencias: true, region: 'metro', tipo: 'publico', especialidades: ['general', 'emergencias'] },
  { nombre: 'Centro Cardiovascular de Puerto Rico', telefono: '(787) 754-8500', direccion: 'Ave. Barbosa, Hato Rey, PR', emergencias: false, region: 'metro', tipo: 'privado', especialidades: ['cardiovascular', 'cirugia_cardiaca', 'cateterismo'] },
  { nombre: 'Hospital Universitario Dr. Ramón Ruiz Arnau (UDH)', telefono: '(787) 758-2000', direccion: 'Ave. Ponce de León, Río Piedras, PR', emergencias: true, region: 'metro', tipo: 'publico', especialidades: ['neurologia', 'derrame', 'emergencias', 'trauma'] },

  // Norte
  { nombre: 'Hospital Pavia Arecibo', telefono: '(787) 878-7171', direccion: 'Carretera 2 Km 81.5, Arecibo, PR', emergencias: true, region: 'norte', tipo: 'privado', especialidades: ['general', 'emergencias', 'cirugia'] },
  { nombre: 'Hospital Dr. Cayetano Coll y Toste', telefono: '(787) 878-7340', direccion: 'Carretera 129, Arecibo, PR', emergencias: true, region: 'norte', tipo: 'publico', especialidades: ['general', 'emergencias'] },
  { nombre: 'Hospital Dr. Jesús E. Pino', telefono: '(787) 878-7340', direccion: 'Carretera 129, Arecibo, PR', emergencias: true, region: 'norte', tipo: 'publico', especialidades: ['general', 'emergencias'] },

  // Oeste
  { nombre: 'Hospital Buen Samaritano', telefono: '(787) 862-2161', direccion: 'Ave. Constitución, Aguadilla, PR', emergencias: true, region: 'oeste', tipo: 'privado', especialidades: ['general', 'emergencias', 'maternidad'] },
  { nombre: 'Hospital de la Concepción', telefono: '(787) 892-1010', direccion: 'Carretera 2 Km 173.5, San Germán, PR', emergencias: true, region: 'oeste', tipo: 'privado', especialidades: ['general', 'emergencias'] },
  { nombre: 'Hospital Metropolitano de Cabo Rojo', telefono: '(787) 255-2424', direccion: 'Carretera 100, Cabo Rojo, PR', emergencias: true, region: 'oeste', tipo: 'privado', especialidades: ['general', 'emergencias', 'ortopedia'] },

  // Sur
  { nombre: 'Hospital de Ponce', telefono: '(787) 848-8696', direccion: 'Ave. Las Américas, Ponce, PR', emergencias: true, region: 'sur', tipo: 'publico', especialidades: ['general', 'emergencias', 'trauma'] },
  { nombre: 'Hospital San Lucas', telefono: '(787) 848-5191', direccion: 'Ave. Tito Castro, Ponce, PR', emergencias: true, region: 'sur', tipo: 'privado', especialidades: ['general', 'emergencias', 'cardiovascular'] },

  // Central
  { nombre: 'Hospital Menonita', telefono: '(787) 834-6000', direccion: 'Ave. Edwin Betances, Cayey, PR', emergencias: true, region: 'central', tipo: 'privado', especialidades: ['general', 'emergencias', 'cirugia'] },
  { nombre: 'Hospital Menonita de Aibonito', telefono: '(787) 735-8001', direccion: 'Carretera 14, Aibonito, PR', emergencias: true, region: 'central', tipo: 'privado', especialidades: ['general', 'emergencias'] },

  // Este
  { nombre: 'Hospital HIMA • Caguas', telefono: '(787) 743-3161', direccion: 'Ave. José Torres, Caguas, PR', emergencias: true, region: 'este', tipo: 'privado', especialidades: ['general', 'emergencias', 'ortopedia', 'cirugia'] },
  { nombre: 'Hospital Dr. Domínguez', telefono: '(787) 852-0505', direccion: 'Ave. Santiago Palmer, Humacao, PR', emergencias: true, region: 'este', tipo: 'publico', especialidades: ['general', 'emergencias'] },
  { nombre: 'Hospital Ryder Memorial', telefono: '(787) 852-0765', direccion: 'Ave. Font Martelo, Humacao, PR', emergencias: true, region: 'este', tipo: 'privado', especialidades: ['general', 'emergencias', 'maternidad'] },
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

export const ESPECIALIDADES = {
  es: {
    cardiovascular: '❤️ Cardiovascular',
    neurologia: '🧠 Neurología / Derrame',
    pediatrico: '👶 Pediátrico',
    oncologia: '🎗️ Oncología',
    ortopedia: '🦴 Ortopedia',
    salud_mental: '🧘 Salud Mental',
    rehabilitacion: '♿ Rehabilitación',
    cirugia: '🔪 Cirugía General',
    cirugia_cardiaca: '❤️‍🩹 Cirugía Cardíaca',
    cateterismo: '💉 Cateterismo',
    trauma: '🚑 Trauma',
    maternidad: '🤰 Maternidad',
    emergencias: '🚨 Emergencias',
    general: '🏥 General',
    ensename: '📚 Enseñanza',
    derrame: '🧠 Derrame (Stroke)',
  },
  en: {
    cardiovascular: '❤️ Cardiovascular',
    neurologia: '🧠 Neurology / Stroke',
    pediatrico: '👶 Pediatric',
    oncologia: '🎗️ Oncology',
    ortopedia: '🦴 Orthopedics',
    salud_mental: '🧘 Mental Health',
    rehabilitacion: '♿ Rehabilitation',
    cirugia: '🔪 General Surgery',
    cirugia_cardiaca: '❤️‍🩹 Cardiac Surgery',
    cateterismo: '💉 Catheterization',
    trauma: '🚑 Trauma',
    maternidad: '🤰 Maternity',
    emergencias: '🚨 Emergency',
    general: '🏥 General',
    ensename: '📚 Teaching',
    derrame: '🧠 Stroke',
  },
};
