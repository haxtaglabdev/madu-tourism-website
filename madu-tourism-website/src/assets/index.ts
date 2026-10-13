import nineArch from "./1.jpg";
import recliningBuddha from "./2.jpg";
import rafting from "./3.jpg";
import leopardRock from "./4.jpg";
import elephantSunset from "./5.jpg";
import beachPalm from "./6.jpg";
import teaPlantation from "./7.jpg";
import galleLighthouse from "./8.jpg";
import riceCurry from "./9.jpg";
import sigiriyaAerial from "./10.jpg";
import beachBoats from "./11.jpg";
import elephantBath from "./elephant.jpg";
import logo from "./bgremove_logo.png";
import sigiriya from "./sigiriya.jpg";
import teaTrain from "./tea.jpg";
import teaWoman from "./hero image test.jpg";
import temple from "./madu baby.jpg";
import templeHeritage from "./temple.jpg";
import stiltFishermen from "./unnamed.jpg";
import leopardCloseup from "./unnamed (1).jpg";
import teaMist from "./unnamed (2).jpg";
import fruitMarket from "./unnamed (3).jpg";
import kandyanDancer from "./unnamed (5).jpg";
import galleSunset from "./unnamed (6).jpg";
import trainTraveler from "./unnamed (7).jpg";
import sticker from "./sticker.png";
import minneriyaPark from "./hero_images/Minneriya national Park.jpg.jpg";
import teaPlantationsWide from "./hero_images/Tea Plantations.jpg.jpg";
import leopardPortrait from "./hero_images/1 SL Leopard - Panthera pardus kotiya.jpg";
import galleFortress from "./hero_images/Fortress in Galle‧.jpg.jpg";
import surfSpots from "./hero_images/The Best Surf Spots in Sri Lanka for Every Skill___.jpg.jpg";
import heroTea from "./hero_images/tea.jpg";
import sigiriyaArrange from "./image_arrenge/sigiriya.jpg";
import galleFortArrange from "./image_arrenge/galle fort.jpg";
import nineArchArrange from "./image_arrenge/nine arch.jpg";
import trainArrange from "./image_arrenge/train Gb.jpg";
import mirissaArrange from "./image_arrenge/mirissa.jpg";
import minneriyaArrange from "./image_arrenge/Minneriya .jpg.jpg";

const heroImageModules = import.meta.glob("./hero_images/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const IMAGE_EXTENSION_PATTERN = /\.(jpe?g|png|webp|avif)$/i;

/** Prefer the original hero still as the first slide, then alphabetical for the rest. */
function orderHeroSlideshowPaths(paths: string[]): string[] {
  return [...paths].sort((a, b) => {
    const aIsPrimary = a.includes("1st background");
    const bIsPrimary = b.includes("1st background");
    if (aIsPrimary && !bIsPrimary) return -1;
    if (!aIsPrimary && bIsPrimary) return 1;
    return a.localeCompare(b, undefined, { sensitivity: "base" });
  });
}

export const heroSlideshowImages: string[] = orderHeroSlideshowPaths(
  Object.keys(heroImageModules).filter((path) =>
    IMAGE_EXTENSION_PATTERN.test(path),
  ),
).map((path) => heroImageModules[path]);

export const images = {
  heroBg: heroSlideshowImages[0] ?? "",
  nineArch,
  recliningBuddha,
  rafting,
  leopardRock,
  elephantSunset,
  beachPalm,
  teaPlantation,
  galleLighthouse,
  riceCurry,
  sigiriyaAerial,
  beachBoats,
  elephantBath,
  logo,
  sigiriya,
  teaTrain,
  teaWoman,
  temple,
  templeHeritage,
  stiltFishermen,
  leopardCloseup,
  teaMist,
  fruitMarket,
  kandyanDancer,
  galleSunset,
  trainTraveler,
  sticker,
  minneriyaPark,
  teaPlantationsWide,
  leopardPortrait,
  galleFortress,
  surfSpots,
  heroTea,
  sigiriyaArrange,
  galleFortArrange,
  nineArchArrange,
  trainArrange,
  mirissaArrange,
  minneriyaArrange,
} as const;

export type ImageKey = keyof typeof images;
