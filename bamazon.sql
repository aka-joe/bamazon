DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    Item_ID INT NOT NULL AUTO_INCREMENT,
    Product_Name TEXT NOT NULL,
    Department_Name TEXT NOT NULL,
    Price FLOAT(10,2) DEFAULT 0,
    Stock_Quantity INT DEFAULT 0,
    PRIMARY KEY (Item_ID)
);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Keyboard", "Computer", 39.50, 20);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Mouse", "Computer", 24.50, 20);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Monitor", "Computer", 300, 10);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Notebook", "Computer", 1000, 5);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Shirt", "Clothes", 29.99, 20);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Pants", "Clothes", 39.99, 20);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Jacket", "Clothes", 80, 10);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Elec Drum Set", "Instruments", 2000, 2);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Acoustic Guitar", "Instruments", 800, 5);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Guitar Strings", "Instruments", 12.50, 20);