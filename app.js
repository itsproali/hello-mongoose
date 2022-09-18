const express = require("express");
const app = express();
const cors = require("cors");
const productRoute = require("./routes/product.route");
const userRoute = require("./routes/user.route")

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

// Get Product Data
app.use("/api/v1/product", productRoute);
app.use("/api/v1/user", userRoute);

module.exports = app;
