import { images } from "../assets";
import type {
  Destination,
  Experience,
  GalleryItem,
  NavItem,
  Testimonial,
  TourPackage,
  ValuePillar,
} from "../types/Home";

export const navLinks: NavItem[] = [
  { label: "Home", to: "/", end: true },
  { label: "About Us", to: "/about" },
  { label: "Destinations", to: "/destinations" },
  { label: "Tour Packages", to: "/tour-packages" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export const valuePillars: ValuePillar[] = [
  {
    icon: "psychology",
    title: "Authentic Local Experiences",
    description:
      "Discover hidden trails, family-run estates, and artisan villages away from tourist crowds",
  },
  {
    icon: "directions_car",
    title: "Private Chauffeur Journeys",
    description:
      "Explore in comfort with personalised travel and private chauffeur services.",
  },
  {
    icon: "eco",
    title: "Thoughtful & Responsible Travel",
    description:
      "Experience Sri Lanka while respecting its communities, culture, and natural beauty.",
  },
];

export const destinations: Destination[] = [
  {
    id: "sigiriya",
    title: "Sigiriya & The Ancient Citadel",
    description:
      "Ascend King Kashyapa's 5th-century palace atop a sheer 200m granite monolith adorned with celestial frescoes and mirror walls.",
    badge: "Cultural Triangle",
    badgeVariant: "gold",
    meta: "UNESCO World Heritage",
    image: images.sigiriya,
    linkLabel: "Discover Region Details",
    span: "large",
    minHeight: "min-h-[380px]",
  },
  {
    id: "ella",
    title: "Ella & Nine Arch Bridge",
    description:
      "Misty valleys, iconic viaduct trains, and secluded highland tea tastings.",
    badge: "High Tea & Peaks",
    badgeVariant: "glass",
    image: images.nineArch,
    linkLabel: "Explore Highlights",
    span: "medium",
    minHeight: "min-h-[380px]",
  },
  {
    id: "galle",
    title: "Historic Galle Fort",
    description:
      "17th-century cobblestones, boutique artisan jeweler ateliers, and sea ramparts.",
    badge: "Southern Ramparts",
    badgeVariant: "glass",
    image: images.galleLighthouse,
    linkLabel: "Explore Highlights",
    span: "medium",
    minHeight: "min-h-[340px]",
  },
  {
    id: "mirissa",
    title: "Mirissa & Weligama",
    description:
      "Private blue whale watching charters, palm hills, and sunset cocktails.",
    badge: "Coastal Bliss",
    badgeVariant: "glass",
    image: images.beachPalm,
    linkLabel: "Explore Highlights",
    span: "medium",
    minHeight: "min-h-[340px]",
  },
  {
    id: "yala",
    title: "Yala National Park",
    description:
      "Highest density of Sri Lankan leopards, sloth bears, and wild tuskers.",
    badge: "Wildlife Kingdom",
    badgeVariant: "glass",
    image: images.leopardRock,
    linkLabel: "Explore Highlights",
    span: "medium",
    minHeight: "min-h-[340px]",
  },
];

export const homeDestinations: Destination[] = [
  {
    id: "sigiriya",
    title: "Sigiriya & The Ancient Citadel",
    description:
      "Ascend King Kashyapa's 5th-century palace atop a sheer 200m granite monolith adorned with celestial frescoes and mirror walls.",
    badge: "Cultural Triangle",
    badgeVariant: "gold",
    meta: "UNESCO World Heritage",
    image: images.homeSigiriya,
    linkLabel: "Discover Region Details",
    span: "large",
    minHeight: "min-h-[380px]",
  },
  {
    id: "ella",
    title: "Ella & Nine Arch Bridge",
    description:
      "Misty valleys, iconic viaduct trains, and secluded highland tea tastings.",
    badge: "High Tea & Peaks",
    badgeVariant: "glass",
    image: images.homeNineArch,
    linkLabel: "Explore Highlights",
    span: "medium",
    minHeight: "min-h-[380px]",
  },
  {
    id: "galle",
    title: "Historic Galle Fort",
    description:
      "17th-century cobblestones, boutique artisan jeweler ateliers, and sea ramparts.",
    badge: "Southern Ramparts",
    badgeVariant: "glass",
    image: images.homeGalleFort,
    linkLabel: "Explore Highlights",
    span: "medium",
    minHeight: "min-h-[340px]",
  },
  {
    id: "mirissa",
    title: "Mirissa & Weligama",
    description:
      "Private blue whale watching charters, palm hills, and sunset cocktails.",
    badge: "Coastal Bliss",
    badgeVariant: "glass",
    image: images.homeMirissa,
    linkLabel: "Explore Highlights",
    span: "medium",
    minHeight: "min-h-[340px]",
  },
  {
    id: "yala",
    title: "Yala National Park",
    description:
      "Highest density of Sri Lankan leopards, sloth bears, and wild tuskers.",
    badge: "Wildlife Kingdom",
    badgeVariant: "glass",
    image: images.homeMinneriya,
    linkLabel: "Explore Highlights",
    span: "medium",
    minHeight: "min-h-[340px]",
  },
];

export const packages: TourPackage[] = [
  // Multi-Day Tours
  {
    id: "sigiriya-kandy-2-days",
    slug: "sigiriya-kandy-2-days",
    category: "multi-day",
    categoryLabel: "Cultural Escape",
    maxGroupSize: "20 Persons",
    title: "Sigiriya and Kandy 2 Days Private Tour with HB Deluxe Accommodation",
    description:
      "Discover Sri Lanka's cultural treasures on a private two-day journey through Sigiriya and Kandy. Explore the iconic Lion Rock, Dambulla Cave Temple, rural village life, and a wildlife safari before experiencing Kandy's sacred landmarks, peaceful lake, and beautiful botanical gardens. Enjoy comfortable deluxe half-board accommodation along the way.",
    duration: "2 Days",
    tag: "Cultural Escape",
    image: images.sigiriyaRock,
    rating: 5,
    reviewCount: 42,
    inclusions: [
      "Deluxe Half-Board Accommodation",
      "Sigiriya Lion Rock & Dambulla Caves",
      "Private Vehicle & Professional Chauffeur",
    ],
    price: "$375",
    featured: true,
  },
  {
    id: "sri-lanka-5-days",
    slug: "sri-lanka-5-days",
    category: "multi-day",
    categoryLabel: "Island Highlights",
    maxGroupSize: "20 Persons",
    title: "Sri Lanka 5 Days Tour with 4 Star Hotels and Private Transportation",
    description:
      "Experience an exciting five-day Sri Lankan escape combining ancient heritage, misty tea country, scenic train journeys, wildlife, and southern coastal charm. Discover Sigiriya, Kandy, Ella, Nine Arches Bridge, Yala, and Galle while travelling in private comfort and staying in selected four-star hotels on a half-board basis.",
    duration: "5 Days",
    tag: "Island Highlights",
    image: images.nuwaraEliya,
    rating: 5,
    reviewCount: 56,
    inclusions: [
      "4-Star Hotels with Half-Board Stays",
      "Scenic Highland Rail & Nine Arch Bridge",
      "Yala Wildlife Safari & Galle Dutch Fort",
    ],
    price: "$825",
  },
  {
    id: "sri-lanka-7-days",
    slug: "sri-lanka-7-days",
    category: "multi-day",
    categoryLabel: "Island Discovery",
    maxGroupSize: "20 Persons",
    title: "Sri Lanka 7 Days Tour with 4 Star Hotels and Private Transportation",
    description:
      "Journey through Sri Lanka's remarkable contrasts over seven unforgettable days. Discover ancient rock fortresses, sacred temples, emerald tea plantations, spectacular waterfalls, scenic highland trails, and thrilling wildlife encounters in Yala. Complete your journey with relaxed beachside moments and southern coastal discoveries.",
    duration: "7 Days",
    tag: "Island Discovery",
    image: images.nineArch,
    rating: 5,
    reviewCount: 49,
    inclusions: [
      "4-Star Hotels on Half-Board Basis",
      "Sigiriya, Kandy, Ella & Yala Safari",
      "Southern Coast & Mirissa Beach",
    ],
    price: "$1,000",
  },
  {
    id: "sri-lanka-10-days",
    slug: "sri-lanka-10-days",
    category: "multi-day",
    categoryLabel: "Grand Island Journey",
    maxGroupSize: "20 Persons",
    title: "Sri Lanka 10 Days Tour with 4 Star Hotels and Private Transportation",
    description:
      "Explore Sri Lanka in depth on a ten-day private journey across cultural landmarks, mountain scenery, tea country, wildlife reserves, and tropical beaches. Enjoy unforgettable experiences around Sigiriya, Kandy, Ella, Yala, Mirissa, Galle, and Colombo, with private transportation and comfortable hotel stays throughout your adventure.",
    duration: "10 Days",
    tag: "Grand Island Journey",
    image: images.teaW,
    rating: 5,
    reviewCount: 68,
    inclusions: [
      "4-Star Hotels & Nationwide Transport",
      "Ancient Cities, Highlands & Wildlife Safaris",
      "Mirissa, Galle Fort & Colombo Exploration",
    ],
    price: "$1,375",
  },

  // Day Tours
  {
    id: "ella-day-tour",
    slug: "ella-day-tour",
    category: "day",
    categoryLabel: "Highland Adventure",
    maxGroupSize: "20 Persons",
    title: "Ella Day Tour - Departing from Any Location in Sri Lanka",
    description:
      "Discover the beauty of Ella on a memorable day trip featuring the iconic Nine Arch Bridge, a scenic train experience, Little Adam's Peak, and the spectacular Ravana Falls. Depending on your selected itinerary, enjoy additional wildlife experiences and panoramic views of Sri Lanka's enchanting hill country.",
    duration: "1 Day",
    tag: "Highland Adventure",
    image: images.homeNineArch,
    rating: 5,
    reviewCount: 38,
    inclusions: [
      "Air-Conditioned Private Vehicle & Chauffeur",
      "Nine Arch Bridge & Ella Scenic Train Trip",
      "Little Adam's Peak & Ravana Waterfall",
    ],
    price: "$200",
  },
  {
    id: "galle-day-tour",
    slug: "galle-day-tour",
    category: "day",
    categoryLabel: "Southern Heritage",
    maxGroupSize: "20 Persons",
    title: "Galle Day Tour - Departing from Any Location in Sri Lanka",
    description:
      "Experience the charm of Sri Lanka's southern coast on a full-day journey through colonial history, tropical nature, and local heritage. Explore historic Galle Fort, discover sea turtle conservation, enjoy a relaxing river boat ride, and visit selected coastal landmarks and traditional craft attractions.",
    duration: "1 Day",
    tag: "Southern Heritage",
    image: images.galleLighthouse,
    rating: 5,
    reviewCount: 45,
    inclusions: [
      "Private Air-Conditioned Vehicle & Driver",
      "Historic UNESCO Galle Dutch Fort",
      "Sea Turtle Hatchery & Bentota River Safari",
    ],
    price: "$190",
  },
  {
    id: "kandy-day-tour",
    slug: "kandy-day-tour",
    category: "day",
    categoryLabel: "Cultural Discovery",
    maxGroupSize: "20 Persons",
    title: "Kandy Day Tour - Departing from Any Location in Sri Lanka",
    description:
      "Discover the cultural heart of Sri Lanka in Kandy, home to the sacred Temple of the Tooth Relic and beautiful lakeside scenery. Experience local traditions, explore tea-growing heritage, and enjoy opportunities to visit an elephant conservation attraction, a viewpoint, and a traditional spice garden.",
    duration: "1 Day",
    tag: "Cultural Discovery",
    image: images.maligawa,
    rating: 5,
    reviewCount: 34,
    inclusions: [
      "Private Air-Conditioned Vehicle & Driver",
      "Temple of the Sacred Tooth Relic",
      "Tea Plantation & Factory Masterclass",
    ],
    price: "$250",
  },
  {
    id: "sigiriya-day-tour",
    slug: "sigiriya-day-tour",
    category: "day",
    categoryLabel: "Ancient Wonders",
    maxGroupSize: "20 Persons",
    title: "Sigiriya Day Tour - Departing from Any Location in Sri Lanka",
    description:
      "Explore Sri Lanka's ancient wonders on a memorable day tour featuring the Dambulla Cave Temple and the legendary Sigiriya Rock Fortress or Pidurangala Rock. Complete your adventure with the opportunity to experience a wild elephant safari, combining cultural discovery, spectacular views, and nature.",
    duration: "1 Day",
    tag: "Ancient Wonders",
    image: images.sigiriyaAerial,
    rating: 5,
    reviewCount: 52,
    inclusions: [
      "Private Air-Conditioned Vehicle & Lunch Included",
      "Dambulla Golden Cave Temple",
      "Sigiriya Rock Fortress & Elephant Safari",
    ],
    price: "$300",
  },
];

export const experiences: Experience[] = [
  {
    id: "elephants",
    category: "Wildlife Immersion",
    title: "Wild Elephant Gathering",
    description:
      "Witness up to 300 Asian elephants convene at ancient Minneriya reservoirs.",
    image: images.elephantSunset,
  },
  {
    id: "coastal",
    category: "Oceanic Sanctuary",
    title: "Southern Coastal Bliss",
    description:
      "Private catamaran charters, surf bays, and marine biologist whale tracking.",
    image: images.beachBoats,
  },
  {
    id: "temples",
    category: "Sacred Chronicles",
    title: "Spiritual Heritage & Temples",
    description:
      "Private blessings at Buddhist stupas and dusk rituals at Kandy's golden shrine.",
    image: images.recliningBuddha,
  },
  {
    id: "rafting",
    category: "Active Exploration",
    title: "Rainforest Hikes & Rivers",
    description:
      "Sinharaja pristine canopy walks and white-water descents in Kitulgala.",
    image: images.rafting,
  },
  {
    id: "tea",
    category: "Botanical Highlands",
    title: "Ceylon Tea Mastery",
    description:
      "Walk with estate planters, pluck two-leaves-and-a-bud, and taste rare white teas.",
    image: images.teaPlantation,
  },
  {
    id: "cooking",
    category: "Culinary Traditions",
    title: "Village Hearth Cooking",
    description:
      "Hand-ground roasted curry spices, clay pot cooking, and lagoon crab feasts.",
    image: images.riceCurry,
  },
];

/** Placeholder guest reviews from design reference — replace with verified testimonials */
export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Our 10-day honeymoon was effortless from touchdown to departure. Our chauffeur-naturalist Chaminda knew every hidden overlook in Ella and arranged a candlelit beach dinner in Mirissa that we will treasure forever.",
    name: "Sarah & Michael Jenkins",
    detail: "London, United Kingdom • 10-Day Custom Tour",
    initials: "SJ",
  },
  {
    id: "2",
    quote:
      "The Yala safari was world-class. We spotted two leopards resting on high boulders and three bull elephants grazing. Having a private luxury van made navigating the mountain roads comfortable and stress-free.",
    name: "David & Claire Laurent",
    detail: "Paris, France • Wildlife Safari Explorer",
    initials: "DL",
  },
  {
    id: "3",
    quote:
      "As a solo female traveler, safety was my highest priority. Madu Tseylon made me feel pampered, totally secure, and welcomed like family. Their respect for local culture and community is truly inspiring.",
    name: "Elena Rostova",
    detail: "Munich, Germany • Cultural Heritage Solo Tour",
    initials: "ER",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    alt: "Stilt fishermen at sunset on the southern coast",
    image: images.stiltFishermen,
    aspect: "portrait",
  },
  {
    id: "g2",
    alt: "Colorful tropical fruit market stall",
    image: images.fruitMarket,
    aspect: "square",
  },
  {
    id: "g3",
    alt: "Sri Lankan leopard in dense jungle foliage",
    image: images.leopardCloseup,
    aspect: "square",
    offset: true,
  },
  {
    id: "g4",
    alt: "Traditional Kandyan dancer at a cultural festival",
    image: images.kandyanDancer,
    aspect: "portrait",
    offset: true,
  },
  {
    id: "g5",
    alt: "Misty tea plantations in the central highlands",
    image: images.teaMist,
    aspect: "portrait",
  },
  {
    id: "g6",
    alt: "Galle Fort lighthouse at golden hour",
    image: images.galleSunset,
    aspect: "square",
  },
  {
    id: "g7",
    alt: "Ancient reclining Buddha at Gal Vihara",
    image: images.recliningBuddha,
    aspect: "square",
    offset: true,
  },
  {
    id: "g8",
    alt: "Young traveler on the scenic blue train through tea country",
    image: images.trainTraveler,
    aspect: "portrait",
    offset: true,
  },
];

export const footerExplore = [
  { label: "Home", to: "/" },
  { label: "About Our Team", to: "/about" },
  { label: "Destinations", to: "/destinations" },
  { label: "Curated Packages", to: "/tour-packages" },
  { label: "Travel Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export const footerTerritories = [
  { label: "Sigiriya & Cultural Triangle", to: "/destinations" },
  { label: "Ella & Central Tea Hills", to: "/destinations" },
  { label: "Galle Dutch Fort & South Coast", to: "/destinations" },
  { label: "Yala Leopard Safari", to: "/destinations" },
  { label: "Mirissa Marine & Whale Sanctuary", to: "/destinations" },
];
