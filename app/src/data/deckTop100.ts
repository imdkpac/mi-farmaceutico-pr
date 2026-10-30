import type { SlideData } from '@/types/slide'

/**
 * Baraja generada desde "Top 100 Common Diseases — Detailed Treatments
 * and Clinical Profiles.xlsx" (hojas Disease Profiles + Treatments Detail
 * + Summary). 118 diapositivas: portada, resumen de curabilidad, 15
 * divisores de categoría, 100 perfiles clínicos y cierre de referencias.
 */
export const DECK_TOP100: SlideData[] = [
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
        "text": "Los 100 diagnósticos más comunes con sus tratamientos rankeados, señales de alarma y base de evidencia — una diapositiva por enfermedad, lista para editar y exportar."
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
        "text": "Streptococcal pharyngitis (strep throat), Acute otitis media, Acute bacterial sinusitis, Community-acquired pneumonia, Tuberculosis, Uncomplicated urinary tract infection (cystitis), Syphilis, Gonorrhea, Chlamydia trachomatis infection, H. pylori-associated peptic ulcer disease, Lyme disease (early…"
      }
    ]
  },
  {
    "id": "d1",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 1",
    "headlineA": "STREPTOCOCCAL PHARYNGITIS",
    "headlineB": "(STREP THROAT)",
    "blocks": [
      {
        "id": "d1-lead",
        "type": "lead",
        "text": "Acute pharyngeal infection by group A Streptococcus (S. pyogenes), spread by respiratory droplets, peaking in children 5-15 years. Untreated, it can trigger acute rheumatic fever and post-streptococcal glomerulonephritis."
      },
      {
        "id": "d1-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Phenoxymethylpenicillin (penicillin V) — or…",
            "text": "Pen-Vee K; amoxicillin: Amoxil\nPen V 500 mg (children 250 mg); amoxicillin 500 mg (children 50 mg/kg, max 1 g) · Oral · Pen V 2-3 times daily; amoxicillin once or twice daily…"
          },
          {
            "title": "#2 · Cephalexin",
            "text": "Keflex\n500 mg (children 25-50 mg/kg/day) · Oral · Twice daily (children divided 2-4 doses) · 10 days"
          },
          {
            "title": "#3 · Azithromycin (or clarithromycin)",
            "text": "Zithromax (Z-Pak); Biaxin\nAzithromycin 500 mg day 1, then 250 mg days 2-5; clarithromycin 250 mg · Oral · Azithromycin once daily; clarithromycin twice daily · 5 days…"
          }
        ]
      }
    ],
    "alertText": "Drooling, trismus, muffled 'hot potato' voice (peritonsillar abscess); neck stiffness; dehydration; scarlatiniform rash with toxicity.",
    "note": "Evidencia: IDSA 2012 Group A Streptococcal Pharyngitis Guideline"
  },
  {
    "id": "d2",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 2",
    "headlineA": "ACUTE OTITIS MEDIA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d2-lead",
        "type": "lead",
        "text": "Bacterial infection of the middle ear, most common in children 6-24 months, typically following a viral upper respiratory infection. Main pathogens: S. pneumoniae, non-typeable H. influenzae, M. catarrhalis."
      },
      {
        "id": "d2-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Amoxicillin",
            "text": "Amoxil\nChildren 80-90 mg/kg/day (max 3 g); adults 500-875 mg · Oral · Divided twice daily · 5-10 days (10 days if <2 years or severe)"
          },
          {
            "title": "#2 · Amoxicillin-clavulanate",
            "text": "Augmentin\nAdults 875/125 mg; children 90 mg/kg/day (ES-600 formulation) · Oral · Twice daily with food · 7-10 days"
          },
          {
            "title": "#3 · Ceftriaxone",
            "text": "Rocephin\n1-2 g (children 50 mg/kg, max 1 g) · IM or IV · Once daily · 1-3 days"
          }
        ]
      }
    ],
    "alertText": "Mastoid tenderness/swelling (mastoiditis), facial nerve palsy, meningismus, toxic appearance in infants.",
    "note": "Evidencia: AAP 2013 Clinical Practice Guideline for AOM"
  },
  {
    "id": "d3",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 3",
    "headlineA": "ACUTE BACTERIAL",
    "headlineB": "SINUSITIS",
    "blocks": [
      {
        "id": "d3-lead",
        "type": "lead",
        "text": "Bacterial complication of viral rhinosinusitis, diagnosed when symptoms persist >10 days, are severe (fever ≥39 °C with purulent discharge), or 'double-worsen'. Same pathogens as otitis media."
      },
      {
        "id": "d3-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Amoxicillin-clavulanate",
            "text": "Augmentin\n875/125 mg (children 45 mg/kg/day) · Oral · Twice daily with food · 5-10 days (adults typically 5-7)"
          },
          {
            "title": "#2 · Doxycycline",
            "text": "Vibramycin, Doryx\n100 mg · Oral · Twice daily (day 1: 100 mg twice, then once or twice daily) · 5-10 days"
          },
          {
            "title": "#3 · Intranasal mometasone + saline irrigation (symptom…",
            "text": "Nasonex\nMometasone 100 mcg per nostril (2 sprays of 50 mcg) · Intranasal · Once daily · 2-4 weeks"
          }
        ]
      }
    ],
    "alertText": "Periorbital edema/erythema, vision changes, ophthalmoplegia (orbital cellulitis), severe headache or neurologic signs (intracranial extension), frontal bone swelling (Pott puffy tumor).",
    "note": "Evidencia: IDSA 2012 Rhinosinusitis Guideline"
  },
  {
    "id": "d4",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 4",
    "headlineA": "COMMUNITY-ACQUIRED",
    "headlineB": "PNEUMONIA",
    "blocks": [
      {
        "id": "d4-lead",
        "type": "lead",
        "text": "Acute lung parenchymal infection acquired outside hospital; S. pneumoniae is the most common bacterial cause, with atypicals (Mycoplasma, Chlamydophila) and viruses frequent. Severity stratified by CURB-65 or PSI."
      },
      {
        "id": "d4-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Amoxicillin (healthy outpatients) — or…",
            "text": "Amoxil; Augmentin + Zithromax\nAmoxicillin 1 g; amox-clav 875/125 mg; azithromycin 500 mg day 1 then 250 mg · Oral · Amoxicillin 3 times daily; amox-clav twice daily;…"
          },
          {
            "title": "#2 · Levofloxacin or moxifloxacin (respiratory…",
            "text": "Levaquin; Avelox\nLevofloxacin 750 mg; moxifloxacin 400 mg · Oral or IV · Once daily · 5 days (levo) / 5-7 days (moxi)"
          },
          {
            "title": "#3 · Doxycycline",
            "text": "Vibramycin\n100 mg · Oral · Twice daily · 5-7 days"
          }
        ]
      }
    ],
    "alertText": "CURB-65 ≥2 (consider admission), hypotension, confusion, SpO2 <92%, multilobar infiltrates, sepsis.",
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
        "text": "Chronic infection by Mycobacterium tuberculosis, usually pulmonary, transmitted by airborne droplets. Drug-susceptible TB is cured with multi-drug therapy; monotherapy rapidly selects resistance."
      },
      {
        "id": "d5-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · RIPE regimen: isoniazid + rifampin + pyrazinamide +…",
            "text": "INH: Nydrazid; RIF: Rifadin; PZA; EMB: Myambutol\nINH 300 mg (5 mg/kg); RIF 600 mg (10 mg/kg); PZA 25 mg/kg; EMB 15 mg/kg; + pyridoxine 25-50 mg · Oral · Once daily · 2 months RIPE (intensive),…"
          },
          {
            "title": "#2 · 4-month regimen: rifapentine + moxifloxacin +…",
            "text": "Priftin; Avelox\nRifapentine weight-banded up to 1,200 mg; moxifloxacin 400 mg; INH 300 mg; PZA per weight · Oral · Once daily · 8 weeks all four, then 9 weeks…"
          },
          {
            "title": "#3 · Directly observed therapy + drug-susceptibility…",
            "text": "—\n— · — · — · Full course"
          }
        ]
      }
    ],
    "alertText": "Hemoptysis, meningitis (TB meningitis — emergency), miliary spread, spinal involvement (Pott disease), paradoxical worsening in HIV/TB co-infection (IRIS).",
    "note": "Evidencia: WHO Consolidated Guidelines on Tuberculosis, Module 4 (2022); CDC 2021 rifapentine-moxifloxacin MMWR"
  },
  {
    "id": "d6",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 6",
    "headlineA": "UNCOMPLICATED URINARY",
    "headlineB": "TRACT INFECTION (CYSTITIS)",
    "blocks": [
      {
        "id": "d6-lead",
        "type": "lead",
        "text": "Bacterial infection of the bladder, predominantly E. coli, very common in women of reproductive age. Presents with dysuria, frequency, urgency; absence of fever/flank pain distinguishes it from pyelonephritis."
      },
      {
        "id": "d6-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Nitrofurantoin monohydrate/macrocrystals",
            "text": "Macrobid\n100 mg · Oral · Twice daily with food · 5 days"
          },
          {
            "title": "#2 · Trimethoprim-sulfamethoxazole",
            "text": "Bactrim DS, Septra DS\n160/800 mg (1 DS tablet) · Oral · Twice daily · 3 days"
          },
          {
            "title": "#3 · Fosfomycin tromethamine",
            "text": "Monurol\n3 g sachet dissolved in water · Oral · Single dose · Single dose"
          }
        ]
      }
    ],
    "alertText": "Fever, flank pain, vomiting (pyelonephritis), sepsis signs, symptoms in men (always complicated), pregnancy with pyelonephritis.",
    "note": "Evidencia: IDSA 2011 Acute Uncomplicated Cystitis/Pyelonephritis Guideline"
  },
  {
    "id": "d7",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 7",
    "headlineA": "SYPHILIS",
    "headlineB": "",
    "blocks": [
      {
        "id": "d7-lead",
        "type": "lead",
        "text": "Systemic infection by Treponema pallidum, sexually or vertically transmitted, staged as primary (chancre), secondary (rash), latent, and tertiary. Penicillin remains universally effective."
      },
      {
        "id": "d7-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Penicillin G benzathine",
            "text": "Bicillin L-A\n2.4 million units (early disease); 2.4 MU weekly ×3 doses (late latent/tertiary) · Intramuscular · Single dose (early); weekly ×3 (late) ·…"
          },
          {
            "title": "#2 · Doxycycline",
            "text": "Vibramycin\n100 mg · Oral · Twice daily · 14 days (early); 28 days (late latent)"
          },
          {
            "title": "#3 · Ceftriaxone",
            "text": "Rocephin\n1-2 g · IM or IV · Once daily · 10-14 days"
          }
        ]
      }
    ],
    "alertText": "Neurologic/ocular/otologic symptoms at any stage (neurosyphilis — needs IV aqueous penicillin G 3-4 MU q4h ×10-14 days), pregnancy with syphilis (congenital risk).",
    "note": "Evidencia: CDC STI Treatment Guidelines 2021 (MMWR)"
  },
  {
    "id": "d8",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 8",
    "headlineA": "GONORRHEA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d8-lead",
        "type": "lead",
        "text": "Infection by Neisseria gonorrhoeae causing urethritis/cervicitis, often asymptomatic in women; can cause PID, infertility, and disseminated disease. Resistance has eliminated most oral options."
      },
      {
        "id": "d8-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Ceftriaxone",
            "text": "Rocephin\n500 mg (1 g if body weight ≥150 kg) · Intramuscular · Single dose · Single dose"
          },
          {
            "title": "#2 · Doxycycline (added when chlamydia not excluded)",
            "text": "Vibramycin\n100 mg · Oral · Twice daily · 7 days"
          },
          {
            "title": "#3 · Gentamicin + azithromycin (allergy/alternative)",
            "text": "Garamycin; Zithromax\nGentamicin 240 mg IM once + azithromycin 2 g PO once · IM + oral · Single dose · Single dose"
          }
        ]
      }
    ],
    "alertText": "PID (pelvic pain, fever), disseminated gonococcal infection (tenosynovitis, dermatitis, arthritis), epididymitis, pregnancy complications.",
    "note": "Evidencia: CDC STI Treatment Guidelines 2021"
  },
  {
    "id": "d9",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 9",
    "headlineA": "CHLAMYDIA",
    "headlineB": "TRACHOMATIS INFECTION",
    "blocks": [
      {
        "id": "d9-lead",
        "type": "lead",
        "text": "Most common bacterial STI worldwide; frequently asymptomatic, especially in women. Untreated, causes pelvic inflammatory disease, ectopic pregnancy, and infertility."
      },
      {
        "id": "d9-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Doxycycline",
            "text": "Vibramycin, Doryx\n100 mg · Oral · Twice daily · 7 days"
          },
          {
            "title": "#2 · Azithromycin",
            "text": "Zithromax\n1 g · Oral · Single dose · Single dose"
          },
          {
            "title": "#3 · Levofloxacin",
            "text": "Levaquin\n500 mg · Oral · Once daily · 7 days"
          }
        ]
      }
    ],
    "alertText": "PID symptoms (pelvic pain, fever, dyspareunia), epididymo-orchitis in men, reactive arthritis (Reiter syndrome).",
    "note": "Evidencia: CDC STI Treatment Guidelines 2021"
  },
  {
    "id": "d10",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 10",
    "headlineA": "H. PYLORI-ASSOCIATED",
    "headlineB": "PEPTIC ULCER DISEASE",
    "blocks": [
      {
        "id": "d10-lead",
        "type": "lead",
        "text": "Chronic gastric infection by Helicobacter pylori causing gastritis, peptic ulcers, and increasing gastric cancer risk. Eradication cures ulcers and prevents recurrence."
      },
      {
        "id": "d10-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Clarithromycin triple therapy: omeprazole +…",
            "text": "Prilosec + Biaxin + Amoxil\nOmeprazole 20-40 mg; clarithromycin 500 mg; amoxicillin 1,000 mg · Oral · All twice daily · 14 days"
          },
          {
            "title": "#2 · Bismuth quadruple therapy: PPI + bismuth…",
            "text": "Prilosec + Pepto-Bismol + Achromycin + Flagyl\nPPI standard dose BID; bismuth 525 mg (2 tabs); tetracycline 500 mg; metronidazole 500 mg · Oral · PPI twice daily; bismuth and tetracycline 4…"
          },
          {
            "title": "#3 · Levofloxacin triple therapy: PPI + levofloxacin +…",
            "text": "Prilosec + Levaquin + Amoxil\nPPI standard dose BID; levofloxacin 500 mg; amoxicillin 1 g · Oral · PPI/amoxicillin twice daily; levofloxacin once daily · 10-14 days"
          }
        ]
      }
    ],
    "alertText": "GI bleeding (melena, hematemesis), perforation (sudden severe abdominal pain), gastric outlet obstruction, unintentional weight loss (malignancy).",
    "note": "Evidencia: ACG 2024 H. pylori Guideline; Maastricht VI/Florence Consensus; Graham et al., Gastroenterology 1992 (triple therapy evidence…"
  },
  {
    "id": "d11",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 11",
    "headlineA": "LYME DISEASE",
    "headlineB": "(EARLY LOCALIZED)",
    "blocks": [
      {
        "id": "d11-lead",
        "type": "lead",
        "text": "Tick-borne infection by Borrelia burgdorferi transmitted by Ixodes ticks; hallmark is erythema migrans rash. Early treatment prevents arthritis, cardiac, and neurologic dissemination."
      },
      {
        "id": "d11-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Doxycycline",
            "text": "Vibramycin\n100 mg · Oral · Twice daily · 10 days"
          },
          {
            "title": "#2 · Amoxicillin",
            "text": "Amoxil\n500 mg · Oral · Three times daily · 14 days"
          },
          {
            "title": "#3 · Cefuroxime axetil",
            "text": "Ceftin\n500 mg · Oral · Twice daily · 14 days"
          }
        ]
      }
    ],
    "alertText": "Facial nerve palsy, meningitis, heart block (carditis), large-joint arthritis — disseminated disease may need IV ceftriaxone 2 g daily ×14-28 days.",
    "note": "Evidencia: IDSA/AAN/ACR 2020 Lyme Disease Guideline"
  },
  {
    "id": "d12",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 12",
    "headlineA": "CELLULITIS",
    "headlineB": "",
    "blocks": [
      {
        "id": "d12-lead",
        "type": "lead",
        "text": "Acute bacterial infection of the dermis and subcutaneous tissue, usually streptococci (non-purulent) or S. aureus including MRSA (purulent). Presents with spreading erythema, warmth, and tenderness."
      },
      {
        "id": "d12-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Cephalexin (non-purulent cellulitis)",
            "text": "Keflex\n500 mg · Oral · Four times daily · 5-7 days"
          },
          {
            "title": "#2 · TMP-SMX or doxycycline (purulent / MRSA risk)",
            "text": "Bactrim DS; Vibramycin\nTMP-SMX 1-2 DS tablets; doxycycline 100 mg · Oral · Twice daily · 5-7 days"
          },
          {
            "title": "#3 · Clindamycin",
            "text": "Cleocin\n300-450 mg · Oral · Four times daily · 5-7 days"
          }
        ]
      }
    ],
    "alertText": "Rapidly spreading pain out of proportion, bullae, skin necrosis, crepitus (necrotizing fasciitis — surgical emergency), fever/hypotension (sepsis).",
    "note": "Evidencia: IDSA 2014 Skin and Soft Tissue Infection Guideline"
  },
  {
    "id": "d13",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 13",
    "headlineA": "PERTUSSIS",
    "headlineB": "(WHOOPING COUGH)",
    "blocks": [
      {
        "id": "d13-lead",
        "type": "lead",
        "text": "Highly contagious respiratory infection by Bordetella pertussis causing paroxysmal cough with inspiratory 'whoop', most dangerous in infants <6 months. Early antibiotics reduce transmission."
      },
      {
        "id": "d13-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Azithromycin",
            "text": "Zithromax\nAdults 500 mg day 1 then 250 mg; infants/children 10 mg/kg/day · Oral · Once daily · 5 days"
          },
          {
            "title": "#2 · Clarithromycin",
            "text": "Biaxin\nAdults 500 mg; children 15 mg/kg/day · Oral · Twice daily · 7 days (adults 14 days per some guidance)"
          },
          {
            "title": "#3 · Trimethoprim-sulfamethoxazole",
            "text": "Bactrim\nAdults 160/800 mg DS; children 8/40 mg/kg/day · Oral · Twice daily · 14 days"
          }
        ]
      }
    ],
    "alertText": "Apnea, cyanosis, or feeding difficulty in infants (admit); pneumonia; seizures/encephalopathy.",
    "note": "Evidencia: CDC Pertussis Clinical Guidance; AAP Red Book"
  },
  {
    "id": "d14",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 14",
    "headlineA": "CHOLERA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d14-lead",
        "type": "lead",
        "text": "Acute secretory diarrhea caused by Vibrio cholerae toxin, contracted via contaminated water. Massive fluid loss ('rice-water stools') can kill within hours; rehydration is the definitive therapy."
      },
      {
        "id": "d14-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Oral rehydration solution (WHO low-osmolarity) — or…",
            "text": "WHO ORS sachets\nORS 50-100 mL/kg over first 4 h (moderate dehydration), then replace ongoing losses; severe: Ringer's lactate 100 mL/kg IV in first 3-6 h · Oral…"
          },
          {
            "title": "#2 · Doxycycline",
            "text": "Vibramycin\n300 mg · Oral · Single dose · Single dose"
          },
          {
            "title": "#3 · Azithromycin",
            "text": "Zithromax\nAdults 1 g; children 20 mg/kg · Oral · Single dose · Single dose"
          }
        ]
      }
    ],
    "alertText": "Shock, lethargy, absent urine output, severe muscle cramps — require immediate aggressive IV rehydration.",
    "note": "Evidencia: WHO Cholera Outbreak: Assessing the Outbreak Response; CDC Cholera Treatment guidance"
  },
  {
    "id": "d15",
    "badge": "INFECCIONES BACTERIANAS",
    "eyebrow": "PERFIL CLÍNICO Nº 15",
    "headlineA": "TYPHOID FEVER",
    "headlineB": "",
    "blocks": [
      {
        "id": "d15-lead",
        "type": "lead",
        "text": "Systemic infection by Salmonella enterica serovar Typhi, acquired from contaminated food/water, causing sustained fever, abdominal pain, and bacteremia. Fluoroquinolone resistance has reshaped therapy."
      },
      {
        "id": "d15-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Ceftriaxone",
            "text": "Rocephin\nAdults 2 g; children 50-75 mg/kg · IV or IM · Once daily · 7-14 days (severe/complicated 10-14)"
          },
          {
            "title": "#2 · Azithromycin",
            "text": "Zithromax\nAdults 1 g day 1 then 500 mg (or 500 mg throughout); children 10-20 mg/kg · Oral · Once daily · 7 days"
          },
          {
            "title": "#3 · Ciprofloxacin (only if strain susceptible)",
            "text": "Cipro\n500 mg (or 400 mg IV) · Oral or IV · Twice daily · 7 days"
          }
        ]
      }
    ],
    "alertText": "Intestinal perforation (sudden abdominal pain, peritonitis — week 2-3), GI bleeding, encephalopathy, shock.",
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
        "text": "Hepatitis C, Influenza, COVID-19, Herpes zoster (shingles), Genital herpes (HSV-2), Varicella (chickenpox), HIV infection, Hepatitis B"
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
        "text": "Chronic blood-borne infection by hepatitis C virus causing progressive liver fibrosis, cirrhosis, and hepatocellular carcinoma. Direct-acting antivirals now cure >95% of patients in 8-12 weeks."
      },
      {
        "id": "d16-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Sofosbuvir/velpatasvir",
            "text": "Epclusa\n400/100 mg (one tablet) · Oral · Once daily with or without food · 12 weeks (8 weeks in select non-cirrhotic per some guidance)"
          },
          {
            "title": "#2 · Glecaprevir/pibrentasvir",
            "text": "Mavyret\n300/120 mg (three 100/40 mg tablets) · Oral · Once daily with food · 8 weeks (treatment-naive, no cirrhosis or compensated cirrhosis)"
          },
          {
            "title": "#3 · Sofosbuvir + daclatasvir",
            "text": "Sovaldi + Daklinza\n400 mg + 60 mg · Oral · Once daily · 12 weeks"
          }
        ]
      }
    ],
    "alertText": "Decompensated cirrhosis (ascites, encephalopathy, variceal bleeding) — needs specialized regimens ± ribavirin; co-infection with HBV (reactivation risk — screen HBsAg/anti-HBc before DAAs).",
    "note": "Evidencia: AASLD/IDSA HCV Guidance; Backus et al., Hepatology 2018 (SVR reduces mortality)"
  },
  {
    "id": "d17",
    "badge": "INFECCIONES VIRALES",
    "eyebrow": "PERFIL CLÍNICO Nº 17",
    "headlineA": "INFLUENZA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d17-lead",
        "type": "lead",
        "text": "Acute respiratory infection by influenza A/B viruses causing fever, myalgia, and cough; seasonal epidemics cause significant mortality in elderly and high-risk groups."
      },
      {
        "id": "d17-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Oseltamivir",
            "text": "Tamiflu\n75 mg (children weight-based: ≤15 kg 30 mg, >15-23 kg 45 mg, >23-40 kg 60 mg) · Oral · Twice daily · 5 days"
          },
          {
            "title": "#2 · Baloxavir marboxil",
            "text": "Xofluza\n40 mg (40-80 kg) or 80 mg (≥80 kg) · Oral · Single dose · Single dose"
          },
          {
            "title": "#3 · Zanamivir (or annual influenza vaccination for…",
            "text": "Relenza (inhaled); Fluzone, Fluarix, etc.\nZanamivir 10 mg (two 5 mg inhalations); vaccine 0.5 mL IM annually · Inhaled / IM · Twice daily (zanamivir); annually (vaccine) · 5 days…"
          }
        ]
      }
    ],
    "alertText": "Dyspnea, chest pain, persistent high fever, confusion, SpO2 <94% — secondary pneumonia or severe influenza requiring hospitalization.",
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
        "text": "Respiratory infection by SARS-CoV-2 ranging from asymptomatic to severe pneumonia and multisystem disease. Outpatient antivirals reduce progression in high-risk patients."
      },
      {
        "id": "d18-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Nirmatrelvir/ritonavir",
            "text": "Paxlovid\n300/100 mg (two + one tablets); renal impairment 150/100 mg · Oral · Twice daily · 5 days, started within 5 days of symptoms"
          },
          {
            "title": "#2 · Remdesivir",
            "text": "Veklury\n200 mg day 1, then 100 mg · IV · Once daily · 3 days (outpatient), started within 7 days"
          },
          {
            "title": "#3 · Molnupiravir",
            "text": "Lagevrio\n800 mg · Oral · Twice daily · 5 days, within 5 days of symptoms"
          }
        ]
      }
    ],
    "alertText": "SpO2 ≤94%, dyspnea at rest, confusion, persistent chest pressure — hospital evaluation (may need oxygen, dexamethasone, or baricitinib/tocilizumab).",
    "note": "Evidencia: NIH COVID-19 Treatment Guidelines; EPIC-HR (Hammond et al., NEJM 2022)"
  },
  {
    "id": "d19",
    "badge": "INFECCIONES VIRALES",
    "eyebrow": "PERFIL CLÍNICO Nº 19",
    "headlineA": "HERPES ZOSTER",
    "headlineB": "(SHINGLES)",
    "blocks": [
      {
        "id": "d19-lead",
        "type": "lead",
        "text": "Reactivation of varicella-zoster virus from dorsal root ganglia, causing a painful dermatomal vesicular rash, typically in older or immunocompromised adults. Main complication: postherpetic neuralgia (PHN)."
      },
      {
        "id": "d19-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Valacyclovir (or acyclovir)",
            "text": "Valtrex; Zovirax\nValacyclovir 1,000 mg; acyclovir 800 mg · Oral · Valacyclovir 3 times daily; acyclovir 5 times daily · 7 days (start within 72 h of rash onset)"
          },
          {
            "title": "#2 · Analgesia: acetaminophen/NSAIDs ± gabapentin or…",
            "text": "Tylenol; Neurontin; Lyrica\nGabapentin 300 mg day 1, titrate to 900-3,600 mg/day; pregabalin 75-300 mg/day · Oral · Gabapentin 3 times daily; pregabalin 2-3 times daily ·…"
          },
          {
            "title": "#3 · Recombinant zoster vaccine (prevention)",
            "text": "Shingrix\n0.5 mL · Intramuscular · 2 doses, 2-6 months apart · Two-dose series"
          }
        ]
      }
    ],
    "alertText": "Eye involvement (herpes zoster ophthalmicus — urgent ophthalmology), disseminated rash (>20 lesions outside dermatome) in immunocompromised, motor weakness, Ramsay Hunt (ear + facial palsy).",
    "note": "Evidencia: CDC Shingles Clinical Guidance; Shingrix efficacy: Lal et al., NEJM 2015"
  },
  {
    "id": "d20",
    "badge": "INFECCIONES VIRALES",
    "eyebrow": "PERFIL CLÍNICO Nº 20",
    "headlineA": "GENITAL",
    "headlineB": "HERPES (HSV-2)",
    "blocks": [
      {
        "id": "d20-lead",
        "type": "lead",
        "text": "Chronic recurrent infection by herpes simplex virus type 2 (or 1) causing painful genital vesicles/ulcers. Virus persists latently in sensory ganglia; treatment suppresses but does not eradicate."
      },
      {
        "id": "d20-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Valacyclovir",
            "text": "Valtrex\nFirst episode 1 g; recurrences 500 mg; suppressive 500 mg-1 g daily · Oral · First episode twice daily ×7-10 d; recurrence twice daily ×3 d;…"
          },
          {
            "title": "#2 · Acyclovir",
            "text": "Zovirax\nFirst episode 400 mg; recurrence 400 mg; suppression 400 mg BID · Oral · First episode 3 times daily ×7-10 d; recurrence TID ×5 d; suppression…"
          },
          {
            "title": "#3 · Famciclovir",
            "text": "Famvir\nFirst episode 250 mg TID ×7-10 d; recurrence 1 g BID ×1 day; suppression 250 mg BID · Oral · Per indication · Variable"
          }
        ]
      }
    ],
    "alertText": "Aseptic meningitis, urinary retention (sacral radiculopathy), severe first episode in pregnancy (neonatal transmission risk), disseminated disease in immunocompromised.",
    "note": "Evidencia: CDC STI Treatment Guidelines 2021"
  },
  {
    "id": "d21",
    "badge": "INFECCIONES VIRALES",
    "eyebrow": "PERFIL CLÍNICO Nº 21",
    "headlineA": "VARICELLA",
    "headlineB": "(CHICKENPOX)",
    "blocks": [
      {
        "id": "d21-lead",
        "type": "lead",
        "text": "Primary varicella-zoster virus infection causing generalized vesicular rash and fever; benign in healthy children but more severe in adults, pregnant women, and immunocompromised patients."
      },
      {
        "id": "d21-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Supportive care: acetaminophen + antipruritics…",
            "text": "Tylenol; Benadryl (diphenhydramine 25-50 mg)\nAcetaminophen 500-1,000 mg; diphenhydramine 25-50 mg · Oral / topical · Acetaminophen every 4-6 h (max 3-4 g/day); diphenhydramine every 6 h ·…"
          },
          {
            "title": "#2 · Acyclovir (high-risk patients)",
            "text": "Zovirax\nAdults 800 mg; children ≥2 y 20 mg/kg (max 800 mg) · Oral · Adults 5 times daily ×5 d; children 4 times daily ×5 d · 5 days, started within…"
          },
          {
            "title": "#3 · Varicella vaccine (prevention and post-exposure)",
            "text": "Varivax (live)\n0.5 mL · Subcutaneous · 2 doses 4-8 weeks apart; post-exposure within 3-5 days · Two-dose series"
          }
        ]
      }
    ],
    "alertText": "Dyspnea/cough (varicella pneumonia — emergency in adults/pregnancy), lethargy or neurologic signs, hemorrhagic rash, signs of skin superinfection, disease in immunocompromised or neonates.",
    "note": "Evidencia: CDC Varicella Clinical Guidance; AAP Red Book"
  },
  {
    "id": "d22",
    "badge": "INFECCIONES VIRALES",
    "eyebrow": "PERFIL CLÍNICO Nº 22",
    "headlineA": "HIV INFECTION",
    "headlineB": "",
    "blocks": [
      {
        "id": "d22-lead",
        "type": "lead",
        "text": "Chronic retroviral infection destroying CD4 T-cells; untreated it progresses to AIDS over ~8-10 years. Antiretroviral therapy (ART) achieves durable viral suppression, near-normal lifespan, and eliminates sexual transmission (U=U)."
      },
      {
        "id": "d22-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Bictegravir/tenofovir alafenamide/emtricitabine",
            "text": "Biktarvy\n50/25/200 mg (one tablet) · Oral · Once daily with or without food · Lifelong"
          },
          {
            "title": "#2 · Dolutegravir + tenofovir + lamivudine (or…",
            "text": "Tivicay + Truvada; TLD (generic combination)\nDTG 50 mg + TDF 300/3TC 300 mg · Oral · Once daily · Lifelong"
          },
          {
            "title": "#3 · Cabotegravir/rilpivirine long-acting injectable",
            "text": "Cabenuva\nCAB 600 mg + RPV 900 mg · Intramuscular (gluteal) · Every 1-2 months after oral lead-in · Lifelong"
          }
        ]
      }
    ],
    "alertText": "Opportunistic infections (CD4 <200: PJP pneumonia, toxoplasmosis, cryptococcal meningitis), IRIS after ART start, seroconversion syndrome.",
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
        "text": "Chronic infection by hepatitis B virus transmitted perinatally, sexually, or via blood; causes chronic hepatitis, cirrhosis, and hepatocellular carcinoma. Nucleos(t)ide analogues durably suppress but rarely eradicate (cccDNA…"
      },
      {
        "id": "d23-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Tenofovir disoproxil fumarate or tenofovir…",
            "text": "Viread (TDF); Vemlidy (TAF)\nTDF 300 mg; TAF 25 mg · Oral · Once daily · Long-term (often indefinite)"
          },
          {
            "title": "#2 · Entecavir",
            "text": "Baraclude\n0.5 mg (1 mg if lamivudine-experienced or decompensated) · Oral · Once daily on empty stomach (2 h before/after food) · Long-term"
          },
          {
            "title": "#3 · Pegylated interferon alfa-2a (select patients)",
            "text": "Pegasys\n180 mcg · Subcutaneous · Once weekly · 48 weeks"
          }
        ]
      }
    ],
    "alertText": "Acute flare with jaundice/INR elevation (acute liver failure), signs of decompensated cirrhosis (ascites, variceal bleed, encephalopathy), HCC on surveillance.",
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
        "text": "Tinea pedis/corporis (athlete's foot, ringworm), Onychomycosis (nail fungus), Mucosal candidiasis (oral/vaginal thrush), Tinea capitis (scalp ringworm), Pityriasis (tinea) versicolor"
      }
    ]
  },
  {
    "id": "d24",
    "badge": "INFECCIONES FÚNGICAS",
    "eyebrow": "PERFIL CLÍNICO Nº 24",
    "headlineA": "TINEA PEDIS/CORPORIS",
    "headlineB": "(ATHLETE'S FOOT, RINGWORM)",
    "blocks": [
      {
        "id": "d24-lead",
        "type": "lead",
        "text": "Superficial dermatophyte infection of feet (pedis) or body (corporis) causing itching, scaling, and annular lesions; spread by contact and fomites."
      },
      {
        "id": "d24-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Terbinafine 1% cream",
            "text": "Lamisil AT\nApply thin layer to affected area + 2 cm margin · Topical · Once or twice daily · 1-2 weeks (continue 1 week after clearing)"
          },
          {
            "title": "#2 · Clotrimazole 1% cream (or miconazole 2%)",
            "text": "Lotrimin AF; Micatin\nApply to affected area · Topical · Twice daily · 2-4 weeks"
          },
          {
            "title": "#3 · Terbinafine 250 mg or itraconazole 200 mg…",
            "text": "Lamisil; Sporanox\nTerbinafine 250 mg; itraconazole 200 mg · Oral · Terbinafine once daily; itraconazole once or twice daily · Terbinafine 2 weeks; itraconazole 1…"
          }
        ]
      }
    ],
    "alertText": "Secondary bacterial cellulitis, kerion (boggy scalp lesion — needs oral therapy), Majocchi granuloma (deep follicular infection), immunocompromised with spreading disease.",
    "note": "Evidencia: Cochrane Review: Topical treatments for tinea pedis/corporis"
  },
  {
    "id": "d25",
    "badge": "INFECCIONES FÚNGICAS",
    "eyebrow": "PERFIL CLÍNICO Nº 25",
    "headlineA": "ONYCHOMYCOSIS",
    "headlineB": "(NAIL FUNGUS)",
    "blocks": [
      {
        "id": "d25-lead",
        "type": "lead",
        "text": "Dermatophyte (mostly Trichophyton rubrum) infection of the nail plate causing thickening, discoloration, and brittleness; difficult to cure because drug must penetrate the nail bed."
      },
      {
        "id": "d25-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Terbinafine",
            "text": "Lamisil\n250 mg · Oral · Once daily · 6 weeks (fingernails) / 12 weeks (toenails)"
          },
          {
            "title": "#2 · Itraconazole pulse therapy",
            "text": "Sporanox\n200 mg · Oral · Twice daily for 1 week per month · 2 pulses (fingernails) / 3 pulses (toenails)"
          },
          {
            "title": "#3 · Efinaconazole 10% solution (or tavaborole 5%)",
            "text": "Jublia; Kerydin\nApply to affected nail daily · Topical · Once daily · 48 weeks"
          }
        ]
      }
    ],
    "alertText": "None urgent; diabetics with severe onychomycosis have higher ulcer/cellulitis risk.",
    "note": "Evidencia: AAFP/Cochrane Onychomycosis Reviews; British Association of Dermatologists Guideline"
  },
  {
    "id": "d26",
    "badge": "INFECCIONES FÚNGICAS",
    "eyebrow": "PERFIL CLÍNICO Nº 26",
    "headlineA": "MUCOSAL CANDIDIASIS",
    "headlineB": "(ORAL/VAGINAL THRUSH)",
    "blocks": [
      {
        "id": "d26-lead",
        "type": "lead",
        "text": "Overgrowth of Candida albicans on oral or vaginal mucosa, favored by antibiotics, diabetes, pregnancy, steroids, or immunosuppression; causes white plaques (oral) or itching/discharge (vaginal)."
      },
      {
        "id": "d26-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Fluconazole",
            "text": "Diflucan\nVaginal: 150 mg single dose (recurrent: 150 mg q72h ×3, then weekly ×6 months); oral thrush: 200 mg day 1 then 100-200 mg · Oral · Single dose…"
          },
          {
            "title": "#2 · Topical azoles (clotrimazole/miconazole) or nystatin",
            "text": "Gyne-Lotrimin, Monistat; Mycostatin\nVaginal: clotrimazole 100 mg suppository; oral: nystatin suspension 400,000-600,000 units (4-6 mL) · Intravaginal / oral (swish and swallow) ·…"
          },
          {
            "title": "#3 · Boric acid 600 mg vaginal capsule…",
            "text": "Compounded\n600 mg · Intravaginal · Once daily · 14 days (induction)"
          }
        ]
      }
    ],
    "alertText": "Dysphagia/odynophagia (esophageal candidiasis — needs systemic therapy and HIV testing), immunocompromised with disseminated disease.",
    "note": "Evidencia: CDC STI Treatment Guidelines 2021; IDSA 2016 Candidiasis Guideline"
  },
  {
    "id": "d27",
    "badge": "INFECCIONES FÚNGICAS",
    "eyebrow": "PERFIL CLÍNICO Nº 27",
    "headlineA": "TINEA CAPITIS",
    "headlineB": "(SCALP RINGWORM)",
    "blocks": [
      {
        "id": "d27-lead",
        "type": "lead",
        "text": "Dermatophyte infection of scalp hair follicles, mainly in children, causing scaling, hair loss, and sometimes kerion. Oral therapy is mandatory — topicals cannot penetrate follicles."
      },
      {
        "id": "d27-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Griseofulvin",
            "text": "Gris-PEG (microsize: Grifulvin)\nMicrosize 20-25 mg/kg/day (children); ultramicrosize 10-15 mg/kg/day; adults 500-1,000 mg/day · Oral · Once daily with fatty food (absorption) ·…"
          },
          {
            "title": "#2 · Terbinafine",
            "text": "Lamisil (granules for children)\nChildren: <25 kg 125 mg, 25-35 kg 187.5 mg, >35 kg 250 mg; adults 250 mg · Oral · Once daily · 4-6 weeks"
          },
          {
            "title": "#3 · Adjunct antifungal shampoo: ketoconazole 2% or…",
            "text": "Nizoral; Selsun\nApply to scalp · Topical · 2-3 times weekly · During oral therapy"
          }
        ]
      }
    ],
    "alertText": "Kerion (boggy, tender scalp mass with pustules), cervical lymphadenopathy with fever, permanent hair loss risk if untreated.",
    "note": "Evidencia: AAP Red Book; Cochrane Tinea Capitis Review; British Association of Dermatologists Guideline"
  },
  {
    "id": "d28",
    "badge": "INFECCIONES FÚNGICAS",
    "eyebrow": "PERFIL CLÍNICO Nº 28",
    "headlineA": "PITYRIASIS",
    "headlineB": "(TINEA) VERSICOLOR",
    "blocks": [
      {
        "id": "d28-lead",
        "type": "lead",
        "text": "Superficial overgrowth of Malassezia yeast causing hypo- or hyperpigmented scaly patches on trunk and shoulders, triggered by heat/humidity; cosmetic concern with frequent recurrence."
      },
      {
        "id": "d28-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Selenium sulfide 2.5% or ketoconazole 2% shampoo",
            "text": "Selsun; Nizoral\nApply to affected areas, lather, leave 5-10 min, rinse · Topical · Daily · 1-2 weeks"
          },
          {
            "title": "#2 · Topical azole creams (clotrimazole 1%, ketoconazole…",
            "text": "Lotrimin; Nizoral cream\nApply thin layer · Topical · Once or twice daily · 2-4 weeks"
          },
          {
            "title": "#3 · Fluconazole or itraconazole (extensive/refractory)",
            "text": "Diflucan; Sporanox\nFluconazole 300 mg weekly ×2-4 doses; itraconazole 200 mg daily ×5-7 days · Oral · Per regimen · 1-4 weeks"
          }
        ]
      }
    ],
    "alertText": "None — benign condition; atypical presentation warrants scraping to exclude other diagnoses.",
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
        "text": "Malaria (uncomplicated), Giardiasis, Ascariasis (roundworm), Pinworm (enterobiasis), Scabies, Head lice (pediculosis), Hookworm infection, Schistosomiasis, Trichomoniasis"
      }
    ]
  },
  {
    "id": "d29",
    "badge": "INFECCIONES PARASITARIAS",
    "eyebrow": "PERFIL CLÍNICO Nº 29",
    "headlineA": "MALARIA",
    "headlineB": "(UNCOMPLICATED)",
    "blocks": [
      {
        "id": "d29-lead",
        "type": "lead",
        "text": "Mosquito-borne infection by Plasmodium species (falciparum most deadly) causing cyclical fever, anemia, and — in severe falciparum disease — cerebral malaria and multi-organ failure."
      },
      {
        "id": "d29-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Artemether-lumefantrine (artemisinin combination…",
            "text": "Coartem\nAdults ≥35 kg: 80/480 mg (4 tablets) per dose; children weight-banded 5-24 kg · Oral · Twice daily (at 0, 8, 24, 36, 48, 60 h) · 3 days (6…"
          },
          {
            "title": "#2 · Atovaquone-proguanil",
            "text": "Malarone\nAdults 1,000/400 mg (4 tablets); children weight-banded · Oral · Once daily with fatty food · 3 days"
          },
          {
            "title": "#3 · Chloroquine (sensitive regions) + primaquine (P.…",
            "text": "Aralen; Primaquine\nChloroquine 600 mg base, then 300 mg at 6, 24, 48 h; primaquine 30 mg base daily ×14 days · Oral · Per regimen · 4 days (chloroquine) + 14 days…"
          }
        ]
      }
    ],
    "alertText": "Impaired consciousness, convulsions, severe anemia, hypoglycemia, jaundice, oliguria, respiratory distress (severe malaria — IV artesunate immediately; mortality approaches 100% untreated).",
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
        "text": "Small-bowel infection by Giardia duodenalis from contaminated water, causing diarrhea, bloating, and malabsorption; common in travelers, hikers, and daycare settings."
      },
      {
        "id": "d30-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Tinidazole",
            "text": "Tindamax\n2 g (children 50 mg/kg, max 2 g) · Oral · Single dose · Single dose"
          },
          {
            "title": "#2 · Metronidazole",
            "text": "Flagyl\nAdults 250-500 mg; children 15 mg/kg/day · Oral · Three times daily · 5-7 days"
          },
          {
            "title": "#3 · Nitazoxanide",
            "text": "Alinia\nAdults 500 mg; children age-based (100-200 mg) · Oral · Twice daily · 3 days"
          }
        ]
      }
    ],
    "alertText": "Severe dehydration, significant weight loss/failure to thrive in children, immunocompromised with chronic infection.",
    "note": "Evidencia: Cochrane Review: Drugs for treating giardiasis; CDC Parasites — Giardia"
  },
  {
    "id": "d31",
    "badge": "INFECCIONES PARASITARIAS",
    "eyebrow": "PERFIL CLÍNICO Nº 31",
    "headlineA": "ASCARIASIS",
    "headlineB": "(ROUNDWORM)",
    "blocks": [
      {
        "id": "d31-lead",
        "type": "lead",
        "text": "Intestinal infection by Ascaris lumbricoides, the most common helminth infection worldwide (~800 million people), acquired from soil-contaminated food; heavy burdens cause malnutrition and intestinal obstruction."
      },
      {
        "id": "d31-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Albendazole",
            "text": "Albenza\n400 mg (adults and children >2 years) · Oral · Single dose (with food) · Single dose"
          },
          {
            "title": "#2 · Mebendazole",
            "text": "Vermox\n100 mg twice daily ×3 days, or 500 mg single dose · Oral · Twice daily ×3 days or single dose · 1-3 days"
          },
          {
            "title": "#3 · Ivermectin",
            "text": "Stromectol\n150-200 mcg/kg · Oral · Single dose · Single dose"
          }
        ]
      }
    ],
    "alertText": "Intestinal or biliary obstruction (colicky pain, vomiting — surgical emergency with heavy burdens), pancreatitis, Löffler syndrome (pulmonary migration phase).",
    "note": "Evidencia: WHO Soil-Transmitted Helminth Guidelines; Cochrane deworming reviews"
  },
  {
    "id": "d32",
    "badge": "INFECCIONES PARASITARIAS",
    "eyebrow": "PERFIL CLÍNICO Nº 32",
    "headlineA": "PINWORM",
    "headlineB": "(ENTEROBIASIS)",
    "blocks": [
      {
        "id": "d32-lead",
        "type": "lead",
        "text": "Enterobius vermicularis infection causing perianal itching (nocturnal), most common helminth in developed countries, spreading easily within households and schools."
      },
      {
        "id": "d32-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Mebendazole",
            "text": "Vermox\n100 mg (all ages >2 years) · Oral · Single dose, REPEAT at 2 weeks · 2 doses total"
          },
          {
            "title": "#2 · Albendazole",
            "text": "Albenza\n400 mg · Oral · Single dose, repeat at 2 weeks · 2 doses"
          },
          {
            "title": "#3 · Pyrantel pamoate",
            "text": "Reese's Pinworm, Pin-X (OTC)\n11 mg/kg (max 1 g) · Oral · Single dose, repeat at 2 weeks · 2 doses"
          }
        ]
      }
    ],
    "alertText": "None serious; rare vulvovaginitis in girls, appendicitis association debated.",
    "note": "Evidencia: CDC Parasites — Enterobiasis; AAP Red Book"
  },
  {
    "id": "d33",
    "badge": "INFECCIONES PARASITARIAS",
    "eyebrow": "PERFIL CLÍNICO Nº 33",
    "headlineA": "SCABIES",
    "headlineB": "",
    "blocks": [
      {
        "id": "d33-lead",
        "type": "lead",
        "text": "Skin infestation by Sarcoptes scabiei mite causing intense nocturnal itching and burrows in finger webs, wrists, and genitals; spreads by prolonged skin contact."
      },
      {
        "id": "d33-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Permethrin 5% cream",
            "text": "Elimite\nApply entire body neck-down (include scalp in infants/elderly), wash off after 8-14 h · Topical · Single application, REPEAT at 7 days · 2…"
          },
          {
            "title": "#2 · Ivermectin",
            "text": "Stromectol\n200 mcg/kg · Oral · Single dose, REPEAT at 7-14 days · 2 doses"
          },
          {
            "title": "#3 · Contact treatment + environmental decontamination",
            "text": "—\nTreat all household/sexual contacts simultaneously even if asymptomatic · — · Same schedule · —"
          }
        ]
      }
    ],
    "alertText": "Crusted (Norwegian) scabies in immunocompromised/elderly — hyperkeratotic plaques, highly contagious, needs combined permethrin + ivermectin multi-dose and infection control.",
    "note": "Evidencia: CDC Scabies Clinical Guidance; Dressler et al., NEJM 2022 (ivermectin noninferiority)"
  },
  {
    "id": "d34",
    "badge": "INFECCIONES PARASITARIAS",
    "eyebrow": "PERFIL CLÍNICO Nº 34",
    "headlineA": "HEAD LICE",
    "headlineB": "(PEDICULOSIS)",
    "blocks": [
      {
        "id": "d34-lead",
        "type": "lead",
        "text": "Pediculus humanus capitis infestation causing scalp itching; extremely common in schoolchildren; spreads by head-to-head contact, not poor hygiene."
      },
      {
        "id": "d34-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Permethrin 1% lotion (or pyrethrins + piperonyl…",
            "text": "Nix; Rid\nApply to damp hair, rinse after 10 min · Topical · Single application, REPEAT at day 7-9 · 2 applications"
          },
          {
            "title": "#2 · Ivermectin 0.5% lotion",
            "text": "Sklice\nApply to dry hair, rinse after 10 min · Topical · Single application (no repeat needed) · Single use"
          },
          {
            "title": "#3 · Wet combing with fine-toothed nit comb ± dimeticone…",
            "text": "Hedrin (dimeticone)\nComb wet conditioned hair section by section · Physical / topical · Every 3-4 days for 2 weeks · 2+ weeks"
          }
        ]
      }
    ],
    "alertText": "Secondary bacterial infection of scratches (impetigo); none serious.",
    "note": "Evidencia: AAP 2022 Head Lice Clinical Report; CDC Lice Guidance"
  },
  {
    "id": "d35",
    "badge": "INFECCIONES PARASITARIAS",
    "eyebrow": "PERFIL CLÍNICO Nº 35",
    "headlineA": "HOOKWORM INFECTION",
    "headlineB": "",
    "blocks": [
      {
        "id": "d35-lead",
        "type": "lead",
        "text": "Necator americanus/Ancylostoma duodenale infection acquired through skin contact with contaminated soil; worms feed on intestinal blood, causing iron-deficiency anemia — a major cause of anemia in endemic regions."
      },
      {
        "id": "d35-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Albendazole",
            "text": "Albenza\n400 mg · Oral · Single dose · Single dose"
          },
          {
            "title": "#2 · Mebendazole",
            "text": "Vermox\n100 mg · Oral · Twice daily · 3 days"
          },
          {
            "title": "#3 · Ferrous sulfate (for the anemia)",
            "text": "Feosol\n325 mg (65 mg elemental iron) · Oral · Once daily to twice daily (every-other-day dosing may improve absorption) · 3-6 months (until stores…"
          }
        ]
      }
    ],
    "alertText": "Severe anemia (fatigue, dyspnea, heart failure signs), growth/cognitive delay in children, hypoproteinemia.",
    "note": "Evidencia: WHO Soil-Transmitted Helminth Guidelines; Cochrane Hookworm Treatment Review"
  },
  {
    "id": "d36",
    "badge": "INFECCIONES PARASITARIAS",
    "eyebrow": "PERFIL CLÍNICO Nº 36",
    "headlineA": "SCHISTOSOMIASIS",
    "headlineB": "",
    "blocks": [
      {
        "id": "d36-lead",
        "type": "lead",
        "text": "Trematode (blood fluke) infection acquired in freshwater with infected snails; chronic infection causes bladder fibrosis/cancer (S. haematobium) or hepatic/intestinal fibrosis (S. mansoni/japonicum)."
      },
      {
        "id": "d36-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Praziquantel",
            "text": "Biltricide\n40-60 mg/kg (S. mansoni/haematobium 40; S. japonicum/mekongi 60) · Oral · Divided into 2-3 doses in one day · 1 day"
          },
          {
            "title": "#2 · Praziquantel retreatment",
            "text": "Biltricide\nRepeat 40-60 mg/kg · Oral · Single day · Repeat at 4-6 weeks if eggs persist"
          },
          {
            "title": "#3 · Snail control + sanitation + safe water…",
            "text": "—\nPraziquantel 40 mg/kg annually for at-risk communities · Oral · Annual · Program duration"
          }
        ]
      }
    ],
    "alertText": "Katayama fever (acute serum-sickness-like illness 2-8 weeks post-exposure), portal hypertension/varices, bladder squamous cell carcinoma, transverse myelitis (ectopic eggs).",
    "note": "Evidencia: WHO Schistosomiasis Guidelines (2022)"
  },
  {
    "id": "d37",
    "badge": "INFECCIONES PARASITARIAS",
    "eyebrow": "PERFIL CLÍNICO Nº 37",
    "headlineA": "TRICHOMONIASIS",
    "headlineB": "",
    "blocks": [
      {
        "id": "d37-lead",
        "type": "lead",
        "text": "Trichomonas vaginalis infection — the most common non-viral STI — causing vaginitis/urethritis; increases HIV acquisition risk and adverse pregnancy outcomes."
      },
      {
        "id": "d37-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Metronidazole",
            "text": "Flagyl\nWomen: 500 mg twice daily ×7 days; men: 2 g single dose · Oral · Per regimen · 7 days (women) / single dose (men)"
          },
          {
            "title": "#2 · Tinidazole",
            "text": "Tindamax\n2 g · Oral · Single dose · Single dose"
          },
          {
            "title": "#3 · Simultaneous partner treatment",
            "text": "—\nPartners receive same regimen · Oral · Same · —"
          }
        ]
      }
    ],
    "alertText": "Pregnancy: associated with preterm birth — treat symptomatic women (metronidazole safe in all trimesters per CDC); persistent/recurrent infection needs susceptibility-guided therapy.",
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
        "text": "Asthma, COPD, Allergic rhinitis, Obstructive sleep apnea, Pulmonary embolism"
      }
    ]
  },
  {
    "id": "d38",
    "badge": "RESPIRATORIO",
    "eyebrow": "PERFIL CLÍNICO Nº 38",
    "headlineA": "ASTHMA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d38-lead",
        "type": "lead",
        "text": "Chronic airway inflammation with variable airflow obstruction causing wheeze, cough, and breathlessness. Uncontrolled inflammation leads to exacerbations and airway remodeling."
      },
      {
        "id": "d38-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Inhaled corticosteroid: budesonide or fluticasone",
            "text": "Pulmicort; Flovent\nBudesonide 200-400 mcg; fluticasone 100-250 mcg · Inhaled (MDI/DPI) · Twice daily · Long-term"
          },
          {
            "title": "#2 · ICS-formoterol combination as…",
            "text": "Symbicort (budesonide/formoterol)\n100/6 or 200/6 mcg per inhalation · Inhaled · Maintenance 1-2 puffs twice daily + 1 puff as needed for symptoms · Long-term"
          },
          {
            "title": "#3 · Biologics for severe asthma: omalizumab /…",
            "text": "Xolair; Nucala; Dupixent\nOmalizumab 75-600 mg SC q2-4 wk (IgE/weight-based); mepolizumab 100 mg SC q4wk; dupilumab 300 mg SC q2wk · Subcutaneous · Every 2-4 weeks ·…"
          }
        ]
      }
    ],
    "alertText": "Silent chest, inability to speak sentences, SpO2 <92%, exhaustion (life-threatening attack — emergency); >2 exacerbations/year signals poor control.",
    "note": "Evidencia: GINA Global Strategy 2024"
  },
  {
    "id": "d39",
    "badge": "RESPIRATORIO",
    "eyebrow": "PERFIL CLÍNICO Nº 39",
    "headlineA": "COPD",
    "headlineB": "",
    "blocks": [
      {
        "id": "d39-lead",
        "type": "lead",
        "text": "Progressive airflow limitation from chronic exposure to smoke/pollutants, combining chronic bronchitis and emphysema; exacerbations accelerate decline and drive mortality."
      },
      {
        "id": "d39-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Dual bronchodilation: LABA + LAMA",
            "text": "Anoro (umeclidinium/vilanterol 62.5/25 mcg); Spiriva…\nOne inhalation · Inhaled · Once daily · Long-term"
          },
          {
            "title": "#2 · Add ICS → triple therapy for frequent exacerbators…",
            "text": "Trelegy (fluticasone/umeclidinium/vilanterol…\nOne inhalation · Inhaled · Once daily · Long-term"
          },
          {
            "title": "#3 · Smoking cessation (varenicline/NRT) + pulmonary…",
            "text": "Chantix (varenicline 1 mg BID); nicotine patch 21 mg/24h\nVarenicline 1 mg; patch step-down 21→14→7 mg · Oral / transdermal · Varenicline BID ×12 wk; patch daily ×8-10 wk · 12 weeks (smoking cessation);…"
          }
        ]
      }
    ],
    "alertText": "Acute exacerbation with respiratory failure (needs steroids, antibiotics if purulent, NIV), SpO2 <88%, cor pulmonale signs.",
    "note": "Evidencia: GOLD Report 2024; IMPACT & ETHOS trials (NEJM)"
  },
  {
    "id": "d40",
    "badge": "RESPIRATORIO",
    "eyebrow": "PERFIL CLÍNICO Nº 40",
    "headlineA": "ALLERGIC RHINITIS",
    "headlineB": "",
    "blocks": [
      {
        "id": "d40-lead",
        "type": "lead",
        "text": "IgE-mediated nasal inflammation (pollen, dust mites, animals) causing sneezing, rhinorrhea, congestion, and itching; frequently coexists with asthma and impairs sleep and productivity."
      },
      {
        "id": "d40-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Intranasal corticosteroid: mometasone or fluticasone",
            "text": "Nasonex; Flonase\nMometasone 50 mcg/spray: 2 sprays/nostril (100 mcg); fluticasone similar · Intranasal · Once daily · Throughout allergen exposure season"
          },
          {
            "title": "#2 · Second-generation oral antihistamine: cetirizine or…",
            "text": "Zyrtec; Claritin\nCetirizine 10 mg; loratadine 10 mg · Oral · Once daily · PRN or season-long"
          },
          {
            "title": "#3 · Allergen immunotherapy (subcutaneous SCIT or…",
            "text": "Various extracts; SLIT: Oralair, Grastek, Ragwiz,…\nSCIT: escalating doses; SLIT: 1 tablet daily · Subcutaneous / sublingual · Per protocol · 3-5 years"
          }
        ]
      }
    ],
    "alertText": "None urgent; uncontrolled rhinitis worsens asthma — treat as airway risk factor; nasal polyps/unilateral symptoms warrant ENT evaluation.",
    "note": "Evidencia: ARIA (Allergic Rhinitis and its Impact on Asthma) Guidelines; AAAAI/ACAAI Rhinitis Guideline"
  },
  {
    "id": "d41",
    "badge": "RESPIRATORIO",
    "eyebrow": "PERFIL CLÍNICO Nº 41",
    "headlineA": "OBSTRUCTIVE",
    "headlineB": "SLEEP APNEA",
    "blocks": [
      {
        "id": "d41-lead",
        "type": "lead",
        "text": "Recurrent upper-airway collapse during sleep causing intermittent hypoxia, snoring, and daytime sleepiness; strongly associated with obesity, hypertension, AF, and cardiovascular events."
      },
      {
        "id": "d41-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Continuous positive airway pressure (CPAP)",
            "text": "ResMed AirSense, Philips DreamStation (devices)\nPressure titrated (auto 5-15 cmH2O typical) · Nasal/oronasal mask · Nightly, all sleep hours · Long-term"
          },
          {
            "title": "#2 · Weight loss ± tirzepatide (obesity-related OSA)",
            "text": "Zepbound (tirzepatide 5-15 mg weekly SC); lifestyle\nTirzepatide titrate 2.5→15 mg · Subcutaneous · Once weekly · Long-term"
          },
          {
            "title": "#3 · Mandibular advancement device (or hypoglossal nerve…",
            "text": "Custom dental appliance; Inspire (HNS)\n— · Oral appliance nightly · Nightly · Long-term"
          }
        ]
      }
    ],
    "alertText": "Severe daytime sleepiness with driving risk, resistant hypertension, arrhythmias, stroke — untreated severe OSA raises cardiovascular mortality.",
    "note": "Evidencia: AASM OSA Guidelines; SURMOUNT-OSA (Malhotra et al., NEJM 2024)"
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
        ]
      }
    ],
    "alertText": "Hypotension, syncope, severe hypoxemia (high-risk PE — thrombolysis/embolectomy); new symptoms on anticoagulation (recurrence or bleeding).",
    "note": "Evidencia: ESC 2019 PE Guidelines; ASH 2020 VTE Guidelines"
  },
  {
    "id": "cat-43",
    "badge": "SECCIÓN",
    "eyebrow": "CATEGORÍA · 6 PERFILES",
    "headlineA": "CARDIOVASCULAR",
    "headlineB": "",
    "blocks": [
      {
        "id": "cat-43-stats",
        "type": "stats",
        "items": [
          {
            "value": "6",
            "label": "enfermedades en esta categoría (Nº 43–48)."
          },
          {
            "value": "1",
            "label": "curables."
          },
          {
            "value": "5",
            "label": "controlables o autolimitadas."
          }
        ]
      },
      {
        "id": "cat-43-lead",
        "type": "lead",
        "text": "Hypertension, Hyperlipidemia, Stable coronary artery disease (angina), Atrial fibrillation, Heart failure with reduced ejection fraction (HFrEF), Deep vein thrombosis"
      }
    ]
  },
  {
    "id": "d43",
    "badge": "CARDIOVASCULAR",
    "eyebrow": "PERFIL CLÍNICO Nº 43",
    "headlineA": "HYPERTENSION",
    "headlineB": "",
    "blocks": [
      {
        "id": "d43-lead",
        "type": "lead",
        "text": "Persistently elevated blood pressure (≥130/80 mmHg per ACC/AHA), the leading modifiable risk factor for stroke, MI, heart failure, and kidney disease; usually asymptomatic ('silent killer')."
      },
      {
        "id": "d43-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Thiazide/thiazide-like diuretic: chlorthalidone or…",
            "text": "Hygroton; Microzide\nChlorthalidone 12.5-25 mg; HCTZ 25-50 mg · Oral · Once daily (morning) · Long-term"
          },
          {
            "title": "#2 · ACE inhibitor (lisinopril) or ARB (losartan)",
            "text": "Zestril; Cozaar\nLisinopril 10-40 mg; losartan 50-100 mg · Oral · Once or twice daily · Long-term"
          },
          {
            "title": "#3 · Dihydropyridine calcium channel blocker: amlodipine",
            "text": "Norvasc\n5-10 mg · Oral · Once daily · Long-term"
          }
        ]
      }
    ],
    "alertText": "BP ≥180/120 with organ damage (chest pain, neuro deficits, papilledema) = hypertensive emergency; resistant hypertension (uncontrolled on 3 drugs) → evaluate for secondary causes (aldosteronism,…",
    "note": "Evidencia: ACC/AHA 2017 Hypertension Guideline; ESC/ESH 2024; ALLHAT (JAMA 2002); Borghi et al. 2020 (ACEi-thiazide combination review)"
  },
  {
    "id": "d44",
    "badge": "CARDIOVASCULAR",
    "eyebrow": "PERFIL CLÍNICO Nº 44",
    "headlineA": "HYPERLIPIDEMIA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d44-lead",
        "type": "lead",
        "text": "Elevated LDL cholesterol (± triglycerides) driving atherosclerotic plaque formation; asymptomatic until cardiovascular events; primary prevention target for MI/stroke."
      },
      {
        "id": "d44-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · High-intensity statin: atorvastatin or rosuvastatin",
            "text": "Lipitor; Crestor\nAtorvastatin 40-80 mg; rosuvastatin 20-40 mg (moderate intensity: atorva 10-20, rosuva 5-10) · Oral · Once daily (any time for these long-acting…"
          },
          {
            "title": "#2 · Ezetimibe",
            "text": "Zetia\n10 mg · Oral · Once daily · Long-term"
          },
          {
            "title": "#3 · PCSK9 inhibitor: evolocumab or alirocumab",
            "text": "Repatha; Praluent\nEvolocumab 140 mg q2wk or 420 mg monthly; alirocumab 75-150 mg q2wk · Subcutaneous · Every 2-4 weeks · Long-term"
          }
        ]
      }
    ],
    "alertText": "Very high TG (>500 mg/dL → pancreatitis risk: fibrates/omega-3); familial hypercholesterolemia suspicion (LDL ≥190) → cascade screening.",
    "note": "Evidencia: ACC/AHA 2018 Cholesterol Guideline; CTT Collaboration meta-analyses; IMPROVE-IT & FOURIER trials"
  },
  {
    "id": "d45",
    "badge": "CARDIOVASCULAR",
    "eyebrow": "PERFIL CLÍNICO Nº 45",
    "headlineA": "STABLE CORONARY ARTERY",
    "headlineB": "DISEASE (ANGINA)",
    "blocks": [
      {
        "id": "d45-lead",
        "type": "lead",
        "text": "Fixed atherosclerotic narrowing of coronary arteries causing exertional chest discomfort (stable angina); management prevents MI/death and controls symptoms."
      },
      {
        "id": "d45-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Aspirin + high-intensity statin (secondary…",
            "text": "Bayer; Lipitor/Crestor\nAspirin 75-100 mg; atorvastatin 40-80 mg or rosuvastatin 20-40 mg · Oral · Once daily · Lifelong"
          },
          {
            "title": "#2 · Beta-blocker (metoprolol) for symptom control;…",
            "text": "Toprol-XL; nitroglycerin SL\nMetoprolol succinate 50-200 mg daily; nitroglycerin 0.4 mg SL PRN · Oral / sublingual · Beta-blocker daily; NTG as needed (max 3 doses 5 min…"
          },
          {
            "title": "#3 · Revascularization: PCI (stent) or CABG…",
            "text": "—\n— · Percutaneous / surgical · — · —"
          }
        ]
      }
    ],
    "alertText": "Crescendo/rest angina, troponin elevation (acute coronary syndrome — emergency), new heart failure signs.",
    "note": "Evidencia: ACC/AHA Chronic Coronary Disease Guideline 2023; ISCHEMIA & COURAGE trials"
  },
  {
    "id": "d46",
    "badge": "CARDIOVASCULAR",
    "eyebrow": "PERFIL CLÍNICO Nº 46",
    "headlineA": "ATRIAL FIBRILLATION",
    "headlineB": "",
    "blocks": [
      {
        "id": "d46-lead",
        "type": "lead",
        "text": "Disorganized atrial electrical activity causing irregular pulse; stasis promotes atrial thrombus → stroke risk increased 5-fold. Management pillars: stroke prevention, rate/rhythm control, risk-factor treatment."
      },
      {
        "id": "d46-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · DOAC for stroke prevention: apixaban (preferred) or…",
            "text": "Eliquis; Xarelto\nApixaban 5 mg BID (2.5 mg if ≥2 of: age ≥80, weight ≤60 kg, Cr ≥1.5); rivaroxaban 20 mg daily with food · Oral · Twice daily / once daily ·…"
          },
          {
            "title": "#2 · Rate control: metoprolol succinate (target resting…",
            "text": "Toprol-XL\n50-200 mg · Oral · Once daily · Long-term"
          },
          {
            "title": "#3 · Rhythm control with catheter ablation (±…",
            "text": "—; Tambocor; Pacerone\nFlecainide 100-150 mg BID; amiodarone 200 mg daily after load · Oral / ablation procedure · Per drug · Long-term"
          }
        ]
      }
    ],
    "alertText": "Hemodynamic instability (urgent cardioversion), stroke symptoms, rate >150 with symptoms, AF with WPW (avoid AV nodal blockers).",
    "note": "Evidencia: ACC/AHA/HRS 2023 AF Guideline; EAST-AFNET 4 (NEJM 2020)"
  },
  {
    "id": "d47",
    "badge": "CARDIOVASCULAR",
    "eyebrow": "PERFIL CLÍNICO Nº 47",
    "headlineA": "HEART FAILURE WITH REDUCED",
    "headlineB": "EJECTION FRACTION (HFREF)",
    "blocks": [
      {
        "id": "d47-lead",
        "type": "lead",
        "text": "Failure of the left ventricle to pump effectively (EF ≤40%), causing dyspnea, edema, and fatigue; quadruple 'pillar' therapy has transformed survival."
      },
      {
        "id": "d47-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · ARNI: sacubitril/valsartan (or ACE inhibitor if…",
            "text": "Entresto; (ACEi: lisinopril/Zestril)\nSacubitril/valsartan 24/26 mg BID, titrate to 97/103 mg BID; lisinopril 20-40 mg daily · Oral · Twice daily (ARNI) / once daily (ACEi) · Lifelong"
          },
          {
            "title": "#2 · Beta-blocker: carvedilol (or metoprolol…",
            "text": "Coreg; Aldactone\nCarvedilol 3.125 mg BID titrate to 25 mg BID; spironolactone 25-50 mg daily · Oral · Per drug · Lifelong"
          },
          {
            "title": "#3 · SGLT2 inhibitor: dapagliflozin or empagliflozin",
            "text": "Farxiga; Jardiance\n10 mg · Oral · Once daily · Lifelong"
          }
        ]
      }
    ],
    "alertText": "Acute decompensation (pulmonary edema, hypoxia), hypotension limiting titration, worsening renal function, arrhythmias.",
    "note": "Evidencia: ACC/AHA/HFSA 2022 HF Guideline; PARADIGM-HF, DAPA-HF, EMPEROR-Reduced trials"
  },
  {
    "id": "d48",
    "badge": "CARDIOVASCULAR",
    "eyebrow": "PERFIL CLÍNICO Nº 48",
    "headlineA": "DEEP VEIN THROMBOSIS",
    "headlineB": "",
    "blocks": [
      {
        "id": "d48-lead",
        "type": "lead",
        "text": "Blood clot in deep leg veins causing swelling and pain; danger is embolization to the lungs (PE). Anticoagulation prevents extension while the body dissolves the clot."
      },
      {
        "id": "d48-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Apixaban (or rivaroxaban) — no bridging needed",
            "text": "Eliquis; Xarelto\nApixaban 10 mg BID ×7 d then 5 mg BID; rivaroxaban 15 mg BID ×21 d then 20 mg daily · Oral · Per phase · 3 months (provoked); ≥6 months to…"
          },
          {
            "title": "#2 · LMWH bridging to warfarin (alternative)",
            "text": "Lovenox + Coumadin\nEnoxaparin 1 mg/kg BID; warfarin titrated to INR 2-3 · SC + oral · Enoxaparin twice daily ≥5 days until INR therapeutic ×2 days · 3-6 months"
          },
          {
            "title": "#3 · Compression stockings + early ambulation",
            "text": "Graduated compression 20-30 mmHg\n— · — · Daily wear · 2 years (for post-thrombotic syndrome prevention)"
          }
        ]
      }
    ],
    "alertText": "PE symptoms (dyspnea, chest pain, syncope), phlegmasia cerulea dolens (limb-threatening), bleeding on anticoagulation.",
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
        "text": "Type 2 diabetes, Type 1 diabetes, Hypothyroidism, Graves' hyperthyroidism, Obesity, Osteoporosis, Vitamin D deficiency, Gout"
      }
    ]
  },
  {
    "id": "d49",
    "badge": "ENDOCRINO Y METABÓLICO",
    "eyebrow": "PERFIL CLÍNICO Nº 49",
    "headlineA": "TYPE 2 DIABETES",
    "headlineB": "",
    "blocks": [
      {
        "id": "d49-lead",
        "type": "lead",
        "text": "Insulin resistance with progressive beta-cell dysfunction causing chronic hyperglycemia; damages vessels, nerves, kidneys, and eyes. Weight loss can induce remission in early disease."
      },
      {
        "id": "d49-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Metformin + lifestyle intervention",
            "text": "Glucophage\n500 mg with dinner, titrate to 1,000 mg twice daily (XR available) · Oral · Once or twice daily with meals · Long-term"
          },
          {
            "title": "#2 · GLP-1 receptor agonist: semaglutide or dulaglutide",
            "text": "Ozempic (0.25→1 mg); Trulicity (0.75→4.5 mg)\nSemaglutide 0.25 mg weekly titrate to 0.5-1 mg; dulaglutide 0.75-4.5 mg weekly · Subcutaneous · Once weekly · Long-term"
          },
          {
            "title": "#3 · SGLT2 inhibitor: empagliflozin or dapagliflozin",
            "text": "Jardiance (10-25 mg); Farxiga (10 mg)\n10 mg once daily · Oral · Once daily (morning) · Long-term"
          }
        ]
      }
    ],
    "alertText": "Hyperosmolar state or DKA (rare in T2DM), severe hypoglycemia (sulfonylureas/insulin), foot ulcers.",
    "note": "Evidencia: ADA Standards of Care 2025; ACP 2024 Newer Pharmacologic Treatments Guideline; DiRECT trial (Lean et al., Lancet 2018)"
  },
  {
    "id": "d50",
    "badge": "ENDOCRINO Y METABÓLICO",
    "eyebrow": "PERFIL CLÍNICO Nº 50",
    "headlineA": "TYPE 1 DIABETES",
    "headlineB": "",
    "blocks": [
      {
        "id": "d50-lead",
        "type": "lead",
        "text": "Autoimmune destruction of pancreatic beta cells causing absolute insulin deficiency; requires lifelong insulin. Intensive control prevents blindness, kidney failure, and neuropathy."
      },
      {
        "id": "d50-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Basal-bolus insulin: glargine/degludec +…",
            "text": "Lantus/Tresiba + NovoLog/Humalog\nGlargine 0.2-0.4 units/kg once daily; bolus ~0.5-1 unit per 10-15 g carbohydrate (total ~0.5-1 u/kg/day) · Subcutaneous · Basal once daily +…"
          },
          {
            "title": "#2 · Insulin pump with CGM (hybrid closed-loop)",
            "text": "Tandem t:slim X2 Control-IQ, Medtronic 780G, Omnipod 5…\nIndividualized basal rates + bolus calculator · Subcutaneous infusion · Continuous · Lifelong"
          },
          {
            "title": "#3 · Structured diabetes education + carbohydrate…",
            "text": "—\n— · — · — · Initial + refresher courses"
          }
        ]
      }
    ],
    "alertText": "Diabetic ketoacidosis (vomiting, abdominal pain, deep breathing, ketones — emergency), severe hypoglycemia (seizure/unconsciousness — glucagon).",
    "note": "Evidencia: DCCT/EDIC; ADA Standards of Care 2025; hybrid closed-loop RCTs (Brown et al., NEJM 2019)"
  },
  {
    "id": "d51",
    "badge": "ENDOCRINO Y METABÓLICO",
    "eyebrow": "PERFIL CLÍNICO Nº 51",
    "headlineA": "HYPOTHYROIDISM",
    "headlineB": "",
    "blocks": [
      {
        "id": "d51-lead",
        "type": "lead",
        "text": "Thyroid hormone deficiency (usually autoimmune Hashimoto thyroiditis) causing fatigue, weight gain, cold intolerance, constipation; simple hormone replacement normalizes metabolism."
      },
      {
        "id": "d51-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Levothyroxine",
            "text": "Synthroid, Levoxyl\nStart 1.6 mcg/kg/day (young/healthy) or 25-50 mcg (elderly/cardiac); typical maintenance 100-125 mcg · Oral · Once daily, empty stomach 30-60…"
          },
          {
            "title": "#2 · TSH-guided dose titration",
            "text": "—\nAdjust 12.5-25 mcg increments based on TSH · — · Recheck TSH 6-8 weeks after each change · Until stable, then annual"
          },
          {
            "title": "#3 · Treat reversible causes: iodine repletion where…",
            "text": "Iodized salt / potassium iodide\nIodine 150 mcg/day dietary target · Oral · Daily · Per cause"
          }
        ]
      }
    ],
    "alertText": "Myxedema coma (hypothermia, bradycardia, altered mental status — endocrine emergency), severe untreated hypothyroidism in pregnancy (fetal neurodevelopment).",
    "note": "Evidencia: ATA 2014 Hypothyroidism Guideline (Jonklaas et al.)"
  },
  {
    "id": "d52",
    "badge": "ENDOCRINO Y METABÓLICO",
    "eyebrow": "PERFIL CLÍNICO Nº 52",
    "headlineA": "GRAVES'",
    "headlineB": "HYPERTHYROIDISM",
    "blocks": [
      {
        "id": "d52-lead",
        "type": "lead",
        "text": "Autoimmune TSH-receptor antibody stimulation causing thyroid hormone excess: weight loss, tremor, palpitations, heat intolerance ± goiter and orbitopathy. All three definitive options cure it."
      },
      {
        "id": "d52-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Methimazole (antithyroid drug)",
            "text": "Tapazole\n10-30 mg daily (divided or single dose), taper to maintenance 2.5-10 mg · Oral · Once daily (maintenance) or divided · 12-18 months, then trial…"
          },
          {
            "title": "#2 · Radioactive iodine (RAI-131) ablation",
            "text": "—\n10-15 mCi typical fixed dose · Oral capsule · Single dose · Single administration (hypothyroidism expected → levothyroxine)"
          },
          {
            "title": "#3 · Total thyroidectomy",
            "text": "—\n— · Surgical · — · Single procedure"
          }
        ]
      }
    ],
    "alertText": "Thyroid storm (high fever, delirium, tachycardia — ICU emergency), rapidly progressive orbitopathy (vision threat), AF in elderly.",
    "note": "Evidencia: ATA 2016 Hyperthyroidism Guideline (Ross et al.)"
  },
  {
    "id": "d53",
    "badge": "ENDOCRINO Y METABÓLICO",
    "eyebrow": "PERFIL CLÍNICO Nº 53",
    "headlineA": "OBESITY",
    "headlineB": "",
    "blocks": [
      {
        "id": "d53-lead",
        "type": "lead",
        "text": "Chronic relapsing disease of excess adiposity (BMI ≥30), driving diabetes, hypertension, OSA, and cardiovascular disease; now treatable with highly effective incretin-based medications."
      },
      {
        "id": "d53-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Structured lifestyle intervention (caloric deficit…",
            "text": "—\n— · — · — · Continuous"
          },
          {
            "title": "#2 · GLP-1/GIP agonist: semaglutide 2.4 mg or…",
            "text": "Wegovy; Zepbound\nSemaglutide 0.25 mg weekly titrate to 2.4 mg over 16 wk; tirzepatide 2.5 mg weekly titrate to 5-15 mg · Subcutaneous · Once weekly · Long-term…"
          },
          {
            "title": "#3 · Bariatric surgery: sleeve gastrectomy or Roux-en-Y…",
            "text": "—\n— · Surgical · — · Single procedure + lifelong follow-up"
          }
        ]
      }
    ],
    "alertText": "Obesity hypoventilation syndrome, severe OSA, NASH with fibrosis, intracranial hypertension (rare).",
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
        "text": "Reduced bone density and microarchitectural deterioration leading to fragility fractures (hip, spine, wrist); hip fractures carry ~20% one-year mortality in the elderly."
      },
      {
        "id": "d54-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Oral bisphosphonate: alendronate",
            "text": "Fosamax\n70 mg once weekly (or 10 mg daily) · Oral · Once weekly, fasting with plain water, remain upright 30 min · 5 years initial, then reassess ('drug…"
          },
          {
            "title": "#2 · Denosumab",
            "text": "Prolia\n60 mg · Subcutaneous · Every 6 months (clinic-administered) · Long-term — must not delay doses"
          },
          {
            "title": "#3 · Calcium + vitamin D + weight-bearing exercise…",
            "text": "—; Forteo\nCalcium 1,000-1,200 mg/day (diet-first); vitamin D 800-1,000 IU/day; teriparatide 20 mcg SC daily · Oral / SC · Daily · Calcium/vitamin D…"
          }
        ]
      }
    ],
    "alertText": "Fragility fracture (needs urgent secondary prevention — most patients untreated after first fracture), acute vertebral collapse pain.",
    "note": "Evidencia: Endocrine Society 2020 Guideline; FIT & FREEDOM trials"
  },
  {
    "id": "d55",
    "badge": "ENDOCRINO Y METABÓLICO",
    "eyebrow": "PERFIL CLÍNICO Nº 55",
    "headlineA": "VITAMIN D DEFICIENCY",
    "headlineB": "",
    "blocks": [
      {
        "id": "d55-lead",
        "type": "lead",
        "text": "Insufficient 25-hydroxyvitamin D (<20 ng/mL) impairing calcium absorption and bone mineralization; causes rickets in children, osteomalacia in adults, and contributes to falls/fractures in the elderly."
      },
      {
        "id": "d55-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Cholecalciferol (vitamin D3)",
            "text": "D3 supplements; prescription: Drisdol (D2) or D3 50,000…\nRepletion: 50,000 IU weekly ×8 weeks or 6,000-10,000 IU daily; maintenance 1,000-2,000 IU daily · Oral · Weekly (repletion) then daily…"
          },
          {
            "title": "#2 · Dietary sources + sensible sunlight exposure",
            "text": "—\nFatty fish, fortified dairy/cereals; 10-30 min midday sun several times weekly · — · Daily · Ongoing"
          },
          {
            "title": "#3 · Treat underlying malabsorption (celiac screen,…",
            "text": "—\n— · — · — · —"
          }
        ]
      }
    ],
    "alertText": "Hypocalcemic symptoms (tetany, seizures in infants), severe osteomalacia with fractures/bone pain.",
    "note": "Evidencia: Endocrine Society Vitamin D Guidelines (2011, 2024 update)"
  },
  {
    "id": "d56",
    "badge": "ENDOCRINO Y METABÓLICO",
    "eyebrow": "PERFIL CLÍNICO Nº 56",
    "headlineA": "GOUT",
    "headlineB": "",
    "blocks": [
      {
        "id": "d56-lead",
        "type": "lead",
        "text": "Monosodium urate crystal deposition from chronic hyperuricemia causing excruciating inflammatory arthritis flares (classically the big toe), tophi, and kidney stones; long-term urate lowering dissolves crystals and cures the disease."
      },
      {
        "id": "d56-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Acute flare: NSAID (naproxen), colchicine, or…",
            "text": "Aleve; Colcrys; Deltasone\nNaproxen 500 mg BID; colchicine 1.2 mg then 0.6 mg one hour later (then 0.6 mg daily during flare); prednisone 30-40 mg daily taper · Oral · Per…"
          },
          {
            "title": "#2 · Allopurinol (urate-lowering therapy),…",
            "text": "Zyloprim\nStart 100 mg daily (50 mg in CKD), titrate monthly to serum urate <6 mg/dL (often 300-600 mg); max 800 mg · Oral · Once daily · Lifelong…"
          },
          {
            "title": "#3 · Febuxostat (allopurinol-intolerant) or pegloticase…",
            "text": "Uloric; Krystexxa\nFebuxostat 40-80 mg daily; pegloticase 8 mg IV every 2 weeks · Oral / IV · Daily / biweekly · Lifelong / until tophi resolve"
          }
        ]
      }
    ],
    "alertText": "Septic arthritis mimic (always consider joint aspiration for first/hot joint), tophaceous destruction, urate nephropathy.",
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
        "text": "Gastroesophageal reflux disease (GERD), Irritable bowel syndrome, Ulcerative colitis, Crohn's disease, Celiac disease, Symptomatic gallstones (cholelithiasis), Hemorrhoids"
      }
    ]
  },
  {
    "id": "d57",
    "badge": "GASTROINTESTINAL",
    "eyebrow": "PERFIL CLÍNICO Nº 57",
    "headlineA": "GASTROESOPHAGEAL",
    "headlineB": "REFLUX DISEASE (GERD)",
    "blocks": [
      {
        "id": "d57-lead",
        "type": "lead",
        "text": "Retrograde flow of gastric acid into the esophagus causing heartburn and regurgitation; chronic exposure can cause erosive esophagitis, strictures, and Barrett esophagus."
      },
      {
        "id": "d57-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Proton pump inhibitor: omeprazole (or esomeprazole,…",
            "text": "Prilosec; Nexium; Protonix\nOmeprazole 20-40 mg · Oral · Once daily, 30-60 min before breakfast · 8 weeks initial, then step-down to lowest effective dose"
          },
          {
            "title": "#2 · H2 receptor blocker: famotidine (mild disease /…",
            "text": "Pepcid\n20 mg · Oral · Twice daily or at bedtime · 4-8 weeks / PRN"
          },
          {
            "title": "#3 · Lifestyle measures; laparoscopic Nissen…",
            "text": "—\nWeight loss, elevate head of bed, avoid late meals/triggers · — · Continuous / single procedure · —"
          }
        ]
      }
    ],
    "alertText": "Dysphagia, odynophagia, weight loss, GI bleeding, anemia, age >50-60 with new symptoms → endoscopy (exclude malignancy/Barrett).",
    "note": "Evidencia: ACG 2022 GERD Guideline (Katz et al.)"
  },
  {
    "id": "d58",
    "badge": "GASTROINTESTINAL",
    "eyebrow": "PERFIL CLÍNICO Nº 58",
    "headlineA": "IRRITABLE",
    "headlineB": "BOWEL SYNDROME",
    "blocks": [
      {
        "id": "d58-lead",
        "type": "lead",
        "text": "Functional gut-brain axis disorder causing recurrent abdominal pain with altered bowel habits (IBS-D, IBS-C, mixed), without structural disease; affects ~10% of adults."
      },
      {
        "id": "d58-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Low-FODMAP diet (with dietitian guidance)",
            "text": "—\nRestriction phase 4-6 weeks, then structured reintroduction · Dietary · Daily · 6-8 weeks to personalized long-term plan"
          },
          {
            "title": "#2 · Antispasmodic: hyoscyamine/dicyclomine, or…",
            "text": "Levsin; Bentyl; IBgard (peppermint oil 180-225 mg)\nDicyclomine 10-20 mg; peppermint oil 180-225 mg enteric-coated · Oral · Dicyclomine 3-4 times daily PRN; peppermint oil 2-3 times daily · PRN /…"
          },
          {
            "title": "#3 · Symptom-targeted: loperamide (IBS-D) or…",
            "text": "Imodium; MiraLAX; Amitiza; Linzess\nLoperamide 2-4 mg PRN; PEG 17 g daily; lubiprostone 8 mcg BID; linaclotide 290 mcg daily · Oral · Per drug · 4-8 week trials"
          }
        ]
      }
    ],
    "alertText": "Alarm features: rectal bleeding, iron-deficiency anemia, unintentional weight loss, family history of colon cancer/IBD/celiac, onset >50 years → colonoscopy/celiac testing.",
    "note": "Evidencia: ACG 2021 IBS Guideline (Lacy et al.)"
  },
  {
    "id": "d59",
    "badge": "GASTROINTESTINAL",
    "eyebrow": "PERFIL CLÍNICO Nº 59",
    "headlineA": "ULCERATIVE COLITIS",
    "headlineB": "",
    "blocks": [
      {
        "id": "d59-lead",
        "type": "lead",
        "text": "Immune-mediated inflammation limited to the colon's mucosa, extending from the rectum, causing bloody diarrhea and urgency; flares alternate with remission. Total colectomy eliminates colonic disease."
      },
      {
        "id": "d59-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · 5-aminosalicylate: mesalamine (mild-moderate)",
            "text": "Asacol HD, Lialda, Pentasa; rectal: Rowasa/Canasa\nOral 2.4-4.8 g daily; rectal suppository/enema for distal disease · Oral / rectal · Once or twice daily · Long-term maintenance"
          },
          {
            "title": "#2 · Corticosteroids for flares: prednisone (or…",
            "text": "Deltasone; Uceris\nPrednisone 40-60 mg daily taper over 8-12 weeks; budesonide MMX 9 mg ×8 weeks · Oral · Once daily (morning) · Short courses only — never…"
          },
          {
            "title": "#3 · Biologics/advanced therapy: infliximab (anti-TNF),…",
            "text": "Remicade; Entyvio; Stelara; Xeljanz; Rinvoq\nInfliximab 5 mg/kg IV wk 0,2,6 then q8wk; vedolizumab 300 mg IV q8wk; upadacitinib 45 mg daily ×8 wk then 15-30 mg · IV / SC / oral · Per drug ·…"
          }
        ]
      }
    ],
    "alertText": "Toxic megacolon (fever, distension, tachycardia — surgical emergency), severe flare >6 bloody stools/day with systemic signs (admit for IV steroids), perforation.",
    "note": "Evidencia: ACG 2019 UC Guideline; STRIDE-II (2021); ECCO Consensus"
  },
  {
    "id": "d60",
    "badge": "GASTROINTESTINAL",
    "eyebrow": "PERFIL CLÍNICO Nº 60",
    "headlineA": "CROHN'S DISEASE",
    "headlineB": "",
    "blocks": [
      {
        "id": "d60-lead",
        "type": "lead",
        "text": "Transmural granulomatous inflammation anywhere from mouth to anus (typically terminal ileum), causing abdominal pain, diarrhea, weight loss, strictures, and fistulas; chronic relapsing course."
      },
      {
        "id": "d60-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Induction: budesonide (ileal) or prednisone; early…",
            "text": "Entocort; Deltasone\nBudesonide 9 mg daily ×8-12 weeks; prednisone 40-60 mg taper · Oral · Once daily · 8-12 weeks (induction only)"
          },
          {
            "title": "#2 · Anti-TNF: infliximab or adalimumab (±…",
            "text": "Remicade; Humira\nInfliximab 5 mg/kg IV wk 0,2,6 then q8wk; adalimumab 160/80/40 mg SC then 40 mg q2wk · IV / SC · Per schedule · Long-term maintenance"
          },
          {
            "title": "#3 · Immunomodulator (azathioprine/methotrexate) as…",
            "text": "Imuran; Trexall\nAzathioprine 2-2.5 mg/kg daily; methotrexate 25 mg weekly · Oral / SC · Daily / weekly · Long-term"
          }
        ]
      }
    ],
    "alertText": "Obstruction (stricture), abscess (fever + localized pain), fistulas, toxic megacolon, severe malnutrition.",
    "note": "Evidencia: ECCO Crohn's Guidelines; ACG 2018; SONIC & CALM trials"
  },
  {
    "id": "d61",
    "badge": "GASTROINTESTINAL",
    "eyebrow": "PERFIL CLÍNICO Nº 61",
    "headlineA": "CELIAC DISEASE",
    "headlineB": "",
    "blocks": [
      {
        "id": "d61-lead",
        "type": "lead",
        "text": "Immune reaction to gluten (wheat/barley/rye) destroying small-bowel villi, causing diarrhea, bloating, anemia, and malabsorption — or no GI symptoms at all. Lifelong gluten exclusion heals the mucosa."
      },
      {
        "id": "d61-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Lifelong strict gluten-free diet (<20 ppm gluten)",
            "text": "—\nExclude wheat, barley, rye; pure oats acceptable · Dietary · Daily, lifelong · Lifelong"
          },
          {
            "title": "#2 · Nutritional repletion: iron, vitamin D, B12,…",
            "text": "—\nPer deficiency (e.g., ferrous sulfate 325 mg daily; vitamin D 1,000-2,000 IU) · Oral · Daily · 3-6 months, then per levels"
          },
          {
            "title": "#3 · Dietitian follow-up + serologic monitoring",
            "text": "—\nAnti-tTG IgA at 6 and 12 months, then annually · — · Per schedule · Lifelong"
          }
        ]
      }
    ],
    "alertText": "Refractory celiac disease (persistent villous atrophy — lymphoma risk), severe malnutrition, dermatitis herpetiformis (skin form — dapsone + GFD).",
    "note": "Evidencia: ACG 2023 Celiac Disease Guideline"
  },
  {
    "id": "d62",
    "badge": "GASTROINTESTINAL",
    "eyebrow": "PERFIL CLÍNICO Nº 62",
    "headlineA": "SYMPTOMATIC GALLSTONES",
    "headlineB": "(CHOLELITHIASIS)",
    "blocks": [
      {
        "id": "d62-lead",
        "type": "lead",
        "text": "Cholesterol or pigment stones in the gallbladder causing episodic right-upper-quadrant pain (biliary colic), typically after fatty meals; complications include cholecystitis, pancreatitis, and cholangitis."
      },
      {
        "id": "d62-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Laparoscopic cholecystectomy",
            "text": "—\n— · Surgical (minimally invasive) · — · Single procedure, typically same-day discharge"
          },
          {
            "title": "#2 · Ursodeoxycholic acid (select non-surgical…",
            "text": "Actigall, Urso\n8-10 mg/kg/day · Oral · Divided twice-three times daily · 6-24 months"
          },
          {
            "title": "#3 · Analgesia + low-fat diet (interim/expectant)",
            "text": "—\nNSAID (ibuprofen 400-600 mg) or ketorolac for colic; low-fat meals · Oral · PRN / dietary · Until definitive treatment"
          }
        ]
      }
    ],
    "alertText": "Fever + persistent RUQ pain (cholecystitis), jaundice (choledocholithiasis), severe epigastric pain radiating to back (pancreatitis), Charcot triad/Reynolds pentad (cholangitis — emergency).",
    "note": "Evidencia: Tokyo Guidelines 2018 (acute cholangitis/cholecystitis); SAGES guideline"
  },
  {
    "id": "d63",
    "badge": "GASTROINTESTINAL",
    "eyebrow": "PERFIL CLÍNICO Nº 63",
    "headlineA": "HEMORRHOIDS",
    "headlineB": "",
    "blocks": [
      {
        "id": "d63-lead",
        "type": "lead",
        "text": "Engorged vascular cushions in the anal canal causing painless bleeding (internal) or painful thrombosis (external); driven by straining, constipation, pregnancy, and prolonged sitting."
      },
      {
        "id": "d63-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Fiber supplementation + fluids + sitz baths",
            "text": "Metamucil (psyllium)\nPsyllium 5-10 g with water; sitz baths 10-15 min warm water · Oral / topical · Fiber 1-2 times daily; baths 2-3 times daily and after stools ·…"
          },
          {
            "title": "#2 · Topical corticosteroid/anesthetic: hydrocortisone +…",
            "text": "Anusol-HC, Preparation H with lidocaine\nApply per product (suppository or cream) · Topical / rectal · 2-3 times daily · ≤7 days (steroid limit)"
          },
          {
            "title": "#3 · Rubber band ligation (grade II-III internal)",
            "text": "—\n— · Office procedure · — · 1-3 sessions, 4-6 weeks apart"
          }
        ]
      }
    ],
    "alertText": "Thrombosed external hemorrhoid (severe pain, purple lump — excision within 72 h), significant bleeding/anemia, prolapse requiring manual reduction.",
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
        "text": "Kidney stones (nephrolithiasis), Benign prostatic hyperplasia (BPH), Overactive bladder, Erectile dysfunction, Chronic kidney disease"
      }
    ]
  },
  {
    "id": "d64",
    "badge": "RENAL Y UROLÓGICO",
    "eyebrow": "PERFIL CLÍNICO Nº 64",
    "headlineA": "KIDNEY STONES",
    "headlineB": "(NEPHROLITHIASIS)",
    "blocks": [
      {
        "id": "d64-lead",
        "type": "lead",
        "text": "Crystalline mineral deposits (calcium oxalate most common) forming in the kidney and passing down the ureter, causing colicky flank pain, hematuria, and nausea; recurrence is common without prevention."
      },
      {
        "id": "d64-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Hydration + NSAID analgesia: ibuprofen/ketorolac",
            "text": "Advil; Toradol\nIbuprofen 600-800 mg TID with food; ketorolac 10 mg PO q6h PRN (or 30 mg IV in ED) · Oral / IV · Per regimen · During passage (days)"
          },
          {
            "title": "#2 · Tamsulosin (medical expulsive therapy)",
            "text": "Flomax\n0.4 mg · Oral · Once daily · Up to 4 weeks"
          },
          {
            "title": "#3 · ESWL (shock-wave lithotripsy) or ureteroscopy with…",
            "text": "—\n— · Outpatient procedures · — · Single session ± stent"
          }
        ]
      }
    ],
    "alertText": "Fever + obstructing stone (urologic emergency — infected hydronephrosis can be fatal), solitary kidney, bilateral obstruction, anuria, uncontrolled pain.",
    "note": "Evidencia: AUA Surgical Management of Stones Guideline; EAU Urolithiasis Guidelines"
  },
  {
    "id": "d65",
    "badge": "RENAL Y UROLÓGICO",
    "eyebrow": "PERFIL CLÍNICO Nº 65",
    "headlineA": "BENIGN PROSTATIC",
    "headlineB": "HYPERPLASIA (BPH)",
    "blocks": [
      {
        "id": "d65-lead",
        "type": "lead",
        "text": "Non-malignant prostate enlargement obstructing urine flow in older men: weak stream, frequency, nocturia, incomplete emptying; can progress to retention and bladder damage."
      },
      {
        "id": "d65-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Alpha-1 blocker: tamsulosin",
            "text": "Flomax\n0.4 mg (titrate to 0.8 mg) · Oral · Once daily, 30 min after the same meal each day · Long-term"
          },
          {
            "title": "#2 · 5-alpha reductase inhibitor: finasteride or…",
            "text": "Proscar; Avodart\nFinasteride 5 mg; dutasteride 0.5 mg · Oral · Once daily · Long-term (6-12 months for full effect)"
          },
          {
            "title": "#3 · TURP or laser enucleation (HoLEP)",
            "text": "—\n— · Surgical · — · Single procedure"
          }
        ]
      }
    ],
    "alertText": "Acute urinary retention (painful, distended bladder — catheterize), hematuria, recurrent UTIs, hydronephrosis/rising creatinine.",
    "note": "Evidencia: AUA BPH Guideline (2023); EAU Non-neurogenic Male LUTS Guidelines"
  },
  {
    "id": "d66",
    "badge": "RENAL Y UROLÓGICO",
    "eyebrow": "PERFIL CLÍNICO Nº 66",
    "headlineA": "OVERACTIVE BLADDER",
    "headlineB": "",
    "blocks": [
      {
        "id": "d66-lead",
        "type": "lead",
        "text": "Urgency with frequency/nocturia ± urge incontinence, without infection; caused by detrusor overactivity; significantly impairs quality of life and sleep."
      },
      {
        "id": "d66-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Bladder training + behavioral therapy",
            "text": "—\nTimed voiding (extend intervals 15-30 min weekly), urge suppression, pelvic floor (Kegel) exercises · — · Daily practice · 6-12 weeks to…"
          },
          {
            "title": "#2 · Antimuscarinic (oxybutynin ER/solifenacin) or…",
            "text": "Ditropan XL; Vesicare; Myrbetriq\nOxybutynin ER 5-30 mg; solifenacin 5-10 mg; mirabegron 25-50 mg · Oral · Once daily · Long-term (trial 4-8 weeks)"
          },
          {
            "title": "#3 · OnabotulinumtoxinA detrusor injections (refractory)",
            "text": "Botox\n100 units injected into detrusor · Intravesical (cystoscopic) · Single session · Repeat every 6-9 months as effect wanes"
          }
        ]
      }
    ],
    "alertText": "Retention, hematuria (evaluate for malignancy), recurrent UTIs.",
    "note": "Evidencia: AUA/SUFU OAB Guideline 2024"
  },
  {
    "id": "d67",
    "badge": "RENAL Y UROLÓGICO",
    "eyebrow": "PERFIL CLÍNICO Nº 67",
    "headlineA": "ERECTILE DYSFUNCTION",
    "headlineB": "",
    "blocks": [
      {
        "id": "d67-lead",
        "type": "lead",
        "text": "Consistent inability to achieve/maintain erection; usually vascular (shares risk factors with coronary disease) but also psychogenic, hormonal, or medication-induced; ED precedes coronary events by 3-5 years."
      },
      {
        "id": "d67-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · PDE5 inhibitor: sildenafil or tadalafil",
            "text": "Viagra; Cialis\nSildenafil 25-100 mg taken 1 h before activity; tadalafil 10-20 mg PRN or 2.5-5 mg daily · Oral · PRN (sildenafil window 4-8 h; tadalafil up to…"
          },
          {
            "title": "#2 · Lifestyle + cardiometabolic risk control",
            "text": "—\nWeight loss, aerobic exercise, smoking cessation, glycemic/BP/lipid management · — · Continuous · Long-term"
          },
          {
            "title": "#3 · Psychosexual therapy ± vacuum erection device;…",
            "text": "—; Caverject\nAlprostadil 2.5-40 mcg injected at penile base · — / intraurethral or injection · PRN · —"
          }
        ]
      }
    ],
    "alertText": "Priapism, sudden onset with neurological signs, penile curvature (Peyronie), chest pain on exertion (undiagnosed CAD).",
    "note": "Evidencia: AUA Erectile Dysfunction Guideline 2018; EAU Sexual and Reproductive Health Guidelines"
  },
  {
    "id": "d68",
    "badge": "RENAL Y UROLÓGICO",
    "eyebrow": "PERFIL CLÍNICO Nº 68",
    "headlineA": "CHRONIC",
    "headlineB": "KIDNEY DISEASE",
    "blocks": [
      {
        "id": "d68-lead",
        "type": "lead",
        "text": "Progressive loss of kidney function (eGFR <60 or albuminuria >3 months), usually from diabetes and hypertension; early treatment markedly slows progression to dialysis."
      },
      {
        "id": "d68-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · ACE inhibitor (lisinopril) or ARB (losartan) when…",
            "text": "Zestril; Cozaar\nLisinopril 10-40 mg; losartan 50-100 mg — titrate to max tolerated · Oral · Once daily · Long-term"
          },
          {
            "title": "#2 · SGLT2 inhibitor: dapagliflozin or empagliflozin",
            "text": "Farxiga; Jardiance\n10 mg · Oral · Once daily · Long-term"
          },
          {
            "title": "#3 · BP <130/80 + glycemic control; finerenone for…",
            "text": "Kerendia\nFinerenone 10-20 mg daily (K+-guided) · Oral · Once daily · Long-term"
          }
        ]
      }
    ],
    "alertText": "Rapid eGFR decline (>5/year), refractory hyperkalemia, fluid overload/pulmonary edema, uremic symptoms (nausea, pruritus, pericarditis) — nephrology referral at eGFR <30.",
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
        "text": "Major depressive disorder, Generalized anxiety disorder, Chronic insomnia disorder, Migraine, Tension-type headache, Epilepsy, Parkinson's disease, ADHD, Bipolar disorder, Obsessive-compulsive disorder"
      }
    ]
  },
  {
    "id": "d69",
    "badge": "NEUROLÓGICO Y PSIQUIÁTRICO",
    "eyebrow": "PERFIL CLÍNICO Nº 69",
    "headlineA": "MAJOR DEPRESSIVE",
    "headlineB": "DISORDER",
    "blocks": [
      {
        "id": "d69-lead",
        "type": "lead",
        "text": "Persistent low mood, anhedonia, and neurovegetative symptoms ≥2 weeks with functional impairment; driven by serotonergic/noradrenergic dysregulation, stress, and neuroinflammation. Episodes are treatable and often resolve fully."
      },
      {
        "id": "d69-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · SSRI: sertraline or escitalopram",
            "text": "Zoloft; Lexapro\nSertraline 50 mg start → 100-200 mg; escitalopram 10 mg → 20 mg · Oral · Once daily · ≥6-12 months after remission (first episode); longer if…"
          },
          {
            "title": "#2 · Cognitive behavioral therapy (12-16 weekly sessions)",
            "text": "—\n— · — · Weekly · 12-16 sessions"
          },
          {
            "title": "#3 · SNRI (venlafaxine/duloxetine) or SSRI + CBT…",
            "text": "Effexor XR; Cymbalta\nVenlafaxine 75-225 mg; duloxetine 30-60 mg · Oral · Once daily · Long-term"
          }
        ]
      }
    ],
    "alertText": "Suicidal ideation/plan (safety assessment same day), psychotic features, refusal to eat/drink, mania emergence (screen for bipolar before antidepressants).",
    "note": "Evidencia: APA/NICE Depression Guidelines; STAR*D; Cuijpers et al., World Psychiatry 2022 (SSRI vs CBT symptom profiles)"
  },
  {
    "id": "d70",
    "badge": "NEUROLÓGICO Y PSIQUIÁTRICO",
    "eyebrow": "PERFIL CLÍNICO Nº 70",
    "headlineA": "GENERALIZED",
    "headlineB": "ANXIETY DISORDER",
    "blocks": [
      {
        "id": "d70-lead",
        "type": "lead",
        "text": "Excessive, uncontrollable worry ≥6 months with restlessness, fatigue, muscle tension, and poor concentration; serotonergic dysregulation with hyperarousal."
      },
      {
        "id": "d70-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · SSRI (escitalopram/sertraline) or SNRI…",
            "text": "Lexapro; Zoloft; Effexor XR; Cymbalta\nEscitalopram 10-20 mg; duloxetine 30-60 mg (start low to limit initial jitteriness) · Oral · Once daily · ≥12 months after response"
          },
          {
            "title": "#2 · Cognitive behavioral therapy",
            "text": "—\n— · — · Weekly · 12-16 sessions"
          },
          {
            "title": "#3 · Buspirone or pregabalin (adjuncts/alternatives)",
            "text": "BuSpar; Lyrica\nBuspirone 15-60 mg divided; pregabalin 150-600 mg divided · Oral · 2-3 times daily · Long-term"
          }
        ]
      }
    ],
    "alertText": "Suicidal ideation, substance self-medication, panic escalation, thyroid dysfunction mimic (check TSH).",
    "note": "Evidencia: NICE GAD Guideline; WFSBP Guidelines"
  },
  {
    "id": "d71",
    "badge": "NEUROLÓGICO Y PSIQUIÁTRICO",
    "eyebrow": "PERFIL CLÍNICO Nº 71",
    "headlineA": "CHRONIC INSOMNIA",
    "headlineB": "DISORDER",
    "blocks": [
      {
        "id": "d71-lead",
        "type": "lead",
        "text": "Difficulty initiating/maintaining sleep ≥3 nights/week for ≥3 months with daytime impairment; perpetuated by conditioned arousal and maladaptive sleep habits."
      },
      {
        "id": "d71-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Cognitive behavioral therapy for insomnia (CBT-I)",
            "text": "— (digital: Somryst, Sleepio)\nStimulus control, sleep restriction, cognitive restructuring, relaxation · — · Weekly · 6-8 sessions"
          },
          {
            "title": "#2 · Sleep hygiene + stimulus control (standalone…",
            "text": "—\nFixed wake time, bed only for sleep, no screens/caffeine late, dark cool room · — · Daily · Ongoing"
          },
          {
            "title": "#3 · Short-course medication: dual orexin antagonist…",
            "text": "Belsomra; Dayvigo; Silenor\nSuvorexant 10-20 mg; lemborexant 5-10 mg; doxepin 3-6 mg; melatonin 1-3 mg · Oral · Nightly, within 30 min of bed (≥7 h before waking) ·…"
          }
        ]
      }
    ],
    "alertText": "Snoring/apneas (OSA evaluation), restless legs, depression/suicidality, manic sleeplessness.",
    "note": "Evidencia: ACP 2016 Insomnia Guideline; AASM CBT-I Practice Parameters"
  },
  {
    "id": "d72",
    "badge": "NEUROLÓGICO Y PSIQUIÁTRICO",
    "eyebrow": "PERFIL CLÍNICO Nº 72",
    "headlineA": "MIGRAINE",
    "headlineB": "",
    "blocks": [
      {
        "id": "d72-lead",
        "type": "lead",
        "text": "Neurovascular headache disorder with unilateral throbbing pain, nausea, and photo/phonophobia lasting 4-72 h; trigeminovascular activation with CGRP release is the core mechanism."
      },
      {
        "id": "d72-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Acute: triptan (sumatriptan) ± NSAID (naproxen)",
            "text": "Imitrex; Aleve\nSumatriptan 50-100 mg PO (6 mg SC) at onset; naproxen 500-550 mg · Oral / SC / intranasal · PRN at attack onset; may repeat once after 2 h · ≤9…"
          },
          {
            "title": "#2 · Gepants: rimegepant or ubrogepant (acute)",
            "text": "Nurtec ODT; Ubrelvy\nRimegepant 75 mg; ubrogepant 50-100 mg (repeat once ≥2 h) · Oral (ODT) · PRN · Per attacks (rimegepant also approved every-other-day preventive)"
          },
          {
            "title": "#3 · Prevention (≥4 headache days/month): CGRP mAb…",
            "text": "Aimovig; Ajovy; Emgality; Topamax; Inderal\nErenumab 70-140 mg SC monthly; topiramate 25 mg nightly titrate to 50 mg BID; propranolol 80-160 mg daily · SC / oral · Monthly injections /…"
          }
        ]
      }
    ],
    "alertText": "Thunderclap onset, fever + stiff neck, new neurologic deficits, progressive worsening, new headache >50 years, papilledema — image before labeling migraine.",
    "note": "Evidencia: AHS 2021 Consensus; NICE Headache Guideline"
  },
  {
    "id": "d73",
    "badge": "NEUROLÓGICO Y PSIQUIÁTRICO",
    "eyebrow": "PERFIL CLÍNICO Nº 73",
    "headlineA": "TENSION-TYPE",
    "headlineB": "HEADACHE",
    "blocks": [
      {
        "id": "d73-lead",
        "type": "lead",
        "text": "Bilateral pressing/tightening mild-moderate headache without nausea or activity worsening; the most common headache worldwide; chronic form (≥15 days/month) needs prevention."
      },
      {
        "id": "d73-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Acute: ibuprofen or acetaminophen",
            "text": "Advil; Tylenol\nIbuprofen 400 mg; acetaminophen 1,000 mg · Oral · PRN at onset · ≤2-3 days/week (strict limit)"
          },
          {
            "title": "#2 · Prevention (chronic form): amitriptyline",
            "text": "Elavil\n10-25 mg nightly, titrate to 25-75 mg · Oral · Once nightly · 6 months then reassess"
          },
          {
            "title": "#3 · Stress management + physical therapy/posture…",
            "text": "—\nCBT/relaxation, cervical/shoulder physiotherapy · — · Regular · Ongoing"
          }
        ]
      }
    ],
    "alertText": "Same red flags as migraine — thunderclap, fever, deficits, new pattern after 50.",
    "note": "Evidencia: EFNS Tension-Type Headache Guideline; Cochrane amitriptyline review"
  },
  {
    "id": "d74",
    "badge": "NEUROLÓGICO Y PSIQUIÁTRICO",
    "eyebrow": "PERFIL CLÍNICO Nº 74",
    "headlineA": "EPILEPSY",
    "headlineB": "",
    "blocks": [
      {
        "id": "d74-lead",
        "type": "lead",
        "text": "Recurrent unprovoked seizures from abnormal cortical discharges; two-thirds of patients achieve seizure freedom with medication; drug-resistant focal epilepsy may be cured surgically."
      },
      {
        "id": "d74-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Levetiracetam or lamotrigine (first-line…",
            "text": "Keppra; Lamictal\nLevetiracetam 500 mg BID titrate to 1,000-1,500 mg BID; lamotrigine slow titration 25 mg → 100-200 mg BID · Oral · Twice daily · Long-term (≥2…"
          },
          {
            "title": "#2 · Drug matched to seizure type: valproate…",
            "text": "Depakote; Tegretol; Zarontin\nValproate 500-1,500 mg/day; carbamazepine 400-1,200 mg/day divided; ethosuximide 500-1,500 mg/day · Oral · 2-3 times daily (ER available) ·…"
          },
          {
            "title": "#3 · Resective epilepsy surgery (drug-resistant focal…",
            "text": "—\n— · Surgical · — · Single procedure"
          }
        ]
      }
    ],
    "alertText": "Status epilepticus (>5 min — emergency: benzodiazepines), SUDEP risk counseling, new deficits.",
    "note": "Evidencia: ILAE treatment frameworks; SANAD trials; Wiebe et al., NEJM 2001 (surgery RCT)"
  },
  {
    "id": "d75",
    "badge": "NEUROLÓGICO Y PSIQUIÁTRICO",
    "eyebrow": "PERFIL CLÍNICO Nº 75",
    "headlineA": "PARKINSON'S DISEASE",
    "headlineB": "",
    "blocks": [
      {
        "id": "d75-lead",
        "type": "lead",
        "text": "Progressive loss of dopaminergic neurons in the substantia nigra causing bradykinesia, resting tremor, rigidity, and postural instability; treatment replaces dopamine and manages motor fluctuations."
      },
      {
        "id": "d75-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Levodopa/carbidopa",
            "text": "Sinemet, Rytary\nStart 25/100 mg TID; titrate by motor response (300-1,200 mg/day levodopa) · Oral · 3-4 times daily (30-60 min before meals — protein competes)…"
          },
          {
            "title": "#2 · Dopamine agonist (pramipexole/ropinirole) or MAO-B…",
            "text": "Mirapex; Requip; Azilect\nPramipexole 0.125 mg TID titrate to 1.5 mg TID; rasagiline 1 mg daily · Oral · Per drug · Long-term"
          },
          {
            "title": "#3 · Deep brain stimulation (subthalamic/globus…",
            "text": "Medtronic/Abbott devices\n— · Surgical implantation · Continuous stimulation · Long-term"
          }
        ]
      }
    ],
    "alertText": "Aspiration pneumonia, falls/fractures, psychosis (reduce dopaminergics carefully), abrupt medication cessation (neuroleptic malignant-like syndrome).",
    "note": "Evidencia: MDS Evidence-Based Medicine Reviews; EARLYSTIM (NEJM 2013); NICE Parkinson's Guideline"
  },
  {
    "id": "d76",
    "badge": "NEUROLÓGICO Y PSIQUIÁTRICO",
    "eyebrow": "PERFIL CLÍNICO Nº 76",
    "headlineA": "ADHD",
    "headlineB": "",
    "blocks": [
      {
        "id": "d76-lead",
        "type": "lead",
        "text": "Neurodevelopmental disorder of inattention, hyperactivity, and impulsivity impairing school, work, and relationships; dopamine/norepinephrine signaling deficits in prefrontal circuits."
      },
      {
        "id": "d76-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Methylphenidate (long-acting)",
            "text": "Concerta (18-72 mg), Ritalin LA, Vyvanse is amphetamine…\n18-36 mg morning, titrate to effect (max 72 mg adults) · Oral · Once daily (morning) · Long-term with periodic reassessment"
          },
          {
            "title": "#2 · Amphetamine-based: lisdexamfetamine",
            "text": "Vyvanse\n30 mg morning, titrate 20-70 mg · Oral · Once daily · Long-term"
          },
          {
            "title": "#3 · Non-stimulant: atomoxetine or guanfacine ER +…",
            "text": "Strattera; Intuniv\nAtomoxetine 40-100 mg daily (weight-based children); guanfacine ER 1-7 mg · Oral · Once daily · Long-term"
          }
        ]
      }
    ],
    "alertText": "Suicidality, stimulant misuse/diversion, cardiac symptoms (screen family history of sudden death), comorbid substance use.",
    "note": "Evidencia: Cortese et al., Lancet Psychiatry 2018; MTA Study; AAP 2019 ADHD Guideline"
  },
  {
    "id": "d77",
    "badge": "NEUROLÓGICO Y PSIQUIÁTRICO",
    "eyebrow": "PERFIL CLÍNICO Nº 77",
    "headlineA": "BIPOLAR DISORDER",
    "headlineB": "",
    "blocks": [
      {
        "id": "d77-lead",
        "type": "lead",
        "text": "Episodic mood disorder alternating depression with mania (type I) or hypomania (type II); misdiagnosis as unipolar depression is common and delays effective treatment."
      },
      {
        "id": "d77-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Lithium",
            "text": "Lithobid\nStart 300 mg BID-TID, titrate to level 0.6-1.0 mEq/L (acute mania 0.8-1.2) · Oral · 2-3 times daily (ER once/twice) · Long-term (maintenance…"
          },
          {
            "title": "#2 · Quetiapine (bipolar depression and maintenance) or…",
            "text": "Seroquel; Depakote\nQuetiapine 300 mg nightly (bipolar depression); valproate 750-2,000 mg/day (level 50-125 mcg/mL) · Oral · Quetiapine nightly; valproate divided…"
          },
          {
            "title": "#3 · Psychoeducation + mood monitoring + routine…",
            "text": "—\nStructured program (group or individual): trigger identification, sleep-rhythm regularity, relapse signature recognition · — · Sessions over…"
          }
        ]
      }
    ],
    "alertText": "Suicidal ideation (bipolar has among the highest suicide rates), severe mania with psychosis (admit), antidepressant-induced switch to mania.",
    "note": "Evidencia: NICE Bipolar Guideline; CANMAT/ISBD 2018 Guidelines"
  },
  {
    "id": "d78",
    "badge": "NEUROLÓGICO Y PSIQUIÁTRICO",
    "eyebrow": "PERFIL CLÍNICO Nº 78",
    "headlineA": "OBSESSIVE-COMPULSIVE",
    "headlineB": "DISORDER",
    "blocks": [
      {
        "id": "d78-lead",
        "type": "lead",
        "text": "Intrusive obsessions and compulsive rituals consuming >1 h/day; dysfunction in cortico-striato-thalamo-cortical circuits; highly treatable with exposure-based therapy and serotonergic medication."
      },
      {
        "id": "d78-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · SSRI at high dose: sertraline, fluoxetine, or…",
            "text": "Zoloft; Prozac; Luvox\nSertraline up to 200 mg; fluoxetine 40-60 mg; fluvoxamine up to 300 mg (higher than depression doses) · Oral · Once daily · ≥1-2 years; relapse…"
          },
          {
            "title": "#2 · CBT with exposure and response prevention (ERP)",
            "text": "—\nGraded exposure to obsession triggers while blocking compulsive rituals · — · Weekly ×12-20 + daily homework · 12-20 sessions"
          },
          {
            "title": "#3 · Clomipramine or antipsychotic augmentation…",
            "text": "Anafranil; Risperdal; Abilify\nClomipramine 100-250 mg; risperidone 0.5-2 mg augmentation · Oral · Daily · Long-term"
          }
        ]
      }
    ],
    "alertText": "Suicidal ideation (elevated in OCD), severe depression comorbidity, refusal to eat (contamination fears).",
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
        "text": "Acne vulgaris, Atopic dermatitis (eczema), Psoriasis, Seborrheic dermatitis, Rosacea"
      }
    ]
  },
  {
    "id": "d79",
    "badge": "DERMATOLÓGICO",
    "eyebrow": "PERFIL CLÍNICO Nº 79",
    "headlineA": "ACNE VULGARIS",
    "headlineB": "",
    "blocks": [
      {
        "id": "d79-lead",
        "type": "lead",
        "text": "Follicular plugging, sebum excess, C. acnes proliferation, and inflammation causing comedones, papules, and cysts on face/trunk; driven by androgens — peaks in adolescence but often persists into adulthood."
      },
      {
        "id": "d79-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Topical retinoid (adapalene/tretinoin) + benzoyl…",
            "text": "Differin (adapalene 0.1-0.3%); Epiduo (adapalene/BPO…\nAdapalene pea-sized to affected areas nightly; BPO morning · Topical · Nightly (retinoid) / morning (BPO) · Continuous — 8-12 weeks to judge…"
          },
          {
            "title": "#2 · Oral doxycycline (moderate-severe inflammatory)",
            "text": "Vibramycin\n100 mg · Oral · Once or twice daily · 3-4 months maximum, always WITH topical retinoid/BPO"
          },
          {
            "title": "#3 · Isotretinoin (severe nodular/scarring)",
            "text": "Accutane (brand discontinued; generics: Absorica,…\n0.5-1 mg/kg/day (cumulative 120-150 mg/kg target) · Oral · Once or twice daily with fatty food · 5-8 months (single course)"
          }
        ]
      }
    ],
    "alertText": "Scarring or psychological impact (escalate early), acne fulminans (systemic symptoms), hyperandrogenism signs in women (screen PCOS).",
    "note": "Evidencia: AAD Acne Guidelines 2024 (Reynolds et al.)"
  },
  {
    "id": "d80",
    "badge": "DERMATOLÓGICO",
    "eyebrow": "PERFIL CLÍNICO Nº 80",
    "headlineA": "ATOPIC DERMATITIS",
    "headlineB": "(ECZEMA)",
    "blocks": [
      {
        "id": "d80-lead",
        "type": "lead",
        "text": "Chronic relapsing inflammatory skin disease with barrier dysfunction (filaggrin), causing intensely itchy, dry, inflamed patches; part of the atopic march (allergies, asthma)."
      },
      {
        "id": "d80-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Emollients liberally + topical corticosteroids for…",
            "text": "Vanicream/CeraVe (emollient); triamcinolone 0.1%…\nEmollient: generous application; steroid: thin layer to inflamed areas · Topical · Emollient 1-2× daily ongoing; steroid 1-2× daily during…"
          },
          {
            "title": "#2 · Topical calcineurin inhibitor…",
            "text": "Protopic 0.03-0.1%; Elidel; Opzelura\nThin layer to affected areas · Topical · Twice daily · Intermittent/proactive (2×/week to flare-prone sites)"
          },
          {
            "title": "#3 · Dupilumab (or oral JAK inhibitor) for…",
            "text": "Dupixent; Rinvoq (upadacitinib)/Cibinqo (abrocitinib)\nDupilumab 600 mg load then 300 mg q2wk; upadacitinib 15-30 mg daily · Subcutaneous / oral · Per drug · Long-term"
          }
        ]
      }
    ],
    "alertText": "Eczema herpeticum (widespread punched-out vesicles — emergency acyclovir), secondary bacterial infection (honey crusts, fever), erythroderma.",
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
        "text": "Immune-mediated (IL-23/Th17 axis) hyperproliferation of skin producing well-demarcated erythematous plaques with silvery scale (scalp, elbows, knees); 30% develop psoriatic arthritis; cardiometabolic comorbidity elevated."
      },
      {
        "id": "d81-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Topical corticosteroid + vitamin D analogue…",
            "text": "Clobetasol 0.05% (potent); calcipotriene/betamethasone…\nThin layer to plaques · Topical · 1-2 times daily · 2-4 weeks courses, maintenance with calcipotriene"
          },
          {
            "title": "#2 · Narrowband UVB phototherapy (moderate)",
            "text": "—\n— · In-office light booth · 2-3 times weekly · 6-12 weeks per course"
          },
          {
            "title": "#3 · Biologic: IL-17 inhibitor (secukinumab/ixekizumab)…",
            "text": "Cosentyx; Taltz; Tremfya; Skyrizi\nSecukinumab 300 mg SC weekly ×5 then monthly; guselkumab 100 mg SC wk 0,4 then q8wk; risankizumab 150 mg wk 0,4 then q12wk · Subcutaneous · Per…"
          }
        ]
      }
    ],
    "alertText": "Erythrodermic/pustular flares (emergency), new joint pain/swelling (PsA — early treatment prevents damage).",
    "note": "Evidencia: AAD-NPF Psoriasis Guidelines; GRAPPA recommendations"
  },
  {
    "id": "d82",
    "badge": "DERMATOLÓGICO",
    "eyebrow": "PERFIL CLÍNICO Nº 82",
    "headlineA": "SEBORRHEIC",
    "headlineB": "DERMATITIS",
    "blocks": [
      {
        "id": "d82-lead",
        "type": "lead",
        "text": "Malassezia-driven inflammation of sebum-rich areas (scalp, brows, nasolabial folds, chest) causing greasy scale and erythema; chronic with seasonal flares; severe in HIV/Parkinson's."
      },
      {
        "id": "d82-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Ketoconazole 2% shampoo or cream",
            "text": "Nizoral\nShampoo to scalp, lather 3-5 min; cream to skin · Topical · 2-3 times weekly (shampoo); twice daily (cream) · 2-4 weeks then weekly maintenance"
          },
          {
            "title": "#2 · Low-potency topical corticosteroid for flares",
            "text": "Hydrocortisone 1-2.5%; desonide 0.05%\nThin layer · Topical · 1-2 times daily · ≤1-2 weeks (flares only)"
          },
          {
            "title": "#3 · Topical calcineurin inhibitor (face/steroid-sparing)",
            "text": "Tacrolimus 0.1% (Protopic); pimecrolimus 1% (Elidel)\nThin layer · Topical · Twice daily · Intermittent"
          }
        ]
      }
    ],
    "alertText": "None serious; erythroderma in immunocompromised; infantile severe form usually self-limited.",
    "note": "Evidencia: Cochrane Seborrheic Dermatitis Review; European S1 Guideline"
  },
  {
    "id": "d83",
    "badge": "DERMATOLÓGICO",
    "eyebrow": "PERFIL CLÍNICO Nº 83",
    "headlineA": "ROSACEA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d83-lead",
        "type": "lead",
        "text": "Chronic facial vascular/inflammatory disorder causing flushing, persistent erythema, papules/pustules, and telangiectasia; triggered by heat, alcohol, spicy food; ocular involvement common."
      },
      {
        "id": "d83-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Topical metronidazole 0.75-1% or azelaic acid 15%…",
            "text": "MetroGel; Finacea/Foam\nThin layer to face · Topical · Once (metronidazole) or twice (azelaic) daily · 8-12 weeks to response, then maintenance"
          },
          {
            "title": "#2 · Oral doxycycline 40 mg modified-release…",
            "text": "Oracea\n40 mg · Oral · Once daily (subantimicrobial dose) · 12 weeks courses"
          },
          {
            "title": "#3 · Vascular laser/IPL (erythema/telangiectasia) +…",
            "text": "—; Mirvaso (brimonidine 0.33%)\nBrimonidine thin layer to face · Laser / topical · Laser: sessions q4-6 wk; brimonidine once daily · Laser: 1-3 sessions; gel daily"
          }
        ]
      }
    ],
    "alertText": "Rhinophyma (tissue hypertrophy — surgical/laser referral), ocular rosacea (keratitis risk), severe flushing with systemic symptoms (exclude carcinoid).",
    "note": "Evidencia: Global ROSacea COnsensus (ROSCO) panel recommendations; AAD guidance"
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
        "text": "Osteoarthritis, Rheumatoid arthritis, Acute low back pain, Carpal tunnel syndrome, Fibromyalgia"
      }
    ]
  },
  {
    "id": "d84",
    "badge": "MUSCULOESQUELÉTICO",
    "eyebrow": "PERFIL CLÍNICO Nº 84",
    "headlineA": "OSTEOARTHRITIS",
    "headlineB": "",
    "blocks": [
      {
        "id": "d84-lead",
        "type": "lead",
        "text": "Degenerative cartilage loss with bone remodeling causing activity-related joint pain and stiffness (knees, hips, hands); leading cause of disability in older adults."
      },
      {
        "id": "d84-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Exercise therapy + weight loss",
            "text": "—\nAerobic + strengthening program (e.g., GLA:D), 5% weight loss target if overweight · — · ≥2-3 sessions/week · Ongoing"
          },
          {
            "title": "#2 · Topical NSAID (diclofenac gel) then oral NSAID…",
            "text": "Voltaren gel 1%; Advil; Aleve\nDiclofenac gel 2-4 g to joint; ibuprofen 400-600 mg; naproxen 500 mg · Topical / oral · Topical 4× daily; oral 2-3× daily PRN · Shortest…"
          },
          {
            "title": "#3 · Total joint replacement (end-stage) /…",
            "text": "—\nTriamcinolone 40 mg or methylprednisolone per joint · Intra-articular / surgical · Injection PRN (≤3-4/year); surgery single · —"
          }
        ]
      }
    ],
    "alertText": "Hot swollen joint (exclude septic arthritis/gout), locking/giving way (mechanical), night pain unrelieved by position (evaluate).",
    "note": "Evidencia: ACR/Arthritis Foundation 2019 OA Guideline; OARSI 2019"
  },
  {
    "id": "d85",
    "badge": "MUSCULOESQUELÉTICO",
    "eyebrow": "PERFIL CLÍNICO Nº 85",
    "headlineA": "RHEUMATOID ARTHRITIS",
    "headlineB": "",
    "blocks": [
      {
        "id": "d85-lead",
        "type": "lead",
        "text": "Systemic autoimmune synovitis causing symmetric small-joint inflammation (hands, wrists); untreated, it erodes joints within 2 years — early DMARD therapy within 3 months of onset prevents destruction."
      },
      {
        "id": "d85-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Methotrexate (anchor conventional DMARD)",
            "text": "Trexall, Rheumatrex\nStart 10-15 mg once WEEKLY, titrate to 20-25 mg; folic acid 1 mg daily (or 5 mg weekly) · Oral or SC · ONCE WEEKLY (never daily — fatal dosing…"
          },
          {
            "title": "#2 · Biologic DMARD: adalimumab/etanercept (anti-TNF) —…",
            "text": "Humira; Enbrel\nAdalimumab 40 mg SC q2wk; etanercept 50 mg SC weekly · Subcutaneous · Weekly or q2 weeks · Long-term"
          },
          {
            "title": "#3 · JAK inhibitor (tofacitinib/upadacitinib) or…",
            "text": "Xeljanz; Rinvoq\nTofacitinib 5 mg BID; upadacitinib 15 mg daily · Oral · Daily · Long-term"
          }
        ]
      }
    ],
    "alertText": "Septic joint on immunosuppression (hot joint — aspirate), cervical spine instability before anesthesia, interstitial lung disease (MTX/biologics caution).",
    "note": "Evidencia: EULAR 2022 RA Management Recommendations; ACR 2021 Guideline"
  },
  {
    "id": "d86",
    "badge": "MUSCULOESQUELÉTICO",
    "eyebrow": "PERFIL CLÍNICO Nº 86",
    "headlineA": "ACUTE LOW BACK PAIN",
    "headlineB": "",
    "blocks": [
      {
        "id": "d86-lead",
        "type": "lead",
        "text": "Non-specific mechanical low back pain lasting <6 weeks; 90% resolve within weeks regardless of treatment; imaging and bed rest are harmful defaults."
      },
      {
        "id": "d86-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Stay active + NSAID (ibuprofen/naproxen)",
            "text": "Advil; Aleve\nIbuprofen 400-800 mg; naproxen 500 mg · Oral · 3 times daily with food / twice daily · 1-2 weeks"
          },
          {
            "title": "#2 · Physical therapy / spinal manipulation",
            "text": "—\nExercise-based PT program; SMT sessions · — · 2-3 sessions/week · 4-6 weeks"
          },
          {
            "title": "#3 · Heat therapy + avoid early imaging",
            "text": "—\nHeat wrap 15-20 min · Topical · PRN · As needed"
          }
        ]
      }
    ],
    "alertText": "Cauda equina (saddle anesthesia, urinary retention, bilateral leg weakness — emergency MRI), fever/IVDU (infection), cancer history with night pain, trauma/osteoporosis (fracture).",
    "note": "Evidencia: ACP 2017 Low Back Pain Guideline"
  },
  {
    "id": "d87",
    "badge": "MUSCULOESQUELÉTICO",
    "eyebrow": "PERFIL CLÍNICO Nº 87",
    "headlineA": "CARPAL TUNNEL",
    "headlineB": "SYNDROME",
    "blocks": [
      {
        "id": "d87-lead",
        "type": "lead",
        "text": "Median nerve compression under the carpal tunnel causing nocturnal hand numbness/tingling (thumb-middle fingers), weakness, and thenar wasting if severe; associated with pregnancy, diabetes, hypothyroidism, repetitive use."
      },
      {
        "id": "d87-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Neutral-position wrist splint (nocturnal)",
            "text": "OTC wrist splint\nWorn at night keeping wrist neutral · — · Nightly · 4-6 weeks trial"
          },
          {
            "title": "#2 · Corticosteroid injection into carpal tunnel",
            "text": "Methylprednisolone (Depo-Medrol) 20-40 mg + lidocaine\nSingle injection · Local injection · Once (repeat once if partial response) · Weeks-months relief"
          },
          {
            "title": "#3 · Surgical carpal tunnel release (open or endoscopic)",
            "text": "—\n— · Outpatient surgery · — · Single procedure"
          }
        ]
      }
    ],
    "alertText": "Thenar muscle wasting or constant numbness (advanced disease — surgery promptly), bilateral severe disease.",
    "note": "Evidencia: AAOS CTS Guideline 2024"
  },
  {
    "id": "d88",
    "badge": "MUSCULOESQUELÉTICO",
    "eyebrow": "PERFIL CLÍNICO Nº 88",
    "headlineA": "FIBROMYALGIA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d88-lead",
        "type": "lead",
        "text": "Central pain amplification syndrome causing widespread musculoskeletal pain, fatigue, non-restorative sleep, and cognitive fog, without tissue damage; affects 2-4% of adults, predominantly women."
      },
      {
        "id": "d88-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Aerobic + strengthening exercise",
            "text": "—\nGraded aerobic program (start 10 min low-impact, build to 30+ min) + resistance training · — · 3-5 times weekly · Ongoing"
          },
          {
            "title": "#2 · Duloxetine or pregabalin (or amitriptyline low-dose)",
            "text": "Cymbalta; Lyrica; Elavil\nDuloxetine 30→60 mg daily; pregabalin 75→150-300 mg BID; amitriptyline 10-25 mg nightly · Oral · Daily · Trial 3 months at target dose"
          },
          {
            "title": "#3 · Cognitive behavioral therapy",
            "text": "—\nPain-focused CBT program · — · Weekly · 8-12 sessions"
          }
        ]
      }
    ],
    "alertText": "Screen for mimics: hypothyroidism, vitamin D deficiency, inflammatory arthritis (inflammatory markers), depression/anxiety comorbidity.",
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
        "text": "Allergic conjunctivitis, Primary open-angle glaucoma, Cataract, Otitis externa (swimmer's ear)"
      }
    ]
  },
  {
    "id": "d89",
    "badge": "OÍDO, NARIZ, GARGANTA Y OJOS",
    "eyebrow": "PERFIL CLÍNICO Nº 89",
    "headlineA": "ALLERGIC",
    "headlineB": "CONJUNCTIVITIS",
    "blocks": [
      {
        "id": "d89-lead",
        "type": "lead",
        "text": "IgE-mediated conjunctival inflammation causing bilateral itching, tearing, and redness, accompanying allergic rhinitis; itching is the hallmark distinguishing it from infectious causes."
      },
      {
        "id": "d89-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Dual-acting antihistamine/mast-cell stabilizer…",
            "text": "Pataday (olopatadine 0.1-0.7%); Zaditor (ketotifen…\n1 drop per eye · Ophthalmic · Once or twice daily · Throughout allergen season"
          },
          {
            "title": "#2 · Artificial tears + allergen avoidance + cold…",
            "text": "Refresh, Systane (preservative-free preferred)\n1-2 drops · Ophthalmic · 4+ times daily PRN · Ongoing"
          },
          {
            "title": "#3 · Topical corticosteroid (loteprednol) short course…",
            "text": "Lotemax 0.5%\n1-2 drops · Ophthalmic · 2-4 times daily · ≤2 weeks, taper"
          }
        ]
      }
    ],
    "alertText": "Unilateral disease, pain, photophobia, vision change (not simple allergy — evaluate), contact-lens wearer with pain (keratitis).",
    "note": "Evidencia: AAO Conjunctivitis Preferred Practice Pattern"
  },
  {
    "id": "d90",
    "badge": "OÍDO, NARIZ, GARGANTA Y OJOS",
    "eyebrow": "PERFIL CLÍNICO Nº 90",
    "headlineA": "PRIMARY OPEN-ANGLE",
    "headlineB": "GLAUCOMA",
    "blocks": [
      {
        "id": "d90-lead",
        "type": "lead",
        "text": "Progressive optic neuropathy with elevated intraocular pressure and visual field loss; asymptomatic until advanced — regular screening of at-risk adults is essential; treatment halts progression."
      },
      {
        "id": "d90-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Prostaglandin analogue drops: latanoprost (or…",
            "text": "Xalatan; Lumigan; Travatan\n1 drop per eye · Ophthalmic · Once nightly · Lifelong"
          },
          {
            "title": "#2 · Selective laser trabeculoplasty (SLT)",
            "text": "—\n— · In-office laser · Single session (repeatable) · Effect lasts 1-5 years"
          },
          {
            "title": "#3 · Trabeculectomy or MIGS (iStent, Hydrus) for…",
            "text": "—\n— · Surgical · — · Single procedure"
          }
        ]
      }
    ],
    "alertText": "Advanced field loss at diagnosis, rapid progression despite target IOP, angle closure (acute: painful red eye with halos — emergency, different disease).",
    "note": "Evidencia: AAO POAG Preferred Practice Pattern; LiGHT trial (Lancet 2019)"
  },
  {
    "id": "d91",
    "badge": "OÍDO, NARIZ, GARGANTA Y OJOS",
    "eyebrow": "PERFIL CLÍNICO Nº 91",
    "headlineA": "CATARACT",
    "headlineB": "",
    "blocks": [
      {
        "id": "d91-lead",
        "type": "lead",
        "text": "Age-related opacification of the crystalline lens causing gradual blurred vision, glare, and reduced contrast; the leading cause of reversible blindness worldwide."
      },
      {
        "id": "d91-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Phacoemulsification with intraocular lens…",
            "text": "—\n— · Outpatient surgery (15-30 min) · — · Single procedure per eye"
          },
          {
            "title": "#2 · YAG laser capsulotomy (posterior capsule…",
            "text": "—\n— · In-office laser · Single session · Minutes"
          },
          {
            "title": "#3 · Refractive optimization (glasses/contact update)…",
            "text": "—\n— · — · — · Interim"
          }
        ]
      }
    ],
    "alertText": "Sudden painless vision loss (not cataract — retinal/vascular evaluation), mature/hypermature cataract complications (glaucoma).",
    "note": "Evidencia: AAO Cataract in the Adult Eye PPP; WHO Vision 2030 resources"
  },
  {
    "id": "d92",
    "badge": "OÍDO, NARIZ, GARGANTA Y OJOS",
    "eyebrow": "PERFIL CLÍNICO Nº 92",
    "headlineA": "OTITIS EXTERNA",
    "headlineB": "(SWIMMER'S EAR)",
    "blocks": [
      {
        "id": "d92-lead",
        "type": "lead",
        "text": "Bacterial infection of the ear canal (Pseudomonas, S. aureus) after water exposure/trauma, causing ear pain worsened by pulling the pinna, discharge, and canal swelling."
      },
      {
        "id": "d92-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Topical antibiotic/steroid drops:…",
            "text": "Ciprodex; Floxin Otic; Cortisporin\nCiprodex 4 drops; ofloxacin 5-10 drops · Otic · Twice daily · 7-10 days"
          },
          {
            "title": "#2 · Aural toilet (ear canal cleaning/debridement)",
            "text": "—\nClinician suction/dry mopping · — · 1-2 visits · —"
          },
          {
            "title": "#3 · Oral antibiotics (ciprofloxacin) for…",
            "text": "Cipro\n500-750 mg · Oral · Twice daily · 7-10 days"
          }
        ]
      }
    ],
    "alertText": "Malignant otitis externa in diabetics/immunocompromised (Pseudomonas skull-base osteomyelitis — IV antipseudomonal therapy, emergency), perichondritis, facial nerve involvement.",
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
        "text": "Bacterial vaginosis, Endometriosis, Polycystic ovary syndrome (PCOS), Primary dysmenorrhea, Menopausal vasomotor symptoms"
      }
    ]
  },
  {
    "id": "d93",
    "badge": "SALUD DE LA MUJER",
    "eyebrow": "PERFIL CLÍNICO Nº 93",
    "headlineA": "BACTERIAL VAGINOSIS",
    "headlineB": "",
    "blocks": [
      {
        "id": "d93-lead",
        "type": "lead",
        "text": "Vaginal dysbiosis (loss of lactobacilli, overgrowth of anaerobes like Gardnerella) causing thin gray discharge with fishy odor; not an STI but associated with STI acquisition and pregnancy complications."
      },
      {
        "id": "d93-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Metronidazole (oral or vaginal gel)",
            "text": "Flagyl; MetroGel-Vaginal\nOral 500 mg; gel 0.75% one applicator (5 g) · Oral / intravaginal · Oral twice daily / gel once daily · 7 days (oral) / 5 days (gel)"
          },
          {
            "title": "#2 · Clindamycin cream 2%",
            "text": "Cleocin Vaginal\nOne applicator (5 g) · Intravaginal · Nightly · 7 days"
          },
          {
            "title": "#3 · Extended/maintenance metronidazole gel + probiotics…",
            "text": "MetroGel; Lactobacillus-containing products\nGel 0.75% twice weekly ×4-6 months · Intravaginal / oral · Twice weekly · 4-6 months"
          }
        ]
      }
    ],
    "alertText": "Pregnancy with symptoms (associated with preterm birth — treat), PID symptoms (evaluate for STIs).",
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
        "text": "Ectopic endometrial-like tissue (ovaries, pelvis) causing cyclical inflammation: dysmenorrhea, dyspareunia, chronic pelvic pain, and infertility; estrogen-dependent, so hormonal suppression is therapeutic."
      },
      {
        "id": "d94-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · NSAID + combined hormonal contraceptive",
            "text": "Ibuprofen; various COCs (e.g., Sprintec, Yaz)\nIbuprofen 400-800 mg TID during pain; COC one tablet daily (continuous dosing skips periods) · Oral · NSAID with meals PRN; COC daily,…"
          },
          {
            "title": "#2 · GnRH agonist/antagonist with add-back therapy",
            "text": "Lupron (leuprolide 3.75 mg IM monthly); Orilissa…\nLeuprolide 3.75 mg IM monthly; elagolix 150 mg daily (200 mg BID severe) · IM / oral · Monthly / daily · Up to 24 months (add-back protects bone)"
          },
          {
            "title": "#3 · Laparoscopic excision surgery",
            "text": "—\n— · Surgical · — · Single procedure ± repeat"
          }
        ]
      }
    ],
    "alertText": "Ruptured endometrioma (acute abdomen), severe infertility (early fertility referral), bowel/ureteral obstruction from deep infiltrating disease.",
    "note": "Evidencia: ESHRE Endometriosis Guideline 2022"
  },
  {
    "id": "d95",
    "badge": "SALUD DE LA MUJER",
    "eyebrow": "PERFIL CLÍNICO Nº 95",
    "headlineA": "POLYCYSTIC OVARY",
    "headlineB": "SYNDROME (PCOS)",
    "blocks": [
      {
        "id": "d95-lead",
        "type": "lead",
        "text": "Endocrine disorder of hyperandrogenism, ovulatory dysfunction, and polycystic ovaries causing irregular periods, hirsutism, acne, infertility, and insulin resistance with long-term metabolic risk."
      },
      {
        "id": "d95-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Lifestyle intervention: weight loss 5-10%",
            "text": "—\nCaloric restriction + ≥150 min/week exercise + behavioral support · — · Daily · Ongoing"
          },
          {
            "title": "#2 · Combined oral contraceptive (menstrual…",
            "text": "Various (e.g., Sprintec, Yasmin — drospirenone…\nOne tablet daily (21/7 or continuous) · Oral · Daily · Until fertility desired"
          },
          {
            "title": "#3 · Metformin (metabolic features) / letrozole…",
            "text": "Glucophage; Femara\nMetformin 500 mg → 1,500-2,000 mg/day; letrozole 2.5-7.5 mg cycle days 3-7 · Oral · Metformin daily with meals; letrozole per cycle · Long-term…"
          }
        ]
      }
    ],
    "alertText": "Endometrial hyperplasia from chronic anovulation, type 2 diabetes development (screen), severe hyperandrogenism (exclude tumor if rapid onset).",
    "note": "Evidencia: International Evidence-based PCOS Guideline 2023 (Monash/ESHRE/ASRM)"
  },
  {
    "id": "d96",
    "badge": "SALUD DE LA MUJER",
    "eyebrow": "PERFIL CLÍNICO Nº 96",
    "headlineA": "PRIMARY DYSMENORRHEA",
    "headlineB": "",
    "blocks": [
      {
        "id": "d96-lead",
        "type": "lead",
        "text": "Painful menstrual cramps without pelvic pathology, driven by prostaglandin-mediated uterine contractions; affects 50-90% of young women and is the leading cause of school/work absence in this group."
      },
      {
        "id": "d96-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · NSAID: ibuprofen or naproxen (start before/at onset)",
            "text": "Advil; Aleve\nIbuprofen 400-600 mg; naproxen 500 mg then 250-500 mg · Oral · Every 6-8 h (ibuprofen) / 12 h (naproxen) during first 1-3 days of menses · 2-3…"
          },
          {
            "title": "#2 · Combined hormonal contraceptive (or LNG-IUD)",
            "text": "Various COCs; Mirena\nCOC one tablet daily (continuous dosing maximizes benefit); Mirena 52 mg LNG · Oral / intrauterine · Daily / device ×5-8 years · Long-term"
          },
          {
            "title": "#3 · Heat therapy + exercise",
            "text": "—\nHeating pad/patch to lower abdomen 38-40 °C; regular aerobic exercise · Topical / — · PRN during menses / regular · —"
          }
        ]
      }
    ],
    "alertText": "Secondary dysmenorrhea signs: onset after 25, progressive worsening, dyspareunia, non-cyclical pain (evaluate endometriosis/adenomyosis with ultrasound ± laparoscopy).",
    "note": "Evidencia: Cochrane: NSAIDs for primary dysmenorrhea; ACOG guidance"
  },
  {
    "id": "d97",
    "badge": "SALUD DE LA MUJER",
    "eyebrow": "PERFIL CLÍNICO Nº 97",
    "headlineA": "MENOPAUSAL",
    "headlineB": "VASOMOTOR SYMPTOMS",
    "blocks": [
      {
        "id": "d97-lead",
        "type": "lead",
        "text": "Hot flashes and night sweats from estrogen withdrawal's effect on hypothalamic thermoregulation; affect ~75% of menopausal women, median duration 7-10 years, impairing sleep and quality of life."
      },
      {
        "id": "d97-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Menopausal hormone therapy: estradiol ± micronized…",
            "text": "Estrace/Climara patch (estradiol 0.025-0.1 mg);…\nEstradiol lowest effective dose; progesterone 100 mg continuous or 200 mg cyclic ×12-14 days (if uterus present) · Oral / transdermal · Daily ·…"
          },
          {
            "title": "#2 · Low-dose paroxetine (7.5 mg) or venlafaxine",
            "text": "Brisdelle; Effexor XR\nParoxetine 7.5 mg nightly; venlafaxine 37.5-75 mg daily · Oral · Daily · Duration of symptoms"
          },
          {
            "title": "#3 · Fezolinetant (NK3 receptor antagonist)",
            "text": "Veozah\n45 mg · Oral · Once daily · Duration of symptoms"
          }
        ]
      }
    ],
    "alertText": "Postmenopausal bleeding (endometrial evaluation mandatory), new onset flashes with other symptoms (thyroid, carcinoid workup).",
    "note": "Evidencia: NAMS 2022/2023 Position Statements; FDA fezolinetant approval (SKYLIGHT trials)"
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
        "text": "Anaphylaxis, Sickle cell disease, Acute appendicitis"
      }
    ]
  },
  {
    "id": "d98",
    "badge": "OTROS",
    "eyebrow": "PERFIL CLÍNICO Nº 98",
    "headlineA": "ANAPHYLAXIS",
    "headlineB": "",
    "blocks": [
      {
        "id": "d98-lead",
        "type": "lead",
        "text": "Life-threatening systemic allergic reaction (foods, drugs, insect venom) with airway swelling, hypotension, and multi-organ involvement; minutes matter — epinephrine delay is the main fatality predictor."
      },
      {
        "id": "d98-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Epinephrine (adrenaline) IM into anterolateral…",
            "text": "EpiPen/Auvi-Q auto-injector (0.3 mg adults; 0.15 mg…\n0.3-0.5 mg (1:1000) IM; children 0.01 mg/kg · Intramuscular (anterolateral thigh) · Single dose, REPEAT every 5-15 min if no improvement · Until…"
          },
          {
            "title": "#2 · Adjuncts: H1 antihistamine…",
            "text": "Benadryl 25-50 mg; Zyrtec 10 mg; Solu-Medrol 125 mg IV…\nPer drug · Oral / IV · After epinephrine · Single dose / 1-2 days"
          },
          {
            "title": "#3 · Allergen identification/avoidance + prescribed…",
            "text": "—\n— · — · Carried at all times · Lifelong"
          }
        ]
      }
    ],
    "alertText": "Any airway (hoarseness, stridor, tongue swelling) or circulatory (hypotension, collapse) involvement = epinephrine immediately; biphasic recurrence.",
    "note": "Evidencia: WAO Anaphylaxis Guidance 2020; AAAAI/ACAAI Practice Parameters"
  },
  {
    "id": "d99",
    "badge": "OTROS",
    "eyebrow": "PERFIL CLÍNICO Nº 99",
    "headlineA": "SICKLE CELL DISEASE",
    "headlineB": "",
    "blocks": [
      {
        "id": "d99-lead",
        "type": "lead",
        "text": "Inherited hemoglobin S mutation causing red-cell sickling, vaso-occlusive pain crises, anemia, stroke, and organ damage; hydroxyurea and modern disease-modifiers reduce crises, and curative gene therapies are now approved."
      },
      {
        "id": "d99-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Hydroxyurea",
            "text": "Hydrea, Droxia\nStart 15 mg/kg/day, titrate to max tolerated 25-35 mg/kg · Oral · Once daily · Long-term (often lifelong)"
          },
          {
            "title": "#2 · Transfusion therapy / voxelotor / crizanlizumab…",
            "text": "Oxbryta (voxelotor 1,500 mg daily); Adakveo…\nPer drug · Oral / IV · Daily / monthly · Long-term"
          },
          {
            "title": "#3 · Curative: hematopoietic stem cell transplant or…",
            "text": "Casgevy (exa-cel); Lyfgenia (lovo-cel)\n— · IV (one-time cell therapy) · Single treatment · One-time"
          }
        ]
      }
    ],
    "alertText": "Acute chest syndrome (fever + chest pain + new infiltrate — emergency), stroke symptoms, priapism >4 h, splenic sequestration (children), severe crisis uncontrolled by oral analgesia.",
    "note": "Evidencia: ASH 2019-2020 SCD Guidelines; Casgevy/Lyfgenia FDA approvals 2023"
  },
  {
    "id": "d100",
    "badge": "OTROS",
    "eyebrow": "PERFIL CLÍNICO Nº 100",
    "headlineA": "ACUTE APPENDICITIS",
    "headlineB": "",
    "blocks": [
      {
        "id": "d100-lead",
        "type": "lead",
        "text": "Obstruction and bacterial inflammation of the appendix causing migrating right-lower-quadrant pain, nausea, and fever; untreated, perforation leads to peritonitis and sepsis."
      },
      {
        "id": "d100-cards",
        "type": "cards",
        "dense": true,
        "items": [
          {
            "title": "#1 · Laparoscopic appendectomy",
            "text": "—\n— · Surgical (minimally invasive) · — · Single procedure, typically 24-48 h discharge"
          },
          {
            "title": "#2 · Antibiotics-first (select uncomplicated cases):…",
            "text": "Rocephin + Flagyl; step-down Augmentin\nCeftriaxone 1-2 g IV daily + metronidazole 500 mg IV/PO TID; oral amoxicillin-clavulanate 875/125 mg BID to complete · IV then oral · Per…"
          },
          {
            "title": "#3 · Perioperative supportive care: IV fluids,…",
            "text": "—\nIsotonic crystalloid; morphine/fentanyl titrated; ondansetron 4 mg · IV · PRN · Perioperative period"
          }
        ]
      }
    ],
    "alertText": "Diffuse peritonitis (rigid abdomen, fever, tachycardia — emergency surgery), abscess formation (image-guided drainage), appendicolith on CT (favor surgery).",
    "note": "Evidencia: CODA trial (NEJM 2020); WSES Jerusalem Guidelines 2020"
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
