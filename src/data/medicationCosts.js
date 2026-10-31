/**
 * Costos estimados de medicamentos comunes en Puerto Rico
 * Precios aproximados basados en información pública 2026.
 * Siempre verifique precios actuales en la farmacia.
 */

const MEDICATION_COSTS_BASE = [
  { nombre: 'Metformina 500mg', categoria: 'diabetes', precioSinSeguro: '$15–$35/mes', precioConSeguro: '$0–$10/mes', nota: 'Generico disponible' },
  { nombre: 'Metformina 1000mg', categoria: 'diabetes', precioSinSeguro: '$20–$45/mes', precioConSeguro: '$0–$10/mes', nota: 'Generico disponible' },
  { nombre: 'Glipizida 5mg', categoria: 'diabetes', precioSinSeguro: '$10–$25/mes', precioConSeguro: '$0–$5/mes', nota: 'Generico disponible' },
  { nombre: 'Atorvastatina 20mg', categoria: 'colesterol', precioSinSeguro: '$12–$30/mes', precioConSeguro: '$0–$5/mes', nota: 'Generico disponible' },
  { nombre: 'Atorvastatina 40mg', categoria: 'colesterol', precioSinSeguro: '$15–$40/mes', precioConSeguro: '$0–$5/mes', nota: 'Generico disponible' },
  { nombre: 'Simvastatina 20mg', categoria: 'colesterol', precioSinSeguro: '$8–$20/mes', precioConSeguro: '$0–$3/mes', nota: 'Generico disponible' },
  { nombre: 'Lisinopril 10mg', categoria: 'presion', precioSinSeguro: '$8–$20/mes', precioConSeguro: '$0–$3/mes', nota: 'Generico disponible' },
  { nombre: 'Lisinopril 20mg', categoria: 'presion', precioSinSeguro: '$10–$25/mes', precioConSeguro: '$0–$5/mes', nota: 'Generico disponible' },
  { nombre: 'Amlodipino 5mg', categoria: 'presion', precioSinSeguro: '$10–$25/mes', precioConSeguro: '$0–$5/mes', nota: 'Generico disponible' },
  { nombre: 'Losartán 50mg', categoria: 'presion', precioSinSeguro: '$12–$30/mes', precioConSeguro: '$0–$5/mes', nota: 'Generico disponible' },
  { nombre: 'Metoprolol 50mg', categoria: 'presion', precioSinSeguro: '$10–$25/mes', precioConSeguro: '$0–$5/mes', nota: 'Generico disponible' },
  { nombre: 'Levotiroxina 50mcg', categoria: 'tiroides', precioSinSeguro: '$10–$25/mes', precioConSeguro: '$0–$5/mes', nota: 'Generico disponible' },
  { nombre: 'Omeprazol 20mg', categoria: 'estomago', precioSinSeguro: '$8–$20/mes', precioConSeguro: '$0–$3/mes', nota: 'Generico disponible, OTC en farmacias' },
  { nombre: 'Pantoprazol 40mg', categoria: 'estomago', precioSinSeguro: '$15–$35/mes', precioConSeguro: '$0–$5/mes', nota: 'Generico disponible' },
  { nombre: 'Aspirina 81mg', categoria: 'corazon', precioSinSeguro: '$3–$8/mes', precioConSeguro: '$0–$2/mes', nota: 'Generico disponible, OTC en farmacias' },
  { nombre: 'Clopidogrel 75mg', categoria: 'corazon', precioSinSeguro: '$15–$40/mes', precioConSeguro: '$0–$10/mes', nota: 'Generico disponible' },
  { nombre: 'Warfarina 5mg', categoria: 'corazon', precioSinSeguro: '$15–$35/mes', precioConSeguro: '$0–$5/mes', nota: 'Generico disponible, requiere monitoreo INR' },
  { nombre: 'Furosemida 40mg', categoria: 'presion', precioSinSeguro: '$8–$20/mes', precioConSeguro: '$0–$3/mes', nota: 'Generico disponible' },
  { nombre: 'Gabapentina 300mg', categoria: 'dolor', precioSinSeguro: '$12–$30/mes', precioConSeguro: '$0–$5/mes', nota: 'Generico disponible' },
  { nombre: 'Tramadol 50mg', categoria: 'dolor', precioSinSeguro: '$15–$35/mes', precioConSeguro: '$0–$5/mes', nota: 'Generico disponible, requiere receta' },
  { nombre: 'Alprazolam 0.25mg', categoria: 'ansiedad', precioSinSeguro: '$8–$20/mes', precioConSeguro: '$0–$5/mes', nota: 'Generico disponible, controlado' },
  { nombre: 'Sertralina 50mg', categoria: 'depresion', precioSinSeguro: '$10–$25/mes', precioConSeguro: '$0–$5/mes', nota: 'Generico disponible' },
  { nombre: 'Escitalopram 10mg', categoria: 'depresion', precioSinSeguro: '$15–$35/mes', precioConSeguro: '$0–$10/mes', nota: 'Generico disponible' },
  { nombre: 'Amlodipino/Benazepril 5/20mg', categoria: 'presion', precioSinSeguro: '$25–$60/mes', precioConSeguro: '$5–$15/mes', nota: 'Combinación, generico disponible' },
  { nombre: 'Insulina Glargine (Lantus)', categoria: 'diabetes', precioSinSeguro: '$200–$400/mes', precioConSeguro: '$25–$75/mes', nota: 'Biosimilar disponible (Semglee)' },
  { nombre: 'Insulina Aspart (Novolog)', categoria: 'diabetes', precioSinSeguro: '$300–$500/mes', precioConSeguro: '$30–$100/mes', nota: 'Requiere receta, refrigerar' },
  { nombre: 'Sitagliptina 100mg (Januvia)', categoria: 'diabetes', precioSinSeguro: '$400–$600/mes', precioConSeguro: '$30–$100/mes', nota: 'Patentado, preguntar por genérico o programa de asistencia' },
  { nombre: 'Empagliflozina 10mg (Jardiance)', categoria: 'diabetes', precioSinSeguro: '$500–$700/mes', precioConSeguro: '$40–$120/mes', nota: 'Patentado, programa de asistencia disponible' },
  { nombre: 'Semaglutide (Ozempic)', categoria: 'diabetes', precioSinSeguro: '$800–$1,200/mes', precioConSeguro: '$25–$100/mes', nota: 'Patentado, alto costo sin seguro' },
  { nombre: 'Ezetimiba 10mg (Zetia)', categoria: 'colesterol', precioSinSeguro: '$150–$300/mes', precioConSeguro: '$10–$40/mes', nota: 'Patentado, preguntar por genérico' },
  { nombre: 'Rosuvastatina 20mg (Crestor)', categoria: 'colesterol', precioSinSeguro: '$200–$350/mes', precioConSeguro: '$5–$25/mes', nota: 'Generico disponible (rosuvastatina)' },
];

export const CATEGORIAS = {
  es: {
    diabetes: 'Diabetes',
    presion: 'Presión Alta',
    colesterol: 'Colesterol',
    tiroides: 'Tiroides',
    estomago: 'Estómago/Ácido',
    corazon: 'Corazón/Sangre',
    dolor: 'Dolor',
    ansiedad: 'Ansiedad',
    depresion: 'Depresión',
  },
  en: {
    diabetes: 'Diabetes',
    presion: 'High Blood Pressure',
    colesterol: 'Cholesterol',
    tiroides: 'Thyroid',
    estomago: 'Stomach/Acid',
    corazon: 'Heart/Blood',
    dolor: 'Pain',
    ansiedad: 'Anxiety',
    depresion: 'Depression',
  },
};

// Normalización para Costs.jsx (campos que espera el componente)
export const MEDICATION_COSTS = MEDICATION_COSTS_BASE.map((m) => ({
  ...m,
  precio: m.precioSinSeguro,
  copago: m.precioConSeguro,
  generico: /generico/i.test(m.nota),
}))

// Alias con la nomenclatura del componente
export const CATEGORIES = CATEGORIAS
