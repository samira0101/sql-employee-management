DROP DATABASE IF EXISTS employer_managementDB;

CREATE DATABASE employer_managementDB;

USE employer_managementDB;

-- Creating the table for the department
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

-- Creating the table for the roles
