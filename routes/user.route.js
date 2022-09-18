const router = require("express").Router();
const { getUser, createUser } = require("../controllers/user.controller");

router.route("/").get(getUser).post(createUser);

module.exports = router;
