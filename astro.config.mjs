import { defineConfig, fontProviders } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeWrapAll from 'rehype-wrap-all';
import rehypeRewrite from 'rehype-rewrite';
import remarkCodeTitles from 'remark-flexible-code-titles';
import rehypeUnwrapImages from 'rehype-unwrap-images';
import rehypePrettyCode from 'rehype-pretty-code';

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  theme: 'github-dark',
  // rehype-pretty-code v0.14 renders empty lines as <span class="line"></span>,
  // which collapse to zero height. Keep the old non-breaking behaviour.
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className = [...(node.properties.className ?? []), 'highlighted'];
  },
  onVisitHighlightedChars(node) {
    node.properties.className = ['word'];
  },
  tokensMap: {},
};

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.x7md.net',

  // Astro 7 defaults to compressHTML: 'jsx', which strips the whitespace between
  // inline elements. The Arabic prose here relies on those spaces around <a>/<time>,
  // so keep the pre-v7 whitespace handling.
  compressHTML: true,

  // Astro's built-in font pipeline: Vazirmatn is downloaded at build time,
  // self-hosted and preloaded instead of being pulled from fonts.googleapis.com.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Vazirmatn',
      cssVariable: '--font-vazirmatn',
      weights: ['100 900'],
      subsets: ['arabic', 'latin'],
      styles: ['normal'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],

  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'ar',
        locales: {
          ar: 'ar',
        },
      },
    }),
  ],

  redirects: {
    '/about-me': '/about',
    '/blog/[...slug]': '/posts/[...slug]',
  },

  markdown: {
    // Astro 7 renders Markdown with Sätteri by default. This project depends on
    // remark/rehype plugins, so opt back into the unified() pipeline and hand the
    // plugins straight to it (markdown.remarkPlugins/rehypePlugins are deprecated).
    processor: unified({
      remarkPlugins: [[remarkCodeTitles, {}]],
      rehypePlugins: [
        [rehypePrettyCode, prettyCodeOptions],
        // must run before rehypeWrapAll so images are unwrapped from <p> before
        // they get wrapped in <figure> (replaces the deprecated remark-unwrap-images)
        [rehypeUnwrapImages, {}],
        [rehypeSlug, {}],
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'append',
            properties: {
              className: ['heading-anchor'],
              // decorative: the heading itself is the real landmark
              ariaHidden: 'true',
              tabIndex: -1,
            },
            content: {
              type: 'element',
              tagName: 'span',
              properties: {},
              children: [{ type: 'text', value: '#' }],
            },
          },
        ],
        [
          rehypeWrapAll,
          {
            selector: 'img',
            wrapper: 'figure data-img .text-center',
          },
        ],
        [
          rehypeRewrite,
          {
            rewrite: (node, _index, parent) => {
              // remove the auto-generated "Footnotes" heading
              if (node.properties?.id === 'footnote-label') {
                node.children = [];
                parent.children = parent.children.slice(1);
              }

              if (node.tagName === 'img') {
                parent.children = [
                  ...parent.children,
                  {
                    type: 'element',
                    tagName: 'figcaption',
                    properties: { class: 'text-xs' },
                    children: [
                      {
                        type: 'element',
                        tagName: 'small',
                        properties: {},
                        children: [{ type: 'text', value: node.properties.alt }],
                      },
                    ],
                  },
                ];
              }
            },
          },
        ],
      ],
    }),
    syntaxHighlight: false,
  },
});
