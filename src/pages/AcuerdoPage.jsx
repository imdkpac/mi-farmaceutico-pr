import React from 'react';
import { Link } from 'react-router-dom';
import { refundCopy } from '../lib/refundPolicy';

/**
 * PENDING LEGAL REVIEW by Natalie Ramos.
 * Preliminary Spanish text of Service Agreement SA-002 (Revision 2).
 * This page renders the attached agreement. It is not legal advice.
 * Section 3.D replaces the first-month refund with the owner's rule
 * (see refundPolicy.js). Section 4.B is a placeholder and does not say
 * that email or messaging platforms are covered by business associate agreements.
 * The home visit and the safety audit are one service at $350, the same
 * amount as the annual review. There is no separate $425 visit and no
 * separate audit. The 1-hour consultation ($70) is listed so the checkbox
 * matches checkout. Confirm those lines in review.
 */
const POLICY = refundCopy('es');

const blank = 'border-b border-[#5C6F6A] inline-block min-w-[12rem]';

function Field({ label }) {
  return (
    <p className="font-body text-base leading-relaxed" style={{ color: 'var(--pine)' }}>
      {label}{' '}
      <span className={blank}>&nbsp;</span>
    </p>
  );
}

function CheckLine({ children }) {
  return (
    <p className="font-body text-base leading-relaxed" style={{ color: 'var(--pine)' }}>
      ☐ {children}
    </p>
  );
}

