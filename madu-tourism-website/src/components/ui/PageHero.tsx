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
    <section className="relative flex min-h-[48vh] flex-col items-center justify-center overflow-hidden bg-forest-dark sm:min-h-[58vh]">
      <div className="absolute inset-0">
        <img
          alt={imageAlt}
          className="h-full w-full object-cover object-[center_30%] opacity-85 sm:object-center"
          decoding="async"
          fetchPriority="high"
          src={image}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/50 to-forest-dark/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,201,74,0.15),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 pt-24 pb-12 text-center sm:px-6 sm:pt-28 sm:pb-20">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center">
          <div className="mb-4 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-center text-[10px] tracking-[0.14em] text-white uppercase backdrop-blur-md sm:mb-5 sm:gap-2.5 sm:px-3.5 sm:text-xs sm:tracking-[0.16em]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-gold" />
            {eyebrow}
          </div>
          <h1 className="mb-4 text-center font-serif text-[2.125rem] leading-[1.2] font-medium tracking-tight text-white sm:mb-5 sm:text-4xl md:text-[2.65rem] lg:text-[3rem]">
            {title}
            {highlight ? (
              <>
                {" "}
                <span className="font-normal text-gold italic">{highlight}</span>
              </>
            ) : null}
          </h1>
          <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-white/85 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
