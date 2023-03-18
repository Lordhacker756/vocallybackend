const express = require("express");
const router = express.Router();
const { postUser } = require("../controllers/user");

// Route to handle the POST request to /user
router.route("/user").post(postUser);
module.exports = router;
