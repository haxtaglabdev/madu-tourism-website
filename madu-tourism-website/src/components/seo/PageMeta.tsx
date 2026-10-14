import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getLocalizedPathForLang } from "../../i18n/useCurrentLanguage";

const PRODUCTION_ORIGIN = "https://madutseylon.com";
const DEFAULT_OG_IMAGE = `${PRODUCTION_ORIGIN}/og-image.jpg`;
const BUSINESS_SCHEMA_SCRIPT_ID = "structured-data-business";

/**
 * Verified business information sourced from:
 * - Brand name: en.ts common.brandName ("Madu Tseylon") & index.html ("Madu Tseylon Tours")
 * - Description: en.ts common.footer.description ("Madu Tseylon Tours is a Sri Lankan...")
 * - Phone: en.ts common.phone ("+94 77 088 0425")
 * - Email: en.ts common.email ("madutseylon@gmail.com")
 * - Address: en.ts common.footer.address ("No.247, kurudu waththa, holuwagoda, godakanda, galle")
 * - Social profiles: Footer.tsx Facebook & Instagram URLs
 */
const BUSINESS_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${PRODUCTION_ORIGIN}/#travelagency`,
  name: "Madu Tseylon Tours",
  alternateName: "Madu Tseylon Tours",
  url: PRODUCTION_ORIGIN,
  description:
    "Madu Tseylon Tours is a Sri Lankan Destination Management Company specializing in bespoke private chauffeur journeys, luxury villa retreats, and responsible wildlife expeditions.",
  telephone: "+94 77 088 0425",
  email: "madutseylon@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No.247, kurudu waththa, holuwagoda, godakanda",
    addressLocality: "Galle",
    addressCountry: "LK",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61595537842617",
    "https://www.instagram.com/madutseylontours/?hl=en",
  ],
};

const VALID_CORE_PATHS = new Set([
  "/",
  "/about",
  "/destinations",
  "/tour-packages",
  "/gallery",
  "/contact",
]);

const VALID_PACKAGE_SLUGS = new Set([
  "classic-ceylon-discovery",
  "highland-tea-sacred-kingdoms",
  "wild-leopards-mirissa-shores",
  "ceylon-essentials-escape",
  "island-highlights-southern-shores",
  "ancient-kingdoms-wild-southern-coast",
  "grand-ceylon-island-expedition",
]);

interface PageMetaProps {
  title: string;
  description?: string;
  ogImage?: string;
  excludeAlternates?: boolean;
  noIndex?: boolean;
}

function updateOrCreateMetaByName(name: string, content: string) {
  let meta = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function removeMetaByName(name: string) {
  const meta = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (meta) {
    meta.remove();
  }
}

function updateOrCreateMetaByProperty(property: string, content: string) {
  let meta = document.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`,
  );
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function removeMetaByProperty(property: string) {
  const meta = document.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`,
  );
  if (meta) {
    meta.remove();
  }
}

function updateOrCreateCanonicalLink(href: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

function updateOrCreateAlternateLink(href: string, hreflang: string) {
  let link = document.querySelector<HTMLLinkElement>(
    `link[rel="alternate"][hreflang="${hreflang}"]`,
  );
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "alternate");
    link.setAttribute("hreflang", hreflang);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

function removeAlternateLinks() {
  const links = document.querySelectorAll<HTMLLinkElement>(
    'link[rel="alternate"][hreflang]',
  );
  links.forEach((link) => link.remove());
}

function updateOrCreateJsonLd(id: string, data: object) {
  let script = document.querySelector<HTMLScriptElement>(`script#${id}`);
  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

function removeJsonLd(id: string) {
  const script = document.querySelector<HTMLScriptElement>(`script#${id}`);
  if (script) {
    script.remove();
  }
}

function isValidRouteForAlternates(pathname: string): boolean {
  const enPath = getLocalizedPathForLang(pathname, "en");

  if (VALID_CORE_PATHS.has(enPath)) {
    return true;
  }

  if (enPath.startsWith("/tour-packages/")) {
    const slug = enPath.slice("/tour-packages/".length).replace(/\/+$/, "");
    return VALID_PACKAGE_SLUGS.has(slug);
  }

  return false;
}

/**
 * Sets document title, description, canonical link, Open Graph tags,
 * Twitter card metadata, social sharing images, robots meta tag,
 * reciprocal hreflang alternate links, and TravelAgency JSON-LD structured data.
 */
export default function PageMeta({
  title,
  description,
  ogImage,
  excludeAlternates = false,
  noIndex = false,
}: PageMetaProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Document title
    document.title = title;

    // 2. HTML lang attribute
    const isRu = pathname === "/ru" || pathname.startsWith("/ru/");
    document.documentElement.lang = isRu ? "ru" : "en";

    // 3. Canonical URL (Production domain + normalized pathname)
    const currentPath = pathname || "/";
    const canonicalUrl = `${PRODUCTION_ORIGIN}${currentPath}`;
    updateOrCreateCanonicalLink(canonicalUrl);

    // 4. Open Graph tags
    updateOrCreateMetaByProperty("og:title", title);
    updateOrCreateMetaByProperty("og:url", canonicalUrl);
    updateOrCreateMetaByProperty("og:type", "website");

    // 5. Twitter Card tags
    updateOrCreateMetaByName("twitter:title", title);

    // 6. Social Sharing Images
    if (noIndex) {
      removeMetaByProperty("og:image");
      removeMetaByName("twitter:image");
      updateOrCreateMetaByName("twitter:card", "summary");
    } else {
      const image = ogImage || DEFAULT_OG_IMAGE;
      updateOrCreateMetaByProperty("og:image", image);
      updateOrCreateMetaByName("twitter:card", "summary_large_image");
      updateOrCreateMetaByName("twitter:image", image);
    }

    // 7. Description (if provided)
    if (description) {
      updateOrCreateMetaByName("description", description);
      updateOrCreateMetaByProperty("og:description", description);
      updateOrCreateMetaByName("twitter:description", description);
    }

    // 8. Robots meta tag (noindex, nofollow)
    if (noIndex) {
      updateOrCreateMetaByName("robots", "noindex, nofollow");
    } else {
      removeMetaByName("robots");
    }

    // 9. Reciprocal hreflang tags (only for valid paired routes)
    const shouldEmitAlternates =
      !excludeAlternates && !noIndex && isValidRouteForAlternates(pathname);

    if (shouldEmitAlternates) {
      const enPath = getLocalizedPathForLang(pathname, "en");
      const ruPath = getLocalizedPathForLang(pathname, "ru");

      const enUrl = `${PRODUCTION_ORIGIN}${enPath}`;
      const ruUrl = `${PRODUCTION_ORIGIN}${ruPath}`;

      updateOrCreateAlternateLink(enUrl, "en");
      updateOrCreateAlternateLink(ruUrl, "ru");
      updateOrCreateAlternateLink(enUrl, "x-default");
    } else {
      removeAlternateLinks();
    }

    // 10. Structured Data (JSON-LD) for business entity (only on valid pages)
    const shouldEmitBusinessSchema =
      !excludeAlternates && !noIndex && isValidRouteForAlternates(pathname);

    if (shouldEmitBusinessSchema) {
      updateOrCreateJsonLd(
        BUSINESS_SCHEMA_SCRIPT_ID,
        BUSINESS_STRUCTURED_DATA,
      );
    } else {
      removeJsonLd(BUSINESS_SCHEMA_SCRIPT_ID);
    }
  }, [title, description, ogImage, pathname, excludeAlternates, noIndex]);

  return null;
}
