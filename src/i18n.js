import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// import { zhHK } from './locales/zh-HK'
// import { zhCN } from './locales/zh-CN'
// import { enUS } from './locales/en-US'
// not like to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init


// the translations
// (tip move them in a JSON file and import them)
// console.log('zhHKzhHKzhHKzhHKzhHK',zhHK.main)
// const resources = {
//   'zh-HK': {
//     translation: zhHK.main
//   }
// };

i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'zh-CN',
    debug: true,
    // resources,
    // 对应loadPath: '/locales/{{lng}}/{{ns}}.json'jons文件名称
    ns: ['translation'],
    defaultNS: 'translation',
    backend: {
      // for all available options read the backend's repository readme file
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    // react i18next special options (optional)
    // override if needed - omit if ok with defaults
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: false,
    }
  });


  i18n.on('languageChanged', function(lng) {
  })


export default i18n;