const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection (replace with your own connection string)
mongoose.connect('mongodb://localhost:27017/ayushDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Database connection error:', err));

// User schema and model for MongoDB
const User = require('./models/user');

// Route to handle registration
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    // Simple validation
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Save the user to the database
    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(200).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
