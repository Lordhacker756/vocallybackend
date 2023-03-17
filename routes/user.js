const express = require("express");
const router = express.Router();
const { postUser, getUser } = require("../controllers/user");
router.route("/user").post(postUser).get(getUser);
module.exports = router;
