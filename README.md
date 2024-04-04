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

nodemon server.js

Endpoints
POST /api/schedule-meeting: Endpoint for submitting meeting schedule requests.
POST /api/message: Endpoint for submitting messages.
POST /api/business_email: Endpoint for collecting business email addresses.

Database Schema
The MySQL database schema consists of the following tables:

meetings: Stores information about scheduled meetings.
message: Stores message submissions.
email: Stores collected business email addresses.


