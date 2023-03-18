const User = require("../models/user");

// Controller to handle the POST request to /user
const postUser = async (req, res) => {
  try {
    let existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).json({ name: "User already exists" });
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

module.exports = { postUser };
