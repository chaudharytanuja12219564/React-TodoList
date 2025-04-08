
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000; // Use environment variable for PORT

// Hardcoded MongoDB connection string (replace <db_username>, <db_password>, <database_name>)
const mongoURI = "mongodb+srv://tanujamongodbatlas:Tanuja12345@cluster1.kddgr.mongodb.net/<database_name>?retryWrites=true&w=majority&appName=Cluster1";

// Connect to MongoDB
mongoose.connect(mongoURI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error:", err));

app.use(cors());
app.use(bodyParser.json());

// Dummy user for demonstration (consider using a database for users)
const user = {
    email: "user@example.com",
    password: "password123", // In production, never store plain passwords
};

// Login endpoint
app.post("/api/login", (req, res) => {
    const { email, password } = req.body;

    if (email === user.email && password === user.password) {
        // Generate token
        const token = jwt.sign({ email }, "my_secret_key_12219564", { expiresIn: "1h" }); // Use a strong secret key
        res.json({ token });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
