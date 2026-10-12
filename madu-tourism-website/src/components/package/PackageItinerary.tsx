import { useId, useState } from "react";
import type { PackageItineraryDay } from "../../types/PackageDetail";

interface PackageItineraryProps {
  label: string;
  days: PackageItineraryDay[];
}

export default function PackageItinerary({
  label,
  days,
}: PackageItineraryProps) {
  const baseId = useId();
  const [openDays, setOpenDays] = useState<Set<number>>(() => new Set([1]));

  const toggleDay = (day: number) => {
    setOpenDays((prev) => {
      const next = new Set(prev);
      if (next.has(day)) next.delete(day);
      else next.add(day);
      return next;
    });
  };

  return (
    <section className="pkg-itinerary" id="itinerary">
      <div className="pkg-detail__container">
        <header className="pkg-itinerary__header">
          <p className="pkg-eyebrow">{label}</p>
          <h2 className="pkg-itinerary__title">Itinerary</h2>
          <div aria-hidden="true" className="pkg-itinerary__rule" />
        </header>

        <div className="pkg-itinerary__list">
          {days.map((item) => {
            const isOpen = openDays.has(item.day);
            const panelId = `${baseId}-day-${item.day}-panel`;
            const buttonId = `${baseId}-day-${item.day}-button`;

            return (
              <article
                key={item.day}
                className="pkg-day"
                data-open={isOpen ? "true" : "false"}
              >
                <h3>
                  <button
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    className="pkg-day__toggle"
                    id={buttonId}
                    onClick={() => toggleDay(item.day)}
                    type="button"
                  >
                    <span className="pkg-day__number">Day {item.day}</span>
                    <span>
                      <span className="pkg-day__route">{item.route}</span>
                      <span className="pkg-day__title">{item.title}</span>
                    </span>
                    <span aria-hidden="true" className="pkg-day__icon">
                      +
                    </span>
                  </button>
                </h3>
                <div className="pkg-day__body">
                  <div className="pkg-day__body-inner">
                    <div
                      aria-hidden={!isOpen}
                      aria-labelledby={buttonId}
                      className="pkg-day__content"
                      id={panelId}
                      role="region"
                    >
                      <p>{item.description}</p>
                      <p className="pkg-day__highlights-label">Highlights</p>
                      <ul className="pkg-day__highlights">
                        {item.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
