/* eslint-disable @typescript-eslint/no-empty-function */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';

i18n
  .use({
    type: 'languageDetector',
    async: true,
    detect: (cb: (lang: string) => void) => cb('en'),
    init: () => {},
    cacheUserLanguage: () => {},
  })
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    compatibilityJSON: 'v3',
    debug: false,
    resources: {
      en: {
        translation: en,
      },
    },
  });

// export directly and use i18n.t to translate functionally
export { i18n };
