"use server";

import dbConnect from "@/lib/dbConnect";
import { Category } from "@/models/Soft";

interface CategoryData {
  name: string;
  description: string;
}
export async function addCategory(data: CategoryData) {
  try {
    const { name, description } = data;
    await dbConnect();
    const category = await Category.create({ name, description });
    console.log(category);

    return Boolean(category);
  } catch (e) {}
}
