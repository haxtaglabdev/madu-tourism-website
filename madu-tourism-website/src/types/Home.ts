export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface Destination {
  id: string;
  title: string;
  description: string;
  badge: string;
  badgeVariant: "gold" | "glass";
  meta?: string;
  image: string;
  linkLabel: string;
  span: "large" | "medium";
  minHeight: string;
}

export interface TourPackage {
  id: string;
  title: string;
  description: string;
  duration: string;
  tag: string;
  image: string;
  rating: number;
  reviewCount: number;
  inclusions: string[];
  price: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  detail: string;
  initials: string;
}

export interface GalleryItem {
  id: string;
  alt: string;
  image: string;
  aspect: "portrait" | "square";
  offset?: boolean;
}

export interface ValuePillar {
  icon: string;
  title: string;
  description: string;
}
