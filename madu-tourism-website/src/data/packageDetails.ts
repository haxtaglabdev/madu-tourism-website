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
  {
    slug: "ceylon-essentials-escape",
    packageId: "ceylon-essentials",
    title: "Ceylon Essentials Escape",
    metaTitle: "Ceylon Essentials Escape | Madu Tseylon Tours",
    metaDescription:
      "A compact five-day Sri Lankan journey through Sigiriya, Kandy, Nuwara Eliya, and Ella — ancient fortresses, sacred temples, tea highlands, and mountain scenery.",
    heroLabel: "COMPACT DISCOVERY · CULTURE · HERITAGE · HIGHLANDS",
    heroDescription:
      "Discover the highlights of Sri Lanka in five memorable days, from ancient cultural landmarks to misty tea country and the breathtaking mountain scenery of Ella.",
    heroImage: images.colomboMusi,
    heroImageAlt:
      "National Museum of Colombo and Sri Lankan cultural landmarks",
    heroMeta: [
      { label: "Duration", value: "5 Days / 4 Nights" },
      { label: "Travel Style", value: "Private Guided Tour" },
      {
        label: "Destinations",
        value: "Colombo, Sigiriya, Kandy, Nuwara Eliya, Ella",
      },
    ],
    heroTags: ["PRIVATE CHAUFFEUR", "CULTURAL HIGHLIGHTS"],
    overviewLabel: "JOURNEY OVERVIEW",
    overviewHeading: "Sri Lanka's Highlights in Five Days",
    overviewParagraphs: [
      "This compact circuit connects Sri Lanka's most celebrated landmarks — from the soaring rock fortress of Sigiriya and the sacred city of Kandy to the cool tea estates of Nuwara Eliya and the mountain scenery of Ella.",
      "Travel with a private chauffeur through diverse landscapes, from the cultural heartland to the misty central highlands, experiencing the island's rich heritage and natural beauty at an efficient yet comfortable pace.",
    ],
    stats: [
      { value: "05", label: "Days" },
      { value: "05", label: "Destinations" },
      { value: "06+", label: "Experiences" },
      { value: "Private", label: "Chauffeur" },
    ],
    routeLabel: "THE JOURNEY AT A GLANCE",
    routeHeading: "Essentials Discovery Route",
    routeCaption: "COMPACT JOURNEY",
    routeDescription:
      "Ancient fortresses, sacred temples, emerald tea country, and mountain landscapes — connected into one efficient private journey.",
    routeStops: buildRouteStops([
      "colombo",
      "sigiriya",
      "kandy",
      "nuwaraEliya",
      "ella",
    ]),
    itineraryLabel: "DAILY PROGRAM",
    itinerary: [
      {
        day: 1,
        route: "Colombo → Sigiriya",
        title: "Arrival & Journey to the Cultural Triangle",
        description:
          "Arrive at Bandaranaike International Airport and meet your private chauffeur. Travel north-east through changing landscapes towards the Cultural Triangle. This is primarily a travel day (approximately 4–5 hours), arriving at your Sigiriya accommodation by late afternoon.",
        highlights: [
          "Airport Meet & Private Transfer",
          "Scenic Drive Through Rural Sri Lanka",
          "Evening at Leisure Near Sigiriya",
        ],
      },
      {
        day: 2,
        route: "Sigiriya → Kandy",
        title: "The Ancient Fortress & Road to Kandy",
        description:
          "Begin with an early morning ascent of Sigiriya Rock Fortress, exploring the frescoes, mirror wall, and summit ruins with panoramic jungle views. After descending, travel south towards Kandy (approximately 3–4 hours), arriving in time for an evening visit to the Temple of the Sacred Tooth Relic.",
        highlights: [
          "Sigiriya Rock Fortress",
          "Transfer to Kandy",
          "Temple of the Tooth Relic",
        ],
      },
      {
        day: 3,
        route: "Kandy → Nuwara Eliya",
        title: "Royal Heritage & Ascent to Tea Country",
        description:
          "Explore the Royal Botanical Gardens at Peradeniya in the morning, then ascend into Sri Lanka's central highlands towards Nuwara Eliya (approximately 2.5–3 hours). Pass waterfalls and tea plantations en route to the cool colonial hill station.",
        highlights: [
          "Royal Botanical Gardens",
          "Highland Scenic Drive",
          "Arrival in Nuwara Eliya",
        ],
      },
      {
        day: 4,
        route: "Nuwara Eliya → Ella",
        title: "Tea Plantations & Mountain Village",
        description:
          "Visit a tea estate and learn about Ceylon tea production before continuing south to Ella (approximately 2–3 hours). Spend the afternoon exploring Ella's scenic viewpoints, including Little Adam's Peak or the Nine Arches Bridge area.",
        highlights: [
          "Tea Estate Visit",
          "Nine Arches Bridge",
          "Little Adam's Peak",
        ],
      },
      {
        day: 5,
        route: "Ella → Airport / Colombo",
        title: "Mountain Farewell & Departure",
        description:
          "Enjoy a final morning amid Ella's mountain scenery before your private transfer towards Colombo and the airport. This is a travel-intensive day (approximately 5–6 hours), so an early start is recommended. Depart with memories of ancient citadels, sacred temples, tea country, and mountain landscapes.",
        highlights: [
          "Final Mountain Morning",
          "Scenic Departure Drive",
          "Private Airport Transfer",
        ],
      },
    ],
    experiencesLabel: "SIGNATURE EXPERIENCES",
    experiencesHeading: "Highlights Along the Way",
    experiences: [
      {
        id: "essentials-sigiriya",
        title: "Sigiriya: Ancient Sky Fortress",
        description:
          "Explore the historic Sigiriya Rock Fortress, ascending past frescoes and the lion's paw gateway to panoramic views across the jungle canopy.",
        image: images.sigiriya,
        imageAlt: "Sigiriya Rock Fortress rising above forested plains",
        meta: "Explored on Day 2",
        size: "large",
      },
      {
        id: "essentials-tea",
        title: "Nuwara Eliya: Highland Tea Country",
        description:
          "Experience Sri Lanka's cool central highlands and tea plantations, where emerald slopes and misty air define the landscape.",
        image: images.teaPlantationsWide,
        imageAlt: "Tea plantations in the Sri Lankan highlands",
        meta: "Explored on Day 4",
        size: "tall",
      },
      {
        id: "essentials-kandy",
        title: "Kandy: Sacred City Heritage",
        description:
          "Discover Kandy's Temple of the Sacred Tooth Relic and Royal Botanical Gardens, the cultural and spiritual heart of Sri Lanka.",
        image: images.templeHeritage,
        imageAlt: "Temple architecture in Kandy's cultural heart",
        meta: "Explored on Days 2–3",
        size: "wide",
      },
    ],
    ctaLabel: "DISCOVER CEYLON'S ESSENTIALS",
    ctaHeading: "Your Five-Day Journey Starts Here",
    ctaDescription:
      "From ancient citadels to misty highlands, experience Sri Lanka's essential highlights in a compact private journey designed around your schedule.",
    ctaFeatures: [
      "Private Chauffeur",
      "Cultural Highlights",
      "Tea Country Experience",
      "Mountain Scenery",
    ],
  },
  {
    slug: "island-highlights-southern-shores",
    packageId: "island-highlights",
    title: "Island Highlights & Southern Shores",
    metaTitle: "Island Highlights & Southern Shores | Madu Tseylon Tours",
    metaDescription:
      "A seven-day Sri Lankan journey through Sigiriya, Kandy, tea country, Ella, Yala wildlife, Mirissa's beaches, and the historic Galle Fort.",
    heroLabel: "ISLAND EXPLORER · HERITAGE · WILDLIFE · COAST",
    heroDescription:
      "Journey through Sri Lanka's celebrated highlights, combining ancient kingdoms, emerald highlands, wild southern landscapes, tropical beaches, and the coastal charm of Galle.",
    heroImage: images.sigiriyaRock,
    heroImageAlt:
      "Sigiriya Rock Fortress rising above the surrounding landscape",
    heroMeta: [
      { label: "Duration", value: "7 Days / 6 Nights" },
      { label: "Travel Style", value: "Private Guided Tour" },
      {
        label: "Destinations",
        value: "Sigiriya, Kandy, Nuwara Eliya, Ella, Yala, Mirissa, Galle",
      },
    ],
    heroTags: ["PRIVATE CHAUFFEUR", "ISLAND CIRCUIT"],
    overviewLabel: "JOURNEY OVERVIEW",
    overviewHeading: "An Island of Highlights in Seven Days",
    overviewParagraphs: [
      "This seven-day journey combines Sri Lanka's ancient heritage, sacred culture, tea country, mountain landscapes, wildlife, southern beaches, and the historic charm of Galle Fort — covering the island's most celebrated highlights.",
      "Travel at a comfortable pace with a private chauffeur, experiencing diverse landscapes from the Cultural Triangle to the wild south and tropical coastline, with carefully planned transfers that balance sightseeing and travel time.",
    ],
    stats: [
      { value: "07", label: "Days" },
      { value: "08", label: "Destinations" },
      { value: "10+", label: "Experiences" },
      { value: "Private", label: "Chauffeur" },
    ],
    routeLabel: "THE JOURNEY AT A GLANCE",
    routeHeading: "Island Highlights Route",
    routeCaption: "CURATED JOURNEY",
    routeDescription:
      "Ancient kingdoms, highland tea trails, wildlife safaris, and southern shores — a comprehensive island circuit in one seamless private journey.",
    routeStops: buildRouteStops([
      "colombo",
      "sigiriya",
      "kandy",
      "nuwaraEliya",
      "ella",
      "yala",
      "mirissa",
      "galle",
    ]),
    itineraryLabel: "DAILY PROGRAM",
    itinerary: [
      {
        day: 1,
        route: "Colombo → Sigiriya",
        title: "Arrival & the Cultural Triangle",
        description:
          "Arrive at Bandaranaike International Airport and meet your private chauffeur. Travel to the Cultural Triangle (approximately 4–5 hours). Settle into your accommodation near Sigiriya with the rest of the evening at leisure.",
        highlights: [
          "Airport Meet & Private Transfer",
          "Scenic Drive to Cultural Triangle",
          "Evening at Leisure",
        ],
      },
      {
        day: 2,
        route: "Sigiriya → Kandy",
        title: "Ancient Fortress & Sacred City",
        description:
          "Ascend Sigiriya Rock Fortress for panoramic views and ancient frescoes. After exploring the fortress, travel south to Kandy (approximately 3–4 hours). Visit the Temple of the Sacred Tooth Relic in the evening.",
        highlights: [
          "Sigiriya Rock Fortress",
          "Temple of the Tooth Relic",
          "Kandy Lake Walk",
        ],
      },
      {
        day: 3,
        route: "Kandy → Nuwara Eliya",
        title: "Heritage Gardens & Tea Highlands",
        description:
          "Explore Kandy's Royal Botanical Gardens before ascending into the highlands towards Nuwara Eliya (approximately 2.5–3 hours). Visit a tea plantation and enjoy the cool colonial atmosphere of Sri Lanka's Little England.",
        highlights: [
          "Royal Botanical Gardens",
          "Tea Plantation Visit",
          "Colonial Nuwara Eliya",
        ],
      },
      {
        day: 4,
        route: "Nuwara Eliya → Ella",
        title: "Mountain Landscapes & Scenic Viewpoints",
        description:
          "Travel through the central highlands to Ella (approximately 2–3 hours). Spend the afternoon exploring Ella's scenic attractions including the Nine Arches Bridge and Little Adam's Peak.",
        highlights: [
          "Nine Arches Bridge",
          "Little Adam's Peak",
          "Ella Gap Views",
        ],
      },
      {
        day: 5,
        route: "Ella → Yala",
        title: "Mountains to Wildlife Country",
        description:
          "Descend from the highlands towards Sri Lanka's southern wildlife region (approximately 3–4 hours). Arrive near Yala National Park and enjoy an afternoon wildlife safari, subject to park availability.",
        highlights: [
          "Scenic Highland Descent",
          "Yala National Park Area",
          "Afternoon Wildlife Safari",
        ],
      },
      {
        day: 6,
        route: "Yala → Mirissa → Galle",
        title: "Southern Coast & Colonial Heritage",
        description:
          "Travel west along the southern coastline (approximately 3–4 hours total). Stop at Mirissa for a coastal break and continue to Galle to explore the historic Dutch Fort, its cobblestone streets, boutiques, and rampart views.",
        highlights: [
          "Mirissa Coastal Stop",
          "Galle Fort Exploration",
          "Southern Coastal Drive",
        ],
      },
      {
        day: 7,
        route: "Galle → Colombo / Airport",
        title: "Coastal Farewell & Departure",
        description:
          "Enjoy a relaxed final morning near the coast before your private transfer to Colombo or the airport (approximately 2–3 hours from Galle). Depart with memories spanning ancient kingdoms, highlands, wildlife, and tropical shores.",
        highlights: [
          "Morning at Leisure",
          "Coastal Drive to Colombo",
          "Private Airport Transfer",
        ],
      },
    ],
    experiencesLabel: "SIGNATURE EXPERIENCES",
    experiencesHeading: "Moments Across the Island",
    experiences: [
      {
        id: "highlights-sigiriya",
        title: "Sigiriya: Ancient Rock Kingdom",
        description:
          "Discover Sigiriya's ancient rock fortress, ascending past frescoes and lion's paw gateways to sweeping views across the Cultural Triangle.",
        image: images.sigiriya,
        imageAlt: "Sigiriya Rock Fortress above forested plains",
        meta: "Explored on Day 2",
        size: "large",
      },
      {
        id: "highlights-yala",
        title: "Yala: Wildlife Safari Experience",
        description:
          "Experience a wildlife safari in Sri Lanka's most celebrated national park, home to leopards, elephants, and abundant birdlife — subject to seasonal availability.",
        image: images.leopardPortrait,
        imageAlt: "Sri Lankan leopard in natural habitat",
        meta: "Explored on Day 5",
        size: "tall",
      },
      {
        id: "highlights-galle",
        title: "Galle Fort: Colonial Coastal Heritage",
        description:
          "Explore the historic Galle Fort area, a UNESCO-listed colonial trading post with rampart views, boutique streets, and centuries of coastal history.",
        image: images.galleFortress,
        imageAlt: "Historic Galle Fort overlooking the sea",
        meta: "Explored on Day 6",
        size: "wide",
      },
    ],
    ctaLabel: "EXPLORE THE ISLAND",
    ctaHeading: "Your Seven-Day Journey Starts Here",
    ctaDescription:
      "Ancient kingdoms, emerald highlands, wild southern landscapes, and tropical beaches — experience Sri Lanka's celebrated highlights in one comprehensive private journey.",
    ctaFeatures: [
      "Private Chauffeur",
      "Cultural Heritage Sites",
      "Wildlife Safari",
      "Southern Coastal Experience",
    ],
  },
  {
    slug: "ancient-kingdoms-wild-southern-coast",
    packageId: "ancient-kingdoms",
    title: "Ancient Kingdoms & Wild Southern Coast",
    metaTitle: "Ancient Kingdoms & Wild Southern Coast | Madu Tseylon Tours",
    metaDescription:
      "A ten-day Sri Lankan journey through Sigiriya, Polonnaruwa, Kandy, tea country, Ella, Yala wildlife, Mirissa, Galle Fort, and Colombo.",
    heroLabel: "HERITAGE EXPLORER · CULTURE · WILDLIFE · COAST",
    heroDescription:
      "Experience a broader journey across Sri Lanka, connecting ancient cities, sacred temples, emerald tea plantations, mountain escapes, wildlife landscapes, southern beaches, and Colombo's urban character.",
    heroImage: images.nuwaraEliya,
    heroImageAlt:
      "Scenic tea country landscapes in Nuwara Eliya",
    heroMeta: [
      { label: "Duration", value: "10 Days / 9 Nights" },
      { label: "Travel Style", value: "Private Guided Tour" },
      {
        label: "Destinations",
        value: "Sigiriya, Polonnaruwa, Kandy, Nuwara Eliya, Ella, Yala, Mirissa, Galle",
      },
    ],
    heroTags: ["PRIVATE CHAUFFEUR", "EXTENDED EXPLORATION"],
    overviewLabel: "JOURNEY OVERVIEW",
    overviewHeading: "Ancient Heritage to Wild Southern Shores",
    overviewParagraphs: [
      "This ten-day journey offers a wider exploration of Sri Lanka — from the ancient archaeological cities of Sigiriya and Polonnaruwa through sacred Kandy, misty tea plantations, and mountain scenery, to wildlife encounters near Yala and the tropical southern coast.",
      "Travel at a relaxed pace with a private chauffeur, balancing iconic cultural landmarks with natural landscapes and coastal experiences. The journey concludes with a Colombo city experience before departure.",
    ],
    stats: [
      { value: "10", label: "Days" },
      { value: "10", label: "Destinations" },
      { value: "14+", label: "Experiences" },
      { value: "Private", label: "Chauffeur" },
    ],
    routeLabel: "THE JOURNEY AT A GLANCE",
    routeHeading: "Ancient Kingdoms Route",
    routeCaption: "EXTENDED JOURNEY",
    routeDescription:
      "Ancient archaeological cities, sacred temples, tea country, mountain villages, wildlife, and southern beaches — a complete Sri Lankan circuit.",
    routeStops: buildRouteStops([
      "colombo",
      "sigiriya",
      "polonnaruwa",
      "kandy",
      "nuwaraEliya",
      "ella",
      "yala",
      "mirissa",
      "galle",
      "colombo",
    ]),
    itineraryLabel: "DAILY PROGRAM",
    itinerary: [
      {
        day: 1,
        route: "Colombo → Sigiriya",
        title: "Arrival & Journey to the Cultural Triangle",
        description:
          "Arrive at Bandaranaike International Airport and meet your private chauffeur. Travel to the Cultural Triangle (approximately 4–5 hours). Settle into your accommodation near Sigiriya.",
        highlights: [
          "Airport Meet & Private Transfer",
          "Scenic Drive to Cultural Triangle",
          "Evening at Leisure",
        ],
      },
      {
        day: 2,
        route: "Sigiriya",
        title: "The Citadel Above the Clouds",
        description:
          "Dedicate the morning to ascending Sigiriya Rock Fortress, exploring the frescoes, mirror wall, and summit ruins. Spend the afternoon at leisure or explore the surrounding area, including a village walk or Pidurangala viewpoint.",
        highlights: [
          "Sigiriya Rock Fortress",
          "Summit Panoramic Views",
          "Village Walk or Pidurangala",
        ],
      },
      {
        day: 3,
        route: "Sigiriya → Polonnaruwa → Kandy",
        title: "Ancient Cities & Sacred Capital",
        description:
          "Travel to Polonnaruwa (approximately 1.5 hours) to explore the ancient city's archaeological ruins — the Royal Palace, Gal Vihara, and Rankot Vihara. Continue south to Kandy (approximately 3.5 hours), arriving by evening.",
        highlights: [
          "Polonnaruwa Archaeological Ruins",
          "Gal Vihara Rock Temples",
          "Evening Arrival in Kandy",
        ],
      },
      {
        day: 4,
        route: "Kandy",
        title: "Sacred City & Royal Heritage",
        description:
          "Explore Kandy at a relaxed pace — visit the Temple of the Sacred Tooth Relic, stroll around Kandy Lake, and explore the Royal Botanical Gardens at Peradeniya. Enjoy an evening cultural performance if available.",
        highlights: [
          "Temple of the Tooth Relic",
          "Royal Botanical Gardens",
          "Kandyan Cultural Heritage",
        ],
      },
      {
        day: 5,
        route: "Kandy → Nuwara Eliya",
        title: "Into Misty Tea Country",
        description:
          "Ascend into Sri Lanka's central highlands towards Nuwara Eliya (approximately 2.5–3 hours). Pass waterfalls and endless tea slopes. Visit a working tea estate and enjoy the cool colonial atmosphere.",
        highlights: [
          "Highland Scenic Drive",
          "Tea Estate Visit",
          "Colonial Nuwara Eliya",
        ],
      },
      {
        day: 6,
        route: "Nuwara Eliya → Ella",
        title: "Highland Landscapes & Mountain Village",
        description:
          "Travel through the central highlands to Ella (approximately 2–3 hours). Explore the Nine Arches Bridge area and climb Little Adam's Peak for panoramic views. Enjoy Ella's relaxed mountain village atmosphere.",
        highlights: [
          "Nine Arches Bridge",
          "Little Adam's Peak",
          "Ella Mountain Views",
        ],
      },
      {
        day: 7,
        route: "Ella → Yala",
        title: "Mountains to Wildlife Country",
        description:
          "Descend from the highlands to Sri Lanka's southern wildlife region (approximately 3–4 hours). Arrive near Yala National Park and enjoy an afternoon or evening wildlife safari, subject to park availability and seasonal conditions.",
        highlights: [
          "Scenic Highland Descent",
          "Yala National Park Area",
          "Wildlife Safari",
        ],
      },
      {
        day: 8,
        route: "Yala → Mirissa",
        title: "Wild Coast & Southern Beaches",
        description:
          "Enjoy a second safari opportunity in the morning if desired, or travel west along the southern coastline towards Mirissa (approximately 2.5–3 hours). Spend the afternoon relaxing along Mirissa's tropical shores.",
        highlights: [
          "Optional Morning Safari",
          "Southern Coastal Drive",
          "Mirissa Beach",
        ],
      },
      {
        day: 9,
        route: "Mirissa → Galle → Colombo",
        title: "Colonial Fort & Return to Colombo",
        description:
          "Travel to nearby Galle (approximately 45 minutes) to explore the historic Dutch Fort — its cobblestone streets, rampart views, and boutique galleries. Continue to Colombo (approximately 2–3 hours) for the evening.",
        highlights: [
          "Galle Fort Exploration",
          "Southern Coastal Drive",
          "Colombo Evening Arrival",
        ],
      },
      {
        day: 10,
        route: "Colombo City Tour → Airport",
        title: "Colombo Discovery & Farewell",
        description:
          "Discover Colombo's major landmarks — Gangaramaya Temple, Independence Square, the Old Dutch Hospital, and Pettah Market. Enjoy a final Sri Lankan meal before your private transfer to the airport.",
        highlights: [
          "Gangaramaya Temple",
          "Independence Square",
          "Colombo City Highlights",
          "Private Airport Transfer",
        ],
      },
    ],
    experiencesLabel: "SIGNATURE EXPERIENCES",
    experiencesHeading: "Experiences Across the Island",
    experiences: [
      {
        id: "kingdoms-sigiriya",
        title: "Sigiriya & Polonnaruwa: Ancient Heritage",
        description:
          "Explore two of Sri Lanka's most important archaeological sites — the sky fortress of Sigiriya and the ancient royal city of Polonnaruwa.",
        image: images.sigiriya,
        imageAlt: "Sigiriya Rock Fortress rising above the plains",
        meta: "Explored on Days 2–3",
        size: "large",
      },
      {
        id: "kingdoms-wildlife",
        title: "Yala: Southern Wildlife Landscapes",
        description:
          "Experience the wildlife-rich surroundings of Yala National Park, home to leopards, elephants, and diverse ecosystems along Sri Lanka's southern coast.",
        image: images.elephantBath,
        imageAlt: "Elephant in its natural Sri Lankan habitat",
        meta: "Explored on Days 7–8",
        size: "tall",
      },
      {
        id: "kingdoms-galle",
        title: "Galle Fort: Coastal Colonial Heritage",
        description:
          "Explore the UNESCO-listed Galle Fort, a historic Dutch colonial trading post with rampart ocean views, artisan boutiques, and centuries of coastal heritage.",
        image: images.galleFortress,
        imageAlt: "Galle Fort overlooking the southern coastline",
        meta: "Explored on Day 9",
        size: "wide",
      },
    ],
    ctaLabel: "BEGIN YOUR EXPLORATION",
    ctaHeading: "Your Ten-Day Journey Starts Here",
    ctaDescription:
      "Ancient kingdoms, sacred temples, emerald tea plantations, wildlife landscapes, and southern beaches — experience Sri Lanka's full spectrum in one comprehensive private journey.",
    ctaFeatures: [
      "Private Chauffeur Throughout",
      "Archaeological Heritage Sites",
      "Wildlife Safari Experience",
      "Southern Coastal Discovery",
    ],
  },
  {
    slug: "grand-ceylon-island-expedition",
    packageId: "grand-expedition",
    title: "The Grand Ceylon Island Expedition",
    metaTitle: "The Grand Ceylon Island Expedition | Madu Tseylon Tours",
    metaDescription:
      "A comprehensive fourteen-day expedition across Sri Lanka — cultural triangle, highlands, wildlife, southern coast, Jaffna, Trincomalee, and Anuradhapura.",
    heroLabel: "GRAND EXPEDITION · NORTH · SOUTH · EAST · HIGHLANDS",
    heroDescription:
      "Travel deeper into the Pearl of the Indian Ocean on a fourteen-day expedition through ancient kingdoms, sacred cities, tea-covered mountains, wildlife landscapes, tropical coastlines, and the distinctive cultures of Sri Lanka's north and east.",
    heroImage: images.teaW,
    heroImageAlt:
      "Lush green tea plantations and tea country landscape in Sri Lanka",
    heroMeta: [
      { label: "Duration", value: "14 Days / 13 Nights" },
      { label: "Travel Style", value: "Private Guided Expedition" },
      {
        label: "Regions",
        value: "Cultural Triangle · Highlands · South · North · East",
      },
    ],
    heroTags: ["PRIVATE CHAUFFEUR", "COMPREHENSIVE ISLAND CIRCUIT"],
    overviewLabel: "JOURNEY OVERVIEW",
    overviewHeading: "A Complete Island Expedition",
    overviewParagraphs: [
      "This comprehensive fourteen-day expedition covers Sri Lanka from end to end — the ancient cultural triangle, misty central highlands, wildlife-rich south, tropical coastline, and the distinctive cultures of the northern and eastern regions.",
      "Travel with a private chauffeur through diverse landscapes and climates, from the ruins of Polonnaruwa and the sacred peaks of Kandy to the leopard habitats of Yala, the historic ramparts of Galle, the distinctive Tamil culture of Jaffna, and the harbour heritage of Trincomalee.",
    ],
    stats: [
      { value: "14", label: "Days" },
      { value: "13", label: "Destinations" },
      { value: "20+", label: "Experiences" },
      { value: "Private", label: "Chauffeur" },
    ],
    routeLabel: "THE JOURNEY AT A GLANCE",
    routeHeading: "Grand Island Circuit",
    routeCaption: "COMPREHENSIVE EXPEDITION",
    routeDescription:
      "Cultural triangle, highlands, wildlife, southern coast, Jaffna, Trincomalee, and Anuradhapura — the most complete Sri Lankan journey possible.",
    routeStops: buildRouteStops([
      "colombo",
      "sigiriya",
      "polonnaruwa",
      "kandy",
      "nuwaraEliya",
      "ella",
      "yala",
      "mirissa",
      "galle",
      "colombo",
      "jaffna",
      "trincomalee",
      "anuradhapura",
    ]),
    itineraryLabel: "DAILY PROGRAM",
    itinerary: [
      {
        day: 1,
        route: "Colombo → Sigiriya",
        title: "Arrival & Journey to the Cultural Triangle",
        description:
          "Arrive at Bandaranaike International Airport and meet your private chauffeur. Travel to the Cultural Triangle (approximately 4–5 hours). Settle into your accommodation near Sigiriya.",
        highlights: [
          "Airport Meet & Private Transfer",
          "Scenic Drive to Cultural Triangle",
          "Evening at Leisure",
        ],
      },
      {
        day: 2,
        route: "Sigiriya & Polonnaruwa",
        title: "Ancient Citadels & Rock Temples",
        description:
          "Begin with an early ascent of Sigiriya Rock Fortress. After exploring the summit, travel to nearby Polonnaruwa (approximately 1.5 hours) to discover the ancient city's archaeological treasures — the Royal Palace, Gal Vihara's rock-carved Buddhas, and the lotus-shaped Rankot Vihara.",
        highlights: [
          "Sigiriya Rock Fortress",
          "Polonnaruwa Archaeological City",
          "Gal Vihara Rock Temples",
        ],
      },
      {
        day: 3,
        route: "Sigiriya → Kandy",
        title: "Journey to the Sacred Hill Capital",
        description:
          "Travel south from the Cultural Triangle towards Kandy (approximately 3–4 hours). Explore the sacred city — visit the Temple of the Sacred Tooth Relic, stroll around Kandy Lake, and experience the cultural atmosphere of Sri Lanka's hill capital.",
        highlights: [
          "Temple of the Tooth Relic",
          "Kandy Lake",
          "Cultural Capital Arrival",
        ],
      },
      {
        day: 4,
        route: "Kandy → Nuwara Eliya",
        title: "Royal Gardens & Highland Ascent",
        description:
          "Explore the Royal Botanical Gardens at Peradeniya in the morning, then ascend into the central highlands towards Nuwara Eliya (approximately 2.5–3 hours). Visit a tea estate and enjoy the cool colonial hill station atmosphere.",
        highlights: [
          "Royal Botanical Gardens",
          "Tea Estate Visit",
          "Colonial Nuwara Eliya",
        ],
      },
      {
        day: 5,
        route: "Nuwara Eliya → Ella",
        title: "Tea Country & Mountain Scenery",
        description:
          "Continue south through the highlands towards Ella (approximately 2–3 hours). Explore the Nine Arches Bridge, climb Little Adam's Peak, and enjoy the panoramic mountain scenery of one of Sri Lanka's most picturesque villages.",
        highlights: [
          "Nine Arches Bridge",
          "Little Adam's Peak",
          "Ella Gap Views",
        ],
      },
      {
        day: 6,
        route: "Ella → Yala",
        title: "Highland Descent to Wildlife Country",
        description:
          "Descend from Ella through changing landscapes towards Yala (approximately 3–4 hours). Arrive near the national park and enjoy an afternoon wildlife safari, searching for leopards, elephants, and diverse birdlife. Subject to park availability.",
        highlights: [
          "Scenic Highland Descent",
          "Yala National Park",
          "Wildlife Safari",
        ],
      },
      {
        day: 7,
        route: "Yala → Mirissa",
        title: "Wild Coast & Southern Beaches",
        description:
          "Option for an early morning safari return. Travel west along the southern coastline to Mirissa (approximately 2.5–3 hours). Spend the afternoon relaxing along the tropical beaches of Sri Lanka's southern shore.",
        highlights: [
          "Optional Morning Safari",
          "Southern Coastal Drive",
          "Mirissa Beach & Relaxation",
        ],
      },
      {
        day: 8,
        route: "Mirissa → Galle → Colombo",
        title: "Colonial Fort & Return to Colombo",
        description:
          "Travel to Galle (approximately 45 minutes) to explore the historic Dutch Fort, its rampart views and cobblestone streets. Continue to Colombo (approximately 2–3 hours) for an evening in the capital.",
        highlights: [
          "Galle Fort Exploration",
          "UNESCO Heritage Site",
          "Colombo Evening Arrival",
        ],
      },
      {
        day: 9,
        route: "Colombo City Tour",
        title: "Discover the Commercial Capital",
        description:
          "Spend the day exploring Colombo's major landmarks — Gangaramaya Temple, Independence Square, the Old Dutch Hospital, and Pettah Market. Experience the city's diverse dining scene and urban culture.",
        highlights: [
          "Gangaramaya Temple",
          "Independence Square",
          "Pettah Market",
          "Colombo Urban Culture",
        ],
      },
      {
        day: 10,
        route: "Colombo → Jaffna",
        title: "Journey to the Northern Capital",
        description:
          "Travel north to Jaffna (approximately 6–7 hours by road, or domestic flight if available). This is a long transfer day crossing through the island's interior. Arrive in Jaffna and experience the distinctive Tamil culture of Sri Lanka's northern capital.",
        highlights: [
          "Long Transfer to the North",
          "Changing Landscapes",
          "Jaffna Evening Arrival",
        ],
      },
      {
        day: 11,
        route: "Jaffna",
        title: "Northern Culture & Heritage",
        description:
          "Explore Jaffna's distinctive culture — visit the Nallur Kandaswamy Kovil, explore Jaffna Fort, discover the local cuisine, and experience the unique Tamil heritage that distinguishes Sri Lanka's north from the rest of the island.",
        highlights: [
          "Nallur Kandaswamy Kovil",
          "Jaffna Fort",
          "Northern Tamil Cuisine",
          "Cultural Discovery",
        ],
      },
      {
        day: 12,
        route: "Jaffna → Trincomalee",
        title: "Eastern Harbour & Sacred Temples",
        description:
          "Travel east to Trincomalee (approximately 4–5 hours). Visit the Koneswaram Hindu Temple perched on Swami Rock, explore the natural harbour, and enjoy the eastern coastline's distinctive character.",
        highlights: [
          "Koneswaram Temple",
          "Swami Rock",
          "Trincomalee Harbour",
          "Eastern Coastline",
        ],
      },
      {
        day: 13,
        route: "Trincomalee → Anuradhapura",
        title: "Sacred Ancient Capital",
        description:
          "Travel west to Anuradhapura (approximately 3–4 hours), one of Sri Lanka's most sacred ancient cities. Explore the sacred Bodhi Tree (Sri Maha Bodhi), the great dagobas of Ruwanwelisaya and Jetavanaramaya, and the ancient monastic ruins.",
        highlights: [
          "Sri Maha Bodhi (Sacred Bodhi Tree)",
          "Ruwanwelisaya Dagoba",
          "Jetavanaramaya",
          "Ancient City Ruins",
        ],
      },
      {
        day: 14,
        route: "Anuradhapura → Colombo / Airport",
        title: "Final Farewell to Ceylon",
        description:
          "Enjoy a final morning at the ancient sacred city before your private transfer to Colombo and the airport (approximately 4–5 hours). Depart with memories spanning the entire island — from ancient kingdoms and misty highlands to wildlife, tropical beaches, and the distinctive north and east.",
        highlights: [
          "Morning at Ancient City",
          "Scenic Departure Drive",
          "Private Airport Transfer",
          "Journey Farewell",
        ],
      },
    ],
    experiencesLabel: "SIGNATURE EXPERIENCES",
    experiencesHeading: "Moments From Every Corner of the Island",
    experiences: [
      {
        id: "grand-cultural-triangle",
        title: "The Cultural Triangle: Ancient Kingdoms",
        description:
          "Explore Sigiriya's sky fortress, Polonnaruwa's archaeological city, and Anuradhapura's sacred dagobas — three of Sri Lanka's greatest ancient heritage sites.",
        image: images.sigiriya,
        imageAlt: "Sigiriya Rock Fortress rising above the jungle",
        meta: "Explored on Days 2, 13",
        size: "large",
      },
      {
        id: "grand-jaffna",
        title: "Jaffna: Northern Cultural Discovery",
        description:
          "Experience Jaffna's distinctive northern Tamil culture, from the Nallur Kandaswamy Kovil and Jaffna Fort to the unique cuisine and traditions of Sri Lanka's north.",
        image: images.templeHeritage,
        imageAlt: "Sacred temple architecture",
        meta: "Explored on Days 10–11",
        size: "tall",
      },
      {
        id: "grand-southern",
        title: "The Wild South: Safari & Shores",
        description:
          "From Yala's leopard habitats to Mirissa's tropical beaches and Galle Fort's colonial ramparts — the diverse experiences of Sri Lanka's celebrated southern coast.",
        image: images.mirissaArrange,
        imageAlt: "Tropical southern coastline of Sri Lanka",
        meta: "Explored on Days 6–8",
        size: "wide",
      },
    ],
    ctaLabel: "THE GRAND EXPEDITION AWAITS",
    ctaHeading: "Your Fourteen-Day Journey Starts Here",
    ctaDescription:
      "Ancient kingdoms, sacred cities, tea-covered mountains, wildlife landscapes, tropical coastlines, and the distinctive north and east — the most complete Sri Lankan experience possible.",
    ctaFeatures: [
      "Private Chauffeur Throughout",
      "Comprehensive Island Circuit",
      "North, South, East & Highlands",
      "Cultural & Wildlife Immersion",
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
