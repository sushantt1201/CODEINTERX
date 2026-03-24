import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";


dotenv.config();

const app = express();


app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 5000;


const DB_URL = process.env.DB_URL;


if (DB_URL) {
  mongoose
    .connect(DB_URL)
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.log("DB connection error:", err));
} else {
  console.log("⚠️ No DB_URL provided");
}


app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is running perfect" });
});


app.get("/", (req, res) => {
  res.send("Backend is live 🚀");
});


app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});