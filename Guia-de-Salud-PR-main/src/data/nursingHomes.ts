import { bi, type Bi } from '@/lib/i18n'

/* ------------------------------------------------------------------ */
/* Nursing home directory — Puerto Rico.                              */
/* Only the 9 Medicare-certified skilled nursing facilities on the    */
/* island (U.S. News / Medicare Care Compare, compiled Sept 2026).    */
/* Hogares de envejecientes are NOT Medicare-certified and are        */
/* covered separately with a verification checklist.                  */
/* ------------------------------------------------------------------ */

export interface NursingHome {
  name: string
  town: Bi
  beds: number
  rehab: Bi // U.S. News short-stay rehabilitation rating, if any
}

export const certifiedHomes: NursingHome[] = [
  {
    name: 'Millennium Institute for Advance Nursing Care',
    town: bi('Río Piedras', 'Río Piedras'),
    beds: 35,
    rehab: bi('Rehabilitación: alto desempeño', 'Rehab: High Performing'),
  },
  {
    name: 'Centro Médico Wilma N. Vázquez Skilled Nursing Facility',
    town: bi('Vega Baja', 'Vega Baja'),
    beds: 45,
    rehab: bi('Rehabilitación: según lo esperado', 'Rehab: As Expected'),
  },
  {
    name: 'Ryder Memorial Hospital Skilled Nursing Facility',
    town: bi('Humacao', 'Humacao'),
    beds: 62,
    rehab: bi('Rehabilitación: según lo esperado', 'Rehab: As Expected'),
  },
  {
    name: 'Alternative Healthcare Solutions',
    town: bi('San Juan', 'San Juan'),
    beds: 22,
    rehab: bi('Sin calificación publicada', 'No published rating'),
  },
  {
    name: 'Centro de Cuidado Prolongado San Lucas',
    town: bi('Río Piedras', 'Río Piedras'),
    beds: 25,
    rehab: bi('Sin calificación publicada', 'No published rating'),
  },
  {
    name: 'Damas Hospital Skilled Nursing Facility',
    town: bi('Ponce', 'Ponce'),
    beds: 25,
    rehab: bi('Sin calificación publicada', 'No published rating'),
  },
  {
    name: 'Hospital de la Concepción',
    town: bi('San Germán', 'San Germán'),
    beds: 30,
    rehab: bi('Sin calificación publicada', 'No published rating'),
  },
  {
    name: 'Multy Medical Skilled Nursing Facility',
    town: bi('Río Piedras', 'Río Piedras'),
    beds: 35,
    rehab: bi('Sin calificación publicada', 'No published rating'),
  },
  {
    name: 'Servicios Integrados de Rehabilitación del Oeste',
    town: bi('Hormigueros', 'Hormigueros'),
    beds: 20,
    rehab: bi('Sin calificación publicada', 'No published rating'),
  },
]

export interface RoleEntry {
  id: string
  role: Bi
  who: Bi
  ask: Bi
}

/* Who's who in a nursing home — glossary for families and adult children. */
export const roles: RoleEntry[] = [
  {
    id: 'cna',
    role: bi('Cuidador / Asistente de Enfermería (CNA)', 'Caregiver / Certified Nursing Assistant (CNA)'),
    who: bi(
      'La persona con mayor contacto diario con tu ser querido. Ayuda con el baño, el vestido, las comidas y la movilidad. Son los ojos y oídos del piso.',
      'The person with the most daily contact with your loved one. They help with bathing, dressing, meals and mobility. They are the eyes and ears of the floor.'
    ),
    ask: bi(
      'Rutinas diarias, comidas, ánimo y pequeños cambios.',
      'Daily routines, meals, mood and small changes.'
    ),
  },
  {
    id: 'nurse',
    role: bi('Enfermero/a (RN / LVN)', 'Nurse (RN / LVN)'),
    who: bi(
      'Profesional de la salud con licencia que administra medicamentos, maneja tratamientos y responde a cambios de salud. Primer punto de contacto para todo tema médico.',
      'A licensed clinician who gives medications, manages treatments and responds to health changes. Your first point of contact for anything medical.'
    ),
    ask: bi(
      'Medicamentos, síntomas, caídas y cambios de salud.',
      'Medications, symptoms, falls and health changes.'
    ),
  },
  {
    id: 'amadellaves',
    role: bi('Amá de Llaves (jefa de limpieza / housekeeping)', 'Amá de Llaves (head of housekeeping)'),
    who: bi(
      'Supervisa la limpieza y los servicios de las habitaciones. No es un puesto clínico, pero suele conocer mejor el ritmo diario de cada piso y es una ayuda práctica para resolver dudas del día a día.',
      'Oversees cleaning and room services. Not a clinical role — but often the person who knows the daily rhythm of each floor best, and a practical go-between for everyday questions.'
    ),
    ask: bi(
      'Comodidad de la habitación, lavandería y ropa de cama.',
      'Room comfort, laundry and linens.'
    ),
  },
  {
    id: 'social',
    role: bi('Trabajador/a Social / Gerente de Caso', 'Social Worker / Case Manager'),
    who: bi(
      'Coordina los planes de cuidado, las altas, el papeleo del seguro y la conexión con servicios externos.',
      'Coordinates care plans, discharges, insurance paperwork and connections to outside services.'
    ),
    ask: bi(
      'Planes de cuidado, seguro, planificación del alta y reuniones familiares.',
      'Care plans, insurance, discharge planning and family meetings.'
    ),
  },
  {
    id: 'leadership',
    role: bi('Director/a de Enfermería y Administrador/a', 'Director of Nursing & Administrator'),
    who: bi(
      'La dirección responsable de la calidad del cuidado y de la operación del hogar. Si una preocupación no se resuelve con el personal de primera línea, aquí se escala — junto con el ombudsman estatal.',
      'The leadership responsible for care quality and facility operations. If a concern is not resolved at the front-line level, this is where you escalate — along with the state ombudsman.'
    ),
    ask: bi(
      'Inquietudes sin resolver, incidentes graves y quejas oficiales.',
      'Unresolved concerns, serious incidents and official complaints.'
    ),
  },
]

