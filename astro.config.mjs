import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://benh3n.com",
  prefetch: {
    defaultStrategy: "viewport",
  },
  integrations: [mdx()],

  vite: {
    plugins: [tailwindcss()],
  },
});
