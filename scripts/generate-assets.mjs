/**
 * Asset Generation Pipeline
 * Generates all branding assets from the source logo.png using Sharp.
 * Idempotent — only regenerates when logo.png has changed.
 * Run: node scripts/generate-assets.mjs
 */
import sharp from "sharp";
import { createHash } from "crypto";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");
const sourceLogo = join(publicDir, "logo.png");
const cacheFile = join(__dirname, "..", ".asset-cache.json");

function getFileHash(filePath) {
  const data = readFileSync(filePath);
  return createHash("sha256").update(data).digest("hex");
}

async function generateAssets() {
  // ── Idempotency check ────────────────────────────────
  if (!existsSync(sourceLogo)) {
    console.error("Source logo not found at public/logo.png. Skipping asset generation.");
    process.exit(0);
  }

  const currentHash = getFileHash(sourceLogo);
  const cache = existsSync(cacheFile) ? JSON.parse(readFileSync(cacheFile, "utf-8")) : {};

  if (cache.logoHash === currentHash) {
    console.log("logo.png unchanged — skipping asset generation.");
    return;
  }

  console.log("logo.png changed — regenerating all derived assets...\n");

  // ── Generate assets ──────────────────────────────────
  const logo = sharp(sourceLogo);
  const meta = await logo.metadata();
  console.log(`Source logo: ${meta.width}x${meta.height} (${meta.format})`);

  // favicon
  await logo
    .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(join(publicDir, "favicon.png"));
  console.log("✓ favicon.png (32x32)");

  await logo
    .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(join(publicDir, "favicon.ico"));
  console.log("✓ favicon.ico (32x32)");

  // apple-touch-icon
  await logo
    .resize(180, 180, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(join(publicDir, "apple-touch-icon.png"));
  console.log("✓ apple-touch-icon.png (180x180)");

  // android-chrome icons
  await logo
    .resize(192, 192, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(join(publicDir, "android-chrome-192x192.png"));
  console.log("✓ android-chrome-192x192.png");

  await logo
    .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(join(publicDir, "android-chrome-512x512.png"));
  console.log("✓ android-chrome-512x512.png");

  // OG Image
  const ogWidth = 1200;
  const ogHeight = 630;

  const logoResized = await logo
    .resize(200, 200, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const ogBg = await sharp({
    create: {
      width: ogWidth,
      height: ogHeight,
      channels: 3,
      background: { r: 15, g: 15, b: 35 },
    },
  })
    .png()
    .toBuffer();

  await sharp(ogBg)
    .composite([
      {
        input: logoResized,
        top: Math.round((ogHeight - 200) / 2) - 50,
        left: Math.round((ogWidth - 200) / 2),
      },
    ])
    .png()
    .toFile(join(publicDir, "og-image.png"));
  console.log("✓ og-image.png (1200x630)");

  // ── Save cache ───────────────────────────────────────
  cache.logoHash = currentHash;
  writeFileSync(cacheFile, JSON.stringify(cache, null, 2));
  console.log("\nAll assets generated successfully from logo.png");
}

generateAssets().catch((err) => {
  console.error("Asset generation failed:", err);
  process.exit(1);
});
