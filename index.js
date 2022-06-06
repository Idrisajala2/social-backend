const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./utils/db");

const app = express();
const port = process.env.PORT||1234;

app.use(cors());
app.use(express.json());

app.get("/api", (res) => {
  res.send("welcome to new Api....!!!");
});   	

app.listen(port, () => {
  console.log("server is now listening...!!!!!");
});
