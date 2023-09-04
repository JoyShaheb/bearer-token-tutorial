import { TaskModel } from "../model/TaskModel.js";
import { UserModel } from "../model/UserModel.js";

export const createTask = async (req, res) => {
  try {
    // req.userID is coming from authorizeToken middleware

    const findUser = await UserModel.findById(req.userID);
    if (!findUser) return res.status(404).send({ message: "User not found" });

    const task = new TaskModel({ ...req.body, taskOwner: req.userID });
    const result = await task.save();
    res.status(201).send(result);
  } catch (err) {
    res.status(500).send({ message: err.message || "Error creating task" });
  }
};
