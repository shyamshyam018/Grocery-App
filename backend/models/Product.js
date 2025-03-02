const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  quantity: Number,
  price: Number,
  cost: Number,
  category: String // New field to separate products
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
