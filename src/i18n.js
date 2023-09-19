// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en.json';
import translationHI from './locales/hi.json';
import translationZH from './locales/ch.json';


const resources = {
  en: {
    translation: translationEN,
  },
  hi: {
    translation: translationHI,
  },
  zh: {
    translation: translationZH,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', 
  fallbackLng: 'en', 
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;

