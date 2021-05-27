const mysql = require("mysql2");

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database: "todolist",
    password: "root"
});

connection.connect(()=> console.log("connect to database"));

exports.get =  async function(){
    return new Promise(function(resolve, reject){
        connection.query("SELECT * FROM todo", (err,results,fields) => {
            if(err) reject (err);
            resolve (results);
        })
    })
}

exports.getById = async function(id){
    return new Promise(function(resolve, reject){
        connection.query("SELECT * FROM todo WHERE id = (?)",[id], (err,results,fields) => {
            if(err) reject (err);
            resolve (results[0]);
        })
    })
}

exports.create = async function(title,status){
    return new Promise(function(resolve, reject){
        connection.query("INSERT INTO todo (title, todo_status) VALUES (?,?)", [title,status], (err,results,fields) => {
            if(err) reject (err);
            resolve (results);
        })
    })
}

exports.deleteToDo = async function(id){
    return new Promise(function(resolve, reject){
        connection.query("DELETE FROM todo WHERE id = (?)",[id], (err,results,fields) => {
            if(err) reject (err);
            resolve (results[0]);
        })
    })
}

exports.changeStatus = async function(status, id){
    return new Promise(function(resolve, reject){
        connection.query("UPDATE todo SET todo_status = (?) where id = (?)",[status,id], (err,results,fields) => {
            if(err) reject (err);
            resolve (results[0]);
        })
    })
}
 exports.addCategory = async function(todoId, catId){
    return new Promise(function(resolve, reject){
        connection.query("INSERT INTO todo_category (?,?)",[todoId, catId], (err,results,fields) => {
            if(err) reject (err);
            resolve (results);
        })
    })
}