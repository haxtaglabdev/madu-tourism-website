import { useMemo, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { images } from "../assets";
import PageMeta from "../components/seo/PageMeta";
import PageHero from "../components/ui/PageHero";
import Reveal, { RevealGroup } from "../components/ui/Reveal";
import {
  galleryCategories,
  galleryPageItems,
  type GalleryCategory,
} from "../data/pageContent";

export default function Gallery() {
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory>("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return galleryPageItems;
    return galleryPageItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <PageMeta
        description="Browse moments from Sri Lanka — nature, wildlife, culture, beaches, and local life with Madu Tseylon Tours."
        title="Gallery | Madu Tseylon Tours"
      />
      <main>
        <PageHero
          description="Authentic glimpses of daily rhythms, temple rites, wildlife, and ocean sunsets — drawn from the same visual diary featured on our Home page."
          eyebrow="Visual Travel Diary"
          highlight="Sri Lanka"
          image={images.galleSunset}
          imageAlt="Galle Fort lighthouse at golden hour"
          title="Moments From"
        />

        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <Reveal>
            <p className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed font-light text-muted sm:mb-10 sm:text-base">
              A premium editorial gallery of island moments. Filter by theme or
              browse the full collection — every image is part of the Madu
              Tseylon visual story.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div
              aria-label="Gallery categories"
              className="mb-8 flex flex-wrap items-center justify-center gap-2 sm:mb-12"
              role="tablist"
            >
              {galleryCategories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    aria-selected={isActive}
                    className={`rounded-full px-3 py-2 text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 sm:px-4 sm:text-xs ${
                      isActive
                        ? "bg-forest text-white shadow-sm"
                        : "bg-soft-mint text-charcoal/80 hover:bg-tropical/15 hover:text-tropical"
                    }`}
                    onClick={() => setActiveCategory(category)}
                    role="tab"
                    type="button"
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <RevealGroup className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`reveal-item group overflow-hidden rounded-xl shadow-sm ${
                  item.aspect === "portrait" ? "aspect-[3/4]" : "aspect-square"
                } ${index % 2 === 1 ? "md:mt-6" : ""}`}
                style={{ "--reveal-index": index } as CSSProperties}
              >
                <img
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  src={item.image}
                />
              </div>
            ))}
          </RevealGroup>

          {filteredItems.length === 0 && (
            <p className="py-16 text-center text-sm text-muted">
              No images in this category yet.
            </p>
          )}
        </section>

        <section className="relative w-full overflow-hidden bg-forest py-16 text-white sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,201,74,0.12),transparent_40%)]" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
            <Reveal>
              <h2 className="mb-5 font-serif text-[1.75rem] font-medium text-white sm:mb-6 sm:text-4xl">
                Want These Moments as Your Own Memories?
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Link
                className="inline-flex w-full items-center justify-center rounded-full bg-sunset px-8 py-3.5 text-[13px] font-semibold tracking-wider text-white uppercase shadow-[0_6px_20px_rgba(245,154,35,0.4)] transition-all duration-300 hover:-translate-y-px hover:bg-sunset-hover sm:w-auto"
                to="/contact"
              >
                Plan Your Trip
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
