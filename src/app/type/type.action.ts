"use server";
import { Category, Software, SoftwareDocument, CategoryDocument } from "@/models/Soft";
import dbConnect from "@/lib/dbConnect";

export interface SoftwareWithCategorized extends Omit<SoftwareDocument, "categories"> {
  categories: CategoryDocument[];
}
export const allSoftwaresByType = async (type: string) => {
  try {
    await dbConnect();
    const softwares = await Software.find({ type }).populate("categories");
    const parseData = JSON.parse(JSON.stringify(softwares)) as SoftwareWithCategorized[];
    return parseData;
  } catch (error) {
    return [];
  }
};
