DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name TEXT NOT NULL,
    department_name TEXT NOT NULL,
    price FLOAT(10,2) DEFAULT 0,
    stock_quantity INT DEFAULT 0,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Keyboard", "Computer", 39.50, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mouse", "Computer", 24.50, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Monitor", "Computer", 300, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Notebook", "Computer", 1000, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shirt", "Clothes", 29.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pants", "Clothes", 39.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jacket", "Clothes", 80, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Elec Drum Set", "Instruments", 2000, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Acoustic Guitar", "Instruments", 800, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Guitar Strings", "Instruments", 12.50, 20);