export const tourChecklist: Bi[] = [
  bi('¿Cuál es la rotación del personal (staff turnover)?', 'What is the staff turnover rate?'),
  bi('¿Cuántos cuidadores hay en el piso durante la noche?', 'How many caregivers are on the floor at night?'),
  bi('¿Pueden los residentes elegir su hora de levantarse y de comer?', 'Can residents choose their wake-up and meal times?'),
  bi('¿Cómo manejan y reportan a la familia las caídas y las infecciones?', 'How are falls and infections handled and reported to families?'),
  bi('¿Qué pasa si el dinero de mi familiar se acaba? (Póliza de transición a Medicaid)', 'What happens if my loved one’s money runs out? (Medicaid transition policy)'),
  bi('¿Con qué frecuencia revisa el médico a los residentes?', 'How often does the doctor see residents?'),
  bi('¿Qué actividades ofrecen durante el fin de semana?', 'What activities are offered on weekends?'),
  bi('¿Puedo visitar sin cita a cualquier hora?', 'Can I visit without an appointment, at any time?'),
]

export const uncertifiedChecklist: Bi[] = [
  bi('¿Está el hogar registrado ante el Departamento de la Familia?', 'Is the home registered with the Department of the Family?'),
  bi('¿Quién atiende las emergencias médicas y a qué hospital llevan a los residentes?', 'Who handles medical emergencies, and which hospital do residents go to?'),
  bi('¿Qué personal hay en el piso durante la noche y qué entrenamiento tienen?', 'Who is on the floor at night, and what training do they have?'),
  bi('¿Cómo se administran y documentan los medicamentos?', 'How are medications given and documented?'),
  bi('¿Puedo hablar con familias de residentes actuales como referencia?', 'Can I speak with families of current residents as references?'),
  bi('¿Qué incluye el precio mensual y qué cuesta extra?', 'What does the monthly price include, and what costs extra?'),
]

export const noBedOptions: { title: Bi; body: Bi }[] = [
  {
    title: bi('Opciones en EE. UU. continental (Florida y Texas)', 'Mainland U.S. options (Florida and Texas)'),
    body: bi(
      'Muchas familias puertorriqueñas llevan a sus seres queridos a hogares en Orlando, Miami o Houston, donde hay más camas y calificaciones más altas. El Medicare cubre el transporte médico solo en casos específicos — pregúntale al plan médico antes de planificar.',
      'Many Puerto Rican families move loved ones to nursing homes in Orlando, Miami or Houston, where there are more beds and higher ratings. Medicare covers medical transport only in specific cases — ask your health plan before making plans.'
    ),
  },
  {
    title: bi('Beneficios para veteranos (VA)', 'Veterans benefits (VA)'),
    body: bi(
      'Los veteranos y viudas de veteranos pueden calificar para el benefit de cuidado de enfermería del VA, que puede incluir hogares aprobados. Llama al VA de Puerto Rico o visita va.gov para verificar elegibilidad.',
      'Veterans and surviving spouses may qualify for VA nursing home care benefits, which can include approved facilities. Call the Puerto Rico VA or visit va.gov to check eligibility.'
    ),
  },
  {
    title: bi('Medicare vs. Medicare Advantage vs. Medicaid', 'Medicare vs. Medicare Advantage vs. Medicaid'),
    body: bi(
      'En Puerto Rico, el 91% de los beneficiarios de Medicare tienen Medicare Advantage. El Medicare tradicional cubre rehabilitación de corto plazo en hogar certificado, no cuidado de largo plazo; el Medicaid tiene cobertura de cuidado de largo plazo muy limitada en la isla. Verifica siempre con tu plan qué cubre antes de firmar contrato.',
      'In Puerto Rico, 91% of Medicare beneficiaries have Medicare Advantage. Traditional Medicare covers short-term rehab in a certified facility, not long-term custodial care; Medicaid long-term care coverage is very limited on the island. Always verify coverage with your plan before signing a contract.'
    ),
  },
]
