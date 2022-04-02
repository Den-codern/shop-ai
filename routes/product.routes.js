const Router = require("express");
const Products = require("../models/Products");
const router = new Router();

router.get("/", async (req, res) => {
  const product = await Products.find();
  return res.json(product);
});
router.post("/", async (req, res) => {
  const { firstName, surname, price, image, brand, description, name } =
    req.body;
  const product = new Products({
    firstName,
    surname,
    price,
    image,
    brand,
    description,
    name,
  });

  product.save();
  res.json({ message: "Продукт успешно создан" });
});

module.exports = router;
