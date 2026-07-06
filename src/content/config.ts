import { defineCollection, z } from 'astro:content';

const valueProps = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    order: z.number(),
  }),
});

const useCases = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    order: z.number(),
  }),
});

const marketFacts = defineCollection({
  type: 'content',
  schema: z.object({
    highlight: z.string().optional(),
    order: z.number(),
  }),
});

const quickStats = defineCollection({
  type: 'data',
  schema: z.object({
    value: z.string(),
    label: z.string(),
    icon: z.string(),
    order: z.number(),
  }),
});

export const collections = { valueProps, useCases, marketFacts, quickStats };
