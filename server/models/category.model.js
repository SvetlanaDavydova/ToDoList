const mysql = require("mysql2");
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database: "todolist",
    password: "root"
});
connection.connect(()=> console.log("connect to database"));


exports.get = function(){
    return new Promise(function(resolve, reject){
        connection.query("SELECT * FROM category", (err, results, fields) => {
            if(err) reject(err);
            resolve(results);
        });
    });
};

exports.getById = function(id){
    return new Promise(function(resolve, reject){
        connection.query("SELECT * FROM category WHERE id = (?)", [id], (err, results, fields) => {
            if(err) reject(err);
            resolve(results[0]);
        });
    });
};

exports.create = function(catName){
    return new Promise(function(resolve, reject){
        connection.query("INSERT INTO category (cat_name) VALUES (?)", [catName], (err, results, fields) => {
            if(err) reject(err);
            resolve(results);
        });
    });
};

exports.deleteCategory = function(id){
    return new Promise(function(resolve, reject){
        connection.query("DELETE FROM category WHERE id = (?)", [id], (err, results, fields) => {
            if(err) reject(err);
            resolve(results[0]);
        });
    });
};

