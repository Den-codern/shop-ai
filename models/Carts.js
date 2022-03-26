const mongoose = require("mongoose");

const CartModel = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  carts: [
    {
      image: { type: String },
      count: { type: Number },
      price: { type: Number },
      name: { type: String },
    },
  ],
});

module.exports = mongoose.model("Carts", CartModel);
