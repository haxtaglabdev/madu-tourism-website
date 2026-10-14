import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { images } from "../assets";
import DestinationCard from "../components/home/DestinationCard";
import PageMeta from "../components/seo/PageMeta";
import PageHero from "../components/ui/PageHero";
import Reveal, { RevealGroup } from "../components/ui/Reveal";
import {
  getLocalizedDestinations,
  getLocalizedDestinationExperiences,
} from "../data/localizedContent";
import { useCurrentLanguage } from "../i18n/useCurrentLanguage";

export default function Destinations() {
  const { t } = useTranslation();
  const { currentLang, getLocalizedPath } = useCurrentLanguage();

  const destinationsList = getLocalizedDestinations(currentLang);
  const curatedDestinations = destinationsList.map((destination) =>
    destination.id === "sigiriya"
      ? { ...destination, image: images.sigiriyaRock }
      : destination,
  );

  const destinationExperiencesList = getLocalizedDestinationExperiences(currentLang);

  return (
    <>
      <PageMeta
        description={t("destinations.metaDescription")}
        title={t("destinations.metaTitle")}
      />
      <main>
        <PageHero
          description={t("destinations.hero.description")}
          eyebrow={t("destinations.hero.eyebrow")}
          highlight={t("destinations.hero.highlight")}
          image={images.beachCafeHero}
          imageAlt={t("destinations.hero.title") + t("destinations.hero.highlight")}
          title={t("destinations.hero.title")}
        />

        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
          <Reveal>
            <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted sm:text-base">
              {t("destinations.intro")}
            </p>
          </Reveal>
        </section>

        <section className="w-full bg-soft-mint py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-10 flex flex-col items-center text-center sm:mb-14">
              <div>
                <Reveal>
                  <div className="mb-2 inline-flex items-center justify-center gap-2">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-sunset" />
                    <span className="text-xs font-semibold tracking-[0.2em] text-tropical uppercase">
                      {t("destinations.featuredEyebrow")}
                    </span>
                  </div>
                </Reveal>
                <Reveal delay={100}>
                  <h2 className="text-center font-serif text-[1.75rem] leading-[1.25] font-medium text-charcoal sm:text-3xl md:text-[2.625rem]">
                    {t("destinations.featuredTitle")}
                  </h2>
                </Reveal>
              </div>
            </div>

            <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-12">
              {curatedDestinations.map((destination, index) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                  style={{ "--reveal-index": index } as CSSProperties}
                  to={getLocalizedPath("/contact")}
                />
              ))}
            </RevealGroup>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <Reveal>
              <div className="mb-2 inline-flex items-center justify-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-tropical" />
                <span className="text-xs font-semibold tracking-[0.2em] text-tropical uppercase">
                  {t("destinations.highlightsEyebrow")}
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-center font-serif text-[1.75rem] leading-[1.25] font-medium text-charcoal sm:text-3xl md:text-4xl">
                {t("destinations.highlightsTitle")}
              </h2>
            </Reveal>
          </div>

          <RevealGroup className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {destinationExperiencesList.map((destination, index) => (
              <article
                key={destination.id}
                className="reveal-item flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-white shadow-sm"
                style={{ "--reveal-index": index } as CSSProperties}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    alt={destination.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    src={destination.image}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 font-serif text-[1.3125rem] leading-snug font-medium text-charcoal sm:text-[1.45rem]">
                    {destination.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-muted">
                    {destination.description}
                  </p>
                  <ul className="mb-6 space-y-2 border-t border-border-subtle pt-4">
                    {destination.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-xs text-charcoal/80"
                      >
                        <span className="material-symbols-outlined text-[16px] text-tropical">
                          check_circle
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Link
                      className="inline-flex items-center gap-1.5 rounded-full bg-forest px-5 py-2.5 text-xs font-semibold tracking-wider text-white uppercase transition-all duration-300 hover:-translate-y-px hover:bg-tropical"
                      to={getLocalizedPath("/contact")}
                    >
                      {currentLang === "ru" ? "Узнать подробнее" : "Explore"}
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </RevealGroup>
        </section>

        <section className="relative w-full overflow-hidden bg-forest py-16 text-white sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,201,74,0.12),transparent_40%)]" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
            <Reveal>
              <h2 className="mb-5 font-serif text-[1.75rem] leading-[1.25] font-medium text-white sm:mb-6 sm:text-4xl">
                {currentLang === "ru"
                  ? "Готовы спланировать свой маршрут по острову?"
                  : "Ready to Map Your Island Route?"}
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <Link
                  className="inline-flex items-center justify-center rounded-full bg-sunset px-8 py-3.5 text-[13px] font-semibold tracking-wider text-white uppercase shadow-[0_6px_20px_rgba(245,154,35,0.4)] transition-all duration-300 hover:-translate-y-px hover:bg-sunset-hover"
                  to={getLocalizedPath("/contact")}
                >
                  {t("destinations.planTrip")}
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-[13px] font-medium tracking-wide text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
                  to={getLocalizedPath("/tour-packages")}
                >
                  {t("common.nav.packages")}
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
