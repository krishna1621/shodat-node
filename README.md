# Shodat AI

Redefining the infusion of machine learning in heavy industries for a decade, we at Shodat Inc are poised for a paradigm shift in the industry with ready AI—eOps Fabric™, an edge analytics, and operations platform. The platform leverages a powerful combination of computer vision, predictive analytics, and generative AI to predict operational defects, automate RCA reports, and propose impactful enhancements that promise significant cost benefits.
---------

Shodat Backend
This backend server handles form submissions and stores them in a MySQL database for the Shodat application.


Introduction
The Shodat backend provides APIs for handling form submissions related to scheduling meetings, sending messages, and collecting business email addresses.

Technologies Used
Express.js: Web application framework for Node.js
MySQL: Relational database management system
Cors: Middleware for enabling CORS (Cross-Origin Resource Sharing)
Body-parser: Middleware for parsing incoming request bodies
Installation
Clone the repository:
git clone https://github.com/haja2611/shodat-backend.git

Navigate to the project directory:
cd shodat-backend
Install dependencies:

npm install

Configuration
Configure MySQL database settings in server.js file.
Ensure MySQL server is running and accessible.
Usage
Start the backend server:

nodemon Mailer.js
Three Emails are major role plays in their project. 
1)Intermediator Email (Send notification both admin and user), 2)Admin mail, 3)User mail.


Get Intermediator Email's pass instruction:

1) Open Gmail and click on your profile picture in the top right corner.
2) Select "Manage your Google Account" from the dropdown menu.
3) Navigate to the "Security" tab.
4) Find the "Two-step verification" section and click on it to enable it.
5) Once two-step verification is enabled, navigate to the "App passwords" section within the two-step verification settings.
6) Create a name for the app password (e.g., "NodeMailer").
7) Click on "Generate password" to create a new app-specific password.
8) Copy the generated password.
9) Use the copied password in your NodeMailer code where you need to authenticate with Gmail.
10) Ensure you securely store this generated password as it will be required for accessing your Gmail account through your application. 11) Also, remember to update your NodeMailer code with this new password to ensure proper authentication.


Endpoints
POST /api/schedule-meeting: Endpoint for submitting meeting schedule requests.
POST /api/message: Endpoint for submitting messages.
POST /api/business_email: Endpoint for collecting business email addresses.

Database Schema
The MySQL database schema consists of the following tables:

meetings: Stores information about scheduled meetings.
message: Stores message submissions.
email: Stores collected business email addresses.


