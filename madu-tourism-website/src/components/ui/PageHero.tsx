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
    <section className="relative flex min-h-[52vh] flex-col justify-end overflow-hidden bg-forest-dark sm:min-h-[58vh]">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          alt={imageAlt}
          className="h-full w-full object-cover opacity-85"
          src={image}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/50 to-forest-dark/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,201,74,0.15),transparent_55%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-16 sm:px-6 sm:pb-20">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs tracking-[0.16em] text-white uppercase backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-gold" />
            {eyebrow}
          </div>
          <h1 className="mb-5 font-serif text-4xl leading-[1.08] font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
            {highlight ? (
              <>
                {" "}
                <span className="font-normal text-gold italic">{highlight}</span>
              </>
            ) : null}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed font-light text-white/80 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
