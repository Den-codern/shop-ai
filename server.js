const express = require("express");
const next = require("next");
const dbConnect = require("./lib/mongodb");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const cors = require("cors");
const handle = app.getRequestHandler();
const authRouter = require("./routes/auth.routes");
const productRouter = require("./routes/product.routes");
const cartRouter = require("./routes/cart.routes");
dbConnect();
app.prepare().then(() => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use("/api/auth", authRouter);
  app.use("/api/products", productRouter);
  app.use("/api/cart", cartRouter);
  app.all("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
