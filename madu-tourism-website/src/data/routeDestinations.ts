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
  polonnaruwa: {
    id: "polonnaruwa",
    name: "Polonnaruwa",
    lat: 7.9403,
    lng: 81.0188,
    description: "Ancient archaeological city",
  },
  galle: {
    id: "galle",
    name: "Galle",
    lat: 6.0535,
    lng: 80.2210,
    description: "Historic colonial fort city",
  },
  jaffna: {
    id: "jaffna",
    name: "Jaffna",
    lat: 9.6615,
    lng: 80.0255,
    description: "Northern cultural capital",
  },
  trincomalee: {
    id: "trincomalee",
    name: "Trincomalee",
    lat: 8.5874,
    lng: 81.2152,
    description: "Eastern harbour & temples",
  },
  anuradhapura: {
    id: "anuradhapura",
    name: "Anuradhapura",
    lat: 8.3114,
    lng: 80.4037,
    description: "Sacred ancient capital",
  },
  dambulla: {
    id: "dambulla",
    name: "Dambulla",
    lat: 7.8742,
    lng: 80.6511,
    description: "Golden cave temple & heritage",
  },
  hiriwadunna: {
    id: "hiriwadunna",
    name: "Hiriwadunna",
    lat: 8.0183,
    lng: 80.7547,
    description: "Traditional rural village & lake",
  },
  habarana: {
    id: "habarana",
    name: "Habarana",
    lat: 8.0336,
    lng: 80.7513,
    description: "Wildlife & elephant safari sanctuary",
  },
  matale: {
    id: "matale",
    name: "Matale",
    lat: 7.4675,
    lng: 80.6234,
    description: "Historic Hindu Kovil & spices",
  },
  peradeniya: {
    id: "peradeniya",
    name: "Peradeniya",
    lat: 7.2711,
    lng: 80.5954,
    description: "Royal Botanical Gardens",
  },
  bentota: {
    id: "bentota",
    name: "Bentota",
    lat: 6.4256,
    lng: 79.9958,
    description: "River safari & golden beaches",
  },
  kosgoda: {
    id: "kosgoda",
    name: "Kosgoda",
    lat: 6.2575,
    lng: 80.0339,
    description: "Sea turtle conservation center",
  },
  ramboda: {
    id: "ramboda",
    name: "Ramboda",
    lat: 7.0544,
    lng: 80.6978,
    description: "Highland waterfall & tea valley",
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
