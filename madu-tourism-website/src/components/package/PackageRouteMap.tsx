import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  SRI_LANKA_LAND_PATHS,
  SRI_LANKA_VIEWBOX,
} from "../../data/sriLankaLandPaths";
import { useInView } from "../../hooks/useInView";
import {
  buildSoftRoutePathD,
  projectLatLngToSvg,
  type SvgPoint,
} from "../../lib/sriLankaProjection";
import type { PackageRouteStop } from "../../types/PackageDetail";

interface PackageRouteMapProps {
  stops: PackageRouteStop[];
  title: string;
}

interface ProjectedStop extends PackageRouteStop {
  point: SvgPoint;
  order: number;
}

interface TooltipState {
  stop: ProjectedStop;
  anchorX: number;
  anchorY: number;
}

const MARKER_RADIUS = 14;
const DRAW_DURATION = 1.65;
const TRAVELER_DURATION = 2.4;

function getPathLength(path: SVGPathElement | null): number {
  if (!path) return 0;
  try {
    return path.getTotalLength();
  } catch {
    return 0;
  }
}

/** Straight-line length estimate used until the SVG path can be measured. */
function estimateRouteLength(points: readonly SvgPoint[]): number {
  if (points.length < 2) return 0;
  let length = 0;
  for (let i = 1; i < points.length; i += 1) {
    const dx = points[i].x - points[i - 1].x;
    const dy = points[i].y - points[i - 1].y;
    length += Math.hypot(dx, dy);
  }
  return length * 1.08;
}

