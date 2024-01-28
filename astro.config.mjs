import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://benh3n-blog.netlify.app",
  integrations: [tailwind()]
});