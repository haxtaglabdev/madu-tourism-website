import { destinations } from "../../data/homeContent";
import DestinationCard from "./DestinationCard";

export default function DestinationsSection() {
  return (
    <section className="w-full bg-soft-mint py-24" id="destinations">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-14 flex flex-col justify-between md:flex-row md:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sunset" />
              <span className="text-xs font-semibold tracking-[0.2em] text-tropical uppercase">
                Iconic Territories
              </span>
            </div>
            <h2 className="font-serif text-3xl font-medium text-charcoal md:text-5xl">
              Curated Island Destinations
            </h2>
          </div>
          <p className="mt-4 max-w-md text-sm font-light text-muted md:mt-0">
            From central cloud forests and ancient citadel heights down to
            turquoise southern reef waters.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
