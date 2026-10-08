import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import type { Destination } from "../../types/Home";

interface DestinationCardProps {
  destination: Destination;
  style?: CSSProperties;
  to?: string;
  /** Full-width featured slide styling (Popular Destinations carousel only). */
  featured?: boolean;
}

export default function DestinationCard({
  destination,
  style,
  to = "/destinations",
  featured = false,
}: DestinationCardProps) {
  const colSpan = featured
    ? "w-full"
    : destination.span === "large"
      ? "md:col-span-8"
      : "md:col-span-4";
  const padding = featured
    ? "p-5 sm:p-8 md:p-10"
    : destination.span === "large"
      ? "p-5 sm:p-8"
      : "p-5 sm:p-6";
  // Soften card height on small screens; restore exact desktop min-height from data.
  // Featured carousel slides use a consistent large editorial height.
  const minHeight = featured
    ? "min-h-[320px] sm:min-h-[420px] lg:min-h-[480px]"
    : destination.minHeight.replace("min-h-", "min-h-[280px] sm:min-h-");
  const useLargeCopy = featured || destination.span === "large";

  return (
    <Link
      className={`reveal-item group relative flex ${minHeight} ${colSpan} ${padding} flex-col justify-end overflow-hidden rounded-2xl shadow-sm transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0`}
      style={style}
      to={to}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        style={{ backgroundImage: `url(${destination.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/40 to-transparent" />
      <div className={`relative z-10 ${useLargeCopy ? "max-w-xl" : ""}`}>
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span
            className={
              destination.badgeVariant === "gold"
                ? "rounded-full bg-gold/90 px-2.5 py-1 text-[11px] font-bold tracking-wider text-forest-dark uppercase"
                : "inline-block rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-semibold tracking-wider text-white uppercase backdrop-blur-md"
            }
          >
            {destination.badge}
          </span>
          {destination.meta && (
            <span className="text-xs text-white/80">{destination.meta}</span>
          )}
        </div>
        <h3
          className={`mb-1 font-serif font-medium text-white ${
            useLargeCopy
              ? "mb-2 text-xl sm:text-2xl md:text-3xl"
              : "text-lg sm:text-xl"
          }`}
        >
          {destination.title}
        </h3>
        <p
          className={`mb-3 text-white/80 ${
            useLargeCopy
              ? "mb-4 text-sm leading-relaxed font-light"
              : "line-clamp-2 text-xs"
          }`}
        >
          {destination.description}
        </p>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-gold uppercase transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
          {destination.linkLabel}
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </span>
      </div>
    </Link>
  );
}
