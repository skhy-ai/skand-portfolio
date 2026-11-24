import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const distDir = path.join(rootDir, "dist");
const distClientDir = path.join(distDir, "client");
const outputPublicDir = path.join(rootDir, ".output", "public");

// 1. If .output/public exists and dist does not exist, copy .output/public to dist
if (fs.existsSync(outputPublicDir) && !fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
  fs.cpSync(outputPublicDir, distDir, { recursive: true });
  console.log("[postbuild] Copied .output/public -> dist");
}

// 2. If dist exists, ensure dist/client exists as a mirror (satisfying Netlify UI publish: dist/client)
if (fs.existsSync(distDir)) {
  if (!fs.existsSync(distClientDir)) {
    fs.mkdirSync(distClientDir, { recursive: true });
  }

  const entries = fs.readdirSync(distDir);
  for (const entry of entries) {
    if (entry === "client") continue;
    const src = path.join(distDir, entry);
    const dest = path.join(distClientDir, entry);
    fs.cpSync(src, dest, { recursive: true });
  }
  console.log("[postbuild] Mirrored dist -> dist/client");
}

// 3. Verify key assets
const checks = ["favicon.ico", "favicon.svg", "robots.txt", "sitemap.xml"];
for (const target of [distDir, distClientDir]) {
  if (fs.existsSync(target)) {
    for (const file of checks) {
      const p = path.join(target, file);
      if (!fs.existsSync(p)) {
        const publicFile = path.join(rootDir, "public", file);
        if (fs.existsSync(publicFile)) {
          fs.copyFileSync(publicFile, p);
          console.log(`[postbuild] Copied missing ${file} into ${target}`);
        }
      }
    }
  }
}

console.log("[postbuild] Build verification complete.");
