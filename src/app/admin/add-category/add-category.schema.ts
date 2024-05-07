import z from "zod";
import { CATEGORY_TYPES } from "@/utils/constants";
import { zodResolver } from "@hookform/resolvers/zod";

export const addCategorySchema = z.object({
  name: z.string().min(3).max(255),
  description: z.string().min(3),
  slug: z
    .string()
    .min(3)
    .max(255)
    .regex(/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/, {
      message: "Slug must be a valid URL slug",
    }),
  type: z.enum(CATEGORY_TYPES),
});

export const resolver = zodResolver(addCategorySchema);

export type CategoryFormData = z.infer<typeof addCategorySchema>;
