import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

export type SupportedLanguage = "en" | "ru";

export function getLocalizedPathForLang(path: string, lang: SupportedLanguage): string {
  // Normalize path
  const cleanPath = path || "/";

  if (lang === "ru") {
    if (cleanPath === "/" || cleanPath === "") return "/ru";
    if (cleanPath === "/ru" || cleanPath.startsWith("/ru/")) return cleanPath;
    return `/ru${cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`}`;
  }

  // English (default, no /ru prefix)
  if (cleanPath === "/ru" || cleanPath === "/ru/") return "/";
  if (cleanPath.startsWith("/ru/")) {
    const stripped = cleanPath.slice(3);
    return stripped.startsWith("/") ? stripped : `/${stripped}`;
  }
  return cleanPath;
}

export function useCurrentLanguage() {
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const isRussianUrl =
    location.pathname === "/ru" || location.pathname.startsWith("/ru/");

  const currentLang: SupportedLanguage = isRussianUrl ? "ru" : "en";
  const isRussian = currentLang === "ru";

  const getLocalizedPath = useCallback(
    (path: string) => getLocalizedPathForLang(path, currentLang),
    [currentLang],
  );

  const switchLanguage = useCallback(
    (targetLang: SupportedLanguage) => {
      if (targetLang === currentLang) return;

      const targetPath = getLocalizedPathForLang(location.pathname, targetLang);
      const fullTarget = `${targetPath}${location.search}${location.hash}`;

      i18n.changeLanguage(targetLang);
      if (typeof document !== "undefined") {
        document.documentElement.lang = targetLang;
      }
      try {
        localStorage.setItem("madutseylon_lang", targetLang);
      } catch {
        // Ignore localStorage access failures
      }

      navigate(fullTarget);
    },
    [currentLang, location.pathname, location.search, location.hash, i18n, navigate],
  );

  return useMemo(
    () => ({
      currentLang,
      isRussian,
      t,
      getLocalizedPath,
      switchLanguage,
    }),
    [currentLang, isRussian, t, getLocalizedPath, switchLanguage],
  );
}
