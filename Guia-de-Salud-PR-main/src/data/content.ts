import { bi, type Bi } from '@/lib/i18n'

/* ------------------------------------------------------------------ */
/* Hospital directory. Every facility re-verified October 2026 against */
/* official hospital sources, federal CMS records and Puerto Rico      */
/* press. Descriptive, publicly known capabilities only — verify plan  */
/* participation directly with the hospital and your plan.             */
/* ------------------------------------------------------------------ */

export const VERIFIED_LABEL = bi('Verificado: octubre 2026', 'Verified: October 2026')

/* Heart attack & stroke: time-critical capabilities only. Every claim */
/* below was verified with official sources before publishing.         */

export interface EmergencyFacility {
  name: string
  town: Bi
  capabilities: Bi[]
  phone?: string
}

export const heartAttackFacilities: EmergencyFacility[] = [
  {
    name: 'Centro Cardiovascular de Puerto Rico y del Caribe',
    town: bi('Río Piedras, San Juan', 'Río Piedras, San Juan'),
    capabilities: [
      bi(
        'Sala de emergencias cardiovascular 24/7 con cardiólogos intervencionistas y cirujanos de guardia.',
        '24/7 cardiovascular emergency room with interventional cardiologists and surgeons on site.'
      ),
      bi(
        'Único programa de trasplante de corazón de Puerto Rico y el Caribe.',
        'Puerto Rico and the Caribbean\u2019s only heart transplant program.'
      ),
    ],
    phone: '(787) 754-8500',
  },
  {
    name: 'Hospital Auxilio Mutuo',
    town: bi('Hato Rey, San Juan', 'Hato Rey, San Juan'),
    capabilities: [
      bi(
        'Programa de dolor de pecho: respuesta cardiovascular 24/7 desde tu llegada a la sala de emergencias.',
        'Chest pain program: 24/7 cardiovascular response from the moment you reach the ER.'
      ),
      bi(
        'Cateterismo cardiaco, electrofisiología y cirugía cardiovascular.',
        'Cardiac catheterization, electrophysiology and cardiovascular surgery.'
      ),
    ],
    phone: '(787) 758-2000',
  },
  {
    name: 'Hospital Damas',
    town: bi('Ponce', 'Ponce'),
    capabilities: [
      bi(
        'Programa STEMI 24/7: angioplastia de emergencia en 90 minutos o menos durante un infarto.',
        '24/7 STEMI program: emergency angioplasty within 90 minutes during a heart attack.'
      ),
      bi(
        'Cardiología intervencional y estructural (TAVR) y cirugía cardiovascular.',
        'Interventional and structural cardiology (TAVR) and cardiovascular surgery.'
      ),
    ],
    phone: '(787) 840-8686',
  },
  {
    name: 'Centro Médico Menonita Cayey',
    town: bi('Cayey', 'Cayey'),
    capabilities: [
      bi(
        'Acreditado para angioplastia primaria (ICP) 24/7 — Chest Pain Center de la American College of Cardiology.',
        'Accredited for 24/7 primary PCI angioplasty \u2014 an American College of Cardiology Chest Pain Center.'
      ),
      bi(
        'Acreditado por la Comisión Conjunta; parte del Sistema de Salud Menonita.',
        'Joint Commission-accredited; part of the Menonita Health System.'
      ),
    ],
    phone: '(787) 535-1001',
  },
]

export const cathLabMore = bi(
  'Otras salas de cateterismo en la isla (confirma el horario de emergencias con el hospital): Mayagüez Medical Center (Mayagüez), Hospital Pavía Arecibo (Arecibo), Hospital Pavia Santurce (San Juan), Hospital Pavia Caguas (Caguas), Centro Médico Episcopal San Lucas (Ponce) y cirugía cardiovascular en el Hospital Menonita Caguas (Caguas).',
  'Other catheterization labs on the island (confirm emergency hours with the hospital): Mayag\u00fcez Medical Center (Mayag\u00fcez), Hospital Pav\u00eda Arecibo (Arecibo), Hospital Pavia Santurce (San Juan), Hospital Pavia Caguas (Caguas), Centro M\u00e9dico Episcopal San Lucas (Ponce), and cardiovascular surgery at Hospital Menonita Caguas (Caguas).'
)

