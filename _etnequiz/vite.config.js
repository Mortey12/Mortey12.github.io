import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "node:path";

// Kjeldekoden ligg i _etnequiz (blir ikkje publisert av GitHub Pages).
// Ferdigbygde filer går til ../etnequiz, som blir mstene.no/etnequiz.
export default defineConfig({
  plugins: [svelte()],
  base: "./",
  build: {
    outDir: resolve(__dirname, "../etnequiz"),
    emptyOutDir: true,
    rollupOptions: { input: { index: resolve(__dirname, "index.html"), skjerm: resolve(__dirname, "skjerm.html") } }
  }
});
