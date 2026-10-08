import { useCallback, useRef, useState } from "react";
import { destinations } from "../../data/homeContent";
import Reveal from "../ui/Reveal";
import DestinationCard from "./DestinationCard";

const SLIDE_COUNT = destinations.length;
const FADE_MS = 180;

export default function DestinationsSection() {
  // destinations[0] is Sigiriya & The Ancient Citadel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const isAnimatingRef = useRef(false);

  const goTo = useCallback((nextIndex: number) => {
    if (isAnimatingRef.current) return;

    const normalized =
      ((nextIndex % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT;
    if (normalized === currentIndex) return;

    isAnimatingRef.current = true;
    setIsVisible(false);
    window.setTimeout(() => {
      setCurrentIndex(normalized);
      setIsVisible(true);
      isAnimatingRef.current = false;
    }, FADE_MS);
  }, [currentIndex]);

  const goPrevious = () => goTo(currentIndex - 1);
  const goNext = () => goTo(currentIndex + 1);

  const currentDestination = destinations[currentIndex];

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

        <Reveal delay={220}>
          <div className="relative">
            {/* Desktop / tablet: side controls */}
            <button
              aria-label="Previous destination"
              className="absolute top-1/2 left-3 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-forest-dark/75 text-white shadow-md backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:bg-tropical focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:flex lg:left-4 lg:h-12 lg:w-12"
              onClick={goPrevious}
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">
                chevron_left
              </span>
            </button>
            <button
              aria-label="Next destination"
              className="absolute top-1/2 right-3 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-forest-dark/75 text-white shadow-md backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:bg-tropical focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:flex lg:right-4 lg:h-12 lg:w-12"
              onClick={goNext}
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">
                chevron_right
              </span>
            </button>

            <div
              aria-live="polite"
              aria-atomic="true"
              className={`transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-2 opacity-0"
              }`}
            >
              <DestinationCard
                destination={currentDestination}
                featured
                to="/destinations"
              />
            </div>

            {/* Mobile controls + indicators */}
            <div className="mt-5 flex items-center justify-between gap-4 md:mt-6 md:justify-center">
              <button
                aria-label="Previous destination"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-charcoal/10 bg-white text-forest shadow-sm transition-all duration-300 hover:border-tropical/30 hover:text-tropical focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tropical md:hidden"
                onClick={goPrevious}
                type="button"
              >
                <span className="material-symbols-outlined text-[22px]">
                  chevron_left
                </span>
              </button>

              <div
                aria-label="Destination slides"
                className="flex flex-1 items-center justify-center gap-2"
                role="tablist"
              >
                {destinations.map((destination, index) => {
                  const isActive = index === currentIndex;
                  return (
                    <button
                      key={destination.id}
                      aria-label={`Show ${destination.title}`}
                      aria-selected={isActive}
                      className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tropical ${
                        isActive
                          ? "w-6 bg-tropical"
                          : "w-2 bg-charcoal/20 hover:bg-tropical/50"
                      }`}
                      onClick={() => {
                        if (index !== currentIndex) goTo(index);
                      }}
                      role="tab"
                      type="button"
                    />
                  );
                })}
              </div>

              <button
                aria-label="Next destination"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-charcoal/10 bg-white text-forest shadow-sm transition-all duration-300 hover:border-tropical/30 hover:text-tropical focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tropical md:hidden"
                onClick={goNext}
                type="button"
              >
                <span className="material-symbols-outlined text-[22px]">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
