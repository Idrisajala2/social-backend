require("./utils/db");
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 1236;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to new Api....!!!");
});

app.listen(port, () => {
  console.log("server is now listening...!!!!!");
});
