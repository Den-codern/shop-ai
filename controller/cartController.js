const Carts = require("../models/Carts");
class cartController {
  async getProducts(req, res) {
    const { id } = req.user;
    const cart = await Carts.findOne({ user: id });
    res.json(cart.carts);
  }

  async postProducts(req, res) {
    const { products, id } = req.body;

    let cart = await Carts.findOne({ user: id });

    if (cart) {
      await Carts.updateOne({ user: id }, { $set: { carts: products } });
    } else {
      cart = new Carts({ user: id, carts: products });
      cart.save();
    }

    return res.json({ message: "Успешно сохранено" });
  }
}

module.exports = new cartController();
