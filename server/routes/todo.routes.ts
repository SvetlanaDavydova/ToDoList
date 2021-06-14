import express from "express";
import { createNew, deleteById, updateStatus, getAll, getAllById, addToDoCategory } from "../controllers/todo.controllers";
const todoRouter = express.Router();

todoRouter.get("/", getAll);
todoRouter.get("/:id", getAllById);
todoRouter.post("/", createNew);
todoRouter.delete("/:id", deleteById);
todoRouter.put("/:id", updateStatus);
todoRouter.post("/:id/categories/:category_id", addToDoCategory);

export default todoRouter;