import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./locales/en";
import { ru } from "./locales/ru";

const initialPath = typeof window !== "undefined" ? window.location.pathname : "/";
const isRuInitial = initialPath === "/ru" || initialPath.startsWith("/ru/");
const initialLang = isRuInitial ? "ru" : "en";

// Set html lang attribute initially
if (typeof document !== "undefined") {
  document.documentElement.lang = initialLang;
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
  },
  lng: initialLang,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
