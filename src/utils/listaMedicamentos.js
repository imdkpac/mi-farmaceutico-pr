// Lógica pura de la lista de medicamentos — facilita probar el flujo completo.

export const estadoInicial = {
  nombrePaciente: '',
  medicamentos: [],
  creadaEl: null,
  actualizadaEl: null,
};

export function reducerLista(estado, accion) {
  const ahora = accion.fecha || new Date().toISOString();

  switch (accion.type) {
    case 'FIJAR_NOMBRE_PACIENTE':
      return { ...estado, nombrePaciente: accion.nombre };

    case 'AÑADIR':
      return {
        ...estado,
        medicamentos: [...estado.medicamentos, { id: accion.id, ...accion.datos }],
        creadaEl: estado.creadaEl || ahora,
        actualizadaEl: ahora,
      };

    case 'EDITAR':
      return {
        ...estado,
        medicamentos: estado.medicamentos.map((m) =>
          m.id === accion.id ? { ...m, ...accion.datos } : m
        ),
        actualizadaEl: ahora,
      };

    case 'ELIMINAR':
      return {
        ...estado,
        medicamentos: estado.medicamentos.filter((m) => m.id !== accion.id),
        actualizadaEl: ahora,
      };

    case 'RESTABLECER':
      return estadoInicial;

    default:
      return estado;
  }
}

export function crearId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
  return `med-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

// Campos vacíos — todo es opcional menos el nombre.
export function camposVacios() {
  return {
    nombre: '',
    concentracion: '',
    forma: '',
    dosis: '',
    paraQue: '',
    medico: '',
    notas: '',
  };
}

// Ejemplo de referencia: se muestra como guía visual, NUNCA entra a la lista.
export const EJEMPLO_MEDICAMENTO = {
  nombre: 'Metformina',
  concentracion: '500 mg',
  forma: 'Tableta',
  dosis: '1 tableta con el desayuno y la cena',
  paraQue: 'Para el azúcar',
  medico: 'Dra. Rivera',
  notas: '',
};
