/**
 * PRIVACY NOTICE FOR DEVELOPERS:
 * Do NOT add analytics, session-replay, or tracking scripts (Hotjar, FullStory, Clarity, etc.)
 * to any page containing this component. They can capture typed health information.
 * All user data stays in memory or optional localStorage (user opt-in only).
 * Zero network requests contain user data.
 */

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

/* ─── CONSTANTS ─── */
const TIME_SECTIONS = [
  { id: 'morning', icon: '☀️', es: 'Mañana', en: 'Morning', subEs: 'Desayuno', subEn: 'Breakfast', color: '#E8A838' },
  { id: 'noon', icon: '🌤️', es: 'Mediodía', en: 'Noon', subEs: 'Almuerzo', subEn: 'Lunch', color: '#4A90D9' },
  { id: 'evening', icon: '🌅', es: 'Tarde', en: 'Evening', subEs: 'Con cena', subEn: 'With dinner', color: '#E2512F' },
  { id: 'night', icon: '🌙', es: 'Noche', en: 'Night', subEs: 'Al dormir', subEn: 'Bedtime', color: '#5B4A9E' },
  { id: 'asneeded', icon: '💊', es: 'Según necesario', en: 'As Needed', subEs: 'Cuando lo necesite', subEn: 'When needed', color: '#5C6F6A' },
];

const PILL_COLORS = [
  { id: 'white', hex: '#FFFFFF', es: 'Blanco', en: 'White' },
  { id: 'yellow', hex: '#F5D547', es: 'Amarillo', en: 'Yellow' },
  { id: 'pink', hex: '#E89AAF', es: 'Rosado', en: 'Pink' },
  { id: 'blue', hex: '#6BA3D6', es: 'Azul', en: 'Blue' },
  { id: 'green', hex: '#7BBF8E', es: 'Verde', en: 'Green' },
  { id: 'orange', hex: '#E8935A', es: 'Anaranjado', en: 'Orange' },
  { id: 'red', hex: '#D65A5A', es: 'Rojo', en: 'Red' },
  { id: 'brown', hex: '#A08060', es: 'Marrón', en: 'Brown' },
  { id: 'purple', hex: '#9B7EBD', es: 'Morado', en: 'Purple' },
  { id: 'gray', hex: '#AAAAAA', es: 'Gris', en: 'Gray' },
];

const PILL_SHAPES = [
  { id: 'round', es: 'Redonda', en: 'Round' },
  { id: 'oval', es: 'Ovalada', en: 'Oval' },
  { id: 'capsule', es: 'Cápsula', en: 'Capsule' },
  { id: 'oblong', es: 'Alargada', en: 'Oblong' },
  { id: 'square', es: 'Cuadrada', en: 'Square' },
  { id: 'other', es: 'Otra', en: 'Other' },
];

const EMPTY_MED = { shape: '', color: '', name: '', dose: '', purpose: '', instructions: '' };

