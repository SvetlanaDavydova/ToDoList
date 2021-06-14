import { deleteToDo, create, changeStatus, get, getById, addCategory } from "../models/todo.model";
import { Request, Response } from 'express';

async function getAll (req: Request, res: Response){
    try{
        let results = await get();
        res.send(results);
    } catch(err){
        res.status(500).send(err.message);
    }
}

async function getAllById (req:Request, res: Response){
    try{
        let results = await getById(+req.params.id);
        res.send(results);
    } catch(err){
        res.status(500).send(err.message);
    }
}

async function createNew (req:Request, res: Response){
    try{
        let results = await create(req.body.title, req.body.status);
        res.send(results);
    } catch(err){
        res.status(500).send(err.message);
    }
}

async function deleteById (req:Request, res: Response){
    try{
        let results = await deleteToDo(+req.params.id);
        res.send(results);
    } catch(err){
        res.status(500).send(err.message);
    }
}

async function updateStatus (req:Request, res: Response){
    try{
        let results = await changeStatus(req.body.status, +req.params.id);
        res.send(results);
    } catch(err){
        res.status(500).send(err.message);
    }
}

async function addToDoCategory (req:Request, res: Response){
    try{
        let results = await  addCategory(+req.params.id, +req.params.category_id);
        res.send(results);
    } catch(err){
        res.status(500).send(err.message);
    }
}

export { getAll, getAllById, createNew, deleteById, updateStatus, addToDoCategory };
