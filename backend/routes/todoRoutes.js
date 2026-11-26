import express from "express";
import { getTodos, getTodoById } from "../controllers/todoController.js";

const router = express.Router();

router.get("/", getTodos);
router.get("/:id", getTodoById);

export default router;