/* ─── TRANSLATIONS ─── */
const T = {
  es: {
    patient: 'Paciente',
    patientPlaceholder: 'Nombre del paciente',
    updated: 'Actualizado',
    pharmacy: 'Farmacia',
    pharmacyPlaceholder: 'Nombre y teléfono de la farmacia',
    emergencyContact: 'Contacto de emergencia',
    emergencyPlaceholder: 'Nombre y teléfono',
    addMed: 'Agregar medicamento',
    remove: 'Eliminar',
    undo: 'Deshacer',
    removed: 'Medicamento eliminado',
    moveTo: 'Mover a',
    shapeColor: 'Forma y Color',
    medName: 'Medicamento',
    medNamePlaceholder: 'Ej: Metformina',
    dose: 'Dosis',
    dosePlaceholder: 'Ej: 500mg',
    purpose: 'Para qué',
    purposePlaceholder: 'Ej: Para la azúcar',
    instructions: 'Instrucciones',
    instructionsPlaceholder: 'Ej: Con comida, no triturar',
    doNotTake: 'NO TOMAR',
    doNotTakeSub: 'Alergias y medicamentos de alto riesgo',
    dntMed: 'Medicamento o suplemento',
    dntPlaceholder: 'Ej: Advil / Ibuprofeno',
    dntReason: 'Razón para evitar',
    dntReasonPlaceholder: 'Ej: Malo para la presión',
    allergies: 'ALERGIAS CONOCIDAS',
    allergyName: 'Alergia',
    allergyPlaceholder: 'Ej: Penicilina',
    allergyReaction: 'Reacción',
    reactionPlaceholder: 'Ej: Salpullido',
    otcReminder: 'Incluya vitaminas, tés y remedios naturales en las secciones de arriba.',
    progress: (n) => `Ha agregado ${n} medicamento${n !== 1 ? 's' : ''}`,
    polypharmacyNote: '¿Toma 5 o más medicamentos? Una revisión con el farmacéutico puede ayudar a detectar interacciones.',
    privacyNotice: 'Su lista se queda en su dispositivo. Nosotros nunca la vemos. Enviar un PDF por email o texto no está encriptado — comparta solo con personas de confianza.',
    saveDevice: 'Guardar en este dispositivo',
    saveDeviceWarning: 'No use en computadoras compartidas o públicas.',
    forgetDevice: 'Olvidar este dispositivo',
    savePDF: 'Guardar como PDF',
    share: 'Compartir',
    print: 'Imprimir',
    erase: 'Borrar todo',
    eraseConfirm: '¿Está seguro? Se borrarán todos los medicamentos y datos del formulario.',
    eraseConfirmBtn: 'Sí, borrar todo',
    cancel: 'Cancelar',
    addAllergy: 'Agregar alergia',
    addDNT: 'Agregar medicamento a evitar',
    selectShape: 'Seleccione forma',
    selectColor: 'Seleccione color',
    printHint: 'En el diálogo de impresión, seleccione "Guardar como PDF" como destino.',
    installHint: 'Agregue a su pantalla de inicio para acceso rápido: en iPhone toque Compartir → "Agregar a pantalla de inicio". En Android toque el menú → "Agregar a pantalla de inicio".',
    bilingual: 'Bilingüe',
    pdfDisclaimer: 'Este documento es para referencia y organización. Siga siempre las instrucciones de la etiqueta de su farmacia.',
    pdfFooter: 'Mi Farmacéutico en PR | (787) 667-6560 | mifarmaceuticopr@gmail.com',
    emergency911: 'Emergencia: 9-1-1',
    noMedsYet: 'Sin medicamentos agregados',
  },
  en: {
    patient: 'Patient',
    patientPlaceholder: 'Patient name',
    updated: 'Updated',
    pharmacy: 'Pharmacy',
    pharmacyPlaceholder: 'Pharmacy name and phone',
    emergencyContact: 'Emergency contact',
    emergencyPlaceholder: 'Name and phone',
    addMed: 'Add medicine',
    remove: 'Remove',
    undo: 'Undo',
    removed: 'Medicine removed',
    moveTo: 'Move to',
    shapeColor: 'Shape & Color',
    medName: 'Medicine name',
    medNamePlaceholder: 'e.g., Metformin',
    dose: 'Dose',
    dosePlaceholder: 'e.g., 500mg',
    purpose: 'What it\'s for',
    purposePlaceholder: 'e.g., For blood sugar',
    instructions: 'Instructions',
    instructionsPlaceholder: 'e.g., With food, do not crush',
    doNotTake: 'DO NOT TAKE',
    doNotTakeSub: 'Allergies & high-risk medications',
    dntMed: 'Medicine or supplement',
    dntPlaceholder: 'e.g., Advil / Ibuprofen',
    dntReason: 'Reason to avoid',
    dntReasonPlaceholder: 'e.g., Bad for blood pressure',
    allergies: 'KNOWN ALLERGIES',
    allergyName: 'Allergy',
    allergyPlaceholder: 'e.g., Penicillin',
    allergyReaction: 'Reaction',
    reactionPlaceholder: 'e.g., Rash',
    otcReminder: 'Include vitamins, teas, and natural remedies in the sections above.',
    progress: (n) => `You've added ${n} medicine${n !== 1 ? 's' : ''}`,
    polypharmacyNote: 'Taking 5 or more medicines? A pharmacist review can help catch interactions.',
    privacyNotice: 'Your list stays on your device. We never see it. Emailing or texting a PDF is not encrypted — share only with people you trust.',
    saveDevice: 'Save on this device',
    saveDeviceWarning: 'Don\'t use on shared or public computers.',
    forgetDevice: 'Forget this device',
    savePDF: 'Save as PDF',
    share: 'Share',
    print: 'Print',
    erase: 'Erase everything',
    eraseConfirm: 'Are you sure? All medications and form data will be erased.',
    eraseConfirmBtn: 'Yes, erase everything',
    cancel: 'Cancel',
    addAllergy: 'Add allergy',
    addDNT: 'Add medicine to avoid',
    selectShape: 'Select shape',
    selectColor: 'Select color',
    printHint: 'In the print dialog, select "Save as PDF" as the destination.',
    installHint: 'Add to your home screen for quick access: on iPhone tap Share → "Add to Home Screen". On Android tap menu → "Add to Home Screen".',
    bilingual: 'Bilingual',
    pdfDisclaimer: 'This document is for reference and organization only. Always follow your pharmacy label instructions.',
    pdfFooter: 'Mi Farmacéutico en PR | (787) 667-6560 | mifarmaceuticopr@gmail.com',
    emergency911: 'Emergency: 9-1-1',
    noMedsYet: 'No medicines added yet',
  },
};

/* ─── STORAGE HELPERS ─── */
const STORAGE_KEY = 'mf-medication-list';
const safeGet = () => {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null; } catch { return null; }
};
const safeSet = (data) => {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
};
const safeRemove = () => {
  try { localStorage.removeItem(STORAGE_KEY); } catch {}
};

