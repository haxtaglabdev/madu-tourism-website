import { useEffect, useRef, useState } from "react";
import { heroSlideshowImages } from "../../assets";

/** How long each slide stays fully visible before the next cross-fade begins. */
const SLIDE_INTERVAL_MS = 5000;

/** Cross-fade duration between the outgoing and incoming background layers. */
const FADE_DURATION_MS = 1200;

function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
}

function preloadImage(src: string): void {
  const image = new Image();
  image.src = src;
}

export default function Hero() {
  const slides = heroSlideshowImages;
  const slideCount = slides.length;
  const prefersReducedMotion = usePrefersReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);
  const [incomingIndex, setIncomingIndex] = useState<number | null>(null);
  const [incomingVisible, setIncomingVisible] = useState(false);

  const activeIndexRef = useRef(0);
  const isTransitioningRef = useRef(false);

  // Keep the next slide warm in the browser cache to avoid blank frames.
  useEffect(() => {
    if (slideCount < 2) return;
    const nextIndex = (activeIndex + 1) % slideCount;
    preloadImage(slides[nextIndex]);
  }, [activeIndex, slideCount, slides]);

  useEffect(() => {
    if (prefersReducedMotion || slideCount < 2) return;

    let cancelled = false;
    let displayTimeoutId: number | undefined;
    let fadeTimeoutId: number | undefined;
    let rafId: number | undefined;

    const clearPending = () => {
      if (displayTimeoutId !== undefined) window.clearTimeout(displayTimeoutId);
      if (fadeTimeoutId !== undefined) window.clearTimeout(fadeTimeoutId);
      if (rafId !== undefined) window.cancelAnimationFrame(rafId);
    };

    const scheduleNextSlide = () => {
      displayTimeoutId = window.setTimeout(() => {
        if (cancelled || isTransitioningRef.current) return;

        const currentIndex = activeIndexRef.current;
        const nextIndex = (currentIndex + 1) % slideCount;

        isTransitioningRef.current = true;
        setIncomingIndex(nextIndex);
        setIncomingVisible(false);

        // Double rAF ensures the incoming layer mounts at opacity 0 before fading in.
        rafId = window.requestAnimationFrame(() => {
          rafId = window.requestAnimationFrame(() => {
            if (cancelled) return;
            setIncomingVisible(true);
          });
        });

        fadeTimeoutId = window.setTimeout(() => {
          if (cancelled) return;

          activeIndexRef.current = nextIndex;
          setActiveIndex(nextIndex);
          setIncomingIndex(null);
          setIncomingVisible(false);
          isTransitioningRef.current = false;
          scheduleNextSlide();
        }, FADE_DURATION_MS);
      }, SLIDE_INTERVAL_MS);
    };

    scheduleNextSlide();

    return () => {
      cancelled = true;
      isTransitioningRef.current = false;
      clearPending();
    };
  }, [prefersReducedMotion, slideCount]);

  const activeSlide = slides[activeIndex] ?? "";
  const incomingSlide =
    incomingIndex !== null ? (slides[incomingIndex] ?? "") : "";

  return (
    <section className="relative flex min-h-[90vh] flex-col justify-between overflow-hidden bg-forest-dark">
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 scale-[1.02] bg-cover bg-center bg-no-repeat opacity-85"
          style={{ backgroundImage: activeSlide ? `url(${activeSlide})` : undefined }}
        />
        {incomingIndex !== null && incomingSlide ? (
          <div
            className={`absolute inset-0 scale-[1.02] bg-cover bg-center bg-no-repeat transition-opacity ease-in-out ${
              incomingVisible ? "opacity-85" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${incomingSlide})`,
              transitionDuration: `${FADE_DURATION_MS}ms`,
            }}
          />
        ) : null}
      </div>
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
