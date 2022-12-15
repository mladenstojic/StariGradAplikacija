import i18n from "i18next";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import ChainedBackend from "i18next-chained-backend";
import resourcesToBackend from "i18next-resources-to-backend";

i18n
  .use(ChainedBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallBackLng: 'rs',
    lng: 'rs',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      backends: [
        HttpBackend,
        resourcesToBackend((language, namespace, callback) => {
          import(`../public/assets/locales/${language}/translation.json`)
          .then(({default: resources}) => {
            callback(null, resources);
          })
          .catch((error) => {
            callback(error, null)
          })
        })
      ],
      backendOptions: [{
        loadPath: `/assets/locales/{{lng}}/translation.json`,
      }],
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