/* ─── MAIN COMPONENT ─── */
export default function BuilderMedicamentos() {
  const { lang } = useLanguage();
  const t = T[lang];
  const [patientInfo, setPatientInfo] = useState({ name: '', date: new Date().toISOString().split('T')[0], pharmacy: '', emergencyContact: '' });
  const [meds, setMeds] = useState(() => {
    const init = {};
    TIME_SECTIONS.forEach((s) => { init[s.id] = [{ ...EMPTY_MED }]; });
    return init;
  });
  const [dntList, setDntList] = useState([{ med: '', reason: '' }]);
  const [allergies, setAllergies] = useState([{ name: '', reaction: '' }]);
  const [saveOnDevice, setSaveOnDevice] = useState(false);
  const [showEraseConfirm, setShowEraseConfirm] = useState(false);
  const [undoItem, setUndoItem] = useState(null);
  const undoTimer = useRef(null);
  const builderRef = useRef(null);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = safeGet();
    if (saved) {
      setPatientInfo(saved.patientInfo || { name: '', date: new Date().toISOString().split('T')[0], pharmacy: '', emergencyContact: '' });
      setMeds(saved.meds || (() => { const init = {}; TIME_SECTIONS.forEach((s) => { init[s.id] = [{ ...EMPTY_MED }]; }); return init; })());
      setDntList(saved.dntList || [{ med: '', reason: '' }]);
      setAllergies(saved.allergies || [{ name: '', reaction: '' }]);
      setSaveOnDevice(true);
    }
  }, []);

  // Auto-save when saveOnDevice is true
  useEffect(() => {
    if (saveOnDevice) {
      safeSet({ patientInfo, meds, dntList, allergies });
    }
  }, [saveOnDevice, patientInfo, meds, dntList, allergies]);

  // Count total non-empty meds
  const totalMeds = Object.values(meds).reduce(
    (sum, section) => sum + section.filter((m) => m.name.trim()).length, 0
  );

  /* ─── HANDLERS ─── */
  const updateMed = useCallback((sectionId, index, field, value) => {
    setMeds((prev) => {
      const updated = { ...prev };
      updated[sectionId] = [...updated[sectionId]];
      updated[sectionId][index] = { ...updated[sectionId][index], [field]: value };
      return updated;
    });
  }, []);

  const addMed = useCallback((sectionId) => {
    setMeds((prev) => ({
      ...prev,
      [sectionId]: [...prev[sectionId], { ...EMPTY_MED }],
    }));
  }, []);

  const removeMed = useCallback((sectionId, index) => {
    setMeds((prev) => {
      const removed = prev[sectionId][index];
      const updated = { ...prev };
      updated[sectionId] = updated[sectionId].filter((_, i) => i !== index);
      if (updated[sectionId].length === 0) updated[sectionId] = [{ ...EMPTY_MED }];
      return updated;
    });
    // Set up undo
    setUndoItem({ sectionId, index, med: { ...meds[sectionId][index] } });
    clearTimeout(undoTimer.current);
    undoTimer.current = setTimeout(() => setUndoItem(null), 5000);
  }, [meds]);

  const handleUndo = useCallback(() => {
    if (!undoItem) return;
    setMeds((prev) => {
      const updated = { ...prev };
      updated[undoItem.sectionId] = [...updated[undoItem.sectionId]];
      updated[undoItem.sectionId].splice(undoItem.index, 0, undoItem.med);
      return updated;
    });
    setUndoItem(null);
    clearTimeout(undoTimer.current);
  }, [undoItem]);

  const moveMed = useCallback((fromSection, index, toSection) => {
    setMeds((prev) => {
      const med = prev[fromSection][index];
      const updated = { ...prev };
      updated[fromSection] = updated[fromSection].filter((_, i) => i !== index);
      if (updated[fromSection].length === 0) updated[fromSection] = [{ ...EMPTY_MED }];
      updated[toSection] = [...updated[toSection], med];
      return updated;
    });
  }, []);

  const handleEraseAll = () => {
    setPatientInfo({ name: '', date: new Date().toISOString().split('T')[0], pharmacy: '', emergencyContact: '' });
    const empty = {};
    TIME_SECTIONS.forEach((s) => { empty[s.id] = [{ ...EMPTY_MED }]; });
    setMeds(empty);
    setDntList([{ med: '', reason: '' }]);
    setAllergies([{ name: '', reaction: '' }]);
    safeRemove();
    setSaveOnDevice(false);
    setShowEraseConfirm(false);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: lang === 'es' ? 'Mi Lista de Medicamentos' : 'My Medication List',
          text: lang === 'es'
            ? `Lista de medicamentos de ${patientInfo.name || 'paciente'} - ${new Date().toLocaleDateString()}`
            : `Medication list for ${patientInfo.name || 'patient'} - ${new Date().toLocaleDateString()}`,
        });
      } catch (err) {
        if (err.name !== 'AbortError') handlePrint();
      }
    } else {
      handlePrint();
    }
  };

  const toggleSaveOnDevice = () => {
    if (saveOnDevice) {
      safeRemove();
      setSaveOnDevice(false);
    } else {
      setSaveOnDevice(true);
    }
  };

  /* ─── RENDER ─── */
  return (
    <div className="builder-meds" ref={builderRef} lang={lang}>
      {/* Privacy Notice */}
      <div className="no-print flex items-start gap-3 p-4 mb-6 text-sm" style={{ backgroundColor: 'var(--pine)', borderRadius: '16px', color: 'var(--sage)' }}>
        <span className="text-lg leading-none mt-0.5">🔒</span>
        <p className="font-body">{t.privacyNotice}</p>
      </div>

      {/* Patient Info Header */}
      <div className="no-print grid sm:grid-cols-2 gap-4 mb-8 p-5" style={{ backgroundColor: 'var(--paper)', borderRadius: '16px' }}>
        <div>
          <label className="block font-body font-bold text-sm mb-1 text-[#0F2E30]">{t.patient}</label>
          <input
            type="text"
            value={patientInfo.name}
            onChange={(e) => setPatientInfo((p) => ({ ...p, name: e.target.value }))}
            placeholder={t.patientPlaceholder}
            autoComplete="off"
            className="w-full px-4 py-3 rounded-xl font-body text-lg border-2 focus:outline-none focus:border-[#E2512F]"
            style={{ borderColor: 'var(--sand)', backgroundColor: 'var(--paper)', color: 'var(--pine)', minHeight: '52px' }}
          />
        </div>
        <div>
          <label className="block font-body font-bold text-sm mb-1 text-[#0F2E30]">{t.updated}</label>
          <input
            type="date"
            value={patientInfo.date}
            onChange={(e) => setPatientInfo((p) => ({ ...p, date: e.target.value }))}
            className="w-full px-4 py-3 rounded-xl font-body text-lg border-2 focus:outline-none focus:border-[#E2512F]"
            style={{ borderColor: 'var(--sand)', backgroundColor: 'var(--paper)', color: 'var(--pine)', minHeight: '52px' }}
          />
        </div>
        <div>
          <label className="block font-body font-bold text-sm mb-1 text-[#0F2E30]">{t.pharmacy}</label>
          <input
            type="text"
            value={patientInfo.pharmacy}
            onChange={(e) => setPatientInfo((p) => ({ ...p, pharmacy: e.target.value }))}
            placeholder={t.pharmacyPlaceholder}
            autoComplete="off"
            className="w-full px-4 py-3 rounded-xl font-body text-lg border-2 focus:outline-none focus:border-[#E2512F]"
            style={{ borderColor: 'var(--sand)', backgroundColor: 'var(--paper)', color: 'var(--pine)', minHeight: '52px' }}
          />
        </div>
        <div>
          <label className="block font-body font-bold text-sm mb-1 text-[#0F2E30]">{t.emergencyContact}</label>
          <input
            type="text"
            value={patientInfo.emergencyContact}
            onChange={(e) => setPatientInfo((p) => ({ ...p, emergencyContact: e.target.value }))}
            placeholder={t.emergencyPlaceholder}
            autoComplete="off"
            className="w-full px-4 py-3 rounded-xl font-body text-lg border-2 focus:outline-none focus:border-[#E2512F]"
            style={{ borderColor: 'var(--sand)', backgroundColor: 'var(--paper)', color: 'var(--pine)', minHeight: '52px' }}
          />
        </div>
      </div>

      {/* Progress Strip */}
      <div className="no-print flex flex-wrap items-center justify-between gap-3 mb-6 p-4" style={{ backgroundColor: 'var(--paper)', borderRadius: '16px' }}>
        <span className="font-body font-bold text-lg text-[#0F2E30]">{t.progress(totalMeds)}</span>
        <label className="flex items-center gap-2 font-body text-sm cursor-pointer" style={{ color: 'var(--muted-ink)' }}>
          <input type="checkbox" checked={saveOnDevice} onChange={toggleSaveOnDevice} className="w-5 h-5 accent-[#E2512F]" />
          {t.saveDevice}
        </label>
      </div>
      {saveOnDevice && (
        <div className="no-print flex items-center justify-between mb-4 px-4">
          <p className="font-body text-sm" style={{ color: 'var(--flamboyan)' }}>{t.saveDeviceWarning}</p>
          <button onClick={toggleSaveOnDevice} className="font-body text-sm font-bold underline" style={{ color: 'var(--pine)' }}>{t.forgetDevice}</button>
        </div>
      )}

      {totalMeds >= 5 && (
        <div className="no-print p-4 mb-6 font-body text-base" style={{ backgroundColor: 'var(--sand)', borderRadius: '16px', color: 'var(--pine)' }}>
          💡 {t.polypharmacyNote}
        </div>
      )}

      {/* Time-of-Day Sections */}
      {TIME_SECTIONS.map((section) => (
        <div key={section.id} className="mb-8" style={{ borderLeft: `6px solid ${section.color}`, paddingLeft: '16px' }}>
          <h3 className="font-display text-xl font-medium text-[#F4EFE6] mb-1 flex items-center gap-2">
            <span className="text-2xl">{section.icon}</span>
            {lang === 'es' ? section.es : section.en}
            <span className="text-sm font-body font-normal" style={{ color: 'var(--sage)' }}>
              ({lang === 'es' ? section.subEs : section.subEn})
            </span>
          </h3>

          {meds[section.id]?.map((med, index) => (
            <div key={index} className="no-print grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 p-4" style={{ backgroundColor: 'var(--paper)', borderRadius: '16px' }}>
              {/* Shape & Color */}
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="block font-body text-xs font-bold mb-1 text-[#0F2E30]">{t.selectShape}</label>
                  <select
                    value={med.shape}
                    onChange={(e) => updateMed(section.id, index, 'shape', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg font-body text-base border-2 focus:outline-none focus:border-[#E2512F]"
                    style={{ borderColor: 'var(--sand)', backgroundColor: 'var(--paper)', color: 'var(--pine)', minHeight: '48px' }}
                  >
                    <option value="">—</option>
                    {PILL_SHAPES.map((s) => <option key={s.id} value={s.id}>{lang === 'es' ? s.es : s.en}</option>)}
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block font-body text-xs font-bold mb-1 text-[#0F2E30]">{t.selectColor}</label>
                  <select
                    value={med.color}
                    onChange={(e) => updateMed(section.id, index, 'color', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg font-body text-base border-2 focus:outline-none focus:border-[#E2512F]"
                    style={{ borderColor: 'var(--sand)', backgroundColor: 'var(--paper)', color: 'var(--pine)', minHeight: '48px' }}
                  >
                    <option value="">—</option>
                    {PILL_COLORS.map((c) => <option key={c.id} value={c.id}>{lang === 'es' ? c.es : c.en}</option>)}
                  </select>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block font-body text-xs font-bold mb-1 text-[#0F2E30]">{t.medName}</label>
                <input
                  type="text"
                  value={med.name}
                  onChange={(e) => updateMed(section.id, index, 'name', e.target.value)}
                  placeholder={t.medNamePlaceholder}
                  autoComplete="off"
                  className="w-full px-3 py-2 rounded-lg font-body text-base border-2 focus:outline-none focus:border-[#E2512F]"
                  style={{ borderColor: 'var(--sand)', backgroundColor: 'var(--paper)', color: 'var(--pine)', minHeight: '48px' }}
                />
              </div>

              {/* Dose */}
              <div>
                <label className="block font-body text-xs font-bold mb-1 text-[#0F2E30]">{t.dose}</label>
                <input
                  type="text"
                  value={med.dose}
                  onChange={(e) => updateMed(section.id, index, 'dose', e.target.value)}
                  placeholder={t.dosePlaceholder}
                  autoComplete="off"
                  className="w-full px-3 py-2 rounded-lg font-body text-base border-2 focus:outline-none focus:border-[#E2512F]"
                  style={{ borderColor: 'var(--sand)', backgroundColor: 'var(--paper)', color: 'var(--pine)', minHeight: '48px' }}
                />
              </div>

              {/* Purpose */}
              <div>
                <label className="block font-body text-xs font-bold mb-1 text-[#0F2E30]">{t.purpose}</label>
                <input
                  type="text"
                  value={med.purpose}
                  onChange={(e) => updateMed(section.id, index, 'purpose', e.target.value)}
                  placeholder={t.purposePlaceholder}
                  autoComplete="off"
                  className="w-full px-3 py-2 rounded-lg font-body text-base border-2 focus:outline-none focus:border-[#E2512F]"
                  style={{ borderColor: 'var(--sand)', backgroundColor: 'var(--paper)', color: 'var(--pine)', minHeight: '48px' }}
                />
              </div>

              {/* Instructions */}
              <div>
                <label className="block font-body text-xs font-bold mb-1 text-[#0F2E30]">{t.instructions}</label>
                <input
                  type="text"
                  value={med.instructions}
                  onChange={(e) => updateMed(section.id, index, 'instructions', e.target.value)}
                  placeholder={t.instructionsPlaceholder}
                  autoComplete="off"
                  className="w-full px-3 py-2 rounded-lg font-body text-base border-2 focus:outline-none focus:border-[#E2512F]"
                  style={{ borderColor: 'var(--sand)', backgroundColor: 'var(--paper)', color: 'var(--pine)', minHeight: '48px' }}
                />
              </div>

              {/* Row actions */}
              <div className="sm:col-span-2 flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <label className="font-body text-xs" style={{ color: 'var(--sage)' }}>{t.moveTo}:</label>
                  <select
                    onChange={(e) => { if (e.target.value) moveMed(section.id, index, e.target.value); e.target.value = ''; }}
                    className="px-3 py-1 rounded-lg font-body text-sm border-2"
                    style={{ borderColor: 'var(--sage)', backgroundColor: 'var(--pine)', color: 'var(--paper)' }}
                  >
                    <option value="">—</option>
                    {TIME_SECTIONS.filter((s) => s.id !== section.id).map((s) => (
                      <option key={s.id} value={s.id}>{lang === 'es' ? s.es : s.en}</option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={() => removeMed(section.id, index)}
                  className="font-body text-sm font-bold px-4 py-2 rounded-full transition"
                  style={{ color: 'var(--flamboyan)', border: '2px solid var(--flamboyan)', minHeight: '48px' }}
                  aria-label={`${t.remove} ${med.name || 'medicine'}`}
                >
                  {t.remove}
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={() => addMed(section.id)}
            className="no-print font-body font-bold text-base px-5 py-3 rounded-full transition"
            style={{ backgroundColor: section.color, color: 'var(--paper)', minHeight: '48px' }}
          >
            + {t.addMed}
          </button>
        </div>
      ))}

      {/* OTC Reminder */}
      <p className="no-print font-body text-sm mb-8 p-4" style={{ backgroundColor: 'var(--paper)', borderRadius: '16px', color: 'var(--sage)' }}>
        💊 {t.otcReminder}
      </p>

      {/* DO NOT TAKE Section */}
      <div className="mb-8 p-5" style={{ border: '3px solid var(--flamboyan)', borderRadius: '16px' }}>
        <h3 className="font-display text-xl font-medium text-[#F4EFE6] mb-1 flex items-center gap-2">
          ⚠️ {t.doNotTake}
        </h3>
        <p className="font-body text-sm mb-4" style={{ color: 'var(--sage)' }}>{t.doNotTakeSub}</p>
        {dntList.map((item, i) => (
          <div key={i} className="no-print grid sm:grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block font-body text-xs font-bold mb-1" style={{ color: 'var(--sage)' }}>{t.dntMed}</label>
              <input
                type="text" value={item.med}
                onChange={(e) => { const u = [...dntList]; u[i].med = e.target.value; setDntList(u); }}
                placeholder={t.dntPlaceholder} autoComplete="off"
                className="w-full px-3 py-2 rounded-lg font-body text-base border-2 focus:outline-none focus:border-[#E2512F]"
                style={{ borderColor: 'var(--sage)', backgroundColor: 'var(--pine)', color: 'var(--paper)', minHeight: '48px' }}
              />
            </div>
            <div className="flex gap-2 items-end">
              <div className="flex-1">
                <label className="block font-body text-xs font-bold mb-1" style={{ color: 'var(--sage)' }}>{t.dntReason}</label>
                <input
                  type="text" value={item.reason}
                  onChange={(e) => { const u = [...dntList]; u[i].reason = e.target.value; setDntList(u); }}
                  placeholder={t.dntReasonPlaceholder} autoComplete="off"
                  className="w-full px-3 py-2 rounded-lg font-body text-base border-2 focus:outline-none focus:border-[#E2512F]"
                  style={{ borderColor: 'var(--sage)', backgroundColor: 'var(--pine)', color: 'var(--paper)', minHeight: '48px' }}
                />
              </div>
              {dntList.length > 1 && (
                <button onClick={() => setDntList(dntList.filter((_, j) => j !== i))} className="font-body text-sm font-bold px-3 py-2 rounded-full" style={{ color: 'var(--flamboyan)', border: '2px solid var(--flamboyan)', minHeight: '48px' }}>×</button>
              )}
            </div>
          </div>
        ))}
        <button onClick={() => setDntList([...dntList, { med: '', reason: '' }])} className="no-print font-body font-bold text-base px-5 py-3 rounded-full" style={{ backgroundColor: 'var(--flamboyan)', color: 'var(--paper)', minHeight: '48px' }}>+ {t.addDNT}</button>
      </div>

      {/* ALLERGIES Section */}
      <div className="mb-8 p-5" style={{ border: '3px solid var(--flamboyan)', borderRadius: '16px' }}>
        <h3 className="font-display text-xl font-medium text-[#F4EFE6] mb-4 flex items-center gap-2">
          🚨 {t.allergies}
        </h3>
        {allergies.map((item, i) => (
          <div key={i} className="no-print grid sm:grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block font-body text-xs font-bold mb-1" style={{ color: 'var(--sage)' }}>{t.allergyName}</label>
              <input
                type="text" value={item.name}
                onChange={(e) => { const u = [...allergies]; u[i].name = e.target.value; setAllergies(u); }}
                placeholder={t.allergyPlaceholder} autoComplete="off"
                className="w-full px-3 py-2 rounded-lg font-body text-base border-2 focus:outline-none focus:border-[#E2512F]"
                style={{ borderColor: 'var(--sage)', backgroundColor: 'var(--pine)', color: 'var(--paper)', minHeight: '48px' }}
              />
            </div>
            <div className="flex gap-2 items-end">
              <div className="flex-1">
                <label className="block font-body text-xs font-bold mb-1" style={{ color: 'var(--sage)' }}>{t.allergyReaction}</label>
                <input
                  type="text" value={item.reaction}
                  onChange={(e) => { const u = [...allergies]; u[i].reaction = e.target.value; setAllergies(u); }}
                  placeholder={t.reactionPlaceholder} autoComplete="off"
                  className="w-full px-3 py-2 rounded-lg font-body text-base border-2 focus:outline-none focus:border-[#E2512F]"
                  style={{ borderColor: 'var(--sage)', backgroundColor: 'var(--pine)', color: 'var(--paper)', minHeight: '48px' }}
                />
              </div>
              {allergies.length > 1 && (
                <button onClick={() => setAllergies(allergies.filter((_, j) => j !== i))} className="font-body text-sm font-bold px-3 py-2 rounded-full" style={{ color: 'var(--flamboyan)', border: '2px solid var(--flamboyan)', minHeight: '48px' }}>×</button>
              )}
            </div>
          </div>
        ))}
        <button onClick={() => setAllergies([...allergies, { name: '', reaction: '' }])} className="no-print font-body font-bold text-base px-5 py-3 rounded-full" style={{ backgroundColor: 'var(--flamboyan)', color: 'var(--paper)', minHeight: '48px' }}>+ {t.addAllergy}</button>
      </div>

      {/* Undo Toast */}
      {undoItem && (
        <div className="no-print fixed bottom-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 px-6 py-4 rounded-full" style={{ backgroundColor: 'var(--pine)', color: 'var(--paper)' }}>
          <span className="font-body">{t.removed}</span>
          <button onClick={handleUndo} className="font-body font-bold underline" style={{ color: 'var(--flamboyan)' }}>{t.undo}</button>
        </div>
      )}

      {/* Sticky Action Bar */}
      <div className="no-print sticky bottom-0 z-40 flex flex-wrap items-center justify-center gap-3 p-4 -mx-6 sm:-mx-8" style={{ backgroundColor: 'var(--pine)', borderTop: '3px solid var(--deep-pine)' }}>
        <button onClick={handlePrint} className="font-body font-bold px-6 py-3 rounded-full text-base transition" style={{ backgroundColor: 'var(--flamboyan)', color: 'var(--paper)', minHeight: '48px' }}>📄 {t.savePDF}</button>
        <button onClick={handleShare} className="font-body font-bold px-6 py-3 rounded-full text-base transition" style={{ backgroundColor: 'var(--deep-pine)', color: 'var(--paper)', minHeight: '48px' }}>📤 {t.share}</button>
        <button onClick={handlePrint} className="font-body font-bold px-6 py-3 rounded-full text-base transition" style={{ backgroundColor: 'var(--deep-pine)', color: 'var(--paper)', minHeight: '48px' }}>🖨️ {t.print}</button>
        <button onClick={() => setShowEraseConfirm(true)} className="font-body font-bold px-6 py-3 rounded-full text-base transition" style={{ border: '2px solid var(--flamboyan)', color: 'var(--flamboyan)', minHeight: '48px' }}>🗑️ {t.erase}</button>
      </div>
      <p className="no-print text-center font-body text-sm mt-2" style={{ color: 'var(--sage)' }}>{t.printHint}</p>

      {/* Install Hint */}
      <details className="no-print mt-4 p-4" style={{ backgroundColor: 'var(--paper)', borderRadius: '16px' }}>
        <summary className="font-body font-bold text-sm cursor-pointer" style={{ color: 'var(--sage)' }}>📱 {lang === 'es' ? 'Instalar en pantalla de inicio' : 'Install on home screen'}</summary>
        <p className="font-body text-sm mt-2" style={{ color: 'var(--sage)' }}>{t.installHint}</p>
      </details>

      {/* Erase Confirmation Dialog */}
      {showEraseConfirm && (
        <div className="no-print fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <div className="p-6 max-w-md w-full" style={{ backgroundColor: 'var(--paper)', borderRadius: '28px' }}>
            <h3 className="font-display text-xl font-medium text-[#0F2E30] mb-4">{t.erase}</h3>
            <p className="font-body text-base mb-6 text-[#0F2E30]">{t.eraseConfirm}</p>
            <div className="flex gap-3">
              <button onClick={handleEraseAll} className="flex-1 font-body font-bold px-6 py-3 rounded-full" style={{ backgroundColor: 'var(--flamboyan)', color: 'var(--paper)', minHeight: '48px' }}>{t.eraseConfirmBtn}</button>
              <button onClick={() => setShowEraseConfirm(false)} className="flex-1 font-body font-bold px-6 py-3 rounded-full" style={{ border: '2px solid var(--pine)', color: 'var(--pine)', minHeight: '48px' }}>{t.cancel}</button>
            </div>
          </div>
        </div>
      )}

      {/* ═══ PRINT-ONLY DOCUMENT ═══ */}
      <div className="print-document hidden">
        <div className="print-header">
          <h1>{lang === 'es' ? 'Mi Lista de Medicamentos' : 'My Medication List'}</h1>
          <p className="print-brand">Mi Farmacéutico en PR</p>
        </div>
        <table className="print-patient-info">
          <tbody>
            <tr>
              <td><strong>{t.patient}:</strong></td>
              <td>{patientInfo.name || '—'}</td>
              <td><strong>{t.updated}:</strong></td>
              <td>{patientInfo.date || '—'}</td>
            </tr>
            <tr>
              <td><strong>{t.pharmacy}:</strong></td>
              <td>{patientInfo.pharmacy || '—'}</td>
              <td><strong>{t.emergencyContact}:</strong></td>
              <td>{patientInfo.emergencyContact || '—'}</td>
            </tr>
          </tbody>
        </table>

        {/* Allergies & DNT near top */}
        {allergies.some((a) => a.name.trim()) && (
          <div className="print-alert-box">
            <strong>🚨 {t.allergies}:</strong>
            <ul>
              {allergies.filter((a) => a.name.trim()).map((a, i) => (
                <li key={i}>{a.name}{a.reaction ? ` → ${a.reaction}` : ''}</li>
              ))}
            </ul>
          </div>
        )}
        {dntList.some((d) => d.med.trim()) && (
          <div className="print-alert-box">
            <strong>⚠️ {t.doNotTake}:</strong>
            <ul>
              {dntList.filter((d) => d.med.trim()).map((d, i) => (
                <li key={i}>{d.med}{d.reason ? ` — ${d.reason}` : ''}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="print-emergency">{t.emergency911}</div>

        {/* Time sections */}
        {TIME_SECTIONS.map((section) => {
          const sectionMeds = meds[section.id]?.filter((m) => m.name.trim());
          if (!sectionMeds?.length) return null;
          return (
            <div key={section.id} className="print-section">
              <h2>{section.icon} {lang === 'es' ? section.es : section.en} ({lang === 'es' ? section.subEs : section.subEn})</h2>
              <table>
                <thead>
                  <tr>
                    <th>{t.shapeColor}</th>
                    <th>{t.medName}</th>
                    <th>{t.dose}</th>
                    <th>{t.purpose}</th>
                    <th>{t.instructions}</th>
                  </tr>
                </thead>
                <tbody>
                  {sectionMeds.map((m, i) => (
                    <tr key={i}>
                      <td>{[m.shape && PILL_SHAPES.find((s) => s.id === m.shape)?.[lang === 'es' ? 'es' : 'en'], m.color && PILL_COLORS.find((c) => c.id === m.color)?.[lang === 'es' ? 'es' : 'en']].filter(Boolean).join(', ') || '—'}</td>
                      <td><strong>{m.name}</strong></td>
                      <td>{m.dose || '—'}</td>
                      <td>{m.purpose || '—'}</td>
                      <td>{m.instructions || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })}

        {totalMeds === 0 && <p className="print-empty">{t.noMedsYet}</p>}

        <div className="print-footer">
          <p>{t.pdfFooter}</p>
          <p className="print-disclaimer">{t.pdfDisclaimer}</p>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          .no-print, .no-print * { display: none !important; }
          .print-document { display: block !important; }
          body * { visibility: hidden; }
          .print-document, .print-document * { visibility: visible; }
          .print-document { position: absolute; left: 0; top: 0; width: 100%; }
          @page { size: letter; margin: 0.5in; }
        }
        .print-document { font-family: 'DM Sans', sans-serif; color: #000; }
        .print-header h1 { font-size: 22px; font-weight: 700; margin-bottom: 4px; }
        .print-brand { font-size: 12px; color: #5C6F6A; margin-bottom: 16px; }
        .print-patient-info { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
        .print-patient-info td { padding: 4px 8px; font-size: 14px; border-bottom: 1px solid #ddd; }
        .print-alert-box { border: 2px solid #E2512F; border-radius: 8px; padding: 8px 12px; margin-bottom: 12px; font-size: 14px; }
        .print-alert-box ul { margin: 4px 0 0 16px; }
        .print-emergency { background: #E2512F; color: #fff; text-align: center; padding: 8px; border-radius: 8px; font-weight: 700; font-size: 16px; margin-bottom: 16px; }
        .print-section { margin-bottom: 16px; page-break-inside: avoid; }
        .print-section h2 { font-size: 16px; font-weight: 700; margin-bottom: 8px; border-bottom: 2px solid #0F2E30; padding-bottom: 4px; }
        .print-section table { width: 100%; border-collapse: collapse; font-size: 13px; }
        .print-section th { text-align: left; padding: 6px 8px; background: #E2D6BF; font-weight: 700; border-bottom: 2px solid #0F2E30; }
        .print-section td { padding: 6px 8px; border-bottom: 1px solid #ddd; }
        .print-section tr { page-break-inside: avoid; }
        .print-empty { text-align: center; color: #5C6F6A; font-size: 14px; padding: 40px 0; }
        .print-footer { margin-top: 24px; text-align: center; font-size: 11px; color: #5C6F6A; border-top: 1px solid #ddd; padding-top: 12px; }
        .print-disclaimer { margin-top: 4px; font-style: italic; }
      `}</style>
    </div>
  );
}
