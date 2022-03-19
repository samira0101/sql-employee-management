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

