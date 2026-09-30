import heroBg from "./1st background image.jpg";
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
import logo from "./logo.png";
import sigiriya from "./sigiriya.jpg";
import teaTrain from "./tea.jpg";
import teaWoman from "./teawomen.jpg";
import temple from "./temple.jpg";
import stiltFishermen from "./unnamed.jpg";
import leopardCloseup from "./unnamed (1).jpg";
import teaMist from "./unnamed (2).jpg";
import fruitMarket from "./unnamed (3).jpg";
import kandyanDancer from "./unnamed (5).jpg";
import galleSunset from "./unnamed (6).jpg";
import trainTraveler from "./unnamed (7).jpg";

export const images = {
  heroBg,
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
} as const;

export type ImageKey = keyof typeof images;
