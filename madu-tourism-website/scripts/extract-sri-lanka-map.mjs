import fs from "node:fs";
import path from "node:path";
import os from "node:os";

const src = path.join(os.tmpdir(), "sl-loc.svg");
const outDir = path.join(
  path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1")),
  "..",
  "src",
  "assets",
  "maps",
);
const outFile = path.join(outDir, "sri-lanka-outline.svg");

const svg = fs.readFileSync(src, "utf8");
const paths = [...svg.matchAll(/<path class="country"[^>]*\sd="([^"]+)"/g)].map(
  (m) => m[1],
);

if (paths.length === 0) {
  console.error("No country paths found");
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });

const pathElements = paths
  .map((d) => `  <path d="${d}" />`)
  .join("\n");

const output = `<?xml version="1.0" encoding="UTF-8"?>
<!--
  Geographic outline of Sri Lanka derived from Wikimedia Commons
  "Sri Lanka location map.svg" by Uwe Dedering (Natural Earth data).
  License: CC BY-SA 3.0 — https://creativecommons.org/licenses/by-sa/3.0/
  Equirectangular projection. Geographic bounds:
  N 10.2°, S 5.5°, W 79.2°, E 82.3°
-->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1838" fill="currentColor">
  <g id="sri-lanka-land">
${pathElements}
  </g>
</svg>
`;

fs.writeFileSync(outFile, output);
console.log(`Wrote ${outFile}`);
console.log(`paths: ${paths.length}, bytes: ${Buffer.byteLength(output)}`);
