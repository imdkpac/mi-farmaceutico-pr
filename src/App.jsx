import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import GuiaPage from './pages/GuiaPage';
import AprendePage from './pages/AprendePage';
import Success from './pages/Success';
import Canceled from './pages/Canceled';
import AcuerdoPage from './pages/AcuerdoPage';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--paper)' }}>
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios" element={<LandingPage />} />
            <Route path="/acuerdo-de-servicio" element={<AcuerdoPage />} />
            <Route path="/guia" element={<GuiaPage />} />
            <Route path="/aprende" element={<AprendePage />} />
            <Route path="/success" element={<Success />} />
            <Route path="/canceled" element={<Canceled />} />
          </Routes>
        </main>
      </div>
    </LanguageProvider>
  );
}
