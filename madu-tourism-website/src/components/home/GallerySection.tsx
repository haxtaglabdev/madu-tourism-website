import type { CSSProperties } from "react";
import { galleryItems } from "../../data/homeContent";
import Reveal, { RevealGroup } from "../ui/Reveal";

export default function GallerySection() {
  const columns = [
    galleryItems.slice(0, 2),
    galleryItems.slice(2, 4),
    galleryItems.slice(4, 6),
    galleryItems.slice(6, 8),
  ];

  return (
    <section className="w-full bg-soft-mint py-24" id="gallery">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Reveal>
            <div className="mb-2 inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-tropical" />
              <span className="text-xs font-semibold tracking-[0.2em] text-tropical uppercase">
                Visual Travel Diary
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mb-4 font-serif text-3xl font-medium text-charcoal md:text-5xl">
              Postcards from the Island
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="text-sm font-light text-muted">
              Authentic glimpses of daily rhythms, temple rites, wildlife, and
              ocean sunsets.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {columns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={`space-y-4 ${
                columnIndex % 2 === 1 ? "pt-6 md:pt-10" : ""
              }`}
            >
              {column.map((item, itemIndex) => {
                const revealIndex = columnIndex * 2 + itemIndex;
                return (
                  <div
                    key={item.id}
                    className={`reveal-item group overflow-hidden rounded-xl shadow-sm ${
                      item.aspect === "portrait"
                        ? "aspect-[3/4]"
                        : "aspect-square"
                    }`}
                    style={{ "--reveal-index": revealIndex } as CSSProperties}
                  >
                    <img
                      alt={item.alt}
                      className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      src={item.image}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
