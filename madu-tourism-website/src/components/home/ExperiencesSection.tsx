import type { CSSProperties } from "react";
import { getLocalizedExperiences } from "../../data/localizedContent";
import { useCurrentLanguage } from "../../i18n/useCurrentLanguage";
import Reveal, { RevealGroup } from "../ui/Reveal";
import ExperienceCard from "./ExperienceCard";

export default function ExperiencesSection() {
  const { currentLang, isRussian } = useCurrentLanguage();
  const experiences = getLocalizedExperiences(currentLang);

  return (
    <section
      className="w-full bg-forest-dark py-16 text-white sm:py-28"
      id="experiences"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col items-center text-center sm:mb-16">
          <div>
            <Reveal>
              <div className="mb-2 inline-flex items-center justify-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-gold" />
                <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                  {isRussian ? "Аутентичные впечатления" : "Authentic Ceylon Memories"}
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-center font-serif text-[1.75rem] leading-[1.25] font-medium text-white sm:text-3xl md:text-[2.625rem]">
                {isRussian ? "Популярные впечатления" : "Popular Experiences"}
              </h2>
            </Reveal>
          </div>
        </div>

        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              style={{ "--reveal-index": index } as CSSProperties}
            />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
