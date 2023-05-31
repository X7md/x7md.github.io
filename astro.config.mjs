import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeWrapAll from 'rehype-wrap-all';
import rehypeRewrite from 'rehype-rewrite';
import remarkCodeTitles from "remark-flexible-code-titles";
import remarkUnwrapImages from 'remark-unwrap-images';

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.x7md.net',
  integrations: [mdx(), sitemap(), tailwind(), alpinejs()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
    remarkPlugins: [[remarkUnwrapImages, {}], [remarkCodeTitles, {}]],
    rehypePlugins: [[rehypeAutolinkHeadings, {
      behavior: 'prepend'
    },
    ],
    // ['rehype-figure-for-img', {}],
    [rehypeWrapAll, {
      selector: 'img',
      wrapper: 'figure data-img'
    }],
    [rehypeRewrite, {
      rewrite: (node, index, parent) => {
        // remove h2 footnote
        if(node.properties?.id == 'footnote-label') {
          node.children = [];
          parent.children = parent.children.slice(1)
        }

        if(node.tagName == "img") {
          // console.log(parent)
          parent.children = [...parent.children, {
            type: 'element',
            tagName: "figcaption",
            properties: {},
            children: [
              {type: 'text', value: node.properties.alt}
            ]
          }]
        }
      }
    }]
  
    ]
  },
 
});