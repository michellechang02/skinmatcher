const express = require('express');
const app = express();
const port = 8000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Example route for a GET request (Hello World)
app.get('/', (req, res) => {
  res.send('Hello World!');
});


// All routes

// Login
app.post('/login', (req, res) => {
  const {username, password } = req.body;

  try {

  } catch (e) {

  }
  
  res.status(200).json({"message": "Login Success"});
});


// Signup
app.post('/signup', (req, res) => {
    const {username, password } = req.body;
  
    try {
  
    } catch (e) {
  
    }
    
    res.status(200).json({"message": "Signup Success"});
});


// Get all Products
app.get('/products', (req, res) => {
    const { searchmessage } = req.body;
  
    try {
  
    } catch (e) {
  
    }
    
    res.status(200).json({"message": "Fetched all products"});
});

// Get Recommended product
app.get('/recommended', (req, res) => {
    const { criteria } = req.body;
  
    try {
  
    } catch (e) {
  
    }
    
    res.status(200).json({"message": "Fetched recommened products"});
});





// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
