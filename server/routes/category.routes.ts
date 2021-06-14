import express from "express";
import { getAll, getAllById, deleteById, createNew } from "../controllers/category.controllers";
const categoryRouter = express.Router();

categoryRouter.get("/", getAll);
categoryRouter.get("/:id", getAllById);
categoryRouter.delete("/:id", deleteById);
categoryRouter.post("/", createNew);

export default categoryRouter;