import type { TourPackage } from "../../types/Home";

interface TourCardProps {
  tour: TourPackage;
}

function StarRow({ rating, reviewCount }: { rating: number; reviewCount: number }) {
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
      <span className="text-muted">({reviewCount} reviews)</span>
    </div>
  );
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <article
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white transition-all duration-300 ${
        tour.featured
          ? "border-2 border-sunset shadow-lg hover:shadow-2xl"
          : "border border-border-subtle shadow-sm hover:border-tropical/30 hover:shadow-xl"
      }`}
    >
      <div>
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            alt={tour.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
        <div className="p-7">
          <StarRow rating={tour.rating} reviewCount={tour.reviewCount} />
          <h3 className="mb-2 font-serif text-xl font-medium text-charcoal transition-colors group-hover:text-tropical">
            {tour.title}
          </h3>
          <p className="mb-6 text-xs leading-relaxed font-light text-muted">
            {tour.description}
          </p>
          <div className="space-y-2 border-y border-border-subtle py-4 text-xs text-charcoal/80">
            {tour.inclusions.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-tropical">
                  check_circle
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-7 pt-0">
        <div>
          <span className="block text-[11px] tracking-wider text-muted uppercase">
            From
          </span>
          <span className="font-serif text-2xl font-semibold text-charcoal">
            {tour.price}{" "}
            <span className="font-sans text-xs font-normal text-muted">
              / guest
            </span>
          </span>
        </div>
        <a
          className={`rounded-full px-5 py-2.5 text-xs font-semibold tracking-wider text-white uppercase transition-colors ${
            tour.featured
              ? "bg-sunset shadow-md hover:bg-sunset-hover"
              : "bg-forest group-hover:bg-tropical"
          }`}
          href="#planner"
        >
          Explore Details
        </a>
      </div>
    </article>
  );
}
