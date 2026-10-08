import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { heroSlideshowImages } from "../../assets";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

/** How long each slide stays fully visible before the next cross-fade begins. */
const SLIDE_INTERVAL_MS = 5000;

/** Cross-fade duration between the outgoing and incoming background layers. */
const FADE_DURATION_MS = 1200;

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
    <section className="relative flex min-h-[85vh] flex-col justify-between overflow-hidden bg-forest-dark sm:min-h-[90vh]">
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 scale-[1.02] bg-cover bg-[center_30%] bg-no-repeat opacity-85 sm:bg-center"
          style={{ backgroundImage: activeSlide ? `url(${activeSlide})` : undefined }}
        />
        {incomingIndex !== null && incomingSlide ? (
          <div
            className={`absolute inset-0 scale-[1.02] bg-cover bg-[center_30%] bg-no-repeat transition-opacity ease-in-out sm:bg-center ${
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

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 pt-20 pb-14 sm:px-6 sm:pt-24 sm:pb-16 md:pt-32">
        <div className="max-w-3xl">
          <div
            className="hero-enter mb-5 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] tracking-[0.14em] text-white uppercase backdrop-blur-md sm:mb-6 sm:gap-2.5 sm:px-3.5 sm:text-xs sm:tracking-[0.16em]"
            style={{ ["--hero-delay" as string]: "0ms" }}
          >
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-gold" />
            Authentic Sri Lanka • Tailor-Made Journeys
          </div>
          <h1
            className="hero-enter mb-5 font-serif text-[2rem] leading-[1.08] font-medium tracking-tight text-white sm:mb-6 sm:text-6xl lg:text-7xl"
            style={{ ["--hero-delay" as string]: "100ms" }}
          >
            Discover the Pearl of the{" "}
            <span className="font-normal text-gold italic">Indian Ocean</span>
          </h1>
          <p
            className="hero-enter mb-8 max-w-2xl text-sm leading-relaxed font-light text-white/80 sm:mb-10 sm:text-lg"
            style={{ ["--hero-delay" as string]: "180ms" }}
          >
            Immerse yourself in UNESCO rock citadels, mist-shrouded Ceylon tea
            highlands, and wild leopard reserves with private
            chauffeur-naturalists dedicated solely to your journey.
          </p>
          <div
            className="hero-enter flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            style={{ ["--hero-delay" as string]: "260ms" }}
          >
            <Link
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-[13px] font-medium tracking-wide text-white backdrop-blur-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:bg-white/20"
              to="/tour-packages"
            >
              <span>Explore All Tourse</span>
              <span className="material-symbols-outlined text-sm transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5">
                arrow_forward
              </span>
            </Link>
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
