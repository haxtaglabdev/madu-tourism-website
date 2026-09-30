import type { CSSProperties } from "react";
import { testimonials } from "../../data/homeContent";
import Reveal, { RevealGroup } from "../ui/Reveal";

export default function TestimonialsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-28 sm:px-6">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <Reveal>
          <div className="mb-2 inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-sunset" />
            <span className="text-xs font-semibold tracking-[0.2em] text-tropical uppercase">
              Traveler Reviews
            </span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mb-4 font-serif text-3xl font-medium text-charcoal md:text-5xl">
            Memories From Our Guests
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="text-base leading-relaxed font-light text-muted">
            Read genuine reflections from couples, families, and solo adventurers
            who trusted Madu Tseylon Tours with their holiday.
          </p>
        </Reveal>
      </div>

      <RevealGroup className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <article
            key={item.id}
            className="reveal-item relative flex flex-col justify-between rounded-2xl border border-border-subtle bg-white p-8 shadow-sm transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            style={{ "--reveal-index": index } as CSSProperties}
          >
            <span className="absolute top-4 right-6 select-none font-serif text-6xl text-tropical/15">
              “
            </span>
            <div>
              <div className="mb-5 flex items-center gap-1 text-xs text-gold">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <span
                    key={starIndex}
                    className="material-symbols-outlined material-symbols-filled text-[16px]"
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-charcoal italic">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-4 border-t border-border-subtle pt-4">
              <div
                aria-hidden
                className="flex h-12 w-12 items-center justify-center rounded-full border border-tropical/20 bg-soft-mint text-sm font-semibold text-tropical"
              >
                {item.initials}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-charcoal">
                  {item.name}
                </h4>
                <span className="text-xs text-muted">{item.detail}</span>
              </div>
            </div>
          </article>
        ))}
      </RevealGroup>
    </section>
  );
}
