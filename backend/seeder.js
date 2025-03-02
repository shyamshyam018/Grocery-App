const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

const dairyProducts = require('./data/diaryProducts.json');
const fruits = require('./data/fruits.json');
const vegetables = require('./data/vegetables.json');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("Connected to MongoDB");

    await Product.deleteMany(); // Clear old data

    // Add category before inserting
    await Product.insertMany(dairyProducts.map(product => ({ ...product, category: "dairy" })));
    await Product.insertMany(fruits.map(product => ({ ...product, category: "fruits" })));
    await Product.insertMany(vegetables.map(product => ({ ...product, category: "vegetables" })));

    console.log("Data Inserted Successfully");
    mongoose.connection.close();
  })
  .catch(err => console.log(err));
