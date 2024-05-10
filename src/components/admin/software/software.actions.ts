"use server";
import { Tag, TagDocument } from "@/models/Tag";
import { Software, ParsedSoftware } from "@/models/Soft";
import { Category, CategoryDocument } from "@/models/Category";

import dbConnect from "@/lib/dbConnect";
import type { SoftwareFormInput } from "./software.schema";
import { revalidatePath } from "next/cache";

export const allTags = async () => {
  try {
    await dbConnect();
    const tags = await Tag.find();
    const categories: CategoryDocument[] = await Category.find();
    const parseData = JSON.parse(JSON.stringify(tags)) as TagDocument[];
    const parseCategories = JSON.parse(JSON.stringify(categories)) as CategoryDocument[];
    return { tags: parseData, categories: parseCategories };
  } catch (error) {
    return { tags: [], categories: [] };
  }
};

export const addSoftware = async (data: SoftwareFormInput): Promise<boolean> => {
  try {
    const { tags, ...newData } = data;
    const newTags = tags.map((tags) => tags.value);
    const features = newData.features.filter((feature) => feature.value).map((feature) => feature.value);
    await dbConnect();
    const software = await Software.create({ ...newData, tags: newTags, features });
    revalidatePath("/admin/softwares");
    return !!software;
  } catch (e) {
    console.log(e);

    return false;
  }
};

export const updateSoftware = async (data: SoftwareFormInput, id: string) => {
  try {
    const { tags, ...newData } = data;
    const tagsIds = tags.map((tags) => tags.value);
    const features = newData.features.filter((feature) => feature.value).map((feature) => feature.value);
    await dbConnect();
    const software = await Software.findByIdAndUpdate(id, { ...newData, tags: tagsIds, features });
    revalidatePath("/admin/softwares");
    return !!software;
  } catch (e) {
    return false;
  }
};

export const allSoftwares = async () => {
  try {
    await dbConnect();
    const softwares = await Software.find();
    const parseData = JSON.parse(JSON.stringify(softwares)) as ParsedSoftware[];
    return parseData;
  } catch (error) {
    return [];
  }
};
