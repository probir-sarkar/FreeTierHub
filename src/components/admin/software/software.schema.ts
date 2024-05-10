import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CATEGORY_TYPES, FREE_MODELS_TYPES } from "@/utils/constants";

export const addSoftwareSchema = z.object({
  name: z.string().min(3).max(255),
  description: z.string().min(3),
  subtitle: z.string().min(3).max(255),
  features: z.array(
    z.object({
      value: z.string().optional().or(z.null())
    })
  ),
  slug: z
    .string()
    .min(3)
    .max(255)
    .regex(/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/, {
      message: "Slug must be a valid URL slug"
    })
    .toLowerCase(),
  tags: z
    .array(
      z.object({
        value: z.string(),
        label: z.string()
      })
    )
    .nonempty(),
  github: z.string().url().optional().or(z.literal("")),
  website: z.string().url().optional().or(z.literal("")),
  category: z.string(),
  creditCardRequired: z.boolean().optional(),
  payModel: z.enum(FREE_MODELS_TYPES)
});

export const resolver = zodResolver(addSoftwareSchema);

// export schema

export type SoftwareFormInput = z.infer<typeof addSoftwareSchema>;
