import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		layout: z.string(),
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		publishDate: z
			.string()
			/* .or(z.date())
			.transform((val) => new Date(val)) */,
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog };
