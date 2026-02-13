import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const library = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/library" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    coverImage: z.string().optional(),
    rating: z.number().min(1).max(5).optional(),
    fiction: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    externalLinks: z.object({
      amazon: z.string().optional(),
      goodreads: z.string().optional(),
      bookshop: z.string().optional(),
    }).optional(),
    relatedBooks: z.array(z.string()).optional(),
  }),
});

export const collections = { blog, library };
