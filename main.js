const express = require('express');
const app = express();

// Set up static files
app.use(express.static('public'));

// Set up a route for the home page
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
