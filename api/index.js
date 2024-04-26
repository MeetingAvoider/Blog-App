import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file
console.log("MongoDB connection string:", process.env.MONGO);

mongoose
  .connect(
    process.env.MONGO // Use the MONGO environment variable
  )
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

const app = express();
app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
