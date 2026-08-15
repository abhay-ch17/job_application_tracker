import express from "express"
import { createTask, deleteTask, getTask, updateTask } from "../controller/ApplicationController.js";
const router = express.Router();
import { authMiddleware } from "../middleware/authMiddleware.js"

router.post("/", authMiddleware, createTask);
router.get("/",authMiddleware, getTask);
router.patch("/:updateId",authMiddleware, updateTask);
router.delete("/:deleteId", authMiddleware, deleteTask);

const applicationRouter = router;

export default applicationRouter;