const express = require("express");
const app = express();
const { supabase } = require("./core/supabase");
const port = 8000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Example route for a GET request (Hello World)
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// All routes

// Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  try {
  } catch (e) {}

  res.status(200).json({ message: "Login Success" });
});

// Signup
app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  try {
  } catch (e) {}

  res.status(200).json({ message: "Signup Success" });
});

// Get all Products
app.get("/products", (req, res) => {
  const { searchmessage } = req.body;

  try {
  } catch (e) {}

  res.status(200).json({ message: "Fetched all products" });
});

// Get Recommended product
app.get("/recommended", async (req, res) => {
  const price = req.query.price;
  const type = req.query.type;
  console.log(price);
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("product_type", type)
    .gte("price", price - 10)
    .lte("price", price + 10);
  if (error) {
    res.status(500).json(error);
  }

  res.status(200).json({ data });
});

app.get("/search", async (req, res) => {
  const searchTerm = req.query.q;
  console.log(searchTerm);
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .ilike("product_name", `%${searchTerm}%`);
  if (error) {
    res.status(500).json(error);
  }
  res.status(200).json(data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
