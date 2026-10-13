import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

/**
 * Ensures i18next language, document.documentElement.lang, and localStorage
 * are always strictly synchronized with the current route URL.
 */
export default function LanguageSync() {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const isRu = pathname === "/ru" || pathname.startsWith("/ru/");
    const targetLang = isRu ? "ru" : "en";

    if (i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang);
    }

    if (typeof document !== "undefined") {
      document.documentElement.lang = targetLang;
    }

    try {
      localStorage.setItem("madutseylon_lang", targetLang);
    } catch {
      // Ignore storage errors
    }
  }, [pathname, i18n]);

  return null;
}
