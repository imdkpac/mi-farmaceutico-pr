// Fechas en español para el documento imprimible.
const formateador = new Intl.DateTimeFormat('es-PR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export function fechaLarga(fechaISO) {
  if (!fechaISO) return '';
  try {
    return formateador.format(new Date(fechaISO));
  } catch {
    return '';
  }
}
