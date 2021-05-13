CREATE DATABASE todolist;
DROP DATABASE todolist;


CREATE TABLE todo (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL, 
    todo_status BOOLEAN
);

INSERT INTO todo (title, todo_status) VALUES ("test", 1);
INSERT INTO todo (title, todo_status) VALUES ("test2", 0);


CREATE TABLE category (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    cat_name VARCHAR (255) NOT NULL
);

CREATE TABLE todo_category (
    todo_id INT NOT NULL,
    category_id INT NOT NULL,
    CONSTRAINT todo_id_fk FOREIGN KEY(todo_id)
        REFERENCES todo (id) ON DELETE CASCADE,
    CONSTRAINT category_id_fk FOREIGN KEY(category_id)
        REFERENCES category(id) ON DELETE CASCADE
);