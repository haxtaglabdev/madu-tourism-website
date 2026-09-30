import { images } from "../assets";
import type {
  Destination,
  Experience,
  GalleryItem,
  NavLink,
  Testimonial,
  TourPackage,
  ValuePillar,
} from "../types/Home";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#", active: true },
  { label: "About Us", href: "#about" },
  { label: "Destinations", href: "#destinations" },
  { label: "Tour Packages", href: "#packages" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const valuePillars: ValuePillar[] = [
  {
    icon: "psychology",
    title: "Decades of Roots",
    description:
      "Lifelong insider access, local chiefs, and secret panorama points.",
  },
  {
    icon: "directions_car",
    title: "Private Chauffeurs",
    description:
      "English-speaking certified naturalist drivers in luxury climate-controlled fleet.",
  },
  {
    icon: "eco",
    title: "Responsible Eco-Care",
    description:
      "Direct support to rural conservationists, weavers, and village schools.",
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

export const packages: TourPackage[] = [
  {
    id: "classic-ceylon",
    title: "The Classic Ceylon Discovery",
    description:
      "Sigiriya Lion Fortress, Temple of the Tooth Relic, mist-shrouded Nuwara Eliya tea trails, and a Minneriya elephant gathering.",
    duration: "7 Days / 6 Nights",
    tag: "Private Chauffeur",
    image: images.sigiriyaAerial,
    rating: 5,
    reviewCount: 48,
    inclusions: [
      "Dedicated Luxury SUV & Chauffeur-Guide",
      "4 & 5-Star Boutique Heritage Hotels",
      "All Entrance & UNESCO Site Fees Included",
    ],
    // Placeholder pricing — replace with confirmed rates
    price: "$1,250",
  },
  {
    id: "highland-tea",
    title: "Highland Tea & Sacred Kingdoms",
    description:
      "First-class scenic train carriage to Ella, bespoke tea planter bungalow stay, spice gardens, and Kandy royal botanical sanctuaries.",
    duration: "8 Days / 7 Nights",
    tag: "Panoramic Train Ride",
    image: images.teaTrain,
    rating: 5,
    reviewCount: 62,
    inclusions: [
      "Scenic 1st-Class Blue Train Reservation",
      "Private Tea Estate Tasting Masterclass",
      "Luxury Boutique Bungalows",
    ],
    // Placeholder pricing — replace with confirmed rates
    price: "$1,480",
    featured: true,
  },
  {
    id: "wild-leopards",
    title: "Wild Leopards & Mirissa Shores",
    description:
      "Dual wildlife immersion: custom 4x4 open-top jeep safaris in Yala followed by barefoot luxury along southern Indian Ocean beaches.",
    duration: "10 Days / 9 Nights",
    tag: "Safari & Ocean Villa",
    image: images.elephantBath,
    rating: 5,
    reviewCount: 54,
    inclusions: [
      "Private Safari Jeeps & Tracker Guide",
      "Boutique Oceanfront Villa Stay",
      "Exclusive Sunset Whale Cruise",
    ],
    // Placeholder pricing — replace with confirmed rates
    price: "$1,890",
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
    image: images.temple,
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
  { label: "Home Itineraries", href: "#" },
  { label: "About Our Team", href: "#about" },
  { label: "Destinations", href: "#destinations" },
  { label: "Curated Packages", href: "#packages" },
  { label: "Island Experiences", href: "#experiences" },
  { label: "Travel Gallery", href: "#gallery" },
];

export const footerTerritories = [
  { label: "Sigiriya & Cultural Triangle", href: "#destinations" },
  { label: "Ella & Central Tea Hills", href: "#destinations" },
  { label: "Galle Dutch Fort & South Coast", href: "#destinations" },
  { label: "Yala Leopard Safari", href: "#destinations" },
  { label: "Mirissa Marine & Whale Sanctuary", href: "#destinations" },
];
