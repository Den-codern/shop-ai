const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    surname: { type: String },
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", ProductSchema);
