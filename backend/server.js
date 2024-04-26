const express = require("express");
const app = express();
const cors = require("cors");
const { supabase } = require("./core/supabase");
const port = 8000;

app.use(cors());
app.use(express.json());

// Example route for a GET request (Hello World)
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// All routes

// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "Email and password are required" });
    return;
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    res.status(500).send(500);
  } else {
    res.status(200).send(data);
  }
});

// Signup
app.post("/signup", async (req, res) => {
  console.log(req);
  const { email, password, name } = req.body;
  try {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: name,
        },
      },
    });

    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }

    res.status(200).json({ message: "Signup Success", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
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
