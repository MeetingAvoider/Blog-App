import express from "express";
import { signupp } from "../controllers/auth.controller.js";
const router = express.router();
router.post("/signUp", signupp);
export default router;
