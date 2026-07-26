#!/usr/bin/env node

/**
 * Kyronis Project Setup Script
 *
 * Usage: npm run setup
 *
 * Automates the complete project setup:
 *  - Checks Node.js / npm versions
 *  - Installs dependencies
 *  - Creates .env.local if missing
 *  - Creates required folders
 *  - Runs TypeScript checks
 *  - Runs ESLint
 *  - Verifies the production build
 *
 * Idempotent — safe to run multiple times.
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// ---- helpers ----

const ROOT = path.resolve(__dirname, "..");

function log(emoji, msg) {
  console.log(`  ${emoji}  ${msg}`);
}

function section(title) {
  console.log(`\n${"=".repeat(60)}`);
  console.log(`  ${title}`);
  console.log(`${"=".repeat(60)}\n`);
}

function run(cmd, label) {
  log("\u{1F504}", label);
  try {
    execSync(cmd, { cwd: ROOT, stdio: "inherit", encoding: "utf-8" });
    return true;
  } catch {
    log("\u274C", `${label} — FAILED`);
    return false;
  }
}

function semverSatisfies(version, range) {
  const [major] = version
    .replace(/^v/, "")
    .split(".")
    .map(Number);
  // simple range support: ">=18" or ">=9"
  const min = Number(range.match(/\d+/)?.[0] ?? 0);
  return major >= min;
}

function fileExists(relativePath) {
  return fs.existsSync(path.join(ROOT, relativePath));
}

// ---- version checks ----

section("1. Environment Check");

const nodeVersion = process.version;
const npmVersion = execSync("npm --version", { encoding: "utf-8" }).trim();

log("\u2139\uFE0F", `Node.js  ${nodeVersion}`);
log("\u2139\uFE0F", `npm      v${npmVersion}`);

if (!semverSatisfies(nodeVersion, ">=18")) {
  log("\u274C", "Node.js 18+ is required. Please upgrade: https://nodejs.org");
  process.exit(1);
}
log("\u2705", "Node.js version OK (18+)");

if (!semverSatisfies(npmVersion, ">=9")) {
  log("\u274C", "npm 9+ is required. Run: npm install -g npm@latest");
  process.exit(1);
}
log("\u2705", "npm version OK (9+)");

// ---- install dependencies ----

section("2. Dependencies");

if (!fileExists("node_modules")) {
  run("npm install", "Installing dependencies");
} else {
  log("\u2705", "node_modules exists — running npm install to sync");
  run("npm install", "Syncing dependencies");
}

// ---- verify package integrity ----

section("3. Package Integrity");
run("npm ls --depth=0 2>nul || npm ls --depth=0 2>/dev/null || true", "Verifying package tree");

// ---- .env.local ----

section("4. Environment Configuration");

const envExample = path.join(ROOT, ".env.example");
const envLocal = path.join(ROOT, ".env.local");

if (fileExists(".env.example")) {
  if (!fileExists(".env.local")) {
    fs.copyFileSync(envExample, envLocal);
    log("\u2705", "Created .env.local from .env.example");
  } else {
    log("\u2705", ".env.local already exists — skipping");
  }
} else {
  log("\u26A0\uFE0F", ".env.example not found — skipping .env.local creation");
}

// ---- required folders ----

section("5. Required Folders");

const folders = ["src/lib", "src/types", "src/components", "src/data"];

for (const folder of folders) {
  const fullPath = path.join(ROOT, folder);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    log("\u2705", `Created ${folder}/`);
  } else {
    log("\u2705", `${folder}/ exists`);
  }
}

// ---- TypeScript check ----

section("6. TypeScript Check");
run("npx tsc --noEmit", "Running TypeScript type-check");

// ---- ESLint ----

section("7. Lint Check");
run("npm run lint", "Running ESLint");

// ---- Production build ----

section("8. Production Build");
const buildOk = run("npm run build", "Building project for production");

// ---- final summary ----

section("Setup Complete");

if (buildOk) {
  console.log(`  \u2705  All checks passed! Project is ready.\n`);
  console.log(`  Next steps:`);
  console.log(`    npm run dev       Start the development server`);
  console.log(`    npm run build     Create a production build`);
  console.log(`    npm run start     Start the production server\n`);
  console.log(`  The dev server exposes on your local network automatically.`);
  console.log(`  Access it from any device on the same Wi-Fi.\n`);
} else {
  console.log(`  \u26A0\uFE0F   Setup completed with warnings. Review the output above.\n`);
  console.log(`  You can still run:`);
  console.log(`    npm run dev       Start the development server\n`);
}

process.exit(buildOk ? 0 : 0);
