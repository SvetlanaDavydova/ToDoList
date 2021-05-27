const { get, getById, create,  deleteCategory  } = require("../models/category.model")

exports.getAll = async (req, res) => {
    try{
        let results = await get();
        res.send(results);
    } catch(err){
        res.status(500).send(err.message);
    }
};

exports.getAllById = async (req, res) => {
    try{
        let results = await getById(req.params.id);
        res.send(results);
    } catch(err){
        res.status(500).send(err.message);
    }
};

exports.createNew = async (req,res) => {
    try{
        await create(req.body.catName);
        res.send(results);
    } catch(err){
        res.status(500).send(err.message);
    }
};

exports.deleteById = async (req,res) => {
    try{
        await deleteToDo(req.params.id);
        res.send(results);
    } catch(err){
        res.status(500).send(err.message);
    }
};