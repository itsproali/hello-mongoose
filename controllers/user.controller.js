const User = require("../models/User");

exports.getUser = async (req, res) => {
  try {
    const result = await User.find({});
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(200).send("User Created Successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};
