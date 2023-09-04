import { TaskModel } from "../model/TaskModel.js";

export const createTask = async (req, res) => {
  try {
    const task = new TaskModel(req.body);
    const result = await task.save();
    res.status(201).send(result);
  } catch (err) {
    res.status(500).send({ message: err.message || "Error creating task" });
  }
};
