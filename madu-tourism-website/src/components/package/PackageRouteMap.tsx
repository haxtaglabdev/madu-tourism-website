import { useEffect, useRef, useState } from "react";
import type { PackageRouteStop } from "../../types/PackageDetail";
import { useInView } from "../../hooks/useInView";

interface PackageRouteMapProps {
  stops: PackageRouteStop[];
  path: string;
  title: string;
}

/** Simplified Sri Lanka silhouette for decorative route illustration. */
const ISLAND_PATH =
  "M48 8 C58 10 68 16 72 28 C76 40 78 52 74 64 C70 78 62 88 50 94 C38 98 28 94 22 84 C14 72 12 58 14 44 C16 30 24 16 36 10 C40 8 44 7 48 8 Z";

export default function PackageRouteMap({
  stops,
  path,
  title,
}: PackageRouteMapProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.25 });
  const [drawn, setDrawn] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    if (isInView && !startedRef.current) {
      startedRef.current = true;
      setDrawn(true);
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <svg
        aria-label={`Illustrated journey route: ${title}`}
        className="pkg-route-map"
        role="img"
        viewBox="0 0 100 100"
      >
        <title>{title}</title>
        <path className="pkg-route-map__island" d={ISLAND_PATH} />
        <polyline
          className={`pkg-route-map__path${drawn ? " pkg-route-map__path--draw" : ""}`}
          points={path}
        />
        {stops.map((stop) => {
          const labelAbove = stop.y > 70;
          return (
            <g key={stop.id}>
              <circle
                className="pkg-route-map__stop-ring"
                cx={stop.x}
                cy={stop.y}
                r={3.2}
              />
              <circle
                className="pkg-route-map__stop-dot"
                cx={stop.x}
                cy={stop.y}
                r={1.6}
              />
              <text
                className="pkg-route-map__label"
                textAnchor="middle"
                x={stop.x}
                y={labelAbove ? stop.y - 4.5 : stop.y + 6.5}
              >
                {stop.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
