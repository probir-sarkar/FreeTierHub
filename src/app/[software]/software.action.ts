"use server";
import { CategoryDocument, Software, SoftwareDocument } from "@/models/Soft";
import dbConnect from "@/lib/dbConnect";

export interface SoftwareWithCategorized extends Omit<SoftwareDocument, "categories"> {
  categories: CategoryDocument[];
}

export async function softwareBySlug(slug: string) {
  try {
    await dbConnect();
    const software = await Software.findOne({ slug }).populate("categories");
    if (!software) {
      throw new Error("Software not found");
    }
    const parseData = JSON.parse(JSON.stringify(software)) as SoftwareWithCategorized;
    const categoryIds = software.categories.map((cat) => cat._id);

    // const relatedSoftwares = await Software.find({
    //   categories: { $in: categoryIds },
    //   _id: { $ne: software._id }
    // }).populate("categories");

    const relatedSoftwares = await Software.aggregate([
      {
        $match: {
          categories: { $in: categoryIds },
          _id: { $ne: software._id }
        }
      },
      {
        $addFields: {
          matchedCategories: {
            $size: {
              $setIntersection: ["$categories", categoryIds]
            }
          }
        }
      },
      {
        $sort: { matchedCategories: -1 }
      }
    ]);
    console.log(relatedSoftwares);

    const parseRelatedSoftwares = JSON.parse(JSON.stringify(relatedSoftwares)) as SoftwareWithCategorized[];
    return { softwareDetails: parseData, relatedSoftwares: parseRelatedSoftwares };
  } catch (error) {
    return { softwareDetails: null, relatedSoftwares: [] };
  }
}
