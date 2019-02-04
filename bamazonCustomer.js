// Initialize required modules
var mysql = require("mysql");
var inquirer = require("inquirer");
var CFonts = require("cfonts");

// Initialize global variables
var msg = "";
var list = [];
var product;
var quantity;

// Initialize colors for console display
var red = "\x1b[37m\x1b[41m";
var blue = "\x1b[37m\x1b[44m";
var blink = "\x1b[5m";
var reset = "\x1b[0m";

// Initialize SQL connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "bamazon"
});
connection.connect(function (err) {
    if (err) throw err;
    start();
});

// Start app
function start() {
    console.clear();
    console.log("\n\n");
    CFonts.say(' BAMAZON', {
        font: 'block',              // define the font face
        align: 'left',              // define text alignment
        colors: ['red'],            // define all colors
        background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
        letterSpacing: 1,           // define letter spacing
        lineHeight: 1,              // define the line height
        space: true,                // define if the output text should have empty lines on top and on the bottom
        maxLength: '0',             // define how many character can be on one line
    });
    console.log("\n\n" + " ".repeat(32) + blink + "··· LOADING ···\n\n\n\n\n" + reset + " ".repeat(25) + "© Copyright 2018 Joseph Ahn");

    setTimeout(displayInven, 3000);
};

// Display inventory
function displayInven() {
    // Connect to SQL DB to show list of products
    connection.query(`SELECT * FROM products`, function (err, res) {
        if (err) throw err;
        list = res;
        var transformed = list.reduce(function (acc, { Item_ID, ...x }) {
            acc[Item_ID] = x;
            return acc
        }, {});
        console.clear();
        console.log("\n\n");
        console.table(transformed);
        console.log("\n" + msg + "\n");

        enterItem();
    });
};

// Ask product id#
function enterItem() {
    inquirer.prompt([
        {
            name: "idx",
            message: " ".repeat(13) + "Which product do you want? (Enter index#):"
        }
    ]).then(function (answer) {
        product = -1;
        for (var i = 0; i < list.length; i++) {
            if (list[i].Item_ID === Number(answer.idx)) {
                product = i;
                break;
            };
        };
        if (product === -1) {
            msg = " ".repeat(7) + red + " No products found... Please enter the correct product idx# " + reset;
            displayInven();
        } else {
            enterQty();
        };
    });
};

function enterQty() {
    inquirer.prompt([
        {
            name: "qty",
            message: " ".repeat(13) + "How many units do you want to purchase?  :"
        }
    ]).then(function (answer) {
        if (answer.qty > list[product].Stock_Quantity) {
            msg = " ".repeat(18) + red + " ...Insufficient quantity available... " + reset;
            displayInven();
        } else if (answer.qty <= 0) {
            msg = " ".repeat(17) + red + " ...Please enter a positivie quantity... " + reset;
            displayInven();
        } else {
            quantity = answer.qty;
            update();
        };
    });
};

function update() {
    connection.query(
        "UPDATE products SET Stock_Quantity = ? WHERE Item_ID = ?",
        [list[product].Stock_Quantity - quantity, list[product].Item_ID],
        function (err, res) {
            if (err) throw err;
        });
    checkOut();
};

function checkOut() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        list = res;
        var transformed = list.reduce(function (acc, { Item_ID, ...x }) {
            acc[Item_ID] = x;
            return acc
        }, {});
        console.clear();
        console.log("\n\n");
        console.table(transformed);
        console.log("\n" + " ".repeat(27) + blue + " Total price is $" + (list[product].Price * quantity).toFixed(2) + " " + reset + "\n");
        tryAgain();
    });
};

function tryAgain() {
    inquirer.prompt([
        {
            name: "ask",
            type: "list",
            message: "Continue shopping?",
            choices: ["YES / buy more", "NO / exit the app"]
        }
    ]).then(function (answer) {
        if (answer.ask === "YES / buy more") {
            msg = "";
            displayInven();
        } else {
            connection.end();
        };
    });
};