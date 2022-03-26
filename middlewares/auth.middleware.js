const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./.env.local" });

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.json({ message: "Вы не зарегистрированы" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.json({ message: "Вы не зарегистрированы" });
  }
};
