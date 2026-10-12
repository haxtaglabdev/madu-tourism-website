/**
 * Equirectangular projection matching the Wikimedia / Natural Earth
 * Sri Lanka location map bounds (stretched ~101% vertically).
 *
 * Geographic limits: N 10.2°, S 5.5°, W 79.2°, E 82.3°
 * SVG viewBox: 0 0 1200 1838
 */

export const SRI_LANKA_BOUNDS = {
  north: 10.2,
  south: 5.5,
  west: 79.2,
  east: 82.3,
  width: 1200,
  height: 1838,
} as const;

export interface GeoPoint {
  lat: number;
  lng: number;
}

export interface SvgPoint {
  x: number;
  y: number;
}

export function projectLatLngToSvg({ lat, lng }: GeoPoint): SvgPoint {
  const { north, south, west, east, width, height } = SRI_LANKA_BOUNDS;
  const x = ((lng - west) / (east - west)) * width;
  const y = ((north - lat) / (north - south)) * height;
  return { x, y };
}

export function buildRoutePathD(points: readonly SvgPoint[]): string {
  if (points.length === 0) return "";
  const [first, ...rest] = points;
  return `M ${first.x.toFixed(2)} ${first.y.toFixed(2)} ${rest
    .map((p) => `L ${p.x.toFixed(2)} ${p.y.toFixed(2)}`)
    .join(" ")}`;
}

/** Light mid-point curve between stops — keeps geographic order readable. */
export function buildSoftRoutePathD(points: readonly SvgPoint[]): string {
  if (points.length < 3) return buildRoutePathD(points);

  let d = `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)}`;
  for (let i = 1; i < points.length - 1; i += 1) {
    const previous = points[i - 1];
    const current = points[i];
    const next = points[i + 1];
    const c1x = previous.x + (current.x - previous.x) * 0.55;
    const c1y = previous.y + (current.y - previous.y) * 0.55;
    const c2x = current.x - (next.x - previous.x) * 0.12;
    const c2y = current.y - (next.y - previous.y) * 0.12;
    d += ` C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${current.x.toFixed(2)} ${current.y.toFixed(2)}`;
  }
  const last = points[points.length - 1];
  const prev = points[points.length - 2];
  const c1x = prev.x + (last.x - prev.x) * 0.55;
  const c1y = prev.y + (last.y - prev.y) * 0.55;
  d += ` C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${last.x.toFixed(2)} ${last.y.toFixed(2)}, ${last.x.toFixed(2)} ${last.y.toFixed(2)}`;
  return d;
}
