"use server";
import { Category, Software, SoftwareDocument } from "@/models/Soft";
import type { CategoryDocument } from "@/models/Soft";
import dbConnect from "@/lib/dbConnect";
import type { SoftwareFormInput } from "./software.schema";
import { revalidatePath } from "next/cache";

export const allCategories = async () => {
  try {
    await dbConnect();
    const categories: CategoryDocument[] = await Category.find();
    const parseData = JSON.parse(JSON.stringify(categories));

    return parseData;
  } catch (error) {
    return [];
  }
};

export const addSoftware = async (data: SoftwareFormInput): Promise<boolean> => {
  try {
    const { categories, ...newData } = data;
    const categoriesIds = categories.map((category) => category.value);
    const features = newData.features.filter((feature) => feature.value).map((feature) => feature.value);
    await dbConnect();
    const software = await Software.create({ ...newData, categories: categoriesIds, features });
    revalidatePath("/admin/softwares");
    return !!software;
  } catch (e) {
    console.log(e);

    return false;
  }
};

export const updateSoftware = async (data: SoftwareFormInput, id: string) => {
  try {
    const { categories, ...newData } = data;
    const categoriesIds = categories.map((category) => category.value);
    const features = newData.features.filter((feature) => feature.value).map((feature) => feature.value);
    await dbConnect();
    const software = await Software.findByIdAndUpdate(id, { ...newData, categories: categoriesIds, features });
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
    const parseData = JSON.parse(JSON.stringify(softwares)) as SoftwareDocument[];
    return parseData;
  } catch (error) {
    return [];
  }
};