export default function AcuerdoPage() {
  return (
    <article style={{ backgroundColor: 'var(--paper)' }}>
      <div className="px-6 py-4" style={{ backgroundColor: 'var(--sand)' }}>
        <p className="max-w-3xl mx-auto font-body text-base font-semibold" style={{ color: 'var(--pine)' }}>
          Versión preliminar en revisión legal.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12 sm:py-16">
        <p className="font-body text-sm mb-3" style={{ color: 'var(--muted-ink)' }}>
          <Link to="/servicios" className="underline" style={{ color: 'var(--pine)' }}>
            Volver a servicios
          </Link>
        </p>

        <h1 className="font-display text-4xl font-medium text-[#0F2E30] mb-3">
          Acuerdo de servicio y relevo de responsabilidad
        </h1>
        <p className="font-body text-base mb-1" style={{ color: 'var(--pine)' }}>
          Mi Farmacéutico en PR · Lucesnegras LLC
        </p>
        <p className="font-body text-base mb-1" style={{ color: 'var(--muted-ink)' }}>
          Lucesnegras LLC, haciendo negocios como Mi Farmacéutico en PR · (787) 667-6560 · portalatin@mifarmaceuticopr.com · mi-farmaceutico-pr.vercel.app
        </p>
        <p className="font-body text-base mb-8" style={{ color: 'var(--muted-ink)' }}>
          Documento SA-002 · Revisión 2 · Sustituye todas las versiones anteriores
        </p>

        <p className="font-body text-base leading-relaxed mb-8" style={{ color: 'var(--pine)' }}>
          Este acuerdo se hace entre Lucesnegras LLC, que opera como Mi Farmacéutico en PR (“el Consultor”), una compañía de responsabilidad limitada organizada bajo las leyes del Estado Libre Asociado de Puerto Rico, y la persona que firma (“el Cliente”).
        </p>

        <div className="space-y-3 mb-10">
          <Field label="Nombre del cliente (persona responsable)" />
          <Field label="Dirección postal del cliente" />
          <Field label="Teléfono y correo del cliente" />
          <Field label="Nombre del paciente" />
          <Field label="Fecha de nacimiento del paciente" />
          <Field label="Dirección del paciente (Puerto Rico)" />
          <Field label="Relación del cliente con el paciente" />
          <Field label="Fecha de inicio del servicio" />
        </div>

        <h2 className="font-display text-2xl font-medium text-[#0F2E30] mb-3">1. Servicios y plan elegido</h2>
        <p className="font-body text-base leading-relaxed mb-4" style={{ color: 'var(--pine)' }}>
          El Consultor es un farmacéutico licenciado. Ofrece, mediante pago privado, supervisión de medicamentos, educación y coordinación. El Cliente elige lo siguiente:
        </p>
        <p className="font-body text-base font-semibold mb-2" style={{ color: 'var(--pine)' }}>
          Planes de suscripción (se cobran cada mes):
        </p>
        <div className="space-y-2 mb-4">
          <CheckLine>Fundación — $110 / mes</CheckLine>
          <CheckLine>Mejorado — $195 / mes</CheckLine>
          <CheckLine>Concierge — $325 / mes</CheckLine>
        </div>
        <p className="font-body text-base leading-relaxed mb-3" style={{ color: 'var(--pine)' }}>
          Cargo por cuidado de alta complejidad — +$75 / mes. Aplica cuando, al empezar o más adelante, se da alguna de estas situaciones: diez (10) medicamentos activos o más; deterioro cognitivo documentado; o tres (3) personas que prescriben o más. El Consultor anota cuál criterio aplica en el formulario de elegibilidad del nivel y avisa al Cliente por escrito antes de que el cargo aparezca por primera vez en una factura.
        </p>
        <div className="mb-4">
          <CheckLine>Aplica el cargo por cuidado de alta complejidad. Criterio: ______________</CheckLine>
        </div>
        <p className="font-body text-base font-semibold mb-2" style={{ color: 'var(--pine)' }}>
          Servicios de una sola vez:
        </p>
        <div className="space-y-2 mb-4">
          <CheckLine>Transición de cuidado — $650</CheckLine>
          <CheckLine>Transición de cuidado, expedita — $850</CheckLine>
          <CheckLine>Visita y auditoría en el hogar — $350</CheckLine>
          <CheckLine>Consulta de 1 hora — $70</CheckLine>
          <CheckLine>Revisión anual completa de medicamentos (solo Fundación y Mejorado) — $350</CheckLine>
        </div>
        <p className="font-body text-base leading-relaxed mb-10" style={{ color: 'var(--pine)' }}>
          El alcance de cada plan está en el documento Definición y alcance del plan de servicio, que el Cliente firma aparte y que forma parte de este acuerdo. Si este acuerdo y algún material de promoción no dicen lo mismo, mandan este acuerdo y la Definición del plan de servicio.
        </p>

        <h2 className="font-display text-2xl font-medium text-[#0F2E30] mb-3">2. Alcance de la práctica y límites</h2>
        <p className="font-body text-base leading-relaxed mb-3" style={{ color: 'var(--pine)' }}>
          <strong>2.A — Qué hace el Consultor.</strong> El Consultor revisa los medicamentos, identifica posibles interacciones y duplicados, coordina con las farmacias, comunica observaciones y pedidos de aclaración a quien prescribe, y entrega resúmenes escritos al Cliente.
        </p>
        <p className="font-body text-base leading-relaxed mb-2" style={{ color: 'var(--pine)' }}>
          <strong>2.B — Qué no hace el Consultor.</strong> El Consultor no:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4 font-body text-base leading-relaxed" style={{ color: 'var(--pine)' }}>
          <li>da servicios de emergencia ni fuera de horario;</li>
          <li>diagnostica, prescribe, ni cambia una receta;</li>
          <li>administra medicamentos, pone inyecciones, ni presencia que la persona se tome el medicamento;</li>
          <li>garantiza que el paciente tome los medicamentos según las indicaciones;</li>
          <li>ofrece enfermería, cuidado personal, transportación, ni compañía en citas médicas;</li>
          <li>factura a Medicare, a Medicaid o Reforma, ni a un seguro privado;</li>
          <li>sustituye al médico del paciente, a su farmacia, ni a los servicios de emergencia.</li>
        </ul>
        <p className="font-body text-base leading-relaxed mb-3" style={{ color: 'var(--pine)' }}>
          <strong>2.C — Cómo son las comunicaciones clínicas.</strong> El Consultor no dirige el tratamiento. Lo que comunica a quien prescribe son observaciones y pedidos de aclaración. Las decisiones de diagnóstico y de tratamiento quedan en el médico que prescribe.
        </p>
        <p className="font-body text-base leading-relaxed mb-3" style={{ color: 'var(--pine)' }}>
          <strong>2.D — Emergencias.</strong> En una emergencia, el Cliente y el paciente llaman al 9-1-1 o van a la sala de emergencia más cercana. El Consultor no es un servicio de emergencia. Los mensajes que le envían no se revisan fuera del horario de trabajo.
        </p>
        <p className="font-body text-base leading-relaxed mb-10" style={{ color: 'var(--pine)' }}>
          <strong>2.E — Horario.</strong> De lunes a viernes, de 9:00 a.m. a 5:00 p.m., hora del Atlántico, excepto los días feriados de Puerto Rico. Los tiempos de respuesta del plan aplican solo en ese horario.
        </p>

        <h2 className="font-display text-2xl font-medium text-[#0F2E30] mb-3">3. Tarifas, cobro y cancelación</h2>
        <p className="font-body text-base leading-relaxed mb-3" style={{ color: 'var(--pine)' }}>
          <strong>3.A — Cobro.</strong> Las suscripciones se cobran por adelantado, por Stripe, cada mes en la fecha de inicio. El Cliente autoriza esos cargos al método de pago hasta que este acuerdo termine. Los servicios de una sola vez se pagan completos antes de empezar.
        </p>
        <p className="font-body text-base leading-relaxed mb-3" style={{ color: 'var(--pine)' }}>
          <strong>3.B — Cambios de precio.</strong> El Consultor puede cambiar el precio de una suscripción con sesenta (60) días de aviso por escrito. El Cliente puede terminar el acuerdo sin penalidad antes de que el precio nuevo empiece a correr.
        </p>
        <p className="font-body text-base leading-relaxed mb-3" style={{ color: 'var(--pine)' }}>
          <strong>3.C — Cancelación por el Cliente.</strong> El Cliente puede cancelar en cualquier momento con treinta (30) días de aviso por escrito. El servicio sigue, y las tarifas se siguen debiendo, hasta que terminen esos treinta días.
        </p>
        {/* PENDING LEGAL REVIEW by Natalie Ramos. Replaces source section 3.D (first-month refund). */}
        <p className="font-body text-base leading-relaxed mb-3" style={{ color: 'var(--pine)' }}>
          <strong>3.D — Reembolso.</strong> {POLICY.refund} La cancelación de una suscripción sigue el aviso de 30 días de la sección 3.C.
        </p>
        <p className="font-body text-base leading-relaxed mb-10" style={{ color: 'var(--pine)' }}>
          <strong>3.E — Terminación por el Consultor.</strong> El Consultor puede terminar con treinta (30) días de aviso por escrito, por cualquier razón, o de inmediato si el Cliente o el paciente pide servicios fuera del alcance legal del Consultor, si se guarda información sin la cual no se puede supervisar con seguridad, o por conducta abusiva. Lo pagado por un servicio que no se entregó se devuelve a prorrata.
        </p>

        <h2 className="font-display text-2xl font-medium text-[#0F2E30] mb-3">4. Comunicación y privacidad</h2>
        <p className="font-body text-base leading-relaxed mb-3" style={{ color: 'var(--pine)' }}>
          <strong>4.A — Confidencialidad.</strong> El Consultor mantiene la confidencialidad de la información del paciente conforme a la ley que aplique y a la Autorización HIPAA que el Cliente o el paciente firman aparte.
        </p>
        {/* PENDING LEGAL REVIEW by Natalie Ramos. Placeholder. No business-associate claim. */}
        <p className="font-body text-base leading-relaxed mb-3 p-4" style={{ backgroundColor: 'var(--sand)', borderRadius: '20px', color: 'var(--pine)' }}>
          <strong>4.B — Comunicación electrónica.</strong> Pendiente de revisión legal. El texto de esta sección todavía no está listo. Aquí irá cómo el Consultor y el Cliente se escriben, y la opción de hablar por teléfono.
        </p>
        <p className="font-body text-base leading-relaxed mb-3" style={{ color: 'var(--pine)' }}>
          <strong>4.C — Contactos autorizados.</strong> El Consultor se comunica solo con las personas nombradas en la Autorización HIPAA. El Cliente mantiene esa lista al día.
        </p>
        <p className="font-body text-base leading-relaxed mb-10" style={{ color: 'var(--pine)' }}>
          <strong>4.D — Fotografías.</strong> Si el Cliente dio por escrito un consentimiento aparte para fotos, el Consultor puede fotografiar envases de medicamentos, lugares donde se guardan y pastilleros, para el expediente y para el informe al Cliente. Las fotos no incluyen caras que se puedan identificar y se envían solo por el canal que el Consultor indique.
        </p>

        <h2 className="font-display text-2xl font-medium text-[#0F2E30] mb-3">5. Ausencia y continuidad del servicio</h2>
        <p className="font-body text-base leading-relaxed mb-3" style={{ color: 'var(--pine)' }}>
          <strong>5.A — Ausencia planificada.</strong> El Consultor avisa con al menos catorce (14) días si va a ausentarse más de dos días laborables. En ese aviso identifica a un farmacéutico licenciado que cubra, o indica que los tiempos de respuesta quedan en pausa durante esos días.
        </p>
        <p className="font-body text-base leading-relaxed mb-3" style={{ color: 'var(--pine)' }}>
          <strong>5.B — Ausencia no planificada.</strong> Si hay enfermedad o una emergencia, el Consultor avisa al Cliente en un (1) día laborable. Si el servicio se interrumpe por más de tres (3) días laborables seguidos, la cuenta del Cliente recibe un crédito a prorrata por esos días.
        </p>
        <p className="font-body text-base leading-relaxed mb-10" style={{ color: 'var(--pine)' }}>
          <strong>5.C — Emergencias durante la ausencia.</strong> La sección 2.D aplica siempre. Que el Consultor esté ausente no cambia la instrucción de llamar al 9-1-1 en una emergencia.
        </p>

        <h2 className="font-display text-2xl font-medium text-[#0F2E30] mb-3">6. Riesgo y límite de responsabilidad</h2>
        <p className="font-body text-base leading-relaxed mb-3" style={{ color: 'var(--pine)' }}>
          <strong>6.A — Reconocimiento.</strong> El Cliente reconoce que la salud del paciente depende de muchos factores fuera del control del Consultor. Entre ellos están las decisiones del propio paciente, las decisiones de los médicos que lo atienden, si la información de otras personas está completa, y el curso de la enfermedad.
        </p>
        <p className="font-body text-base leading-relaxed mb-3" style={{ color: 'var(--pine)' }}>
          <strong>6.B — Autoridad para firmar.</strong> El Cliente declara que es (i) el paciente, (ii) quien tiene un poder legal o un proxy de cuidado de salud vigente, o (iii) el representante legalmente autorizado del paciente. Si se le pide, el Cliente entrega prueba de esa autoridad. Cuando el paciente puede decidir por sí mismo, el paciente también firma abajo.
        </p>
        <p className="font-body text-base leading-relaxed mb-3" style={{ color: 'var(--pine)' }}>
          <strong>6.C — Límite de responsabilidad.</strong> Hasta donde lo permite la ley del Estado Libre Asociado de Puerto Rico, la responsabilidad total del Consultor por este acuerdo se limita a las tarifas que el Cliente pagó en los doce (12) meses anteriores al hecho que da lugar al reclamo. Nada en este acuerdo limita ni deja sin efecto la responsabilidad por negligencia profesional, negligencia grave o conducta intencional. Nada deja sin efecto un derecho que la ley no permite renunciar.
        </p>
        <p className="font-body text-base leading-relaxed mb-10" style={{ color: 'var(--pine)' }}>
          <strong>6.D — Indemnización.</strong> El Cliente acepta cubrir al Consultor frente a reclamos que nazcan de información que el Cliente dio y que sea, en lo importante, inexacta o incompleta, y de la decisión del Cliente o del paciente de no seguir la orientación de buscar cuidado médico o de emergencia.
        </p>

        <h2 className="font-display text-2xl font-medium text-[#0F2E30] mb-3">7. General</h2>
        <p className="font-body text-base leading-relaxed mb-3" style={{ color: 'var(--pine)' }}>
          <strong>7.A — Ley aplicable.</strong> Este acuerdo se rige por las leyes del Estado Libre Asociado de Puerto Rico.
        </p>
        <p className="font-body text-base leading-relaxed mb-3" style={{ color: 'var(--pine)' }}>
          <strong>7.B — Disputas.</strong> Las partes intentan resolver de buena fe durante treinta (30) días antes de empezar un proceso. El foro son los tribunales del Estado Libre Asociado de Puerto Rico, región judicial de Ponce.
        </p>
        <p className="font-body text-base leading-relaxed mb-3" style={{ color: 'var(--pine)' }}>
          <strong>7.C — Acuerdo completo.</strong> Este acuerdo, junto con la Definición y alcance del plan de servicio y la Autorización HIPAA, es el acuerdo completo entre las partes. Sustituye conversaciones y materiales anteriores.
        </p>
        <p className="font-body text-base leading-relaxed mb-3" style={{ color: 'var(--pine)' }}>
          <strong>7.D — Divisibilidad.</strong> Si alguna parte no se puede hacer cumplir, el resto sigue en vigor.
        </p>
        <p className="font-body text-base leading-relaxed mb-10" style={{ color: 'var(--pine)' }}>
          <strong>7.E — Cambios.</strong> Los cambios tienen que constar por escrito y llevar la firma de las dos partes, salvo los cambios de precio de la sección 3.B.
        </p>

        <h2 className="font-display text-2xl font-medium text-[#0F2E30] mb-3">Firmas</h2>
        <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'var(--pine)' }}>
          Al firmar, el Cliente confirma que leyó este acuerdo, la Definición y alcance del plan de servicio del plan que eligió, y el documento Qué es este servicio y qué no es.
        </p>

        <div className="space-y-3 mb-8">
          <Field label="Firma del cliente" />
          <Field label="Nombre del cliente en letra de molde" />
          <Field label="Fecha" />
        </div>
        <p className="font-body text-base font-semibold mb-2" style={{ color: 'var(--pine)' }}>Base de la autoridad</p>
        <div className="space-y-2 mb-4">
          <CheckLine>Soy el paciente</CheckLine>
          <CheckLine>Poder legal</CheckLine>
          <CheckLine>Proxy de cuidado de salud</CheckLine>
          <CheckLine>Otro: ______________</CheckLine>
        </div>
        <p className="font-body text-base font-semibold mb-2" style={{ color: 'var(--pine)' }}>Documentación de la autoridad, adjunta</p>
        <div className="space-y-2 mb-8">
          <CheckLine>Sí</CheckLine>
          <CheckLine>Se envía para esta fecha: ______________</CheckLine>
        </div>

        <div className="space-y-3 mb-8">
          <Field label="Firma del paciente (si puede decidir por sí mismo)" />
          <Field label="Nombre del paciente en letra de molde" />
          <Field label="Fecha" />
        </div>

        <div className="space-y-3 mb-8">
          <Field label="Firma del Consultor" />
          <p className="font-body text-base" style={{ color: 'var(--pine)' }}>
            Nombre en letra de molde: Christian Alexis Portalatín Cordero, Pharm.D.
          </p>
          <Field label="Número de licencia de farmacéutico de Puerto Rico" />
          <Field label="Fecha" />
        </div>

        <p className="font-body text-base leading-relaxed mb-8" style={{ color: 'var(--pine)' }}>
          El Cliente recibe una copia firmada por las dos partes. El Consultor guarda el original.
        </p>

        <p className="font-body text-base" style={{ color: 'var(--muted-ink)' }}>
          (787) 667-6560 · portalatin@mifarmaceuticopr.com
        </p>
      </div>
    </article>
  );
}
