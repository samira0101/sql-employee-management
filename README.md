# sql-employee-management

Building an employee management in SQL2 (project)

# Description - Why did build an employee management?
The main purpose to build this Node application is so that the bussiness ownder can view and manage the departments, roles and employees that are in their company, enabling to organise through the terminal.

This project has enhanced my skills in Node. Additional knowledge gained includes: Node (inquirer, Mysql2, Console.table), switch statement, .prompt, return, connection.end, on top of previous acquired javascript skills.

# What does this project do? and how?

The user is able to respond to the questions/options asked in the terminal which enables the user to add information in the table provided by the databes. 

The following installation was required inquirer, Mysql2, Console.table. You need to run npm install in the root directory to download these dependencies, SQL interface is also required. To do this you will need to change directory into the db folder (cd db) in terminal then follow with mysql -u root. 

To be able to view the database in the terminal you will need to be in the main directory and type node app.js. 

Video link below to demostrating the functionality of the video.

# Criteria set to achieve this?

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

# So far what has been achieved and further improvements?

All requirements above has been achieved.

# To access Github Repository 

1.https://github.com/samira0101/sql-employee-management


# To access video 

## Presentation [Video](https://drive.google.com/file/d/1uHC8KHfOH67pt7EJDnMF_KaWbhLg6xF5/view)


# References

1. https://birmingham.bootcampcontent.com/university-of-birmingham/UBHM-VIRT-FSF-PT-11-2021-U-LOL
2. https://www.npmjs.com/package/console.table
3. https://www.npmjs.com/package/mysql2
4. https://www.npmjs.com/package/inquirer
5. https://stackoverflow.com/questions/1420029/how-to-break-out-of-a-loop-from-inside-a-switch
6. https://www.w3schools.com/js/js_switch.asp
7. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
8. https://www.w3schools.com/sql/sql_autoincrement.asp
9. https://www.sqlservertutorial.net/sql-server-basics/sql-server-identity/
10. https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-schema/
11. https://www.mysqltutorial.org/mysql-nodejs/connect/