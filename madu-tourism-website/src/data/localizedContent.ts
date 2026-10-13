import { images } from "../assets";
import type { SupportedLanguage } from "../i18n/useCurrentLanguage";
import type { Destination, Experience, Testimonial, ValuePillar } from "../types/Home";
import {
  destinations as enDestinations,
  homeDestinations as enHomeDestinations,
  experiences as enExperiences,
  testimonials as enTestimonials,
  valuePillars as enValuePillars,
} from "./homeContent";
import { destinationExperiences as enDestinationExperiences } from "./pageContent";

export const ruDestinations: Destination[] = [
  {
    id: "sigiriya",
    title: "Сигирия и Древняя Цитадель",
    description:
      "Поднимитесь на монолит V века царя Кашьяпы высотой 200 метров с древними фресками облачных дев и зеркальными стенами.",
    badge: "Культурный треугольник",
    badgeVariant: "gold",
    meta: "Всемирное наследие ЮНЕСКО",
    image: images.sigiriya,
    linkLabel: "Подробнее о регионе",
    span: "large",
    minHeight: "min-h-[380px]",
  },
  {
    id: "ella",
    title: "Элла и Мост Девяти Арок",
    description:
      "Туманные ущелья, знаменитый каменный виадук с проходящими поездами и чайные дегустации среди горных террас.",
    badge: "Чайные вершины",
    badgeVariant: "glass",
    image: images.nineArch,
    linkLabel: "Главные впечатления",
    span: "medium",
    minHeight: "min-h-[380px]",
  },
  {
    id: "galle",
    title: "Исторический Форт Галле",
    description:
      "Мощеные улочки XVII века, ремесленные мастерские, океанские бастионы и старинный голландский маяк.",
    badge: "Южные бастионы",
    badgeVariant: "glass",
    image: images.galleLighthouse,
    linkLabel: "Главные впечатления",
    span: "medium",
    minHeight: "min-h-[340px]",
  },
  {
    id: "mirissa",
    title: "Мирисса и Велигама",
    description:
      "Приватные выходы в океан к синим китам, кокосовые рощи на мысах и умиротворенные закаты на пляже.",
    badge: "Океанская безмятежность",
    badgeVariant: "glass",
    image: images.beachPalm,
    linkLabel: "Главные впечатления",
    span: "medium",
    minHeight: "min-h-[340px]",
  },
  {
    id: "yala",
    title: "Национальный Парк Яла",
    description:
      "Высочайшая в мире концентрация цейлонских леопардов, дикие слоны, медведи-губачи и крокодилы.",
    badge: "Царство дикой природы",
    badgeVariant: "glass",
    image: images.leopardRock,
    linkLabel: "Главные впечатления",
    span: "medium",
    minHeight: "min-h-[340px]",
  },
];

export const ruHomeDestinations: Destination[] = [
  {
    id: "sigiriya",
    title: "Сигирия и Древняя Цитадель",
    description:
      "Поднимитесь на монолит V века царя Кашьяпы высотой 200 метров с древними фресками облачных дев и зеркальными стенами.",
    badge: "Культурный треугольник",
    badgeVariant: "gold",
    meta: "Всемирное наследие ЮНЕСКО",
    image: images.homeSigiriya,
    linkLabel: "Подробнее о регионе",
    span: "large",
    minHeight: "min-h-[380px]",
  },
  {
    id: "ella",
    title: "Элла и Мост Девяти Арок",
    description:
      "Туманные ущелья, знаменитый каменный виадук с проходящими поездами и чайные дегустации среди горных террас.",
    badge: "Чайные вершины",
    badgeVariant: "glass",
    image: images.homeNineArch,
    linkLabel: "Главные впечатления",
    span: "medium",
    minHeight: "min-h-[380px]",
  },
  {
    id: "galle",
    title: "Исторический Форт Галле",
    description:
      "Мощеные улочки XVII века, ремесленные мастерские, океанские бастионы и старинный голландский маяк.",
    badge: "Южные бастионы",
    badgeVariant: "glass",
    image: images.homeGalleFort,
    linkLabel: "Главные впечатления",
    span: "medium",
    minHeight: "min-h-[340px]",
  },
  {
    id: "mirissa",
    title: "Мирисса и Велигама",
    description:
      "Приватные выходы в океан к синим китам, кокосовые рощи на мысах и умиротворенные закаты на пляже.",
    badge: "Океанская безмятежность",
    badgeVariant: "glass",
    image: images.homeMirissa,
    linkLabel: "Главные впечатления",
    span: "medium",
    minHeight: "min-h-[340px]",
  },
  {
    id: "yala",
    title: "Национальный Парк Яла",
    description:
      "Высочайшая в мире концентрация цейлонских леопардов, дикие слоны, медведи-губачи и крокодилы.",
    badge: "Царство дикой природы",
    badgeVariant: "glass",
    image: images.homeMinneriya,
    linkLabel: "Главные впечатления",
    span: "medium",
    minHeight: "min-h-[340px]",
  },
];

