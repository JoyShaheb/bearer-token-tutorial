import express from "express";
import { createTask } from "../controllers/TaskController.js";

export const TaskRoutes = express.Router();

TaskRoutes.post("/create-task", createTask);
