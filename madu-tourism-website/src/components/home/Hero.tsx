import { images } from "../../assets";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-between overflow-hidden bg-forest-dark">
      <div
        className="absolute inset-0 scale-[1.02] bg-cover bg-center opacity-85 transition-transform duration-1000"
        style={{ backgroundImage: `url(${images.heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/40 to-forest-dark/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,201,74,0.15),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-5 pt-24 pb-16 sm:px-6 md:pt-32">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs tracking-[0.16em] text-white uppercase backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
            Authentic Sri Lanka • Tailor-Made Journeys
          </div>
          <h1 className="mb-6 font-serif text-4xl leading-[1.08] font-medium tracking-tight text-white sm:text-6xl lg:text-7xl">
            Discover the Pearl of the{" "}
            <span className="font-normal text-gold italic">Indian Ocean</span>
          </h1>
          <p className="mb-10 max-w-2xl text-base leading-relaxed font-light text-white/80 sm:text-lg">
            Immerse yourself in UNESCO rock citadels, mist-shrouded Ceylon tea
            highlands, and wild leopard reserves with private
            chauffeur-naturalists dedicated solely to your journey.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              className="rounded-full bg-sunset px-8 py-3.5 text-[13px] font-semibold tracking-wider text-white uppercase shadow-[0_6px_20px_rgba(245,154,35,0.4)] transition-all hover:bg-sunset-hover"
              href="#packages"
            >
              Explore Handcrafted Tours
            </a>
            <a
              className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-[13px] font-medium tracking-wide text-white backdrop-blur-md transition-all hover:bg-white/20"
              href="#about"
            >
              <span>Our Heritage</span>
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>

      <div
        className="relative z-20 mx-auto -mb-12 w-full max-w-6xl px-5 sm:px-6"
        id="planner"
      />
    </section>
  );
}
