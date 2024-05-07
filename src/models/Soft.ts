import mongoose from "mongoose";

import { CATEGORY_TYPES } from "@/utils/constants";

export interface CategoryDocument {
  _id: string;
  name: string;
  description: string;
  slug: string;
  softwares: mongoose.Types.ObjectId[];
}

const categorySchema = new mongoose.Schema<CategoryDocument>({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  softwares: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Software",
    },
  ],
});

export interface SoftwareDocument {
  _id: string;
  name: string;
  description: string;
  slug: string;
  categories: mongoose.Types.ObjectId[];
  github: string;
  website: string;
  type: string;
}
const softwareSchema = new mongoose.Schema<SoftwareDocument>({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  github: {
    type: String,
  },
  website: {
    type: String,
  },
  type: {
    type: String,
    enum: CATEGORY_TYPES,
    required: true,
  },

  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
});

export const Software: mongoose.Model<SoftwareDocument> =
  mongoose.models.Software || mongoose.model("Software", softwareSchema);

export const Category: mongoose.Model<CategoryDocument> =
  mongoose.models.Category || mongoose.model("Category", categorySchema);
