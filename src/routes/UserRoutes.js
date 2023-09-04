import express from "express";
import {
  createUser,
  loginUser,
  logout,
} from "../controllers/UserController.js";

export const UserRoutes = express.Router();

UserRoutes.post("/signup", createUser);
UserRoutes.post("/login", loginUser);
UserRoutes.post("/logout", logout);
