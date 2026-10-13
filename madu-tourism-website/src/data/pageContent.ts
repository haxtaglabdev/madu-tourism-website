import { images } from "../assets";
import { destinations, galleryItems, packages, valuePillars } from "./homeContent";

export const aboutStory = {
  eyebrow: "Bespoke Ceylon Expeditions",
  title: "Explore Sri Lanka With People Who Have Walked Its Trails for Generations",
  paragraphs: [
    "At Madu Tseylon Tours, we don’t offer hurried cookie-cutter excursions. We invite you into our motherland as honoured guests. From forgotten highland trails winding through artisanal tea factories to privileged private jeep safaris in quiet corners of Yala, every passage is crafted around your pace.",
    "Our roots run through villages, tea estates, and coastal fishing communities. That means privileged access to local chiefs, family-run bungalows, and viewpoints that rarely appear in guidebooks — always with the quiet assurance of licensed, English-speaking chauffeur-naturalists.",
    "We believe travel should feel intimate, unhurried, and responsible. Every itinerary balances iconic UNESCO highlights with soft moments: a temple blessing at dusk, a cup of rare white tea with a planter, or a candlelit supper beside the Indian Ocean.",
  ],
  quote:
    "Ceylon is not simply a destination you visit; it is a fragrant sensory tapestry of sea breezes, cinnamon bark, sacred bells, and warm smiles that linger with you for life.",
  quoteAttribution: "— The Madu Tseylon Naturalist Team",
};

export const aboutMission = [
  {
    icon: "spa",
    title: "Authentic Travel",
    description:
      "Journeys shaped by local knowledge — temples, tea trails, wildlife, and coastal rhythms — never rushed checklists.",
  },
  {
    icon: "handshake",
    title: "Personalized Experiences",
    description:
      "Every itinerary is built around your pace, interests, and travel style, with private vehicles and flexible daily plans.",
  },
  {
    icon: "eco",
    title: "Responsible Tourism",
    description:
      "Direct support for rural conservationists, weavers, village schools, and community-led experiences across the island.",
  },
];

export const whyTravelWithUs = [
  {
    icon: "psychology",
    title: "Local Knowledge",
    description:
      "Lifelong insider access, secret panorama points, and relationships that open doors across Sri Lanka.",
  },
  {
    icon: "route",
    title: "Personalized Journeys",
    description:
      "Flexible day-by-day itineraries combining boutique stays, cultural encounters, and wildlife moments you care about.",
  },
  {
    icon: "verified",
    title: "Trusted Service",
    description:
      "Licensed DMC standards, vetted hotels, certified naturalist drivers, and transparent planning from first inquiry.",
  },
  {
    icon: "support_agent",
    title: "24/7 Support",
    description:
      "Colombo-based concierge coverage throughout your journey — airport to farewell — whenever you need us.",
  },
];

export const sriLankaExpertise = [
  {
    icon: "temple_buddhist",
    title: "Culture",
    description:
      "Ancient kingdoms, Kandyan rituals, Dutch fort towns, and living temple traditions.",
    image: images.perahera,
  },
  {
    icon: "forest",
    title: "Nature",
    description:
      "Cloud forests, rainforest canopies, spice gardens, and highland tea estates.",
    image: images.teaPlantation,
  },
  {
    icon: "pets",
    title: "Wildlife",
    description:
      "Leopard country, elephant gatherings, and private open-top safari experiences.",
    image: images.leopardRock,
  },
  {
    icon: "beach_access",
    title: "Beaches",
    description:
      "Southern shores, whale waters, palm hills, and barefoot luxury by the ocean.",
    image: images.beachPalm,
  },
  {
    icon: "landscape",
    title: "Hill Country",
    description:
      "Misty Ella valleys, scenic blue trains, and planter bungalow hospitality.",
    image: images.nineArch,
  },
];

export const travelValues = [
  {
    title: "Unhurried Discovery",
    description:
      "We design fewer, richer days — time to linger at viewpoints, temples, and village tables.",
  },
  {
    title: "Human Connection",
    description:
      "Guides, hosts, and artisans are partners, not props. Travel should honour the people who call Ceylon home.",
  },
  {
    title: "Quiet Luxury",
    description:
      "Boutique heritage hotels, private vehicles, and thoughtful pacing over spectacle for its own sake.",
  },
];

export const destinationHighlights: Record<string, string[]> = {
  sigiriya: [
    "Lion Rock citadel ascent",
    "Frescoes & mirror wall",
    "Nearby Sigiriya village trails",
    "Cultural Triangle day pairing",
  ],
  ella: [
    "Nine Arch Bridge viewpoints",
    "Scenic highland train",
    "Tea estate tastings",
    "Little Adam’s Peak walks",
  ],
  galle: [
    "Dutch fort ramparts",
    "Artisan ateliers",
    "Lighthouse golden hour",
    "Cobblestone café streets",
  ],
  mirissa: [
    "Blue whale charters",
    "Palm-hill sunsets",
    "Weligama surf bays",
    "Coastal seafood evenings",
  ],
  yala: [
    "Leopard safari drives",
    "Sloth bear habitat",
    "Private open-top jeeps",
    "Dawn & dusk game drives",
  ],
};

export interface DestinationExperience {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
}

