import rss from '@astrojs/rss';
const postImportResult = import.meta.glob('../posts/**/*.md', { eager: true });
const posts = Object.values(postImportResult);

export const get = () => rss({
  // `<title>` field in output xml
  title: 'مدون  حمد بنقالي',
  // `<description>` field in output xml
  description: 'مدونة شخصية حيث ستجد آرائي، مواضيع عن البرمجة، وغير ذلك...',
  // base URL for RSS <item> links
  // SITE will use "site" from your project's astro.config.
  site: import.meta.env.SITE,
  // list of `<item>`s in output xml
  // simple example: generate items for every md file in /src/pages
  // see "Generating items" section for required frontmatter and advanced use cases
  items: posts.map((post) => ({
    link: post.url,
    title: post.frontmatter.title,
    pubDate: post.frontmatter.date,
  })),
  // (optional) inject custom xml
  customData: `<language>ar-sa</language>`,
});