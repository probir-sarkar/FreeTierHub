"use server";
import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/dbConnect";
import { Category } from "@/models/Soft";

interface CategoryData {
  name: string;
  description: string;
}
export async function addCategory(data: CategoryData) {
  try {
    await dbConnect();
    const category = await Category.create(data);
    revalidatePath("/admin/categories");
    return Boolean(category);
  } catch (e) {
    return false;
  }
}

export async function updateCategory(id: string, data: CategoryData) {
  try {
    await dbConnect();
    const category = await Category.findByIdAndUpdate(id, data, { new: true });
    revalidatePath("/admin/categories");
    return Boolean(category);
  } catch (e) {
    return false;
  }
}
