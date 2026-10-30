import { bi, type Bi } from '@/lib/i18n'

/* Guía comunitaria: Sequía y racionamiento de agua en Puerto Rico.
   Basada en recomendaciones de CDC y OMS/WHO. */

export const sequia = {
  eyebrow: bi('Guía comunitaria · Historia del mes', 'Community guide · Story of the month'),
  headline: bi('Cuando el agua se va.', 'When the water runs out.'),
  sub: bi(
    'Qué hacer antes, durante y después de un racionamiento: medicamentos, adultos mayores y una reserva de agua segura.',
    'What to do before, during and after water rationing: medications, older adults, and a safe water reserve.'
  ),
  why: bi(
    'El racionamiento, los cortes tras huracanes y el calor tropical se repiten cada año. Cuando falta el agua, los más afectados son los adultos mayores y las personas que toman medicamentos. La sequía no es solo un problema de tuberías: es un riesgo directo para la salud de tu familia — y se puede anticipar.',
    'Rationing, post-hurricane outages and tropical heat repeat every year. When water runs out, those hit hardest are older adults and people who take medications. Drought is not just a plumbing problem: it is a direct health risk for your family — and it can be anticipated.'
  ),

  stats: [
    { figure: '1.5–2 GAL', label: bi('de agua por persona al día en clima tropical, incluyendo higiene.', 'of water per person per day in tropical climates, including hygiene.') },
    { figure: '7–14 ' + '' + 'DÍAS', label: bi('de reserva en zonas con huracanes (mínimo 3 días en todo hogar).', 'of reserve in hurricane zones (minimum 3 days for every home).') },
    { figure: bi('SIN SED', 'NO THIRST'), label: bi('El adulto mayor se deshidrata antes de sentir sed. No hay que esperar la sed.', 'Older adults dehydrate before feeling thirsty. Never wait for thirst.') },
  ] as { figure: string | Bi; label: Bi }[],

  medsHeading: bi('Estos medicamentos se vuelven peligrosos si te deshidratas', 'These medications become dangerous if you get dehydrated'),
  meds: [
    { name: bi('Diuréticos (furosemide, HCTZ, espironolactona)', 'Diuretics (furosemide, HCTZ, spironolactone)'), body: bi('Eliminan líquido; la deshidratación los amplifica → baja la presión y los electrolitos.', 'They remove fluid; dehydration amplifies them → blood pressure and electrolytes drop.') },
    { name: bi('SGLT2 para diabetes (Jardiance, Farxiga)', 'SGLT2 diabetes drugs (Jardiance, Farxiga)'), body: bi('Riesgo de deshidratación y de cetoacidosis, incluso con glucosa normal.', 'Risk of dehydration and ketoacidosis, even with normal glucose.') },
    { name: bi('Metformina', 'Metformin'), body: bi('La deshidratación severa puede causar daño renal agudo y acidosis láctica.', 'Severe dehydration can cause acute kidney injury and lactic acidosis.') },
    { name: bi('IECA / ARA-II + AINEs (lisinopril, losartán + ibuprofeno)', 'ACE inhibitors / ARBs + NSAIDs (lisinopril, losartan + ibuprofen)'), body: bi('Con diuréticos, la combinación daña los riñones durante la deshidratación.', 'Combined with diuretics, they damage the kidneys during dehydration.') },
    { name: bi('Litio', 'Lithium'), body: bi('La deshidratación lo concentra a niveles tóxicos. Alerta: confusión, temblor, vómito.', 'Dehydration concentrates it to toxic levels. Warning signs: confusion, tremor, vomiting.') },
    { name: bi('Digoxina', 'Digoxin'), body: bi('Los cambios de electrolitos por deshidratación aumentan el riesgo de toxicidad.', 'Electrolyte shifts from dehydration raise the risk of toxicity.') },
  ],
  sickDayRule: bi(
    'Regla de días de enfermedad: con vómito o diarrea, algunos medicamentos se pausan — solo con orientación del médico o farmacéutico.',
    'Sick-day rule: with vomiting or diarrhea, some medications are paused — only with guidance from your doctor or pharmacist.'
  ),

  waterHeading: bi('El agua también es parte del tratamiento', 'Water is part of the treatment too'),
  waterPoints: [
    { title: bi('Tragar pastillas con poca agua daña', 'Swallowing pills with too little water harms'), body: bi('Potasio, doxiciclina, alendronato y AINEs pueden ulcerar el esófago. Tómalos con un vaso completo.', 'Potassium, doxycycline, alendronate and NSAIDs can ulcerate the esophagus. Take them with a full glass.') },
    { title: bi('Muchos usos médicos exigen agua segura', 'Many medical uses require safe water'), body: bi('Suspensiones, sales de rehidratación, nebulizadores, CPAP y sondas: agua hervida o embotellada, nunca de cisterna.', 'Suspensions, oral rehydration salts, nebulizers, CPAP and feeding tubes: boiled or bottled water, never cistern water.') },
    { title: bi('Calor, humedad y apagones', 'Heat, humidity and power outages'), body: bi('Medicamentos fuera del baño y del carro. Insulina: neverita con hielo envuelto, sin congelarla.', 'Keep medications out of the bathroom and the car. Insulin: cooler with wrapped ice, never frozen.') },
  ],
  dialysis: {
    title: bi('Pacientes de diálisis', 'Dialysis patients'),
    body: bi(
      'Los centros de diálisis consumen enormes volúmenes de agua y pueden cerrar durante una escasez. Conoce con anticipación el plan de reubicación de emergencia de tu unidad.',
      'Dialysis centers consume enormous volumes of water and may close during a shortage. Know your unit’s emergency relocation plan in advance.'
    ),
    ask: bi('Pregunta en tu centro: ¿a dónde me trasladan? ¿qué número llamo? ¿quién me avisa?', 'Ask at your center: where will I be transferred? What number do I call? Who notifies me?'),
  },

  elderlyHeading: bi('Beber por horario, no por sed', 'Drink on a schedule, not by thirst'),
  elderlyPoints: [
    { title: bi('Hidratación programada', 'Scheduled hydration'), body: bi('El adulto mayor se deshidrata antes de sentir sed. Un vaso con cada dosis y cada comida.', 'Older adults dehydrate before feeling thirsty. One glass with each dose and each meal.') },
    { title: bi('Personas con demencia', 'People with dementia'), body: bi('Olvidan beber: ingesta supervisada, con recordatorios y una hoja de conteo simple.', 'They forget to drink: supervised intake, with reminders and a simple tally sheet.') },
    { title: bi('Prevenir caídas', 'Prevent falls'), body: bi('La presión baja al pararse. Sentarse en el borde de la cama antes de levantarse y agarrarse firme.', 'Blood pressure drops on standing. Sit on the edge of the bed before getting up and hold on firmly.') },
    { title: bi('Higiene con poca agua', 'Hygiene with little water'), body: bi('Jabón sin enjuague, baño de esponja. Desinfectante 60%+ alcohol si no hay agua.', 'No-rinse soap, sponge baths. 60%+ alcohol sanitizer when water is unavailable.') },
  ],
  elderlyAlert: bi(
    'Confusión, mareo, caídas nuevas o debilidad durante un racionamiento pueden ser deshidratación — no un empeoramiento de su condición. Señales: orina oscura · boca seca · pulso rápido.',
    'Confusion, dizziness, new falls or weakness during rationing can be dehydration — not a worsening of their condition. Signs: dark urine · dry mouth · rapid pulse.'
  ),

  prepHeading: bi('Almacena. Purifica. Tapa.', 'Store. Purify. Cover.'),
  prepStats: [
    { figure: '1 GAL / DÍA', label: bi('por persona; 1.5–2 galones en calor tropical con higiene.', 'per person; 1.5–2 gallons in tropical heat including hygiene.') },
    { figure: '7–14 DÍAS', label: bi('de reserva en zona de huracanes; mínimo 3 días. Rota cada 6 meses.', 'of reserve in hurricane zones; minimum 3 days. Rotate every 6 months.') },
    { figure: '1 MINUTO', label: bi('hirviendo para purificar (3 minutos en altura).', 'of boiling to purify (3 minutes at altitude).') },
  ],
  prepPoints: [
    { title: bi('Cómo guardarla', 'How to store it'), body: bi('Envases aptos para alimentos, lugar fresco y oscuro. Al anunciar racionamiento, llena todo mientras haya servicio.', 'Food-grade containers, cool dark place. When rationing is announced, fill everything while service is on.') },
    { title: bi('Cloro sin perfume', 'Unscented bleach'), body: bi('~8 gotas (⅛ cdta) por galón de agua clara; ¼ cdta si está turbia. Mezcla y espera 30 minutos.', '~8 drops (⅛ tsp) per gallon of clear water; ¼ tsp if cloudy. Stir and wait 30 minutes.') },
    { title: bi('Agua de cisterna sin tratar: no', 'Untreated cistern water: no'), body: bi('No para beber, cepillarse, mezclar medicamentos, curar heridas ni lentes de contacto.', 'Not for drinking, brushing teeth, mixing medications, wound care, or contact lenses.') },
  ],
  dengue: bi(
    'Punto clave en PR: el dengue. El agua almacenada descubierta cría zancudos. Tapa y sella cada envase y cisterna.',
    'Key point in PR: dengue. Uncovered stored water breeds mosquitoes. Cover and seal every container and cistern.'
  ),

  aloneHeading: bi('La lista para el adulto mayor que vive solo', 'The checklist for the older adult living alone'),
  aloneItems: [
    bi('Medicamentos para 7–14 días a la mano + lista impresa de medicamentos.', 'A 7–14 day medication supply on hand + a printed medication list.'),
    bi('Contactos de emergencia escritos + un vecino o familiar que lo visite durante racionamientos.', 'Written emergency contacts + a neighbor or relative who checks in during rationing.'),
    bi('Plan para medicamentos refrigerados durante apagones: neverita, hielo, baterías.', 'A plan for refrigerated medications during outages: cooler, ice, batteries.'),
    bi('Agua almacenada y envases tapados (reserva de 7–14 días, cisterna sellada contra zancudos).', 'Stored water and covered containers (7–14 day reserve, cistern sealed against mosquitoes).'),
  ],
  ors: {
    title: bi('Suero oral casero (OMS)', 'Homemade oral rehydration solution (WHO)'),
    body: bi(
      'Tras racionamientos suben la gastroenteritis y la leptospirosis. Vómito y diarrea empeoran la deshidratación. Dar en sorbos frecuentes. Si el vómito no cede o hay confusión, busca atención médica.',
      'After rationing, gastroenteritis and leptospirosis rise. Vomiting and diarrhea worsen dehydration. Give in frequent sips. If vomiting persists or there is confusion, seek medical care.'
    ),
    parts: [
      bi('1 litro de agua segura', '1 liter of safe water'),
      bi('6 cdtas rasas de azúcar', '6 level teaspoons of sugar'),
      bi('½ cdta rasa de sal', '½ level teaspoon of salt'),
    ],
  },

  redFlagsHeading: bi('Busca atención médica de inmediato si hay…', 'Seek medical care immediately if there is…'),
  redFlags: [
    bi('Desmayo o confusión', 'Fainting or confusion'),
    bi('No orinar por más de 8 horas', 'No urination for more than 8 hours'),
    bi('Dolor en el pecho', 'Chest pain'),
    bi('Golpe de calor: piel caliente y seca, temperatura alta, comportamiento alterado', 'Heat stroke: hot dry skin, high temperature, altered behavior'),
  ],
  essentialsHeading: bi('Lo esencial', 'The essentials'),
  essentials: [
    bi('Agua por horario, no por sed.', 'Water on a schedule, not by thirst.'),
    bi('Pregunta por la regla de días de enfermedad de tus medicamentos.', 'Ask about the sick-day rule for your medications.'),
    bi('Reserva de 7–14 días, envases tapados.', 'A 7–14 day reserve, containers covered.'),
    bi('Plan de diálisis y de apagones por escrito.', 'A written dialysis and power-outage plan.'),
  ],
  credit: bi(
    'Guía comunitaria basada en recomendaciones de CDC y OMS. Material educativo — no sustituye la orientación de tu médico o farmacéutico.',
    'Community guide based on CDC and WHO recommendations. Educational material — it does not replace guidance from your doctor or pharmacist.'
  ),
}
