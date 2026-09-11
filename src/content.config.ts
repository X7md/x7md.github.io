import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  // Content Layer API: files are discovered by a loader instead of by the
  // magic `src/content/<collection>` directory.
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    keyword: z.array(z.string()).default([]),
    image: z.string().optional(),
    author: z.string().default('حمد بنقالي'),
  }),
});

export const collections = {
  posts,
};
