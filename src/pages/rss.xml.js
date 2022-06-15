import rss from '@astrojs/rss';

const postImportResult = import.meta.globEager('./**/*.md');
const posts = Object.values(postImportResult);

export const get = () => rss({
    title: 'x7md blog',
    description: 'مدونة حمد بنقالي x7md, مكان لآرائي الشخصية وبعض الأمور التقنية البرمجية',
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      title: post.frontmatter.title,
      link: post.frontmatter.link,
      pubDate: post.frontmatter.date
    }))
  });
