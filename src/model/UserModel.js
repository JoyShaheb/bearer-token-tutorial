import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
    default: "",
  },
  password: {
    type: String,
    required: true,
    trim: true,
    default: "",
  },
  name: {
    type: String,
    required: false,
    trim: true,
    maxlength: 50,
    default: "",
  },
  role: {
    type: String,
    required: false,
    trim: true,
    maxlength: 50,
    default: "freeUser",
  },
});

export const UserModel = mongoose.model("User", UserSchema);
