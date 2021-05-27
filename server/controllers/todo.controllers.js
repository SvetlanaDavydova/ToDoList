const { deleteToDo, create, changeStatus, get, getById, addCategory } = require("../models/todo.model");

exports.getAll = async (req,res) => {
    try{
        let results = await get();
        res.send(results);
    } catch(err){
        res.status(500).send(err.message);
    }
}

exports.getAllById = async (req,res) => {
    try{
        let results = await getById(req.params.id);
        res.send(results);
    } catch(err){
        res.status(500).send(err.message);
    }
}

exports.createNew = async (req,res) => {
    try{
        await create(req.body.title, req.body.status);
        res.send(results);
    } catch(err){
        res.status(500).send(err.message);
    }
}

exports.deleteById = async (req,res) => {
    try{
        await deleteToDo(req.params.id);
        res.send(results);
    } catch(err){
        res.status(500).send(err.message);
    }
}

exports.updateStatus = async (req,res) => {
    try{
        await changeStatus(req.body.status, req.params.id);
        res.send(results);
    } catch(err){
        res.status(500).send(err.message);
    }
}

exports.addToDoCategory = async (req,res) => {
    try{
        await  addCategory(req.params.id, req.params.category_id);
        res.send(results);
    } catch(err){
        res.status(500).send(err.message);
    }
}
