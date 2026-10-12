export interface PackageStat {
  value: string;
  label: string;
}

export interface PackageDetailMeta {
  label: string;
  value: string;
}

export interface PackageRouteStop {
  id: string;
  name: string;
  /** Percentage coordinates on the Sri Lanka map viewBox (0–100). */
  x: number;
  y: number;
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
  routeStops: PackageRouteStop[];
  /** Polyline points as "x,y x,y ..." in the same 0–100 coordinate space. */
  routePath: string;
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
