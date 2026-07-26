import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow dev server access from external devices on the local network.
  // Required so React hydration works on mobile when accessing via IP address
  // (e.g. http://192.168.1.34:3000). Without this, the HMR WebSocket fails
  // and the debugChannel blocks createRoot().render(), leaving the page as
  // static SSR HTML with no client-side interactivity.
  allowedDevOrigins: ["192.168.1.34"],
};

export default nextConfig;
