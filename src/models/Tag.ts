import mongoose from "mongoose";

export interface TagDocument {
  _id: string;
  name: string;
  description: string;
  slug: string;
}

const tagSchema = new mongoose.Schema<TagDocument>({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true,
    trim: true
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
export const Tag: mongoose.Model<TagDocument> = mongoose.models.Tag || mongoose.model("Tag", tagSchema);
