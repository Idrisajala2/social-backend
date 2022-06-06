const mongoose = require("mongoose");
require("dotenv").config();

// const url = process.env.URL;
const online = process.env.ONLINE;

mongoose
  .connect(online)
  .then(() => {
    console.log("database is now connected...!");
  })
  .catch(() => {
    console.log("can not connect to the database");
  });

module.exports = mongoose;
