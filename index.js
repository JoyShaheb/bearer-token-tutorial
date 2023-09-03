import express from "express";
import jwt from "jsonwebtoken";
import bodyparser from "body-parser";

const app = express();

app.use(express.json());
