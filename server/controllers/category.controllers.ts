import { get, getById, create,  deleteCategory } from "../models/category.model";
import { Request, Response } from 'express';

async function getAll(req: Request, res: Response)  {
    try{
        let results = await get();
        res.send(results);
    } catch(err){
        res.status(500).send(err.message);
    }
};

async function getAllById (req: Request, res: Response) {
    try{
        let results = await getById(+req.params.id);
        res.send(results);
    } catch(err){
        res.status(500).send(err.message);
    }
};

async function createNew (req: Request, res: Response) {
    try{
       let results =  await create(req.body.catName);
        res.send(results);
    } catch(err){
        res.status(500).send(err.message);
    }
};

async  function deleteById (req: Request, res: Response){
    try{
       let results = await deleteCategory(+req.params.id);
        res.send(results);
    } catch(err){
        res.status(500).send(err.message);
    }
};

export {deleteById,createNew, getAll, getAllById};