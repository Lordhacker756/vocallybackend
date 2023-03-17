const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
});
module.exports = mongoose.model("User", userSchema);
