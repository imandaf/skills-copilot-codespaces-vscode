// Create web server
// Create a web server with Express
const express = require('express');
const app = express();
const port = 3000;
// Create a route for /comments
app.get('/comments', (req, res) => {
  res.send('This is a route for /comments');
});
// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});