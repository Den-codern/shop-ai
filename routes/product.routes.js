const Router = require("express");
const Products = require("../models/Products");
const router = new Router();

router.get("/", async (req, res) => {
  const product = await Products.find();
  return res.json(product);
});

module.exports = router;
