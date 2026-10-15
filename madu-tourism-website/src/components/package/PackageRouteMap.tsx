import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  useCallback,
  useId,
  useMemo,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  SRI_LANKA_LAND_PATHS,
  SRI_LANKA_VIEWBOX,
  SRI_LANKA_VIEWBOX_RECT,
} from "../../data/sriLankaLandPaths";
import { useInView } from "../../hooks/useInView";
import {
  buildRouteSegments,
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

interface LabelPosition {
  x: number;
  y: number;
  textAnchor: "start" | "middle" | "end";
}

const MARKER_RADIUS = 20;
const START_DELAY = 0.35;
const SEGMENT_DURATION = 0.85;
const MARKER_POP_DURATION = 0.45;

/** Smart, collision-free label positioning tailored to Sri Lanka's geography */
function getDestinationLabelPosition(stop: ProjectedStop): LabelPosition {
  const { x, y } = stop.point;
  switch (stop.id) {
    case "colombo":
      // Out into the western ocean — clear of all inland route lines
      return { x: x - 30, y: y + 8, textAnchor: "end" };
    case "sigiriya":
      return { x: x - 28, y: y + 7, textAnchor: "end" };
    case "dambulla":
      return { x: x - 28, y: y + 16, textAnchor: "end" };
    case "hiriwadunna":
    case "habarana":
    case "minneriya":
      return { x: x + 28, y: y - 6, textAnchor: "start" };
    case "matale":
      return { x: x - 28, y: y - 6, textAnchor: "end" };
    case "kandy":
      return { x: x - 28, y: y + 8, textAnchor: "end" };
    case "peradeniya":
      return { x: x + 28, y: y + 16, textAnchor: "start" };
    case "nuwara-eliya":
    case "nuwaraEliya":
      return { x: x + 28, y: y + 7, textAnchor: "start" };
    case "ramboda":
      return { x: x - 28, y: y + 8, textAnchor: "end" };
    case "ella":
      return { x: x + 28, y: y + 7, textAnchor: "start" };
    case "yala":
      return { x: x + 28, y: y + 8, textAnchor: "start" };
    case "galle":
      return { x: x - 28, y: y + 8, textAnchor: "end" };
    case "bentota":
    case "kosgoda":
      return { x: x - 28, y: y + 4, textAnchor: "end" };
    case "weligama":
      return { x: x - 26, y: y - 8, textAnchor: "end" };
    case "mirissa":
      return { x: x + 26, y: y + 24, textAnchor: "start" };
    default: {
      const isSouth = y > 1500;
      return {
        x,
        y: isSouth ? y - 36 : y + 42,
        textAnchor: "middle",
      };
    }
  }
}

export default function PackageRouteMap({ stops, title }: PackageRouteMapProps) {
  const reactId = useId();
  const safeId = reactId.replace(/:/g, "");
  const gradientId = `pkg-route-grad-${safeId}`;
  const glowId = `pkg-route-glow-${safeId}`;
  const landShadowId = `pkg-land-shadow-${safeId}`;
  const routeShadowId = `pkg-route-shadow-${safeId}`;

  const [containerRef, isInView] = useInView<HTMLDivElement>({
    threshold: 0.15,
    once: true,
  });
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = Boolean(prefersReducedMotion);

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

  const routeSegments = useMemo(
    () => buildRouteSegments(routePoints),
    [routePoints],
  );

  const hasRoute = projectedStops.length >= 2;
  const drawn = isInView;

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
      <div className="pkg-route-map__canvas-wrap">
        <svg
          aria-label={`Journey route map for ${title}`}
          className="pkg-route-map"
          role="img"
          viewBox={SRI_LANKA_VIEWBOX}
        >
        <title>{title}</title>
        <desc>
          Geographic map of Sri Lanka illustrating the travel route for {title}.
          Features sequential route drawing and prominent destination landmarks.
        </desc>

        <defs>
          {/* Brand-aligned rich emerald-to-orange gradient */}
          <linearGradient id={gradientId} x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="var(--pkg-tropical)" stopOpacity="0.95" />
            <stop offset="50%" stopColor="var(--pkg-forest)" stopOpacity="0.98" />
            <stop offset="100%" stopColor="var(--pkg-orange)" stopOpacity="1" />
          </linearGradient>

          {/* Island ambient depth shadow to make Sri Lanka visually pop */}
          <filter id={landShadowId} x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow
              dx="0"
              dy="8"
              floodColor="#00241a"
              floodOpacity="0.14"
              stdDeviation="12"
            />
          </filter>

          {/* Marker luminous glow */}
          <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur result="blur" stdDeviation="6" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Route path subtle depth shadow */}
          <filter id={routeShadowId} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="3"
              floodColor="#003d2c"
              floodOpacity="0.3"
              stdDeviation="4"
            />
          </filter>
        </defs>

        {/* Ocean Background Canvas */}
        <rect
          className="pkg-route-map__ocean"
          height={SRI_LANKA_VIEWBOX_RECT.height}
          rx={16}
          ry={16}
          width={SRI_LANKA_VIEWBOX_RECT.width}
          x={SRI_LANKA_VIEWBOX_RECT.x}
          y={SRI_LANKA_VIEWBOX_RECT.y}
        />

        {/* Sri Lanka Landmass with Depth Shadow */}
        <g
          aria-hidden="true"
          className="pkg-route-map__land"
          filter={`url(#${landShadowId})`}
        >
          {SRI_LANKA_LAND_PATHS.map((d, index) => (
            <path d={d} key={`land-${index}`} />
          ))}
        </g>

        {/* Route Lines */}
        {hasRoute ? (
          <>
            {/* Subtle roadmap guide track underneath */}
            <path className="pkg-route-map__path-track" d={routePathD} />

            {/* Individual Sequential Path Segments */}
            {routeSegments.map((segment) => {
              const segmentDelay = START_DELAY + segment.index * SEGMENT_DURATION;
              return (
                <motion.path
                  animate={
                    drawn || reduceMotion
                      ? { pathLength: 1, opacity: 1 }
                      : { pathLength: 0, opacity: 0 }
                  }
                  className="pkg-route-map__path"
                  d={segment.d}
                  filter={`url(#${routeShadowId})`}
                  initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
                  key={`seg-${segment.index}`}
                  stroke={`url(#${gradientId})`}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : {
                          pathLength: {
                            delay: segmentDelay,
                            duration: SEGMENT_DURATION,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: {
                            delay: segmentDelay,
                            duration: 0.05,
                          },
                        }
                  }
                />
              );
            })}
          </>
        ) : null}

        {/* Destination Markers */}
        {projectedStops.map((stop, index) => {
          const isActive = activeStopId === stop.id;
          const labelPos = getDestinationLabelPosition(stop);
          const arrivalDelay =
            index === 0
              ? START_DELAY
              : START_DELAY + index * SEGMENT_DURATION;

          return (
            <motion.g
              animate={
                drawn || reduceMotion
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.55 }
              }
              aria-label={`${stop.order}. ${stop.name}${
                stop.description ? ` — ${stop.description}` : ""
              }`}
              className={`pkg-route-map__stop${isActive ? " is-active" : ""}`}
              id={`pkg-marker-${stop.id}`}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.55 }}
              key={stop.id}
              onBlur={closeTooltip}
              onClick={(event) => {
                event.stopPropagation();
                handleMarkerActivate(stop);
              }}
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
                      delay: arrivalDelay,
                      duration: MARKER_POP_DURATION,
                      ease: [0.34, 1.56, 0.64, 1],
                    }
              }
              whileHover={reduceMotion ? undefined : { scale: 1.12 }}
              whileTap={reduceMotion ? undefined : { scale: 1.06 }}
            >
              {/* Generous touch/pointer target area */}
              <circle
                className="pkg-route-map__stop-hit"
                cx={stop.point.x}
                cy={stop.point.y}
                r={MARKER_RADIUS * 2.2}
              />

              {/* Dynamic Arrival Ripple Highlight: pulses outward as route reaches stop */}
              {!reduceMotion && drawn ? (
                <motion.circle
                  animate={{
                    r: [MARKER_RADIUS, MARKER_RADIUS + 20, MARKER_RADIUS + 6],
                    opacity: [0, 0.95, 0],
                  }}
                  className="pkg-route-map__stop-arrival-pulse"
                  cx={stop.point.x}
                  cy={stop.point.y}
                  initial={{ r: MARKER_RADIUS, opacity: 0 }}
                  transition={{
                    delay: arrivalDelay,
                    duration: 0.85,
                    ease: "easeOut",
                  }}
                />
              ) : null}

              {/* Persistent hover/active glow ring */}
              <circle
                className="pkg-route-map__stop-pulse"
                cx={stop.point.x}
                cy={stop.point.y}
                filter={isActive ? `url(#${glowId})` : undefined}
                r={MARKER_RADIUS + 10}
              />

              {/* High-visibility white backdrop ring with shadow */}
              <circle
                className="pkg-route-map__stop-ring"
                cx={stop.point.x}
                cy={stop.point.y}
                r={MARKER_RADIUS + 2.5}
              />

              {/* Brand Orange Core Marker */}
              <circle
                className="pkg-route-map__stop-dot"
                cx={stop.point.x}
                cy={stop.point.y}
                r={MARKER_RADIUS}
              />

              {/* High-contrast bold order number */}
              <text
                className="pkg-route-map__stop-order"
                dominantBaseline="central"
                textAnchor="middle"
                x={stop.point.x}
                y={stop.point.y + 1}
              >
                {stop.order}
              </text>

              {/* Crisp, prominent destination label with white halo */}
              <text
                className="pkg-route-map__label"
                textAnchor={labelPos.textAnchor}
                x={labelPos.x}
                y={labelPos.y}
              >
                {stop.name}
              </text>
            </motion.g>
          );
        })}
      </svg>

      {/* Floating Destination Tooltip */}
      <AnimatePresence>
        {tooltip ? (() => {
          const leftPercent =
            ((tooltip.anchorX - SRI_LANKA_VIEWBOX_RECT.x) /
              SRI_LANKA_VIEWBOX_RECT.width) *
            100;
          const topPercent =
            ((tooltip.anchorY - SRI_LANKA_VIEWBOX_RECT.y) /
              SRI_LANKA_VIEWBOX_RECT.height) *
            100;
          const translateX =
            leftPercent < 22 ? "-12%" : leftPercent > 78 ? "-88%" : "-50%";
          const translateY = "calc(-100% - 22px)";

          return (
            <motion.div
              animate={{ opacity: 1, y: 0, scale: 1 }}
              aria-hidden="true"
              className="pkg-route-map__tooltip"
              exit={reduceMotion ? undefined : { opacity: 0, y: 4, scale: 0.96 }}
              id="pkg-route-map-tooltip"
              initial={reduceMotion ? false : { opacity: 0, y: 6, scale: 0.96 }}
              key={tooltip.stop.id}
              style={{
                left: `${leftPercent}%`,
                top: `${topPercent}%`,
                transform: `translate(${translateX}, ${translateY})`,
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
          );
        })() : null}
      </AnimatePresence>
      </div>

      {/* Interactive Destination Legend */}
      <ol className="pkg-route-map__legend">
        {projectedStops.map((stop) => (
          <li key={stop.id}>
            <button
              aria-pressed={activeStopId === stop.id}
              className={`pkg-route-map__legend-btn${
                activeStopId === stop.id ? " is-active" : ""
              }`}
              id={`pkg-legend-btn-${stop.id}`}
              onClick={(event) => {
                event.stopPropagation();
                handleMarkerActivate(stop);
              }}
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
