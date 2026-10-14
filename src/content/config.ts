import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().default('Guide'),
    author: z.string().default('B2B Solutions'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
