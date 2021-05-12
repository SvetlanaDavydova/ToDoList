const { get, getById, create,  deleteCategory  } = require("../models/category.model")

exports.getAll = (req, res) => {
    get()
        .then((results) => res.send(results))
        .catch((err) => res.status(500).send("error"))
};

exports.getAllById = (req, res) => {
    getById(req.params.id)
        .then((results) => res.send(results))
        .catch((err) => res.status(500).send("error"))
};

exports.createNew = (req,res) => {
    create(req.body.catName)
        .then((results) => res.send(results))
        .catch((err) => res.status(500).send("error"))
};

exports.deleteById = (req,res) => {
    deleteCategory(req.params.id)
        .then((results) => res.send(results))
        .catch((err) => res.status(500).send("error"))
};