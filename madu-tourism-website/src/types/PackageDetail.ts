export interface PackageStat {
  value: string;
  label: string;
  icon?: string;
}

export interface PackageDetailMeta {
  label: string;
  value: string;
}

export interface PackageRouteStop {
  id: string;
  name: string;
  /** WGS84 latitude in decimal degrees. */
  lat: number;
  /** WGS84 longitude in decimal degrees. */
  lng: number;
  /** Optional short label shown in map tooltips. */
  description?: string;
}

export interface PackageItineraryDay {
  day: number;
  route: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface PackageExperience {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  meta: string;
  /** Visual treatment in the asymmetrical gallery. */
  size: "large" | "tall" | "wide";
}

export interface PackageDetail {
  slug: string;
  packageId: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroLabel: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  heroMeta: PackageDetailMeta[];
  heroTags: string[];
  overviewLabel: string;
  overviewHeading: string;
  overviewParagraphs: string[];
  stats: PackageStat[];
  routeLabel: string;
  routeHeading: string;
  routeCaption: string;
  routeDescription: string;
  /** Ordered itinerary stops for this package's route map. */
  routeStops: PackageRouteStop[];
  itineraryLabel: string;
  itinerary: PackageItineraryDay[];
  experiencesLabel: string;
  experiencesHeading: string;
  experiences: PackageExperience[];
  ctaLabel: string;
  ctaHeading: string;
  ctaDescription: string;
  ctaFeatures: string[];
}
