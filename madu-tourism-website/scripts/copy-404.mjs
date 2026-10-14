import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const indexPath = path.join(distDir, "index.html");
const notFoundPath = path.join(distDir, "404.html");

if (!fs.existsSync(indexPath)) {
  console.error("Error: dist/index.html was not found.");
  process.exit(1);
}

fs.copyFileSync(indexPath, notFoundPath);
console.log("✓ Successfully created dist/404.html from dist/index.html");
