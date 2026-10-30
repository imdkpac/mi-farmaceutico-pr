import type { SlideData } from '@/types/slide'

/**
 * RUTA CLÍNICA — 10 condiciones, la fuente oficial de cada una.
 * Cada tarjeta no dice qué tomar: dice dónde vive la guía que el equipo
 * de salud debe seguir, cómo leerla como paciente y qué preguntar en la cita.
 * Verificado: octubre 2026.
 */
export const DECK_RUTA_CLINICA: SlideData[] = [
  {
    id: 'cover',
    badge: 'REFERENCIA CLÍNICA',
    eyebrow: 'GUÍA DE GUÍAS · FUENTES OFICIALES',
    headlineA: 'NO BUSQUES TRATAMIENTOS.',
    headlineB: 'BUSCA LA GUÍA OFICIAL.',
    blocks: [
      {
        id: 'cover-lead',
        type: 'lead',
        text: 'Los médicos no tratan de memoria: siguen guías publicadas por sociedades científicas. Si aprendes a encontrar la guía de tu condición, puedes verificar que tu tratamiento esté al día y llegar a tu cita con mejores preguntas.',
      },
      {
        id: 'cover-stats',
        type: 'stats',
        items: [
          { value: '10', label: 'condiciones de alta carga en Puerto Rico.' },
          { value: '8', label: 'organismos científicos oficiales, uno por condición.' },
          { value: '100%', label: 'fuentes primarias, gratuitas y con año visible.' },
        ],
      },
    ],
    alertText: 'Material educativo — *no sustituye* la orientación de tu médico o farmacéutico. Las guías son para profesionales: úsalas para preparar tu cita, nunca para automedicarte.',
    note: 'Verificado: octubre 2026 · Revisión semestral programada',
  },
  {
    id: 'howto',
    badge: 'RESUMEN',
    eyebrow: 'CÓMO USAR ESTA SECCIÓN',
    headlineA: 'TRES PASOS PARA',
    headlineB: 'USAR CUALQUIER GUÍA.',
    blocks: [
      {
        id: 'howto-cards',
        type: 'cards',
        dense: true,
        items: [
          {
            title: '#1 · Identifica el organismo',
            text: 'Cada condición tiene una sociedad que publica su guía (AHA/ACC, ADA, GINA, GOLD, KDIGO, NICE, ACR…). Empieza por la fuente oficial, no por Google.',
          },
          {
            title: '#2 · Verifica el año',
            text: 'Toda guía seria muestra su año de publicación. La ADA actualiza cada enero; GINA y GOLD cada año; ACC/AHA cada pocos años. Si tu médico sigue una versión vieja, pregunta por qué.',
          },
          {
            title: '#3 · Lleva preguntas, no autodiagnósticos',
            text: 'Las guías son para profesionales de salud. Tu ventaja como paciente: llegar a la cita sabiendo qué meta buscar (presión, A1c, PHQ-9) y qué preguntas hacer.',
          },
        ],
      },
      {
        id: 'howto-lead',
        type: 'lead',
        text: 'Banderas de un recurso confiable: muestra licencia o respaldo institucional (.org de sociedad científica, .gov), tiene fecha visible, no promete curas, no te presiona a comprar nada.',
      },
    ],
    alertText: 'Desconfía si: promete curar lo incurable · no muestra quién lo escribió · es un blog sin fecha · te pide datos de tarjeta para «información gratuita».',
    note: 'Criterio editorial de Mi Farmacéutico en PR',
  },
  {
    id: 'r1',
    badge: 'CARDIOVASCULAR',
    eyebrow: 'FUENTE OFICIAL Nº 1',
    headlineA: 'HIPERTENSIÓN',
    headlineB: '(PRESIÓN ALTA)',
    blocks: [
      {
        id: 'r1-lead',
        type: 'lead',
        text: 'La presión alta casi nunca da síntomas, pero daña corazón, riñones y cerebro en silencio. El primer paso no es buscar un fármaco: es confirmarla bien medida y conocer la meta actual.',
      },
      {
        id: 'r1-cards',
        type: 'cards',
        dense: true,
        items: [
          {
            title: '#1 · La guía oficial — AHA/ACC 2025',
            text: 'Guía 2025 para el Manejo de la Hipertensión en Adultos (reemplaza la de 2017) · Meta general <130/80 · Resumen para pacientes: CardioSmart.org (español) · Gratis: ahajournals.org / acc.org',
          },
          {
            title: '#2 · Cómo usarla como paciente',
            text: 'Mídete la presión en casa 2 veces al día durante una semana (sentado, brazo apoyado) y lleva el registro a tu cita · La guía 2025 hace central la medición domiciliaria · Compara tu promedio con la meta <130/80',
          },
          {
            title: '#3 · Qué preguntar en tu cita',
            text: '¿Mi promedio casero justifica medicamento o solo cambios de estilo de vida? · ¿Mi riesgo cardiovascular fue calculado con la herramienta PREVENT de la guía 2025? · ¿Tengo presión resistente? La guía pide descartar aldosteronismo',
          },
        ],
      },
    ],
    alertText: 'Presión ≥180/120 con dolor de pecho, falta de aire, visión borrosa o debilidad de un lado → emergencia · Embarazo con presión ≥160/110 → atención inmediata.',
    note: 'Guía: AHA/ACC 2025 · Español: parcial (resumen para pacientes) · Verificado: oct 2026',
  },
  {
    id: 'r2',
    badge: 'CARDIOVASCULAR',
    eyebrow: 'FUENTE OFICIAL Nº 2',
    headlineA: 'COLESTEROL ALTO /',
    headlineB: 'RIESGO CARDIOVASCULAR',
    blocks: [
      {
        id: 'r2-lead',
        type: 'lead',
        text: 'El colesterol se trata según tu riesgo total de infarto a 10 años, no según un número aislado. Ese riesgo se calcula con una herramienta estándar — y tú puedes pedir que te la calculen.',
      },
      {
        id: 'r2-cards',
        type: 'cards',
        dense: true,
        items: [
          {
            title: '#1 · La guía oficial — ACC/AHA',
            text: 'Guía de Manejo del Colesterol 2018 (con actualizaciones) + calculadora de riesgo ASCVD/PREVENT · Define quién necesita estatina y con qué intensidad · Herramienta de riesgo en línea: acc.org (gratis)',
          },
          {
            title: '#2 · Cómo usarla como paciente',
            text: 'Pide tu perfil lipídico completo (LDL, HDL, triglicéridos) · Pide que calculen tu riesgo cardiovascular a 10 años · La decisión de estatina depende de ese número + diabetes + edad + tabaquismo, no solo del colesterol',
          },
          {
            title: '#3 · Qué preguntar en tu cita',
            text: '¿Cuál es mi riesgo a 10 años y con qué calculadora? · ¿Mi LDL tiene meta definida o manejan por riesgo? · ¿Qué alternativas hay si las estatinas me causan molestias musculares?',
          },
        ],
      },
    ],
    alertText: 'Dolor de pecho opresivo con sudoración irradiado a brazo/mandíbula → 911 · Estatina con dolor muscular intenso + orina oscura → suspender y llamar al médico (rabdomiólisis, raro pero grave).',
    note: 'Guía: ACC/AHA 2018 (+actualizaciones) · Español: parcial (PREVENT bilingüe) · Verificado: oct 2026',
  },
  {
    id: 'r3',
    badge: 'METABÓLICO',
    eyebrow: 'FUENTE OFICIAL Nº 3',
    headlineA: 'DIABETES',
    headlineB: 'TIPO 2',
    blocks: [
      {
        id: 'r3-lead',
        type: 'lead',
        text: 'La diabetes se maneja con metas medibles (A1c, presión, riñón, ojo), no con sensaciones. La guía de referencia mundial se actualiza cada enero — la fecha importa.',
      },
      {
        id: 'r3-cards',
        type: 'cards',
        dense: true,
        items: [
          {
            title: '#1 · La guía oficial — ADA',
            text: 'Standards of Care in Diabetes—2026 (American Diabetes Association), publicada enero 2026 · La referencia mundial; se actualiza anualmente · Versión para pacientes en español: diabetes.org/es',
          },
          {
            title: '#2 · Cómo usarla como paciente',
            text: 'Pide tu A1c y compárala con la meta individualizada (típicamente <7%) · Usa la guía como checklist: presión <130/80, estatina según edad, pies y ojos anuales, proteína en orina cada año',
          },
          {
            title: '#3 · Qué preguntar en tu cita',
            text: '¿Mi tratamiento sigue los Standards 2026? · ¿Califico para un agonista GLP-1 según mi riesgo cardiovascular? · ¿Me hicieron el tamizaje de riñón (albuminuria) este año?',
          },
        ],
      },
    ],
    alertText: 'Azúcar muy alta con vómitos, respiración profunda o confusión (cetoacidosis) → emergencia · Hipoglucemia que no despierta → glucagón y 911.',
    note: 'Guía: ADA Standards of Care 2026 · Español: sí (diabetes.org/es) · Verificado: oct 2026',
  },
  {
    id: 'r4',
    badge: 'METABÓLICO',
    eyebrow: 'FUENTE OFICIAL Nº 4',
    headlineA: 'OBESIDAD',
    headlineB: '',
    blocks: [
      {
        id: 'r4-lead',
        type: 'lead',
        text: 'La obesidad (IMC ≥30) es una enfermedad crónica tratable, no un problema de voluntad. Las guías modernas la manejan como cualquier condición: con terapia estructurada y, cuando califica, medicamentos de alta eficacia.',
      },
      {
        id: 'r4-cards',
        type: 'cards',
        dense: true,
        items: [
          {
            title: '#1 · La guía oficial — AACE/OMA',
            text: 'Algoritmo de Manejo de la Obesidad de AACE/ACE (2022, con actualizaciones) · Complementa la guía ADA para pacientes con diabetes · aace.com / obesitymedicine.org',
          },
          {
            title: '#2 · Cómo usarla como paciente',
            text: 'Tu meta no es un peso ideal: la guía define éxito como 5–15% de pérdida con mejoría de salud (presión, A1c, sueño) · Si tu IMC ≥30 (o ≥27 con comorbilidad) y nadie ha hablado de tratamiento farmacológico, la guía dice que sí deberían',
          },
          {
            title: '#3 · Qué preguntar en tu cita',
            text: '¿Califico para terapia con GLP-1 según las guías? · ¿Me tamizaron apnea del sueño? La guía lo exige · ¿Hay programa estructurado de estilo de vida cubierto por mi plan?',
          },
        ],
      },
    ],
    alertText: 'Ronquidos con pausas de respiración + somnolencia diurna severa (apnea no tratada) · Dificultad respiratoria al acostarte · Ganancia rápida de peso inexplicable → descartar causas secundarias.',
    note: 'Guía: AACE 2022 + ADA Standards 2026 (sección obesidad) · Español: parcial · Verificado: oct 2026',
  },
  {
    id: 'r5',
    badge: 'RESPIRATORIO',
    eyebrow: 'FUENTE OFICIAL Nº 5',
    headlineA: 'ASMA',
    headlineB: '',
    blocks: [
      {
        id: 'r5-lead',
        type: 'lead',
        text: 'El asma bien controlada no debería limitarte. El control se mide con una prueba de función pulmonar (espirometría) y con qué tan seguido usas tu inhalador de rescate.',
      },
      {
        id: 'r5-cards',
        type: 'cards',
        dense: true,
        items: [
          {
            title: '#1 · La guía oficial — GINA',
            text: 'Estrategia Global para el Manejo del Asma 2025 (Global Initiative for Asthma) · Se actualiza cada año; la usan neumólogos de todo el mundo · ginasthma.org (PDF y guía de bolsillo gratis) · Resumen para pacientes en español',
          },
          {
            title: '#2 · Cómo usarla como paciente',
            text: 'Cambio importante: GINA ya NO recomienda salbutamol solo como base · Lo moderno es un inhalador combinado con corticoide aunque tengas síntomas ocasionales · Si tu tratamiento es «solo rescate», pregunta si está desactualizado',
          },
          {
            title: '#3 · Qué preguntar en tu cita',
            text: '¿Tengo un plan de acción por escrito? (la guía lo exige: verde/amarillo/rojo) · ¿Me hicieron espirometría para confirmar el diagnóstico? · ¿Debo usar el inhalador con cámara (spacer)?',
          },
        ],
      },
    ],
    alertText: 'Dificultad para hablar por falta de aire, labios azules, inhalador de rescate que no alivia → emergencia · No duermes por el asma = cita esta semana, no esperes.',
    note: 'Guía: GINA 2025 · Español: parcial (resumen) · Verificado: oct 2026',
  },
  {
    id: 'r6',
    badge: 'RESPIRATORIO',
    eyebrow: 'FUENTE OFICIAL Nº 6',
    headlineA: 'EPOC',
    headlineB: '(ENFISEMA / BRONQUITIS CRÓNICA)',
    blocks: [
      {
        id: 'r6-lead',
        type: 'lead',
        text: 'La EPOC se sospecha con tos crónica y falta de aire en fumadores o exfumadores, pero solo se confirma con espirometría. La guía GOLD 2026 cambia el enfoque: tratar temprano, no esperar a empeorar.',
      },
      {
        id: 'r6-cards',
        type: 'cards',
        dense: true,
        items: [
          {
            title: '#1 · La guía oficial — GOLD',
            text: 'Informe GOLD 2026 (Global Initiative for Chronic Obstructive Lung Disease) · Clasifica al paciente en grupos A/B/E y guía todo: del inhalador inicial a la rehabilitación · goldcopd.org (informe y guía de bolsillo gratis)',
          },
          {
            title: '#2 · Cómo usarla como paciente',
            text: 'Pide tu espirometría anual y pregunta en qué grupo (A, B o E) estás — eso define tu tratamiento · La guía 2026 incorpora terapias biológicas para EPOC eosinofílica: si tienes exacerbaciones repetidas, pregunta si calificas',
          },
          {
            title: '#3 · Qué preguntar en tu cita',
            text: '¿Mi conteo de eosinófilos fue medido? Define si el corticoide inhalado me sirve · ¿Me corresponde rehabilitación pulmonar? La guía la trata como tratamiento, no como lujo · ¿Estoy al día con vacunas (gripe, neumococo, COVID)?',
          },
        ],
      },
    ],
    alertText: 'Aumento súbito de falta de aire, tos con sangre, fiebre con esputo verde, confusión → emergencia · Labios azules = 911.',
    note: 'Guía: GOLD 2026 · Español: parcial · Verificado: oct 2026',
  },
  {
    id: 'r7',
    badge: 'RENAL',
    eyebrow: 'FUENTE OFICIAL Nº 7',
    headlineA: 'ENFERMEDAD RENAL',
    headlineB: 'CRÓNICA',
    blocks: [
      {
        id: 'r7-lead',
        type: 'lead',
        text: 'Los riñones fallan en silencio: se detecta con dos análisis sencillos (creatinina para el filtrado y proteína en orina) que muchos pacientes nunca se hacen. Detectada temprano, su progresión se frena.',
      },
      {
        id: 'r7-cards',
        type: 'cards',
        dense: true,
        items: [
          {
            title: '#1 · La guía oficial — KDIGO',
            text: 'Guía de Práctica Clínica para la ERC 2024 (Kidney Disease: Improving Global Outcomes) · Clasifica la enfermedad por estadios (G1–G5) y define el tratamiento de cada uno · kdigo.org (PDF gratis, disponible en español)',
          },
          {
            title: '#2 · Cómo usarla como paciente',
            text: 'Pide dos datos de cada visita: tu TFG (filtrado glomerular) y tu albúmina/creatinina en orina · La guía 2024 hace estándar los inhibidores SGLT2 para riñón, incluso sin diabetes: si nadie te los ha ofrecido, pregunta',
          },
          {
            title: '#3 · Qué preguntar en tu cita',
            text: '¿Cuál es mi estadio KDIGO? · ¿Debo tomar un inhibidor SGLT2 por mi riñón? · ¿Qué medicamentos evitar? (los AINEs como ibuprofeno dañan riñones) · ¿A qué TFG me referirán a nefrología? (guía: <30)',
          },
        ],
      },
    ],
    alertText: 'Orina casi nula, hinchazón súbita de piernas/párpados, náuseas persistentes u olor a amoníaco en el aliento (uremia) → consulta urgente · Potasio alto en análisis = llamada el mismo día.',
    note: 'Guía: KDIGO 2024 · Español: sí · Verificado: oct 2026',
  },
  {
    id: 'r8',
    badge: 'SALUD MENTAL',
    eyebrow: 'FUENTE OFICIAL Nº 8',
    headlineA: 'DEPRESIÓN',
    headlineB: '(TRASTORNO DEPRESIVO MAYOR)',
    blocks: [
      {
        id: 'r8-lead',
        type: 'lead',
        text: 'La depresión es una enfermedad médica con tratamientos de evidencia sólida (terapia, medicación o ambas), no una debilidad de carácter. La guía define qué opción va primero según la gravedad.',
      },
      {
        id: 'r8-cards',
        type: 'cards',
        dense: true,
        items: [
          {
            title: '#1 · La guía oficial — NICE',
            text: 'Depresión en adultos: tratamiento y manejo (NG222, NICE 2022, revisada ene 2026 — vigente) · En EE. UU.: APA · Versión para pacientes en lenguaje claro: nice.org.uk/guidance/ng222 (gratis)',
          },
          {
            title: '#2 · Cómo usarla como paciente',
            text: 'La guía separa leve de severa con el cuestionario PHQ-9 (<16 leve, ≥16 severa) · Puedes autoaplicarlo gratis en línea y llevar tu puntaje a la cita · Leve → terapia primero · Severa → medicación o combinación',
          },
          {
            title: '#3 · Qué preguntar en tu cita',
            text: '¿Mi PHQ-9 indica terapia, medicación o ambas según la guía? · ¿Cuántas semanas para evaluar respuesta? (guía: 4–6) · Si no respondo, ¿cuál es el plan B? (la guía lo exige por escrito)',
          },
        ],
      },
    ],
    alertText: 'Pensamientos de hacerte daño o de que la vida no vale la pena → *988* (línea de crisis, 24/7) y cuéntale a alguien hoy. No esperes la cita programada.',
    note: 'Guía: NICE NG222 (2022, rev. 2026) · Español: no · Verificado: oct 2026',
  },
  {
    id: 'r9',
    badge: 'SALUD MENTAL',
    eyebrow: 'FUENTE OFICIAL Nº 9',
    headlineA: 'ANSIEDAD',
    headlineB: '(TRASTORNO DE ANSIEDAD GENERALIZADA)',
    blocks: [
      {
        id: 'r9-lead',
        type: 'lead',
        text: 'La preocupación constante que no puedes controlar durante meses tiene tratamiento definido: terapia específica, medicación, o ambas. La guía dice exactamente cuál va primero.',
      },
      {
        id: 'r9-cards',
        type: 'cards',
        dense: true,
        items: [
          {
            title: '#1 · La guía oficial — NICE',
            text: 'Trastornos de ansiedad (CG113, NICE, con vigilancia activa) · Complemento en EE. UU.: WFSBP · Versión para pacientes: nice.org.uk/guidance/cg113 (gratis)',
          },
          {
            title: '#2 · Cómo usarla como paciente',
            text: 'Para ansiedad generalizada la guía recomienda terapia cognitivo-conductual como primera opción; el medicamento (ISRS/IRSN) es igual de válido si prefieres vía rápida · Todo tratamiento debe durar ≥12 meses tras responder — abandonar antes es la causa #1 de recaída',
          },
          {
            title: '#3 · Qué preguntar en tu cita',
            text: '¿Me ofrecieron terapia, medicación o ambas? La guía explica las opciones · ¿Qué hago si las primeras 2 semanas el medicamento me da más nervios? (es esperado, no abandones) · ¿Cuál es el plan si no respondo en 12 semanas?',
          },
        ],
      },
    ],
    alertText: 'Ataques de pánico repetidos con miedo a morir + evitación total de salir de casa → derivación, no manejo solo · Ansiedad con alcohol/drogas para calmarla → díselo a tu médico sin vergüenza: cambia el tratamiento · Ideación suicida → 988.',
    note: 'Guía: NICE CG113 (+WFSBP) · Español: no · Verificado: oct 2026',
  },
  {
    id: 'r10',
    badge: 'MUSCULOESQUELÉTICO',
    eyebrow: 'FUENTE OFICIAL Nº 10',
    headlineA: 'OSTEOARTRITIS',
    headlineB: '(ARTROSIS)',
    blocks: [
      {
        id: 'r10-lead',
        type: 'lead',
        text: 'La artrosis se maneja mal en todas partes: resonancias innecesarias, reposo absoluto y opioides cuando la evidencia dice lo contrario — ejercicio, educación y control de peso primero, siempre.',
      },
      {
        id: 'r10-cards',
        type: 'cards',
        dense: true,
        items: [
          {
            title: '#1 · La guía oficial — ACR/Arthritis Foundation',
            text: 'Guía de Osteoartritis 2019 (American College of Rheumatology / Arthritis Foundation) — vigente con vigilancia activa · Mensaje central: el ejercicio terapéutico ES el tratamiento · rheumatology.org (resumen gratis) · Recursos en español: arthritis.org/es',
          },
          {
            title: '#2 · Cómo usarla como paciente',
            text: 'La guía desaconseja resonancia para artrosis típica, reposo en cama y opioides de rutina · Aconseja: ejercicio con carga supervisado (2–3 veces/semana), bajar 5% del peso si aplica, AINE tópico antes que oral · Si tu plan no menciona ejercicio, está desactualizado',
          },
          {
            title: '#3 · Qué preguntar en tu cita',
            text: '¿Me refirieron a fisioterapia o programa de ejercicio? La guía lo pone primero · ¿Puedo usar diclofenaco en gel en vez de pastillas? · ¿Ya es hora de valorar reemplazo de cadera/rodilla? (guía: dolor que limita la vida diaria a pesar de tratamiento)',
          },
        ],
      },
    ],
    alertText: 'Rodilla/articulación caliente, roja e hinchada de inicio súbito (podría ser infección o gota, no artrosis) → cita urgente · Dolor nocturno que no cede al cambiar de posición o pérdida de peso inexplicada → descartar otra causa.',
    note: 'Guía: ACR/Arthritis Foundation 2019 (vigente) · Español: parcial (Arthritis Foundation) · Verificado: oct 2026',
  },
  {
    id: 'closing',
    badge: 'FUENTES',
    eyebrow: 'REFERENCIAS · TODAS GRATUITAS',
    headlineA: 'ORGANISMOS OFICIALES',
    headlineB: 'POR CONDICIÓN.',
    blocks: [
      {
        id: 'close-check',
        type: 'checklist',
        items: [
          { text: 'Hipertensión · Colesterol → AHA/ACC — ahajournals.org · acc.org' },
          { text: 'Diabetes tipo 2 · Obesidad → ADA Standards 2026 — diabetes.org/es' },
          { text: 'Asma → GINA — ginasthma.org · EPOC → GOLD — goldcopd.org' },
          { text: 'Riñón → KDIGO — kdigo.org (disponible en español)' },
          { text: 'Depresión · Ansiedad → NICE — nice.org.uk (versión para pacientes)' },
          { text: 'Artrosis → ACR / Arthritis Foundation — rheumatology.org · arthritis.org/es' },
        ],
      },
    ],
    alertText: 'Regla de oro: si un recurso no muestra año de publicación ni organismo responsable, no es una guía — es contenido. Vuelve a la fuente primaria.',
    note: 'Cada tarjeta indica su año de guía y fecha de verificación. Revisión semestral: abril y octubre.',
  },
]
