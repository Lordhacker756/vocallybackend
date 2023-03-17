const User = require("../models/user");
const postUser = async (req, res) => {
  try {
    const existingUser = await User.findOne({
      $or: [
        {
          email: req.body.email,
        },
        {
          name: req.body.name,
        },
      ],
    });

    if (existingUser) {
      let errors = {};
      if (existingUser.email === req.body.email) {
        errors.name = "User already exists";
      }
      return res.status(400).json(errors);
    }

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
    });

    const user = await newUser.save();
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};

const getUser = (req, res) => {};
module.exports = { postUser, getUser };
