const router = require("express").Router();
const {
  getProduct,
  insertProduct,
} = require("../controllers/product.controller");

router.route("/").get(getProduct).post(insertProduct);

module.exports = router;
