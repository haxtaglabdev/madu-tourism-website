import type { Experience } from "../../types/Home";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${experience.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/40 to-transparent transition-colors group-hover:via-forest-dark/25" />
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
