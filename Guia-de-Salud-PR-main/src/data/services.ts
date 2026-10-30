import { bi, type Bi } from '@/lib/i18n'

export const CALENDLY_URL = 'https://calendly.com/mifarmaceuticoenpr'
export const PHONE_DISPLAY = '(787) 667-6560'
export const PHONE_HREF = 'tel:+17876676560'
export const EMAIL = 'mifarmaceuticopr@gmail.com'

export const servicesContent = {
  brand: 'Mi Farmacéutico en PR',
  eyebrow: bi('Servicio profesional · Transición de cuidado', 'Professional service · Transition of care'),
  headline: bi(
    'Su mamá o papá acaba de salir del hospital. La lista de medicamentos cambió.',
    'Your parent just left the hospital. The medication list changed.'
  ),
  subhead: bi(
    'Dentro de las 72 horas del alta, un farmacéutico licenciado en Puerto Rico revisa cada medicamento, resuelve los conflictos con los médicos y le entrega a su familia un plan escrito y claro — con llamadas de seguimiento el día 3, 7 y 14.',
    'Within 72 hours of discharge, a licensed pharmacist in Puerto Rico reviews every medication, resolves the conflicts with the doctors, and gives your family one clear written plan — plus follow-up calls on day 3, 7, and 14.'
  ),
  pharmacist: {
    name: 'Christian Portalatín, PharmD',
    credential: bi('Farmacéutico licenciado — Puerto Rico y Florida · Servicio bilingüe', 'Licensed pharmacist — Puerto Rico and Florida · Bilingual'),
    bio: bi(
      'Trabajo directamente con su familia. No despacho medicamentos ni facturo a seguros, así que no hay conflicto de interés en lo que recomiendo — solo lo más seguro para su mamá o papá. Cada conversación ocurre en el idioma que cada persona prefiera: inglés con usted, español con ellos.',
      'I work directly with your family. I don’t dispense medications and I don’t bill insurance, so there is no conflict of interest in what I recommend — only what is safest for your parent. Every conversation happens in the language each person prefers: English with you, Spanish with them.'
    ),
    photoAlt: bi('Retrato de Christian Portalatín, PharmD', 'Portrait of Christian Portalatín, PharmD'),
  },
  whatHeading: bi('Lo que hacemos exactamente', 'What we actually do'),
  whatItems: [
    {
      title: bi('Reconciliación de tres fuentes.', 'Three-source reconciliation.'),
      body: bi(
        'Comparamos la lista del alta, la lista previa del hogar y el perfil de la farmacia, medicamento por medicamento.',
        'We compare the hospital discharge list, the pre-hospital home list, and the pharmacy dispensing record, medication by medication.'
      ),
    },
    {
      title: bi('Discrepancias enviadas a los médicos.', 'Discrepancies raised with the prescribers.'),
      body: bi(
        'Omisiones, duplicaciones y conflictos de dosis se comunican por escrito a los médicos tratantes, para su decisión.',
        'Omissions, duplications, and dose conflicts go to the treating physicians in writing, for their decision.'
      ),
    },
    {
      title: bi('Un plan escrito de 14 días.', 'A written 14-day plan for the family.'),
      body: bi(
        'Una lista exacta, qué cambió en el hospital, qué envases viejos retirar y qué observar.',
        'One accurate list, what changed in the hospital, which old bottles to remove, and what to watch for.'
      ),
    },
    {
      title: bi('Llamadas de seguimiento el día 3, 7 y 14.', 'Follow-up calls on day 3, 7, and 14.'),
      body: bi(
        'Recetas en mano, efectos secundarios, coordinación de refills y la cita de seguimiento.',
        'Prescriptions in hand, side effects, refill coordination, and the follow-up appointment.'
      ),
    },
  ],
  timelineHeading: bi('Los 14 días, día por día', 'The 14 days, day by day'),
  timeline: [
    { marker: bi('Día 1–2', 'Day 1–2'), body: bi('Llamada de admisión y documentos. Solicitamos el resumen de alta y el perfil de farmacia.', 'Intake call and records. We request the discharge summary and the pharmacy profile.') },
    { marker: bi('Día 3', 'Day 3'), body: bi('Se entrega su plan escrito y confirmamos que los envases viejos salieron de la casa.', 'Your written plan is delivered, and we confirm the old bottles are out of the house.') },
    { marker: bi('Día 7', 'Day 7'), body: bi('Revisión de tolerancia, sincronización de refills y seguimiento a respuestas pendientes de los médicos.', 'Tolerance check, refill synchronization, and we chase any pending answers from the doctors.') },
    { marker: bi('Día 14', 'Day 14'), body: bi('Revisión de cierre después de la cita de seguimiento y un informe final que su familia conserva.', 'Closing review after the follow-up appointment, and a final report your family keeps.') },
  ],
  pricingHeading: bi('Un servicio. Dos velocidades.', 'One service. Two speeds.'),
  plans: [
    {
      name: bi('Estándar', 'Standard'),
      price: '$650',
      body: bi(
        'Llamada de admisión en 1 día laborable. Reconciliación completada dentro de 3 días laborables de recibir la lista del alta. Lunes a viernes, 9 AM–5 PM AST.',
        'Intake call within 1 business day. Reconciliation completed within 3 business days of receiving the discharge list. Monday–Friday, 9 AM–5 PM AST.'
      ),
    },
    {
      name: bi('Expedito', 'Expedited'),
      price: '$800',
      body: bi(
        'Llamada de admisión en 4 horas, incluyendo el mismo día y fines de semana. Reconciliación completada dentro de 24 horas de recibir la lista del alta.',
        'Intake call within 4 hours, including same-day and weekends. Reconciliation completed within 24 hours of receiving the discharge list.'
      ),
    },
  ],
  pricingNote: bi(
    'Servicio único. Sin suscripción, sin facturación a seguros. La llamada de consulta es gratis y sin compromiso.',
    'One-time service. No subscription, no insurance billing. The consultation call is free and there is no obligation.'
  ),
  scopeHeading: bi('Qué es y qué no es', 'What this is and is not'),
  scopeIs: {
    title: bi('Este servicio es', 'This service is'),
    items: [
      bi('Reconciliación y revisión de seguridad de medicamentos', 'Medication reconciliation and safety review'),
      bi('Coordinación con médicos y farmacias', 'Coordination with doctors and pharmacies'),
      bi('Informes escritos y claros a la familia', 'Clear written reporting to the family'),
      bi('Seguimiento estructurado por 14 días', 'Structured follow-up for 14 days'),
    ] as Bi[],
  },
  scopeIsNot: {
    title: bi('Este servicio no es', 'This service is not'),
    items: [
      bi('Diagnóstico o tratamiento médico', 'Medical diagnosis or treatment'),
      bi('Recetar o cambiar terapia', 'Prescribing or changing therapy'),
      bi('Un servicio de emergencia o fuera de horario', 'An emergency or after-hours service'),
      bi('Enfermería o cuidado personal', 'Nursing or personal caregiving'),
    ] as Bi[],
  },
  scopeClosing: bi(
    'Todas las recomendaciones clínicas se envían al médico tratante para su decisión.',
    'All clinical recommendations go to the treating physician for their decision.'
  ),
  faq: [
    {
      q: bi('¿Necesitan ver a mi mamá o papá en persona?', 'Do you need to see my parent in person?'),
      a: bi('No necesariamente. La reconciliación se hace con los documentos escritos. Una visita al hogar puede añadirse si la situación lo requiere.', 'Not necessarily. The reconciliation is done from the written records. An in-home visit can be added if the situation calls for it.'),
    },
    {
      q: bi('¿Los seguros cubren esto?', 'Does insurance cover this?'),
      a: bi('No. Es un servicio privado de pago directo. No facturamos a Medicare, Reforma ni planes privados — eso es lo que mantiene nuestras recomendaciones independientes.', 'No. This is a private, direct-pay service. We do not bill Medicare, Reforma, or private plans — which is what keeps our recommendations independent.'),
    },
    {
      q: bi('¿Qué necesitan de nosotros para empezar?', 'What do you need from us to start?'),
      a: bi('La lista escrita de medicamentos del alta, el nombre de la farmacia y una autorización HIPAA firmada. Nosotros nos encargamos del resto.', 'The written discharge medication list, the name of the pharmacy, and a signed HIPAA authorization. We handle the rest.'),
    },
    {
      q: bi('No estamos en Puerto Rico. ¿Funciona igual?', 'We’re not in Puerto Rico. Does that work?'),
      a: bi('Para eso está diseñado. Trabajamos en inglés con usted y en español con su familiar.', 'That’s who this is built for. We work in English with you and in Spanish with your parent.'),
    },
    {
      q: bi('¿Qué pasa después de los 14 días?', 'What happens after the 14 days?'),
      a: bi('Recibe un informe de cierre que es suyo. Si la supervisión continua le ayudaría, lo conversamos en ese momento — sin compromiso.', 'You receive a closing report that is yours to keep. If ongoing oversight would help, we’ll discuss it then — there is no obligation.'),
    },
    {
      q: bi('¿Es un servicio de emergencia?', 'Is this an emergency service?'),
      a: bi('No. Para cualquier situación médica urgente, llame al 911 o al médico del paciente.', 'No. For any urgent medical concern, call 911 or the patient’s physician.'),
    },
  ],
  booking: {
    heading: bi('Empiece con una llamada gratis de 15 minutos', 'Start with a free 15-minute call'),
    sub: bi('Cuéntenos qué pasó. Si no somos lo que necesita, se lo diremos.', 'Tell us what happened. If we’re not the right fit, we’ll say so.'),
    cta: bi('Agenda una llamada gratis', 'Book a free call'),
    hours: bi('Lunes a viernes, 9 AM–5 PM AST', 'Mon–Fri, 9 AM–5 PM AST'),
    emergency: bi(
      'Este no es un servicio de emergencia. Para cualquier situación médica urgente, llame al 911 o al médico del paciente.',
      'This is not an emergency service. For any urgent medical concern, call 911 or contact the patient’s physician.'
    ),
  },
}
