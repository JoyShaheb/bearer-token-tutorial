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
    maxlength: 50,
    default: "",
  },
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
    default: "",
  },
  role: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
    default: "",
  },
});

export const UserModel = mongoose.model("User", UserSchema);
