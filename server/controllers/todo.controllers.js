const { deleteToDo, create, changeStatus, get, getById } = require("../models/todo.model");

exports.getAll = (req,res) => {
    get()
        .then((results) => res.send(results))
        .catch((err) => res.status(500).send("error"))
}

exports.getAllById = (req,res) => {
    getById(req.params.id)
        .then((results) => res.send(results))
        .catch((err) => res.status(500).send("error"))
}

exports.createNew = (req,res) => {
    create(req.body.title, req.body.status)
        .then((results) => res.send(results))
        .catch((err) => res.status(500).send("error"))
}

exports.deleteById = (req,res) => {
    deleteToDo(req.params.id)
        .then((results) => res.send(results))
        .catch((err) => res.status(500).send("error"))
}

exports.updateStatus = (req,res) => {
    changeStatus(req.body.status, req.params.id)
        .then((results) => res.send(results))
        .catch((err) => res.status(500).send("error"))
}
