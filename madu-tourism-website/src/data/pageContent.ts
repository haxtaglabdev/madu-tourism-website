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
    image: images.temple,
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

export const galleryPageItems = galleryItems.map((item, index) => {
  const categories: GalleryCategory[] = [
    "Beaches",
    "Local Life",
    "Wildlife",
    "Culture",
    "Mountains",
    "Beaches",
    "Culture",
    "Mountains",
  ];
  return {
    ...item,
    category: categories[index] ?? "Nature",
  };
});

export { destinations, packages, valuePillars, galleryItems };
