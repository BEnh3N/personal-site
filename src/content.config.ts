import { z, defineCollection } from "astro:content";
import { glob } from 'astro/loaders';

const posts = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/posts" }),
    schema: () => z.object({
        title: z.string(),
        pubDate: z.coerce.date(),
        description: z.string(),
        tags: z.array(z.string())
    })
});

export const collections = { posts };