import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import type { TourPackage } from "../../types/Home";
import { useCurrentLanguage } from "../../i18n/useCurrentLanguage";

interface TourCardProps {
  tour: TourPackage;
  style?: CSSProperties;
  detailsTo?: string;
}

function StarRow({
  rating,
  reviewCount,
  reviewsLabel,
}: {
  rating: number;
  reviewCount: number;
  reviewsLabel: string;
}) {
  return (
    <div className="mb-2 flex items-center gap-1.5 text-xs text-gold">
      {Array.from({ length: rating }).map((_, index) => (
        <span
          key={index}
          className="material-symbols-outlined material-symbols-filled text-[16px]"
        >
          star
        </span>
      ))}
      <span className="ml-1 font-semibold text-charcoal">5.0</span>
      <span className="text-muted">({reviewCount} {reviewsLabel})</span>
    </div>
  );
}

export default function TourCard({
  tour,
  style,
  detailsTo = "/contact",
}: TourCardProps) {
  const { t, getLocalizedPath } = useCurrentLanguage();

  const isPerPerson =
    tour.id === "ceylon-essentials" ||
    tour.id === "island-highlights" ||
    tour.id === "ancient-kingdoms" ||
    tour.id === "grand-expedition";

  return (
    <article
      className={`reveal-item group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
        tour.featured
          ? "border-2 border-sunset shadow-lg hover:shadow-2xl"
          : "border border-border-subtle shadow-sm hover:border-tropical/30 hover:shadow-xl"
      }`}
      style={style}
    >
      <div>
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            alt={tour.title}
            className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            src={tour.image}
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="rounded-full bg-forest-dark/90 px-3 py-1 text-[11px] font-semibold tracking-wider text-white uppercase backdrop-blur-md">
              {tour.duration}
            </span>
          </div>
          <span className="absolute right-4 bottom-4 rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-bold text-forest-dark shadow-sm">
            {tour.tag}
          </span>
        </div>
        <div className="p-5 sm:p-7">
          <StarRow
            rating={tour.rating}
            reviewCount={tour.reviewCount}
            reviewsLabel={t("common.reviewsCount")}
          />
          <h3 className="mb-2 font-serif text-lg font-medium text-charcoal transition-colors duration-300 group-hover:text-tropical sm:text-xl">
            {tour.title}
          </h3>
          <p className="mb-6 text-xs leading-relaxed font-light text-muted">
            {tour.description}
          </p>
          <div className="space-y-2 border-y border-border-subtle py-4 text-xs text-charcoal/80">
            {tour.inclusions.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="material-symbols-outlined mt-0.5 shrink-0 text-[16px] text-tropical">
                  check_circle
                </span>
                <span className="min-w-0 break-words">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-5 pt-0 sm:flex-row sm:items-center sm:justify-between sm:p-7 sm:pt-0">
        <div className="min-w-0">
          <span className="block text-[11px] tracking-wider text-muted uppercase">
            {t("common.fromPrice")}
          </span>
          <span className="font-serif text-2xl font-semibold text-charcoal">
            {tour.price}{" "}
            <span className="font-sans text-xs font-normal text-muted">
              {isPerPerson ? t("common.perPerson") : t("common.perGuest")}
            </span>
          </span>
        </div>
        <Link
          className={`inline-flex shrink-0 items-center justify-center rounded-full px-5 py-2.5 text-xs font-semibold tracking-wider text-white uppercase transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:scale-[1.01] ${
            tour.featured
              ? "bg-sunset shadow-md hover:bg-sunset-hover"
              : "bg-forest group-hover:bg-tropical"
          }`}
          to={getLocalizedPath(detailsTo)}
        >
          {t("common.exploreDetails")}
        </Link>
      </div>
    </article>
  );
}