export const strokeFacilities: EmergencyFacility[] = [
  {
    name: 'Hospital Menonita Caguas',
    town: bi('Caguas', 'Caguas'),
    capabilities: [
      bi(
        'Centro Comprensivo Avanzado de Stroke y Neurociencias — la acreditación de stroke más alta otorgada en Puerto Rico (Comisión Conjunta, 2025).',
        'Advanced Comprehensive Stroke & Neuroscience Center \u2014 the highest stroke accreditation awarded in Puerto Rico (Joint Commission, 2025).'
      ),
      bi(
        'UCI neurológica reconocida internacionalmente (Society of Critical Care Medicine).',
        'Internationally recognized neurological ICU (Society of Critical Care Medicine).'
      ),
    ],
    phone: '(787) 653-0550',
  },
  {
    name: 'Hospital Universitario de Adulto (Centro Médico)',
    town: bi('Río Piedras, San Juan', 'Río Piedras, San Juan'),
    capabilities: [
      bi(
        'Tratamiento neuroendovascular de stroke 24/7 (Centro Cerebrovascular): trombólisis y procedimientos que solo se ofrecen aquí en la isla.',
        '24/7 neuroendovascular stroke treatment (Cerebrovascular Center): thrombolysis and procedures offered only here on the island.'
      ),
      bi(
        'El campus comparte una sola sala de emergencias, abierta 24/7.',
        'The campus shares a single ER, open 24/7.'
      ),
    ],
    phone: '(787) 777-3535',
  },
  {
    name: 'Auxilio Mutuo San Pablo',
    town: bi('Bayamón', 'Bayam\u00f3n'),
    capabilities: [
      bi(
        'Centro Primario de Stroke certificado por la Comisión Conjunta (2025).',
        'Joint Commission-certified Primary Stroke Center (2025).'
      ),
      bi(
        'Sala de emergencias 24/7 con emergenciólogos de guardia.',
        '24/7 emergency room with emergency physicians on site.'
      ),
    ],
    phone: '(787) 620-4747',
  },
  {
    name: 'Hospital Menonita Ponce',
    town: bi('Ponce', 'Ponce'),
    capabilities: [
      bi(
        'Centro Primario de Stroke certificado por la Comisión Conjunta (2025).',
        'Joint Commission-certified Primary Stroke Center (2025).'
      ),
      bi(
        'Primera unidad especializada de stroke del sur de Puerto Rico.',
        'Southern Puerto Rico\u2019s first dedicated stroke unit.'
      ),
    ],
    phone: '(787) 848-2100',
  },
]

/* Centro Médico de Puerto Rico — a campus of specialized hospitals,   */
/* not a single hospital.                                              */

export interface CampusInstitution {
  name: string
  knownFor: Bi
}

export const centroMedico = {
  phone: '(787) 777-3535',
  address: 'Av. Am\u00e9rico Miranda, Bo. Monacillos, R\u00edo Piedras, San Juan, PR 00921',
  institutions: [
    {
      name: 'Hospital Universitario de Adulto',
      knownFor: bi(
        'Hospital público de referencia para adultos y principal centro de enseñanza de la medicina en la isla.',
        'Public referral hospital for adults and the island\u2019s main teaching hospital.'
      ),
    },
    {
      name: 'Hospital de Trauma',
      knownFor: bi(
        'El único centro de trauma de Puerto Rico (designación estatal de Nivel I, adultos y niños), con equipo 24/7.',
        'Puerto Rico\u2019s only trauma center (state-designated Level I, adults and children), staffed 24/7.'
      ),
    },
    {
      name: 'Hospital Pediátrico Universitario Dr. Antonio Ortiz',
      knownFor: bi(
        'El hospital de referencia para niños de toda la isla.',
        'The island\u2019s referral hospital for children.'
      ),
    },
    {
      name: 'Centro Comprensivo de Cáncer de la UPR',
      knownFor: bi(
        'El centro público de cáncer de Puerto Rico (antes Hospital Oncológico Dr. Isaac González Martínez).',
        'Puerto Rico\u2019s public cancer center (formerly Hospital Oncol\u00f3gico Dr. Isaac Gonz\u00e1lez Mart\u00ednez).'
      ),
    },
    {
      name: 'Hospital Industrial de Puerto Rico',
      knownFor: bi(
        'El único hospital de la isla dedicado a accidentes de trabajo y enfermedades ocupacionales.',
        'The island\u2019s only hospital dedicated to work accidents and occupational illness.'
      ),
    },
    {
      name: 'Hospital de Psiquiatría Dr. Ramón Fernández Marina',
      knownFor: bi(
        'Hospital público de salud mental (antes conocido como Instituto de Psiquiatría).',
        'Public mental health hospital (formerly known as the Institute of Psychiatry).'
      ),
    },
    {
      name: 'Hospital Municipal de San Juan Dr. Rafael López Nussa',
      knownFor: bi(
        'Hospital de la Ciudad Capital, ubicado dentro del campus y en remodelación.',
        'The Capital City\u2019s hospital, located inside the campus and being renovated.'
      ),
    },
  ] as CampusInstitution[],
}

/* Regional directory — active hospitals only.                         */

export interface DirectoryHospital {
  name: string
  town: Bi
  er24: boolean
  publicHosp?: boolean
  services: Bi[]
  phone?: string
  address?: string
  note?: Bi
}

export interface RegionGroup {
  region: Bi
  hospitals: DirectoryHospital[]
}

