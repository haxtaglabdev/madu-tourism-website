import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import {
  getLocalizedPackages,
  getLocalizedPackageDetailsPath,
} from "../../data/localizedPackages";
import { useCurrentLanguage } from "../../i18n/useCurrentLanguage";
import Reveal, { RevealGroup } from "../ui/Reveal";
import TourCard from "./TourCard";

export default function PackagesSection() {
  const { t, currentLang, getLocalizedPath } = useCurrentLanguage();
  const homeTours = getLocalizedPackages(currentLang).slice(0, 3);

  return (
    <section
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-28"
      id="packages"
    >
      <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-16">
        <Reveal>
          <div className="mb-2 inline-flex items-center gap-2">
            <span className="h-2 w-2 shrink-0 rounded-full bg-tropical" />
            <span className="text-xs font-semibold tracking-[0.2em] text-tropical uppercase">
              {t("home.packages.eyebrow")}
            </span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mb-4 font-serif text-[1.75rem] font-medium text-charcoal sm:text-3xl md:text-5xl">
            {t("home.packages.title")}
          </h2>
        </Reveal>
      </div>

      <RevealGroup className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {homeTours.map((tour, index) => (
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

      <Reveal delay={260} className="mt-10 flex justify-center sm:mt-14">
        <Link
          className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-sunset px-8 py-3.5 text-[13px] font-semibold tracking-wider text-white uppercase shadow-[0_6px_20px_rgba(245,154,35,0.4)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:scale-[1.01] hover:bg-sunset-hover sm:w-auto sm:max-w-none"
          to={getLocalizedPath("/tour-packages")}
        >
          {t("home.packages.allPackages")}
        </Link>
      </Reveal>
    </section>
  );
}
