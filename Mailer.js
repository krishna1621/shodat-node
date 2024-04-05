const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const nodemailer = require("nodemailer");

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

const sender = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "haja.pcr@gmail.com",
    pass: "oyowyxtoqsbvqdju",
  },
});

// Function to send email to user
function sendEmailToUser(email, subject, html) {
  const mailOptions = {
    from: "haja.pcr@gmail.com",
    to: email,
    subject: subject,
    html: html,
  };

  sender.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error("Error sending email to user:", error);
    } else {
      console.log("Email sent to user:", info.response);
    }
  });
}

// Function to send email notification to admin
function sendEmailToAdmin(subject, html) {
  const mailOptions = {
    from: "haja.pcr@gmail.com",
    to: "islamixlife@gmail.com",
    subject: subject,
    html: html,
  };

  sender.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error("Error sending email to admin:", error);
    } else {
      console.log("Email sent to admin:", info.response);
    }
  });
}

app.post("/api/schedule-meeting", (req, res) => {
  const { name, mobile, email, company, message } = req.body;
  const query =
    "INSERT INTO meetings (name, mobile, email, company, message) VALUES (?, ?, ?, ?, ?)";
  const values = [name, mobile, email, company, message];
  db.query(query, values, (err, result) => {
    if (err) {
      console.error("Error inserting into meetings table:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    sendEmailToUser(
      email,
      "Meeting Scheduled",
      `<p>Dear ${name},</p>
      <p>Our team will contact you soon.</p>
      <p>If you have any questions or need to reschedule, please contact us at [Your Company Email] or [Your Company Phone Number].</p>
      <p>Thank you for choosing our services.</p>    
      <p>Best Regards,<br>Shodat</p>
    `
    );

    sendEmailToAdmin(
      "New Meeting Scheduled",
      `
      <p>Hello Admin,</p>
      <p>A new meeting has been scheduled by ${name}.</p>
      <p>Contact Details:</p>
      <ul>
      <li>${mobile}</li>
      <li>${email}</li>
      <li>${company}</li> <li>${message}</li>
      </ul>

    `
    );

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
      console.error("Error inserting into message table:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    sendEmailToUser(
      email,
      "Message Received",
      "Your message has been received. We will get back to you soon."
    );

    sendEmailToAdmin(
      "New Meeting Scheduled",
      `
        <p>Hello Admin,</p>
        <p>A new client sent a messsage. his/her name is ${name}.</p>
        <p>Contact Details:</p>
        <ul> <li>${meetingType}</li>
        <li>${email}</li>
        <li>${company}</li> 
        <li>${mobile}</li>
        <li>${message}</li>
        </ul>`
    );

    return res.status(200).json({ message: "Form submitted successfully" });
  });
});

app.post("/api/business_email", (req, res) => {
  const { email } = req.body;
  const query = "INSERT INTO email (email) VALUES (?)";
  const values = [email];
  db.query(query, values, (err, result) => {
    if (err) {
      console.error("Error inserting into email table:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    sendEmailToUser(
      email,
      "Subscription Confirmation",
      "Thank you for subscribing to our business updates."
    );

    sendEmailToAdmin(
      "New Subscription",
      `A new user subscribed to your business updates: ${email}`
    );

    return res.status(200).json({ message: "Form submitted successfully" });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
