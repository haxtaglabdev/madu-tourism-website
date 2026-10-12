import { images } from "../assets";
import type { PackageDetail } from "../types/PackageDetail";
import { buildRouteStops } from "./routeDestinations";

export const packageDetails: PackageDetail[] = [
  {
    slug: "classic-ceylon-discovery",
    packageId: "classic-ceylon",
    title: "The Classic Ceylon Discovery",
    metaTitle: "The Classic Ceylon Discovery | Madu Tseylon Tours",
    metaDescription:
      "A private seven-day journey through Sigiriya, Kandy, Nuwara Eliya, and Minneriya — ancient citadels, highland tea country, and wild elephant sanctuaries.",
    heroLabel: "PRIVATE TOURS · CULTURE · HISTORY · NATURE",
    heroDescription:
      "An editorial journey through the heart of Sri Lanka, exploring ancient fortresses, misty highlands, and wild elephant sanctuaries.",
    heroImage: images.sigiriyaAerial,
    heroImageAlt:
      "Aerial view of Sigiriya Rock Fortress rising above misty forest at sunrise",
    heroMeta: [
      { label: "Duration", value: "7 Days / 6 Nights" },
      { label: "Travel Style", value: "Luxury Private Tour" },
      {
        label: "Destinations",
        value: "Sigiriya, Kandy, Nuwara Eliya, Minneriya",
      },
    ],
    heroTags: ["DAILY PRIVATE TOUR", "HERITAGE BOUTIQUE STAYS"],
    overviewLabel: "JOURNEY OVERVIEW",
    overviewHeading: "Where Ancient Citadels Meet Misty Highlands.",
    overviewParagraphs: [
      "This classic circuit traces the soul of Ceylon — from the soaring rock fortress of Sigiriya and the sacred city of Kandy to the cool tea estates of Nuwara Eliya and the great elephant gathering at Minneriya.",
      "Travel at an unhurried pace with a private chauffeur-naturalist, boutique heritage stays, and carefully timed encounters that balance iconic landmarks with quieter, more intimate moments.",
    ],
    stats: [
      { value: "07", label: "Days" },
      { value: "05", label: "Stops" },
      { value: "08+", label: "Experiences" },
      { value: "Signature", label: "Stay Style" },
    ],
    routeLabel: "THE JOURNEY AT A GLANCE",
    routeHeading: "Ceylon Landmark Route",
    routeCaption: "CURATED JOURNEY",
    routeDescription:
      "Ancient fortresses, sacred temples, misty tea country, and wild elephant sanctuaries — connected into one seamless private journey.",
    routeStops: buildRouteStops([
      "colombo",
      "sigiriya",
      "minneriya",
      "kandy",
      "nuwaraEliya",
    ]),
    itineraryLabel: "DAILY PROGRAM",
    itinerary: [
      {
        day: 1,
        route: "Airport → Sigiriya",
        title: "Arrival into the Cultural Triangle",
        description:
          "Meet your private chauffeur on arrival and travel inland toward the Cultural Triangle. Settle into your boutique lodge near Sigiriya and ease into island time with a relaxed evening amid ancient landscapes.",
        highlights: [
          "Private Airport Meet & Greet",
          "Scenic Transfer to Sigiriya",
          "Boutique Heritage Lodge",
        ],
      },
      {
        day: 2,
        route: "Sigiriya",
        title: "The Citadel Above the Clouds",
        description:
          "Ascend the legendary Sigiriya Rock Fortress for frescoes, mirror walls, and sweeping jungle views. In the afternoon, enjoy a gentle village walk and a traditional Sri Lankan lunch among rural paddy fields.",
        highlights: [
          "Sigiriya Rock Fortress",
          "Village Walk & Traditional Lunch",
          "Pidurangala Sunset Viewpoint",
        ],
      },
      {
        day: 3,
        route: "Sigiriya → Minneriya → Kandy",
        title: "Elephants & the Road to Kandy",
        description:
          "Journey to Minneriya National Park for a private jeep safari timed for the great elephant gathering. Continue south into the hills, arriving in the sacred city of Kandy by evening.",
        highlights: [
          "Minneriya Elephant Safari",
          "Private Naturalist Guide",
          "Evening Arrival in Kandy",
        ],
      },
      {
        day: 4,
        route: "Kandy",
        title: "Sacred City & Royal Gardens",
        description:
          "Discover Kandy at a refined pace — visit the Temple of the Sacred Tooth Relic, stroll around Kandy Lake, and explore the Royal Botanical Gardens at Peradeniya before an evening cultural performance.",
        highlights: [
          "Temple of the Tooth Relic",
          "Royal Botanical Gardens",
          "Kandyan Cultural Performance",
        ],
      },
      {
        day: 5,
        route: "Kandy → Nuwara Eliya",
        title: "Into Misty Tea Country",
        description:
          "Ascend into Sri Lanka’s cool central highlands. Pass waterfalls and endless tea slopes en route to colonial Nuwara Eliya, where fireplaces, planter bungalows, and misty evenings await.",
        highlights: [
          "Highland Scenic Drive",
          "Tea Estate Landscapes",
          "Colonial Nuwara Eliya",
        ],
      },
      {
        day: 6,
        route: "Nuwara Eliya",
        title: "Ceylon Tea & Highland Air",
        description:
          "Walk through emerald plantations with a tea planter, tour a working factory, and enjoy a private tasting of fine Ceylon teas. Spend the afternoon exploring waterfalls and mountain viewpoints at leisure.",
        highlights: [
          "Private Tea Estate Visit",
          "Factory Tour & Tasting",
          "Lover’s Leap Falls",
        ],
      },
      {
        day: 7,
        route: "Nuwara Eliya → Airport",
        title: "A Graceful Farewell",
        description:
          "Enjoy a final highland morning before your private transfer toward Colombo and the airport. Depart with memories of citadels, temples, tea country, and wild elephants — the classic Ceylon story, privately told.",
        highlights: [
          "Scenic Departure Drive",
          "Private Airport Transfer",
          "Journey Farewell",
        ],
      },
    ],
    experiencesLabel: "SIGNATURE EXPERIENCES",
    experiencesHeading: "Experiences Along the Way",
    experiences: [
      {
        id: "sigiriya-citadel",
        title: "Sigiriya: The Citadel Above the Clouds",
        description:
          "Climb the fifth-century sky palace of King Kashyapa — frescoes, lion’s paws, and a summit that seems to float above the jungle canopy.",
        image: images.sigiriya,
        imageAlt: "Sigiriya Rock Fortress rising from forested plains",
        meta: "Explored on Day 2",
        size: "large",
      },
      {
        id: "tea-valleys",
        title: "Nuwara Eliya: Emerald Tea Valleys",
        description:
          "Wander cool highland estates where Ceylon tea is still grown, plucked, and crafted with generations of planter knowledge.",
        image: images.teaPlantationsWide,
        imageAlt: "Rolling emerald tea plantations in the Sri Lankan highlands",
        meta: "Explored on Day 6",
        size: "tall",
      },
      {
        id: "elephant-gathering",
        title: "The Great Elephant Gathering at Minneriya",
        description:
          "Witness one of Asia’s great wildlife spectacles as herds of elephants gather around ancient reservoirs at golden hour.",
        image: images.minneriyaPark,
        imageAlt: "Elephants gathering near water at Minneriya National Park",
        meta: "Explored on Day 3",
        size: "wide",
      },
    ],
    ctaLabel: "BEGIN YOUR CEYLON STORY",
    ctaHeading: "Your Sri Lankan Journey Starts Here",
    ctaDescription:
      "From ancient citadels to misty highlands, experience Sri Lanka’s classic landmarks privately arranged around your pace and preferences.",
    ctaFeatures: [
      "Private Chauffeur-Naturalist",
      "Boutique Heritage Stays",
      "UNESCO Site Entrances",
      "Flexible Daily Pace",
    ],
  },
  {
    slug: "highland-tea-sacred-kingdoms",
    packageId: "highland-tea",
    title: "Highland Tea & Sacred Kingdoms",
    metaTitle: "Highland Tea & Sacred Kingdoms | Madu Tseylon Tours",
    metaDescription:
      "A refined six-day private journey through Kandy, Nuwara Eliya, and Ella — scenic rail travel, tea estates, and boutique highland stays.",
    heroLabel: "PRIVATE HIGHLAND ESCAPE · 6 DAYS / 5 NIGHTS",
    heroDescription:
      "A refined journey through Sri Lanka’s misty highlands, royal heritage, and legendary tea country — combining scenic rail travel, private estate experiences, and elegant boutique stays.",
    heroImage: images.teaMist,
    heroImageAlt:
      "Mist drifting over emerald tea plantations in Sri Lanka’s central highlands",
    heroMeta: [
      { label: "Duration", value: "6 Days / 5 Nights" },
      { label: "Travel Style", value: "Private Luxury Journey" },
      { label: "Regions", value: "Kandy · Nuwara Eliya · Ella" },
    ],
    heroTags: ["DAILY PRIVATE TOUR", "LUXURY BOUTIQUE STAYS"],
    overviewLabel: "HIGHLAND HERITAGE",
    overviewHeading: "From Royal Kandy to Misty Tea Country",
    overviewParagraphs: [
      "Travel from the cultural heart of Kandy into Sri Lanka’s cool central highlands, where emerald tea estates, colonial-era railways, and mountain villages create one of the island’s most beautiful landscapes.",
      "Discover sacred temples and royal gardens before ascending into the tea country. Journey through dramatic mountain scenery aboard a first-class scenic train, meet generations of tea makers, and finish among Ella’s spectacular valleys and waterfalls.",
    ],
    stats: [
      { value: "06", label: "Days of Discovery" },
      { value: "05", label: "Luxury Nights" },
      { value: "100%", label: "Private Journey" },
      { value: "BOUTIQUE", label: "Handpicked Stays" },
    ],
    routeLabel: "CURATED JOURNEY",
    routeHeading: "Highland Journey Route",
    routeCaption: "THE JOURNEY AT A GLANCE",
    routeDescription:
      "Royal heritage, scenic railways, tea estates, mountain villages, and highland landscapes — connected into one seamless private journey.",
    routeStops: buildRouteStops([
      "colombo",
      "kandy",
      "nuwaraEliya",
      "ella",
    ]),
    itineraryLabel: "DAILY PROGRAM",
    itinerary: [
      {
        day: 1,
        route: "Colombo → Kandy",
        title: "Arrival & Royal City Welcome",
        description:
          "Arrive in Colombo and meet your private chauffeur before travelling towards the cultural capital of Kandy. Settle into your boutique hotel before an evening visit to the sacred Temple of the Tooth.",
        highlights: [
          "Temple of the Sacred Tooth Relic",
          "Kandy Lake",
          "Evening Cultural Performance",
        ],
      },
      {
        day: 2,
        route: "Kandy",
        title: "Royal Gardens & Cultural Heritage",
        description:
          "Explore the former royal city at a relaxed pace. Visit the Royal Botanical Gardens at Peradeniya and discover Kandy’s rich traditions, architecture, and artistic heritage.",
        highlights: [
          "Royal Botanical Gardens",
          "Kandy City Walk",
          "Traditional Kandyan Arts",
        ],
      },
      {
        day: 3,
        route: "Kandy → Nuwara Eliya",
        title: "The Scenic Highland Railway",
        description:
          "Board the iconic first-class scenic train and travel through mist-covered mountains, waterfalls, forests, and endless tea plantations towards Nuwara Eliya.",
        highlights: [
          "First-Class Scenic Train",
          "Tea Country Landscapes",
          "Nanu Oya",
          "Colonial Nuwara Eliya",
        ],
      },
      {
        day: 4,
        route: "Nuwara Eliya",
        title: "Inside the World of Ceylon Tea",
        description:
          "Visit a working tea estate and discover how Ceylon tea moves from mountain-grown leaf to the world-famous cup. Enjoy a private tea tasting with an experienced tea planter.",
        highlights: [
          "Private Tea Estate",
          "Tea Factory",
          "Tea Tasting Masterclass",
          "Lover’s Leap Falls",
        ],
      },
      {
        day: 5,
        route: "Nuwara Eliya → Ella",
        title: "Mountain Roads & Emerald Valleys",
        description:
          "Continue south through the central highlands towards Ella. Explore one of Sri Lanka’s most scenic mountain regions, surrounded by tea-covered slopes and dramatic viewpoints.",
        highlights: [
          "Ella Gap",
          "Nine Arches Bridge",
          "Little Adam’s Peak",
          "Highland Sunset",
        ],
      },
      {
        day: 6,
        route: "Ella → Colombo",
        title: "A Gentle Farewell to the Highlands",
        description:
          "Enjoy a relaxed final morning before your private transfer back towards Colombo. Depart with memories of Sri Lanka’s sacred cities, legendary tea country, and mountain landscapes.",
        highlights: [
          "Scenic Highland Drive",
          "Private Transfer",
          "Journey Farewell",
        ],
      },
    ],
    experiencesLabel: "SIGNATURE EXPERIENCES",
    experiencesHeading: "Moments Worth Travelling For",
    experiences: [
      {
        id: "scenic-train",
        title: "First-Class Scenic Train Journey",
        description:
          "Travel through Sri Lanka’s legendary hill country aboard a reserved first-class carriage, passing tea plantations, misty valleys, waterfalls, and mountain villages.",
        image: images.teaTrain,
        imageAlt: "Scenic blue train travelling through highland tea country",
        meta: "Explored on Day 3",
        size: "large",
      },
      {
        id: "tea-estate",
        title: "Private Ceylon Tea Estate Experience",
        description:
          "Step behind the scenes at an authentic tea estate, meet local tea makers, learn the craft of tea production, and enjoy a private tasting among the plantations.",
        image: images.teaPlantation,
        imageAlt: "Tea plantation rows and estate landscape in the highlands",
        meta: "Explored on Day 4",
        size: "tall",
      },
      {
        id: "kandy-heritage",
        title: "Kandy Royal & Sacred Heritage",
        description:
          "Discover the spiritual heart of Kandy through its sacred temple, royal gardens, historic streets, and centuries-old traditions.",
        image: images.templeHeritage,
        imageAlt: "Sacred temple architecture in Kandy’s cultural heart",
        meta: "Explored on Days 1–2",
        size: "wide",
      },
    ],
    ctaLabel: "THE HIGHLANDS ARE CALLING",
    ctaHeading: "Your Highland Journey Starts Here",
    ctaDescription:
      "From sacred temples to misty tea plantations, experience Sri Lanka at a slower, more beautiful pace — with every detail privately arranged around you.",
    ctaFeatures: [
      "Private Chauffeur",
      "First-Class Scenic Train",
      "Luxury Boutique Stays",
      "Private Tea Experience",
    ],
  },
  {
    slug: "wild-leopards-mirissa-shores",
    packageId: "wild-leopards",
    title: "Wild Leopards & Mirissa Shores",
    metaTitle: "Wild Leopards & Mirissa Shores | Madu Tseylon Tours",
    metaDescription:
      "A private six-day wildlife and coast escape — Yala leopard safaris, oceanfront villa stays, and exclusive whale watching from Mirissa.",
    heroLabel: "PRIVATE WILDLIFE & COAST ESCAPE · 6 DAYS / 5 NIGHTS",
    heroDescription:
      "From the untamed wilderness of Yala to the golden beaches of Sri Lanka’s southern coast, experience a private journey of wildlife, ocean adventures, and barefoot luxury.",
    heroImage: images.leopardRock,
    heroImageAlt:
      "Sri Lankan leopard resting on a rocky outcrop in Yala National Park",
    heroMeta: [
      { label: "Duration", value: "6 Days / 5 Nights" },
      { label: "Travel Style", value: "Private Luxury Journey" },
      { label: "Regions", value: "Yala · Weligama · Mirissa" },
    ],
    heroTags: ["PRIVATE SAFARI", "OCEANFRONT VILLA"],
    overviewLabel: "WILD SOUTHERN ESCAPE",
    overviewHeading: "From Wild Jungles to Endless Ocean",
    overviewParagraphs: [
      "Travel deep into Sri Lanka’s southern wilderness for an unforgettable encounter with elephants, leopards, crocodiles, and exotic birdlife before continuing towards the palm-fringed beaches of Mirissa.",
      "Enjoy private open-top safari drives with an experienced tracker, then slow the pace beside the Indian Ocean with a luxury villa stay, golden sunsets, and an exclusive whale-watching experience.",
    ],
    stats: [
      { value: "06", label: "Days of Discovery" },
      { value: "05", label: "Luxury Nights" },
      { value: "PRIVATE", label: "Safari Experience" },
      { value: "OCEANFRONT", label: "Villa Stay" },
    ],
    routeLabel: "CURATED JOURNEY",
    routeHeading: "Wild South Journey Route",
    routeCaption: "THE JOURNEY AT A GLANCE",
    routeDescription:
      "A seamless journey from Sri Lanka’s wild interior to the relaxed shores of the southern Indian Ocean.",
    routeStops: buildRouteStops([
      "colombo",
      "yala",
      "weligama",
      "mirissa",
    ]),
    itineraryLabel: "DAILY PROGRAM",
    itinerary: [
      {
        day: 1,
        route: "Colombo → Yala",
        title: "Into the Wild South",
        description:
          "Meet your private chauffeur in Colombo and travel south towards Yala. Arrive at your luxury wildlife retreat and settle into the peaceful surroundings of the national park.",
        highlights: [
          "Private Transfer",
          "Wildlife Lodge",
          "Sunset Wilderness Experience",
        ],
      },
      {
        day: 2,
        route: "Yala National Park",
        title: "Leopards of the Wild",
        description:
          "Set out before sunrise on a private open-top jeep safari. With an experienced tracker and naturalist, explore Yala’s diverse habitats in search of leopards, elephants, sloth bears, crocodiles, and abundant birdlife.",
        highlights: [
          "Private Safari Jeep",
          "Leopard Tracking",
          "Elephant Encounters",
          "Wildlife Photography",
        ],
      },
      {
        day: 3,
        route: "Yala",
        title: "A Deeper Wilderness Experience",
        description:
          "Return to the park for another carefully timed safari, exploring different zones and landscapes. Spend the afternoon relaxing at your lodge before a peaceful evening surrounded by nature.",
        highlights: [
          "Morning Safari",
          "Private Naturalist",
          "Birdwatching",
          "Wilderness Sundowner",
        ],
      },
      {
        day: 4,
        route: "Yala → Weligama / Mirissa",
        title: "From Jungle to Ocean",
        description:
          "Leave the wilderness behind and travel along Sri Lanka’s scenic southern coastline. Arrive at your oceanfront villa and spend the afternoon unwinding beside the sea.",
        highlights: [
          "Southern Coastal Drive",
          "Oceanfront Villa",
          "Beach Afternoon",
          "Sunset",
        ],
      },
      {
        day: 5,
        route: "Mirissa",
        title: "Whales Beyond the Horizon",
        description:
          "Set out early on an exclusive private whale-watching cruise. Search the deep blue waters for majestic blue whales, sperm whales, dolphins, and other marine life before returning to the coast for a relaxed afternoon.",
        highlights: [
          "Private Whale Cruise",
          "Blue Whale Search",
          "Dolphin Encounters",
          "Sunset Beach",
        ],
      },
      {
        day: 6,
        route: "Mirissa → Colombo",
        title: "Barefoot Farewell",
        description:
          "Enjoy a final morning by the Indian Ocean before your private transfer back to Colombo. Take one last coastal drive through the southern villages before your journey comes to an end.",
        highlights: [
          "Beach Morning",
          "Coastal Drive",
          "Private Transfer",
          "Journey Farewell",
        ],
      },
    ],
    experiencesLabel: "SIGNATURE EXPERIENCES",
    experiencesHeading: "Wild Encounters Along the Way",
    experiences: [
      {
        id: "yala-safari",
        title: "Leopard Safari in Yala",
        description:
          "Explore one of Sri Lanka’s most celebrated wildlife destinations in a private open-top jeep accompanied by an experienced tracker and naturalist.",
        image: images.leopardPortrait,
        imageAlt: "Close view of a Sri Lankan leopard in natural habitat",
        meta: "Explored on Days 2–3",
        size: "large",
      },
      {
        id: "whale-cruise",
        title: "Private Indian Ocean Whale Cruise",
        description:
          "Set sail from Mirissa into the deep blue waters of the southern coast in search of blue whales, dolphins, and other marine life.",
        image: images.beachBoats,
        imageAlt: "Boats on turquoise southern coastal waters near Mirissa",
        meta: "Explored on Day 5",
        size: "tall",
      },
      {
        id: "southern-coast",
        title: "Barefoot Southern Coast",
        description:
          "Slow down at a private oceanfront villa, enjoy secluded beaches, tropical sunsets, and the relaxed rhythm of Sri Lanka’s southern shores.",
        image: images.beachPalm,
        imageAlt: "Palm-fringed tropical beach on Sri Lanka’s southern coast",
        meta: "Explored on Days 4–6",
        size: "wide",
      },
    ],
    ctaLabel: "THE WILD SOUTH AWAITS",
    ctaHeading: "Your Southern Journey Starts Here",
    ctaDescription:
      "Track leopards at sunrise, meet the giants of the ocean, and finish each day beside the sea — a private Sri Lankan escape designed around the wild and the beautiful.",
    ctaFeatures: [
      "Private Safari Jeeps",
      "Expert Wildlife Tracker",
      "Oceanfront Villa Stay",
      "Exclusive Whale Cruise",
    ],
  },
];

export function getPackageBySlug(slug: string): PackageDetail | undefined {
  return packageDetails.find((pkg) => pkg.slug === slug);
}

export function getPackageDetailsPath(packageId: string): string | undefined {
  const match = packageDetails.find((pkg) => pkg.packageId === packageId);
  return match ? `/tour-packages/${match.slug}` : undefined;
}
