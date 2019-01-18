-- DROP DATABASE IF EXISTS burgers_db;

-- CREATE DATABASE IF NOT EXISTS burgers_db;

USE j2g9js7aiwk4gkdh;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT 0,
    PRIMARY KEY(id)
);