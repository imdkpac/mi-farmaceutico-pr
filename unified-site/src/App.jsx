import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import GuiaPage from './pages/GuiaPage';
import AprendePage from './pages/AprendePage';
import Success from './pages/Success';
import Canceled from './pages/Canceled';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-slate-50 flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/servicios" element={<LandingPage />} />
              <Route path="/guia" element={<GuiaPage />} />
              <Route path="/aprende" element={<AprendePage />} />
              <Route path="/success" element={<Success />} />
              <Route path="/canceled" element={<Canceled />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
