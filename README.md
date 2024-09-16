AYUSH Registration App
A simple user registration system for AYUSH startups with frontend and backend integration using Node.js, Express, and MongoDB. This application allows users to register their startup by submitting their name, email, and password through a web form.

Features
Frontend: Simple and responsive registration form.
Backend: API built with Node.js and Express to handle form submissions.
Database: MongoDB for storing user information (name, email, password).
Validation: Basic validation for form inputs.
Cross-Origin Resource Sharing (CORS): Enabled to allow the frontend and backend to communicate smoothly.
Prerequisites
Node.js: Make sure you have Node.js installed. You can download it from Node.js.
MongoDB: You should have MongoDB installed and running locally, or have access to a MongoDB cloud instance (e.g., MongoDB Atlas).
Installation
1. Clone the repository:
bash
Copy code
git clone https://github.com/PythonGod2131/ayush-final.git
cd ayush-final-app
2. Install the dependencies:
bash
Copy code
npm install
3. Set up MongoDB:
Ensure MongoDB is running locally, or provide your own MongoDB connection string in the server.js file:

javascript
Copy code
mongoose.connect('mongodb://localhost:27017/ayushDB', { useNewUrlParser: true, useUnifiedTopology: true });
If you're using MongoDB Atlas, replace the connection string with your Atlas credentials.

Running the Application
1. Start the backend server:
For development mode (using nodemon for automatic restarts on file changes):

bash
Copy code
npm run dev
For production mode:

bash
Copy code
npm start
2. Access the frontend:
The frontend files are served through the public directory. You can access the registration form by visiting http://localhost:3000 in your browser.

Project Structure
bash
Copy code
ayush-app/
│
├── /public/                  # Frontend folder
│   ├── index.html             # Main HTML file (form)
│   ├── styles.css             # Styles for the form
│   └── script.js              # JavaScript for form submission
│
├── /models/                   # Backend models folder
│   └── user.js                # User schema and model for MongoDB
│
├── /node_modules/             # Node.js packages (generated after npm install)
│
├── server.js                  # Main server file (backend logic)
├── package.json               # Project dependencies and scripts
├── package-lock.json          # Auto-generated lock file for npm
└── .gitignore                 # Files to ignore in version control
API Endpoints
POST /register
Registers a new user.

Request:
json
Copy code
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
Response (success):
json
Copy code
{
  "message": "User registered successfully"
}
Response (error):
json
Copy code
{
  "message": "All fields are required"
}
Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB, Mongoose
Other Libraries: body-parser, CORS
