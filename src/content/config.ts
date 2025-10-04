import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
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
    // Add more fields as needed
  }),
});

export const collections = {
  posts,
};
