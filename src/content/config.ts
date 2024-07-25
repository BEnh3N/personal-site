import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        image: z.object({
            url: image().refine((img) => img.width >= 720, {
                message: "Cover image must be at least 720 pixels wide!",
            }),
            alt: z.string()
        }),
        tags: z.array(z.string())
    })
});

export const collections = {
    posts: postCollection,
};