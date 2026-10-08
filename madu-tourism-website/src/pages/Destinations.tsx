import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { images } from "../assets";
import DestinationCard from "../components/home/DestinationCard";
import PageMeta from "../components/seo/PageMeta";
import PageHero from "../components/ui/PageHero";
import Reveal, { RevealGroup } from "../components/ui/Reveal";
import { destinations } from "../data/homeContent";
import { destinationHighlights } from "../data/pageContent";

export default function Destinations() {
  return (
    <>
      <PageMeta
        description="Explore curated Sri Lankan destinations — Sigiriya, Ella, Galle, Mirissa, Yala, and more with Madu Tseylon Tours."
        title="Destinations | Madu Tseylon Tours"
      />
      <main>
        <PageHero
          description="From central cloud forests and ancient citadel heights down to turquoise southern reef waters — discover the territories we know intimately."
          eyebrow="Iconic Territories"
          highlight="Lanka"
          image={images.sigiriya}
          imageAlt="Sigiriya rock fortress in Sri Lanka"
          title="Discover Sri"
        />

        <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-6">
          <Reveal>
            <p className="mx-auto max-w-3xl text-center text-base leading-relaxed font-light text-muted">
              Each destination below appears on our Home page as a curated
              preview. Here we expand the same places with travel highlights so
              you can begin shaping a journey that fits your pace — culture,
              wildlife, highlands, or coast.
            </p>
          </Reveal>
        </section>

        <section className="w-full bg-soft-mint py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mb-14 flex flex-col justify-between md:flex-row md:items-end">
              <div>
                <Reveal>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-sunset" />
                    <span className="text-xs font-semibold tracking-[0.2em] text-tropical uppercase">
                      Featured Destinations
                    </span>
                  </div>
                </Reveal>
                <Reveal delay={100}>
                  <h2 className="font-serif text-3xl font-medium text-charcoal md:text-5xl">
                    Curated Island Destinations
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={180} className="mt-4 max-w-md md:mt-0">
                <p className="text-sm font-light text-muted">
                  The same destinations featured on our Home page — ready to
                  explore in more depth.
                </p>
              </Reveal>
            </div>

            <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-12">
              {destinations.map((destination, index) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                  style={{ "--reveal-index": index } as CSSProperties}
                  to="/contact"
                />
              ))}
            </RevealGroup>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-6">
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-tropical" />
                <span className="text-xs font-semibold tracking-[0.2em] text-tropical uppercase">
                  Destination Highlights
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-serif text-3xl font-medium text-charcoal md:text-4xl">
                What You Can Experience
              </h2>
            </Reveal>
          </div>

          <RevealGroup className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination, index) => {
              const highlights = destinationHighlights[destination.id] ?? [];
              return (
                <article
                  key={destination.id}
                  className="reveal-item overflow-hidden rounded-2xl border border-border-subtle bg-white shadow-sm"
                  style={{ "--reveal-index": index } as CSSProperties}
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      alt={destination.title}
                      className="h-full w-full object-cover"
                      src={destination.image}
                    />
                  </div>
                  <div className="p-6">
                    <span
                      className={
                        destination.badgeVariant === "gold"
                          ? "mb-3 inline-block rounded-full bg-gold/90 px-2.5 py-1 text-[11px] font-bold tracking-wider text-forest-dark uppercase"
                          : "mb-3 inline-block rounded-full bg-soft-mint px-2.5 py-1 text-[11px] font-semibold tracking-wider text-tropical uppercase"
                      }
                    >
                      {destination.badge}
                    </span>
                    <h3 className="mb-2 font-serif text-xl font-medium text-charcoal">
                      {destination.title}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed font-light text-muted">
                      {destination.description}
                    </p>
                    {highlights.length > 0 && (
                      <ul className="mb-6 space-y-2 border-t border-border-subtle pt-4">
                        {highlights.map((highlight) => (
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
                    )}
                    <Link
                      className="inline-flex items-center gap-1.5 rounded-full bg-forest px-5 py-2.5 text-xs font-semibold tracking-wider text-white uppercase transition-all duration-300 hover:-translate-y-px hover:bg-tropical"
                      to="/contact"
                    >
                      Explore
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </RevealGroup>
        </section>

        <section className="relative w-full overflow-hidden bg-forest py-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,201,74,0.12),transparent_40%)]" />
          <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-6">
            <Reveal>
              <h2 className="mb-6 font-serif text-3xl font-medium text-white sm:text-4xl">
                Ready to Map Your Island Route?
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  className="rounded-full bg-sunset px-8 py-3.5 text-[13px] font-semibold tracking-wider text-white uppercase shadow-[0_6px_20px_rgba(245,154,35,0.4)] transition-all duration-300 hover:-translate-y-px hover:bg-sunset-hover"
                  to="/contact"
                >
                  Plan Your Trip
                </Link>
                <Link
                  className="rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-[13px] font-medium tracking-wide text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
                  to="/tour-packages"
                >
                  View Tour Packages
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
