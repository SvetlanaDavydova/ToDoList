import { getConnection } from "../config/dbconfig";

async function get(){
    const connection = await getConnection();
    const query = "SELECT * FROM category";
    const [rows, fields] = await connection.execute(query);
    return rows;
}

async function getById(id:number){
    const connection = await getConnection();    
    const query = "SELECT * FROM category WHERE id = (?)";
    const [rows, fields] = await connection.execute(query,[id]);
    return rows;
}

async function create(catName:string){
    const connection = await getConnection();
    const query = "INSERT INTO category (cat_name) VALUES (?)";
    const [rows, fields] = await connection.execute(query,[catName]);
    return rows;
}

async function deleteCategory(id:number){
    const connection = await getConnection();
    const query = "DELETE FROM category WHERE id = (?)";
    const [rows, fields] = await connection.execute(query,[id] );
    return rows;
};

export{ deleteCategory, create, get, getById };
