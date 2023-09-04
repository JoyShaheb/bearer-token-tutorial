import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { UserModel } from "../model/UserModel.js";

dotenv.config();

export const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({
      email,
      password: hashedPassword,
    });
    return res
      .status(201)
      .json({ message: "User created successfully", newUser });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    throw error;
  }
};
