"use server";
import { Category, Software } from "@/models/Soft";
import type { CategoryDocument } from "@/models/Soft";
import dbConnect from "@/lib/dbConnect";
import type { SoftwareFormInput } from "@/app/add-software/SoftwareForm";

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

export const addSoftware = async (data: SoftwareFormInput) => {
  try {
    const { name, description, categories } = data;
    const categoriesIds = categories.map((category) => category.value);
    await dbConnect();
    const software = await Software.create({ name, description, categories: categoriesIds });
    return Boolean(software);
  } catch (e) {
    return false;
  }
};
