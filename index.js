const express = require('express');
const path = require('path');
const compression = require('compression');
const favicon = require('serve-favicon');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(compression()); // Compress all responses
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))); // Serve favicon

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});