export const regionGroups: RegionGroup[] = [
  {
    region: bi('Área Metro', 'Metro Area'),
    hospitals: [
      {
        name: 'Hospital Auxilio Mutuo',
        town: bi('San Juan (Hato Rey)', 'San Juan (Hato Rey)'),
        er24: true,
        services: [
          bi(
            'Programa de dolor de pecho con respuesta cardiovascular 24/7 desde la sala de emergencias.',
            'Chest pain program with 24/7 cardiovascular response starting in the ER.'
          ),
          bi('Cateterismo cardiaco, electrofisiología y cirugía cardiovascular.', 'Cardiac catheterization, electrophysiology and heart surgery.'),
          bi('Emergencia pediátrica con NICU y PICU.', 'Pediatric ER with NICU and PICU.'),
          bi('Centro de cáncer certificado QOPI — el único de Puerto Rico.', 'QOPI-certified cancer center \u2014 the only one in Puerto Rico.'),
        ],
        note: bi(
          'El hospital privado más grande de la isla; acreditado por la Comisión Conjunta.',
          'The island\u2019s largest private hospital; Joint Commission-accredited.'
        ),
        phone: '(787) 758-2000',
        address: '715 Av. Ponce de Le\u00f3n, San Juan, PR 00917',
      },
      {
        name: 'Auxilio Mutuo San Pablo',
        town: bi('Bayamón', 'Bayam\u00f3n'),
        er24: true,
        services: [
          bi('Centro Primario de Stroke certificado por la Comisión Conjunta (2025).', 'Joint Commission-certified Primary Stroke Center (2025).'),
          bi('Hospital general con más de 20 especialidades.', 'Full-service community hospital with 20+ specialties.'),
        ],
        phone: '(787) 620-4747',
        address: 'Calle Santa Cruz #70, Bayam\u00f3n, PR 00961',
      },
      {
        name: 'Ashford Presbyterian Community Hospital',
        town: bi('San Juan (Condado)', 'San Juan (Condado)'),
        er24: true,
        services: [
          bi('Sala de emergencias designada para la zona turística: aeropuerto, muelles y hoteles.', 'ER designated for the tourism district: airport, cruise docks and hotels.'),
          bi('Unidad de cuidados intensivos neonatales (NICU) Nivel 3.', 'Level 3 neonatal intensive care unit (NICU).'),
        ],
        phone: '(787) 721-2160',
        address: '1451 Av. Ashford, San Juan, PR 00907',
      },
      {
        name: 'Hospital Pavia Santurce',
        town: bi('San Juan (Santurce)', 'San Juan (Santurce)'),
        er24: true,
        services: [
          bi('Primer centro de Puerto Rico certificado para TAVI: válvula aórtica sin cirugía abierta.', 'Puerto Rico\u2019s first certified TAVI center: aortic valve replacement without open surgery.'),
          bi('Cirugía cardiaca mínimamente invasiva y cardiología intervencionista.', 'Minimally invasive heart surgery and interventional cardiology.'),
        ],
        phone: '(787) 641-1616',
        address: '1462 Calle Prof. Augusto Rodr\u00edguez, San Juan, PR 00910',
      },
      {
        name: 'Hospital Pavia Hato Rey',
        town: bi('San Juan (Hato Rey)', 'San Juan (Hato Rey)'),
        er24: false,
        services: [
          bi('Hospital especializado en salud mental (desde febrero 2025).', 'Specialty mental health hospital (since February 2025).'),
          bi('Sala estabilizadora para emergencias psiquiátricas.', 'Stabilization unit for psychiatric emergencies.'),
        ],
        note: bi(
          'Ya no es un hospital general: no tiene sala de emergencias médicas.',
          'No longer a general hospital: it has no medical emergency room.'
        ),
        phone: '(787) 641-2323',
        address: '435 Av. Ponce de Le\u00f3n, San Juan, PR 00919',
      },
      {
        name: 'Hospital San Gerardo',
        town: bi('San Juan (Cupey)', 'San Juan (Cupey)'),
        er24: true,
        services: [
          bi('Hospital general comunitario con sala de emergencias.', 'Community general hospital with an emergency room.'),
        ],
        note: bi(
          'Reabierto bajo nueva administración en las antiguas facilidades de HIMA San Pablo Cupey.',
          'Reopened under new management in the former HIMA San Pablo Cupey facilities.'
        ),
        phone: '(787) 761-8383',
        address: 'Carr. 844 Km 0.5, Cupey Bajo, San Juan, PR 00928',
      },
      {
        name: 'VA Caribbean Healthcare System (Hospital de Veteranos)',
        town: bi('San Juan', 'San Juan'),
        er24: true,
        publicHosp: true,
        services: [
          bi('Sistema de salud federal para veteranos elegibles, con hospital en San Juan y clínicas regionales.', 'Federal health system for eligible veterans, with a San Juan hospital and regional clinics.'),
        ],
        note: bi(
          'Solo atiende veteranos elegibles inscritos en el VA.',
          'Serves enrolled, eligible veterans only.'
        ),
        phone: '(787) 641-7582',
        address: '10 Calle Casia, San Juan, PR 00921',
      },
    ],
  },
  {
    region: bi('Este', 'East'),
    hospitals: [
      {
        name: 'Hospital UPR Dr. Federico Trilla',
        town: bi('Carolina', 'Carolina'),
        er24: true,
        publicHosp: true,
        services: [
          bi('Hospital público y de enseñanza de la Universidad de Puerto Rico.', 'Public teaching hospital of the University of Puerto Rico.'),
          bi('Sala de emergencias 24/7, maternidad y pediatría.', '24/7 ER, maternity and pediatrics.'),
        ],
        phone: '(787) 757-1800',
        address: 'Carretera 3 Km 8.3, Ave. 65 de Infanter\u00eda, Carolina, PR 00984',
      },
      {
        name: 'Hospital Menonita Humacao',
        town: bi('Humacao', 'Humacao'),
        er24: true,
        services: [
          bi('71 camas: UCI, quirófanos, imágenes y pediatría.', '71 beds: ICU, operating rooms, imaging and pediatrics.'),
          bi('Sala de emergencias con emergenciólogos y pediatras de guardia.', 'ER staffed with emergency physicians and pediatricians.'),
        ],
        note: bi(
          'En las antiguas facilidades del Hospital Oriente; adquirido por el Sistema Menonita en 2020.',
          'In the former Hospital Oriente building; acquired by the Menonita system in 2020.'
        ),
        phone: '(787) 852-0505',
        address: 'Ave. Font Martelo #300 (PR-198), Humacao, PR 00792',
      },
      {
        name: 'Hospital Menonita Caguas',
        town: bi('Caguas', 'Caguas'),
        er24: true,
        services: [
          bi('Primer Centro Comprensivo Avanzado de Stroke y Neurociencias de Puerto Rico (Comisión Conjunta, 2025).', 'Puerto Rico\u2019s first Advanced Comprehensive Stroke & Neuroscience Center (Joint Commission, 2025).'),
          bi('UCI neurológica reconocida internacionalmente y cirugía cardiovascular y torácica.', 'Internationally recognized neurological ICU plus cardiovascular and thoracic surgery.'),
        ],
        note: bi(
          'El Sistema Menonita es dueño de la aseguradora Plan de Salud Menonita, una de las administradoras del Plan Vital.',
          'The Menonita system owns the Plan de Salud Menonita insurer, one of the Plan Vital administrators.'
        ),
        phone: '(787) 653-0550',
        address: 'Carr. 172, Urb. Turabo Gardens, Caguas, PR 00725',
      },
      {
        name: 'Hospital Pavia Caguas',
        town: bi('Caguas', 'Caguas'),
        er24: true,
        services: [
          bi('Sala de emergencias 24/7 para adultos y niños.', '24/7 ER for adults and children.'),
          bi('Cardiología intervencionista: cateterismo cardiaco y angioplastia coronaria.', 'Interventional cardiology: cardiac catheterization and coronary angioplasty.'),
        ],
        note: bi(
          'En las antiguas facilidades de HIMA San Pablo Caguas, adquiridas por Metro Pavia en 2023.',
          'In the former HIMA San Pablo Caguas facilities, acquired by Metro Pavia in 2023.'
        ),
        phone: '(787) 653-3434',
        address: '100 Ave. Luis Mu\u00f1oz Mar\u00edn, Caguas, PR 00726',
      },
    ],
  },
  {
    region: bi('Sur', 'South'),
    hospitals: [
      {
        name: 'Hospital Damas',
        town: bi('Ponce', 'Ponce'),
        er24: true,
        services: [
          bi('Programa STEMI 24/7: angioplastia de emergencia en 90 minutos o menos.', '24/7 STEMI program: emergency angioplasty within 90 minutes or less.'),
          bi('Cardiología intervencional y estructural (TAVR) y cirugía cardiovascular.', 'Interventional and structural cardiology (TAVR) and cardiovascular surgery.'),
        ],
        note: bi(
          'El servicio de obstetricia cerró en 2024; el resto del hospital opera con normalidad.',
          'The obstetrics unit closed in 2024; the rest of the hospital operates normally.'
        ),
        phone: '(787) 840-8686',
        address: '2213 Ponce By-Pass (PR-2), Ponce, PR 00717',
      },
      {
        name: 'Centro Médico Episcopal San Lucas',
        town: bi('Ponce', 'Ponce'),
        er24: true,
        services: [
          bi('Instituto Cardiovascular: el grupo de electrofisiología más grande de la isla.', 'Cardiovascular Institute: the island\u2019s largest electrophysiology group.'),
          bi('Hospital académico terciario con emergencias de adultos y de niños 24/7.', 'Academic tertiary hospital with 24/7 adult and pediatric ERs.'),
        ],
        phone: '(787) 844-2080',
        address: 'Ave. Tito Castro #917, Ponce, PR 00733',
      },
      {
        name: 'Hospital Menonita Ponce',
        town: bi('Ponce (Coto Laurel)', 'Ponce (Coto Laurel)'),
        er24: true,
        services: [
          bi('Centro Primario de Stroke certificado por la Comisión Conjunta (2025).', 'Joint Commission-certified Primary Stroke Center (2025).'),
          bi('Primera unidad especializada de stroke del sur de Puerto Rico.', 'Southern Puerto Rico\u2019s first dedicated stroke unit.'),
        ],
        note: bi(
          'Antes Hospital San Cristóbal; parte del Sistema Menonita desde 2022.',
          'Formerly Hospital San Crist\u00f3bal; part of the Menonita system since 2022.'
        ),
        phone: '(787) 848-2100',
        address: 'Calle Acerola, Coto Laurel, Ponce, PR 00780',
      },
    ],
  },
  {
    region: bi('Oeste', 'West'),
    hospitals: [
      {
        name: 'Mayagüez Medical Center',
        town: bi('Mayagüez', 'Mayag\u00fcez'),
        er24: true,
        services: [
          bi('Tres laboratorios de cateterismo (incluido uno híbrido) y cirugía cardiovascular.', 'Three cardiac cath labs (including one hybrid) and cardiovascular surgery.'),
          bi('Cardiología intervencional y electrofisiología; referido regional del oeste.', 'Interventional cardiology and electrophysiology; the west\u2019s regional referral hospital.'),
        ],
        note: bi('Acreditado por la Comisión Conjunta.', 'Joint Commission-accredited.'),
        phone: '(787) 652-9200',
        address: 'Ave. Hostos #410, Mayag\u00fcez, PR 00680',
      },
      {
        name: 'Mayagüez Medical Center San Antonio',
        town: bi('Mayagüez', 'Mayag\u00fcez'),
        er24: true,
        services: [
          bi('Maternidad, neonatología y la primera UCI pediátrica del oeste.', 'Maternity, neonatology and the west\u2019s first pediatric ICU.'),
          bi('Atención general para adultos y niños.', 'General care for adults and children.'),
        ],
        note: bi(
          'Antes Hospital San Antonio: estuvo a punto de cerrar en 2025 y hoy lo opera Mayagüez Medical Center tras una inversión de $10 millones.',
          'Formerly Hospital San Antonio: it nearly closed in 2025 and is now run by Mayag\u00fcez Medical Center after a $10M investment.'
        ),
        address: 'Calle Ram\u00f3n Emeterio Betances #18 Norte, Mayag\u00fcez, PR 00680',
      },
      {
        name: 'Hospital La Concepción',
        town: bi('San Germán', 'San Germ\u00e1n'),
        er24: true,
        services: [
          bi('Tres salas de emergencia 24/7: San Germán, Hormigueros y Sabana Grande.', 'Three 24/7 ERs: San Germ\u00e1n, Hormigueros and Sabana Grande.'),
          bi('Hospital general que sirve el suroeste.', 'General hospital serving the southwest.'),
        ],
        phone: '(787) 892-1860',
        address: 'Carr. 2 Km 173.4, San Germ\u00e1n, PR 00683',
      },
    ],
  },
  {
    region: bi('Norte / Centro', 'North / Central'),
    hospitals: [
      {
        name: "Doctors' Center Hospital (Orlando Health)",
        town: bi('Manatí (campus en Bayamón, Carolina, Dorado y San Juan)', 'Manat\u00ed (campuses in Bayam\u00f3n, Carolina, Dorado and San Juan)'),
        er24: true,
        services: [
          bi('Sala de emergencias 24/7 en Manatí y en Bayamón.', '24/7 ERs in Manat\u00ed and Bayam\u00f3n.'),
          bi('Centro oncológico (Doctors\u2019 Cancer Center) y cirugía hepatobiliar.', 'Cancer center (Doctors\u2019 Cancer Center) and hepatobiliary surgery.'),
        ],
        phone: '(787) 853-3322',
        address: 'Marginal Carr. 2 Km 47.7, Manat\u00ed, PR 00674',
      },
      {
        name: 'Manatí Medical Center Dr. Otero',
        town: bi('Manatí', 'Manat\u00ed'),
        er24: true,
        services: [
          bi('Cirugía robótica y más de 40 años de servicio.', 'Robotic surgery and 40+ years of service.'),
          bi('Parte del Grupo Hospitalario Quirós.', 'Part of the Quir\u00f3s Hospital Group.'),
        ],
        phone: '(787) 621-3700',
        address: 'Calle Hern\u00e1ndez Carri\u00f3n, Urb. Atenas, Manat\u00ed, PR 00674',
      },
      {
        name: 'Centro Médico Menonita Cayey',
        town: bi('Cayey', 'Cayey'),
        er24: true,
        services: [
          bi('Angioplastia primaria 24/7: Chest Pain Center acreditado por la ACC.', '24/7 primary angioplasty: ACC-accredited Chest Pain Center.'),
          bi('Cirugía bariátrica con acreditación continua desde 2001 y cirugía robótica.', 'Bariatric surgery continuously accredited since 2001, plus robotic surgery.'),
        ],
        phone: '(787) 535-1001',
        address: 'Carr. 14 Km 3.1, Cayey, PR 00737',
      },
      {
        name: 'Hospital Pavía Arecibo',
        town: bi('Arecibo', 'Arecibo'),
        er24: true,
        services: [
          bi('Pavía Cardiovascular Center: unidad de cateterismo y cirugía cardiovascular.', 'Pavia Cardiovascular Center: catheterization lab and cardiovascular surgery.'),
          bi('Sala de emergencias 24/7 para adultos.', '24/7 adult ER.'),
        ],
        note: bi(
          'Antiguo hospital público Dr. Cayetano Coll y Toste, hoy parte de Metro Pavia.',
          'The former public Dr. Cayetano Coll y Toste hospital, now part of Metro Pavia.'
        ),
        phone: '(787) 650-7272',
        address: 'Carr. 129 Km 1.0, Arecibo, PR 00612',
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Guides                                                              */
/* ------------------------------------------------------------------ */

export interface Guide {
  id: string
  title: Bi
  summary: Bi
  points: Bi[]
  links?: { label: Bi; url: string }[]
}

export const guides: Guide[] = [
  {
    id: 'vital',
    title: bi('Plan Vital (el plan del Gobierno / Medicaid)', 'Plan Vital (the Government plan / Medicaid)'),
    summary: bi(
      'Quién cualifica, qué aseguradoras lo administran y qué hacer si pierdes la cubierta.',
      'Who qualifies, which insurers run it, and what to do if you lose coverage.'
    ),
    points: [
      bi(
        'El Plan Vital es el plan de salud del Gobierno de Puerto Rico, financiado con fondos federales de Medicaid y administrado por la Administración de Seguros de Salud (ASES). Beneficia a personas con escasos recursos económicos o necesidades especiales.',
        'Plan Vital is Puerto Rico’s government health plan, funded by federal Medicaid dollars and administered by the Health Insurance Administration (ASES). It serves people with limited income or special needs.'
      ),
      bi(
        'Las aseguradoras contratadas bajo Vital (según ASES, actualizado feb. 2026) son: First Medical, MMM, Plan de Salud Menonita y Triple-S Salud. Puedes cambiar de aseguradora durante el periodo anual de inscripción.',
        'Insurers contracted under Vital (per ASES, updated Feb. 2026): First Medical, MMM, Plan de Salud Menonita and Triple-S Salud. You can switch insurers during the annual enrollment period.'
      ),
      bi(
        'Teléfonos de orientación (según planvital.org): First Medical 1-844-347-7800 · MMM 1-844-336-3331 · Menonita 1-866-600-4753 · Triple-S 1-800-981-1352.',
        'Orientation phone lines (per planvital.org): First Medical 1-844-347-7800 · MMM 1-844-336-3331 · Menonita 1-866-600-4753 · Triple-S 1-800-981-1352.'
      ),
      bi(
        'Tienes que recertificarte periódicamente. Si no recibes el aviso de renovación, llama al centro de llamadas de Medicaid (787-688-8879) para confirmar que tienen tu información correcta.',
        'You must recertify periodically. If you don’t get the renewal notice, call the Medicaid call center (787-688-8879) to confirm they have your correct contact information.'
      ),
    ],
    links: [
      { label: bi('Plan Vital — orientación oficial', 'Plan Vital — official orientation'), url: 'https://planvital.org/' },
      { label: bi('ASES — Plan Vital', 'ASES — Plan Vital'), url: 'https://www.ases.pr.gov/plan-vital' },
    ],
  },
  {
    id: 'referidos',
    title: bi('Referidos a especialistas: cómo funciona', 'Specialist referrals: how it works'),
    summary: bi(
      'Por qué necesitas un referido, qué llevar a la cita y qué hacer si te lo niegan o se atrasa.',
      'Why you need a referral, what to bring, and what to do if it’s denied or delayed.'
    ),
    points: [
      bi(
        'En casi todos los planes de Puerto Rico, tu médico primario (generalista, médico de familia, internista o pediatra) es la puerta de entrada: evalúa tu condición y emite el referido al especialista que necesitas.',
        'In almost every Puerto Rico health plan, your primary care physician (general practitioner, family doctor, internist or pediatrician) is the gateway: they evaluate you and issue the referral to the specialist you need.'
      ),
      bi(
        'Si ves a un médico fuera de tu grupo de médicos primarios autorizados sin referido, es probable que tengas que pagar más o que el plan no cubra el servicio.',
        'If you see a provider outside your authorized primary medical group without a referral, you’ll likely pay more or the plan may not cover the service.'
      ),
      bi(
        'Lleva siempre a la cita del especialista: el referido (con su número), tu tarjeta del plan, identificación, tu lista de medicamentos y resultados de laboratorios o imágenes previas.',
        'Always bring to the specialist visit: the referral (with its number), your plan card, ID, your medication list, and prior lab or imaging results.'
      ),
      bi(
        'Si el servicio te es negado, puedes pedir una vista ante un Oficial Examinador. ASES indica que el caso se decide dentro de 90 días — o dentro de 72 horas si es urgente.',
        'If a service is denied, you can request a hearing before an Examining Officer. Per ASES, the case is decided within 90 days — or within 72 hours if urgent.'
      ),
      bi(
        'Si el copago que te exigen no te parece correcto, puedes pedir una revaluación (ayudalegalpr.org publica la línea 787-641-4224 como referencia — verifica que siga vigente).',
        'If the copay you’re charged seems wrong, you can request a re-evaluation (ayudalegalpr.org lists 787-641-4224 as a reference line — verify it’s still active).'
      ),
    ],
    links: [
      { label: bi('Ayuda Legal PR — plan médico del Gobierno', 'Ayuda Legal PR — government health plan'), url: 'https://ayudalegalpr.org/resource/solicitud-del-plan-mdico-del-gobierno' },
    ],
  },
  {
    id: 'urgencia',
    title: bi('¿Emergencia, urgencia o cita?', 'Emergency room, urgent care, or appointment?'),
    summary: bi(
      'Ahorra tiempo y dinero escogiendo el nivel de cuidado correcto.',
      'Save time and money by choosing the right level of care.'
    ),
    points: [
      bi(
        'Sala de emergencias (9-1-1): dolor de pecho, dificultad para respirar severa, señales de derrame (cara caída, brazo débil, habla rara), pérdida de conciencia, sangrado que no para, trauma serio.',
        'Emergency room (call 9-1-1): chest pain, severe trouble breathing, stroke signs (drooping face, weak arm, slurred speech), loss of consciousness, uncontrolled bleeding, serious trauma.'
      ),
      bi(
        'Sala de urgencias: condiciones que necesitan atención rápida pero no amenazan tu vida — fiebre moderada, infecciones, cortadas pequeñas, esguinces, crisis leve de asma controlable.',
        'Urgent care: conditions needing prompt attention that aren’t life-threatening — moderate fever, infections, small cuts, sprains, mild controllable asthma flare.'
      ),
      bi(
        'Cita con tu médico primario: seguimiento de condiciones crónicas, recetas, chequeos, referidos. Es la opción más económica y la que mantiene tu historial completo.',
        'Primary care appointment: chronic condition follow-ups, prescriptions, checkups, referrals. The most affordable option and the one that keeps your history complete.'
      ),
      bi(
        'Ir a la emergencia por algo no urgente casi siempre significa más horas de espera y un copago mayor.',
        'Going to the ER for a non-urgent issue almost always means longer waits and a higher copay.'
      ),
    ],
  },
  {
    id: 'medicare',
    title: bi('Medicare y planes Advantage en Puerto Rico', 'Medicare and Advantage plans in Puerto Rico'),
    summary: bi(
      'Lo básico si tienes 65+ años o ciertas incapacidades.',
      'The basics if you’re 65+ or have certain disabilities.'
    ),
    points: [
      bi(
        'Si tienes 65 años o más, o ciertas incapacidades, puedes cualificar para Medicare. En Puerto Rico la mayoría de los beneficiarios se inscribe en planes Medicare Advantage (como MMM Healthcare, Triple-S Advantage o MCS Advantage).',
        'If you’re 65 or older, or have certain disabilities, you may qualify for Medicare. In Puerto Rico most beneficiaries enroll in Medicare Advantage plans (such as MMM Healthcare, Triple-S Advantage or MCS Advantage).'
      ),
      bi(
        'Medicare Advantage combina hospital, médicos y usualmente farmacia en un solo plan, con su propia red de proveedores — verifica que tus médicos estén en la red antes de cambiar.',
        'Medicare Advantage bundles hospital, medical and usually pharmacy coverage in one plan with its own provider network — verify your doctors are in-network before switching.'
      ),
      bi(
        'Puedes cualificar para Vital y Medicare a la vez (“dual elegible”), lo que puede reducir tus costos significativamente.',
        'You can qualify for Vital and Medicare at the same time (“dual eligible”), which can significantly reduce your costs.'
      ),
    ],
    links: [
      { label: bi('Medicare.gov', 'Medicare.gov'), url: 'https://www.medicare.gov/' },
    ],
  },
  {
    id: 'records',
    title: bi('Tus expedientes y una segunda opinión', 'Your records and second opinions'),
    summary: bi(
      'Cómo pedir copia de tu expediente médico y por qué te conviene tenerla.',
      'How to request your medical records and why it pays to have them.'
    ),
    points: [
      bi(
        'Tienes derecho a una copia de tu expediente médico. Pídela por escrito en el departamento de récords médicos del hospital u oficina; pueden cobrar un costo razonable por copia.',
        'You have a right to a copy of your medical record. Request it in writing from the hospital’s or office’s medical records department; they may charge a reasonable copy fee.'
      ),
      bi(
        'Llevar tus resultados (laboratorios, imágenes en disco, informes) a cada especialista evita repetir pruebas y ahorra dinero.',
        'Bringing your results (labs, imaging on disc, reports) to each specialist avoids repeated tests and saves money.'
      ),
      bi(
        'Ante un diagnóstico serio o una cirugía recomendada, buscar una segunda opinión es normal y aceptado — los buenos médicos lo esperan.',
        'For a serious diagnosis or a recommended surgery, seeking a second opinion is normal and accepted — good doctors expect it.'
      ),
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Costs                                                               */
/* ------------------------------------------------------------------ */

export interface CostRow {
  service: Bi
  range: string | Bi
  note: Bi
}

export const costRows: CostRow[] = [
  {
    service: bi('Cita con médico primario (sin seguro)', 'Primary care visit (uninsured)'),
    range: '$60 – $120',
    note: bi('Consultas de seguimiento suelen costar menos.', 'Follow-up visits often cost less.'),
  },
  {
    service: bi('Cita con especialista (sin seguro)', 'Specialist visit (uninsured)'),
    range: '$100 – $250+',
    note: bi('No incluye pruebas ni procedimientos.', 'Does not include tests or procedures.'),
  },
  {
    service: bi('Sala de urgencias', 'Urgent care'),
    range: '$75 – $150',
    note: bi('Con plan, usualmente solo el copago.', 'With insurance, usually just the copay.'),
  },
  {
    service: bi('Sala de emergencias', 'Emergency room'),
    range: '$500+',
    note: bi('El costo total varía enormemente según pruebas y tratamiento.', 'Total cost varies enormously with tests and treatment.'),
  },
  {
    service: bi('Hospitalización (por día, sin seguro)', 'Hospitalization (per day, uninsured)'),
    range: '$1,500 – $3,500+',
    note: bi('Cuidado intensivo cuesta significativamente más.', 'Intensive care costs significantly more.'),
  },
  {
    service: bi('Copagos con Plan Vital', 'Copays with Plan Vital'),
    range: bi('Bajos o $0 en muchos servicios', 'Low or $0 for many services'),
    note: bi('Depende de tu nivel de ingreso; puedes pedir revaluación del copago.', 'Depends on income level; you can request a copay re-evaluation.'),
  },
]

export const costLinks = [
  {
    label: bi('GoodRx — precios de medicamentos', 'GoodRx — drug prices'),
    url: 'https://www.goodrx.com/',
    note: bi('Compara precios y descarga cupones de descuento para medicamentos.', 'Compare prices and get discount coupons for medications.'),
  },
  {
    label: bi('Estimador de precios del hospital', 'Hospital price estimator'),
    url: 'https://www.cms.gov/medical-bill-rights',
    note: bi(
      'Por ley federal, cada hospital debe publicar sus precios y ofrecer estimados. Busca “price estimator” + el nombre del hospital.',
      'Federal law requires every hospital to publish prices and offer estimates. Search “price estimator” + the hospital’s name.'
    ),
  },
  {
    label: bi('Medicare.gov — comparar planes', 'Medicare.gov — compare plans'),
    url: 'https://www.medicare.gov/plan-compare/',
    note: bi('Compara planes Medicare Advantage y de farmacia disponibles en Puerto Rico.', 'Compare Medicare Advantage and drug plans available in Puerto Rico.'),
  },
  {
    label: bi('PlanVital.org', 'PlanVital.org'),
    url: 'https://planvital.org/',
    note: bi('Orientación oficial sobre el Plan Vital y sus aseguradoras.', 'Official orientation on Plan Vital and its insurers.'),
  },
]

/* ------------------------------------------------------------------ */
/* Checklists                                                          */
/* ------------------------------------------------------------------ */

export interface ChecklistTemplate {
  id: string
  label: Bi
  items: Bi[]
}

export const checklistTemplates: ChecklistTemplate[] = [
  {
    id: 'first',
    label: bi('Primera cita / paciente nuevo', 'First visit / new patient'),
    items: [
      bi('Identificación con foto', 'Photo ID'),
      bi('Tarjeta del plan médico', 'Health plan card'),
      bi('Referido (si aplica) con su número', 'Referral (if applicable) with its number'),
      bi('Lista de medicamentos actualizada', 'Updated medication list'),
      bi('Lista de alergias', 'Allergy list'),
      bi('Resultados de laboratorios e imágenes previas', 'Prior lab and imaging results'),
      bi('Historial de condiciones y cirugías', 'History of conditions and surgeries'),
      bi('Nombre y teléfono de tu médico primario', 'Your primary doctor’s name and phone'),
      bi('Tus preguntas escritas por adelantado', 'Your questions written down in advance'),
      bi('Forma de pago para el copago', 'Payment method for the copay'),
    ],
  },
  {
    id: 'specialist',
    label: bi('Cita con especialista', 'Specialist visit'),
    items: [
      bi('Referido vigente con número de autorización', 'Current referral with authorization number'),
      bi('Tarjeta del plan e identificación', 'Plan card and ID'),
      bi('Lista de medicamentos y alergias', 'Medication and allergy lists'),
      bi('Estudios relacionados a la condición (imágenes en disco, informes)', 'Studies related to the condition (imaging on disc, reports)'),
      bi('Registro de síntomas: cuándo empezaron, qué los mejora o empeora', 'Symptom log: when they started, what helps or worsens them'),
      bi('Preguntas sobre opciones de tratamiento y costos', 'Questions about treatment options and costs'),
    ],
  },
  {
    id: 'procedure',
    label: bi('Procedimiento u hospitalización', 'Procedure or hospitalization'),
    items: [
      bi('Confirmar autorización del plan (pre-autorización)', 'Confirm plan authorization (pre-authorization)'),
      bi('Confirmar ayuno: no comer ni beber según instrucciones', 'Confirm fasting: no food or drink per instructions'),
      bi('Preguntar qué medicamentos suspender y cuáles tomar', 'Ask which medications to stop and which to take'),
      bi('Acompañante y transporte para el regreso', 'Companion and transportation for the trip home'),
      bi('Identificación, tarjeta del plan y documentos firmados', 'ID, plan card and signed documents'),
      bi('Ropa cómoda y artículos personales mínimos', 'Comfortable clothing and minimal personal items'),
      bi('Preguntar el costo estimado y tu porción por adelantado', 'Ask for the estimated cost and your portion in advance'),
    ],
  },
]
