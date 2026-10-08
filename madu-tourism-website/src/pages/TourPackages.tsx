import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { images } from "../assets";
import TourCard from "../components/home/TourCard";
import PageMeta from "../components/seo/PageMeta";
import PageHero from "../components/ui/PageHero";
import Reveal, { RevealGroup } from "../components/ui/Reveal";
import { packages } from "../data/homeContent";

export default function TourPackages() {
  return (
    <>
      <PageMeta
        description="Browse handcrafted Sri Lanka tour packages — Classic Ceylon, Highland Tea, and Wild Leopards journeys with Madu Tseylon Tours."
        title="Tour Packages | Madu Tseylon Tours"
      />
      <main>
        <PageHero
          description="Completely flexible itineraries combining boutique heritage villas, licensed private chauffeur-guides, and curated cultural encounters."
          eyebrow="Private Handcrafted Itineraries"
          highlight="for You"
          image={images.sigiriyaAerial}
          imageAlt="Aerial view of Sigiriya and surrounding landscape"
          title="Journeys Made"
        />

        <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-6">
          <Reveal>
            <p className="mx-auto max-w-3xl text-center text-base leading-relaxed font-light text-muted">
              These are the same featured packages showcased on our Home page —
              ready to inquire about, customise, or use as inspiration for a fully
              private itinerary designed around your dates and interests.
            </p>
          </Reveal>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 pb-28 sm:px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Reveal>
              <div className="mb-2 inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-tropical" />
                <span className="text-xs font-semibold tracking-[0.2em] text-tropical uppercase">
                  Featured Travel Packages
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mb-4 font-serif text-3xl font-medium text-charcoal md:text-5xl">
                Choose Your Journey
              </h2>
            </Reveal>
          </div>

          <RevealGroup className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {packages.map((tour, index) => (
              <TourCard
                key={tour.id}
                detailsTo="/contact"
                style={{ "--reveal-index": index } as CSSProperties}
                tour={tour}
              />
            ))}
          </RevealGroup>
        </section>

        <section className="w-full bg-soft-mint py-24">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
            <Reveal>
              <div className="mb-2 inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sunset" />
                <span className="text-xs font-semibold tracking-[0.2em] text-tropical uppercase">
                  Custom Tour
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mb-4 font-serif text-3xl font-medium text-charcoal md:text-4xl">
                Prefer a Fully Tailored Itinerary?
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed font-light text-muted">
                Tell us your travel window, preferred destinations, and pace. Our
                Colombo designers will shape a private day-by-day plan with
                verified boutique stays and chauffeur support.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <Link
                className="inline-flex rounded-full bg-sunset px-8 py-3.5 text-[13px] font-semibold tracking-wider text-white uppercase shadow-[0_6px_20px_rgba(245,154,35,0.4)] transition-all duration-300 hover:-translate-y-px hover:bg-sunset-hover"
                to="/contact"
              >
                Request Custom Itinerary
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
