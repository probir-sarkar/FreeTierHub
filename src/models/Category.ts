import mongoose from "mongoose";

export interface CategoryDocument {
  _id: string;
  name: string;
  subtitle: string;
  description: string;
  slug: string;
}

const categorySchema = new mongoose.Schema<CategoryDocument>({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true,
    trim: true
  },
  subtitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  }
});

export const Category: mongoose.Model<CategoryDocument> = mongoose.models.Category || mongoose.model("Category", categorySchema);
