const express = require ("express");
const todoRouter = express.Router();
const { createNew, deleteById, updateStatus, getAll, getAllById } = require("../controllers/todo.controllers");

todoRouter.get("/", getAll);
todoRouter.get("/:id", getAllById);
todoRouter.post("/", createNew);
todoRouter.delete("/:id", deleteById);
todoRouter.put("/:id", updateStatus);

module.exports = todoRouter;