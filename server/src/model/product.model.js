const mongoose = require("mongoose");

const prod = new mongoose.Schema({
  type: { type: String },
  name: { type: String },
  image: { type: String },
  desc: { type: String },
  price:{type:String}
});

const Product = mongoose.model("product", prod);

module.exports = Product;
