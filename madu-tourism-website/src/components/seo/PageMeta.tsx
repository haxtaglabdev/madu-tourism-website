import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getLocalizedPathForLang } from "../../i18n/useCurrentLanguage";

interface PageMetaProps {
  title: string;
  description?: string;
}

function updateOrCreateMetaTag(name: string, content: string) {
  let meta = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
}

function updateOrCreateLinkTag(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;

  let link = document.querySelector<HTMLLinkElement>(selector);
  if (!link) {
    link = document.createElement("link");
    link.rel = rel;
    if (hreflang) link.hreflang = hreflang;
    document.head.appendChild(link);
  }
  link.href = href;
}

/**
 * Sets document title, description, canonical link, and alternate hreflang tags
 * for the current route and active language.
 */
export default function PageMeta({ title, description }: PageMetaProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;

    if (description) {
      updateOrCreateMetaTag("description", description);
    }

    if (typeof window !== "undefined") {
      const origin = window.location.origin;
      const isRu = pathname === "/ru" || pathname.startsWith("/ru/");
      const currentLang = isRu ? "ru" : "en";

      // Set html lang
      document.documentElement.lang = currentLang;

      // Canonical URL
      const currentPath = pathname || "/";
      const canonicalUrl = `${origin}${currentPath}`;
      updateOrCreateLinkTag("canonical", canonicalUrl);

      // Reciprocal hreflang URLs
      const enPath = getLocalizedPathForLang(pathname, "en");
      const ruPath = getLocalizedPathForLang(pathname, "ru");

      updateOrCreateLinkTag("alternate", `${origin}${enPath}`, "en");
      updateOrCreateLinkTag("alternate", `${origin}${ruPath}`, "ru");
      updateOrCreateLinkTag("alternate", `${origin}${enPath}`, "x-default");
    }
  }, [title, description, pathname]);

  return null;
}
