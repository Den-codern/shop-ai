const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  image: {
    type: String,
  },
  brand: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Products", ProductSchema);
