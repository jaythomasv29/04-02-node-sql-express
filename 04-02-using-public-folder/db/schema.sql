DROP DATABASE cats_db;

CREATE DATABASE cats_db;

USE cats_db;

CREATE TABLE cats (
    id INT AUTO_INCREMENT, 
    cat_name VARCHAR(255),
    PRIMARY KEY(id)
);