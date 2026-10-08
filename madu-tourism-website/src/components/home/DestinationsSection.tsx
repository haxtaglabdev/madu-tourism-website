import type { CSSProperties } from "react";
import { destinations } from "../../data/homeContent";
import Reveal, { RevealGroup } from "../ui/Reveal";
import DestinationCard from "./DestinationCard";

export default function DestinationsSection() {
  return (
    <section className="w-full bg-soft-mint py-16 sm:py-24" id="destinations">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col justify-between sm:mb-14 md:flex-row md:items-end">
          <div>
            <Reveal>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-sunset" />
                <span className="text-xs font-semibold tracking-[0.2em] text-tropical uppercase">
                  Iconic Territories
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-serif text-[1.75rem] font-medium text-charcoal sm:text-3xl md:text-5xl">
                Popular Destinations
              </h2>
            </Reveal>
          </div>
          <Reveal delay={180} className="mt-4 max-w-md md:mt-0">
            <p className="text-sm font-light text-muted">
              From central cloud forests and ancient citadel heights down to
              turquoise southern reef waters.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              style={{ "--reveal-index": index } as CSSProperties}
            />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
