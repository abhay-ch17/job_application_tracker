import express from "express"
import { createUser, getMe, loginUser, logout } from "../controller/AuthController.js";
const router = express.Router();
import { authMiddleware } from "../middleware/authMiddleware.js"

router.post("/signup", createUser);

router.post("/login", loginUser);

router.post("/logout", logout);

router.get("/getMe", authMiddleware, getMe);

export const AuthRouter = router;