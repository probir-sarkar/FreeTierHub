"use server";
import { Software } from "@/models/Soft";
import { SoftwareWithCategorized } from "@/app/[software]/software.action";
import { freeModelSchema } from "@/utils/constants";
import { Tag } from "@/models/Tag";
import { Category } from "@/models/Category";

import dbConnect from "@/lib/dbConnect";

export const allSoftwareByPrice = async (price: string) => {
  try {
    const payModel = freeModelSchema.parse(price);
    await dbConnect();
    const softwares = await Software.find({ payModel })
      .populate({
        path: "tags",
        model: Tag
      })
      .populate({
        path: "category",
        model: Category
      });
    const parseData = JSON.parse(JSON.stringify(softwares)) as SoftwareWithCategorized[];

    return parseData;
  } catch (error) {
    console.error(error);
    return [];
  }
};
