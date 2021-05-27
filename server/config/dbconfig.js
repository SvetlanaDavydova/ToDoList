const mysql = require('mysql2/promise');

const obj = {
    host: "localhost",
    user: "root",
    database: "todolist",
    password:"root"
};

exports.getConnection= async function(){
    return await mysql.createConnection(obj);
};
