const {getConnection} = require("../config/dbconfig");

exports.get =  async function(){
    const connection = getConnection();
    const query = "SELECT * FROM category";
    const [rows, fields] = await connection.execute(query);
    return rows;
}

exports.getById = async function(id){
    const connection = getConnection();
    const query = "SELECT * FROM category WHERE id = (?)";
    const [rows, fields] = await connection.execute(query,[id] );
    return rows;
}

exports.create = async function(title,status){
    const connection = getConnection();
    const query = "INSERT INTO category (cat_name) VALUES (?)";
    const [rows, fields] = await connection.execute(query,[catName]);
    return rows;
}

exports.deleteCategory = async function(id){
    const connection = getConnection();
    const query = "DELETE FROM category WHERE id = (?)";
    const [rows, fields] = await connection.execute(query,[id] );
    return rows;
};

