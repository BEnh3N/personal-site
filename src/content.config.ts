import { z, defineCollection, reference } from "astro:content";
import { file, glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    tags: z.array(reference("tags")),
  }),
});

const tags = defineCollection({
  loader: file("src/content/tags.toml"),
  schema: z.object({
    description: z.string().optional(),
  }),
});

export const collections = { posts, tags };
