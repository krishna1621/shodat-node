const sendEmailToUser = require("./sendEmailToUser");
const sendEmailToAdmin = require("./sendEmailToAdmin");

// Function to send meeting scheduled email to user
function sendMeetingScheduledEmailToUser(email, name) {
  return sendEmailToUser(
    email,
    "Meeting Scheduled",
    `<p>Dear ${name},</p>
       <p>Our team will contact you soon.</p>
       <p>If you have any questions or need to reschedule, please contact us at [Your Company Email] or [Your Company Phone Number].</p>
       <p>Thank you for choosing our services.</p>    
       <p>Best Regards,<br>Shodat</p>`
  );
}

// Function to send new meeting scheduled email to admin
function sendNewMeetingScheduledEmailToAdmin(
  name,
  mobile,
  email,
  company,
  message
) {
  return sendEmailToAdmin(
    "New Meeting Scheduled",
    `
      <p>Hello Admin,</p>
      <p>A new meeting has been scheduled by ${name}.</p>
      <p>Contact Details:</p>
      <ul>
      <li>${mobile}</li>
      <li>${email}</li>
      <li>${company}</li> <li>${message}</li>
      </ul>`
  );
}

// Function to send message received email to user
function sendMessageReceivedEmailToUser(email) {
  return sendEmailToUser(
    email,
    "Message Received",
    "Your message has been received. We will get back to you soon."
  );
}

// Function to send new message scheduled email to admin
function sendNewMessageScheduledEmailToAdmin(
  name,
  meetingType,
  email,
  company,
  mobile,
  message
) {
  return sendEmailToAdmin(
    "New Message Scheduled",
    `
      <p>Hello Admin,</p>
      <p>A new client sent a message. His/her name is ${name}.</p>
      <p>Contact Details:</p>
      <ul> <li>${meetingType}</li>
      <li>${email}</li>
      <li>${company}</li> 
      <li>${mobile}</li>
      <li>${message}</li>
      </ul>`
  );
}

// Function to send subscription confirmation email to user
function sendSubscriptionConfirmationEmailToUser(email) {
  return sendEmailToUser(
    email,
    "Subscription Confirmation",
    "Thank you for subscribing to our business updates."
  );
}

// Function to send new subscription email to admin
function sendNewSubscriptionEmailToAdmin(email) {
  return sendEmailToAdmin(
    "New Subscription",
    `A new user subscribed to your business updates: ${email}`
  );
}

module.exports = {
  sendEmailToUser,
  sendEmailToAdmin,
  sendMeetingScheduledEmailToUser,
  sendNewMeetingScheduledEmailToAdmin,
  sendMessageReceivedEmailToUser,
  sendNewMessageScheduledEmailToAdmin,
  sendSubscriptionConfirmationEmailToUser,
  sendNewSubscriptionEmailToAdmin,
};