export const destinationExperiences: DestinationExperience[] = [
  {
    id: "anuradhapura",
    title: "Anuradhapura",
    description:
      "Step into Sri Lanka's ancient first kingdom, where sacred stupas, magnificent monasteries, and centuries-old ruins reveal the island's rich Buddhist heritage.",
    highlights: [
      "Sacred Sri Maha Bodhi Tree",
      "Ruwanwelisaya and Jetavanaramaya stupas",
      "Ancient royal monasteries and ruins",
      "Peaceful cycling trails through the sacred city",
    ],
    image: images.destAnuradhapura,
  },
  {
    id: "trincomalee",
    title: "Trincomalee",
    description:
      "Discover turquoise waters, golden beaches, and rich coastal heritage in a beautiful eastern city known for its ocean views and marine adventures.",
    highlights: [
      "Nilaveli and Uppuveli beaches",
      "Pigeon Island snorkeling adventures",
      "Koneswaram Temple and Swami Rock",
      "Seasonal whale and dolphin watching",
    ],
    image: images.destTrincomalee,
  },
  {
    id: "arugambe",
    title: "Arugambe",
    description:
      "Embrace the laid-back spirit of Sri Lanka's eastern coast, where legendary surf breaks, tropical lagoons, and golden sunsets create an unforgettable escape.",
    highlights: [
      "Surfing at Arugam Bay",
      "Scenic lagoon boat safaris",
      "Elephant Rock and coastal viewpoints",
      "Relaxed beachside cafés and sunset views",
    ],
    image: images.destArugambe,
  },
  {
    id: "dambulla",
    title: "Dambulla",
    description:
      "Explore a remarkable cultural landmark where ancient cave temples, intricate Buddhist murals, and towering golden statues preserve centuries of spiritual history.",
    highlights: [
      "Dambulla Royal Cave Temple",
      "Ancient Buddhist paintings and sculptures",
      "Golden Temple complex",
      "Excursions through the Cultural Triangle",
    ],
    image: images.destDambulla,
  },
  {
    id: "bentota",
    title: "Bentota",
    description:
      "Unwind along Sri Lanka's sun-kissed southwestern coast, combining beautiful sandy beaches with river adventures and leisurely oceanfront escapes.",
    highlights: [
      "Relaxing golden-sand beaches",
      "Madu River boat safaris",
      "Water sports and coastal activities",
      "Riverside mangroves and wildlife",
    ],
    image: images.destBentota,
  },
  {
    id: "colombo",
    title: "Colombo",
    description:
      "Experience Sri Lanka's vibrant commercial capital, where colonial architecture, contemporary city life, colorful markets, and oceanfront sunsets meet.",
    highlights: [
      "Galle Face Green and seaside sunsets",
      "Gangaramaya Temple",
      "Pettah Market and historic streets",
      "Colonial landmarks and modern city dining",
    ],
    image: images.destColombo,
  },
  {
    id: "habarana",
    title: "Habarana",
    description:
      "Escape into the heart of Sri Lanka's dry-zone wilderness, surrounded by peaceful lakes, lush countryside, and unforgettable wildlife encounters.",
    highlights: [
      "Wildlife safaris in nearby national parks",
      "Scenic village and lake experiences",
      "Traditional Sri Lankan village cuisine",
      "Easy access to Sigiriya and Polonnaruwa",
    ],
    image: images.destHabarana,
  },
  {
    id: "kitulgala",
    title: "Kitulgala",
    description:
      "Discover an adventurous rainforest retreat where rushing rivers, lush green hills, and tropical forests create the perfect setting for outdoor exploration.",
    highlights: [
      "White-water rafting on the Kelani River",
      "Rainforest walks and birdwatching",
      "Jungle trails and nature photography",
      "Scenic riverside relaxation",
    ],
    image: images.destKitulgala,
  },
  {
    id: "polonnaruwa",
    title: "Polonnaruwa",
    description:
      "Journey through a magnificent medieval capital filled with royal ruins, remarkable stone carvings, and monumental Buddhist sculptures from Sri Lanka's ancient past.",
    highlights: [
      "Gal Vihara's magnificent Buddha statues",
      "Royal Palace and ancient council chamber ruins",
      "Vatadage and historic religious monuments",
      "Cycling through the ancient archaeological city",
    ],
    image: images.destPolonnaruwa,
  },
];

export const galleryCategories = [
  "All",
  "Nature",
  "Wildlife",
  "Culture",
  "Beaches",
  "Mountains",
  "Local Life",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

const galleryPageImageModules = import.meta.glob("../assets/gallery/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const GALLERY_PAGE_IMAGE_EXTENSION_PATTERN = /\.(jpe?g|png|webp|avif)$/i;

const galleryPageAspectPattern: Array<"portrait" | "square"> = [
  "portrait",
  "square",
  "square",
  "portrait",
];

export const galleryPageItems = Object.keys(galleryPageImageModules)
  .filter((path) => GALLERY_PAGE_IMAGE_EXTENSION_PATTERN.test(path))
  .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }))
  .map((path, index) => ({
    id: `gallery-page-${index + 1}`,
    alt: "Sri Lankan travel photograph",
    image: galleryPageImageModules[path],
    aspect: galleryPageAspectPattern[index % galleryPageAspectPattern.length],
    category: "Nature" as GalleryCategory,
  }));

export { destinations, packages, valuePillars, galleryItems };
