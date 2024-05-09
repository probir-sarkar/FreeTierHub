import z from "zod";
import { FREE_MODELS } from "./data";

export const CATEGORIES = [
  {
    value: "software",
    label: "Software"
  },
  {
    value: "tool",
    label: "Tool"
  },
  {
    value: "library",
    label: "Library"
  },
  {
    value: "hardware",
    label: "Hardware"
  },
  {
    value: "service",
    label: "Service"
  },
  {
    value: "framework",
    label: "Framework"
  },
  {
    value: "platform",
    label: "Platform"
  },
  {
    value: "plugin",
    label: "Plugin"
  },
  {
    value: "extension",
    label: "Extension"
  }
] as const;

type Category = (typeof CATEGORIES)[number]["value"];

// https://stackoverflow.com/questions/73825273/creating-a-zod-enum-from-an-object
export const CATEGORY_TYPES: [Category, ...Category[]] = [CATEGORIES[0].value, ...CATEGORIES.slice(1).map((p) => p.value)];

export const categotySchema = z.enum(CATEGORY_TYPES);
export type CategoryType = z.infer<typeof categotySchema>;

export const ROLES = [
  {
    value: "admin",
    label: "Admin"
  },
  {
    value: "user",
    label: "User"
  }
] as const;

type Role = (typeof ROLES)[number]["value"];

export const ROLE_TYPES: [Role, ...Role[]] = [ROLES[0].value, ...ROLES.slice(1).map((p) => p.value)];

export const roleSchema = z.enum(ROLE_TYPES);
export type RoleType = z.infer<typeof roleSchema>;

type Model = (typeof FREE_MODELS)[number]["slug"];
export const FREE_MODELS_TYPES: [Model, ...Model[]] = [FREE_MODELS[0].slug, ...FREE_MODELS.slice(1).map((p) => p.slug)];
export const freeModelSchema = z.enum(FREE_MODELS_TYPES);
export type FreeModelType = z.infer<typeof freeModelSchema>;
