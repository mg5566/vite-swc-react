// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Utility to set sourcemap based on environment
const isEnvWithSourceMap = ["local", "development"].includes(
  process.env.NODE_ENV
);

// Default configuration for dev command
export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
    sourcemap: isEnvWithSourceMap, // Conditional source map generation
  },
});
