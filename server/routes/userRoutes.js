import express from "express";
import pkg from "jsonwebtoken"; 
const { sign } = pkg;

import {
  signup,
  login,           
  checkAuth,
  updateProfile,
} from "../controllers/useController.js";

import { protectRoute } from "../middleware/auth.js";

const userRouter = express.Router();
userRouter.post("/signup", signup);
// userRouter.post("/signup", signup);
userRouter.post("/login", login); 
userRouter.put("/update-profile", protectRoute, updateProfile);
userRouter.get("/check", protectRoute, checkAuth);

export default userRouter;
