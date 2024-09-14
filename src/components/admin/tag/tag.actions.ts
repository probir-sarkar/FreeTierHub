"use server";
import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/dbConnect";
import { Tag } from "@/models/Soft";

interface TagData {
  name: string;
  description: string;
}
export async function addTag(data: TagData) {
  try {
    await dbConnect();
    const tag = await Tag.create(data);
    revalidatePath("/admin/tags");
    return Boolean(tag);
  } catch (e) {
    return false;
  }
}

export async function updateTag(id: string, data: TagData) {
  try {
    await dbConnect();
    const tag = await Tag.findByIdAndUpdate(id, data, { new: true });
    revalidatePath("/admin/tags");
    return Boolean(tag);
  } catch (e) {
    return false;
  }
}
