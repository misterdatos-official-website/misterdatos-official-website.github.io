import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({image}) => z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    author: z.string().default('MisterDatos'),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    slug: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    image: image().optional(),
  }),
});

export const collections = { blog };