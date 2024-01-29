import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://benh3n-blog.netlify.app",
  integrations: [tailwind(), preact()]
});