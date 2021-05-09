const express = require ("express");
const parser = require("body-parser");
const jsonParser = parser.json();
const todoRouter = express.Router();
const { createNew, deleteById, updateStatus, getAll, getAllById } = require("../controllers/todo.controllers");

todoRouter.get("/", getAll);
todoRouter.get("/:id", getAllById);
todoRouter.post("/", jsonParser, createNew);
todoRouter.delete("/:id", deleteById);
todoRouter.put("/:id", jsonParser, updateStatus);

module.exports = todoRouter;