const sender = require("./mailerconfig");

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

module.exports = sendEmailToUser;
