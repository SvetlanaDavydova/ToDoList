import mysql from 'mysql2/promise';

const obj = {
    host: "localhost",
    user: "root",
    database: "todolist",
    password:"root"
};

async function getConnection() {
    return await mysql.createConnection(obj);
}

export { getConnection };
