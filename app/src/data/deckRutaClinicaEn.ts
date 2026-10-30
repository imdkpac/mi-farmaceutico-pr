import type { SlideData } from '@/types/slide'

/**
 * RUTA CLÍNICA (EN) — 10 conditions, the official source for each one.
 * Each card doesn't say what to take: it says where the guideline your care
 * team should follow lives, how to read it as a patient, and what to ask at
 * your visit. Verified: October 2026.
 */
export const DECK_RUTA_CLINICA_EN: SlideData[] = [
  {
    id: 'cover',
    badge: 'CLINICAL REFERENCE',
    eyebrow: 'GUIDE OF GUIDES · OFFICIAL SOURCES',
    headlineA: "DON'T SEARCH FOR TREATMENTS.",
    headlineB: 'SEARCH FOR THE OFFICIAL GUIDELINE.',
    blocks: [
      {
        id: 'cover-lead',
        type: 'lead',
        text: "Doctors don't treat from memory: they follow guidelines published by medical societies. If you learn to find the guideline for your condition, you can verify that your treatment is up to date and arrive at your visit with better questions.",
      },
      {
        id: 'cover-stats',
        type: 'stats',
        items: [
          { value: '10', label: 'conditions with the highest burden in Puerto Rico.' },
          { value: '8', label: 'official scientific bodies, one per condition.' },
          { value: '100%', label: 'primary sources, free, with a visible publication year.' },
        ],
      },
    ],
    alertText: 'Educational material — *it does not replace* guidance from your doctor or pharmacist. Guidelines are written for professionals: use them to prepare for your visit, never to self-medicate.',
    note: 'Verified: October 2026 · Semiannual review scheduled',
  },
  {
    id: 'howto',
    badge: 'SUMMARY',
    eyebrow: 'HOW TO USE THIS SECTION',
    headlineA: 'THREE STEPS TO USE',
    headlineB: 'ANY GUIDELINE.',
    blocks: [
      {
        id: 'howto-cards',
        type: 'cards',
        dense: true,
        items: [
          {
            title: '#1 · Identify the publishing body',
            text: 'Every condition has a society that publishes its guideline (AHA/ACC, ADA, GINA, GOLD, KDIGO, NICE, ACR…). Start with the official source, not Google.',
          },
          {
            title: '#2 · Check the year',
            text: 'Every serious guideline shows its publication year. ADA updates every January; GINA and GOLD every year; ACC/AHA every few years. If your doctor follows an old version, ask why.',
          },
          {
            title: '#3 · Bring questions, not self-diagnoses',
            text: 'Guidelines are for health professionals. Your advantage as a patient: arriving at the visit knowing what goal to look for (blood pressure, A1c, PHQ-9) and which questions to ask.',
          },
        ],
      },
      {
        id: 'howto-lead',
        type: 'lead',
        text: 'Signs of a trustworthy resource: it shows a license or institutional backing (a scientific society .org, .gov), it has a visible date, it promises no cures, and it pressures you to buy nothing.',
      },
    ],
    alertText: "Be wary if: it promises to cure the incurable · it doesn't show who wrote it · it's an undated blog · it asks for card details for \"free information\".",
    note: 'Editorial criterion of Mi Farmacéutico en PR',
  },
  {
    id: 'r1',
    badge: 'CARDIOVASCULAR',
    eyebrow: 'OFFICIAL SOURCE No. 1',
    headlineA: 'HIGH BLOOD',
    headlineB: 'PRESSURE (HYPERTENSION)',
    blocks: [
      {
        id: 'r1-lead',
        type: 'lead',
        text: 'High blood pressure almost never causes symptoms, but it silently damages the heart, kidneys and brain. The first step is not to look for a drug: it is to confirm it with proper measurement and know the current target.',
      },
      {
        id: 'r1-cards',
        type: 'cards',
        dense: true,
        items: [
          {
            title: '#1 · The official guideline — AHA/ACC 2025',
            text: '2025 Guideline for the Management of High Blood Pressure in Adults (replaces 2017) · General target <130/80 · Patient summary: CardioSmart.org (Spanish available) · Free: ahajournals.org / acc.org',
          },
          {
            title: '#2 · How to use it as a patient',
            text: 'Measure your blood pressure at home twice a day for one week (seated, arm supported) and bring the log to your visit · The 2025 guideline makes home measurement central · Compare your average with the <130/80 target',
          },
          {
            title: '#3 · What to ask at your visit',
            text: 'Does my home average justify medication or only lifestyle changes? · Was my cardiovascular risk calculated with the PREVENT tool from the 2025 guideline? · Do I have resistant blood pressure? The guideline calls for ruling out aldosteronism',
          },
        ],
      },
    ],
    alertText: 'Pressure ≥180/120 with chest pain, shortness of breath, blurred vision or one-sided weakness → emergency · Pregnancy with pressure ≥160/110 → immediate care.',
    note: 'Guideline: AHA/ACC 2025 · Spanish: partial (patient summary) · Verified: Oct 2026',
  },
  {
    id: 'r2',
    badge: 'CARDIOVASCULAR',
    eyebrow: 'OFFICIAL SOURCE No. 2',
    headlineA: 'HIGH CHOLESTEROL /',
    headlineB: 'CARDIOVASCULAR RISK',
    blocks: [
      {
        id: 'r2-lead',
        type: 'lead',
        text: 'Cholesterol is treated based on your total 10-year heart attack risk, not an isolated number. That risk is calculated with a standard tool — and you can ask to have it calculated for you.',
      },
      {
        id: 'r2-cards',
        type: 'cards',
        dense: true,
        items: [
          {
            title: '#1 · The official guideline — ACC/AHA',
            text: '2018 Cholesterol Management Guideline (with updates) + ASCVD/PREVENT risk calculator · Defines who needs a statin and at what intensity · Free online risk tool: acc.org',
          },
          {
            title: '#2 · How to use it as a patient',
            text: 'Ask for a complete lipid panel (LDL, HDL, triglycerides) · Ask them to calculate your 10-year cardiovascular risk · The statin decision depends on that number + diabetes + age + smoking, not cholesterol alone',
          },
          {
            title: '#3 · What to ask at your visit',
            text: "What is my 10-year risk and which calculator was used? · Does my LDL have a defined target, or is it risk-based? · What are the options if statins give me muscle discomfort?",
          },
        ],
      },
    ],
    alertText: 'Crushing chest pain with sweating radiating to arm/jaw → 911 · Statin with severe muscle pain + dark urine → stop and call your doctor (rhabdomyolysis, rare but serious).',
    note: 'Guideline: ACC/AHA 2018 (+updates) · Spanish: partial (PREVENT bilingual) · Verified: Oct 2026',
  },
  {
    id: 'r3',
    badge: 'METABOLIC',
    eyebrow: 'OFFICIAL SOURCE No. 3',
    headlineA: 'TYPE 2',
    headlineB: 'DIABETES',
    blocks: [
      {
        id: 'r3-lead',
        type: 'lead',
        text: 'Diabetes is managed with measurable goals (A1c, blood pressure, kidney, eyes), not feelings. The world-reference guideline updates every January — the date matters.',
      },
      {
        id: 'r3-cards',
        type: 'cards',
        dense: true,
        items: [
          {
            title: '#1 · The official guideline — ADA',
            text: 'Standards of Care in Diabetes—2026 (American Diabetes Association), published January 2026 · The world reference; updated annually · Patient content in Spanish: diabetes.org/es',
          },
          {
            title: '#2 · How to use it as a patient',
            text: 'Ask for your A1c and compare it with your individualized target (typically <7%) · Use the guideline as a checklist: blood pressure <130/80, statin by age, annual foot and eye exams, yearly urine protein test',
          },
          {
            title: '#3 · What to ask at your visit',
            text: 'Does my treatment follow the 2026 Standards? · Do I qualify for a GLP-1 agonist based on my cardiovascular risk? · Was my kidney screening (albuminuria) done this year?',
          },
        ],
      },
    ],
    alertText: 'Very high sugar with vomiting, deep breathing or confusion (ketoacidosis) → emergency · Hypoglycemia that does not wake up → glucagon and 911.',
    note: 'Guideline: ADA Standards of Care 2026 · Spanish: yes (diabetes.org/es) · Verified: Oct 2026',
  },
  {
    id: 'r4',
    badge: 'METABOLIC',
    eyebrow: 'OFFICIAL SOURCE No. 4',
    headlineA: 'OBESITY',
    headlineB: '',
    blocks: [
      {
        id: 'r4-lead',
        type: 'lead',
        text: 'Obesity (BMI ≥30) is a treatable chronic disease, not a willpower problem. Modern guidelines manage it like any condition: structured therapy and, when eligible, highly effective medication.',
      },
      {
        id: 'r4-cards',
        type: 'cards',
        dense: true,
        items: [
          {
            title: '#1 · The official guideline — AACE/OMA',
            text: 'AACE/ACE Obesity Management Algorithm (2022, with updates) · Complements the ADA guideline for patients with diabetes · aace.com / obesitymedicine.org',
          },
          {
            title: '#2 · How to use it as a patient',
            text: 'Your goal is not an ideal weight: the guideline defines success as 5–15% loss with health improvement (blood pressure, A1c, sleep) · If your BMI ≥30 (or ≥27 with a comorbidity) and no one has discussed medication, the guideline says they should',
          },
          {
            title: '#3 · What to ask at your visit',
            text: 'Do I qualify for GLP-1 therapy per the guidelines? · Was I screened for sleep apnea? The guideline requires it · Is there a structured lifestyle program covered by my plan?',
          },
        ],
      },
    ],
    alertText: 'Loud snoring with breathing pauses + severe daytime sleepiness (untreated apnea) · Difficulty breathing when lying down · Unexplained rapid weight gain → rule out secondary causes.',
    note: 'Guideline: AACE 2022 + ADA Standards 2026 (obesity section) · Spanish: partial · Verified: Oct 2026',
  },
  {
    id: 'r5',
    badge: 'RESPIRATORY',
    eyebrow: 'OFFICIAL SOURCE No. 5',
    headlineA: 'ASTHMA',
    headlineB: '',
    blocks: [
      {
        id: 'r5-lead',
        type: 'lead',
        text: 'Well-controlled asthma should not limit you. Control is measured with a lung function test (spirometry) and by how often you use your rescue inhaler.',
      },
      {
        id: 'r5-cards',
        type: 'cards',
        dense: true,
        items: [
          {
            title: '#1 · The official guideline — GINA',
            text: 'Global Strategy for Asthma Management 2025 (Global Initiative for Asthma) · Updated every year; used by pulmonologists worldwide · ginasthma.org (free PDF and pocket guide) · Patient summary in Spanish available',
          },
          {
            title: '#2 · How to use it as a patient',
            text: 'Important change: GINA no longer recommends albuterol alone as base treatment · The modern approach is a combination inhaler with a corticosteroid even for occasional symptoms · If your treatment is "rescue only", ask if it is outdated',
          },
          {
            title: '#3 · What to ask at your visit',
            text: 'Do I have a written action plan? (the guideline requires it: green/yellow/red) · Was spirometry done to confirm my diagnosis? · Should I use a spacer with my inhaler?',
          },
        ],
      },
    ],
    alertText: 'Too breathless to speak, blue lips, rescue inhaler not helping → emergency · Asthma keeping you from sleeping = appointment this week, do not wait.',
    note: 'Guideline: GINA 2025 · Spanish: partial (summary) · Verified: Oct 2026',
  },
  {
    id: 'r6',
    badge: 'RESPIRATORY',
    eyebrow: 'OFFICIAL SOURCE No. 6',
    headlineA: 'COPD',
    headlineB: '(EMPHYSEMA / CHRONIC BRONCHITIS)',
    blocks: [
      {
        id: 'r6-lead',
        type: 'lead',
        text: 'COPD is suspected with chronic cough and shortness of breath in smokers or former smokers, but it is only confirmed with spirometry. The GOLD 2026 report changes the approach: treat early, do not wait to worsen.',
      },
      {
        id: 'r6-cards',
        type: 'cards',
        dense: true,
        items: [
          {
            title: '#1 · The official guideline — GOLD',
            text: 'GOLD 2026 Report (Global Initiative for Chronic Obstructive Lung Disease) · Classifies patients into groups A/B/E and guides everything: from the initial inhaler to rehabilitation · goldcopd.org (free report and pocket guide)',
          },
          {
            title: '#2 · How to use it as a patient',
            text: 'Ask for yearly spirometry and ask which group (A, B or E) you are in — that defines your treatment · The 2026 report adds biologic therapies for eosinophilic COPD: if you have repeated flare-ups, ask if you qualify',
          },
          {
            title: '#3 · What to ask at your visit',
            text: 'Was my eosinophil count measured? It defines whether an inhaled corticosteroid helps me · Am I due for pulmonary rehabilitation? The guideline treats it as treatment, not a luxury · Am I up to date on vaccines (flu, pneumococcus, COVID)?',
          },
        ],
      },
    ],
    alertText: 'Sudden worsening of breathlessness, coughing blood, fever with green sputum, confusion → emergency · Blue lips = 911.',
    note: 'Guideline: GOLD 2026 · Spanish: partial · Verified: Oct 2026',
  },
  {
    id: 'r7',
    badge: 'KIDNEY',
    eyebrow: 'OFFICIAL SOURCE No. 7',
    headlineA: 'CHRONIC KIDNEY',
    headlineB: 'DISEASE',
    blocks: [
      {
        id: 'r7-lead',
        type: 'lead',
        text: 'Kidneys fail silently: it is detected with two simple tests (creatinine for filtration and urine protein) that many patients never get. Detected early, its progression can be slowed.',
      },
      {
        id: 'r7-cards',
        type: 'cards',
        dense: true,
        items: [
          {
            title: '#1 · The official guideline — KDIGO',
            text: '2024 Clinical Practice Guideline for CKD (Kidney Disease: Improving Global Outcomes) · Classifies the disease by stages (G1–G5) and defines treatment for each · kdigo.org (free PDF, Spanish available)',
          },
          {
            title: '#2 · How to use it as a patient',
            text: 'Ask for two numbers at every visit: your eGFR (filtration) and your urine albumin/creatinine ratio · The 2024 guideline makes SGLT2 inhibitors standard for the kidney, even without diabetes: if no one has offered them, ask',
          },
          {
            title: '#3 · What to ask at your visit',
            text: 'What is my KDIGO stage? · Should I take an SGLT2 inhibitor for my kidney? · Which medications should I avoid? (NSAIDs like ibuprofen damage kidneys) · At what eGFR will I be referred to nephrology? (guideline: <30)',
          },
        ],
      },
    ],
    alertText: 'Almost no urine, sudden swelling of legs/eyelids, persistent nausea or ammonia breath (uremia) → urgent visit · High potassium on a lab result = call the same day.',
    note: 'Guideline: KDIGO 2024 · Spanish: yes · Verified: Oct 2026',
  },
  {
    id: 'r8',
    badge: 'MENTAL HEALTH',
    eyebrow: 'OFFICIAL SOURCE No. 8',
    headlineA: 'DEPRESSION',
    headlineB: '(MAJOR DEPRESSIVE DISORDER)',
    blocks: [
      {
        id: 'r8-lead',
        type: 'lead',
        text: 'Depression is a medical illness with solid-evidence treatments (therapy, medication or both), not a character weakness. The guideline defines which option comes first based on severity.',
      },
      {
        id: 'r8-cards',
        type: 'cards',
        dense: true,
        items: [
          {
            title: '#1 · The official guideline — NICE',
            text: 'Depression in adults: treatment and management (NG222, NICE 2022, reviewed Jan 2026 — current) · In the US: APA · Plain-language patient version: nice.org.uk/guidance/ng222 (free)',
          },
          {
            title: '#2 · How to use it as a patient',
            text: 'The guideline separates mild from severe using the PHQ-9 questionnaire (<16 mild, ≥16 severe) · You can self-administer it free online and bring your score to the visit · Mild → therapy first · Severe → medication or combination',
          },
          {
            title: '#3 · What to ask at your visit',
            text: 'Does my PHQ-9 indicate therapy, medication or both per the guideline? · How many weeks to assess response? (guideline: 4–6) · If I do not respond, what is plan B? (the guideline requires it in writing)',
          },
        ],
      },
    ],
    alertText: 'Thoughts of harming yourself or that life is not worth living → *988* (crisis line, 24/7) and tell someone today. Do not wait for the scheduled visit.',
    note: 'Guideline: NICE NG222 (2022, reviewed 2026) · Spanish: no · Verified: Oct 2026',
  },
  {
    id: 'r9',
    badge: 'MENTAL HEALTH',
    eyebrow: 'OFFICIAL SOURCE No. 9',
    headlineA: 'ANXIETY',
    headlineB: '(GENERALIZED ANXIETY DISORDER)',
    blocks: [
      {
        id: 'r9-lead',
        type: 'lead',
        text: 'Constant worry you cannot control for months has a defined treatment: specific therapy, medication, or both. The guideline states exactly which comes first.',
      },
      {
        id: 'r9-cards',
        type: 'cards',
        dense: true,
        items: [
          {
            title: '#1 · The official guideline — NICE',
            text: 'Anxiety disorders (CG113, NICE, under active surveillance) · US complement: WFSBP · Patient version: nice.org.uk/guidance/cg113 (free)',
          },
          {
            title: '#2 · How to use it as a patient',
            text: 'For generalized anxiety the guideline recommends cognitive behavioral therapy as first choice; medication (SSRI/SNRI) is equally valid if you prefer a faster route · Any treatment must last ≥12 months after responding — stopping early is the #1 cause of relapse',
          },
          {
            title: '#3 · What to ask at your visit',
            text: 'Was I offered therapy, medication or both? The guideline lays out the options · What if the medication makes me more jittery in the first 2 weeks? (expected — do not stop) · What is the plan if I do not respond in 12 weeks?',
          },
        ],
      },
    ],
    alertText: 'Repeated panic attacks with fear of dying + total avoidance of leaving home → referral, not self-management · Anxiety with alcohol/drugs to calm down → tell your doctor without shame: it changes the treatment · Suicidal thoughts → 988.',
    note: 'Guideline: NICE CG113 (+WFSBP) · Spanish: no · Verified: Oct 2026',
  },
  {
    id: 'r10',
    badge: 'MUSCULOSKELETAL',
    eyebrow: 'OFFICIAL SOURCE No. 10',
    headlineA: 'OSTEOARTHRITIS',
    headlineB: '',
    blocks: [
      {
        id: 'r10-lead',
        type: 'lead',
        text: 'Osteoarthritis is mismanaged everywhere: unnecessary MRIs, bed rest and opioids when the evidence says the opposite — exercise, education and weight management first, always.',
      },
      {
        id: 'r10-cards',
        type: 'cards',
        dense: true,
        items: [
          {
            title: '#1 · The official guideline — ACR/Arthritis Foundation',
            text: '2019 Osteoarthritis Guideline (American College of Rheumatology / Arthritis Foundation) — current, under active surveillance · Central message: therapeutic exercise IS the treatment · rheumatology.org (free summary) · Spanish resources: arthritis.org/es',
          },
          {
            title: '#2 · How to use it as a patient',
            text: 'The guideline advises against MRI for typical osteoarthritis, bed rest and routine opioids · It recommends: supervised weight-bearing exercise (2–3 times/week), losing 5% of weight if applicable, topical NSAID before oral · If your plan does not mention exercise, it is outdated',
          },
          {
            title: '#3 · What to ask at your visit',
            text: 'Was I referred to physical therapy or an exercise program? The guideline puts it first · Can I use diclofenac gel instead of pills? · Is it time to consider hip/knee replacement? (guideline: pain limiting daily life despite treatment)',
          },
        ],
      },
    ],
    alertText: 'A hot, red, suddenly swollen joint (could be infection or gout, not osteoarthritis) → urgent visit · Night pain not relieved by changing position or unexplained weight loss → rule out another cause.',
    note: 'Guideline: ACR/Arthritis Foundation 2019 (current) · Spanish: partial (Arthritis Foundation) · Verified: Oct 2026',
  },
  {
    id: 'closing',
    badge: 'SOURCES',
    eyebrow: 'REFERENCES · ALL FREE',
    headlineA: 'OFFICIAL BODIES',
    headlineB: 'BY CONDITION.',
    blocks: [
      {
        id: 'close-check',
        type: 'checklist',
        items: [
          { text: 'Hypertension · Cholesterol → AHA/ACC — ahajournals.org · acc.org' },
          { text: 'Type 2 diabetes · Obesity → ADA Standards 2026 — diabetes.org/es' },
          { text: 'Asthma → GINA — ginasthma.org · COPD → GOLD — goldcopd.org' },
          { text: 'Kidney → KDIGO — kdigo.org (Spanish available)' },
          { text: 'Depression · Anxiety → NICE — nice.org.uk (patient versions)' },
          { text: 'Osteoarthritis → ACR / Arthritis Foundation — rheumatology.org · arthritis.org/es' },
        ],
      },
    ],
    alertText: 'Golden rule: if a resource shows no publication year or no responsible body, it is not a guideline — it is content. Go back to the primary source.',
    note: 'Each card states its guideline year and verification date. Semiannual review: April and October.',
  },
]
