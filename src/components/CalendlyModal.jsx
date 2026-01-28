import React from 'react';
import { X } from 'lucide-react';

export default function CalendlyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Replace this with your actual Calendly link
  const CALENDLY_URL = "https://calendly.com/mifarmaceuticopr";

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full h-[600px] relative shadow-2xl animate-in fade-in zoom-in duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors bg-white dark:bg-slate-900 shadow-lg"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-slate-500" />
        </button>

        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Schedule Your 15-Minute Consultation
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Let's discuss how we can help with medication oversight for your loved ones
          </p>
        </div>

        {/* Calendly iframe */}
        <div className="w-full h-[calc(100%-100px)]">
          <iframe
            src={CALENDLY_URL}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule a consultation"
            className="rounded-b-3xl"
          />
        </div>
      </div>
    </div>
  );
}
