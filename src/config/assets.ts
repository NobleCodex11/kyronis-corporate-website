/**
 * Centralized Branding Asset Configuration
 *
 * ALL branding asset paths (logos, favicons, icons, images)
 * must be defined here. No hardcoded asset paths anywhere else.
 *
 * All assets are generated FROM the source logo.png via:
 *   node scripts/generate-assets.mjs
 *
 * To swap the logo: replace public/logo.png, re-run the script.
 */

export const assets = {
  // ── Primary Logo ──────────────────────────────────────────
  logo: "/logo.png",
  logoDark: "/logo.png",
  logoLight: "/logo.png",

  // ── Favicon & Browser Tab ─────────────────────────────────
  favicon: "/favicon.ico",
  icon32: "/favicon.png",

  // ── Apple (Safari / iOS) ──────────────────────────────────
  appleTouchIcon: "/apple-touch-icon.png",

  // ── Android / PWA ─────────────────────────────────────────
  androidIcon192: "/android-chrome-192x192.png",
  androidIcon512: "/android-chrome-512x512.png",

  // ── Open Graph / Social Media ─────────────────────────────
  ogImage: "/og-image.png",
  twitterImage: "/og-image.png",

  // ── Structured Data / JSON-LD ─────────────────────────────
  structuredDataLogo: "/logo.png",

  // ── Web App Manifest Icons ────────────────────────────────
  manifestIcons: [
    {
      src: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "any",
    },
    {
      src: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any",
    },
    {
      src: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  ] as const,
} as const;

export type AssetKey = keyof typeof assets;
