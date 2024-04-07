const nodemailer = require("nodemailer");

const sender = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "haja.pcr@gmail.com",
    pass: "oyowyxtoqsbvqdju",
  },
});

module.exports = sender;
