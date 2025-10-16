import { z } from "zod";

export const blogSchema = z.object({
  title: z
    .string()
    .min(10, "Title must be at least 10 characters")
    .max(200, "Title cannot exceed 200 characters")
    .trim(),

  excerpt: z
    .string()
    .min(20, "Excerpt must be at least 20 characters")
    .max(500, "Excerpt cannot exceed 500 characters")
    .trim(),

  content: z.string().min(100, "Content must be at least 100 characters"),

  coverImage: z.string().url("Cover image must be a valid URL"),

  readTime: z.string().optional().default("5 min read"),

  author: z.string().optional().default("Digilynk Team"),

  tags: z.array(z.string()).optional().default([]),

  published: z.boolean().optional().default(true),

  featured: z.boolean().optional().default(false),
});

export const updateBlogSchema = blogSchema.partial();
