import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
// import sanitizeHtml from "sanitize-html";
// import MarkdownIt from "markdown-it";
// const parser = new MarkdownIt();

export async function GET(context) {
  const posts = await getCollection("posts");
  return rss({
    title: "BEnh3N's Blog",
    description: "The greatest blog to ever exist",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,

      // content: sanitizeHtml(parser.render(post.body), {
      //   allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
      // }),
    })),
    customData: `<languages>en-us</languages>`,
  });
}
