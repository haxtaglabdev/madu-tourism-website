/**
 * Shared geographic destinations used by package route maps.
 * Coordinates are WGS84 decimal degrees. Edit package routeStops in
 * packageDetails.ts to choose which destinations appear (and in what order).
 */

import type { PackageRouteStop } from "../types/PackageDetail";

export interface RouteDestination {
  id: string;
  name: string;
  lat: number;
  lng: number;
  description?: string;
}

export const ROUTE_DESTINATIONS = {
  colombo: {
    id: "colombo",
    name: "Colombo",
    lat: 6.9271,
    lng: 79.8612,
    description: "Commercial capital & gateway",
  },
  sigiriya: {
    id: "sigiriya",
    name: "Sigiriya",
    lat: 7.957,
    lng: 80.7603,
    description: "Ancient rock fortress",
  },
  minneriya: {
    id: "minneriya",
    name: "Minneriya",
    lat: 8.035,
    lng: 80.905,
    description: "Elephant gathering sanctuary",
  },
  kandy: {
    id: "kandy",
    name: "Kandy",
    lat: 7.2906,
    lng: 80.6337,
    description: "Sacred hill capital",
  },
  nuwaraEliya: {
    id: "nuwara-eliya",
    name: "Nuwara Eliya",
    lat: 6.9497,
    lng: 80.7891,
    description: "Highland tea country",
  },
  ella: {
    id: "ella",
    name: "Ella",
    lat: 6.8667,
    lng: 81.0466,
    description: "Mountain village & viewpoints",
  },
  yala: {
    id: "yala",
    name: "Yala National Park",
    lat: 6.472,
    lng: 81.472,
    description: "Leopard & wildlife safari",
  },
  weligama: {
    id: "weligama",
    name: "Weligama",
    lat: 5.9739,
    lng: 80.4297,
    description: "Bay & surf coast",
  },
  mirissa: {
    id: "mirissa",
    name: "Mirissa",
    lat: 5.9483,
    lng: 80.4589,
    description: "Whale watching & shores",
  },
} as const satisfies Record<string, RouteDestination>;

export type RouteDestinationKey = keyof typeof ROUTE_DESTINATIONS;

/** Resolve ordered package stops from the shared destination catalog. */
export function buildRouteStops(
  keys: readonly RouteDestinationKey[],
): PackageRouteStop[] {
  return keys.map((key) => {
    const destination = ROUTE_DESTINATIONS[key];
    return {
      id: destination.id,
      name: destination.name,
      lat: destination.lat,
      lng: destination.lng,
      description: destination.description,
    };
  });
}
