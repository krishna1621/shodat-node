const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 8000;

// Enable CORS for all routes
app.use(cors());

// Parse incoming request bodies in middleware before your handlers
app.use(bodyParser.json());

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

// Define route handlers
app.post("/api/schedule-meeting", (req, res) => {
  const { name, mobile, email, company, message } = req.body;
  const query =
    "INSERT INTO meetings (name, mobile, email, company, message) VALUES (?, ?, ?, ?, ?)";
  const values = [name, mobile, email, company, message];
  db.query(query, values, (err, result) => {
    if (err) {
      console.error("Error inserting into meetings table: " + err.stack);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    return res.status(200).json({ message: "Form submitted successfully" });
  });
});

app.post("/api/message", (req, res) => {
  const { meetingType, name, email, company, mobile, message } = req.body;
  const query =
    "INSERT INTO message (meetingType, name, email, company, mobile, message) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [meetingType, name, email, company, mobile, message];
  db.query(query, values, (err, result) => {
    if (err) {
      console.error("Error inserting into message table: " + err.stack);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    return res.status(200).json({ message: "Form submitted successfully" });
  });
});

app.post("/api/business_email", (req, res) => {
  const { email } = req.body;
  const query = "INSERT INTO email (email) VALUES (?)";
  const values = [email];
  db.query(query, values, (err, result) => {
    if (err) {
      console.error("Error inserting into email table: " + err.stack);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    return res.status(200).json({ message: "Form submitted successfully" });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
