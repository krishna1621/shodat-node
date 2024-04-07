const mysql = require("mysql");

// MySQL database configuration
const mysqlConfig = {
  host: "192.168.1.5",
  user: "root",
  password: "krish@123",
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
