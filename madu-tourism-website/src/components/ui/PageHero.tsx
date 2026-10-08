interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  image: string;
  imageAlt: string;
}

/** Shared inner-page hero using the site's forest / gold visual language. */
export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[48vh] flex-col justify-end overflow-hidden bg-forest-dark sm:min-h-[58vh]">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          alt={imageAlt}
          className="h-full w-full object-cover object-[center_30%] opacity-85 sm:object-center"
          src={image}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/50 to-forest-dark/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,201,74,0.15),transparent_55%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 pb-12 sm:px-6 sm:pt-28 sm:pb-20">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] tracking-[0.14em] text-white uppercase backdrop-blur-md sm:mb-5 sm:gap-2.5 sm:px-3.5 sm:text-xs sm:tracking-[0.16em]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-gold" />
            {eyebrow}
          </div>
          <h1 className="mb-4 font-serif text-[1.85rem] leading-[1.08] font-medium tracking-tight text-white sm:mb-5 sm:text-5xl lg:text-6xl">
            {title}
            {highlight ? (
              <>
                {" "}
                <span className="font-normal text-gold italic">{highlight}</span>
              </>
            ) : null}
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed font-light text-white/80 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
