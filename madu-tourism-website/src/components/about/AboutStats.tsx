import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Reveal from "../ui/Reveal";

interface StatItemConfig {
  readonly id: string;
  readonly target: number;
  readonly suffix: string;
  readonly labelKey: string;
  readonly icon: string;
  readonly ariaLabelKey: string;
}

const STAT_CONFIGS: readonly StatItemConfig[] = [
  {
    id: "travelers",
    target: 500,
    suffix: "+",
    labelKey: "about.stats.travelersLabel",
    icon: "groups",
    ariaLabelKey: "about.stats.travelersAria",
  },
  {
    id: "packages",
    target: 10,
    suffix: "+",
    labelKey: "about.stats.packagesLabel",
    icon: "explore",
    ariaLabelKey: "about.stats.packagesAria",
  },
  {
    id: "excellence",
    target: 5,
    suffix: "+",
    labelKey: "about.stats.excellenceLabel",
    icon: "workspace_premium",
    ariaLabelKey: "about.stats.excellenceAria",
  },
] as const;

/** Natural cubic ease-out for smooth, elegant deceleration. */
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function AboutStats() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement | null>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || hasAnimated) return;

    // Respect user preference for reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const setFinalValues = () => {
      STAT_CONFIGS.forEach((stat, index) => {
        const el = numberRefs.current[index];
        if (el) {
          el.textContent = String(stat.target);
        }
      });
      setHasAnimated(true);
    };

    if (prefersReducedMotion) {
      setFinalValues();
      return;
    }

    let rafId: number | null = null;
    let observer: IntersectionObserver | null = null;

    observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        // Disconnect immediately: triggers only once per page visit
        observer?.disconnect();

        const duration = 1800; // 1.8 seconds duration
        let startTime: number | null = null;

        const animate = (timestamp: number) => {
          if (startTime === null) startTime = timestamp;
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = easeOutCubic(progress);

          STAT_CONFIGS.forEach((stat, index) => {
            const el = numberRefs.current[index];
            if (el) {
              const current = Math.round(eased * stat.target);
              el.textContent = String(current);
            }
          });

          if (progress < 1) {
            rafId = requestAnimationFrame(animate);
          } else {
            setFinalValues();
          }
        };

        rafId = requestAnimationFrame(animate);
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(node);

    return () => {
      if (observer) observer.disconnect();
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="about-stats-heading"
      className="relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:pb-28"
    >
      <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
        <Reveal>
          <div className="mb-2 inline-flex items-center justify-center gap-2">
            <span className="h-2 w-2 shrink-0 rounded-full bg-sunset" />
            <span className="text-xs font-semibold tracking-[0.2em] text-tropical uppercase">
              {t("about.stats.eyebrow")}
            </span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2
            id="about-stats-heading"
            className="text-center font-serif text-[1.75rem] font-medium text-charcoal sm:text-3xl md:text-4xl"
          >
            {t("about.stats.title")}
          </h2>
        </Reveal>
      </div>

      <Reveal delay={180}>
        <div className="relative overflow-hidden rounded-2xl border border-charcoal/5 bg-white p-6 shadow-[0_16px_40px_rgba(0,37,26,0.04)] sm:rounded-3xl sm:p-10 lg:p-12">
          {/* Subtle luxury ambient lighting */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-soft-mint/70 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-tropical/5 blur-3xl"
          />

          <dl className="relative z-10 grid grid-cols-1 divide-y divide-charcoal/8 md:grid-cols-3 md:divide-y-0 md:divide-x md:divide-charcoal/8">
            {STAT_CONFIGS.map((stat, index) => (
              <div
                key={stat.id}
                className="group flex flex-col items-center py-7 text-center transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] first:pt-0 last:pb-0 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:py-4 md:px-6 lg:px-10"
              >
                {/* Accessible text for screen readers */}
                <span className="sr-only">{t(stat.ariaLabelKey)}</span>

                <div aria-hidden="true" className="flex flex-col items-center w-full">
                  {/* Icon badge */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-soft-mint text-tropical shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:bg-tropical group-hover:text-white motion-reduce:group-hover:scale-100">
                    <span className="material-symbols-outlined text-2xl select-none">
                      {stat.icon}
                    </span>
                  </div>

                  {/* Animated Counter */}
                  <dd className="flex items-baseline justify-center">
                    <span
                      ref={(el) => {
                        numberRefs.current[index] = el;
                      }}
                      className="font-serif text-4xl font-medium tracking-tight text-charcoal tabular-nums sm:text-5xl lg:text-6xl"
                    >
                      {hasAnimated ? stat.target : 0}
                    </span>
                    <span className="ml-1 font-serif text-2xl font-light text-tropical select-none sm:text-3xl lg:text-4xl">
                      {stat.suffix}
                    </span>
                  </dd>

                  {/* Descriptive label */}
                  <dt className="mt-3 text-sm font-semibold tracking-wide text-charcoal sm:text-base">
                    {t(stat.labelKey)}
                  </dt>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
