// Dependencies
const mysql2 = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table')

// Creating database connection
const connection = mysql2.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employer_managementDB'
})

// connects to sql2 server and sql2 database
connection.connect(function(err){
    if (err) throw err;
    options();
})
