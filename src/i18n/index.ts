import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';
import fo from './locales/fo';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fo: { translation: fo },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
