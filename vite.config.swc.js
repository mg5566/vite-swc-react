import { defineConfig } from "vite";
import swcReact from "@vitejs/plugin-react-swc";

// Utility to set sourcemap based on environment
const isEnvWithSourceMap = ["local", "development"].includes(
  process.env.NODE_ENV
);

// Configuration for SWC-based setup
export default defineConfig({
  plugins: [swcReact()],
  build: {
    target: "esnext",
    outDir: "dist-swc",
    sourcemap: isEnvWithSourceMap, // Conditional source map generation
  },
});
