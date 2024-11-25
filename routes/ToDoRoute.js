const express = require('express');
const router = express.Router();

// Example GET route
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the ToDo API!' });
});

// Example POST route
router.post('/', (req, res) => {
  const { title, description } = req.body;
  res.json({ message: 'ToDo created successfully!', data: { title, description } });
});

// Export the router
module.exports = router;
