import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart, Phone, Printer, BookOpen, Briefcase, MapPin, PiggyBank,
  CalendarDays, ChevronRight, AlertTriangle,
} from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import BuilderMedicamentos from '../components/medicamentos/BuilderMedicamentos';
import { GUIAS } from '../data/guias';

const TELEFONO = '7876676560';
const TELEFONO_FORMATEADO = '(787) 667-6560';

const SECCIONES = [
  { id: 'medicamentos', etiqueta: 'Medicamentos' },
  { id: 'guias', etiqueta: 'Guías' },
  { id: 'servicios', etiqueta: 'Servicios' },
  { id: 'hospitales', etiqueta: 'Hospitales' },
  { id: 'ahorra', etiqueta: 'Ahorra' },
  { id: 'citas', etiqueta: 'Citas' },
];

// Encabezado introductorio: qué ofrece la sección, para quién y cuál es el próximo paso.
function IntroSeccion({ que, quien, paso }) {
  return (
    <div className="max-w-3xl mb-6">
      <p className="text-slate-700 leading-relaxed">{que}</p>
      <p className="text-slate-600 mt-1"><strong className="text-slate-700">Para quién:</strong> {quien}</p>
      <p className="text-slate-700 mt-2"><strong>Próximo paso:</strong> {paso}</p>
    </div>
  );
}

function TituloSeccion({ id, children }) {
  return (
    <h2 id={`${id}-titulo`} className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 scroll-mt-32">
      {children}
    </h2>
  );
}

