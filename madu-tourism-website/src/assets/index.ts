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
import homeSigiriya from "./image_arrenge/sigiriya.jpg";
import homeNineArch from "./image_arrenge/nine arch.jpg";
import homeMirissa from "./image_arrenge/mirissa.jpg";
import homeMinneriya from "./image_arrenge/Minneriya .jpg.jpg";
import homeGalleFort from "./image_arrenge/galle fort.jpg";
import homeTrainGb from "./image_arrenge/train Gb.jpg";
import homeFood from "./image_arrenge/food.jpg";
import beachCafeHero from "./image_arrenge/beach cafe hero.jpg";
import sigiriyaRock from "./image_arrenge/Sigiriya Rock.jpg";
import nelumKola from "./image_arrenge/nelum kola.jpg";
import maligawa from "./image_arrenge/maligawa.jpg";
import kotiDenna from "./image_arrenge/koti denna.jpg";
import fortressInGalle from "./image_arrenge/Fortress in Galle‧.jpg.jpg";
import blueBeachContact from "./image_arrenge/blue beach contact.jpg";
import women from "./image_arrenge/women.jpg";
import perahera from "./image_arrenge/perahera.jpg";
import colomboMusi from "./image_arrenge/colombo musi.jpg";
import nuwaraEliya from "./image_arrenge/nuwara eliya.jpg";
import teaW from "./image_arrenge/tea w.jpg";
import destAnuradhapura from "./destinations/anuradha.jpg";
import destTrincomalee from "./destinations/Trincomale.jpg";
import destArugambe from "./destinations/arugambe.jpg";
import destDambulla from "./destinations/dambulla.jpg";
import destBentota from "./destinations/bentota.jpg";
import destColombo from "./destinations/colombo.jpg";
import destHabarana from "./destinations/habarana.jpg";
import destKitulgala from "./destinations/kithulgala.jpg";
import destPolonnaruwa from "./destinations/polonnaruwa.jpg";


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
  homeSigiriya,
  homeNineArch,
  homeMirissa,
  homeMinneriya,
  homeGalleFort,
  homeTrainGb,
  homeFood,
  beachCafeHero,
  sigiriyaRock,
  nelumKola,
  maligawa,
  kotiDenna,
  fortressInGalle,
  galleFortress: fortressInGalle,
  mirissaArrange: homeMirissa,
  blueBeachContact,
  women,
  homeWomen: women,
  perahera,
  colomboMusi,
  nuwaraEliya,
  teaW,
  destAnuradhapura,
  destTrincomalee,
  destArugambe,
  destDambulla,
  destBentota,
  destColombo,
  destHabarana,
  destKitulgala,
  destPolonnaruwa,
} as const;

export type ImageKey = keyof typeof images;
