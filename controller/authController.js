const User = require("../models/User");
const bcrypt = require("bcrypt");
require("dotenv").config({ path: "./.env.local" });
const jwt = require("jsonwebtoken");

class authController {
  async registration(req, res) {
    try {
      const { email, password } = req.body;
      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.json({
          message: "Пользователь с такой электронной почтой существует",
          error: true,
        });
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const user = new User({ email, password: hashPassword });

      user.save();

      return res.json({
        message: "Пользователь успешно зарегистрирован",
        error: false,
      });
    } catch (error) {}
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.json({
          message: `Пользователь ${username} не найден`,
          error: true,
        });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        res.json({ message: `Введен неверный пароль`, error: true });
      }

      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
        expiresIn: "24h",
      });

      return res.json({
        token,
        user: {
          id: user.id,
          email: user.email,
        },
        error: false,
        message: "Вы успешно вошли в свою учетную запись",
      });
    } catch (error) {}
  }

  async auth(req, res) {
    try {
      const user = await User.find({ _id: req.user.id });
      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
        expiresIn: "24h",
      });
      return res.json({
        token,
        user: {
          id: user.id,
          email: user.email,
        },
      });
    } catch (error) {}
    D;
  }

  async getUsers(req, res) {
    try {
      res.json("Server Working");
    } catch (error) {}
  }
}

module.exports = new authController();
