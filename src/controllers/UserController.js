import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
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

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "90d",
    });

    // Set the token in a cookie with the 'httpOnly' flag to prevent JavaScript access
    res.cookie("token", token, {
      // httpOnly: true,
      maxAge: 90 * 24 * 60 * 60 * 1000, // 90 days in milliseconds
      // secure: process.env.NODE_ENV === "production", // Set to true in production for HTTPS only
    });

    return res.status(200).json({
      message: "Logged in successfully",
      token,
      userID: user._id,
      name: user.name,
      userRole: user.role,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    throw error;
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    throw error;
  }
};
