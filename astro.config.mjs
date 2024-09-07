import { defineConfig } from 'astro/config';
// import mdx from '@astrojs/mdx';
// import sitemap from '@astrojs/sitemap';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeWrapAll from 'rehype-wrap-all';
import rehypeRewrite from 'rehype-rewrite';
import remarkCodeTitles from "remark-flexible-code-titles";
import remarkUnwrapImages from 'remark-unwrap-images';
import rehypePrettyCode from 'rehype-pretty-code';

const prettyCodeOptions = {
    theme: "github-dark",
    onVisitLine(node) {
      if (node.children.length === 0) {
        node.children = [
          {
            type: "text",
            value: " ",
          },
        ];
      }
    },
    onVisitHighlightedLine(node) {
      node.properties.className.push("highlighted");
    },
    onVisitHighlightedWord(node) {
      node.properties.className = ["word"];
    },
    tokensMap: {},
  };

// https://astro.build/config
export default defineConfig({
    site: 'https://blog.x7md.net',
    redirects: {
        '/about-me': '/about',
        "/blog/[...slug]": "/posts/[...slug]"
    },
    markdown: {
        syntaxHighlight: false,
        remarkPlugins: [[remarkUnwrapImages, {}], [remarkCodeTitles, {}]],
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions] ,[rehypeAutolinkHeadings, {
          behavior: 'prepend'
        },
        ],
        // ['rehype-figure-for-img', {}],
        [rehypeWrapAll, {
          selector: 'img',
          wrapper: 'figure data-img .text-center'
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
                properties: {
                  class: "text-xs"
                },
                children: [
                  {
                    type: "element",
                    tagName: "small",
                    children: [
                      {type: 'text', value: node.properties.alt}
                    ]
                  }
                ]
              }]
            }
          }
        }]
    
        ],
      },
});