export const ruExperiences: Experience[] = [
  {
    id: "elephants",
    category: "Дикая природа",
    title: "Великое скопление диких слонов",
    description:
      "Наблюдайте за сотнями азиатских слонов на берегах древнего озера Миннерия.",
    image: images.elephantSunset,
  },
  {
    id: "coastal",
    category: "Океанский релакс",
    title: "Безмятежность южного берега",
    description:
      "Приватные катамараны, уединенные пляжи и наблюдение за синими китами с морскими биологами.",
    image: images.beachBoats,
  },
  {
    id: "temples",
    category: "Священное наследие",
    title: "Духовные традиции и храмы",
    description:
      "Благословения в буддийских храмах и вечерние службы в золотом Храме Зуба Будды в Канди.",
    image: images.recliningBuddha,
  },
  {
    id: "tea",
    category: "Чайное высокогорье",
    title: "Туманные холмы и плантации",
    description:
      "Утренний сбор белого чая с потомственными сборщицами и поездка на винтажном поезде через облака.",
    image: images.teaPlantationsWide,
  },
];

export const ruTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Елена и Михаил Вороновы",
    detail: "Москва · Тур «Классический Цейлон» (7 дней)",
    quote:
      "Организация превзошла все ожидания. Наш личный гид-водитель был невероятно эрудированным и тактичным. Мы увидели слонов в дикой природе в десятке метров, а бутик-отели в горах были просто сказочными.",
    initials: "ЕВ",
  },
  {
    id: "2",
    name: "Александр Морозов",
    detail: "Санкт-Петербург · Сафари и океан (6 дней)",
    quote:
      "Идеальный баланс дикого сафари и премиального отдыха у океана. В Яле нам посчастливилось дважды встретить леопарда на охоте, а вилла в Мириссе с видом на закат подарила полное умиротворение.",
    initials: "АМ",
  },
  {
    id: "3",
    name: "Дмитрий и Анна Соколовы",
    detail: "Алматы · Горный тур (8 дней)",
    quote:
      "Поездка на поезде первого класса через чайные горы в Эллу — одно из самых красивых воспоминаний в жизни. Огромное спасибо команде Madu Tseylon за душевность и внимание к каждой мелочи!",
    initials: "ДС",
  },
];

export const ruValuePillars: ValuePillar[] = [
  {
    icon: "psychology",
    title: "Подлинные местные открытия",
    description:
      "Скрытые тропы, семейные поместья и деревни ремесленников вдали от массовых туристических толп.",
  },
  {
    icon: "directions_car",
    title: "Персональный автомобиль и гид",
    description:
      "Исследуйте остров в абсолютном комфорте с опытным личным водителем и гибким графиком остановок.",
  },
  {
    icon: "eco",
    title: "Осознанный и бережный туризм",
    description:
      "Знакомство со Шри-Ланкой с глубоким уважением к местным традициям, общинам и дикой природе.",
  },
];

import type { DestinationExperience } from "./pageContent";

