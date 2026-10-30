import type { SlideData } from '@/types/slide'

/**
 * Versión en español de la baraja Top 100 (118 diapositivas).
 * Nombres de principios activos en DCI española; marcas comerciales
 * y dosis sin cambios.
 */
export const DECK_TOP100_ES: SlideData[] = [
  {
    "id": "cover",
    "badge": "REFERENCIA CLÍNICA",
    "eyebrow": "TOP 100 · ENFERMEDADES COMUNES",
    "headlineA": "PERFILES CLÍNICOS",
    "headlineB": "Y TRATAMIENTOS.",
    "blocks": [
      {
        "id": "cover-lead",
        "type": "lead",
        "text": "Los 100 diagnósticos más comunes con sus tratamientos rankeados, señales de alarma y base de evidencia — una diapositiva por enfermedad, lista para consultar."
      },
      {
        "id": "cover-stats",
        "type": "stats",
        "items": [
          {
            "value": "100",
            "label": "enfermedades con perfil clínico completo."
          },
          {
            "value": "300",
            "label": "tratamientos detallados: dosis, vía, duración y mecanismo."
          },
          {
            "value": "15",
            "label": "categorías clínicas, de infecciones a salud de la mujer."
          }
        ]
      }
    ],
    "note": "Material educativo de referencia. Verifica siempre con las guías clínicas vigentes y el criterio del médico o farmacéutico."
  },
  {
    "id": "summary",
    "badge": "RESUMEN",
    "eyebrow": "PANORAMA GENERAL",
    "headlineA": "CURABILIDAD DE LOS",
    "headlineB": "100 DIAGNÓSTICOS.",
    "blocks": [
      {
        "id": "sum-bars",
        "type": "bars",
        "items": [
          {
            "label": "CURABLE*",
            "value": "53",
            "text": "53"
          },
          {
            "label": "CONTROLABLE (CRÓNICA)",
            "value": "45",
            "text": "45"
          },
          {
            "label": "AUTOLIMITADA",
            "value": "8",
            "text": "2"
          }
        ]
      }
    ],
    "alertText": "Más de la mitad de estas enfermedades son *curables* — y casi todas tienen un tratamiento de primera línea bien establecido.",
    "note": "* Incluye condiciones curables por intervención definitiva (p. ej., cirugía). Datos de la hoja \"Summary\"."
  },
  {
    "id": "cat-1",
    "badge": "SECCIÓN",
    "eyebrow": "CATEGORÍA · 15 PERFILES",
    "headlineA": "INFECCIONES",
    "headlineB": "BACTERIANAS",
    "blocks": [
      {
        "id": "cat-1-stats",
        "type": "stats",
        "items": [
          {
            "value": "15",
            "label": "enfermedades en esta categoría (Nº 1–15)."
          },
          {
            "value": "15",
            "label": "curables."
          },
          {
            "value": "0",
            "label": "controlables o autolimitadas."
          }
        ]
      },
      {
        "id": "cat-1-lead",
        "type": "lead",
        "text": "Faringitis estreptocócica (faringitis por estreptococo), Otitis media aguda, Sinusitis bacteriana aguda, Neumonía adquirida en la comunidad, Tuberculosis, Infección urinaria no complicada (cistitis), Sífilis, Gonorrea, Infección por Chlamydia trachomatis, Enfermedad ulcerosa péptica asociada a H.…"
      }
    ]
  },
  {
    "id": "d1",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 1",
    "headlineA": "FARINGITIS ESTREPTOCÓCICA",
    "headlineB": "(FARINGITIS POR ESTREPTOCOCO)",
    "blocks": [
      {
        "id": "d1-lead",
        "type": "lead",
        "text": "Infección faríngea aguda por Streptococcus del grupo A (S. pyogenes), transmitida por gotitas respiratorias, con pico en niños de 5-15 años. Sin tratamiento puede desencadenar fiebre reumática aguda y glomerulonefritis posestreptocócica."
      },
      {
        "id": "d1-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Fenoximetilpenicilina (penicilina V) — o…",
            "text": "Pen-Vee K; amoxicilina: Amoxil\nPen V 500 mg (niños 250 mg); amoxicilina 500 mg (niños 50 mg/kg, máx. 1 g) · VO · Pen V 2-3 veces al día; amoxicilina 1-2 veces al día…"
          },
          {
            "title": "#2 · Cefalexina",
            "text": "Keflex\n500 mg (niños 25-50 mg/kg/día) · VO · 2 veces al día (niños dividido en 2-4 dosis) · 10 días"
          },
          {
            "title": "#3 · Azitromicina (o claritromicina)",
            "text": "Zithromax (Z-Pak); Biaxin\nAzitromicina 500 mg el día 1, luego 250 mg días 2-5; claritromicina 250 mg · VO · Azitromicina 1 vez al día; claritromicina 2 veces al día · 5 días…"
          }
        ]
      }
    ],
    "alertText": "Sialorrea (babear), trismus, voz ahogada tipo «papa caliente» (absceso periamigdalino); rigidez de cuello; deshidratación; exantema escarlatiniforme con toxicidad.",
    "note": "Evidencia: IDSA 2012 Group A Streptococcal Pharyngitis Guideline"
  },
  {
    "id": "d2",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 2",
    "headlineA": "OTITIS MEDIA AGUDA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d2-lead",
        "type": "lead",
        "text": "Infección bacteriana del oído medio, más frecuente en niños de 6-24 meses, típicamente tras una infección viral de las vías respiratorias altas. Principales patógenos: S. pneumoniae, H. influenzae no tipificable, M. catarrhalis."
      },
      {
        "id": "d2-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Amoxicilina",
            "text": "Amoxil\nNiños 80-90 mg/kg/día (máx. 3 g); adultos 500-875 mg · VO · Dividido 2 veces al día · 5-10 días (10 días si <2 años o grave)"
          },
          {
            "title": "#2 · Amoxicilina-clavulanato",
            "text": "Augmentin\nAdultos 875/125 mg; niños 90 mg/kg/día (formulación ES-600) · VO · 2 veces al día con alimentos · 7-10 días"
          },
          {
            "title": "#3 · Ceftriaxona",
            "text": "Rocephin\n1-2 g (niños 50 mg/kg, máx. 1 g) · IM o IV · 1 vez al día · 1-3 días"
          }
        ]
      }
    ],
    "alertText": "Sensibilidad o hinchazón mastoidea (mastoiditis), parálisis del nervio facial, meningismo, aspecto tóxico en lactantes.",
    "note": "Evidencia: AAP 2013 Clinical Practice Guideline for AOM"
  },
  {
    "id": "d3",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 3",
    "headlineA": "SINUSITIS",
    "headlineB": "BACTERIANA AGUDA",
    "blocks": [
      {
        "id": "d3-lead",
        "type": "lead",
        "text": "Complicación bacteriana de la rinoinusitis viral: se diagnostica cuando los síntomas persisten >10 días, son graves (fiebre ≥39 °C con secreción purulenta) o hay «doble empeoramiento». Mismos patógenos que la otitis media."
      },
      {
        "id": "d3-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Amoxicilina-clavulanato",
            "text": "Augmentin\n875/125 mg (niños 45 mg/kg/día) · VO · 2 veces al día con alimentos · 5-10 días (adultos típicamente 5-7)"
          },
          {
            "title": "#2 · Doxiciclina",
            "text": "Vibramycin, Doryx\n100 mg · VO · 2 veces al día (día 1: 100 mg 2 veces, luego 1-2 veces al día) · 5-10 días"
          },
          {
            "title": "#3 · Mometasona intranasal + irrigación con suero (…",
            "text": "Nasonex\nMometasona 100 mcg por fosa (2 atomizaciones de 50 mcg) · Intranasal · 1 vez al día · 2-4 semanas"
          }
        ]
      }
    ],
    "alertText": "Edema/eritema periorbitario, cambios visuales, oftalmoplejía (celulitis orbitaria), cefalea intensa o signos neurológicos (extensión intracraneal), tumefacción del hueso frontal (tumor de Pott).",
    "note": "Evidencia: IDSA 2012 Rhinosinusitis Guideline"
  },
  {
    "id": "d4",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 4",
    "headlineA": "NEUMONÍA ADQUIRIDA",
    "headlineB": "EN LA COMUNIDAD",
    "blocks": [
      {
        "id": "d4-lead",
        "type": "lead",
        "text": "Infección aguda del parénquima pulmonar adquirida fuera del hospital; S. pneumoniae es la causa bacteriana más común, con atípicos (Mycoplasma, Chlamydophila) y virus frecuentes. Gravedad estratificada con CURB-65 o PSI."
      },
      {
        "id": "d4-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Amoxicilina (ambulatorios sanos) — o…",
            "text": "Amoxil; Augmentin + Zithromax\nAmoxicilina 1 g; amox-clav 875/125 mg; azitromicina 500 mg día 1 luego 250 mg · VO · Amoxicilina 3 veces al día; amox-clav 2 veces al día;…"
          },
          {
            "title": "#2 · Levofloxacino o moxifloxacino (…",
            "text": "Levaquin; Avelox\nLevofloxacino 750 mg; moxifloxacino 400 mg · VO o IV · 1 vez al día · 5 días (levo) / 5-7 días (moxi)"
          },
          {
            "title": "#3 · Doxiciclina",
            "text": "Vibramycin\n100 mg · VO · 2 veces al día · 5-7 días"
          }
        ]
      }
    ],
    "alertText": "CURB-65 ≥2 (valorar ingreso), hipotensión, confusión, SpO2 <92%, infiltrados multilobares, sepsis.",
    "note": "Evidencia: Metlay et al., ATS/IDSA 2019 CAP Guideline (Am J Respir Crit Care Med)"
  },
  {
    "id": "d5",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 5",
    "headlineA": "TUBERCULOSIS",
    "headlineB": "",
    "blocks": [
      {
        "id": "d5-lead",
        "type": "lead",
        "text": "Infección crónica por Mycobacterium tuberculosis, generalmente pulmonar, transmitida por gotitas aéreas. La TB sensible a fármacos se cura con terapia multidroga; la monoterapia selecciona resistencia rápidamente."
      },
      {
        "id": "d5-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Esquema RIPE: isoniacida + rifampicina + …",
            "text": "INH: Nydrazid; RIF: Rifadin; PZA; EMB: Myambutol\nINH 300 mg (5 mg/kg); RIF 600 mg (10 mg/kg); PZA 25 mg/kg; EMB 15 mg/kg; + piridoxina 25-50 mg · VO · 1 vez al día · 2 meses RIPE (fase intensiva),…"
          },
          {
            "title": "#2 · Esquema de 4 meses: rifapentina + moxifloxacino…",
            "text": "Priftin; Avelox\nRifapentina por bandas de peso hasta 1,200 mg; moxifloxacino 400 mg; INH 300 mg; PZA según peso · VO · 1 vez al día · 8 semanas los 4, luego 9 semanas…"
          },
          {
            "title": "#3 · Terapia directamente observada + prueba de…",
            "text": "—\n— · — · — · Curso completo"
          }
        ]
      }
    ],
    "alertText": "Hemoptisis, meningitis (meningitis tuberculosa — emergencia), diseminación miliar, afectación vertebral (enfermedad de Pott), empeoramiento paradójico en coinfección VIH/TB (IRIS).",
    "note": "Evidencia: WHO Consolidated Guidelines on Tuberculosis, Module 4 (2022); CDC 2021 rifapentina-moxifloxacino MMWR"
  },
  {
    "id": "d6",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 6",
    "headlineA": "INFECCIÓN URINARIA NO",
    "headlineB": "COMPLICADA (CISTITIS)",
    "blocks": [
      {
        "id": "d6-lead",
        "type": "lead",
        "text": "Infección bacteriana de la vejiga, predominantemente por E. coli, muy común en mujeres en edad reproductiva. Cursa con disuria, frecuencia y urgencia; la ausencia de fiebre o dolor lumbar la distingue de la pielonefritis."
      },
      {
        "id": "d6-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Nitrofurantoína monohidrato/macrocristales",
            "text": "Macrobid\n100 mg · VO · 2 veces al día con alimentos · 5 días"
          },
          {
            "title": "#2 · Trimetoprim-sulfametoxazol",
            "text": "Bactrim DS, Septra DS\n160/800 mg (1 tableta DS) · VO · 2 veces al día · 3 días"
          },
          {
            "title": "#3 · Fosfomicina trometamol",
            "text": "Monurol\nSobre de 3 g disuelto en agua · VO · Dosis única · Dosis única"
          }
        ]
      }
    ],
    "alertText": "Fiebre, dolor lumbar, vómitos (pielonefritis), signos de sepsis, síntomas en hombres (siempre complicada), embarazo con pielonefritis.",
    "note": "Evidencia: IDSA 2011 Acute Uncomplicated Cystitis/Pyelonephritis Guideline"
  },
  {
    "id": "d7",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 7",
    "headlineA": "SÍFILIS",
    "headlineB": "",
    "blocks": [
      {
        "id": "d7-lead",
        "type": "lead",
        "text": "Infección sistémica por Treponema pallidum, transmitida sexualmente o verticalmente, con fases primaria (chancro), secundaria (exantema), latente y terciaria. La penicilina sigue siendo universalmente eficaz."
      },
      {
        "id": "d7-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Penicilina G benzatina",
            "text": "Bicillin L-A\n2.4 millones de unidades (enfermedad temprana); 2.4 MU semanal ×3 dosis (latente tardía/terciaria) · Intramuscular · Dosis única (temprana); semanal ×3 (tardía) ·…"
          },
          {
            "title": "#2 · Doxiciclina",
            "text": "Vibramycin\n100 mg · VO · 2 veces al día · 14 días (temprana); 28 días (latente tardía)"
          },
          {
            "title": "#3 · Ceftriaxona",
            "text": "Rocephin\n1-2 g · IM o IV · 1 vez al día · 10-14 días"
          }
        ]
      }
    ],
    "alertText": "Síntomas neurológicos/visuales/otológicos en cualquier fase (neurosífilis — requiere penicilina G acuosa IV 3-4 MU c/4h ×10-14 días), sífilis en el embarazo (riesgo congénito).",
    "note": "Evidencia: CDC STI Treatment Guidelines 2021 (MMWR)"
  },
  {
    "id": "d8",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 8",
    "headlineA": "GONORREA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d8-lead",
        "type": "lead",
        "text": "Infección por Neisseria gonorrhoeae que causa uretritis/cervicitis, a menudo asintomática en mujeres; puede causar enfermedad inflamatoria pélvica (EIP), infertilidad y enfermedad diseminada. La resistencia ha eliminado la mayoría de las opciones orales."
      },
      {
        "id": "d8-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Ceftriaxona",
            "text": "Rocephin\n500 mg (1 g si peso corporal ≥150 kg) · Intramuscular · Dosis única · Dosis única"
          },
          {
            "title": "#2 · Doxiciclina (se añade si no se descarta…",
            "text": "Vibramycin\n100 mg · VO · 2 veces al día · 7 días"
          },
          {
            "title": "#3 · Gentamicina + azitromicina (alergia/alternativa)",
            "text": "Garamycin; Zithromax\nGentamicina 240 mg IM una vez + azitromicina 2 g VO una vez · IM + VO · Dosis única · Dosis única"
          }
        ]
      }
    ],
    "alertText": "EIP (dolor pélvico, fiebre), infección diseminada por gonococo (tenosinovitis, dermatitis, artritis), epididimitis, complicaciones del embarazo.",
    "note": "Evidencia: CDC STI Treatment Guidelines 2021"
  },
  {
    "id": "d9",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 9",
    "headlineA": "INFECCIÓN POR",
    "headlineB": "CHLAMYDIA TRACHOMATIS",
    "blocks": [
      {
        "id": "d9-lead",
        "type": "lead",
        "text": "La ITS bacteriana más común en el mundo; con frecuencia asintomática, especialmente en mujeres. Sin tratamiento causa enfermedad inflamatoria pélvica, embarazo ectópico e infertilidad."
      },
      {
        "id": "d9-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Doxiciclina",
            "text": "Vibramycin, Doryx\n100 mg · VO · 2 veces al día · 7 días"
          },
          {
            "title": "#2 · Azitromicina",
            "text": "Zithromax\n1 g · VO · Dosis única · Dosis única"
          },
          {
            "title": "#3 · Levofloxacino",
            "text": "Levaquin\n500 mg · VO · 1 vez al día · 7 días"
          }
        ]
      }
    ],
    "alertText": "Síntomas de EIP (dolor pélvico, fiebre, dispareunia), epididimo-orquitis en hombres, artritis reactiva (síndrome de Reiter).",
    "note": "Evidencia: CDC STI Treatment Guidelines 2021"
  },
  {
    "id": "d10",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 10",
    "headlineA": "ENFERMEDAD ULCEROSA PÉPTICA",
    "headlineB": "ASOCIADA A H. PYLORI",
    "blocks": [
      {
        "id": "d10-lead",
        "type": "lead",
        "text": "Infección gástrica crónica por Helicobacter pylori que causa gastritis, úlceras pépticas y aumenta el riesgo de cáncer gástrico. La erradicación cura las úlceras y previene la recurrencia."
      },
      {
        "id": "d10-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Triple con claritromicina: omeprazol +…",
            "text": "Prilosec + Biaxin + Amoxil\nOmeprazol 20-40 mg; claritromicina 500 mg; amoxicilina 1,000 mg · VO · Todos 2 veces al día · 14 días"
          },
          {
            "title": "#2 · Cuádruple con bismuto: IBP + bismuto…",
            "text": "Prilosec + Pepto-Bismol + Achromycin + Flagyl\nIBP dosis estándar 2 veces/día; bismuto 525 mg (2 tabs); tetraciclina 500 mg; metronidazol 500 mg · VO · IBP 2 veces al día; bismuto y tetraciclina 4…"
          },
          {
            "title": "#3 · Triple con levofloxacino: IBP + levo…",
            "text": "Prilosec + Levaquin + Amoxil\nIBP dosis estándar 2 veces/día; levofloxacino 500 mg; amoxicilina 1 g · VO · IBP/amoxicilina 2 veces al día; levofloxacino 1 vez al día · 10-14 días"
          }
        ]
      }
    ],
    "alertText": "Sangrado digestivo (melena, hematemesis), perforación (dolor abdominal súbito e intenso), obstrucción de la salida gástrica, pérdida de peso no intencional (malignidad).",
    "note": "Evidencia: ACG 2024 H. pylori Guideline; Maastricht VI/Florence Consensus; Graham et al., Gastroenterology 1992 (triple therapy evidence…"
  },
  {
    "id": "d11",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 11",
    "headlineA": "ENFERMEDAD DE LYME (FASE",
    "headlineB": "INICIAL LOCALIZADA)",
    "blocks": [
      {
        "id": "d11-lead",
        "type": "lead",
        "text": "Infección transmitida por garrapatas Ixodes, causada por Borrelia burgdorferi; su marca distintiva es el eritema migratorio. El tratamiento temprano previene la diseminación articular, cardíaca y neurológica."
      },
      {
        "id": "d11-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Doxiciclina",
            "text": "Vibramycin\n100 mg · VO · 2 veces al día · 10 días"
          },
          {
            "title": "#2 · Amoxicilina",
            "text": "Amoxil\n500 mg · VO · 3 veces al día · 14 días"
          },
          {
            "title": "#3 · Cefuroxima axetilo",
            "text": "Ceftin\n500 mg · VO · 2 veces al día · 14 días"
          }
        ]
      }
    ],
    "alertText": "Parálisis del nervio facial, meningitis, bloqueo cardíaco (carditis), artritis de grandes articulaciones — la enfermedad diseminada puede requerir ceftriaxona IV 2 g diarios ×14-28 días.",
    "note": "Evidencia: IDSA/AAN/ACR 2020 Lyme Disease Guideline"
  },
  {
    "id": "d12",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 12",
    "headlineA": "CELULITIS",
    "headlineB": "",
    "blocks": [
      {
        "id": "d12-lead",
        "type": "lead",
        "text": "Infección bacteriana aguda de la dermis y el tejido subcutáneo, generalmente por estreptococos (no purulenta) o S. aureus incluido MRSA (purulenta). Cursa con eritema en expansión, calor y sensibilidad."
      },
      {
        "id": "d12-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Cefalexina (celulitis no purulenta)",
            "text": "Keflex\n500 mg · VO · 4 veces al día · 5-7 días"
          },
          {
            "title": "#2 · TMP-SMX o doxiciclina (purulenta / riesgo…",
            "text": "Bactrim DS; Vibramycin\nTMP-SMX 1-2 tabletas DS; doxiciclina 100 mg · VO · 2 veces al día · 5-7 días"
          },
          {
            "title": "#3 · Clindamicina",
            "text": "Cleocin\n300-450 mg · VO · 4 veces al día · 5-7 días"
          }
        ]
      }
    ],
    "alertText": "Dolor que progresa rápidamente desproporcionado, ampollas, necrosis cutánea, crepitación (fasciitis necrotizante — emergencia quirúrgica), fiebre/hipotensión (sepsis).",
    "note": "Evidencia: IDSA 2014 Skin and Soft Tissue Infection Guideline"
  },
  {
    "id": "d13",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 13",
    "headlineA": "TOS FERINA",
    "headlineB": "(PERTUSSIS)",
    "blocks": [
      {
        "id": "d13-lead",
        "type": "lead",
        "text": "Infección respiratoria muy contagiosa por Bordetella pertussis que causa tos paroxística con inspiración en «ganido», especialmente peligrosa en lactantes <6 meses. Los antibióticos tempranos reducen la transmisión."
      },
      {
        "id": "d13-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Azitromicina",
            "text": "Zithromax\nAdultos 500 mg día 1 luego 250 mg; lactantes/niños 10 mg/kg/día · VO · 1 vez al día · 5 días"
          },
          {
            "title": "#2 · Claritromicina",
            "text": "Biaxin\nAdultos 500 mg; niños 15 mg/kg/día · VO · 2 veces al día · 7 días (adultos 14 días según algunas guías)"
          },
          {
            "title": "#3 · Trimetoprim-sulfametoxazol",
            "text": "Bactrim\nAdultos 160/800 mg DS; niños 8/40 mg/kg/día · VO · 2 veces al día · 14 días"
          }
        ]
      }
    ],
    "alertText": "Apnea, cianosis o dificultad para alimentarse en lactantes (ingresar), neumonía, convulsiones/encefalopatía.",
    "note": "Evidencia: CDC Pertussis Clinical Guidance; AAP Red Book"
  },
  {
    "id": "d14",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 14",
    "headlineA": "CÓLERA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d14-lead",
        "type": "lead",
        "text": "Diarrea secretora aguda causada por la toxina de Vibrio cholerae, contraída por agua contaminada. La pérdida masiva de fluidos (heces «agua de arroz») puede ser mortal en horas; la rehidratación es el tratamiento definitivo."
      },
      {
        "id": "d14-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Suero de rehidratación oral (OMS baja…",
            "text": "Sobres SRO OMS\nSRO 50-100 mL/kg en las primeras 4 h (deshidratación moderada), luego reponer pérdidas continuas; grave: Ringer lactato 100 mL/kg IV en las primeras 3-6 h · VO…"
          },
          {
            "title": "#2 · Doxiciclina",
            "text": "Vibramycin\n300 mg · VO · Dosis única · Dosis única"
          },
          {
            "title": "#3 · Azitromicina",
            "text": "Zithromax\nAdultos 1 g; niños 20 mg/kg · VO · Dosis única · Dosis única"
          }
        ]
      }
    ],
    "alertText": "Shock, letargo, ausencia de orina, calambres musculares intensos — requieren rehidratación IV agresiva inmediata.",
    "note": "Evidencia: WHO Cholera Outbreak: Assessing the Outbreak Response; CDC Cholera Treatment guidance"
  },
  {
    "id": "d15",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 15",
    "headlineA": "FIEBRE TIFOIDEA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d15-lead",
        "type": "lead",
        "text": "Infección sistémica por Salmonella enterica serotipo Typhi, adquirida por alimentos/agua contaminados, que causa fiebre sostenida, dolor abdominal y bacteriemia. La resistencia a fluoroquinolonas ha transformado el tratamiento."
      },
      {
        "id": "d15-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Ceftriaxona",
            "text": "Rocephin\nAdultos 2 g; niños 50-75 mg/kg · IV o IM · 1 vez al día · 7-14 días (grave/complicada 10-14)"
          },
          {
            "title": "#2 · Azitromicina",
            "text": "Zithromax\nAdultos 1 g día 1 luego 500 mg (o 500 mg durante todo); niños 10-20 mg/kg · VO · 1 vez al día · 7 días"
          },
          {
            "title": "#3 · Ciprofloxacino (solo si cepa sensible)",
            "text": "Cipro\n500 mg (o 400 mg IV) · VO o IV · 2 veces al día · 7 días"
          }
        ]
      }
    ],
    "alertText": "Perforación intestinal (dolor abdominal súbito, peritonitis — semana 2-3), sangrado digestivo, encefalopatía, shock.",
    "note": "Evidencia: WHO Typhoid Clinical Guidance; CDC Yellow Book Typhoid chapter"
  },
  {
    "id": "cat-16",
    "badge": "SECCIÓN",
    "eyebrow": "CATEGORÍA · 8 PERFILES",
    "headlineA": "INFECCIONES VIRALES",
    "headlineB": "",
    "blocks": [
      {
        "id": "cat-16-stats",
        "type": "stats",
        "items": [
          {
            "value": "8",
            "label": "enfermedades en esta categoría (Nº 16–23)."
          },
          {
            "value": "4",
            "label": "curables."
          },
          {
            "value": "4",
            "label": "controlables o autolimitadas."
          }
        ]
      },
      {
        "id": "cat-16-lead",
        "type": "lead",
        "text": "Hepatitis C, Influenza (gripe), COVID-19, Herpes zóster (culebrilla), Herpes genital (HSV-2), Varicela, Infección por VIH, Hepatitis B"
      }
    ]
  },
  {
    "id": "d16",
    "badge": "INFECCIONES VIRALES",
    "eyebrow": "PERFIL CLÍNICO Nº 16",
    "headlineA": "HEPATITIS C",
    "headlineB": "",
    "blocks": [
      {
        "id": "d16-lead",
        "type": "lead",
        "text": "Infección crónica transmitida por sangre del virus de la hepatitis C, que causa fibrosis hepática progresiva, cirrosis y carcinoma hepatocelular. Los antivirales de acción directa curan a >95% de los pacientes en 8-12 semanas."
      },
      {
        "id": "d16-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Sofosbuvir/velpatasvir",
            "text": "Epclusa\n400/100 mg (una tableta) · VO · 1 vez al día con o sin alimentos · 12 semanas (8 semanas en casos seleccionados sin cirrosis según algunas guías)"
          },
          {
            "title": "#2 · Glecaprevir/pibrentasvir",
            "text": "Mavyret\n300/120 mg (tres tabletas de 100/40 mg) · VO · 1 vez al día con alimentos · 8 semanas (sin tratamiento previo, sin cirrosis o cirrosis compensada)"
          },
          {
            "title": "#3 · Sofosbuvir + daclatasvir",
            "text": "Sovaldi + Daklinza\n400 mg + 60 mg · VO · 1 vez al día · 12 semanas"
          }
        ]
      }
    ],
    "alertText": "Cirrosis descompensada (ascitis, encefalopatía, sangrado variceal) — requiere esquemas especializados ± ribavirina; coinfección con VHB (riesgo de reactivación — tamizar HBsAg/anti-HBc antes de AAD).",
    "note": "Evidencia: AASLD/IDSA HCV Guidance; Backus et al., Hepatology 2018 (SVR reduces mortality)"
  },
  {
    "id": "d17",
    "badge": "INFECCIONES VIRALES",
    "eyebrow": "PERFIL CLÍNICO Nº 17",
    "headlineA": "INFLUENZA (GRIPE)",
    "headlineB": "",
    "blocks": [
      {
        "id": "d17-lead",
        "type": "lead",
        "text": "Infección respiratoria aguda por virus influenza A/B que causa fiebre, mialgias y tos; las epidemias estacionales causan mortalidad significativa en adultos mayores y grupos de riesgo."
      },
      {
        "id": "d17-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Oseltamivir",
            "text": "Tamiflu\n75 mg (niños según peso: ≤15 kg 30 mg, >15-23 kg 45 mg, >23-40 kg 60 mg) · VO · 2 veces al día · 5 días"
          },
          {
            "title": "#2 · Baloxavir marboxil",
            "text": "Xofluza\n40 mg (40-80 kg) u 80 mg (≥80 kg) · VO · Dosis única · Dosis única"
          },
          {
            "title": "#3 · Zanamivir (o vacunación anual contra la…",
            "text": "Relenza (inhalado); Fluzone, Fluarix, etc.\nZanamivir 10 mg (dos inhalaciones de 5 mg); vacuna 0.5 mL IM anual · Inhalado / IM · 2 veces al día (zanamivir); anual (vacuna) · 5 días…"
          }
        ]
      }
    ],
    "alertText": "Disnea, dolor torácico, fiebre alta persistente, confusión, SpO2 <94% — neumonía secundaria o influenza grave que requiere hospitalización.",
    "note": "Evidencia: CDC Influenza Antiviral Guidance; IDSA 2018 Seasonal Influenza Guideline"
  },
  {
    "id": "d18",
    "badge": "INFECCIONES VIRALES",
    "eyebrow": "PERFIL CLÍNICO Nº 18",
    "headlineA": "COVID-19",
    "headlineB": "",
    "blocks": [
      {
        "id": "d18-lead",
        "type": "lead",
        "text": "Infección respiratoria por SARS-CoV-2 que va de asintomática a neumonía grave y enfermedad multisistémica. Los antivirales ambulatorios reducen la progresión en pacientes de alto riesgo."
      },
      {
        "id": "d18-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Nirmatrelvir/ritonavir",
            "text": "Paxlovid\n300/100 mg (dos + una tabletas); insuficiencia renal 150/100 mg · VO · 2 veces al día · 5 días, iniciar dentro de los 5 días de síntomas"
          },
          {
            "title": "#2 · Remdesivir",
            "text": "Veklury\n200 mg día 1, luego 100 mg · IV · 1 vez al día · 3 días (ambulatorio), iniciar dentro de 7 días"
          },
          {
            "title": "#3 · Molnupiravir",
            "text": "Lagevrio\n800 mg · VO · 2 veces al día · 5 días, dentro de los 5 días de síntomas"
          }
        ]
      }
    ],
    "alertText": "SpO2 ≤94%, disnea en reposo, confusión, presión torácica persistente — valoración hospitalaria (puede requerir oxígeno, dexametasona o baricitinib/tocilizumab).",
    "note": "Evidencia: NIH COVID-19 Treatment Guidelines; EPIC-HR (Hammond et al., NEJM 2022)"
  },
  {
    "id": "d19",
    "badge": "INFECCIONES VIRALES",
    "eyebrow": "PERFIL CLÍNICO Nº 19",
    "headlineA": "HERPES ZÓSTER",
    "headlineB": "(CULEBRILLA)",
    "blocks": [
      {
        "id": "d19-lead",
        "type": "lead",
        "text": "Reactivación del virus varicela-zóster de los ganglios de la raíz dorsal, causando un exantema vesicular doloroso en dermatoma, típicamente en adultos mayores o inmunocomprometidos. Complicación principal: neuralgia postherpética (NPH)."
      },
      {
        "id": "d19-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Valaciclovir (o aciclovir)",
            "text": "Valtrex; Zovirax\nValaciclovir 1,000 mg; aciclovir 800 mg · VO · Valaciclovir 3 veces al día; aciclovir 5 veces al día · 7 días (iniciar dentro de las 72 h del inicio del exantema)"
          },
          {
            "title": "#2 · Analgesia: acetaminofén/AINE ± gabapentina o…",
            "text": "Tylenol; Neurontin; Lyrica\nGabapentina 300 mg día 1, titular hasta 900-3,600 mg/día; pregabalina 75-300 mg/día · VO · Gabapentina 3 veces al día; pregabalina 2-3 veces al día ·…"
          },
          {
            "title": "#3 · Vacuna recombinante contra zóster (prevención)",
            "text": "Shingrix\n0.5 mL · Intramuscular · 2 dosis, separadas 2-6 meses · Esquema de dos dosis"
          }
        ]
      }
    ],
    "alertText": "Afectación ocular (herpes zóster oftálmico — oftalmología urgente), exantema diseminado (>20 lesiones fuera del dermatoma) en inmunocomprometidos, debilidad motora, Ramsay Hunt (oído + parálisis facial).",
    "note": "Evidencia: CDC Shingles Clinical Guidance; Shingrix efficacy: Lal et al., NEJM 2015"
  },
  {
    "id": "d20",
    "badge": "INFECCIONES VIRALES",
    "eyebrow": "PERFIL CLÍNICO Nº 20",
    "headlineA": "HERPES GENITAL",
    "headlineB": "(HSV-2)",
    "blocks": [
      {
        "id": "d20-lead",
        "type": "lead",
        "text": "Infección crónica recurrente por virus del herpes simple tipo 2 (o 1) que causa vesículas/úlceras genitales dolorosas. El virus persiste latente en ganglios sensitivos; el tratamiento suprime pero no erradica."
      },
      {
        "id": "d20-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Valaciclovir",
            "text": "Valtrex\nPrimer episodio 1 g; recurrencias 500 mg; supresión 500 mg-1 g diarios · VO · Primer episodio 2 veces al día ×7-10 d; recurrencia 2 veces al día ×3 d;…"
          },
          {
            "title": "#2 · Aciclovir",
            "text": "Zovirax\nPrimer episodio 400 mg; recurrencia 400 mg; supresión 400 mg 2 veces/día · VO · Primer episodio 3 veces al día ×7-10 d; recurrencia 3 veces/día ×5 d; supresión…"
          },
          {
            "title": "#3 · Famciclovir",
            "text": "Famvir\nPrimer episodio 250 mg 3 veces/día ×7-10 d; recurrencia 1 g 2 veces/día ×1 día; supresión 250 mg 2 veces/día · VO · Según indicación · Variable"
          }
        ]
      }
    ],
    "alertText": "Meningitis aséptica, retención urinaria (radiculopatía sacra), primer episodio grave en el embarazo (riesgo de transmisión neonatal), enfermedad diseminada en inmunocomprometidos.",
    "note": "Evidencia: CDC STI Treatment Guidelines 2021"
  },
  {
    "id": "d21",
    "badge": "INFECCIONES VIRALES",
    "eyebrow": "PERFIL CLÍNICO Nº 21",
    "headlineA": "VARICELA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d21-lead",
        "type": "lead",
        "text": "Infección primaria por el virus varicela-zóster que causa exantema vesicular generalizado y fiebre; benigna en niños sanos pero más grave en adultos, embarazadas e inmunocomprometidos."
      },
      {
        "id": "d21-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Cuidados de soporte: acetaminofén + antipruríticos…",
            "text": "Tylenol; Benadryl (difenhidramina 25-50 mg)\nAcetaminofén 500-1,000 mg; difenhidramina 25-50 mg · VO / tópica · Acetaminofén c/4-6 h (máx. 3-4 g/día); difenhidramina c/6 h ·…"
          },
          {
            "title": "#2 · Aciclovir (pacientes de alto riesgo)",
            "text": "Zovirax\nAdultos 800 mg; niños ≥2 años 20 mg/kg (máx. 800 mg) · VO · Adultos 5 veces al día ×5 d; niños 4 veces al día ×5 d · 5 días, iniciar dentro de…"
          },
          {
            "title": "#3 · Vacuna contra varicela (prevención y pos…",
            "text": "Varivax (viva)\n0.5 mL · Subcutánea · 2 dosis a las 4-8 semanas; pos exposición dentro de 3-5 días · Esquema de dos dosis"
          }
        ]
      }
    ],
    "alertText": "Disnea/tos (neumonía por varicela — emergencia en adultos/embarazo), letargo o signos neurológicos, exantema hemorrágico, signos de sobreinfección cutánea, enfermedad en inmunocomprometidos o neonatos.",
    "note": "Evidencia: CDC Varicella Clinical Guidance; AAP Red Book"
  },
  {
    "id": "d22",
    "badge": "INFECCIONES VIRALES",
    "eyebrow": "PERFIL CLÍNICO Nº 22",
    "headlineA": "INFECCIÓN POR VIH",
    "headlineB": "",
    "blocks": [
      {
        "id": "d22-lead",
        "type": "lead",
        "text": "Infección retroviral crónica que destruye los linfocitos T CD4; sin tratamiento progresa a SIDA en ~8-10 años. La terapia antirretroviral (TARV) logra supresión viral duradera, esperanza de vida casi normal y elimina la transmisión sexual (U=U)."
      },
      {
        "id": "d22-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Bictegravir/tenofovir alafenamida/emtricitabina",
            "text": "Biktarvy\n50/25/200 mg (una tableta) · VO · 1 vez al día con o sin alimentos · De por vida"
          },
          {
            "title": "#2 · Dolutegravir + tenofovir + lamivudina (o…",
            "text": "Tivicay + Truvada; TLD (combinación genérica)\nDTG 50 mg + TDF 300/3TC 300 mg · VO · 1 vez al día · De por vida"
          },
          {
            "title": "#3 · Cabotegravir/rilpivirina de liberación prolongada",
            "text": "Cabenuva\nCAB 600 mg + RPV 900 mg · Intramuscular (glúteo) · Cada 1-2 meses tras fase oral inicial · De por vida"
          }
        ]
      }
    ],
    "alertText": "Infecciones oportunistas (CD4 <200: neumonía por PJP, toxoplasmosis, meningitis criptocócica), IRIS al iniciar TARV, síndrome de seroconversión.",
    "note": "Evidencia: DHHS Adult/Adolescent ART Guidelines; WHO 2021 Consolidated HIV Guidelines; PARTNER studies (U=U)"
  },
  {
    "id": "d23",
    "badge": "INFECCIONES VIRALES",
    "eyebrow": "PERFIL CLÍNICO Nº 23",
    "headlineA": "HEPATITIS B",
    "headlineB": "",
    "blocks": [
      {
        "id": "d23-lead",
        "type": "lead",
        "text": "Infección crónica por el virus de la hepatitis B transmitida perinatal, sexual o por sangre; causa hepatitis crónica, cirrosis y carcinoma hepatocelular. Los análogos nucleós(t)ídicos suprimen durablemente pero rara vez erradican (cccDNA…"
      },
      {
        "id": "d23-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Tenofovir disoproxilo fumarato o tenofovir…",
            "text": "Viread (TDF); Vemlidy (TAF)\nTDF 300 mg; TAF 25 mg · VO · 1 vez al día · Largo plazo (a menudo indefinido)"
          },
          {
            "title": "#2 · Entecavir",
            "text": "Baraclude\n0.5 mg (1 mg si resistente a lamivudina o descompensada) · VO · 1 vez al día en ayunas (2 h antes/después de alimentos) · Largo plazo"
          },
          {
            "title": "#3 · Interferón alfa-2a pegilado (pacientes…",
            "text": "Pegasys\n180 mcg · Subcutánea · 1 vez por semana · 48 semanas"
          }
        ]
      }
    ],
    "alertText": "Brote agudo con ictericia/elevación de INR (falla hepática aguda), signos de cirrosis descompensada (ascitis, sangrado variceal, encefalopatía), CHC en tamizaje.",
    "note": "Evidencia: AASLD 2018 HBV Guidance; WHO 2024 HBV Guidelines"
  },
  {
    "id": "cat-24",
    "badge": "SECCIÓN",
    "eyebrow": "CATEGORÍA · 5 PERFILES",
    "headlineA": "INFECCIONES FÚNGICAS",
    "headlineB": "",
    "blocks": [
      {
        "id": "cat-24-stats",
        "type": "stats",
        "items": [
          {
            "value": "5",
            "label": "enfermedades en esta categoría (Nº 24–28)."
          },
          {
            "value": "5",
            "label": "curables."
          },
          {
            "value": "0",
            "label": "controlables o autolimitadas."
          }
        ]
      },
      {
        "id": "cat-24-lead",
        "type": "lead",
        "text": "Tiña del pie/cuerpo (pie de atleta, tiña corporal), Onicomicosis (hongos en las uñas), Candidiasis mucosa (aftas/boca y candidiasis vaginal), Tiña del cuero cabelludo, Pitiriasis versicolor"
      }
    ]
  },
  {
    "id": "d24",
    "badge": "INFECCIONES FÚNGICAS",
    "eyebrow": "PERFIL CLÍNICO Nº 24",
    "headlineA": "TIÑA DEL PIE/CUERPO (PIE",
    "headlineB": "DE ATLETA, TIÑA CORPORAL)",
    "blocks": [
      {
        "id": "d24-lead",
        "type": "lead",
        "text": "Infección superficial por dermatofitos en los pies (pedis) o el cuerpo (corporis) que causa picor, descamación y lesiones anulares; se transmite por contacto y fómites."
      },
      {
        "id": "d24-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Terbinafina 1% crema",
            "text": "Lamisil AT\nAplicar capa fina en el área afectada + 2 cm de margen · Tópica · 1-2 veces al día · 1-2 semanas (continuar 1 semana tras la resolución)"
          },
          {
            "title": "#2 · Clotrimazol 1% crema (o miconazol 2%)",
            "text": "Lotrimin AF; Micatin\nAplicar en el área afectada · Tópica · 2 veces al día · 2-4 semanas"
          },
          {
            "title": "#3 · Terbinafina 250 mg o itraconazol 200 mg…",
            "text": "Lamisil; Sporanox\nTerbinafina 250 mg; itraconazol 200 mg · VO · Terbinafina 1 vez al día; itraconazol 1-2 veces al día · Terbinafina 2 semanas; itraconazol 1…"
          }
        ]
      }
    ],
    "alertText": "Celulitis bacteriana secundaria, querion (lesión costrosa del cuero cabelludo — requiere terapia oral), granuloma de Majocchi (infección folicular profunda), inmunocomprometido con enfermedad en expansión.",
    "note": "Evidencia: Cochrane Review: Topical treatments for tinea pedis/corporis"
  },
  {
    "id": "d25",
    "badge": "INFECCIONES FÚNGICAS",
    "eyebrow": "PERFIL CLÍNICO Nº 25",
    "headlineA": "ONICOMICOSIS",
    "headlineB": "(HONGOS EN LAS UÑAS)",
    "blocks": [
      {
        "id": "d25-lead",
        "type": "lead",
        "text": "Infección por dermatofitos (mayormente Trichophyton rubrum) de la placa ungueal que causa engrosamiento, decoloración y fragilidad; difícil de curar porque el fármaco debe penetrar el lecho ungueal."
      },
      {
        "id": "d25-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Terbinafina",
            "text": "Lamisil\n250 mg · VO · 1 vez al día · 6 semanas (uñas de manos) / 12 semanas (uñas de pies)"
          },
          {
            "title": "#2 · Itraconazol en pauta pulsada",
            "text": "Sporanox\n200 mg · VO · 2 veces al día durante 1 semana por mes · 2 pulsos (manos) / 3 pulsos (pies)"
          },
          {
            "title": "#3 · Efinaconazol 10% solución (o tavaborol 5%)",
            "text": "Jublia; Kerydin\nAplicar en la uña afectada diariamente · Tópica · 1 vez al día · 48 semanas"
          }
        ]
      }
    ],
    "alertText": "Nada urgente; los diabéticos con onicomicosis grave tienen mayor riesgo de úlceras/celulitis.",
    "note": "Evidencia: AAFP/Cochrane Onychomycosis Reviews; British Association of Dermatologists Guideline"
  },
  {
    "id": "d26",
    "badge": "INFECCIONES FÚNGICAS",
    "eyebrow": "PERFIL CLÍNICO Nº 26",
    "headlineA": "CANDIDIASIS MUCOSA (AFTAS/BOCA",
    "headlineB": "Y CANDIDIASIS VAGINAL)",
    "blocks": [
      {
        "id": "d26-lead",
        "type": "lead",
        "text": "Sobrecrecimiento de Candida albicans en mucosa oral o vaginal, favorecido por antibióticos, diabetes, embarazo, esteroides o inmunosupresión; causa placas blancas (oral) o picor/secreción (vaginal)."
      },
      {
        "id": "d26-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Fluconazol",
            "text": "Diflucan\nVaginal: 150 mg dosis única (recurrente: 150 mg c/72h ×3, luego semanal ×6 meses); aftas orales: 200 mg día 1 luego 100-200 mg · VO · Dosis única…"
          },
          {
            "title": "#2 · Azoles tópicos (clotrimazol/miconazol) o nistatina",
            "text": "Gyne-Lotrimin, Monistat; Mycostatin\nVaginal: óvulo de clotrimazol 100 mg; oral: suspensión de nistatina 400,000-600,000 unidades (4-6 mL) · Intravaginal / VO (enjuagar y tragar) ·…"
          },
          {
            "title": "#3 · Ácido bórico 600 mg cápsula vaginal…",
            "text": "Magistral\n600 mg · Intravaginal · 1 vez al día · 14 días (inducción)"
          }
        ]
      }
    ],
    "alertText": "Disfagia/odinofagia (candidiasis esofágica — requiere terapia sistémica y prueba de VIH), inmunocomprometido con enfermedad diseminada.",
    "note": "Evidencia: CDC STI Treatment Guidelines 2021; IDSA 2016 Candidiasis Guideline"
  },
  {
    "id": "d27",
    "badge": "INFECCIONES FÚNGICAS",
    "eyebrow": "PERFIL CLÍNICO Nº 27",
    "headlineA": "TIÑA DEL CUERO",
    "headlineB": "CABELLUDO",
    "blocks": [
      {
        "id": "d27-lead",
        "type": "lead",
        "text": "Infección por dermatofitos de los folículos pilosos del cuero cabelludo, principalmente en niños, que causa descamación, pérdida de cabello y a veces querion. La terapia oral es obligatoria — los tópicos no penetran los folículos."
      },
      {
        "id": "d27-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Griseofulvina",
            "text": "Gris-PEG (microsize: Grifulvin)\nMicrosize 20-25 mg/kg/día (niños); ultramicrosize 10-15 mg/kg/día; adultos 500-1,000 mg/día · VO · 1 vez al día con alimentos grasos (absorción) ·…"
          },
          {
            "title": "#2 · Terbinafina",
            "text": "Lamisil (gránulos para niños)\nNiños: <25 kg 125 mg, 25-35 kg 187.5 mg, >35 kg 250 mg; adultos 250 mg · VO · 1 vez al día · 4-6 semanas"
          },
          {
            "title": "#3 · Champú antifúngico adyuvante: ketoconazol 2% o…",
            "text": "Nizoral; Selsun\nAplicar en el cuero cabelludo · Tópica · 2-3 veces por semana · Durante la terapia oral"
          }
        ]
      }
    ],
    "alertText": "Querion (masa costrosa y dolorosa del cuero cabelludo con pústulas), adenopatía cervical con fiebre, riesgo de pérdida capilar permanente sin tratamiento.",
    "note": "Evidencia: AAP Red Book; Cochrane Tinea Capitis Review; British Association of Dermatologists Guideline"
  },
  {
    "id": "d28",
    "badge": "INFECCIONES FÚNGICAS",
    "eyebrow": "PERFIL CLÍNICO Nº 28",
    "headlineA": "PITIRIASIS",
    "headlineB": "VERSICOLOR",
    "blocks": [
      {
        "id": "d28-lead",
        "type": "lead",
        "text": "Sobrecrecimiento superficial de levadura Malassezia que causa manchas hip o hiperpigmentadas con descamación en tronco y hombros, desencadenado por calor/humedad; preocupación cosmética con recurrencia frecuente."
      },
      {
        "id": "d28-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Sulfuro de selenio 2.5% o ketoconazol 2% champú",
            "text": "Selsun; Nizoral\nAplicar en las áreas afectadas, hacer espuma, dejar 5-10 min, enjuagar · Tópica · Diaria · 1-2 semanas"
          },
          {
            "title": "#2 · Cremas de azoles tópicos (clotrimazol 1%,…",
            "text": "Lotrimin; crema Nizoral\nAplicar capa fina · Tópica · 1-2 veces al día · 2-4 semanas"
          },
          {
            "title": "#3 · Fluconazol o itraconazol (extensa/refractaria)",
            "text": "Diflucan; Sporanox\nFluconazol 300 mg semanal ×2-4 dosis; itraconazol 200 mg diario ×5-7 días · VO · Según pauta · 1-4 semanas"
          }
        ]
      }
    ],
    "alertText": "Ninguna — condición benigna; la presentación atípica amerita raspado para excluir otros diagnósticos.",
    "note": "Evidencia: AAFP Pityriasis Versicolor Review; Cochrane interventions review"
  },
  {
    "id": "cat-29",
    "badge": "SECCIÓN",
    "eyebrow": "CATEGORÍA · 9 PERFILES",
    "headlineA": "INFECCIONES",
    "headlineB": "PARASITARIAS",
    "blocks": [
      {
        "id": "cat-29-stats",
        "type": "stats",
        "items": [
          {
            "value": "9",
            "label": "enfermedades en esta categoría (Nº 29–37)."
          },
          {
            "value": "9",
            "label": "curables."
          },
          {
            "value": "0",
            "label": "controlables o autolimitadas."
          }
        ]
      },
      {
        "id": "cat-29-lead",
        "type": "lead",
        "text": "Malaria (paludismo) no complicada, Giardiasis, Ascariasis (lombrices), Oxiuriasis (enterobiasis), Sarna, Piojos (pediculosis), Infección por anquilostomas, Esquistosomiasis, Tricomoniasis…"
      }
    ]
  },
  {
    "id": "d29",
    "badge": "INFECCIONES PARASITARIAS",
    "eyebrow": "PERFIL CLÍNICO Nº 29",
    "headlineA": "MALARIA (PALUDISMO)",
    "headlineB": "NO COMPLICADA",
    "blocks": [
      {
        "id": "d29-lead",
        "type": "lead",
        "text": "Infección transmitida por mosquito de especies de Plasmodium (falciparum, la más letal) que causa fiebre cíclica, anemia y — en la enfermedad grave por falciparum — malaria cerebral y falla multiorgánica."
      },
      {
        "id": "d29-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Arteméter-lumefantrina (combinación con…",
            "text": "Coartem\nAdultos ≥35 kg: 80/480 mg (4 tabletas) por dosis; niños por bandas de peso 5-24 kg · VO · 2 veces al día (a las 0, 8, 24, 36, 48, 60 h) · 3 días (6…"
          },
          {
            "title": "#2 · Atovaquona-proguanilo",
            "text": "Malarone\nAdultos 1,000/400 mg (4 tabletas); niños por bandas de peso · VO · 1 vez al día con alimentos grasos · 3 días"
          },
          {
            "title": "#3 · Cloroquina (regiones sensibles) + primaquina (P.…",
            "text": "Aralen; Primaquine\nCloroquina 600 mg base, luego 300 mg a las 6, 24, 48 h; primaquina 30 mg base diarios ×14 días · VO · Según pauta · 4 días (cloroquina) + 14 días…"
          }
        ]
      }
    ],
    "alertText": "Conciencia alterada, convulsiones, anemia grave, hipoglucemia, ictericia, oliguria, dificultad respiratoria (malaria grave — artesunato IV de inmediato; mortalidad cercana a 100% sin tratamiento).",
    "note": "Evidencia: WHO Guidelines for Malaria (2023)"
  },
  {
    "id": "d30",
    "badge": "INFECCIONES PARASITARIAS",
    "eyebrow": "PERFIL CLÍNICO Nº 30",
    "headlineA": "GIARDIASIS",
    "headlineB": "",
    "blocks": [
      {
        "id": "d30-lead",
        "type": "lead",
        "text": "Infección del intestino delgado por Giardia duodenalis por agua contaminada, que causa diarrea, distensión y malabsorción; común en viajeros, excursionistas y guarderías."
      },
      {
        "id": "d30-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Tinidazol",
            "text": "Tindamax\n2 g (niños 50 mg/kg, máx. 2 g) · VO · Dosis única · Dosis única"
          },
          {
            "title": "#2 · Metronidazol",
            "text": "Flagyl\nAdultos 250-500 mg; niños 15 mg/kg/día · VO · 3 veces al día · 5-7 días"
          },
          {
            "title": "#3 · Nitazoxanida",
            "text": "Alinia\nAdultos 500 mg; niños según edad (100-200 mg) · VO · 2 veces al día · 3 días"
          }
        ]
      }
    ],
    "alertText": "Deshidratación grave, pérdida de peso significativa/retardo del crecimiento en niños, inmunocomprometido con infección crónica.",
    "note": "Evidencia: Cochrane Review: Drugs for treating giardiasis; CDC Parasites — Giardia"
  },
  {
    "id": "d31",
    "badge": "INFECCIONES PARASITARIAS",
    "eyebrow": "PERFIL CLÍNICO Nº 31",
    "headlineA": "ASCARIASIS",
    "headlineB": "(LOMBRICES)",
    "blocks": [
      {
        "id": "d31-lead",
        "type": "lead",
        "text": "Infección intestinal por Ascaris lumbricoides, el helminto más común del mundo (~800 millones de personas), adquirida por alimentos contaminados con tierra; las cargas pesadas causan desnutrición y obstrucción intestinal."
      },
      {
        "id": "d31-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Albendazol",
            "text": "Albenza\n400 mg (adultos y niños >2 años) · VO · Dosis única (con alimentos) · Dosis única"
          },
          {
            "title": "#2 · Mebendazol",
            "text": "Vermox\n100 mg 2 veces al día ×3 días, o 500 mg dosis única · VO · 2 veces al día ×3 días o dosis única · 1-3 días"
          },
          {
            "title": "#3 · Ivermectina",
            "text": "Stromectol\n150-200 mcg/kg · VO · Dosis única · Dosis única"
          }
        ]
      }
    ],
    "alertText": "Obstrucción intestinal o biliar (dolor cólico, vómitos — emergencia quirúrgica con cargas pesadas), pancreatitis, síndrome de Löffler (fase de migración pulmonar).",
    "note": "Evidencia: WHO Soil-Transmitted Helminth Guidelines; Cochrane deworming reviews"
  },
  {
    "id": "d32",
    "badge": "INFECCIONES PARASITARIAS",
    "eyebrow": "PERFIL CLÍNICO Nº 32",
    "headlineA": "OXIURIASIS",
    "headlineB": "(ENTEROBIASIS)",
    "blocks": [
      {
        "id": "d32-lead",
        "type": "lead",
        "text": "Infección por Enterobius vermicularis que causa picor perianal nocturno; el helminto más común en países desarrollados, se disemina fácilmente en hogares y escuelas."
      },
      {
        "id": "d32-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Mebendazol",
            "text": "Vermox\n100 mg (todas las edades >2 años) · VO · Dosis única, REPETIR a las 2 semanas · 2 dosis en total"
          },
          {
            "title": "#2 · Albendazol",
            "text": "Albenza\n400 mg · VO · Dosis única, repetir a las 2 semanas · 2 dosis"
          },
          {
            "title": "#3 · Pamoato de pirantel",
            "text": "Reese's Pinworm, Pin-X (OTC)\n11 mg/kg (máx. 1 g) · VO · Dosis única, repetir a las 2 semanas · 2 dosis"
          }
        ]
      }
    ],
    "alertText": "Nada grave; rara vulvovaginitis en niñas, asociación con apendicitis debatida.",
    "note": "Evidencia: CDC Parasites — Enterobiasis; AAP Red Book"
  },
  {
    "id": "d33",
    "badge": "INFECCIONES PARASITARIAS",
    "eyebrow": "PERFIL CLÍNICO Nº 33",
    "headlineA": "SARNA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d33-lead",
        "type": "lead",
        "text": "Infestación de la piel por el ácaro Sarcoptes scabiei que causa picor intenso nocturno y túneles en los espacios interdigitales, muñecas y genitales; se transmite por contacto prolongado con la piel."
      },
      {
        "id": "d33-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Permetrina 5% crema",
            "text": "Elimite\nAplicar en todo el cuerpo de cuello hacia abajo (incluir cuero cabelludo en lactantes/ancianos), lavar a las 8-14 h · Tópica · Aplicación única, REPETIR a los 7 días · 2…"
          },
          {
            "title": "#2 · Ivermectina",
            "text": "Stromectol\n200 mcg/kg · VO · Dosis única, REPETIR a los 7-14 días · 2 dosis"
          },
          {
            "title": "#3 · Tratamiento de contactos + descontaminación…",
            "text": "—\nTratar todos los contactos del hogar/sexuales simultáneamente aunque estén asintomáticos · — · Mismo calendario · —"
          }
        ]
      }
    ],
    "alertText": "Sarna costrosa (noruega) en inmunocomprometidos/ancianos — placas hiperqueratósicas, altamente contagiosa, requiere permetrina + ivermectina multidosis combinadas y control de infecciones.",
    "note": "Evidencia: CDC Scabies Clinical Guidance; Dressler et al., NEJM 2022 (ivermectin noninferiority)"
  },
  {
    "id": "d34",
    "badge": "INFECCIONES PARASITARIAS",
    "eyebrow": "PERFIL CLÍNICO Nº 34",
    "headlineA": "PIOJOS (PEDICULOSIS)",
    "headlineB": "",
    "blocks": [
      {
        "id": "d34-lead",
        "type": "lead",
        "text": "Infestación por Pediculus humanus capitis que causa picor en el cuero cabelludo; extremadamente común en escolares; se transmite por contacto cabeza con cabeza, no por falta de higiene."
      },
      {
        "id": "d34-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Permetrina 1% loción (o piretrinas + piperonil…",
            "text": "Nix; Rid\nAplicar en cabello húmedo, enjuagar a los 10 min · Tópica · Aplicación única, REPETIR al día 7-9 · 2 aplicaciones"
          },
          {
            "title": "#2 · Ivermectina 0.5% loción",
            "text": "Sklice\nAplicar en cabello seco, enjuagar a los 10 min · Tópica · Aplicación única (sin repetición) · Uso único"
          },
          {
            "title": "#3 · Peinado húmedo con peine de púas finas ±…",
            "text": "Hedrin (dimeticona)\nPeinar el cabello húmedo con acondicionador mechón por mechón · Físico / tópica · Cada 3-4 días durante 2 semanas · 2+ semanas"
          }
        ]
      }
    ],
    "alertText": "Infección bacteriana secundaria de los rascados (impétigo); nada grave.",
    "note": "Evidencia: AAP 2022 Head Lice Clinical Report; CDC Lice Guidance"
  },
  {
    "id": "d35",
    "badge": "INFECCIONES PARASITARIAS",
    "eyebrow": "PERFIL CLÍNICO Nº 35",
    "headlineA": "INFECCIÓN POR",
    "headlineB": "ANQUILOSTOMAS (HOOKWORM)",
    "blocks": [
      {
        "id": "d35-lead",
        "type": "lead",
        "text": "Infección por Necator americanus/Ancylostoma duodenale adquirida por contacto cutáneo con tierra contaminada; los parásitos se alimentan de sangre intestinal, causando anemia ferropénica — una causa mayor de anemia en regiones endémicas."
      },
      {
        "id": "d35-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Albendazol",
            "text": "Albenza\n400 mg · VO · Dosis única · Dosis única"
          },
          {
            "title": "#2 · Mebendazol",
            "text": "Vermox\n100 mg · VO · 2 veces al día · 3 días"
          },
          {
            "title": "#3 · Sulfato ferroso (para la anemia)",
            "text": "Feosol\n325 mg (65 mg de hierro elemental) · VO · 1-2 veces al día (la dosis día de por medio puede mejorar la absorción) · 3-6 meses (hasta reservas…"
          }
        ]
      }
    ],
    "alertText": "Anemia grave (fatiga, disnea, signos de insuficiencia cardíaca), retardo del crecimiento/desarrollo cognitivo en niños, hipoproteinemia.",
    "note": "Evidencia: WHO Soil-Transmitted Helminth Guidelines; Cochrane Hookworm Treatment Review"
  },
  {
    "id": "d36",
    "badge": "INFECCIONES PARASITARIAS",
    "eyebrow": "PERFIL CLÍNICO Nº 36",
    "headlineA": "ESQUISTOSOMIASIS",
    "headlineB": "",
    "blocks": [
      {
        "id": "d36-lead",
        "type": "lead",
        "text": "Infección por tremátodos (esquistosomas) adquirida en agua dulce con caracoles infectados; la infección crónica causa fibrosis/cáncer vesical (S. haematobium) o fibrosis hepática/intestinal (S. mansoni/japonicum)."
      },
      {
        "id": "d36-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Praziquantel",
            "text": "Biltricide\n40-60 mg/kg (S. mansoni/haematobium 40; S. japonicum/mekongi 60) · VO · Dividido en 2-3 dosis en un día · 1 día"
          },
          {
            "title": "#2 · Repetición de praziquantel",
            "text": "Biltricide\nRepetir 40-60 mg/kg · VO · Día único · Repetir a las 4-6 semanas si persisten huevos"
          },
          {
            "title": "#3 · Control de caracoles + saneamiento + agua…",
            "text": "—\nPraziquantel 40 mg/kg anual en comunidades de riesgo · VO · Anual · Duración del programa"
          }
        ]
      }
    ],
    "alertText": "Fiebre de Katayama (enfermedad tipo enfermedad del suero 2-8 semanas pos exposición), hipertensión portal/varices, carcinoma escamoso de vejiga, mielitis transversa (huevos ectópicos).",
    "note": "Evidencia: WHO Schistosomiasis Guidelines (2022)"
  },
  {
    "id": "d37",
    "badge": "INFECCIONES PARASITARIAS",
    "eyebrow": "PERFIL CLÍNICO Nº 37",
    "headlineA": "TRICOMONIASIS",
    "headlineB": "",
    "blocks": [
      {
        "id": "d37-lead",
        "type": "lead",
        "text": "Infección por Trichomonas vaginalis — la ITS no viral más común — que causa vaginitis/uretritis; aumenta el riesgo de adquisición de VIH y los desenlaces adversos del embarazo."
      },
      {
        "id": "d37-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Metronidazol",
            "text": "Flagyl\nMujeres: 500 mg 2 veces al día ×7 días; hombres: 2 g dosis única · VO · Según pauta · 7 días (mujeres) / dosis única (hombres)"
          },
          {
            "title": "#2 · Tinidazol",
            "text": "Tindamax\n2 g · VO · Dosis única · Dosis única"
          },
          {
            "title": "#3 · Tratamiento simultáneo de la pareja",
            "text": "—\nLas parejas reciben el mismo esquema · VO · Igual · —"
          }
        ]
      }
    ],
    "alertText": "Embarazo: asociada con parto pretérmino — tratar mujeres sintomáticas (metronidazol seguro en todos los trimestres según CDC); infección persistente/recurrente requiere terapia guiada por susceptibilidad.",
    "note": "Evidencia: CDC STI Treatment Guidelines 2021"
  },
  {
    "id": "cat-38",
    "badge": "SECCIÓN",
    "eyebrow": "CATEGORÍA · 5 PERFILES",
    "headlineA": "RESPIRATORIO",
    "headlineB": "",
    "blocks": [
      {
        "id": "cat-38-stats",
        "type": "stats",
        "items": [
          {
            "value": "5",
            "label": "enfermedades en esta categoría (Nº 38–42)."
          },
          {
            "value": "1",
            "label": "curables."
          },
          {
            "value": "4",
            "label": "controlables o autolimitadas."
          }
        ]
      },
      {
        "id": "cat-38-lead",
        "type": "lead",
        "text": "Asma, EPOC, Rinitis alérgica, Apnea obstructiva del sueño, Tromboembolismo pulmonar"
      }
    ]
  },
  {
    "id": "d38",
    "badge": "RESPIRATORIO",
    "eyebrow": "PERFIL CLÍNICO Nº 38",
    "headlineA": "ASMA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d38-lead",
        "type": "lead",
        "text": "Inflamación crónica de las vías aéreas con obstrucción variable del flujo que causa sibilancias, tos y disnea. La inflamación no controlada lleva a exacerbaciones y remodelación de la vía aérea."
      },
      {
        "id": "d38-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Corticoide inhalado: budesonida o fluticasona",
            "text": "Pulmicort; Flovent\nBudesonida 200-400 mcg; fluticasona 100-250 mcg · Inhalado (MDI/DPI) · 2 veces al día · Largo plazo"
          },
          {
            "title": "#2 · Combinación ICS-formoterol como…",
            "text": "Symbicort (budesonida/formoterol)\n100/6 o 200/6 mcg por inhalación · Inhalado · Mantenimiento 1-2 inhalaciones 2 veces al día + 1 según necesidad · Largo plazo"
          },
          {
            "title": "#3 · Biológicos para asma grave: omalizumab /…",
            "text": "Xolair; Nucala; Dupixent\nOmalizumab 75-600 mg SC c/2-4 sem (según IgE/peso); mepolizumab 100 mg SC c/4sem; dupilumab 300 mg SC c/2sem · Subcutánea · Cada 2-4 semanas ·…"
          }
        ]
      }
    ],
    "alertText": "Tórax silencioso, incapacidad para hablar en frases completas, SpO2 <92%, agotamiento (ataque potencialmente mortal — emergencia); >2 exacerbaciones/año indican mal control.",
    "note": "Evidencia: GINA Global Strategy 2024"
  },
  {
    "id": "d39",
    "badge": "RESPIRATORIO",
    "eyebrow": "PERFIL CLÍNICO Nº 39",
    "headlineA": "EPOC",
    "headlineB": "",
    "blocks": [
      {
        "id": "d39-lead",
        "type": "lead",
        "text": "Limitación progresiva del flujo por exposición crónica a humo/contaminantes, que combina bronquitis crónica y enfisema; las exacerbaciones aceleran el deterioro y determinan la mortalidad."
      },
      {
        "id": "d39-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Doble broncodilatación: LABA + LAMA",
            "text": "Anoro (umeclidinio/vilanterol 62.5/25 mcg); Spiriva…\nUna inhalación · Inhalado · 1 vez al día · Largo plazo"
          },
          {
            "title": "#2 · Añadir corticoide → triple terapia en…",
            "text": "Trelegy (fluticasona/umeclidinio/vilanterol…\nUna inhalación · Inhalado · 1 vez al día · Largo plazo"
          },
          {
            "title": "#3 · Dejar de fumar (vareniclina/TNM) + rehab…",
            "text": "Chantix (vareniclina 1 mg 2 veces/día); parche de nicotina 21 mg/24h\nVareniclina 1 mg; parche en descenso 21→14→7 mg · VO / transdérmica · Vareniclina 2 veces/día ×12 sem; parche diario ×8-10 sem · 12 semanas (dejar de fumar);…"
          }
        ]
      }
    ],
    "alertText": "Exacerbación aguda con falla respiratoria (requiere esteroides, antibióticos si purulenta, ventilación no invasiva), SpO2 <88%, signos de cor pulmonale.",
    "note": "Evidencia: GOLD Report 2024; IMPACT & ETHOS trials (NEJM)"
  },
  {
    "id": "d40",
    "badge": "RESPIRATORIO",
    "eyebrow": "PERFIL CLÍNICO Nº 40",
    "headlineA": "RINITIS ALÉRGICA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d40-lead",
        "type": "lead",
        "text": "Inflamación nasal mediada por IgE (polen, ácaros, animales) que causa estornudos, rinorrea, congestión y picor; frecuentemente coexiste con asma y afecta el sueño y la productividad."
      },
      {
        "id": "d40-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Corticoide intranasal: mometasona o fluticasona",
            "text": "Nasonex; Flonase\nMometasona 50 mcg/spray: 2 sprays/fosa (100 mcg); fluticasona similar · Intranasal · 1 vez al día · Durante toda la temporada de alérgenos"
          },
          {
            "title": "#2 · Antihistamínico oral de segunda generación:…",
            "text": "Zyrtec; Claritin\nCetirizina 10 mg; loratadina 10 mg · VO · 1 vez al día · Según necesidad o toda la temporada"
          },
          {
            "title": "#3 · Inmunoterapia con alérgenos (SCIT SC o…",
            "text": "Extractos varios; SLIT: Oralair, Grastek, Ragwiz,…\nSCIT: dosis escalonadas; SLIT: 1 tableta diaria · Subcutánea / sublingual · Según protocolo · 3-5 años"
          }
        ]
      }
    ],
    "alertText": "Nada urgente; la rinitis no controlada empeora el asma — tratar como factor de riesgo de la vía aérea; pólipos nasales/síntomas unilaterales ameritan valoración ORL.",
    "note": "Evidencia: ARIA (Allergic Rhinitis and its Impact on Asthma) Guidelines; AAAAI/ACAAI Rhinitis Guideline"
  },
  {
    "id": "d41",
    "badge": "RESPIRATORIO",
    "eyebrow": "PERFIL CLÍNICO Nº 41",
    "headlineA": "APNEA OBSTRUCTIVA",
    "headlineB": "DEL SUEÑO",
    "blocks": [
      {
        "id": "d41-lead",
        "type": "lead",
        "text": "Colapso recurrente de la vía aérea superior durante el sueño que causa hipoxia intermitente, ronquidos y somnolencia diurna; fuertemente asociada con obesidad, hipertensión, FA y eventos cardiovasculares."
      },
      {
        "id": "d41-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Presión positiva continua en la vía aérea (CPAP)",
            "text": "ResMed AirSense, Philips DreamStation (dispositivos)\nPresión titulada (automática 5-15 cmH2O típica) · Mascarilla nasal/oronasal · Cada noche, todas las horas de sueño · Largo plazo"
          },
          {
            "title": "#2 · Pérdida de peso ± tirzepatida (AOS relacionada…",
            "text": "Zepbound (tirzepatida 5-15 mg semanal SC); estilo de vida\nTirzepatida titulación 2.5→15 mg · Subcutánea · 1 vez por semana · Largo plazo"
          },
          {
            "title": "#3 · Dispositivo de avance mandibular (o estimulación…",
            "text": "Aparato dental personalizado; Inspire (HGN)\n— · Aparato oral cada noche · Cada noche · Largo plazo"
          }
        ]
      }
    ],
    "alertText": "Somnolencia diurna grave con riesgo al conducir, hipertensión resistente, arritmias, accidente cerebrovascular — la AOS grave sin tratar aumenta la mortalidad cardiovascular.",
    "note": "Evidencia: AASM OSA Guidelines; SURMOUNT-OSA (Malhotra et al., NEJM 2024)"
  },
  {
    "id": "d42",
    "badge": "RESPIRATORIO",
    "eyebrow": "PERFIL CLÍNICO Nº 42",
    "headlineA": "TROMBOEMBOLISMO",
    "headlineB": "PULMONAR",
    "blocks": [
      {
        "id": "d42-lead",
        "type": "lead",
        "text": "Obstrucción de las arterias pulmonares por trombo (generalmente de una TVP), causando disnea, dolor torácico y a veces colapso circulatorio; la tercera emergencia cardiovascular más común."
      },
      {
        "id": "d42-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Anticoagulante oral directo: apixabán o rivaroxabán",
            "text": "Eliquis; Xarelto\nApixabán 10 mg 2 veces/día ×7 d luego 5 mg 2 veces/día; rivaroxabán 15 mg 2 veces/día ×21 d luego 20 mg diario · VO · Por fase · Mínimo 3-6 meses (provocada);…"
          },
          {
            "title": "#2 · Trombólisis: alteplasa (EP masiva/alto riesgo)",
            "text": "Activase\n100 mg IV en 2 h (o 50 mg en bolo en paro) · IV · Infusión única · Dosis única"
          },
          {
            "title": "#3 · Filtro de VCI (si anticoagulación contraindicada) +…",
            "text": "Filtros de VCI retirables\n— · Percutáneo · — · Retirar cuando la anticoagulación sea posible"
          }
        ]
      }
    ],
    "alertText": "Hipotensión, síncope, hipoxemia grave (EP de alto riesgo — trombólisis/embolectomía); síntomas nuevos bajo anticoagulación (recurrencia o sangrado).",
    "note": "Evidencia: ESC 2019 PE Guidelines; ASH 2020 VTE Guidelines"
  },
  {
    "id": "d42",
    "badge": "RESPIRATORIO",
    "eyebrow": "PERFIL CLÍNICO Nº 42",
    "headlineA": "PULMONARY EMBOLISM",
    "headlineB": "",
    "blocks": [
      {
        "id": "d42-lead",
        "type": "lead",
        "text": "Obstruction of pulmonary arteries by thrombus (usually from DVT), causing dyspnea, chest pain, and sometimes circulatory collapse; third most common cardiovascular emergency."
      },
      {
        "id": "d42-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Direct oral anticoagulant: apixaban or rivaroxaban",
            "text": "Eliquis; Xarelto\nApixaban 10 mg BID ×7 d then 5 mg BID; rivaroxaban 15 mg BID ×21 d then 20 mg daily · Oral · Per phase · 3-6 months minimum (provoked);…"
          },
          {
            "title": "#2 · Thrombolysis: alteplase (massive/high-risk PE)",
            "text": "Activase\n100 mg IV over 2 h (or 50 mg bolus in arrest) · IV · Single infusion · Single dose"
          },
          {
            "title": "#3 · IVC filter (when anticoagulation contraindicated) +…",
            "text": "Retrievable IVC filters\n— · Percutaneous · — · Retrieve when anticoagulation possible"
          }
        ],
        "text": "Hipertensión, Hiperlipidemia, Enfermedad coronaria estable (angina), Fibrilación auricular, Insuficiencia cardíaca con FEVI reducida, Trombosis venosa profunda…"
      }
    ],
    "alertText": "Hypotension, syncope, severe hypoxemia (high-risk PE — thrombolysis/embolectomy); new symptoms on anticoagulation (recurrence or bleeding).",
    "note": "Evidencia: ESC 2019 PE Guidelines; ASH 2020 VTE Guidelines"
  },
  {
    "id": "d43",
    "badge": "CARDIOVASCULAR",
    "eyebrow": "PERFIL CLÍNICO Nº 43",
    "headlineA": "HIPERTENSIÓN",
    "headlineB": "ARTERIAL",
    "blocks": [
      {
        "id": "d43-lead",
        "type": "lead",
        "text": "Presión arterial elevada de forma persistente (≥130/80 mmHg según ACC/AHA), el principal factor de riesgo modificable de accidente cerebrovascular, infarto, insuficiencia cardíaca y enfermedad renal; generalmente asintomática («asesino silencioso»)."
      },
      {
        "id": "d43-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Diurético tiazídico/tiazídico-similar:…",
            "text": "Hygroton; Microzide\nClortalidona 12.5-25 mg; HCTZ 25-50 mg · VO · 1 vez al día (en la mañana) · Largo plazo"
          },
          {
            "title": "#2 · IECA (lisinopril) o ARA II (losartán)",
            "text": "Zestril; Cozaar\nLisinopril 10-40 mg; losartán 50-100 mg · VO · 1-2 veces al día · Largo plazo"
          },
          {
            "title": "#3 · Bloqueador de canales de calcio dihidropiridina:…",
            "text": "Norvasc\n5-10 mg · VO · 1 vez al día · Largo plazo"
          }
        ]
      }
    ],
    "alertText": "PA ≥180/120 con daño de órganos (dolor torácico, déficits neurológicos, papiledema) = emergencia hipertensiva; hipertensión resistente (sin control con 3 fármacos) → evaluar causas secundarias (aldosteronismo,…",
    "note": "Evidencia: ACC/AHA 2017 Hypertension Guideline; ESC/ESH 2024; ALLHAT (JAMA 2002); Borghi et al. 2020 (ACEi-thiazide combination review)"
  },
  {
    "id": "d44",
    "badge": "CARDIOVASCULAR",
    "eyebrow": "PERFIL CLÍNICO Nº 44",
    "headlineA": "HIPERLIPIDEMIA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d44-lead",
        "type": "lead",
        "text": "Colesterol LDL elevado (± triglicéridos) que impulsa la formación de placa aterosclerótica; asintomática hasta los eventos cardiovasculares; objetivo de prevención primaria de infarto/accidente cerebrovascular."
      },
      {
        "id": "d44-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Estatina de alta intensidad: atorvastatina o…",
            "text": "Lipitor; Crestor\nAtorvastatina 40-80 mg; rosuvastatina 20-40 mg (moderada: atorva 10-20, rosuva 5-10) · VO · 1 vez al día (a cualquier hora, son de acción prolongada…"
          },
          {
            "title": "#2 · Ezetimiba",
            "text": "Zetia\n10 mg · VO · 1 vez al día · Largo plazo"
          },
          {
            "title": "#3 · Inhibidor de PCSK9: evolocumab o alirocumab",
            "text": "Repatha; Praluent\nEvolocumab 140 mg c/2sem o 420 mg mensual; alirocumab 75-150 mg c/2sem · Subcutánea · Cada 2-4 semanas · Largo plazo"
          }
        ]
      }
    ],
    "alertText": "TG muy altos (>500 mg/dL → riesgo de pancreatitis: fibratos/omega-3); sospecha de hipercolesterolemia familiar (LDL ≥190) → tamizaje en cascada.",
    "note": "Evidencia: ACC/AHA 2018 Cholesterol Guideline; CTT Collaboration meta-analyses; IMPROVE-IT & FOURIER trials"
  },
  {
    "id": "d45",
    "badge": "CARDIOVASCULAR",
    "eyebrow": "PERFIL CLÍNICO Nº 45",
    "headlineA": "ENFERMEDAD CORONARIA",
    "headlineB": "ESTABLE (ANGINA)",
    "blocks": [
      {
        "id": "d45-lead",
        "type": "lead",
        "text": "Estrechamiento aterosclerótico fijo de las arterias coronarias que causa molestia torácica de esfuerzo (angina estable); el manejo previene infarto/muerte y controla los síntomas."
      },
      {
        "id": "d45-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Aspirina + estatina de alta intensidad (…",
            "text": "Bayer; Lipitor/Crestor\nAspirina 75-100 mg; atorvastatina 40-80 mg o rosuvastatina 20-40 mg · VO · 1 vez al día · De por vida"
          },
          {
            "title": "#2 · Betabloqueador (metoprolol) para control de…",
            "text": "Toprol-XL; nitroglicerina SL\nMetoprolol succinato 50-200 mg diarios; nitroglicerina 0.4 mg SL según necesidad · VO / sublingual · Betabloqueador diario; NTG según necesidad (máx. 3 dosis a los 5 min…"
          },
          {
            "title": "#3 · Revascularización: ICP (stent) o CABG…",
            "text": "—\n— · Percutánea / quirúrgica · — · —"
          }
        ]
      }
    ],
    "alertText": "Angina en reposo o en crescendo, elevación de troponina (síndrome coronario agudo — emergencia), signos nuevos de insuficiencia cardíaca.",
    "note": "Evidencia: ACC/AHA Chronic Coronary Disease Guideline 2023; ISCHEMIA & COURAGE trials"
  },
  {
    "id": "d46",
    "badge": "CARDIOVASCULAR",
    "eyebrow": "PERFIL CLÍNICO Nº 46",
    "headlineA": "FIBRILACIÓN",
    "headlineB": "AURICULAR",
    "blocks": [
      {
        "id": "d46-lead",
        "type": "lead",
        "text": "Actividad eléctrica auricular desorganizada que causa pulso irregular; el estasis promueve trombo auricular → riesgo de accidente cerebrovascular aumentado 5 veces. Pilares del manejo: prevención de ACV, control de frecuencia/ritmo, tratamiento de factores de riesgo."
      },
      {
        "id": "d46-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · ACO para prevención de ACV: apixabán (preferido) o…",
            "text": "Eliquis; Xarelto\nApixabán 5 mg 2 veces/día (2.5 mg si ≥2 de: edad ≥80, peso ≤60 kg, Cr ≥1.5); rivaroxabán 20 mg diario con alimentos · VO · 2 veces/día / 1 vez al día ·…"
          },
          {
            "title": "#2 · Control de frecuencia: metoprolol succinato (…",
            "text": "Toprol-XL\n50-200 mg · VO · 1 vez al día · Largo plazo"
          },
          {
            "title": "#3 · Control de ritmo con ablación por catéter (±…",
            "text": "—; Tambocor; Pacerone\nFlecainida 100-150 mg 2 veces/día; amiodarona 200 mg diarios tras carga · VO / ablación · Según fármaco · Largo plazo"
          }
        ]
      }
    ],
    "alertText": "Inestabilidad hemodinámica (cardioversión urgente), síntomas de accidente cerebrovascular, frecuencia >150 con síntomas, FA con WPW (evitar bloqueadores del nodo AV).",
    "note": "Evidencia: ACC/AHA/HRS 2023 AF Guideline; EAST-AFNET 4 (NEJM 2020)"
  },
  {
    "id": "d47",
    "badge": "CARDIOVASCULAR",
    "eyebrow": "PERFIL CLÍNICO Nº 47",
    "headlineA": "INSUFICIENCIA CARDÍACA",
    "headlineB": "CON FEVI REDUCIDA",
    "blocks": [
      {
        "id": "d47-lead",
        "type": "lead",
        "text": "Falla del ventrículo izquierdo para bombear eficazmente (FE ≤40%), causando disnea, edema y fatiga; la terapia cuádruple de «pilares» ha transformado la supervivencia."
      },
      {
        "id": "d47-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · ARNI: sacubitrilo/valsartán (o IECA si…",
            "text": "Entresto; (IECA: lisinopril/Zestril)\nSacubitrilo/valsartán 24/26 mg 2 veces/día, titular a 97/103 mg 2 veces/día; lisinopril 20-40 mg diarios · VO · 2 veces/día (ARNI) / 1 vez al día (IECA) · De por vida"
          },
          {
            "title": "#2 · Betabloqueador: carvedilol (o metoprolol…",
            "text": "Coreg; Aldactone\nCarvedilol 3.125 mg 2 veces/día titular a 25 mg 2 veces/día; espironolactona 25-50 mg diarios · VO · Según fármaco · De por vida"
          },
          {
            "title": "#3 · Inhibidor de SGLT2: dapagliflozina o…",
            "text": "Farxiga; Jardiance\n10 mg · VO · 1 vez al día · De por vida"
          }
        ]
      }
    ],
    "alertText": "Descompensación aguda (edema pulmonar, hipoxia), hipotensión que limita la titulación, empeoramiento renal, arritmias.",
    "note": "Evidencia: ACC/AHA/HFSA 2022 HF Guideline; PARADIGM-HF, DAPA-HF, EMPEROR-Reduced trials"
  },
  {
    "id": "d48",
    "badge": "CARDIOVASCULAR",
    "eyebrow": "PERFIL CLÍNICO Nº 48",
    "headlineA": "TROMBOSIS",
    "headlineB": "VENOSA PROFUNDA",
    "blocks": [
      {
        "id": "d48-lead",
        "type": "lead",
        "text": "Coágulo de sangre en las venas profundas de la pierna que causa hinchazón y dolor; el peligro es la embolización a los pulmones (EP). La anticoagulación previene la extensión mientras el cuerpo disuelve el coágulo."
      },
      {
        "id": "d48-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Apixabán (o rivaroxabán) — sin puente necesario",
            "text": "Eliquis; Xarelto\nApixabán 10 mg 2 veces/día ×7 d luego 5 mg 2 veces/día; rivaroxabán 15 mg 2 veces/día ×21 d luego 20 mg diario · VO · Por fase · 3 meses (provocada); ≥6 meses a…"
          },
          {
            "title": "#2 · Puente con HBPM a warfarina (alternativa)",
            "text": "Lovenox + Coumadin\nEnoxaparina 1 mg/kg 2 veces/día; warfarina titulada a INR 2-3 · SC + VO · Enoxaparina 2 veces/día ≥5 días hasta INR terapéutico ×2 días · 3-6 meses"
          },
          {
            "title": "#3 · Medias de compresión + deambulación temprana",
            "text": "Compresión graduada 20-30 mmHg\n— · — · Uso diario · 2 años (para prevención del síndrome postrombótico)"
          }
        ]
      }
    ],
    "alertText": "Síntomas de EP (disnea, dolor torácico, síncope), flebitis cerúlea dolens (amenaza de la extremidad), sangrado bajo anticoagulación.",
    "note": "Evidencia: ASH 2020 VTE Guidelines; CHEST 2021 Update"
  },
  {
    "id": "cat-49",
    "badge": "SECCIÓN",
    "eyebrow": "CATEGORÍA · 8 PERFILES",
    "headlineA": "ENDOCRINO Y",
    "headlineB": "METABÓLICO",
    "blocks": [
      {
        "id": "cat-49-stats",
        "type": "stats",
        "items": [
          {
            "value": "8",
            "label": "enfermedades en esta categoría (Nº 49–56)."
          },
          {
            "value": "3",
            "label": "curables."
          },
          {
            "value": "5",
            "label": "controlables o autolimitadas."
          }
        ]
      },
      {
        "id": "cat-49-lead",
        "type": "lead",
        "text": "Diabetes tipo 2, Diabetes tipo 1, Hipotiroidismo, Hipertiroidismo de Graves, Obesidad, Osteoporosis, Deficiencia de vitamina D, Gota"
      }
    ]
  },
  {
    "id": "d49",
    "badge": "ENDOCRINO Y METABÓLICO",
    "eyebrow": "PERFIL CLÍNICO Nº 49",
    "headlineA": "DIABETES TIPO 2",
    "headlineB": "",
    "blocks": [
      {
        "id": "d49-lead",
        "type": "lead",
        "text": "Resistencia a la insulina con disfunción progresiva de las células beta que causa hiperglucemia crónica; daña vasos, nervios, riñones y ojos. La pérdida de peso puede inducir remisión en la enfermedad temprana."
      },
      {
        "id": "d49-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Metformina + intervención en el estilo de vida",
            "text": "Glucophage\n500 mg con la cena, titular a 1,000 mg 2 veces al día (existe XR) · VO · 1-2 veces al día con las comidas · Largo plazo"
          },
          {
            "title": "#2 · Agonista del receptor GLP-1: semaglutida o…",
            "text": "Ozempic (0.25→1 mg); Trulicity (0.75→4.5 mg)\nSemaglutida 0.25 mg semanal titular a 0.5-1 mg; dulaglutida 0.75-4.5 mg semanal · Subcutánea · 1 vez por semana · Largo plazo"
          },
          {
            "title": "#3 · Inhibidor de SGLT2: empagliflozina o…",
            "text": "Jardiance (10-25 mg); Farxiga (10 mg)\n10 mg 1 vez al día · VO · 1 vez al día (en la mañana) · Largo plazo"
          }
        ]
      }
    ],
    "alertText": "Estado hiperosmolar o CAD (raro en DT2), hipoglucemia grave (sulfonilureas/insulina), úlceras en pies.",
    "note": "Evidencia: ADA Standards of Care 2025; ACP 2024 Newer Pharmacologic Treatments Guideline; DiRECT trial (Lean et al., Lancet 2018)"
  },
  {
    "id": "d50",
    "badge": "ENDOCRINO Y METABÓLICO",
    "eyebrow": "PERFIL CLÍNICO Nº 50",
    "headlineA": "DIABETES TIPO 1",
    "headlineB": "",
    "blocks": [
      {
        "id": "d50-lead",
        "type": "lead",
        "text": "Destrucción autoinmune de las células beta pancreáticas que causa deficiencia absoluta de insulina; requiere insulina de por vida. El control intensivo previene ceguera, falla renal y neuropatía."
      },
      {
        "id": "d50-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Insulina basal-bolo: glargina/degludec +…",
            "text": "Lantus/Tresiba + NovoLog/Humalog\nGlargina 0.2-0.4 unidades/kg 1 vez al día; bolo ~0.5-1 unidad por cada 10-15 g de carbohidratos (total ~0.5-1 u/kg/día) · Subcutánea · Basal 1 vez al día +…"
          },
          {
            "title": "#2 · Bomba de insulina con MCG (lazo cerrado híbrido)",
            "text": "Tandem t:slim X2 Control-IQ, Medtronic 780G, Omnipod 5…\nTasas basales individualizadas + calculadora de bolos · Infusión subcutánea · Continua · De por vida"
          },
          {
            "title": "#3 · Educación estructurada en diabetes + conteo de…",
            "text": "—\n— · — · — · Inicial + cursos de repaso"
          }
        ]
      }
    ],
    "alertText": "Cetoacidosis diabética (vómitos, dolor abdominal, respiración profunda, cetonas — emergencia), hipoglucemia grave (convulsión/pérdida de conciencia — glucagón).",
    "note": "Evidencia: DCCT/EDIC; ADA Standards of Care 2025; hybrid closed-loop RCTs (Brown et al., NEJM 2019)"
  },
  {
    "id": "d51",
    "badge": "ENDOCRINO Y METABÓLICO",
    "eyebrow": "PERFIL CLÍNICO Nº 51",
    "headlineA": "HIPOTIROIDISMO",
    "headlineB": "",
    "blocks": [
      {
        "id": "d51-lead",
        "type": "lead",
        "text": "Deficiencia de hormona tiroidea (generalmente tiroiditis autoinmune de Hashimoto) que causa fatiga, aumento de peso, intolerancia al frío, estreñimiento; la simple reposición hormonal normaliza el metabolismo."
      },
      {
        "id": "d51-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Levotiroxina",
            "text": "Synthroid, Levoxyl\nIniciar 1.6 mcg/kg/día (joven/sano) o 25-50 mcg (anciano/cardíaco); mantenimiento típico 100-125 mcg · VO · 1 vez al día, en ayunas 30-60…"
          },
          {
            "title": "#2 · Titulación de dosis guiada por TSH",
            "text": "—\nAjustar en incrementos de 12.5-25 mcg según TSH · — · Repetir TSH a las 6-8 semanas tras cada cambio · Hasta estabilizar, luego anual"
          },
          {
            "title": "#3 · Tratar causas reversibles: repleción de yodo…",
            "text": "Sal yodada / yoduro de potasio\nYodo 150 mcg/día como objetivo dietario · VO · Diaria · Según causa"
          }
        ]
      }
    ],
    "alertText": "Coma mixedematoso (hipotermia, bradicardia, alteración del sensorio — emergencia endocrina), hipotiroidismo grave no tratado en el embarazo (neurodesarrollo fetal).",
    "note": "Evidencia: ATA 2014 Hypothyroidism Guideline (Jonklaas et al.)"
  },
  {
    "id": "d52",
    "badge": "ENDOCRINO Y METABÓLICO",
    "eyebrow": "PERFIL CLÍNICO Nº 52",
    "headlineA": "HIPERTIROIDISMO",
    "headlineB": "DE GRAVES",
    "blocks": [
      {
        "id": "d52-lead",
        "type": "lead",
        "text": "Estimulación autoinmune del receptor TSH que causa exceso de hormona tiroidea: pérdida de peso, temblor, palpitaciones, intolerancia al calor ± bocio y orbitopatía. Las tres opciones definitivas lo curan."
      },
      {
        "id": "d52-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Metimazol (antitiroideo)",
            "text": "Tapazole\n10-30 mg diarios (dividido o dosis única), reducir a mantenimiento 2.5-10 mg · VO · 1 vez al día (mantenimiento) o dividido · 12-18 meses, luego ensayo…"
          },
          {
            "title": "#2 · Ablation con yodo radiactivo (I-131)",
            "text": "—\n10-15 mCi dosis fija típica · Cápsula VO · Dosis única · Administración única (se espera hipotiroidismo → levotiroxina)"
          },
          {
            "title": "#3 · Tiroidectomía total",
            "text": "—\n— · Quirúrgica · — · Procedimiento único"
          }
        ]
      }
    ],
    "alertText": "Tormenta tiroidea (fiebre alta, delirio, taquicardia — emergencia de UCI), orbitopatía rápidamente progresiva (amenaza visual), FA en ancianos.",
    "note": "Evidencia: ATA 2016 Hyperthyroidism Guideline (Ross et al.)"
  },
  {
    "id": "d53",
    "badge": "ENDOCRINO Y METABÓLICO",
    "eyebrow": "PERFIL CLÍNICO Nº 53",
    "headlineA": "OBESIDAD",
    "headlineB": "",
    "blocks": [
      {
        "id": "d53-lead",
        "type": "lead",
        "text": "Enfermedad crónica recurrente de adiposidad excesiva (IMC ≥30), impulsora de diabetes, hipertensión, AOS y enfermedad cardiovascular; ahora tratable con medicamentos incretínicos de alta eficacia."
      },
      {
        "id": "d53-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Intervención estructurada en el estilo de vida (…",
            "text": "—\n— · — · — · Continua"
          },
          {
            "title": "#2 · Agonista GLP-1/GIP: semaglutida 2.4 mg o…",
            "text": "Wegovy; Zepbound\nSemaglutida 0.25 mg semanal titular a 2.4 mg en 16 sem; tirzepatida 2.5 mg semanal titular a 5-15 mg · Subcutánea · 1 vez por semana · Largo plazo…"
          },
          {
            "title": "#3 · Cirugía bariátrica: gastrectomía sleeve o…",
            "text": "—\n— · Quirúrgica · — · Procedimiento único + seguimiento de por vida"
          }
        ]
      }
    ],
    "alertText": "Síndrome de hipoventilación por obesidad, AOS grave, NASH con fibrosis, hipertensión intracraneal (rara).",
    "note": "Evidencia: STEP-1 & SURMOUNT-1 (NEJM 2021/2022); SELECT trial; ADA/AACE Obesity Guidelines"
  },
  {
    "id": "d54",
    "badge": "ENDOCRINO Y METABÓLICO",
    "eyebrow": "PERFIL CLÍNICO Nº 54",
    "headlineA": "OSTEOPOROSIS",
    "headlineB": "",
    "blocks": [
      {
        "id": "d54-lead",
        "type": "lead",
        "text": "Densidad ósea reducida y deterioro microarquitectónico que lleva a fracturas por fragilidad (cadera, columna, muñeca); las fracturas de cadera conllevan ~20% de mortalidad al año en ancianos."
      },
      {
        "id": "d54-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Bisfosfonato oral: alendronato",
            "text": "Fosamax\n70 mg 1 vez por semana (o 10 mg diarios) · VO · 1 vez por semana, en ayunas con agua sola, permanecer erguido 30 min · 5 años iniciales, luego reevaluar («vacaciones…"
          },
          {
            "title": "#2 · Denosumab",
            "text": "Prolia\n60 mg · Subcutánea · Cada 6 meses (administrada en clínica) · Largo plazo — no se deben retrasar las dosis"
          },
          {
            "title": "#3 · Calcio + vitamina D + ejercicio con carga…",
            "text": "—; Forteo\nCalcio 1,000-1,200 mg/día (dieta primero); vitamina D 800-1,000 UI/día; teriparatida 20 mcg SC diarios · VO / SC · Diario · Calcio/vitamina D…"
          }
        ]
      }
    ],
    "alertText": "Fractura por fragilidad (requiere prevención secundaria urgente — la mayoría de pacientes no reciben tratamiento tras la primera fractura), dolor por colapso vertebral agudo.",
    "note": "Evidencia: Endocrine Society 2020 Guideline; FIT & FREEDOM trials"
  },
  {
    "id": "d55",
    "badge": "ENDOCRINO Y METABÓLICO",
    "eyebrow": "PERFIL CLÍNICO Nº 55",
    "headlineA": "DEFICIENCIA",
    "headlineB": "DE VITAMINA D",
    "blocks": [
      {
        "id": "d55-lead",
        "type": "lead",
        "text": "25-hidroxivitamina D insuficiente (<20 ng/mL) que compromete la absorción de calcio y la mineralización ósea; causa raquitismo en niños, osteomalacia en adultos y contribuye a caídas/fracturas en ancianos."
      },
      {
        "id": "d55-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Colecalciferol (vitamina D3)",
            "text": "Suplementos D3; receta: Drisdol (D2) o D3 50,000…\nRepleción: 50,000 UI semanal ×8 semanas o 6,000-10,000 UI diarios; mantenimiento 1,000-2,000 UI diarios · VO · Semanal (repleción) luego diario…"
          },
          {
            "title": "#2 · Fuentes dietarias + exposición solar sensata",
            "text": "—\nPescados grasos, lácteos/cereales fortificados; 10-30 min de sol mediodía varias veces por semana · — · Diario · Continuo"
          },
          {
            "title": "#3 · Tratar malabsorción subyacente (tamizaje de…",
            "text": "—\n— · — · — · —"
          }
        ]
      }
    ],
    "alertText": "Síntomas hipocalcémicos (tetania, convulsiones en lactantes), osteomalacia grave con fracturas/dolor óseo.",
    "note": "Evidencia: Endocrine Society Vitamin D Guidelines (2011, 2024 update)"
  },
  {
    "id": "d56",
    "badge": "ENDOCRINO Y METABÓLICO",
    "eyebrow": "PERFIL CLÍNICO Nº 56",
    "headlineA": "GOTA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d56-lead",
        "type": "lead",
        "text": "Depósito de cristales de urato monosódico por hiperuricemia crónica que causa brotes de artritis inflamatoria excruciante (clásicamente el dedo gordo del pie), tofos y cálculos renales; la reducción urémica crónica disuelve los cristales y cura la enfermedad."
      },
      {
        "id": "d56-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Brote agudo: AINE (naproxeno), colchicina o…",
            "text": "Aleve; Colcrys; Deltasone\nNaproxeno 500 mg 2 veces/día; colchicina 1.2 mg luego 0.6 mg una hora después (luego 0.6 mg diario durante el brote); prednisona 30-40 mg diarios en descenso · VO · Según…"
          },
          {
            "title": "#2 · Alopurinol (terapia reductora de uratos),…",
            "text": "Zyloprim\nIniciar 100 mg diarios (50 mg en ERC), titular mensualmente hasta urato sérico <6 mg/dL (a menudo 300-600 mg); máx. 800 mg · VO · 1 vez al día · De por vida…"
          },
          {
            "title": "#3 · Febuxostat (intolerante a alopurinol) o…",
            "text": "Uloric; Krystexxa\nFebuxostat 40-80 mg diarios; pegloticasa 8 mg IV cada 2 semanas · VO / IV · Diario / quincenal · De por vida / hasta resolución de tofos"
          }
        ]
      }
    ],
    "alertText": "Mímico de artritis séptica (considerar siempre aspiración articular en la primera articulación caliente), destrucción tofácea, nefropatía urática.",
    "note": "Evidencia: ACR 2020 Gout Guideline (FitzGerald et al.)"
  },
  {
    "id": "cat-57",
    "badge": "SECCIÓN",
    "eyebrow": "CATEGORÍA · 7 PERFILES",
    "headlineA": "GASTROINTESTINAL",
    "headlineB": "",
    "blocks": [
      {
        "id": "cat-57-stats",
        "type": "stats",
        "items": [
          {
            "value": "7",
            "label": "enfermedades en esta categoría (Nº 57–63)."
          },
          {
            "value": "2",
            "label": "curables."
          },
          {
            "value": "5",
            "label": "controlables o autolimitadas."
          }
        ]
      },
      {
        "id": "cat-57-lead",
        "type": "lead",
        "text": "Enfermedad por reflujo gastroesofágico (ERGE), Síndrome del intestino irritable, Colitis ulcerosa, Enfermedad de Crohn, Enfermedad celíaca, Cálculos biliares sintomáticos (colelitiasis), Hemorroides"
      }
    ]
  },
  {
    "id": "d57",
    "badge": "GASTROINTESTINAL",
    "eyebrow": "PERFIL CLÍNICO Nº 57",
    "headlineA": "ENFERMEDAD POR REFLUJO",
    "headlineB": "GASTROESOFÁGICO (ERGE)",
    "blocks": [
      {
        "id": "d57-lead",
        "type": "lead",
        "text": "Flujo retrógrado del ácido gástrico hacia el esófago que causa pirosis y regurgitación; la exposición crónica puede causar esofagitis erosiva, estenosis y esófago de Barrett."
      },
      {
        "id": "d57-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Inhibidor de la bomba de protones: omeprazol (u…",
            "text": "Prilosec; Nexium; Protonix\nOmeprazol 20-40 mg · VO · 1 vez al día, 30-60 min antes del desayuno · 8 semanas iniciales, luego reducir a la dosis mínima eficaz"
          },
          {
            "title": "#2 · Antagonista de H2: famotidina (enfermedad leve /…",
            "text": "Pepcid\n20 mg · VO · 2 veces al día o al acostarse · 4-8 semanas / según necesidad"
          },
          {
            "title": "#3 · Medidas de estilo de vida; funduplicatura de…",
            "text": "—\nPérdida de peso, elevar la cabecera, evitar comidas tardías/desencadenantes · — · Continuo / procedimiento único · —"
          }
        ]
      }
    ],
    "alertText": "Disfagia, odinofagia, pérdida de peso, sangrado GI, anemia, edad >50-60 con síntomas nuevos → endoscopia (excluir malignidad/Barrett).",
    "note": "Evidencia: ACG 2022 GERD Guideline (Katz et al.)"
  },
  {
    "id": "d58",
    "badge": "GASTROINTESTINAL",
    "eyebrow": "PERFIL CLÍNICO Nº 58",
    "headlineA": "SÍNDROME DEL",
    "headlineB": "INTESTINO IRRITABLE",
    "blocks": [
      {
        "id": "d58-lead",
        "type": "lead",
        "text": "Trastorno funcional del eje intestino-cerebro que causa dolor abdominal recurrente con alteración del hábito intestinal (SII-D, SII-C, mixto), sin enfermedad estructural; afecta ~10% de adultos."
      },
      {
        "id": "d58-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Dieta baja en FODMAP (con dietista)",
            "text": "—\nFase de restricción de 4-6 semanas, luego reintroducción estructurada · Dietética · Diario · 6-8 semanas hasta plan personalizado a largo plazo"
          },
          {
            "title": "#2 · Antiespasmódico: hiosciamina/diciclomina, o aceite…",
            "text": "Levsin; Bentyl; IBgard (aceite de menta 180-225 mg)\nDiciclomina 10-20 mg; aceite de menta 180-225 mg con cubierta entérica · VO · Diciclomina 3-4 veces/día según necesidad; menta 2-3…"
          },
          {
            "title": "#3 · Según síntoma: loperamida (SII-D) o…",
            "text": "Imodium; MiraLAX; Amitiza; Linzess\nLoperamida 2-4 mg según necesidad; PEG 17 g diarios; lubiprostona 8 mcg 2 veces/día; linaclotida 290 mcg diarios · VO · Según fármaco · Ensayos de 4-8 semanas"
          }
        ]
      }
    ],
    "alertText": "Características de alarma: sangrado rectal, anemia por deficiencia de hierro, pérdida de peso involuntaria, antecedentes familiares de cáncer de colon/EII/celíaca, inicio >50 años → colonoscopia/prueba de celíaca.",
    "note": "Evidencia: ACG 2021 IBS Guideline (Lacy et al.)"
  },
  {
    "id": "d59",
    "badge": "GASTROINTESTINAL",
    "eyebrow": "PERFIL CLÍNICO Nº 59",
    "headlineA": "COLITIS ULCEROSA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d59-lead",
        "type": "lead",
        "text": "Inflamación mediada por inmunidad limitada a la mucosa del colon, que se extiende desde el recto, causando diarrea sanguinolenta y urgencia; los brotes alternan con remisión. La colectomía total elimina la enfermedad del colon."
      },
      {
        "id": "d59-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · 5-aminosalicilato: mesalazina (leve-moderada)",
            "text": "Asacol HD, Lialda, Pentasa; rectal: Rowasa/Canasa\nVO 2.4-4.8 g diarios; supositorio/enema rectal para enfermedad distal · VO / rectal · 1 o 2 veces al día · Mantenimiento a largo plazo"
          },
          {
            "title": "#2 · Corticosteroides para brotes: prednisona (o…",
            "text": "Deltasone; Uceris\nPrednisona 40-60 mg diarios en descenso durante 8-12 semanas; budesonida MMX 9 mg ×8 semanas · VO · 1 vez al día (en la mañana) · Solo cursos cortos —…"
          },
          {
            "title": "#3 · Biológicos/terapia avanzada: infliximab (anti-TNF),…",
            "text": "Remicade; Entyvio; Stelara; Xeljanz; Rinvoq\nInfliximab 5 mg/kg IV sem 0,2,6 luego c/8sem; vedolizumab 300 mg IV c/8sem; upadacitinib 45 mg diarios ×8sem luego 15-30 mg · IV / SC / VO ·…"
          }
        ]
      }
    ],
    "alertText": "Megacolon tóxico (fiebre, distensión, taquicardia — emergencia quirúrgica), brote severo >6 deposiciones sanguinolentas/día con signos sistémicos (ingreso para corticoides IV), perforación.",
    "note": "Evidencia: ACG 2019 UC Guideline; STRIDE-II (2021); ECCO Consensus"
  },
  {
    "id": "d60",
    "badge": "GASTROINTESTINAL",
    "eyebrow": "PERFIL CLÍNICO Nº 60",
    "headlineA": "ENFERMEDAD DE CROHN",
    "headlineB": "",
    "blocks": [
      {
        "id": "d60-lead",
        "type": "lead",
        "text": "Inflamación granulomatosa transmural en cualquier punto de boca a ano (típicamente íleon terminal), causando dolor abdominal, diarrea, pérdida de peso, estenosis y fístulas; curso crónico recidivante."
      },
      {
        "id": "d60-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Inducción: budesonida (íleo) o prednisona;…",
            "text": "Entocort; Deltasone\nBudesonida 9 mg diarios ×8-12 semanas; prednisona 40-60 mg en descenso · VO · 1 vez al día · 8-12 semanas (solo inducción)"
          },
          {
            "title": "#2 · Anti-TNF: infliximab o adalimumab (±…",
            "text": "Remicade; Humira\nInfliximab 5 mg/kg IV sem 0,2,6 luego c/8sem; adalimumab 160/80/40 mg SC luego 40 mg c/2sem · IV / SC · Según pauta · Mantenimiento a largo plazo"
          },
          {
            "title": "#3 · Inmunomodulador (azatioprina/metotrexato) como…",
            "text": "Imuran; Trexall\nAzatioprina 2-2.5 mg/kg diarios; metotrexato 25 mg semanal · VO / SC · Diario / semanal · Largo plazo"
          }
        ]
      }
    ],
    "alertText": "Obstrucción (estenosis), absceso (fiebre + dolor localizado), fístulas, megacolon tóxico, desnutrición severa.",
    "note": "Evidencia: ECCO Crohn's Guidelines; ACG 2018; SONIC & CALM trials"
  },
  {
    "id": "d61",
    "badge": "GASTROINTESTINAL",
    "eyebrow": "PERFIL CLÍNICO Nº 61",
    "headlineA": "ENFERMEDAD CELÍACA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d61-lead",
        "type": "lead",
        "text": "Reacción inmune al gluten (trigo/cebada/centeno) que destruye las vellosidades del intestino delgado, causando diarrea, distensión, anemia y malabsorción — o ningún síntoma GI. La exclusión de gluten de por vida cura la mucosa."
      },
      {
        "id": "d61-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Dieta sin gluten estricta de por vida (<20 ppm…",
            "text": "—\nExcluir trigo, cebada, centeno; avena pura aceptable · Dietética · Diario, de por vida · De por vida"
          },
          {
            "title": "#2 · Repleción nutricional: hierro, vitamina D, B12,…",
            "text": "—\nSegún déficit (p. ej., sulfato ferroso 325 mg diarios; vitamina D 1,000-2,000 UI) · VO · Diario · 3-6 meses, luego según niveles"
          },
          {
            "title": "#3 · Seguimiento con dietista + vigilancia serológica",
            "text": "—\nAnti-tTG IgA a los 6 y 12 meses, luego anual · — · Según pauta · De por vida"
          }
        ]
      }
    ],
    "alertText": "Enfermedad celíaca refractaria (atrofia vellositaria persistente — riesgo de linfoma), desnutrición severa, dermatitis herpetiforme (forma cutánea — dapsona + dieta sin gluten).",
    "note": "Evidencia: ACG 2023 Celiac Disease Guideline"
  },
  {
    "id": "d62",
    "badge": "GASTROINTESTINAL",
    "eyebrow": "PERFIL CLÍNICO Nº 62",
    "headlineA": "CÁLCULOS BILIARES",
    "headlineB": "SINTOMÁTICOS (COLELITIASIS)",
    "blocks": [
      {
        "id": "d62-lead",
        "type": "lead",
        "text": "Cálculos de colesterol o pigmento en la vesícula que causan dolor episódico en cuadrante superior derecho (cólico biliar), típicamente tras comidas grasas; complicaciones: colecistitis, pancreatitis y colangitis."
      },
      {
        "id": "d62-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Colecistectomía laparoscópica",
            "text": "—\n— · Quirúrgica (mínimamente invasiva) · — · Procedimiento único, típicamente alta el mismo día"
          },
          {
            "title": "#2 · Ácido ursodesoxicólico (pacientes seleccionados…",
            "text": "Actigall, Urso\n8-10 mg/kg/día · VO · Dividido en 2-3 tomas diarias · 6-24 meses"
          },
          {
            "title": "#3 · Analgesia + dieta baja en grasas (interina/…",
            "text": "—\nAINE (ibuprofeno 400-600 mg) o ketorolaco para el cólico; comidas bajas en grasa · VO · Según necesidad / dietética · Hasta tratamiento definitivo"
          }
        ]
      }
    ],
    "alertText": "Fiebre + dolor persistente en QSD (colecistitis), ictericia (coledocolitiasis), dolor epigástrico severo irradiado a espalda (pancreatitis), tríada de Charcot/pentada de Reynolds (colangitis — emergencia).",
    "note": "Evidencia: Tokyo Guidelines 2018 (colangitis/colecistitis aguda); guía SAGES"
  },
  {
    "id": "d63",
    "badge": "GASTROINTESTINAL",
    "eyebrow": "PERFIL CLÍNICO Nº 63",
    "headlineA": "HEMORROIDES",
    "headlineB": "",
    "blocks": [
      {
        "id": "d63-lead",
        "type": "lead",
        "text": "Cojines vasculares congestos en el canal anal que causan sangrado indoloro (internas) o trombosis dolorosa (externas); favorecidas por esfuerzo, estreñimiento, embarazo y estar sentado prolongadamente."
      },
      {
        "id": "d63-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Fibra suplementaria + líquidos + baños de asiento",
            "text": "Metamucil (psilio)\nPsilio 5-10 g con agua; baños de asiento 10-15 min en agua tibia · VO / tópica · Fibra 1-2 veces/día; baños 2-3 veces/día y tras deposiciones ·…"
          },
          {
            "title": "#2 · Corticosteroide/anestésico tópico: hidrocortisona +…",
            "text": "Anusol-HC, Preparation H con lidocaína\nAplicar según producto (supositorio o crema) · Tópica / rectal · 2-3 veces al día · ≤7 días (límite del corticoide)"
          },
          {
            "title": "#3 · Ligadura con banda elástica (internas grado II-III)",
            "text": "—\n— · Procedimiento ambulatorio · — · 1-3 sesiones, con 4-6 semanas de intervalo"
          }
        ]
      }
    ],
    "alertText": "Hemorroide externa trombosada (dolor severo, bulto violáceo — escisión dentro de 72 h), sangrado significativo/anemia, prolapso que requiere reducción manual.",
    "note": "Evidencia: ASCRS Clinical Practice Guidelines for Hemorrhoids 2018/2024"
  },
  {
    "id": "cat-64",
    "badge": "SECCIÓN",
    "eyebrow": "CATEGORÍA · 5 PERFILES",
    "headlineA": "RENAL Y UROLÓGICO",
    "headlineB": "",
    "blocks": [
      {
        "id": "cat-64-stats",
        "type": "stats",
        "items": [
          {
            "value": "5",
            "label": "enfermedades en esta categoría (Nº 64–68)."
          },
          {
            "value": "1",
            "label": "curables."
          },
          {
            "value": "4",
            "label": "controlables o autolimitadas."
          }
        ]
      },
      {
        "id": "cat-64-lead",
        "type": "lead",
        "text": "Cálculos renales (nefrolitiasis), Hiperplasia prostática benigna (HPB), Vejiga hiperactiva, Disfunción eréctil, Enfermedad renal crónica"
      }
    ]
  },
  {
    "id": "d64",
    "badge": "RENAL Y UROLÓGICO",
    "eyebrow": "PERFIL CLÍNICO Nº 64",
    "headlineA": "CÁLCULOS RENALES",
    "headlineB": "(NEFROLITIASIS)",
    "blocks": [
      {
        "id": "d64-lead",
        "type": "lead",
        "text": "Depósitos cristalinos minerales (oxalato cálcico el más común) que se forman en el riñón y descienden por el uréter, causando cólico lumbar, hematuria y náuseas; la recurrencia es común sin prevención."
      },
      {
        "id": "d64-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Hidratación + analgesia con AINE: ibuprofeno/ketorolaco",
            "text": "Advil; Toradol\nIbuprofeno 600-800 mg 3 veces/día con comida; ketorolaco 10 mg VO c/6h según necesidad (o 30 mg IV en urgencias) · VO / IV · Según pauta · Durante el paso (días)"
          },
          {
            "title": "#2 · Tamsulosina (terapia expulsiva médica)",
            "text": "Flomax\n0.4 mg · VO · 1 vez al día · Hasta 4 semanas"
          },
          {
            "title": "#3 · Litotricia extracorpórea (LEDC) o ureteroscopia con…",
            "text": "—\n— · Procedimientos ambulatorios · — · Sesión única ± endoprótesis"
          }
        ]
      }
    ],
    "alertText": "Fiebre + cálculo obstructivo (emergencia urológica — la hidronefrosis infectada puede ser mortal), riñón único, obstrucción bilateral, anuria, dolor incontrolable.",
    "note": "Evidencia: AUA Surgical Management of Stones Guideline; EAU Urolithiasis Guidelines"
  },
  {
    "id": "d65",
    "badge": "RENAL Y UROLÓGICO",
    "eyebrow": "PERFIL CLÍNICO Nº 65",
    "headlineA": "HIPERPLASIA PROSTÁTICA",
    "headlineB": "BENIGNA (HPB)",
    "blocks": [
      {
        "id": "d65-lead",
        "type": "lead",
        "text": "Crecimiento prostático no maligno que obstruye el flujo urinario en hombres mayores: chorro débil, frecuencia, nicturia, vaciado incompleto; puede progresar a retención y daño vesical."
      },
      {
        "id": "d65-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Bloqueador alfa-1: tamsulosina",
            "text": "Flomax\n0.4 mg (titular a 0.8 mg) · VO · 1 vez al día, 30 min después de la misma comida cada día · Largo plazo"
          },
          {
            "title": "#2 · Inhibidor de 5-alfa reductasa: finasterida o…",
            "text": "Proscar; Avodart\nFinasterida 5 mg; dutasterida 0.5 mg · VO · 1 vez al día · Largo plazo (6-12 meses para efecto completo)"
          },
          {
            "title": "#3 · RTU o enucleación láser (HoLEP)",
            "text": "—\n— · Quirúrgica · — · Procedimiento único"
          }
        ]
      }
    ],
    "alertText": "Retención urinaria aguda (vejiga dolorosa y distendida — colocar sonda), hematuria, ITU recurrentes, hidronefrosis/creatinina en ascenso.",
    "note": "Evidencia: AUA BPH Guideline (2023); EAU Non-neurogenic Male LUTS Guidelines"
  },
  {
    "id": "d66",
    "badge": "RENAL Y UROLÓGICO",
    "eyebrow": "PERFIL CLÍNICO Nº 66",
    "headlineA": "VEJIGA HIPERACTIVA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d66-lead",
        "type": "lead",
        "text": "Urgencia con frecuencia/nicturia ± incontinencia por urgencia, sin infección; causada por hiperactividad del detrusor; deteriora significativamente la calidad de vida y el sueño."
      },
      {
        "id": "d66-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Entrenamiento vesical + terapia conductual",
            "text": "—\nMiciciones programadas (extender intervalos 15-30 min semanal), supresión de urgencia, ejercicios del suelo pélvico (Kegel) · — · Práctica diaria · 6-12 semanas hasta…"
          },
          {
            "title": "#2 · Antimuscarínico (oxibutinina LP/solifenacina) o…",
            "text": "Ditropan XL; Vesicare; Myrbetriq\nOxibutinina LP 5-30 mg; solifenacina 5-10 mg; mirabegrón 25-50 mg · VO · 1 vez al día · Largo plazo (ensayo de 4-8 semanas)"
          },
          {
            "title": "#3 · Inyecciones de onabotulinumtoxinaA en detrusor…",
            "text": "Botox\n100 unidades inyectadas en el detrusor · Intravésica (cistoscópica) · Sesión única · Repetir cada 6-9 meses al disminuir el efecto"
          }
        ]
      }
    ],
    "alertText": "Retención, hematuria (evaluar malignidad), ITU recurrentes.",
    "note": "Evidencia: AUA/SUFU OAB Guideline 2024"
  },
  {
    "id": "d67",
    "badge": "RENAL Y UROLÓGICO",
    "eyebrow": "PERFIL CLÍNICO Nº 67",
    "headlineA": "DISFUNCIÓN ERÉCTIL",
    "headlineB": "",
    "blocks": [
      {
        "id": "d67-lead",
        "type": "lead",
        "text": "Incapacidad persistente de lograr/mantener la erección; generalmente vascular (comparte factores de riesgo con la enfermedad coronaria) pero también psicógena, hormonal o inducida por medicamentos; la DE precede a eventos coronarios en 3-5 años."
      },
      {
        "id": "d67-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Inhibidor de la PDE5: sildenafilo o tadalafilo",
            "text": "Viagra; Cialis\nSildenafilo 25-100 mg 1 h antes de la actividad; tadalafilo 10-20 mg según necesidad o 2.5-5 mg diarios · VO · Según necesidad (ventana sildenafilo 4-8 h; tadalafilo hasta…"
          },
          {
            "title": "#2 · Estilo de vida + control del riesgo cardiometabólico",
            "text": "—\nPérdida de peso, ejercicio aeróbico, dejar de fumar, control glucémico/PA/lípidos · — · Continuo · Largo plazo"
          },
          {
            "title": "#3 · Terapia psicosexual ± dispositivo de vacío;…",
            "text": "—; Caverject\nAlprostadilo 2.5-40 mcg inyectado en la base del pene · — / intrauretral o inyección · Según necesidad · —"
          }
        ]
      }
    ],
    "alertText": "Priapismo, inicio súbito con signos neurológicos, curvatura del pene (Peyronie), dolor torácico al esfuerzo (enfermedad coronaria no diagnosticada).",
    "note": "Evidencia: AUA Erectile Dysfunction Guideline 2018; EAU Sexual and Reproductive Health Guidelines"
  },
  {
    "id": "d68",
    "badge": "RENAL Y UROLÓGICO",
    "eyebrow": "PERFIL CLÍNICO Nº 68",
    "headlineA": "ENFERMEDAD",
    "headlineB": "RENAL CRÓNICA",
    "blocks": [
      {
        "id": "d68-lead",
        "type": "lead",
        "text": "Pérdida progresiva de la función renal (TFGe <60 o albuminuria >3 meses), generalmente por diabetes e hipertensión; el tratamiento temprano enlentece marcadamente la progresión a diálisis."
      },
      {
        "id": "d68-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · IECA (lisinopril) o ARA II (losartán) cuando hay…",
            "text": "Zestril; Cozaar\nLisinopril 10-40 mg; losartán 50-100 mg — titular a la máxima tolerada · VO · 1 vez al día · Largo plazo"
          },
          {
            "title": "#2 · Inhibidor de SGLT2: dapagliflozina o empagliflozina",
            "text": "Farxiga; Jardiance\n10 mg · VO · 1 vez al día · Largo plazo"
          },
          {
            "title": "#3 · PA <130/80 + control glucémico; finerenona para…",
            "text": "Kerendia\nFinerenona 10-20 mg diarios (guiado por K+) · VO · 1 vez al día · Largo plazo"
          }
        ]
      }
    ],
    "alertText": "Descenso rápido del TFGe (>5/año), hiperpotasemia refractaria, sobrecarga de líquidos/edema pulmonar, síntomas urémicos (náuseas, prurito, pericarditis) — referencia a nefrología con TFGe <30.",
    "note": "Evidencia: KDIGO 2024 CKD Guideline; DAPA-CKD & EMPA-KIDNEY & FIDELIO-DKD trials"
  },
  {
    "id": "cat-69",
    "badge": "SECCIÓN",
    "eyebrow": "CATEGORÍA · 10 PERFILES",
    "headlineA": "NEUROLÓGICO Y",
    "headlineB": "PSIQUIÁTRICO",
    "blocks": [
      {
        "id": "cat-69-stats",
        "type": "stats",
        "items": [
          {
            "value": "10",
            "label": "enfermedades en esta categoría (Nº 69–78)."
          },
          {
            "value": "4",
            "label": "curables."
          },
          {
            "value": "6",
            "label": "controlables o autolimitadas."
          }
        ]
      },
      {
        "id": "cat-69-lead",
        "type": "lead",
        "text": "Trastorno depresivo mayor, Trastorno de ansiedad generalizada, Insomnio crónico, Migraña, Cefalea tensional, Epilepsia, Enfermedad de Parkinson, TDAH, Trastorno bipolar, Trastorno obsesivo-compulsivo"
      }
    ]
  },
  {
    "id": "d69",
    "badge": "NEUROLÓGICO Y PSIQUIÁTRICO",
    "eyebrow": "PERFIL CLÍNICO Nº 69",
    "headlineA": "TRASTORNO",
    "headlineB": "DEPRESIVO MAYOR",
    "blocks": [
      {
        "id": "d69-lead",
        "type": "lead",
        "text": "Ánimo bajo persistente, anhedonia y síntomas neurovegetativos ≥2 semanas con deterioro funcional; impulsado por desregulación serotoninérgica/noradrenérgica, estrés y neuroinflamación. Los episodios son tratables y a menudo se resuelven por completo."
      },
      {
        "id": "d69-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · ISRS: sertralina o escitalopram",
            "text": "Zoloft; Lexapro\nSertralina 50 mg inicio → 100-200 mg; escitalopram 10 mg → 20 mg · VO · 1 vez al día · ≥6-12 meses tras remisión (primer episodio); más si…"
          },
          {
            "title": "#2 · Terapia cognitivo-conductual (12-16 sesiones semanales)",
            "text": "—\n— · — · Semanal · 12-16 sesiones"
          },
          {
            "title": "#3 · IRSN (venlafaxina/duloxetina) o ISRS + TCC…",
            "text": "Effexor XR; Cymbalta\nVenlafaxina 75-225 mg; duloxetina 30-60 mg · VO · 1 vez al día · Largo plazo"
          }
        ]
      }
    ],
    "alertText": "Ideación suicida/plan (evaluación de seguridad el mismo día), rasgos psicóticos, rechazo a comer/beber, emergencia de manía (tamizar trastorno bipolar antes de antidepresivos).",
    "note": "Evidencia: APA/NICE Depression Guidelines; STAR*D; Cuijpers et al., World Psychiatry 2022 (SSRI vs CBT symptom profiles)"
  },
  {
    "id": "d70",
    "badge": "NEUROLÓGICO Y PSIQUIÁTRICO",
    "eyebrow": "PERFIL CLÍNICO Nº 70",
    "headlineA": "TRASTORNO DE",
    "headlineB": "ANSIEDAD GENERALIZADA",
    "blocks": [
      {
        "id": "d70-lead",
        "type": "lead",
        "text": "Preocupación excesiva e incontrolable ≥6 meses con inquietud, fatiga, tensión muscular y mala concentración; desregulación serotoninérgica con hiperactivación."
      },
      {
        "id": "d70-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · ISRS (escitalopram/sertralina) o IRSN…",
            "text": "Lexapro; Zoloft; Effexor XR; Cymbalta\nEscitalopram 10-20 mg; duloxetina 30-60 mg (iniciar bajo para limitar nerviosismo inicial) · VO · 1 vez al día · ≥12 meses tras respuesta"
          },
          {
            "title": "#2 · Terapia cognitivo-conductual",
            "text": "—\n— · — · Semanal · 12-16 sesiones"
          },
          {
            "title": "#3 · Buspirona o pregabalina (aditivos/alternativas)",
            "text": "BuSpar; Lyrica\nBuspirona 15-60 mg dividida; pregabalina 150-600 mg dividida · VO · 2-3 veces al día · Largo plazo"
          }
        ]
      }
    ],
    "alertText": "Ideación suicida, automedicación con sustancias, escalada de pánico, mimetismo de disfunción tiroidea (pedir TSH).",
    "note": "Evidencia: NICE GAD Guideline; WFSBP Guidelines"
  },
  {
    "id": "d71",
    "badge": "NEUROLÓGICO Y PSIQUIÁTRICO",
    "eyebrow": "PERFIL CLÍNICO Nº 71",
    "headlineA": "INSOMNIO CRÓNICO",
    "headlineB": "",
    "blocks": [
      {
        "id": "d71-lead",
        "type": "lead",
        "text": "Dificultad para iniciar/mantener el sueño ≥3 noches/semana durante ≥3 meses con deterioro diurno; perpetuado por activación condicionada y hábitos de sueño maladaptativos."
      },
      {
        "id": "d71-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Terapia cognitivo-conductual para insomnio (TCC-I)",
            "text": "— (digital: Somryst, Sleepio)\nControl de estímulos, restricción del sueño, reestructuración cognitiva, relajación · — · Semanal · 6-8 sesiones"
          },
          {
            "title": "#2 · Higiene del sueño + control de estímulos (medida…",
            "text": "—\nHora fija de despertar, la cama solo para dormir, sin pantallas/cafeína al final del día, habitación fresca y oscura · — · Diario · Continuo"
          },
          {
            "title": "#3 · Medicación de curso corto: antagonista dual de…",
            "text": "Belsomra; Dayvigo; Silenor\nSuvorexant 10-20 mg; lemborexant 5-10 mg; doxepina 3-6 mg; melatonina 1-3 mg · VO · Cada noche, dentro de 30 min de acostarse (≥7 h antes…"
          }
        ]
      }
    ],
    "alertText": "Ronquidos/apneas (evaluar AOS), síndrome de piernas inquietas, depresión/suicidalidad, desvelo maníaco.",
    "note": "Evidencia: ACP 2016 Insomnia Guideline; AASM CBT-I Practice Parameters"
  },
  {
    "id": "d72",
    "badge": "NEUROLÓGICO Y PSIQUIÁTRICO",
    "eyebrow": "PERFIL CLÍNICO Nº 72",
    "headlineA": "MIGRAÑA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d72-lead",
        "type": "lead",
        "text": "Trastorno de cefalea neurovascular con dolor pulsátil unilateral, náuseas y foto/fonofobia de 4-72 h; la activación trigeminovascular con liberación de CGRP es el mecanismo central."
      },
      {
        "id": "d72-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Agudo: triptán (sumatriptán) ± AINE (naproxeno)",
            "text": "Imitrex; Aleve\nSumatriptán 50-100 mg VO (6 mg SC) al inicio; naproxeno 500-550 mg · VO / SC / intranasal · Según necesidad al inicio del ataque; puede repetirse una vez…"
          },
          {
            "title": "#2 · Gepants: rimegepant o ubrogepant (agudo)",
            "text": "Nurtec ODT; Ubrelvy\nRimegepant 75 mg; ubrogepant 50-100 mg (repetir una vez ≥2 h) · VO (ODT) · Según necesidad · Según ataques (rimegepant también aprobado preventivo…"
          },
          {
            "title": "#3 · Prevención (≥4 días de cefalea/mes): mAb anti-CGRP…",
            "text": "Aimovig; Ajovy; Emgality; Topamax; Inderal\nErenumab 70-140 mg SC mensual; topiramato 25 mg en la noche titular a 50 mg 2 veces/día; propranolol 80-160 mg diarios · SC / VO · Inyecciones mensuales /…"
          }
        ]
      }
    ],
    "alertText": "Inicio en trueno, fiebre + rigidez de cuello, déficits neurológicos nuevos, empeoramiento progresivo, cefalea nueva >50 años, papiledema — imagen antes de diagnosticar migraña.",
    "note": "Evidencia: AHS 2021 Consensus; NICE Headache Guideline"
  },
  {
    "id": "d73",
    "badge": "NEUROLÓGICO Y PSIQUIÁTRICO",
    "eyebrow": "PERFIL CLÍNICO Nº 73",
    "headlineA": "CEFALEA TENSIONAL",
    "headlineB": "",
    "blocks": [
      {
        "id": "d73-lead",
        "type": "lead",
        "text": "Cefalea bilateral opresiva/compresiva leve-moderada sin náuseas ni empeoramiento con actividad; la más común del mundo; la forma crónica (≥15 días/mes) requiere prevención."
      },
      {
        "id": "d73-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Agudo: ibuprofeno o paracetamol",
            "text": "Advil; Tylenol\nIbuprofeno 400 mg; paracetamol 1,000 mg · VO · Según necesidad al inicio · ≤2-3 días/semana (límite estricto)"
          },
          {
            "title": "#2 · Prevención (forma crónica): amitriptilina",
            "text": "Elavil\n10-25 mg en la noche, titular a 25-75 mg · VO · 1 vez en la noche · 6 meses luego reevaluar"
          },
          {
            "title": "#3 · Manejo del estrés + fisioterapia/postura…",
            "text": "—\nTCC/relajación, fisioterapia cervical/hombros · — · Regular · Continuo"
          }
        ]
      }
    ],
    "alertText": "Mismas banderas rojas que migraña — trueno, fiebre, déficits, patrón nuevo tras los 50.",
    "note": "Evidencia: EFNS Tension-Type Headache Guideline; Cochrane amitriptilina review"
  },
  {
    "id": "d74",
    "badge": "NEUROLÓGICO Y PSIQUIÁTRICO",
    "eyebrow": "PERFIL CLÍNICO Nº 74",
    "headlineA": "EPILEPSIA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d74-lead",
        "type": "lead",
        "text": "Crisis recurrentes no provocadas por descargas corticales anormales; dos tercios de los pacientes logran libertad de crisis con medicación; la epilepsia focal resistente a fármacos puede curarse quirúrgicamente."
      },
      {
        "id": "d74-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Levetiracetam o lamotrigina (primera línea…",
            "text": "Keppra; Lamictal\nLevetiracetam 500 mg 2 veces/día titular a 1,000-1,500 mg 2 veces/día; lamotrigina titulación lenta 25 mg → 100-200 mg 2 veces/día · VO · 2 veces al día · Largo plazo…"
          },
          {
            "title": "#2 · Fármaco según tipo de crisis: valproato…",
            "text": "Depakote; Tegretol; Zarontin\nValproato 500-1,500 mg/día; carbamazepina 400-1,200 mg/día dividida; etosuximida 500-1,500 mg/día · VO · 2-3 veces al día (existe LP) ·…"
          },
          {
            "title": "#3 · Cirugía resectiva de epilepsia (focal resistente…",
            "text": "—\n— · Quirúrgica · — · Procedimiento único"
          }
        ]
      }
    ],
    "alertText": "Estado epiléptico (>5 min — emergencia: benzodiacepinas), consejería sobre riesgo de SUDEP, déficits nuevos.",
    "note": "Evidencia: ILAE treatment frameworks; SANAD trials; Wiebe et al., NEJM 2001 (surgery RCT)"
  },
  {
    "id": "d75",
    "badge": "NEUROLÓGICO Y PSIQUIÁTRICO",
    "eyebrow": "PERFIL CLÍNICO Nº 75",
    "headlineA": "ENFERMEDAD",
    "headlineB": "DE PARKINSON",
    "blocks": [
      {
        "id": "d75-lead",
        "type": "lead",
        "text": "Pérdida progresiva de neuronas dopaminérgicas de la sustancia negra que causa bradicinesia, temblor en reposo, rigidez e inestabilidad postural; el tratamiento repone dopamina y maneja las fluctuaciones motoras."
      },
      {
        "id": "d75-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Levodopa/carbidopa",
            "text": "Sinemet, Rytary\nIniciar 25/100 mg 3 veces/día; titular según respuesta motora (300-1,200 mg/día de levodopa) · VO · 3-4 veces al día (30-60 min antes de comidas — la…"
          },
          {
            "title": "#2 · Agonista dopaminérgico (pramipexol/ropinirol) o…",
            "text": "Mirapex; Requip; Azilect\nPramipexol 0.125 mg 3 veces/día titular a 1.5 mg 3 veces/día; rasagilina 1 mg diarios · VO · Según fármaco · Largo plazo"
          },
          {
            "title": "#3 · Estimulación cerebral profunda (subtalámica/…",
            "text": "Dispositivos Medtronic/Abbott\n— · Implante quirúrgico · Estimulación continua · Largo plazo"
          }
        ]
      }
    ],
    "alertText": "Neumonía por aspiración, caídas/fracturas, psicosis (reducir dopaminérgicos con cuidado), suspensión abrupta de medicación (síndrome tipo maligno neuroléptico).",
    "note": "Evidencia: MDS Evidence-Based Medicine Reviews; EARLYSTIM (NEJM 2013); NICE Parkinson's Guideline"
  },
  {
    "id": "d76",
    "badge": "NEUROLÓGICO Y PSIQUIÁTRICO",
    "eyebrow": "PERFIL CLÍNICO Nº 76",
    "headlineA": "TDAH",
    "headlineB": "",
    "blocks": [
      {
        "id": "d76-lead",
        "type": "lead",
        "text": "Trastorno del neurodesarrollo de inatención, hiperactividad e impulsividad que deteriora escuela, trabajo y relaciones; déficits de señalización dopaminérgica/noradrenérgica en circuitos prefrontales."
      },
      {
        "id": "d76-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Metilfenidato (de acción prolongada)",
            "text": "Concerta (18-72 mg), Ritalin LA, Vyvanse es anfetamina…\n18-36 mg en la mañana, titular según efecto (máx. 72 mg adultos) · VO · 1 vez al día (mañana) · Largo plazo con reevaluación periódica"
          },
          {
            "title": "#2 · Basado en anfetamina: lisdexanfetamina",
            "text": "Vyvanse\n30 mg en la mañana, titular 20-70 mg · VO · 1 vez al día · Largo plazo"
          },
          {
            "title": "#3 · No estimulante: atomoxetina o guanfacina LP +…",
            "text": "Strattera; Intuniv\nAtomoxetina 40-100 mg diarios (basada en peso en niños); guanfacina LP 1-7 mg · VO · 1 vez al día · Largo plazo"
          }
        ]
      }
    ],
    "alertText": "Suicidalidad, mal uso/desvío de estimulantes, síntomas cardíacos (tamizar antecedente familiar de muerte súbita), consumo comórbido de sustancias.",
    "note": "Evidencia: Cortese et al., Lancet Psychiatry 2018; MTA Study; AAP 2019 ADHD Guideline"
  },
  {
    "id": "d77",
    "badge": "NEUROLÓGICO Y PSIQUIÁTRICO",
    "eyebrow": "PERFIL CLÍNICO Nº 77",
    "headlineA": "TRASTORNO BIPOLAR",
    "headlineB": "",
    "blocks": [
      {
        "id": "d77-lead",
        "type": "lead",
        "text": "Trastorno del ánimo episódico que alterna depresión con manía (tipo I) o hipomanía (tipo II); el diagnóstico erróneo como depresión unipolar es común y retrasa el tratamiento eficaz."
      },
      {
        "id": "d77-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Litio",
            "text": "Lithobid\nIniciar 300 mg 2-3 veces/día, titular a nivel 0.6-1.0 mEq/L (manía aguda 0.8-1.2) · VO · 2-3 veces al día (LP 1-2 veces) · Largo plazo (mantenimiento…"
          },
          {
            "title": "#2 · Quetiapina (depresión bipolar y mantenimiento) o…",
            "text": "Seroquel; Depakote\nQuetiapina 300 mg en la noche (depresión bipolar); valproato 750-2,000 mg/día (nivel 50-125 mcg/mL) · VO · Quetiapina en la noche; valproato…"
          },
          {
            "title": "#3 · Psicoeducación + monitoreo del ánimo + rutina…",
            "text": "—\nPrograma estructurado (grupal o individual): identificación de desencadenantes, regularidad del ritmo de sueño, reconocimiento de firmas de recaída · — · Sesiones durante…"
          }
        ]
      }
    ],
    "alertText": "Ideación suicida (el bipolar tiene entre las tasas de suicidio más altas), manía severa con psicosis (ingresar), cambio a manía inducido por antidepresivo.",
    "note": "Evidencia: NICE Bipolar Guideline; CANMAT/ISBD 2018 Guidelines"
  },
  {
    "id": "d78",
    "badge": "NEUROLÓGICO Y PSIQUIÁTRICO",
    "eyebrow": "PERFIL CLÍNICO Nº 78",
    "headlineA": "TRASTORNO",
    "headlineB": "OBSESIVO-COMPULSIVO",
    "blocks": [
      {
        "id": "d78-lead",
        "type": "lead",
        "text": "Obsesiones intrusivas y rituales compulsivos que consumen >1 h/día; disfunción en circuitos córtico-estriado-talámico-corticales; altamente tratable con terapia de exposición y medicación serotoninérgica."
      },
      {
        "id": "d78-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · ISRS a dosis altas: sertralina, fluoxetina o…",
            "text": "Zoloft; Prozac; Luvox\nSertralina hasta 200 mg; fluoxetina 40-60 mg; fluvoxamina hasta 300 mg (dosis más altas que en depresión) · VO · 1 vez al día · ≥1-2 años; recaída…"
          },
          {
            "title": "#2 · TCC con prevención de respuesta (EPR)",
            "text": "—\nExposición gradual a desencadenantes de la obsesión mientras se bloquean los rituales compulsivos · — · Semanal ×12-20 + tarea diaria · 12-20 sesiones"
          },
          {
            "title": "#3 · Clomipramina o potenciación con antipsicótico…",
            "text": "Anafranil; Risperdal; Abilify\nClomipramina 100-250 mg; risperidona 0.5-2 mg de potenciación · VO · Diario · Largo plazo"
          }
        ]
      }
    ],
    "alertText": "Ideación suicida (elevada en TOC), comorbilidad de depresión severa, rechazo a comer (miedos a contaminación).",
    "note": "Evidencia: APA OCD Practice Guideline; NICE 2005/updated; IOCDF recommendations"
  },
  {
    "id": "cat-79",
    "badge": "SECCIÓN",
    "eyebrow": "CATEGORÍA · 5 PERFILES",
    "headlineA": "DERMATOLÓGICO",
    "headlineB": "",
    "blocks": [
      {
        "id": "cat-79-stats",
        "type": "stats",
        "items": [
          {
            "value": "5",
            "label": "enfermedades en esta categoría (Nº 79–83)."
          },
          {
            "value": "1",
            "label": "curables."
          },
          {
            "value": "4",
            "label": "controlables o autolimitadas."
          }
        ]
      },
      {
        "id": "cat-79-lead",
        "type": "lead",
        "text": "Acné vulgar, Dermatitis atópica (eccema), Psoriasis, Dermatitis seborreica, Rosácea"
      }
    ]
  },
  {
    "id": "d79",
    "badge": "DERMATOLÓGICO",
    "eyebrow": "PERFIL CLÍNICO Nº 79",
    "headlineA": "ACNÉ VULGAR",
    "headlineB": "",
    "blocks": [
      {
        "id": "d79-lead",
        "type": "lead",
        "text": "Taponamiento folicular, exceso de sebo, proliferación de C. acnes e inflamación que causan comedones, pápulas y quistes en cara/tronco; impulsado por andrógenos — pico en la adolescencia pero a menudo persiste en la adultez."
      },
      {
        "id": "d79-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Retinoide tópico (adapaleno/tretinoína) + peróxido de…",
            "text": "Differin (adapaleno 0.1-0.3%); Epiduo (adapaleno/BPO…)\nAdapaleno en cantidad de guisante en las zonas afectadas cada noche; BPO en la mañana · Tópica · Noche (retinoide) / mañana (BPO) · Continuo — 8-12…"
          },
          {
            "title": "#2 · Doxiciclina oral (inflamatorio moderado-severo)",
            "text": "Vibramycin\n100 mg · VO · 1 o 2 veces al día · Máximo 3-4 meses, SIEMPRE CON retinoide/BPO tópico"
          },
          {
            "title": "#3 · Isotretinoína (nodular severo/cicatrizante)",
            "text": "Accutane (marca descontinuada; genéricos: Absorica,…)\n0.5-1 mg/kg/día (objetivo acumulado 120-150 mg/kg) · VO · 1-2 veces al día con comida grasa · 5-8 meses (curso único)"
          }
        ]
      }
    ],
    "alertText": "Cicatrices o impacto psicológico (escalar temprano), acné fulminans (síntomas sistémicos), signos de hiperandrogenismo en mujeres (tamizar SOP).",
    "note": "Evidencia: AAD Acne Guidelines 2024 (Reynolds et al.)"
  },
  {
    "id": "d80",
    "badge": "DERMATOLÓGICO",
    "eyebrow": "PERFIL CLÍNICO Nº 80",
    "headlineA": "DERMATITIS",
    "headlineB": "ATÓPICA (ECCEMA)",
    "blocks": [
      {
        "id": "d80-lead",
        "type": "lead",
        "text": "Enfermedad cutánea inflamatoria crónica recidivante con disfunción de barrera (flagrina), que causa parches secos, inflamados e intensamente pruriginosos; parte de la marcha atópica (alergias, asma)."
      },
      {
        "id": "d80-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Emolientes en abundancia + corticosteroides tópicos…",
            "text": "Vanicream/CeraVe (emoliente); triamcinolona 0.1%…\nEmoliente: aplicación generosa; esteroide: capa fina en zonas inflamadas · Tópica · Emoliente 1-2×/día continuo; esteroide 1-2×/día durante…"
          },
          {
            "title": "#2 · Inhibidor de calcineurina tópico…",
            "text": "Protopic 0.03-0.1%; Elidel; Opzelura\nCapa fina en zonas afectadas · Tópica · 2 veces al día · Intermitente/proactivo (2×/semana en sitios propensos a brotes)"
          },
          {
            "title": "#3 · Dupilumab (o inhibidor JAK oral) para…",
            "text": "Dupixent; Rinvoq (upadacitinib)/Cibinqo (abrocitinib)\nDupilumab 600 mg de carga luego 300 mg c/2sem; upadacitinib 15-30 mg diarios · Subcutánea / VO · Según fármaco · Largo plazo"
          }
        ]
      }
    ],
    "alertText": "Eczema herpético (vesículas en agujero de llave generalizadas — emergencia con aciclovir), infección bacteriana secundaria (costras melicéricas, fiebre), eritrodermia.",
    "note": "Evidencia: AAD Atopic Dermatitis Guidelines 2023-24; EAACI recommendations"
  },
  {
    "id": "d81",
    "badge": "DERMATOLÓGICO",
    "eyebrow": "PERFIL CLÍNICO Nº 81",
    "headlineA": "PSORIASIS",
    "headlineB": "",
    "blocks": [
      {
        "id": "d81-lead",
        "type": "lead",
        "text": "Hiperproliferación cutánea mediada por inmunidad (eje IL-23/Th17) que produce placas eritematosas bien delimitadas con escama plateada (cuero cabelludo, codos, rodillas); 30% desarrollan artritis psoriásica; comorbilidad cardiometabólica elevada."
      },
      {
        "id": "d81-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Corticosteroide tópico + análogo de vitamina D…",
            "text": "Clobetasol 0.05% (potente); calcipotrieno/betametasona…\nCapa fina en placas · Tópica · 1-2 veces al día · Cursos de 2-4 semanas, mantenimiento con calcipotrieno"
          },
          {
            "title": "#2 · Fototerapia UVB de banda estrecha (moderada)",
            "text": "—\n— · Cabina de luz en consultorio · 2-3 veces por semana · Cursos de 6-12 semanas"
          },
          {
            "title": "#3 · Biológico: inhibidor de IL-17 (secukinumab/ixekizumab)…",
            "text": "Cosentyx; Taltz; Tremfya; Skyrizi\nSecukinumab 300 mg SC semanal ×5 luego mensual; guselkumab 100 mg SC sem 0,4 luego c/8sem; risankizumab 150 mg sem 0,4 luego c/12sem · Subcutánea ·…"
          }
        ]
      }
    ],
    "alertText": "Brotes eritrodérmicos/pustulosos (emergencia), dolor/inflamación articular nuevo (APs — el tratamiento temprano previene daño).",
    "note": "Evidencia: AAD-NPF Psoriasis Guidelines; GRAPPA recommendations"
  },
  {
    "id": "d82",
    "badge": "DERMATOLÓGICO",
    "eyebrow": "PERFIL CLÍNICO Nº 82",
    "headlineA": "DERMATITIS",
    "headlineB": "SEBORREICA",
    "blocks": [
      {
        "id": "d82-lead",
        "type": "lead",
        "text": "Inflamación por Malassezia en áreas ricas en sebo (cuero cabelludo, cejas, pliegues nasolabiales, pecho) que causa escama grasa y eritema; crónica con brotes estacionales; severa en VIH/Parkinson."
      },
      {
        "id": "d82-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Champú o crema de ketoconazol 2%",
            "text": "Nizoral\nChampú en el cuero cabelludo, espumar 3-5 min; crema en la piel · Tópica · Champú 2-3 veces/semana; crema 2 veces al día · 2-4 semanas luego mantenimiento semanal"
          },
          {
            "title": "#2 · Corticosteroide tópico de baja potencia para brotes",
            "text": "Hidrocortisona 1-2.5%; desonida 0.05%\nCapa fina · Tópica · 1-2 veces al día · ≤1-2 semanas (solo brotes)"
          },
          {
            "title": "#3 · Inhibidor de calcineurina tópico (cara/ahorro de…",
            "text": "Tacrolimus 0.1% (Protopic); pimecrolimus 1% (Elidel)\nCapa fina · Tópica · 2 veces al día · Intermitente"
          }
        ]
      }
    ],
    "alertText": "Ninguno severo; eritrodermia en inmunocomprometidos; forma infantil severa usualmente autolimitada.",
    "note": "Evidencia: Cochrane Seborrheic Dermatitis Review; guía europea S1"
  },
  {
    "id": "d83",
    "badge": "DERMATOLÓGICO",
    "eyebrow": "PERFIL CLÍNICO Nº 83",
    "headlineA": "ROSÁCEA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d83-lead",
        "type": "lead",
        "text": "Trastorno crónico facial vascular/inflamatorio que causa rubor, eritema persistente, pápulas/pústulas y telangiectasias; desencadenado por calor, alcohol, comida picante; compromiso ocular común."
      },
      {
        "id": "d83-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Metronidazol tópico 0.75-1% o ácido azelaico 15%…",
            "text": "MetroGel; Finacea/Foam\nCapa fina en la cara · Tópica · 1 vez (metronidazol) o 2 veces (azelaico) al día · 8-12 semanas hasta respuesta, luego mantenimiento"
          },
          {
            "title": "#2 · Doxiciclina oral 40 mg de liberación modificada…",
            "text": "Oracea\n40 mg · VO · 1 vez al día (dosis subantimicrobiana) · Cursos de 12 semanas"
          },
          {
            "title": "#3 · Láser vascular/IPL (eritema/telangiectasias) +…",
            "text": "—; Mirvaso (brimonidina 0.33%)\nBrimonidina capa fina en la cara · Láser / tópica · Láser: sesiones c/4-6sem; brimonidina 1 vez al día · Láser: 1-3 sesiones; gel diario"
          }
        ]
      }
    ],
    "alertText": "Rinofima (hipertrofia tisular — referir a cirugía/láser), rosácea ocular (riesgo de queratitis), rubor severo con síntomas sistémicos (excluir carcinoide).",
    "note": "Evidencia: Global ROSacea COnsensus (ROSCO) panel recommendations; guía AAD"
  },
  {
    "id": "cat-84",
    "badge": "SECCIÓN",
    "eyebrow": "CATEGORÍA · 5 PERFILES",
    "headlineA": "MUSCULOESQUELÉTICO",
    "headlineB": "",
    "blocks": [
      {
        "id": "cat-84-stats",
        "type": "stats",
        "items": [
          {
            "value": "5",
            "label": "enfermedades en esta categoría (Nº 84–88)."
          },
          {
            "value": "1",
            "label": "curables."
          },
          {
            "value": "4",
            "label": "controlables o autolimitadas."
          }
        ]
      },
      {
        "id": "cat-84-lead",
        "type": "lead",
        "text": "Osteoartritis, Artritis reumatoide, Dolor lumbar agudo, Síndrome del túnel carpiano, Fibromialgia"
      }
    ]
  },
  {
    "id": "d84",
    "badge": "MUSCULOESQUELÉTICO",
    "eyebrow": "PERFIL CLÍNICO Nº 84",
    "headlineA": "OSTEOARTRITIS",
    "headlineB": "",
    "blocks": [
      {
        "id": "d84-lead",
        "type": "lead",
        "text": "Pérdida degenerativa de cartílago con remodelación ósea que causa dolor articular relacionado con actividad y rigidez (rodillas, caderas, manos); principal causa de discapacidad en adultos mayores."
      },
      {
        "id": "d84-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Ejercicio terapéutico + pérdida de peso",
            "text": "—\nPrograma aeróbico + de fortalecimiento (p. ej., GLA:D), objetivo perder 5% del peso si hay sobrepeso · — · ≥2-3 sesiones/semana · Continuo"
          },
          {
            "title": "#2 · AINE tópico (diclofenaco gel) luego AINE oral…",
            "text": "Voltaren gel 1%; Advil; Aleve\nDiclofenaco gel 2-4 g en la articulación; ibuprofeno 400-600 mg; naproxeno 500 mg · Tópica / VO · Tópica 4×/día; VO 2-3×/día según necesidad · La…"
          },
          {
            "title": "#3 · Reemplazo articular total (enfermedad terminal) /…",
            "text": "—\nTriamcinolona 40 mg o metilprednisolona por articulación · Intraarticular / quirúrgica · Inyección según necesidad (≤3-4/año); cirugía única · —"
          }
        ]
      }
    ],
    "alertText": "Articulación caliente e hinchada (excluir artritis séptica/gota), bloqueo/inestabilidad (mecánico), dolor nocturno que no alivia con el posicionamiento (evaluar).",
    "note": "Evidencia: ACR/Arthritis Foundation 2019 OA Guideline; OARSI 2019"
  },
  {
    "id": "d85",
    "badge": "MUSCULOESQUELÉTICO",
    "eyebrow": "PERFIL CLÍNICO Nº 85",
    "headlineA": "ARTRITIS REUMATOIDE",
    "headlineB": "",
    "blocks": [
      {
        "id": "d85-lead",
        "type": "lead",
        "text": "Sinovitis autoinmune sistémica que causa inflamación simétrica de articulaciones pequeñas (manos, muñecas); sin tratamiento, erosiona articulaciones en 2 años — terapia temprana con FAME dentro de los 3 meses del inicio previene destrucción."
      },
      {
        "id": "d85-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Metotrexato (FAME convencional ancla)",
            "text": "Trexall, Rheumatrex\nIniciar 10-15 mg 1 vez SEMANAL, titular a 20-25 mg; ácido fólico 1 mg diario (o 5 mg semanal) · VO o SC · 1 vez SEMANAL (nunca diario — dosificación…"
          },
          {
            "title": "#2 · FAME biológico: adalimumab/etanercept (anti-TNF) —…",
            "text": "Humira; Enbrel\nAdalimumab 40 mg SC c/2sem; etanercept 50 mg SC semanal · Subcutánea · Semanal o c/2 semanas · Largo plazo"
          },
          {
            "title": "#3 · Inhibidor JAK (tofacitinib/upadacitinib) o…",
            "text": "Xeljanz; Rinvoq\nTofacitinib 5 mg 2 veces/día; upadacitinib 15 mg diarios · VO · Diario · Largo plazo"
          }
        ]
      }
    ],
    "alertText": "Articulación séptica bajo inmunosupresión (articulación caliente — aspirar), inestabilidad cervical antes de anestesia, enfermedad pulmonar intersticial (precaución con MTX/biológicos).",
    "note": "Evidencia: EULAR 2022 RA Management Recommendations; ACR 2021 Guideline"
  },
  {
    "id": "d86",
    "badge": "MUSCULOESQUELÉTICO",
    "eyebrow": "PERFIL CLÍNICO Nº 86",
    "headlineA": "DOLOR LUMBAR AGUDO",
    "headlineB": "",
    "blocks": [
      {
        "id": "d86-lead",
        "type": "lead",
        "text": "Dolor lumbar mecánico inespecífico que dura <6 semanas; el 90% se resuelve en semanas independientemente del tratamiento; la imagen y el reposo en cama son conductas dañinas por defecto."
      },
      {
        "id": "d86-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Mantenerse activo + AINE (ibuprofeno/naproxeno)",
            "text": "Advil; Aleve\nIbuprofeno 400-800 mg; naproxeno 500 mg · VO · 3 veces al día con comida / 2 veces al día · 1-2 semanas"
          },
          {
            "title": "#2 · Fisioterapia / manipulación espinal",
            "text": "—\nPrograma de ejercicios de PT; sesiones SMT · — · 2-3 sesiones/semana · 4-6 semanas"
          },
          {
            "title": "#3 · Calor + evitar imagen temprana",
            "text": "—\nCompresa caliente 15-20 min · Tópica · Según necesidad · Según necesidad"
          }
        ]
      }
    ],
    "alertText": "Cola de caballo (anestesia en silla de montar, retención urinaria, debilidad bilateral de piernas — emergencia de RM), fiebre/TIVD (infección), antecedente de cáncer con dolor nocturno, trauma/osteoporosis (fractura).",
    "note": "Evidencia: ACP 2017 Low Back Pain Guideline"
  },
  {
    "id": "d87",
    "badge": "MUSCULOESQUELÉTICO",
    "eyebrow": "PERFIL CLÍNICO Nº 87",
    "headlineA": "SÍNDROME DEL",
    "headlineB": "TÚNEL CARPIANO",
    "blocks": [
      {
        "id": "d87-lead",
        "type": "lead",
        "text": "Compresión del nervio mediano bajo el túnel carpiano que causa entumecimiento/hormigueo nocturno de la mano (pulgar-medio), debilidad y atrofia tenar si es severo; asociado a embarazo, diabetes, hipotiroidismo, uso repetitivo."
      },
      {
        "id": "d87-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Férula de muñeca en posición neutra (nocturna)",
            "text": "Férula de muñeca de venta libre\nUsada en la noche manteniendo la muñeca neutra · — · Cada noche · Ensayo de 4-6 semanas"
          },
          {
            "title": "#2 · Inyección de corticosteroide en el túnel carpiano",
            "text": "Metilprednisolona (Depo-Medrol) 20-40 mg + lidocaína\nInyección única · Inyección local · 1 vez (repetir una vez si respuesta parcial) · Alivio de semanas-meses"
          },
          {
            "title": "#3 · Liberación quirúrgica del túnel carpiano (abierta o…",
            "text": "—\n— · Cirugía ambulatoria · — · Procedimiento único"
          }
        ]
      }
    ],
    "alertText": "Atrofia de músculos tenares o entumecimiento constante (enfermedad avanzada — cirugía pronto), enfermedad severa bilateral.",
    "note": "Evidencia: AAOS CTS Guideline 2024"
  },
  {
    "id": "d88",
    "badge": "MUSCULOESQUELÉTICO",
    "eyebrow": "PERFIL CLÍNICO Nº 88",
    "headlineA": "FIBROMIALGIA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d88-lead",
        "type": "lead",
        "text": "Síndrome de amplificación central del dolor que causa dolor musculoesquelético generalizado, fatiga, sueño no reparador y niebla cognitiva, sin daño tisular; afecta 2-4% de adultos, predominantemente mujeres."
      },
      {
        "id": "d88-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Ejercicio aeróbico + de fortalecimiento",
            "text": "—\nPrograma aeróbico graduado (iniciar 10 min de bajo impacto, subir a 30+ min) + entrenamiento de resistencia · — · 3-5 veces por semana · Continuo"
          },
          {
            "title": "#2 · Duloxetina o pregabalina (o amitriptilina en dosis…",
            "text": "Cymbalta; Lyrica; Elavil\nDuloxetina 30→60 mg diarios; pregabalina 75→150-300 mg 2 veces/día; amitriptilina 10-25 mg en la noche · VO · Diario · Ensayo de 3 meses a dosis objetivo"
          },
          {
            "title": "#3 · Terapia cognitivo-conductual",
            "text": "—\nPrograma de TCC enfocado en dolor · — · Semanal · 8-12 sesiones"
          }
        ]
      }
    ],
    "alertText": "Tamizar mímicos: hipotiroidismo, deficiencia de vitamina D, artritis inflamatoria (marcadores inflamatorios), comorbilidad de depresión/ansiedad.",
    "note": "Evidencia: EULAR 2017 Fibromyalgia Recommendations"
  },
  {
    "id": "cat-89",
    "badge": "SECCIÓN",
    "eyebrow": "CATEGORÍA · 4 PERFILES",
    "headlineA": "OÍDO, NARIZ,",
    "headlineB": "GARGANTA Y OJOS",
    "blocks": [
      {
        "id": "cat-89-stats",
        "type": "stats",
        "items": [
          {
            "value": "4",
            "label": "enfermedades en esta categoría (Nº 89–92)."
          },
          {
            "value": "2",
            "label": "curables."
          },
          {
            "value": "2",
            "label": "controlables o autolimitadas."
          }
        ]
      },
      {
        "id": "cat-89-lead",
        "type": "lead",
        "text": "Conjuntivitis alérgica, Glaucoma primario de ángulo abierto, Catarata, Otitis externa (oído de nadador)"
      }
    ]
  },
  {
    "id": "d89",
    "badge": "OÍDO, NARIZ, GARGANTA Y OJOS",
    "eyebrow": "PERFIL CLÍNICO Nº 89",
    "headlineA": "CONJUNTIVITIS",
    "headlineB": "ALÉRGICA",
    "blocks": [
      {
        "id": "d89-lead",
        "type": "lead",
        "text": "Inflamación conjuntival mediada por IgE que causa picor bilateral, lagrimeo y enrojecimiento, acompañando rinitis alérgica; el picor es el rasgo distintivo frente a causas infecciosas."
      },
      {
        "id": "d89-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Antihistamínico/estabilizador de mastocitos de…",
            "text": "Pataday (olopatadina 0.1-0.7%); Zaditor (ketotifeno…)\n1 gota por ojo · Oftálmica · 1 o 2 veces al día · Durante toda la temporada de alérgenos"
          },
          {
            "title": "#2 · Lágrimas artificiales + evitación de alérgenos +…",
            "text": "Refresh, Systane (preferir sin conservantes)\n1-2 gotas · Oftálmica · 4+ veces al día según necesidad · Continuo"
          },
          {
            "title": "#3 · Corticosteroide tópico (loteprednol) curso corto…",
            "text": "Lotemax 0.5%\n1-2 gotas · Oftálmica · 2-4 veces al día · ≤2 semanas, en descenso"
          }
        ]
      }
    ],
    "alertText": "Enfermedad unilateral, dolor, fotofobia, cambio de visión (no es alergia simple — evaluar), portadora de lentes de contacto con dolor (queratitis).",
    "note": "Evidencia: AAO Conjunctivitis Preferred Practice Pattern"
  },
  {
    "id": "d90",
    "badge": "OÍDO, NARIZ, GARGANTA Y OJOS",
    "eyebrow": "PERFIL CLÍNICO Nº 90",
    "headlineA": "GLAUCOMA PRIMARIO",
    "headlineB": "DE ÁNGULO ABIERTO",
    "blocks": [
      {
        "id": "d90-lead",
        "type": "lead",
        "text": "Neuropatía óptica progresiva con presión intraocular elevada y pérdida del campo visual; asintomático hasta fases avanzadas — el tamizaje regular de adultos de riesgo es esencial; el tratamiento detiene la progresión."
      },
      {
        "id": "d90-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Gotas análogas de prostaglandinas: latanoprost (u…",
            "text": "Xalatan; Lumigan; Travatan\n1 gota por ojo · Oftálmica · 1 vez en la noche · De por vida"
          },
          {
            "title": "#2 · Trabeculoplastia láser selectiva (TLS)",
            "text": "—\n— · Láser en consultorio · Sesión única (repetible) · Efecto de 1-5 años"
          },
          {
            "title": "#3 · Trabeculectomía o MIGS (iStent, Hydrus) para…",
            "text": "—\n— · Quirúrgica · — · Procedimiento único"
          }
        ]
      }
    ],
    "alertText": "Pérdida de campo avanzada al diagnóstico, progresión rápida pese a PIO objetivo, cierre angular (agudo: ojo rojo doloroso con halos — emergencia, enfermedad distinta).",
    "note": "Evidencia: AAO POAG Preferred Practice Pattern; ensayo LiGHT (Lancet 2019)"
  },
  {
    "id": "d91",
    "badge": "OÍDO, NARIZ, GARGANTA Y OJOS",
    "eyebrow": "PERFIL CLÍNICO Nº 91",
    "headlineA": "CATARATA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d91-lead",
        "type": "lead",
        "text": "Opacificación relacionada con la edad del cristalino que causa visión borrosa gradual, deslumbramiento y contraste reducido; la principal causa de ceguera reversible en el mundo."
      },
      {
        "id": "d91-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Facoemulsificación con implante de lente…",
            "text": "—\n— · Cirugía ambulatoria (15-30 min) · — · Procedimiento único por ojo"
          },
          {
            "title": "#2 · Capsulotomía YAG (opacificación de cápsula…",
            "text": "—\n— · Láser en consultorio · Sesión única · Minutos"
          },
          {
            "title": "#3 · Optimización refractiva (actualizar gafas/lentes)…",
            "text": "—\n— · — · — · Interina"
          }
        ]
      }
    ],
    "alertText": "Pérdida súbita e indolora de visión (no es catarata — evaluación retiniana/vascular), complicaciones de catarata madura/hipermadura (glaucoma).",
    "note": "Evidencia: AAO Cataract in the Adult Eye PPP; recursos WHO Vision 2030"
  },
  {
    "id": "d92",
    "badge": "OÍDO, NARIZ, GARGANTA Y OJOS",
    "eyebrow": "PERFIL CLÍNICO Nº 92",
    "headlineA": "OTITIS EXTERNA",
    "headlineB": "(OÍDO DE NADADOR)",
    "blocks": [
      {
        "id": "d92-lead",
        "type": "lead",
        "text": "Infección bacteriana del canal auditivo (Pseudomonas, S. aureus) tras exposición al agua/trauma, causando dolor de oído que empeora al tirar del pabellón auricular, secreción e inflamación del canal."
      },
      {
        "id": "d92-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Gotas tópicas de antibiótico/esteroide:…",
            "text": "Ciprodex; Floxin Otic; Cortisporin\nCiprodex 4 gotas; ofloxacino 5-10 gotas · Ótica · 2 veces al día · 7-10 días"
          },
          {
            "title": "#2 · Aseo aural (limpieza/desbridamiento del canal)",
            "text": "—\nSucción/fregado en seco por el clínico · — · 1-2 visitas · —"
          },
          {
            "title": "#3 · Antibióticos orales (ciprofloxacino) para…",
            "text": "Cipro\n500-750 mg · VO · 2 veces al día · 7-10 días"
          }
        ]
      }
    ],
    "alertText": "Otitis externa maligna en diabéticos/inmunocomprometidos (osteomielitis de base de cráneo por Pseudomonas — terapia IV antipseudomona, emergencia), pericondritis, compromiso del nervio facial.",
    "note": "Evidencia: AAO-HNS Acute Otitis Externa Guideline 2014"
  },
  {
    "id": "cat-93",
    "badge": "SECCIÓN",
    "eyebrow": "CATEGORÍA · 5 PERFILES",
    "headlineA": "SALUD DE LA MUJER",
    "headlineB": "",
    "blocks": [
      {
        "id": "cat-93-stats",
        "type": "stats",
        "items": [
          {
            "value": "5",
            "label": "enfermedades en esta categoría (Nº 93–97)."
          },
          {
            "value": "2",
            "label": "curables."
          },
          {
            "value": "3",
            "label": "controlables o autolimitadas."
          }
        ]
      },
      {
        "id": "cat-93-lead",
        "type": "lead",
        "text": "Vaginosis bacteriana, Endometriosis, Síndrome de ovario poliquístico (SOP), Dismenorrea primaria, Síntomas vasomotores menopáusicos"
      }
    ]
  },
  {
    "id": "d93",
    "badge": "SALUD DE LA MUJER",
    "eyebrow": "PERFIL CLÍNICO Nº 93",
    "headlineA": "VAGINOSIS BACTERIANA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d93-lead",
        "type": "lead",
        "text": "Disbiosis vaginal (pérdida de lactobacilos, sobrecrecimiento de anaerobios como Gardnerella) que causa flujo gris fino con olor a pescado; no es una ITS pero se asocia a adquisición de ITS y complicaciones del embarazo."
      },
      {
        "id": "d93-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Metronidazol (oral o gel vaginal)",
            "text": "Flagyl; MetroGel-Vaginal\nOral 500 mg; gel 0.75% un aplicador (5 g) · VO / intravaginal · Oral 2 veces/día; gel 1 vez al día · 7 días (oral) / 5 días (gel)"
          },
          {
            "title": "#2 · Crema de clindamicina 2%",
            "text": "Cleocin Vaginal\nUn aplicador (5 g) · Intravaginal · En la noche · 7 días"
          },
          {
            "title": "#3 · Metronidazol gel de mantenimiento extendido +…",
            "text": "MetroGel; productos con Lactobacillus\nGel 0.75% 2 veces por semana ×4-6 meses · Intravaginal / VO · 2 veces por semana · 4-6 meses"
          }
        ]
      }
    ],
    "alertText": "Embarazo con síntomas (asociado a parto pretérmino — tratar), síntomas de EPI (evaluar ITS).",
    "note": "Evidencia: CDC STI Treatment Guidelines 2021"
  },
  {
    "id": "d94",
    "badge": "SALUD DE LA MUJER",
    "eyebrow": "PERFIL CLÍNICO Nº 94",
    "headlineA": "ENDOMETRIOSIS",
    "headlineB": "",
    "blocks": [
      {
        "id": "d94-lead",
        "type": "lead",
        "text": "Tejido tipo endometrial ectópico (ovarios, pelvis) que causa inflamación cíclica: dismenorrea, dispareunia, dolor pélvico crónico e infertilidad; dependiente de estrógenos, por lo que la supresión hormonal es terapéutica."
      },
      {
        "id": "d94-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · AINE + anticonceptivo hormonal combinado",
            "text": "Ibuprofeno; varios AHC (p. ej., Sprintec, Yaz)\nIbuprofeno 400-800 mg 3 veces/día durante el dolor; AHC una tableta diaria (pauta continua omite reglas) · VO · AINE con comidas según necesidad; AHC diario,…"
          },
          {
            "title": "#2 · Agonista/antagonista de GnRH con terapia de…",
            "text": "Lupron (leuprolida 3.75 mg IM mensual); Orilissa…\nLeuprolida 3.75 mg IM mensual; elagolix 150 mg diarios (200 mg 2 veces/día si severa) · IM / VO · Mensual / diario · Hasta 24 meses (la terapia de rescate…"
          },
          {
            "title": "#3 · Cirugía de escisión laparoscópica",
            "text": "—\n— · Quirúrgica · — · Procedimiento único ± repetición"
          }
        ]
      }
    ],
    "alertText": "Endometrioma rota (abdomen agudo), infertilidad severa (referencia de fertilidad temprana), obstrucción intestinal/ureteral por enfermedad infiltrativa profunda.",
    "note": "Evidencia: ESHRE Endometriosis Guideline 2022"
  },
  {
    "id": "d95",
    "badge": "SALUD DE LA MUJER",
    "eyebrow": "PERFIL CLÍNICO Nº 95",
    "headlineA": "SÍNDROME DE OVARIO",
    "headlineB": "POLIQUÍSTICO (SOP)",
    "blocks": [
      {
        "id": "d95-lead",
        "type": "lead",
        "text": "Trastorno endocrino de hiperandrogenismo, disfunción ovulatoria y ovarios poliquísticos que causa reglas irregulares, hirsutismo, acné, infertilidad y resistencia a la insulina con riesgo metabólico a largo plazo."
      },
      {
        "id": "d95-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Intervención en el estilo de vida: pérdida de peso…",
            "text": "—\nRestricción calórica + ≥150 min/semana de ejercicio + apoyo conductual · — · Diario · Continuo"
          },
          {
            "title": "#2 · Anticonceptivo oral combinado (regularización…",
            "text": "Varios (p. ej., Sprintec, Yasmin — drospirenona…)\nUna tableta diaria (21/7 o continua) · VO · Diario · Hasta desear fertilidad"
          },
          {
            "title": "#3 · Metformina (rasgos metabólicos) / letrozol…",
            "text": "Glucophage; Femara\nMetformina 500 mg → 1,500-2,000 mg/día; letrozol 2.5-7.5 mg días 3-7 del ciclo · VO · Metformina diaria con comidas; letrozol por ciclo · Largo plazo…"
          }
        ]
      }
    ],
    "alertText": "Hiperplasia endometrial por anovulación crónica, desarrollo de diabetes tipo 2 (tamizar), hiperandrogenismo severo (excluir tumor si inicio rápido).",
    "note": "Evidencia: International Evidence-based PCOS Guideline 2023 (Monash/ESHRE/ASRM)"
  },
  {
    "id": "d96",
    "badge": "SALUD DE LA MUJER",
    "eyebrow": "PERFIL CLÍNICO Nº 96",
    "headlineA": "DISMENORREA PRIMARIA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d96-lead",
        "type": "lead",
        "text": "Cólicos menstruales dolorosos sin patología pélvica, impulsados por contracciones uterinas mediadas por prostaglandinas; afecta 50-90% de mujeres jóvenes y es la principal causa de ausencia escolar/laboral en este grupo."
      },
      {
        "id": "d96-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · AINE: ibuprofeno o naproxeno (iniciar antes/al…",
            "text": "Advil; Aleve\nIbuprofeno 400-600 mg; naproxeno 500 mg luego 250-500 mg · VO · Cada 6-8 h (ibuprofeno) / 12 h (naproxeno) durante los primeros 1-3 días de la regla · 2-3…"
          },
          {
            "title": "#2 · Anticonceptivo hormonal combinado (o DIU-LNG)",
            "text": "Varios AHC; Mirena\nAHC una tableta diaria (pauta continua maximiza beneficio); Mirena 52 mg LNG · VO / intrauterino · Diario / dispositivo ×5-8 años · Largo plazo"
          },
          {
            "title": "#3 · Calor + ejercicio",
            "text": "—\nAlmohadilla/parche térmico en bajo vientre 38-40 °C; ejercicio aeróbico regular · Tópica / — · Según necesidad durante la regla / regular · —"
          }
        ]
      }
    ],
    "alertText": "Signos de dismenorrea secundaria: inicio tras los 25, empeoramiento progresivo, dispareunia, dolor no cíclico (evaluar endometriosis/adenomiosis con ultrasonido ± laparoscopia).",
    "note": "Evidencia: Cochrane: AINEs para dismenorrea primaria; guía ACOG"
  },
  {
    "id": "d97",
    "badge": "SALUD DE LA MUJER",
    "eyebrow": "PERFIL CLÍNICO Nº 97",
    "headlineA": "SÍNTOMAS VASOMOTORES",
    "headlineB": "MENOPÁUSICOS",
    "blocks": [
      {
        "id": "d97-lead",
        "type": "lead",
        "text": "Bochornos y sudoración nocturna por el efecto de la privación de estrógeno sobre la termorregulación hipotalámica; afectan ~75% de mujeres menopáusicas, duración mediana 7-10 años, deteriorando sueño y calidad de vida."
      },
      {
        "id": "d97-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Terapia hormonal menopáusica: estradiol ±…",
            "text": "Parche Estrace/Climara (estradiol 0.025-0.1 mg);…\nEstradiol a la dosis mínima eficaz; progesterona 100 mg continua o 200 mg cíclica ×12-14 días (si hay útero) · VO / transdérmica · Diario ·…"
          },
          {
            "title": "#2 · Paroxetina a dosis baja (7.5 mg) o venlafaxina",
            "text": "Brisdelle; Effexor XR\nParoxetina 7.5 mg en la noche; venlafaxina 37.5-75 mg diarios · VO · Diario · Duración de los síntomas"
          },
          {
            "title": "#3 · Fezolinetant (antagonista del receptor NK3)",
            "text": "Veozah\n45 mg · VO · 1 vez al día · Duración de los síntomas"
          }
        ]
      }
    ],
    "alertText": "Sangrado posmenopáusico (evaluación endometrial obligatoria), bochornos de nuevo inicio con otros síntomas (tiroides, trabajo de carcinoides).",
    "note": "Evidencia: NAMS 2022/2023 Position Statements; aprobación FDA fezolinetant (ensayos SKYLIGHT)"
  },
  {
    "id": "cat-98",
    "badge": "SECCIÓN",
    "eyebrow": "CATEGORÍA · 3 PERFILES",
    "headlineA": "OTROS",
    "headlineB": "",
    "blocks": [
      {
        "id": "cat-98-stats",
        "type": "stats",
        "items": [
          {
            "value": "3",
            "label": "enfermedades en esta categoría (Nº 98–100)."
          },
          {
            "value": "2",
            "label": "curables."
          },
          {
            "value": "1",
            "label": "controlables o autolimitadas."
          }
        ]
      },
      {
        "id": "cat-98-lead",
        "type": "lead",
        "text": "Anafilaxia, Enfermedad de células falciformes, Apendicitis aguda"
      }
    ]
  },
  {
    "id": "d98",
    "badge": "OTROS",
    "eyebrow": "PERFIL CLÍNICO Nº 98",
    "headlineA": "ANAFILAXIA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d98-lead",
        "type": "lead",
        "text": "Reacción alérgica sistémica mortal (alimentos, fármacos, veneno de insectos) con inflamación de vías respiratorias, hipotensión y compromiso multiorgánico; los minutos importan — el retraso de la epinefrina es el principal predictor de fatalidad."
      },
      {
        "id": "d98-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Epinefrina (adrenalina) IM en cara…",
            "text": "EpiPen/Auvi-Q autoinyector (0.3 mg adultos; 0.15 mg…)\n0.3-0.5 mg (1:1000) IM; niños 0.01 mg/kg · Intramuscular (cara anterolateral del muslo) · Dosis única, REPETIR cada 5-15 min si no mejora · Hasta…"
          },
          {
            "title": "#2 · Adyuvantes: antihistamínico H1…",
            "text": "Benadryl 25-50 mg; Zyrtec 10 mg; Solu-Medrol 125 mg IV…\nSegún fármaco · VO / IV · Después de la epinefrina · Dosis única / 1-2 días"
          },
          {
            "title": "#3 · Identificación/evitación del alérgeno + autoinyector…",
            "text": "—\n— · — · Llevarlo siempre · De por vida"
          }
        ]
      }
    ],
    "alertText": "Cualquier compromiso de vía respiratoria (ronquera, estridor, inflamación de lengua) o circulatorio (hipotensión, colapso) = epinefrina inmediatamente; recurrencia bifásica.",
    "note": "Evidencia: WAO Anaphylaxis Guidance 2020; AAAAI/ACAAI Practice Parameters"
  },
  {
    "id": "d99",
    "badge": "OTROS",
    "eyebrow": "PERFIL CLÍNICO Nº 99",
    "headlineA": "ENFERMEDAD DE",
    "headlineB": "CÉLULAS FALCIFORMES",
    "blocks": [
      {
        "id": "d99-lead",
        "type": "lead",
        "text": "Mutación heredada de la hemoglobina S que causa falcización de eritrocitos, crisis de dolor vaso-oclusivo, anemia, accidente cerebrovascular y daño orgánico; la hidroxiurea y los modificadores modernos de la enfermedad reducen las crisis, y ya existen terapias génicas curativas aprobadas."
      },
      {
        "id": "d99-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Hidroxiurea",
            "text": "Hydrea, Droxia\nIniciar 15 mg/kg/día, titular a la máxima tolerada 25-35 mg/kg · VO · 1 vez al día · Largo plazo (a menudo de por vida)"
          },
          {
            "title": "#2 · Transfusiones / voxelotor / crizanlizumab…",
            "text": "Oxbryta (voxelotor 1,500 mg diarios); Adakveo…\nSegún fármaco · VO / IV · Diario / mensual · Largo plazo"
          },
          {
            "title": "#3 · Curativa: trasplante de células madre hematopoyéticas…",
            "text": "Casgevy (exa-cel); Lyfgenia (lovo-cel)\n— · IV (terapia celular única) · Tratamiento único · Una sola vez"
          }
        ]
      }
    ],
    "alertText": "Síndrome torácico agudo (fiebre + dolor torácico + infiltrado nuevo — emergencia), síntomas de accidente cerebrovascular, priapismo >4 h, secuestro esplénico (niños), crisis severa no controlada con analgesia oral.",
    "note": "Evidencia: ASH 2019-2020 SCD Guidelines; aprobaciones FDA Casgevy/Lyfgenia 2023"
  },
  {
    "id": "d100",
    "badge": "OTROS",
    "eyebrow": "PERFIL CLÍNICO Nº 100",
    "headlineA": "APENDICITIS AGUDA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d100-lead",
        "type": "lead",
        "text": "Obstrucción e inflamación bacteriana del apéndice que causa dolor migratorio en cuadrante inferior derecho, náuseas y fiebre; sin tratamiento, la perforación lleva a peritonitis y sepsis."
      },
      {
        "id": "d100-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Apendicectomía laparoscópica",
            "text": "—\n— · Quirúrgica (mínimamente invasiva) · — · Procedimiento único, típicamente alta en 24-48 h"
          },
          {
            "title": "#2 · Antibióticos primero (casos no complicados…",
            "text": "Rocephin + Flagyl; luego Augmentin en descenso\nCeftriaxona 1-2 g IV diarios + metronidazol 500 mg IV/VO 3 veces/día; amoxicilina-clavulanato oral 875/125 mg 2 veces/día para completar · IV luego VO · Según…"
          },
          {
            "title": "#3 · Cuidados perioperatorios de apoyo: líquidos IV,…",
            "text": "—\nCristaloide isotónico; morfina/fentanilo titulado; ondansetrón 4 mg · IV · Según necesidad · Período perioperatorio"
          }
        ]
      }
    ],
    "alertText": "Peritonitis difusa (abdomen rígido, fiebre, taquicardia — cirugía de emergencia), formación de absceso (drenaje guiado por imagen), apendicolito en TC (favorece cirugía).",
    "note": "Evidencia: Ensayo CODA (NEJM 2020); WSES Jerusalem Guidelines 2020"
  },
  {
    "id": "closing",
    "badge": "FUENTES",
    "eyebrow": "REFERENCIAS",
    "headlineA": "BASADO EN GUÍAS",
    "headlineB": "CLÍNICAS.",
    "blocks": [
      {
        "id": "close-check",
        "type": "checklist",
        "items": [
          {
            "text": "ADA Standards of Care 2025 — diabetes."
          },
          {
            "text": "IDSA y AAP — guías de práctica en enfermedades infecciosas."
          },
          {
            "text": "ATS/IDSA 2019 — neumonía adquirida en comunidad."
          },
          {
            "text": "Gastroenterology, Gut, Hepatology, Circulation, NEJM y Annals of Internal Medicine."
          }
        ]
      }
    ],
    "alertText": "Material educativo — *no sustituye* la orientación de tu médico o farmacéutico. Dosis estándar de adulto; ajusta siempre por paciente.",
    "note": "Las 24 referencias completas están en la hoja \"References\" del archivo original."
  }
]
