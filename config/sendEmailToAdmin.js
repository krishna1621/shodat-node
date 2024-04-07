const sender = require("./mailerconfig");

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

module.exports = sendEmailToAdmin;
