const express = require ("express");
const app = express();
const PORT = 3000;


const mysql = require("mysql2");
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database: "todolist",
    password: "root"
})
connection.connect(()=> console.log("connect to database"));
app.get("/", (req,res)=> {
    res.send("hello");
})
app.listen(PORT, () => {
   console.log("Server is listening on port" + PORT)
});