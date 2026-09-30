import { packages } from "../../data/homeContent";
import TourCard from "./TourCard";

export default function PackagesSection() {
  return (
    <section
      className="mx-auto w-full max-w-7xl px-5 py-28 sm:px-6"
      id="packages"
    >
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <div className="mb-2 inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-tropical" />
          <span className="text-xs font-semibold tracking-[0.2em] text-tropical uppercase">
            Private Handcrafted Itineraries
          </span>
        </div>
        <h2 className="mb-4 font-serif text-3xl font-medium text-charcoal md:text-5xl">
          Featured Travel Packages
        </h2>
        <p className="text-base leading-relaxed font-light text-muted">
          Completely flexible itineraries combining boutique heritage villas,
          licensed private chauffeur-guides, and curated cultural encounters.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {packages.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
}
