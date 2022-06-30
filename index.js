const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/routes");
require("dotenv").config();

const DATABASE_URL = process.env.DATABASE_URL;
mongoose.connect(DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => {
  console.log({ error });
});
db.once("connected", () => {
  console.log({ status: "Connected to database" });
});

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", routes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port: ${5000}`);
});
