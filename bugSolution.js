const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Check if the user ID is valid (e.g., is a number)
  if (isNaN(parseInt(userId))) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  // ... rest of the code to fetch and send the user data with error handling for database issues
  // Example using a mock database lookup:
  const users = {
    '1': { name: 'John Doe' },
    '2': { name: 'Jane Doe' }
  };
  const user = users[userId];
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  } else {
    res.json(user);
  }
});