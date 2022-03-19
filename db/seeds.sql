USE employer_managementDB;

INSERT INTO department (name)
VALUES 
('Accounting and Finance'),
('Marketing'),
('Legal'),
('Operations'),
('IT'),
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
('Accountant', 40000, 1),
('Manager', 60000, 2),
('Paralegal', 30000, 3),
('Engineer', 50000, 4),
('Programmer', 80000, 5),
('Sales Rep', 20000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Mary', 'Stuart', 1, 455),
('John', 'Johnson', 2, 234),
('Maria', 'Kowalska', 3, 456),
('Mustafa', 'Abehunde', 4, 123),
('Shahid', 'Khan', 5, 789),
('Samantha', 'Walker', 6, 191);
