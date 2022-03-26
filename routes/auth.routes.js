const Router = require("express");
const authController = require("../controller/authController");
const authMiddleware = require("../middlewares/auth.middleware");
const router = new Router();

router.post("/registration", (req, res) => {
  authController.registration(req, res);
});

router.post("/login", (req, res) => {
  authController.login(req, res);
});

router.get("/auth", authMiddleware, (req, res) => {
  authController.auth(req, res);
});

module.exports = router;
