const express = require("express");
const app = express();
const { connectToDatabase } = require("./utils/ConnectToDatabase");
require("dotenv").config();
const port = process.env.PORT || 5000;
const userRouter = require("./routes/user");
const client = connectToDatabase(process.env.MONGO_URI);
const cors = cors();
app.use(cors());
app.use(express.json());
app.use("/api/v1", userRouter);
if (client) {
  app.listen(port, () =>
    console.log(`Listening on port ${port} and connected to database
    `)
  );
} else {
  console.log("Error connecting to database");
}
