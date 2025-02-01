import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://benh3n.com",
  integrations: [preact({ compat: true })],

  vite: {
    plugins: [tailwindcss()]
  }
});