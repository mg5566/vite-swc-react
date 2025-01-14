// vite.config.esbuild.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Utility to set sourcemap based on environment
const isEnvWithSourceMap = ["local", "development"].includes(
  process.env.NODE_ENV
);

export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
    outDir: "dist-esbuild",
    sourcemap: isEnvWithSourceMap, // Conditional source map generation
  },
});
