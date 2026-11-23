import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "node:path";

// Source lives in _pubquiz (not published by GitHub Pages).
// The build goes to ../pubquiz, which becomes mstene.no/pubquiz.
export default defineConfig({
  plugins: [svelte()],
  base: "./",
  server: { port: 5191 },
  build: {
    outDir: resolve(__dirname, "../pubquiz"),
    emptyOutDir: true
  }
});
