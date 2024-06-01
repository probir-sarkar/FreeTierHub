"use server";
import { Software, ParsedSoftware } from "@/models/Soft";
import { Category, CategoryDocument } from "@/models/Category";

import dbConnect from "@/lib/dbConnect";

export interface SoftwareWithCategorized extends Omit<ParsedSoftware, "categories"> {
  categories: CategoryDocument[];
}

export const allSoftwaresByCategory = async (category: string) => {
  try {
    await dbConnect();
    const categoryData = await Category.findOne({ slug: category });
    const softwares = await Software.find({ categories: categoryData?._id }).populate("categories");
    const parseData = JSON.parse(JSON.stringify(softwares)) as SoftwareWithCategorized[];
    return parseData;
  } catch (error) {
    return [];
  }
};
