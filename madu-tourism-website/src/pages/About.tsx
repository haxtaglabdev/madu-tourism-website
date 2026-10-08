import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { images } from "../assets";
import PageMeta from "../components/seo/PageMeta";
import PageHero from "../components/ui/PageHero";
import Reveal, { RevealGroup } from "../components/ui/Reveal";
import {
  aboutMission,
  aboutStory,
  sriLankaExpertise,
  travelValues,
  valuePillars,
  whyTravelWithUs,
} from "../data/pageContent";

export default function About() {
  return (
    <>
      <PageMeta
        description="Learn about Madu Tseylon Tours — local roots, responsible travel, and bespoke Sri Lankan journeys."
        title="About Us | Madu Tseylon Tours"
      />
      <main>
        <PageHero
          description="A licensed Sri Lankan destination management company crafting private chauffeur journeys, boutique stays, and responsible wildlife expeditions."
          eyebrow="About Madu Tseylon Tours"
          highlight="Tours"
          image={images.teaWoman}
          imageAlt="Ceylon tea plucking in emerald hills"
          title="About Madu Tseylon"
        />

        {/* Our Story */}
        <section className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-6 sm:py-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="relative lg:col-span-6" variant="fade-right">
              <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-2xl border border-charcoal/5 shadow-[0_16px_36px_rgba(0,37,26,0.08)]">
                <img
                  alt="Ceylon tea plucking in emerald hills"
                  className="h-full w-full object-cover object-top"
                  src={images.teaWoman}
                />
              </div>
              <div className="absolute -right-4 -bottom-8 z-20 hidden aspect-[4/3] w-3/5 overflow-hidden rounded-2xl border-4 border-white shadow-[0_20px_40px_rgba(0,37,26,0.14)] sm:block">
                <img
                  alt="Ancient Buddhist temple stupa"
                  className="h-full w-full object-cover"
                  src={images.temple}
                />
              </div>
              <div className="absolute -top-5 -left-5 z-30 flex h-24 w-24 items-center justify-center border border-charcoal/5 bg-white p-1.5 shadow-xl md:h-28 md:w-28">
                <img
                  alt="Madu Tseylon Tours Seal"
                  className="h-full w-full object-contain"
                  src={images.sticker}
                />
              </div>
            </Reveal>

            <div className="flex flex-col justify-center lg:col-span-6 lg:pt-4">
              <Reveal>
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-tropical" />
                  <span className="text-xs font-semibold tracking-[0.2em] text-tropical uppercase">
                    {aboutStory.eyebrow}
                  </span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mb-6 font-serif text-3xl leading-tight font-medium text-charcoal md:text-4xl">
                  Our Story
                </h2>
              </Reveal>
              {aboutStory.paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph.slice(0, 24)} delay={140 + index * 60}>
                  <p className="mb-5 text-base leading-relaxed font-light text-muted">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
              <Reveal delay={320}>
                <div className="rounded-xl border-l-4 border-tropical bg-soft-mint p-5">
                  <p className="font-serif text-sm text-charcoal italic">
                    &ldquo;{aboutStory.quote}&rdquo;
                  </p>
                  <span className="mt-2 block text-xs font-semibold tracking-wider text-tropical uppercase">
                    {aboutStory.quoteAttribution}
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="w-full bg-soft-mint py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <Reveal>
                <div className="mb-2 inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-tropical" />
                  <span className="text-xs font-semibold tracking-[0.2em] text-tropical uppercase">
                    Our Mission
                  </span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mb-4 font-serif text-3xl font-medium text-charcoal md:text-4xl">
                  Travel That Feels Personal &amp; Responsible
                </h2>
              </Reveal>
            </div>
            <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {aboutMission.map((item, index) => (
                <div
                  key={item.title}
                  className="reveal-item rounded-2xl border border-charcoal/5 bg-white p-7 shadow-sm"
                  style={{ "--reveal-index": index } as CSSProperties}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-soft-mint text-tropical">
                    <span className="material-symbols-outlined text-xl">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-medium text-charcoal">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed font-light text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* Why Travel With Us */}
        <section className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-6">
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sunset" />
                <span className="text-xs font-semibold tracking-[0.2em] text-tropical uppercase">
                  Why Travel With Us
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-serif text-3xl font-medium text-charcoal md:text-4xl">
                The Madu Tseylon Difference
              </h2>
            </Reveal>
          </div>
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyTravelWithUs.map((item, index) => (
              <div
                key={item.title}
                className="reveal-item space-y-2 border-t border-border-subtle pt-5"
                style={{ "--reveal-index": index } as CSSProperties}
              >
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-soft-mint text-tropical">
                  <span className="material-symbols-outlined text-xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-charcoal">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </RevealGroup>

          <RevealGroup className="mt-16 grid grid-cols-1 gap-6 border-t border-border-subtle pt-10 sm:grid-cols-3">
            {valuePillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="reveal-item space-y-1.5"
                style={{ "--reveal-index": index } as CSSProperties}
              >
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-soft-mint text-tropical">
                  <span className="material-symbols-outlined text-xl">
                    {pillar.icon}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-charcoal">
                  {pillar.title}
                </h4>
                <p className="text-xs leading-relaxed text-muted">
                  {pillar.description}
                </p>
              </div>
            ))}
          </RevealGroup>
        </section>

        {/* Sri Lanka Expertise */}
        <section className="w-full bg-soft-mint py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mb-14 max-w-2xl">
              <Reveal>
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-tropical" />
                  <span className="text-xs font-semibold tracking-[0.2em] text-tropical uppercase">
                    Sri Lanka Expertise
                  </span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="font-serif text-3xl font-medium text-charcoal md:text-4xl">
                  Culture, Nature, Wildlife &amp; Coast
                </h2>
              </Reveal>
            </div>
            <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {sriLankaExpertise.map((item, index) => (
                <div
                  key={item.title}
                  className="reveal-item group overflow-hidden rounded-2xl bg-white shadow-sm"
                  style={{ "--reveal-index": index } as CSSProperties}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      src={item.image}
                    />
                  </div>
                  <div className="p-5">
                    <div className="mb-2 flex items-center gap-2 text-tropical">
                      <span className="material-symbols-outlined text-lg">
                        {item.icon}
                      </span>
                      <h3 className="text-sm font-semibold text-charcoal">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* Values */}
        <section className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-6">
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sunset" />
                <span className="text-xs font-semibold tracking-[0.2em] text-tropical uppercase">
                  Travel Philosophy
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-serif text-3xl font-medium text-charcoal md:text-4xl">
                Values That Guide Every Journey
              </h2>
            </Reveal>
          </div>
          <RevealGroup className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {travelValues.map((value, index) => (
              <div
                key={value.title}
                className="reveal-item"
                style={{ "--reveal-index": index } as CSSProperties}
              >
                <h3 className="mb-3 font-serif text-xl font-medium text-charcoal">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed font-light text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </RevealGroup>
        </section>

        {/* CTA */}
        <section className="relative w-full overflow-hidden bg-forest py-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,201,74,0.12),transparent_40%)]" />
          <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-6">
            <Reveal>
              <span className="mb-3 block text-xs font-semibold tracking-[0.25em] text-gold uppercase">
                Ready to Explore Sri Lanka?
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mb-6 font-serif text-3xl font-medium text-white sm:text-5xl">
                Let Us Craft Your Private Ceylon Journey
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  className="rounded-full bg-sunset px-8 py-3.5 text-[13px] font-semibold tracking-wider text-white uppercase shadow-[0_6px_20px_rgba(245,154,35,0.4)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:scale-[1.01] hover:bg-sunset-hover"
                  to="/contact"
                >
                  Plan Your Trip
                </Link>
                <Link
                  className="rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-[13px] font-medium tracking-wide text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-px hover:bg-white/20"
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
