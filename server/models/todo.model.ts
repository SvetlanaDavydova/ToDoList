import {getConnection} from "../config/dbconfig";

async function get(){
    const connection = await getConnection();
    const query = "SELECT * FROM todo";
    const [rows, fields] = await connection.execute(query);
    return rows;
}

async function getById(id:number){
    const connection = await getConnection();
    const query = "SELECT * FROM todo WHERE id = (?)";
    const [rows, fields] = await connection.execute(query,[id] );
    return rows;
}

async function create(title:string, status:boolean){
    const connection = await getConnection();
    const query = "INSERT INTO todo (title, todo_status) VALUES (?,?)";
    const [rows, fields] = await connection.execute(query,[title,status] );
    return rows;
}

async function deleteToDo(id:number){
    const connection = await getConnection();
    const query = "DELETE FROM todo WHERE id = (?)";
    const [rows, fields] = await connection.execute(query,[id] );
    return rows;
}

async function changeStatus(status:boolean, id:number){
    const connection = await getConnection();
    const query = "UPDATE todo SET todo_status = (?) where id = (?)";
    const [rows, fields] = await connection.execute(query,[status,id]);
    return rows;
}

async function addCategory(todoId:number, catId:number){
    const connection = await getConnection();
    const query = "INSERT INTO todo_category (?,?)";
    const [rows, fields] = await connection.execute(query,[todoId, catId]);
    return rows;
}

export { get, getById, addCategory, changeStatus, create,deleteToDo };