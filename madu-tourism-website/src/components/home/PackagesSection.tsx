import type { CSSProperties } from "react";
import { packages } from "../../data/homeContent";
import Reveal, { RevealGroup } from "../ui/Reveal";
import TourCard from "./TourCard";

export default function PackagesSection() {
  return (
    <section
      className="mx-auto w-full max-w-7xl px-5 py-28 sm:px-6"
      id="packages"
    >
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <Reveal>
          <div className="mb-2 inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-tropical" />
            <span className="text-xs font-semibold tracking-[0.2em] text-tropical uppercase">
              Private Handcrafted Itineraries
            </span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mb-4 font-serif text-3xl font-medium text-charcoal md:text-5xl">
            Featured Travel Packages
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="text-base leading-relaxed font-light text-muted">
            Completely flexible itineraries combining boutique heritage villas,
            licensed private chauffeur-guides, and curated cultural encounters.
          </p>
        </Reveal>
      </div>

      <RevealGroup className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {packages.map((tour, index) => (
          <TourCard
            key={tour.id}
            style={{ "--reveal-index": index } as CSSProperties}
            tour={tour}
          />
        ))}
      </RevealGroup>
    </section>
  );
}
