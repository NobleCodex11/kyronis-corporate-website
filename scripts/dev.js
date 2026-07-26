#!/usr/bin/env node

/**
 * Kyronis Development Server Launcher
 *
 * Starts Next.js on 0.0.0.0 so the website is accessible from any device
 * on the same local network. Prints both the local and network URLs.
 */

const { spawn } = require("child_process");
const os = require("os");
const path = require("path");

const PORT = process.env.PORT || 3000;
const ROOT = path.resolve(__dirname, "..");

// ---- find the local network IP ----

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name] || []) {
      // skip internal / non-IPv4
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return null;
}

const localIP = getLocalIP();

// ---- start Next.js dev server ----

console.log("\n  Kyronis — Development Server\n");
console.log("  Starting Next.js...\n");

const child = spawn(
  "npx",
  ["next", "dev", "-H", "0.0.0.0", "-p", String(PORT)],
  {
    cwd: ROOT,
    stdio: "inherit",
    env: { ...process.env, PORT: String(PORT) },
  }
);

// ---- print network URLs after a short delay (once the server banner appears) ----

setTimeout(() => {
  console.log(`\n  ${"=".repeat(50)}`);
  console.log(`  Local:   http://localhost:${PORT}`);
  if (localIP) {
    console.log(`  Network: http://${localIP}:${PORT}`);
  }
  console.log(`  ${"=".repeat(50)}\n`);
}, 3000);

child.on("close", (code) => {
  process.exit(code);
});
