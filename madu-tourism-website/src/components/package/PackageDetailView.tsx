import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import type { PackageDetail } from "../../types/PackageDetail";
import Reveal, { RevealGroup } from "../ui/Reveal";
import PackageItinerary from "./PackageItinerary";
import PackageRouteMap from "./PackageRouteMap";
import { useCurrentLanguage } from "../../i18n/useCurrentLanguage";
import "../../styles/packageDetail.css";

interface PackageDetailViewProps {
  pkg: PackageDetail;
}

export default function PackageDetailView({ pkg }: PackageDetailViewProps) {
  const { currentLang, getLocalizedPath } = useCurrentLanguage();
  const planTo = getLocalizedPath(`/contact?package=${encodeURIComponent(pkg.title)}`);
  const isRu = currentLang === "ru";

  return (
    <div className="pkg-detail">
      <section className="pkg-hero" aria-label={`${pkg.title} hero`}>
        <div className="pkg-hero__media">
          <img
            alt={pkg.heroImageAlt || pkg.title}
            decoding="async"
            fetchPriority="high"
            src={pkg.heroImage}
          />
          <div className="pkg-hero__overlay" />
        </div>

        <div className="pkg-hero__content">
          <div className="pkg-hero__copy">
            <p className="pkg-hero__label">{pkg.heroLabel}</p>
            <h1 className="pkg-hero__title">{pkg.title}</h1>
            <p className="pkg-hero__desc">{pkg.heroDescription}</p>
            <div className="pkg-hero__tags">
              {pkg.heroTags.map((tag) => (
                <span key={tag} className="pkg-hero__tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <aside className="pkg-hero__panel">
            <dl className="pkg-hero__meta">
              {pkg.heroMeta.map((item) => (
                <div key={item.label} className="pkg-hero__meta-item">
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
            <div className="pkg-hero__actions">
              <Link className="pkg-btn" to={planTo}>
                {isRu ? "Забронировать тур" : "Plan This Journey"}
                <span aria-hidden="true">→</span>
              </Link>
              <a className="pkg-hero__itinerary-link" href="#itinerary">
                {isRu ? "Программа тура" : "View Full Itinerary"}
                <span aria-hidden="true" className="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="pkg-overview" aria-labelledby="pkg-overview-heading">
        <div className="pkg-detail__container">
          <div className="pkg-overview__grid">
            <Reveal>
              <div>
                <p className="pkg-eyebrow">{pkg.overviewLabel}</p>
                <h2 className="pkg-overview__heading" id="pkg-overview-heading">
                  {pkg.overviewHeading}
                </h2>
                <div className="pkg-overview__body">
                  {pkg.overviewParagraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
                <div className="pkg-glance" aria-labelledby="pkg-glance-title">
                  <div className="pkg-glance__header">
                    <span className="pkg-glance__accent" aria-hidden="true" />
                    <h3 className="pkg-glance__title" id="pkg-glance-title">
                      {isRu ? "Ваш маршрут кратко" : "Your Journey at a Glance"}
                    </h3>
                  </div>
                  <dl
                    className="pkg-glance__grid"
                    aria-label={isRu ? "Краткий обзор маршрута" : "Your journey at a glance"}
                  >
                    {pkg.stats.map((stat, index) => {
                      const fallbackIcons = [
                        "calendar_today",
                        "location_on",
                        "auto_awesome",
                        "directions_car",
                      ];
                      const icon = stat.icon || fallbackIcons[index % fallbackIcons.length];
                      return (
                        <div key={stat.label} className="pkg-glance__item">
                          <span
                            aria-hidden="true"
                            className="pkg-glance__icon material-symbols-outlined"
                          >
                            {icon}
                          </span>
                          <div className="pkg-glance__content">
                            <dt className="pkg-glance__value">{stat.value}</dt>
                            <dd className="pkg-glance__label">{stat.label}</dd>
                          </div>
                        </div>
                      );
                    })}
                  </dl>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} variant="fade-right">
              <aside className="pkg-map-panel">
                <div className="pkg-map-panel__top">
                  <div>
                    <p className="pkg-map-panel__caption">{pkg.routeCaption}</p>
                    <h3 className="pkg-map-panel__heading">{pkg.routeHeading}</h3>
                  </div>
                  <p className="pkg-map-panel__meta">{pkg.routeLabel}</p>
                </div>
                <PackageRouteMap
                  key={pkg.slug}
                  stops={pkg.routeStops}
                  title={pkg.routeHeading}
                />

              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal>
        <PackageItinerary days={pkg.itinerary} label={pkg.itineraryLabel} />
      </Reveal>

      <section
        className="pkg-experiences"
        aria-labelledby="pkg-experiences-heading"
      >
        <div className="pkg-detail__container">
          <Reveal>
            <header className="pkg-experiences__header">
              <p className="pkg-eyebrow">{pkg.experiencesLabel}</p>
              <h2
                className="pkg-experiences__title"
                id="pkg-experiences-heading"
              >
                {pkg.experiencesHeading}
              </h2>
            </header>
          </Reveal>

          <RevealGroup className="pkg-experiences__grid">
            {pkg.experiences.map((experience, index) => (
              <article
                key={experience.id}
                className={`pkg-exp pkg-exp--${experience.size} reveal-item`}
                style={{ "--reveal-index": index } as CSSProperties}
              >
                <div className="pkg-exp__media">
                  <img
                    alt={experience.imageAlt}
                    decoding="async"
                    loading="lazy"
                    src={experience.image}
                  />
                </div>
                <div className="pkg-exp__body">
                  <h3 className="pkg-exp__title">{experience.title}</h3>
                  <p className="pkg-exp__desc">{experience.description}</p>
                  <p className="pkg-exp__meta">{experience.meta}</p>
                </div>
              </article>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="pkg-cta" aria-labelledby="pkg-cta-heading">
        <div aria-hidden="true" className="pkg-cta__deco" />
        <div className="pkg-detail__container">
          <Reveal>
            <div className="pkg-cta__inner">
              <p className="pkg-eyebrow">{pkg.ctaLabel}</p>
              <h2 className="pkg-cta__heading" id="pkg-cta-heading">
                {pkg.ctaHeading}
              </h2>
              <p className="pkg-cta__desc">{pkg.ctaDescription}</p>
              <ul className="pkg-cta__features">
                {pkg.ctaFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link className="pkg-btn" to={planTo}>
                {isRu ? "Забронировать тур" : "Plan This Journey"}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
