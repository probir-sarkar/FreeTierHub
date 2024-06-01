import { RoleType, ROLE_TYPES } from "@/utils/constants";
import mongoose from "mongoose";

interface User {
  username: string;
  githubId: string;
  avatarUrl?: string;
  name?: string;
  role: RoleType;
}

const UserSchema = new mongoose.Schema<User>({
  username: {
    type: String,
    required: true
  },
  githubId: {
    type: String,
    required: true
  },
  avatarUrl: String,
  name: String,
  role: {
    type: String,
    enum: [...ROLE_TYPES],
    default: "user",
    required: false
  }
});

export default mongoose.models.User || mongoose.model<User>("User", UserSchema);
