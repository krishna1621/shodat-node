const mysql = require("mysql");

// MySQL database configuration
const mysqlConfig = {
  host: "localhost",
  user: "root",
  password: "786786",
  database: "shodat",
};

const db = mysql.createConnection(mysqlConfig);

// Connect to MySQL database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database: " + err.stack);
    return;
  }
  console.log("Connected to MySQL database");
});

module.exports = db;
