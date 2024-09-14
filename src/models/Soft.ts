import mongoose from "mongoose";

import { FreeModelType, FREE_MODELS_TYPES } from "@/utils/constants";

export interface SoftwareDocument {
  _id: mongoose.Types.ObjectId;
  name: string;
  subtitle: string;
  features: string[];
  description: string;
  slug: string;
  tags: mongoose.Types.ObjectId[];
  github: string;
  website: string;
  category: mongoose.Types.ObjectId;
  payModel: FreeModelType;
  creditCardRequired: boolean;
  status: "draft" | "published" | "archived" | "deleted" | "pending";
}
const softwareSchema = new mongoose.Schema<SoftwareDocument>({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  subtitle: {
    type: String,
    required: true
  },
  features: {
    type: [String],
    required: false
  },
  description: {
    type: String,
    required: true
  },
  github: {
    type: String
  },
  website: {
    type: String
  },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  payModel: {
    type: String,
    enum: FREE_MODELS_TYPES,
    required: false
  },
  creditCardRequired: {
    type: Boolean,
    required: false
  },

  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
  status: {
    type: String,
    enum: ["draft", "published", "archived", "deleted", "pending"],
    default: "published"
  }
});

export interface ParsedSoftware extends Omit<SoftwareDocument, "tags" | "category" | "_id"> {
  _id: string;
  tags: string[];
  category: string;
}

export const Software: mongoose.Model<SoftwareDocument> = mongoose.models.Software || mongoose.model("Software", softwareSchema);
