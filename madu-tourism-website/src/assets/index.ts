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
import teaWoman from "./download (3).jpeg";
import temple from "./download (3).jpeg";
import stiltFishermen from "./unnamed.jpg";
import leopardCloseup from "./unnamed (1).jpg";
import teaMist from "./unnamed (2).jpg";
import fruitMarket from "./unnamed (3).jpg";
import kandyanDancer from "./unnamed (5).jpg";
import galleSunset from "./unnamed (6).jpg";
import trainTraveler from "./unnamed (7).jpg";
import sticker from "./sticker.png";

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
  stiltFishermen,
  leopardCloseup,
  teaMist,
  fruitMarket,
  kandyanDancer,
  galleSunset,
  trainTraveler,
  sticker,
} as const;

export type ImageKey = keyof typeof images;
