const User = require("../models/user");
const postUser = async (req, res) => {
  console.log(req.body);
  User.findOne({
    $or: [
      {
        email: req.body.email,
      },
      {
        username: req.body.name,
      },
    ],
  })
    .then((user) => {
      if (user) {
        let errors = {};
        if (user.name === req.body.name) {
          errors.name = "User Name already exists";
        } else {
          errors.email = "Email already exists";
        }
        return res.status(400).json(errors);
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
        });

        newUser
          .save()
          .then((user) => res.json(user))
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => {
      return res.status(500).json({
        error: err,
      });
    });
};
const getUser = (req, res) => {};
module.exports = { postUser, getUser };
