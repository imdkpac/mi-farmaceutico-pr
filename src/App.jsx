import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Success from './pages/Success';
import Canceled from './pages/Canceled';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/canceled" element={<Canceled />} />
      </Routes>
    </BrowserRouter>
  );
}
