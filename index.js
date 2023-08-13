import SolarSystem from '../components/SolarSystem';

const express = require('express');
const path = require('path');
const app = express();

// Set up static files
app.use(express.static(path.join(__dirname, 'public')));

// Set up a route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});



export default function Home() {
  return (
    <div>
      <SolarSystem />
      {/* other components */}
    </div>
  );
}
