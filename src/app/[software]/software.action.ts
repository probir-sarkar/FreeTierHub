"use server";
import { Software, ParsedSoftware } from "@/models/Soft";
import { TagDocument } from "@/models/Tag";
import { CategoryDocument } from "@/models/Category";

import dbConnect from "@/lib/dbConnect";

export interface SoftwareWithCategorized extends Omit<ParsedSoftware, "tags" | "category"> {
  category: CategoryDocument;
  tags: TagDocument[];
}

export async function softwareBySlug(slug: string) {
  try {
    await dbConnect();
    const software = await Software.findOne({ slug }).populate("tags").populate("category");
    if (!software) {
      throw new Error("Software not found");
    }
    const parseData = JSON.parse(JSON.stringify(software)) as SoftwareWithCategorized;
    console.log(parseData);

    const tagIds = software.tags.map((tag) => tag._id);

    const relatedSoftwares = await Software.aggregate([
      {
        $match: {
          tags: { $in: tagIds },
          _id: { $ne: software._id }
        }
      },

      {
        $addFields: {
          matchedTags: {
            $size: {
              $setIntersection: ["$tags", tagIds]
            }
          }
        }
      },
      {
        $sort: { matchedTags: -1 }
      },
      {
        $lookup: {
          from: "categories",
          localField: "category",
          foreignField: "_id",
          as: "category"
        }
      },
      {
        $lookup: {
          from: "tags",
          localField: "tags",
          foreignField: "_id",
          as: "tags"
        }
      },
      {
        $limit: 10
      }
    ]);

    console.log(relatedSoftwares);

    const parseRelatedSoftwares = JSON.parse(JSON.stringify(relatedSoftwares)) as SoftwareWithCategorized[];
    return { softwareDetails: parseData, relatedSoftwares: parseRelatedSoftwares };
  } catch (error) {
    return { softwareDetails: null, relatedSoftwares: [] };
  }
}
