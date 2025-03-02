const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const Product = require('./models/Product');

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Fetch all dairy products
app.get('/api/dairy-products', async (req, res) => {
  try {
    const dairyProducts = await Product.find({ name: { $in: ["Milk", "Curd"] } });
    res.json(dairyProducts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching dairy products", error });
  }
});

// Fetch all fruits
app.get('/api/fruits', async (req, res) => {
  try {
    const fruits = await Product.find({ name: { $in: ["Apple"] } });
    res.json(fruits);
  } catch (error) {
    res.status(500).json({ message: "Error fetching fruits", error });
  }
});

// Fetch all vegetables
app.get('/api/vegetables', async (req, res) => {
  try {
    const vegetables = await Product.find({ name: { $in: ["Carrot"] } });
    res.json(vegetables);
  } catch (error) {
    res.status(500).json({ message: "Error fetching vegetables", error });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
