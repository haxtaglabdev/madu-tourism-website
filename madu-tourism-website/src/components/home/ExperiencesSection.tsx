import type { CSSProperties } from "react";
import { experiences } from "../../data/homeContent";
import Reveal, { RevealGroup } from "../ui/Reveal";
import ExperienceCard from "./ExperienceCard";

export default function ExperiencesSection() {
  return (
    <section
      className="w-full bg-forest-dark py-16 text-white sm:py-28"
      id="experiences"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col justify-between sm:mb-16 md:flex-row md:items-end">
          <div>
            <Reveal>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-gold" />
                <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                  Authentic Ceylon Memories
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-serif text-[1.75rem] font-medium text-white sm:text-3xl md:text-5xl">
                Popular Experiences
              </h2>
            </Reveal>
          </div>
          <Reveal delay={180} className="mt-4 max-w-md md:mt-0">
            <p className="text-sm font-light text-white/70">
              Every activity is led by local specialists who share their craft,
              culture, and deep natural understanding.
            </p>
          </Reveal>
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
