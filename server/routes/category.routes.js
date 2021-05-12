const express = require ("express");
const { getAll, getAllById, deleteById, createNew } = require("../controllers/category.controllers");
const categoryRouter = express.Router();


categoryRouter.get("/", getAll);
categoryRouter.get("/:id", getAllById);
categoryRouter.delete("/:id", deleteById);
categoryRouter.post("/", createNew);


module.exports = categoryRouter;