const express = require('express');
const path = require('path');

const app = express();

// Serve the index.html file on the root route:
app.get('/', (req, res) => {
  // Use process.cwd() to refer to the project root (Vercel’s runtime CWD)
  res.sendFile(path.join(process.cwd(), 'index.html'));
});

// Export the app (no app.listen())
module.exports = app;