import z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

export const addTagSchema = z.object({
  name: z.string().min(3).max(255),
  description: z.string().min(3),
  slug: z
    .string()
    .min(3)
    .max(255)
    .regex(/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/, {
      message: "Slug must be a valid URL slug"
    })
    .toLowerCase()
});

export const resolver = zodResolver(addTagSchema);

export type TagFormData = z.infer<typeof addTagSchema>;
