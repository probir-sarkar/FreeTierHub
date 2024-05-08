import z from "zod";
function z_enumFromArray(array: string[]) {
  return z.enum([array[0], ...array.slice(1)]);
}

export const CATEGORIES = [
  {
    value: "software",
    label: "Software",
  },
  {
    value: "tool",
    label: "Tool",
  },
  {
    value: "library",
    label: "Library",
  },
  {
    value: "hardware",
    label: "Hardware",
  },
  {
    value: "service",
    label: "Service",
  },
  {
    value: "framework",
    label: "Framework",
  },
  {
    value: "platform",
    label: "Platform",
  },
  {
    value: "plugin",
    label: "Plugin",
  },
  {
    value: "extension",
    label: "Extension",
  },
] as const;

type Category = (typeof CATEGORIES)[number]["value"];

// https://stackoverflow.com/questions/73825273/creating-a-zod-enum-from-an-object
export const CATEGORY_TYPES: [Category, ...Category[]] = [
  CATEGORIES[0].value,
  ...CATEGORIES.slice(1).map((p) => p.value),
];

export const categotySchema = z.enum(CATEGORY_TYPES);
export type CategoryType = z.infer<typeof categotySchema>;
