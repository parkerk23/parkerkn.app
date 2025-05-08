const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Fallback to index.html for client-side routing
app.use((req, res, next) => {
  if (req.method === 'GET' && req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  } else {
    next();
  }
});


// Start the server
app.listen(port, () => {
  console.log(`React Resume website running at http://localhost:${port}`);
});
