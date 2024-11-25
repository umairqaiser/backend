const express = require('express');  
const mongoose = require('mongoose');  
const routes = require('./routes/ToDoRoute'); // Ensure this is correct  
require('dotenv').config();  

const app = express();  
const PORT = process.env.PORT || 6000; // Use port from .env or default to 6000  

// Middleware for parsing JSON requests  
app.use(express.json());  

// Connect to MongoDB  
mongoose  
  .connect(process.env.MONGODB_URL)  
  .then(() => console.log(`Connected to MongoDB...`))  
  .catch((err) => {  
    console.error('Error connecting to MongoDB:', err.message);  
    process.exit(1); // Exit the process on failure  
  });  

// Use the routes  
app.use(routes); // Prefix routes with a base path like "/api/todos"  

// Start the server  
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));