import express from "express";
import { createUser } from "../controllers/UserController.js";

export const UserRoutes = express.Router();

UserRoutes.post("/signup", createUser);
