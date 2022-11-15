import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from "i18next-browser-languagedetector";
import en_translation from "./locales/en/translation.json";
import fr_translation from "./locales/fr/translation.json";

const detectionOptions = {
    order: ['path', 'cookie', 'navigator', 'localStorage', 'subdomain', 'queryString', 'htmlTag'],
    lookupFromPathIndex: 0
}

i18n
    .use(Backend)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        debug: true,
        detection: detectionOptions,

        interpolation: {
            escapeValue: false
        },
        resources: {
            en: {
                translation: en_translation
            },
            fr: {
                translation: fr_translation
            },
        },
    });

export default i18n;