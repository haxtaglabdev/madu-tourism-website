import type { CSSProperties } from "react";
import type { Experience } from "../../types/Home";

interface ExperienceCardProps {
  experience: Experience;
  style?: CSSProperties;
}

export default function ExperienceCard({ experience, style }: ExperienceCardProps) {
  return (
    <article
      className="reveal-item group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl"
      style={style}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        style={{ backgroundImage: `url(${experience.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/40 to-transparent transition-colors duration-500 group-hover:via-forest-dark/25" />
      <div className="absolute inset-0 flex flex-col justify-end p-7">
        <span className="mb-1 text-[11px] font-semibold tracking-wider text-gold uppercase">
          {experience.category}
        </span>
        <h3 className="mb-1 font-serif text-xl font-medium text-white">
          {experience.title}
        </h3>
        <p className="text-xs font-light text-white/80">
          {experience.description}
        </p>
      </div>
    </article>
  );
}
