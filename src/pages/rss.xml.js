import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("posts");
  return rss({
    title: "BEnh3N's Blog",
    description: "The greatest blog to ever exist",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: `<![CDATA[<img src=${post.data.image.url.src} />]]>${post.data.description}`,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<languages>en-us</languages>`,
  });
}
