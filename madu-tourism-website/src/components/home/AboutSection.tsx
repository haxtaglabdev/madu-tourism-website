import type { CSSProperties } from "react";
import { images } from "../../assets";
import { getLocalizedValuePillars } from "../../data/localizedContent";
import { useCurrentLanguage } from "../../i18n/useCurrentLanguage";
import Reveal, { RevealGroup } from "../ui/Reveal";

export default function AboutSection() {
  const { t, currentLang } = useCurrentLanguage();
  const pillars = getLocalizedValuePillars(currentLang);

  return (
    <section
      className="mx-auto w-full max-w-7xl px-4 pt-24 pb-24 sm:px-6 sm:pt-32 sm:pb-36"
      id="about"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal
          className="relative mb-8 px-1 sm:mb-4 sm:px-0 lg:col-span-6 lg:mb-0"
          variant="fade-right"
        >
          <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-2xl border border-charcoal/5 shadow-[0_16px_36px_rgba(0,37,26,0.08)]">
            <img
              alt="Ceylon tea plucking in emerald hills"
              className="h-full w-full object-cover object-top"
              src={images.homeTrainGb}
            />
          </div>
          <div className="absolute -right-2 -bottom-8 z-20 hidden aspect-[4/3] w-3/5 overflow-hidden rounded-2xl border-4 border-white shadow-[0_20px_40px_rgba(0,37,26,0.14)] sm:-right-4 sm:-bottom-10 lg:-right-6 sm:block">
            <img
              alt="Sri Lankan hospitality and traditional welcome"
              className="h-full w-full object-cover"
              src={images.women}
            />
          </div>
          <div className="absolute -top-4 -left-2 z-30 flex h-20 w-20 items-center justify-center border border-charcoal/5 bg-white p-1.5 shadow-xl sm:-top-5 sm:-left-4 sm:h-24 sm:w-24 lg:-top-6 lg:-left-6 md:h-28 md:w-28">
            <img
              alt="Madu Tseylon Tours Seal"
              className="h-full w-full object-contain"
              src={images.sticker}
            />
          </div>
        </Reveal>

        <div className="flex flex-col justify-center lg:col-span-6 lg:pt-4">
          <Reveal delay={0}>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-tropical" />
              <span className="text-xs font-semibold tracking-[0.2em] text-tropical uppercase">
                {t("home.about.eyebrow")}
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mb-6 font-serif text-[1.75rem] leading-[1.25] font-medium text-charcoal sm:text-3xl md:text-[2.625rem]">
              {t("home.about.title")}
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mb-6 text-base leading-relaxed text-muted">
              {t("home.about.description")}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mb-8 rounded-xl border-l-4 border-tropical bg-soft-mint p-5">
              <p className="font-serif text-sm text-charcoal italic">
                &ldquo;{t("home.about.quote")}&rdquo;
              </p>
              <span className="mt-2 block text-xs font-semibold tracking-wider text-tropical uppercase">
                {t("home.about.quoteAuthor")}
              </span>
            </div>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 gap-6 border-t border-border-subtle pt-4 sm:grid-cols-3">
            {pillars.map((pillar, index) => (
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
        </div>
      </div>
    </section>
  );
}
