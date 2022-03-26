const Router = require("express");
const router = new Router();
const cartController = require("../controller/cartController");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/postProducts", (req, res) => {
  cartController.postProducts(req, res);
});

router.get("/getProducts", authMiddleware, (req, res) => {
  cartController.getProducts(req, res);
});

module.exports = router;
