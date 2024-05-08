import mongoose from "mongoose";

interface User {
  username: string;
  githubId: string;
  avatarUrl?: string;
  name?: string;
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
  name: String
});

export default mongoose.models.User || mongoose.model<User>("User", UserSchema);
