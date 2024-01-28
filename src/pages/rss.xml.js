import rss, { pagesGlobToRssItems } from "@astrojs/rss";


export async function GET(context) {
    return rss({
        title: 'BEnh3N Blog',
        description: 'The greatest blog to ever exist',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<languages>en-us</languages>`,
    });
}