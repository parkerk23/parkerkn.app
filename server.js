const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Use the environment port if available, otherwise default to 3000


// --- Option 2: Serve static files from a 'public' subdirectory ---
// If you prefer to put your index.html, style.css, main.js, and other assets
// into a folder named 'public', uncomment the line below and comment out Option 1.
app.use(express.static(path.join(__dirname, 'public')));

// A catch-all route to serve index.html for any other GET requests.
// This is useful for Single Page Applications (SPAs) if you later add client-side routing.
app.get('/{any}', (req, res) => {
  // Adjust the path if you are using Option 2 (public folder)
 res.sendFile(path.join(__dirname, 'public', 'index.html'));
  // If using Option 2, use: res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
