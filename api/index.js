import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
dotenv.config(); // Load environment variables from .env file

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
app.use(express.json());
app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
