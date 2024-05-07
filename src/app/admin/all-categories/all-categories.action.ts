"use server";
import dbConnect from "@/lib/dbConnect";
import { Category } from "@/models/Soft";

export const allCategories = async () => {
  try {
    await dbConnect();
    const categories = await Category.find();
    return categories.map((category) => category.toJSON());
  } catch (error) {
    return [];
  }
};
