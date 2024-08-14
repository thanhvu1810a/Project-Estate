import express from "express";
import {
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  savePost,
  profilePosts,
} from "../controller/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
const userRouter = express.Router();

userRouter.get("/", getUsers);

//userRouter.get("/:id", getUser);

userRouter.put("/:id", verifyToken, updateUser);

userRouter.delete("/:id", verifyToken, deleteUser);

userRouter.post("/save", verifyToken, savePost);

userRouter.get("/profilePosts", verifyToken, profilePosts);

export default userRouter;
