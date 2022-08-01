import express from "express";
const userRouter = express.Router();
import { signUp, signIn } from "../controllers/userController.js";
userRouter.post("/signup", signUp);
userRouter.post("/signin", signIn);
export default userRouter;
