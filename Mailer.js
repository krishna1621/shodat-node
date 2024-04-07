const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./config/mysqlconfig");
const {
  sendMeetingScheduledEmailToUser,
  sendNewMeetingScheduledEmailToAdmin,
  sendMessageReceivedEmailToUser,
  sendNewMessageScheduledEmailToAdmin,
  sendSubscriptionConfirmationEmailToUser,
  sendNewSubscriptionEmailToAdmin,
} = require("./config/message");
const app = express();
const port = 8000;

app.use(cors());

app.use(bodyParser.json());

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

    sendMeetingScheduledEmailToUser(email, name);
    sendNewMeetingScheduledEmailToAdmin(name, mobile, email, company, message);

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

    sendMessageReceivedEmailToUser(email);
    sendNewMessageScheduledEmailToAdmin(
      name,
      meetingType,
      email,
      company,
      mobile,
      message
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

    sendSubscriptionConfirmationEmailToUser(email);
    sendNewSubscriptionEmailToAdmin(email);

    return res.status(200).json({ message: "Form submitted successfully" });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
