import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import tr from './locales/tr.json'
import en from './locales/en.json'


i18n.translations = {
    en: { ...en },
    tr: { ...tr }
  };
  
  i18n.locale = Localization.locale;
  i18n.fallbacks = true;

  export default i18n;