export default function PackageRouteMap({ stops, title }: PackageRouteMapProps) {
  const reactId = useId();
  const gradientId = `pkg-route-grad-${reactId.replace(/:/g, "")}`;
  const glowId = `pkg-route-glow-${reactId.replace(/:/g, "")}`;
  const pathRef = useRef<SVGPathElement | null>(null);
  const [containerRef, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = Boolean(prefersReducedMotion);

  const [measuredLength, setMeasuredLength] = useState(0);
  const [activeStopId, setActiveStopId] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  const projectedStops = useMemo<ProjectedStop[]>(
    () =>
      stops.map((stop, index) => ({
        ...stop,
        order: index + 1,
        point: projectLatLngToSvg({ lat: stop.lat, lng: stop.lng }),
      })),
    [stops],
  );

  const routePoints = useMemo(
    () => projectedStops.map((stop) => stop.point),
    [projectedStops],
  );

  const routePathD = useMemo(
    () => buildSoftRoutePathD(routePoints),
    [routePoints],
  );

  const hasRoute = projectedStops.length >= 2;
  const estimatedLength = useMemo(
    () => estimateRouteLength(routePoints),
    [routePoints],
  );
  const pathLength = measuredLength > 0 ? measuredLength : estimatedLength;
  const drawn = isInView && (!hasRoute || pathLength > 0);

  const travelerX = useSpring(0, { stiffness: 120, damping: 22 });
  const travelerY = useSpring(0, { stiffness: 120, damping: 22 });

  const assignPathRef = useCallback((node: SVGPathElement | null) => {
    pathRef.current = node;
    if (!node) return;
    window.requestAnimationFrame(() => {
      const length = getPathLength(node);
      setMeasuredLength(length);
    });
  }, []);

  useEffect(() => {
    if (!drawn || !hasRoute || !pathRef.current || pathLength <= 0) return;

    const path = pathRef.current;

    if (reduceMotion) {
      const end = path.getPointAtLength(Math.min(pathLength, path.getTotalLength()));
      travelerX.jump(end.x);
      travelerY.jump(end.y);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const delayMs = DRAW_DURATION * 0.35 * 1000;
    const total = path.getTotalLength() || pathLength;

    const startPoint = path.getPointAtLength(0);
    travelerX.jump(startPoint.x);
    travelerY.jump(startPoint.y);

    const animate = (now: number) => {
      const elapsed = Math.max(0, now - start - delayMs) / 1000;
      const t = Math.min(1, elapsed / TRAVELER_DURATION);
      const eased = 1 - (1 - t) ** 3;
      const point = path.getPointAtLength(total * eased);
      travelerX.set(point.x);
      travelerY.set(point.y);
      if (t < 1) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, [drawn, hasRoute, pathLength, reduceMotion, travelerX, travelerY]);

  const openTooltip = useCallback((stop: ProjectedStop) => {
    setActiveStopId(stop.id);
    setTooltip({
      stop,
      anchorX: stop.point.x,
      anchorY: stop.point.y,
    });
  }, []);

  const closeTooltip = useCallback(() => {
    setActiveStopId(null);
    setTooltip(null);
  }, []);

  const handleMarkerActivate = useCallback(
    (stop: ProjectedStop) => {
      if (activeStopId === stop.id) {
        closeTooltip();
        return;
      }
      openTooltip(stop);
    },
    [activeStopId, closeTooltip, openTooltip],
  );

  const handleMarkerKeyDown = useCallback(
    (event: KeyboardEvent<SVGGElement>, stop: ProjectedStop) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleMarkerActivate(stop);
      } else if (event.key === "Escape") {
        closeTooltip();
      }
    },
    [closeTooltip, handleMarkerActivate],
  );

  const handlePointerLeaveMap = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (event.pointerType === "touch") return;
      closeTooltip();
    },
    [closeTooltip],
  );

  if (projectedStops.length === 0) {
    return (
      <div className="pkg-route-map pkg-route-map--empty" role="status">
        <p className="pkg-route-map__fallback">
          Route map unavailable for this journey. Destinations will appear here
          once the itinerary is confirmed.
        </p>
      </div>
    );
  }

  return (
    <div
      className="pkg-route-map-shell"
      onPointerLeave={handlePointerLeaveMap}
      ref={containerRef}
    >
      <svg
        aria-label={`Journey route map for ${title}`}
        className="pkg-route-map"
        role="img"
        viewBox={SRI_LANKA_VIEWBOX}
      >
        <title>{title}</title>
        <desc>
          Accurate geographic map of Sri Lanka showing the curated travel route
          for {title}. Map outline derived from Natural Earth data.
        </desc>

        <defs>
          <linearGradient id={gradientId} x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="var(--pkg-forest)" stopOpacity="0.55" />
            <stop
              offset="100%"
              stopColor="var(--pkg-tropical)"
              stopOpacity="0.9"
            />
          </linearGradient>
          <filter id={glowId} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur result="blur" stdDeviation="6" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect
          className="pkg-route-map__ocean"
          height="1838"
          width="1200"
          x="0"
          y="0"
        />

        <g aria-hidden="true" className="pkg-route-map__land">
          {SRI_LANKA_LAND_PATHS.map((d, index) => (
            <path d={d} key={`land-${index}`} />
          ))}
        </g>

        {hasRoute ? (
          <>
            <path className="pkg-route-map__path-track" d={routePathD} />
            <motion.path
              animate={{
                strokeDashoffset:
                  (drawn || reduceMotion) && pathLength > 0
                    ? 0
                    : Math.max(pathLength, 1),
                opacity: drawn || reduceMotion ? 1 : 0.2,
              }}
              className="pkg-route-map__path"
              d={routePathD}
              initial={false}
              ref={assignPathRef}
              stroke={`url(#${gradientId})`}
              style={{
                strokeDasharray: Math.max(pathLength, 1),
              }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: DRAW_DURATION, ease: [0.22, 1, 0.36, 1] }
              }
            />
          </>
        ) : null}

        {drawn && hasRoute && !reduceMotion ? (
          <motion.circle
            aria-hidden="true"
            className="pkg-route-map__traveler"
            r={9}
            style={{ cx: travelerX, cy: travelerY }}
          />
        ) : null}

        {projectedStops.map((stop, index) => {
          const isActive = activeStopId === stop.id;
          const labelAbove = stop.point.y > 1450;
          const labelY = labelAbove ? stop.point.y - 38 : stop.point.y + 42;

          return (
            <motion.g
              aria-label={`${stop.order}. ${stop.name}${
                stop.description ? ` — ${stop.description}` : ""
              }`}
              className={`pkg-route-map__stop${isActive ? " is-active" : ""}`}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.6 }}
              animate={
                drawn || reduceMotion
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.6 }
              }
              key={stop.id}
              onBlur={closeTooltip}
              onFocus={() => openTooltip(stop)}
              onKeyDown={(event) => handleMarkerKeyDown(event, stop)}
              onPointerDown={(event) => {
                event.preventDefault();
                handleMarkerActivate(stop);
              }}
              onPointerEnter={(event) => {
                if (event.pointerType === "touch") return;
                openTooltip(stop);
              }}
              role="button"
              style={{ transformOrigin: `${stop.point.x}px ${stop.point.y}px` }}
              tabIndex={0}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      delay: 0.35 + index * 0.12,
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }
              }
              whileHover={reduceMotion ? undefined : { scale: 1.12 }}
              whileTap={reduceMotion ? undefined : { scale: 1.06 }}
            >
              <circle
                className="pkg-route-map__stop-hit"
                cx={stop.point.x}
                cy={stop.point.y}
                r={MARKER_RADIUS * 2.2}
              />
              <circle
                className="pkg-route-map__stop-pulse"
                cx={stop.point.x}
                cy={stop.point.y}
                filter={isActive ? `url(#${glowId})` : undefined}
                r={MARKER_RADIUS + 10}
              />
              <circle
                className="pkg-route-map__stop-ring"
                cx={stop.point.x}
                cy={stop.point.y}
                r={MARKER_RADIUS}
              />
              <circle
                className="pkg-route-map__stop-dot"
                cx={stop.point.x}
                cy={stop.point.y}
                r={MARKER_RADIUS - 3}
              />
              <text
                className="pkg-route-map__stop-order"
                dominantBaseline="central"
                textAnchor="middle"
                x={stop.point.x}
                y={stop.point.y + 1}
              >
                {stop.order}
              </text>
              <text
                className="pkg-route-map__label"
                textAnchor="middle"
                x={stop.point.x}
                y={labelY}
              >
                {stop.name}
              </text>
            </motion.g>
          );
        })}
      </svg>

      <AnimatePresence>
        {tooltip ? (
          <motion.div
            animate={{ opacity: 1, y: 0, scale: 1 }}
            aria-hidden="true"
            className="pkg-route-map__tooltip"
            exit={reduceMotion ? undefined : { opacity: 0, y: 4, scale: 0.96 }}
            initial={reduceMotion ? false : { opacity: 0, y: 6, scale: 0.96 }}
            key={tooltip.stop.id}
            style={{
              left: `${(tooltip.anchorX / 1200) * 100}%`,
              top: `${(tooltip.anchorY / 1838) * 100}%`,
            }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          >
            <span className="pkg-route-map__tooltip-order">
              Stop {tooltip.stop.order}
            </span>
            <strong className="pkg-route-map__tooltip-name">
              {tooltip.stop.name}
            </strong>
            {tooltip.stop.description ? (
              <span className="pkg-route-map__tooltip-desc">
                {tooltip.stop.description}
              </span>
            ) : null}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <ol className="pkg-route-map__legend">
        {projectedStops.map((stop) => (
          <li key={stop.id}>
            <button
              aria-pressed={activeStopId === stop.id}
              className={`pkg-route-map__legend-btn${
                activeStopId === stop.id ? " is-active" : ""
              }`}
              onClick={() => handleMarkerActivate(stop)}
              type="button"
            >
              <span className="pkg-route-map__legend-index">{stop.order}</span>
              <span className="pkg-route-map__legend-label">{stop.name}</span>
            </button>
          </li>
        ))}
      </ol>

    </div>
  );
}
