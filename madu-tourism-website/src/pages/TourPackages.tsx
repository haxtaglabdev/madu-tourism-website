import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { images } from "../assets";
import TourCard from "../components/home/TourCard";
import PageMeta from "../components/seo/PageMeta";
import PageHero from "../components/ui/PageHero";
import Reveal, { RevealGroup } from "../components/ui/Reveal";
import {
  getLocalizedPackages,
  getLocalizedPackageDetailsPath,
} from "../data/localizedPackages";
import { useCurrentLanguage } from "../i18n/useCurrentLanguage";

export default function TourPackages() {
  const { t } = useTranslation();
  const { currentLang, getLocalizedPath } = useCurrentLanguage();

  const allPackages = getLocalizedPackages(currentLang);
  const journeyPackages = allPackages.map((tour) => {
    if (tour.id === "classic-ceylon") {
      return { ...tour, image: images.maligawa };
    }
    if (tour.id === "wild-leopards") {
      return { ...tour, image: images.kotiDenna };
    }
    if (tour.id === "ceylon-essentials") {
      return { ...tour, image: images.colomboMusi };
    }
    if (tour.id === "island-highlights") {
      return { ...tour, image: images.sigiriyaRock };
    }
    if (tour.id === "ancient-kingdoms") {
      return { ...tour, image: images.nuwaraEliya };
    }
    if (tour.id === "grand-expedition") {
      return { ...tour, image: images.teaW };
    }
    return tour;
  });

  return (
    <>
      <PageMeta
        description={t("tourPackages.metaDescription")}
        title={t("tourPackages.metaTitle")}
      />
      <main>
        <PageHero
          description={t("tourPackages.hero.description")}
          eyebrow={t("tourPackages.hero.eyebrow")}
          highlight={t("tourPackages.hero.highlight")}
          image={images.nelumKola}
          imageAlt={t("tourPackages.hero.title") + t("tourPackages.hero.highlight")}
          title={t("tourPackages.hero.title")}
        />

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-28">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-16">
            <Reveal>
              <div className="mb-2 inline-flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-tropical" />
                <span className="text-xs font-semibold tracking-[0.2em] text-tropical uppercase">
                  {t("tourPackages.sectionEyebrow")}
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mb-4 font-serif text-[1.75rem] leading-[1.25] font-medium text-charcoal sm:text-3xl md:text-[2.625rem]">
                {t("tourPackages.sectionTitle")}
              </h2>
            </Reveal>
          </div>

          <RevealGroup className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {journeyPackages.map((tour, index) => (
              <TourCard
                key={tour.id}
                detailsTo={
                  getLocalizedPackageDetailsPath(tour.id, currentLang) ??
                  getLocalizedPath("/contact")
                }
                style={{ "--reveal-index": index } as CSSProperties}
                tour={tour}
              />
            ))}
          </RevealGroup>
        </section>

        <section className="w-full bg-soft-mint py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <Reveal>
              <div className="mb-2 inline-flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-sunset" />
                <span className="text-xs font-semibold tracking-[0.2em] text-tropical uppercase">
                  {t("tourPackages.bespokeEyebrow")}
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mb-4 font-serif text-[1.75rem] leading-[1.25] font-medium text-charcoal sm:text-3xl md:text-4xl">
                {t("tourPackages.bespokeTitle")}
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                {t("tourPackages.bespokeDescription")}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <Link
                className="inline-flex w-full items-center justify-center rounded-full bg-sunset px-8 py-3.5 text-[13px] font-semibold tracking-wider text-white uppercase shadow-[0_6px_20px_rgba(245,154,35,0.4)] transition-all duration-300 hover:-translate-y-px hover:bg-sunset-hover sm:w-auto"
                to={getLocalizedPath("/contact")}
              >
                {t("tourPackages.planTrip")}
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
