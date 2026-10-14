import { useMemo, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { images } from "../assets";
import PageMeta from "../components/seo/PageMeta";
import PageHero from "../components/ui/PageHero";
import Reveal, { RevealGroup } from "../components/ui/Reveal";
import {
  galleryPageItems,
  type GalleryCategory,
} from "../data/pageContent";
import { useCurrentLanguage } from "../i18n/useCurrentLanguage";

export default function Gallery() {
  const { t } = useTranslation();
  const { getLocalizedPath, isRussian } = useCurrentLanguage();
  const [activeCategory] = useState<GalleryCategory>("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return galleryPageItems;
    return galleryPageItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <PageMeta
        description={t("gallery.metaDescription")}
        title={t("gallery.metaTitle")}
      />
      <main>
        <PageHero
          description={t("gallery.hero.description")}
          eyebrow={t("gallery.hero.eyebrow")}
          highlight={t("gallery.hero.highlight")}
          image={images.fortressInGalle}
          imageAlt={t("gallery.hero.imageAlt")}
          title={t("gallery.hero.title")}
        />

        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <RevealGroup className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`reveal-item group overflow-hidden rounded-xl shadow-sm ${
                  item.aspect === "portrait" ? "aspect-[3/4]" : "aspect-square"
                } ${index % 2 === 1 ? "md:mt-6" : ""}`}
                style={{ "--reveal-index": index } as CSSProperties}
              >
                <img
                  alt={isRussian && item.altRu ? item.altRu : item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  decoding="async"
                  loading="lazy"
                  src={item.image}
                />
              </div>
            ))}
          </RevealGroup>

          {filteredItems.length === 0 && (
            <p className="py-16 text-center text-sm text-muted">
              {t("gallery.empty")}
            </p>
          )}
        </section>

        <section className="relative w-full overflow-hidden bg-forest py-16 text-white sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,201,74,0.12),transparent_40%)]" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
            <Reveal>
              <h2 className="mb-5 font-serif text-[1.75rem] leading-[1.25] font-medium text-white sm:mb-6 sm:text-4xl">
                {t("gallery.ctaTitle")}
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Link
                className="inline-flex w-full items-center justify-center rounded-full bg-sunset px-8 py-3.5 text-[13px] font-semibold tracking-wider text-white uppercase shadow-[0_6px_20px_rgba(245,154,35,0.4)] transition-all duration-300 hover:-translate-y-px hover:bg-sunset-hover sm:w-auto"
                to={getLocalizedPath("/contact")}
              >
                {t("gallery.planTrip")}
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
