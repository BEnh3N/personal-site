import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://benh3n.com",
  integrations: [preact(), mdx()],

  vite: {
    plugins: [tailwindcss()]
  }
});