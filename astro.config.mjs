import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://benh3n.com",
  prefetch: {
    defaultStrategy: "viewport",
  },
  integrations: [mdx(), solidJs()],

  vite: {
    plugins: [tailwindcss()],
  },
});