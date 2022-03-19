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

// prompts the user with a list of options to choose from
function options() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'Welcome to our employee database! What would you like to do?',
            choices: [
                    'View all employees',
                    'View all departments',
                    'View all roles',
                    'Add an employee',
                    'Add a department',
                    'Add a role',
                    'Update employee role',
                    'EXIT'
                    ]
            }).then(function (answer) {
                switch (answer.action) {
                    case 'View all employees':
                        viewEmployees();
                        break;
                    case 'View all departments':
                        viewDepartments();
                        break;
                    case 'View all roles':
                        viewRoles();
                        break;
                    case 'Add an employee':
                        addEmployee();
                        break;
                    case 'Add a department':
                        addDepartment();
                        break;
                    case 'Add a role':
                        addRole();
                        break;
                    case 'Update employee role':
                        updateRole();
                        break;
                    case 'EXIT': 
                        exitApp();
                        break;
                    default:
                        break;
                }
        })
};

