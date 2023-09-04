import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { UserRoutes } from "./routes/UserRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5500;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connection established successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Hello World",
  });
});

app.use("/api/userAuth", UserRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
