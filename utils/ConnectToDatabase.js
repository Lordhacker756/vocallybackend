const mongoose = require("mongoose");
const connectToDatabase = async (uri) => {
  try {
    return await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = { connectToDatabase };
