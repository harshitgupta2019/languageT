import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider
import i18n from './i18n'; // Import your i18n instance
import { BrowserRouter as Router } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext'; // Import the LanguageProvider


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <I18nextProvider i18n={i18n}>
    <LanguageProvider> {/* Wrap the App with LanguageProvider */}
        <App />
      </LanguageProvider>
    </I18nextProvider>
 
  </React.StrictMode>
);