export const ruDestinationExperiences: DestinationExperience[] = [
  {
    id: "anuradhapura",
    title: "Анурадхапура",
    description:
      "Шагните в первую древнюю столицу Шри-Ланки, где священные ступы, величественные монастыри и руины вековых дворцов открывают духовное наследие буддизма.",
    highlights: [
      "Священное дерево Маха Бодхи",
      "Величественные ступы Руванвелисая и Джетаванарама",
      "Древние королевские монастыри и святыни",
      "Неспешные велопрогулки по священному городу",
    ],
    image: images.destAnuradhapura,
  },
  {
    id: "trincomalee",
    title: "Тринкомали",
    description:
      "Бирюзовые лагуны, золотые пляжи и богатое морское наследие восточного побережья, известного океанскими просторами и подводным миром.",
    highlights: [
      "Пляжи Нилавели и Уппувели",
      "Снорклинг у кораллового острова Пиджен",
      "Храм Конесварам и скала Свами Рок",
      "Сезонные морские сафари к китам и дельфинам",
    ],
    image: images.destTrincomalee,
  },
  {
    id: "arugambe",
    title: "Аругам-Бей",
    description:
      "Расслабленная атмосфера восточного берега Шри-Ланки: легендарные волны для серфинга, тропические лагуны и золотые закаты.",
    highlights: [
      "Серфинг мирового уровня в заливе Аругам-Бей",
      "Лодочные сафари по лагунам мангровых зарослей",
      "Скала Слон (Elephant Rock) и панорамные виды",
      "Атмосферные пляжные кафе и закатные вечера",
    ],
    image: images.destArugambe,
  },
  {
    id: "dambulla",
    title: "Дамбулла",
    description:
      "Уникальный пещерный храмовый комплекс, где древние фрески, буддийские росписи и золотые статуи хранят тысячелетнюю духовную историю.",
    highlights: [
      "Королевский пещерный храм Дамбулла",
      "Древнейшие наскальные росписи и скульптуры",
      "Золотой храм и музей буддизма",
      "Удобная отправная точка по Культурному треугольнику",
    ],
    image: images.destDambulla,
  },
  {
    id: "bentota",
    title: "Бентота",
    description:
      "Безмятежный отдых на залитом солнцем юго-западном побережье: широкие песчаные пляжи, речные сафари и комфортабельные океанские курорты.",
    highlights: [
      "Широкие пляжи с мягким золотым песком",
      "Лодочные сафари по реке Маду-Ганга",
      "Водные виды спорта и океанские прогулки",
      "Мангровые леса и экзотическая речная фауна",
    ],
    image: images.destBentota,
  },
  {
    id: "colombo",
    title: "Коломбо",
    description:
      "Колоритная экономическая столица Шри-Ланки, где гармонично переплетаются колониальная архитектура, современные кварталы, шумные рынки и закаты над океаном.",
    highlights: [
      "Променад Галле Фейс Грин и морские закаты",
      "Храмовый комплекс Гангарамая",
      "Атмосферный колоритный рынок Петтах",
      "Колониальные особняки и современная гастрономия",
    ],
    image: images.destColombo,
  },
  {
    id: "habarana",
    title: "Хабарана",
    description:
      "Сердце природной зоны острова: тихие озера, изумрудные джунгли и незабываемые сафари к диким слонам.",
    highlights: [
      "Джип-сафари в соседних национальных парках",
      "Традиционные прогулки по озеру и деревням",
      "Аутентичная деревенская ланкийская кухня",
      "Близость к Сигирии и Полоннаруве",
    ],
    image: images.destHabarana,
  },
  {
    id: "kitulgala",
    title: "Китулгала",
    description:
      "Заповедный тропический оазис для любителей приключений: бурные реки, поросшие джунглями горы и чистейший воздух дождевых лесов.",
    highlights: [
      "Рафтинг по горной реке Келани",
      "Трекинг по тропическому лесу и наблюдение за птицами",
      "Маршруты по диким джунглям и природная фотосъемка",
      "Уединенный отдых на берегу реки среди зелени",
    ],
    image: images.destKitulgala,
  },
  {
    id: "polonnaruwa",
    title: "Полоннарува",
    description:
      "Путешествие по средневековой столице Цейлона с королевскими дворцами, искусной резьбой по камню и монументальными статуями Будды.",
    highlights: [
      "Монументальные каменные статуи храма Гал Вихара",
      "Руины Королевского дворца и Зала заседаний",
      "Круглый храм Ватадаге и священные памятники",
      "Велосипедные прогулки по древнему археологическому парку",
    ],
    image: images.destPolonnaruwa,
  },
];

export function getLocalizedDestinations(lang: SupportedLanguage): Destination[] {
  return lang === "ru" ? ruDestinations : enDestinations;
}

export function getLocalizedHomeDestinations(lang: SupportedLanguage): Destination[] {
  return lang === "ru" ? ruHomeDestinations : enHomeDestinations;
}

export function getLocalizedExperiences(lang: SupportedLanguage): Experience[] {
  return lang === "ru" ? ruExperiences : enExperiences;
}

export function getLocalizedTestimonials(lang: SupportedLanguage): Testimonial[] {
  return lang === "ru" ? ruTestimonials : enTestimonials;
}

export function getLocalizedValuePillars(lang: SupportedLanguage): ValuePillar[] {
  return lang === "ru" ? ruValuePillars : enValuePillars;
}

export function getLocalizedDestinationExperiences(lang: SupportedLanguage) {
  return lang === "ru" ? ruDestinationExperiences : enDestinationExperiences;
}
