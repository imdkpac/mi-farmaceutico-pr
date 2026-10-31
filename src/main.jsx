import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StripeProvider } from './context/StripeContext.jsx';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StripeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StripeProvider>
  </React.StrictMode>
);
