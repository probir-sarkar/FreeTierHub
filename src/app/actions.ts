"use server";
import dbConnect from "@/lib/dbConnect";
import { Software, SoftwareDocument } from "@/models/Soft";

export const allSoftware = async () => {
  try {
    await dbConnect();
    const software = await Software.find().populate({
      path: "categories",
      select: "name",
    });
    const parsedSoftware: SoftwareDocument[] = JSON.parse(JSON.stringify(software));
    return parsedSoftware;
  } catch (error) {
    return [];
  }
};
