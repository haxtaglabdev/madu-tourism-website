import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const svgPath = path.join(root, "src", "assets", "maps", "sri-lanka-outline.svg");
const outPath = path.join(root, "src", "data", "sriLankaLandPaths.ts");

const svg = fs.readFileSync(svgPath, "utf8");
const paths = [...svg.matchAll(/\sd="([^"]+)"/g)].map((m) => m[1]);

const ts = `/** Accurate Sri Lanka landmass (Natural Earth / Wikimedia location map). CC BY-SA 3.0 */
export const SRI_LANKA_VIEWBOX = "0 0 1200 1838" as const;

export const SRI_LANKA_LAND_PATHS: readonly string[] = ${JSON.stringify(paths, null, 2)};
`;

fs.writeFileSync(outPath, ts);
console.log(`Wrote ${outPath} (${paths.length} paths)`);
