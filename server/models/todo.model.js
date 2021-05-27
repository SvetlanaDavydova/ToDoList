const {getConnection} = require("../config/dbconfig");

exports.get =  async function(){
    const connection = getConnection();
    const query = "SELECT * FROM todo";
    const [rows, fields] = await connection.execute(query);
    return rows;
}

exports.getById = async function(id){
    const connection = getConnection();
    const query = "SELECT * FROM todo WHERE id = (?)";
    const [rows, fields] = await connection.execute(query,[id] );
    return rows;
}

exports.create = async function(title,status){
    const connection = getConnection();
    const query = "INSERT INTO todo (title, todo_status) VALUES (?,?)";
    const [rows, fields] = await connection.execute(query,[title,status] );
    return rows;
}

exports.deleteToDo = async function(id){
    const connection = getConnection();
    const query = "DELETE FROM todo WHERE id = (?)";
    const [rows, fields] = await connection.execute(query,[id] );
    return rows;
}

exports.changeStatus = async function(status, id){
    const connection = getConnection();
    const query = "UPDATE todo SET todo_status = (?) where id = (?)";
    const [rows, fields] = await connection.execute(query,[status,id]);
    return rows;
}
 exports.addCategory = async function(todoId, catId){
    const connection = getConnection();
    const query = "INSERT INTO todo_category (?,?)";
    const [rows, fields] = await connection.execute(query,[todoId, catId]);
    return rows;
}