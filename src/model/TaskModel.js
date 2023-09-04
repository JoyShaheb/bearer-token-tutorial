import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
    default: "",
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
    default: "",
  },
  status: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
    default: "",
  },
  taskOwner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

export const TaskModel = mongoose.model("Task", TaskSchema);
