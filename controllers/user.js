const User = require("../models/user");
const postUser = async (req, res) => {
  console.log(req.body);
  const { name, email } = req.body;
  try {
    const user = await User.create({ name, email });
    res.status(201).json({ msg: "User Registered..!", user: user });
  } catch (error) {
    res.status(401).json({ msg: "User Registration failed.." });
  }
};
const getUser = (req, res) => {};
module.exports = { postUser, getUser };
