import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import type { PackageDetail } from "../../types/PackageDetail";
import Reveal, { RevealGroup } from "../ui/Reveal";
import PackageItinerary from "./PackageItinerary";
import PackageRouteMap from "./PackageRouteMap";
import "../../styles/packageDetail.css";

interface PackageDetailViewProps {
  pkg: PackageDetail;
}

function inquiryPath(title: string) {
  return `/contact?package=${encodeURIComponent(title)}`;
}

export default function PackageDetailView({ pkg }: PackageDetailViewProps) {
  const planTo = inquiryPath(pkg.title);

  return (
    <div className="pkg-detail">
      <section className="pkg-hero" aria-label={`${pkg.title} hero`}>
        <div className="pkg-hero__media" aria-hidden="true">
          <img alt="" src={pkg.heroImage} />
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
                Plan This Journey
                <span aria-hidden="true">→</span>
              </Link>
              <a className="pkg-hero__itinerary-link" href="#itinerary">
                View Full Itinerary
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
                <dl className="pkg-stats">
                  {pkg.stats.map((stat) => (
                    <div key={stat.label} className="pkg-stats__item">
                      <dt className="pkg-stats__value">{stat.value}</dt>
                      <dd className="pkg-stats__label">{stat.label}</dd>
                    </div>
                  ))}
                </dl>
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
                  path={pkg.routePath}
                  stops={pkg.routeStops}
                  title={pkg.routeHeading}
                />
                <p className="pkg-map-panel__desc">{pkg.routeDescription}</p>
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
                  <img alt={experience.imageAlt} src={experience.image} />
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
                Plan This Journey
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
