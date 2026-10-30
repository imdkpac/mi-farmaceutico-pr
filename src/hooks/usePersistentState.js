import { useState, useEffect } from 'react';

// Estado persistente en localStorage — sin backend, listo para demo.
export default function usePersistentState(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item !== null) return JSON.parse(item);
    } catch (err) {
      console.warn('No se pudo leer localStorage:', err);
    }
    return typeof initialValue === 'function' ? initialValue() : initialValue;
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.warn('No se pudo guardar en localStorage:', err);
    }
  }, [key, value]);

  return [value, setValue];
}
