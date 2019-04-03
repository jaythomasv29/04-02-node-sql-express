CREATE DATABASE cats_db;

USE cats_db;


CREATE table cats (
    id INT AUTO_INCREMENT,
    name varchar(255),
    primary key (id)
);

INSERT INTO cats (name) VALUES(
    ("bob"),
    ("mary"),
    ("jordan"),
    ("kamara"),
    ("tia")
);