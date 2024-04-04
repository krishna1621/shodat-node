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

n

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


