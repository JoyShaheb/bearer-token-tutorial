import express from "express";
import { createTask } from "../controllers/TaskController.js";
import { authenticateToken } from "../middleware/jwt.js";

export const TaskRoutes = express.Router();

TaskRoutes.post("/create-task", authenticateToken, createTask);