export default function HomePage() {
  const [calendlyAbierto, setCalendlyAbierto] = useState(false);

  const irACrearLista = () => {
    document.getElementById('medicamentos')?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => document.getElementById('campo-nombre')?.focus({ preventScroll: true }), 450);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Encabezado del sitio */}
      <header className="no-print sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 gap-4">
            <span className="flex items-center gap-2 min-w-0">
              <Heart className="w-6 h-6 text-teal-700 flex-shrink-0" />
              <span className="font-bold text-slate-900 truncate">Mi Farmacéutico en PR</span>
            </span>
            <div className="flex items-center gap-3 sm:gap-5">
              <a href={`tel:${TELEFONO}`} className="hidden sm:flex items-center gap-2 text-teal-700 font-semibold hover:underline">
                <Phone className="w-4 h-4" /> {TELEFONO_FORMATEADO}
              </a>
              <button
                onClick={() => setCalendlyAbierto(true)}
                className="bg-teal-700 hover:bg-teal-800 text-white font-semibold px-4 py-2.5 rounded-md transition"
              >
                Agendar cita
              </button>
            </div>
          </div>
        </div>
        {/* Navegación de secciones (tabs) */}
        <nav aria-label="Secciones del sitio" className="border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 overflow-x-auto">
            <ul className="flex gap-1 -mb-px">
              {SECCIONES.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block whitespace-nowrap px-4 py-3 border-b-2 border-transparent text-slate-600 font-medium hover:text-teal-700 hover:border-teal-600 transition"
                  >
                    {s.etiqueta}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Presentación breve */}
      <section className="no-print bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 max-w-3xl leading-tight">
            Escriba su lista de medicamentos, imprímala y llévela donde la necesite.
          </h1>
          <p className="text-lg text-slate-600 mt-4 max-w-3xl leading-relaxed">
            Herramienta gratuita para pacientes y cuidadores en Puerto Rico. Anote las medicinas que toma usted o su ser querido,
            guarde la lista como PDF en su teléfono o tablet, imprímala, o compártala con su médico, farmacéutico o familia.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <button
              onClick={irACrearLista}
              className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-bold text-lg px-6 py-3.5 rounded-md transition"
            >
              Crear mi lista de medicamentos <ChevronRight className="w-5 h-5" />
            </button>
            <a
              href={`tel:${TELEFONO}`}
              className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 font-semibold px-6 py-3.5 rounded-md hover:bg-slate-100 transition sm:hidden"
            >
              <Phone className="w-5 h-5" /> Llamar
            </a>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        {/* ============ MEDICAMENTOS ============ */}
        <section id="medicamentos" aria-labelledby="medicamentos-titulo" className="pt-10 scroll-mt-32">
          <TituloSeccion id="medicamentos">Medicamentos</TituloSeccion>
          <IntroSeccion
            que="Aquí escribe y revisa la lista de medicinas. Solo el nombre es obligatorio: los demás campos puede dejarlos en blanco si no sabe qué poner. Al terminar, la imprime o la guarda como PDF."
            quien="Cualquier paciente o cuidador que necesite una lista clara para el médico, la farmacia o la familia."
            paso="añada cada medicina con el formulario y pulse «Imprimir / Guardar PDF»."
          />
          <BuilderMedicamentos />
        </section>

        {/* ============ GUÍAS ============ */}
        <section id="guias" aria-labelledby="guias-titulo" className="pt-14 scroll-mt-32">
          <TituloSeccion id="guias">Guías de salud, en palabras simples</TituloSeccion>
          <IntroSeccion
            que="Explicaciones cortas y directas sobre condiciones comunes: qué hacen las medicinas y qué hábitos ayudan. Sin tecnicismos."
            quien="Pacientes y familiares que quieren entender mejor un diagnóstico reciente o un tratamiento nuevo."
            paso="despliegue la guía que le interese. Estas guías no sustituyen la orientación de su médico o farmacéutico."
          />
          <div className="space-y-3 max-w-3xl">
            {GUIAS.map((guia) => (
              <details key={guia.id} className="bg-white border border-slate-200 rounded-lg shadow-sm group">
                <summary className="cursor-pointer list-none px-5 py-4 font-bold text-slate-900 flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-700 flex-shrink-0" /> {guia.titulo}
                  </span>
                  <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-5 pb-5 pt-1 border-t border-slate-100">
                  <p className="text-slate-600 mb-3">{guia.resumen}</p>
                  <ul className="space-y-2">
                    {guia.consejos.map((c, i) => (
                      <li key={i} className="flex gap-2 text-slate-700">
                        <span className="text-teal-700 font-bold">✓</span> {c}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm font-semibold text-red-800 bg-red-50 border border-red-200 rounded-md px-3 py-2.5 flex gap-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" /> {guia.alerta}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ============ SERVICIOS ============ */}
        <section id="servicios" aria-labelledby="servicios-titulo" className="pt-14 scroll-mt-32">
          <TituloSeccion id="servicios">Servicios profesionales</TituloSeccion>
          <IntroSeccion
            que="Supervisión profesional de medicamentos por un farmacéutico licenciado en Puerto Rico: revisión de la lista, coordinación con farmacias y médicos, monitoreo de interacciones y organización de medicinas en casa."
            quien="Familias —especialmente de la diáspora— que cuidan a padres o familiares mayores con muchas medicinas, y personas recién salidas del hospital."
            paso="llame al (787) 667-6560 o vea la página completa de servicios con planes y precios."
          />
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-5 sm:p-6 max-w-3xl">
            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-teal-700" /> Planes mensuales de supervisión
            </h3>
            <ul className="divide-y divide-slate-100">
              <li className="py-3 flex flex-wrap justify-between gap-2">
                <span><strong>Fundación</strong> — monitoreo remoto</span>
                <span className="font-semibold text-slate-700">$110/mes</span>
              </li>
              <li className="py-3 flex flex-wrap justify-between gap-2">
                <span><strong>Mejorado</strong> — remoto + visitas a domicilio cuando hacen falta</span>
                <span className="font-semibold text-slate-700">$195/mes</span>
              </li>
              <li className="py-3 flex flex-wrap justify-between gap-2">
                <span><strong>Concierge</strong> — casos de alta complejidad</span>
                <span className="font-semibold text-slate-700">$325/mes</span>
              </li>
            </ul>
            <p className="text-sm text-slate-500 mt-2">También hay servicios únicos: revisión post-hospital, visita a domicilio y auditoría de seguridad.</p>
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 mt-4 font-semibold text-teal-700 hover:underline"
            >
              Ver servicios completos y precios <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ============ HOSPITALES ============ */}
        <section id="hospitales" aria-labelledby="hospitales-titulo" className="pt-14 scroll-mt-32">
          <TituloSeccion id="hospitales">Hospitales y farmacias cercanas</TituloSeccion>
          <IntroSeccion
            que="Un acceso directo al mapa de su teléfono o computadora para localizar hospitales y farmacias cerca de usted, en cualquier pueblo de Puerto Rico."
            quien="Cualquier persona que necesite atención cerca de casa, o familiares que coordinan cuidado desde lejos."
            paso="pulse el botón para abrir el mapa. Ante una emergencia, no busque: llame al 911."
          />
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-5 sm:p-6 max-w-3xl flex flex-wrap items-center gap-4">
            <MapPin className="w-8 h-8 text-teal-700 flex-shrink-0" />
            <div className="flex-1 min-w-[220px]">
              <p className="font-bold text-slate-900">Buscar hospitales y farmacias cerca de mí</p>
              <p className="text-sm text-slate-600">Se abre en Google Maps con su ubicación aproximada.</p>
            </div>
            <a
              href="https://www.google.com/maps/search/hospitales+y+farmacias+cerca+de+mi,+Puerto+Rico"
              target="_blank" rel="noopener noreferrer"
              className="bg-teal-700 hover:bg-teal-800 text-white font-semibold px-5 py-3 rounded-md transition"
            >
              Abrir mapa
            </a>
          </div>
        </section>

        {/* ============ AHORRA ============ */}
        <section id="ahorra" aria-labelledby="ahorra-titulo" className="pt-14 scroll-mt-32">
          <TituloSeccion id="ahorra">Ahorra en medicamentos</TituloSeccion>
          <IntroSeccion
            que="Formas prácticas de gastar menos en las recetas: pedir la versión genérica cuando existe, usar programas de ahorro de los fabricantes, sincronizar las recargas para hacer menos viajes a la farmacia, y revisar la lista completa con un farmacéutico para detectar medicinas duplicadas o que ya no hacen falta."
            quien="Cualquier persona que paga medicinas de su bolsillo, o familiares que ayudan con los gastos de un ser querido."
            paso="traiga su lista de medicamentos (¡la de esta misma página!) y llame al (787) 667-6560 para una revisión de ahorro."
          />
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-5 sm:p-6 max-w-3xl">
            <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
              <PiggyBank className="w-5 h-5 text-teal-700" /> Pregunte por una revisión de sus recetas
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Una revisión de medicamentos puede identificar genéricos disponibles, interacciones que aumentan costos y
              medicinas repetidas. Es parte del servicio profesional de este sitio.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href={`tel:${TELEFONO}`}
                className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-semibold px-5 py-3 rounded-md transition"
              >
                <Phone className="w-4 h-4" /> {TELEFONO_FORMATEADO}
              </a>
              <Link
                to="/servicios"
                className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 font-semibold px-5 py-3 rounded-md hover:bg-slate-100 transition"
              >
                Ver servicios <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============ CITAS ============ */}
        <section id="citas" aria-labelledby="citas-titulo" className="pt-14 scroll-mt-32">
          <TituloSeccion id="citas">Citas con el farmacéutico</TituloSeccion>
          <IntroSeccion
            que="Consulta gratuita de 15 minutos, por teléfono o video, con un farmacéutico licenciado en Puerto Rico. Puede usarla para resolver dudas sobre sus medicinas, interacciones, o para saber qué servicio le conviene."
            quien="Pacientes y cuidadores con preguntas sobre medicamentos — no hace falta ser cliente."
            paso="elija la hora que le convenga en el calendario."
          />
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-5 sm:p-6 max-w-3xl flex flex-wrap items-center gap-4">
            <CalendarDays className="w-8 h-8 text-teal-700 flex-shrink-0" />
            <div className="flex-1 min-w-[220px]">
              <p className="font-bold text-slate-900">Consulta gratuita de 15 minutos</p>
              <p className="text-sm text-slate-600">Con Christian Portalatín, Pharm.D. — licenciado en Puerto Rico y Florida.</p>
            </div>
            <button
              onClick={() => setCalendlyAbierto(true)}
              className="bg-teal-700 hover:bg-teal-800 text-white font-semibold px-5 py-3 rounded-md transition"
            >
              Elegir hora
            </button>
          </div>
        </section>
      </main>

      {/* Pie */}
      <footer className="no-print bg-slate-800 text-slate-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-wrap gap-8 justify-between">
            <div className="max-w-md">
              <p className="font-bold text-white flex items-center gap-2">
                <Heart className="w-5 h-5 text-teal-400" /> Mi Farmacéutico en PR
              </p>
              <p className="text-sm mt-2 leading-relaxed">
                Herramienta educativa. Esta lista y estas guías no sustituyen el consejo de su médico o farmacéutico.
                En una emergencia, llame al <strong className="text-white">911</strong>.
              </p>
            </div>
            <div className="text-sm space-y-2">
              <a href={`tel:${TELEFONO}`} className="flex items-center gap-2 hover:text-white">
                <Phone className="w-4 h-4" /> {TELEFONO_FORMATEADO}
              </a>
              <a href="mailto:BoticaRxPR@outlook.com" className="flex items-center gap-2 hover:text-white">
                BoticaRxPR@outlook.com
              </a>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-8 border-t border-slate-700 pt-4">
            © 2026 Lucesnegras LLC · Servicios farmacéuticos por Christian Alexis Portalatín Cordero, Pharm.D. ·
            Farmacéutico licenciado en Puerto Rico y Florida
          </p>
        </div>
      </footer>

      <CalendlyModal
        isOpen={calendlyAbierto}
        onClose={() => setCalendlyAbierto(false)}
        title="Agende su consulta gratuita de 15 minutos"
        subtitle="Cuéntenos su situación y le orientamos sobre sus medicinas o nuestros servicios."
      />
    </div>
  );
}
