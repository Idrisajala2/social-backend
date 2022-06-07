const mongoose = require("mongoose");
// require("dotenv").config();

// const url = "mongodb://localhost/instaBuild";
const url =
  "mongodb+srv://idrisolas:Kendrick12@cluster0.ustoh.mongodb.net/socialapp?";

// const url =
//   "mongosh mongodb+srv://cluster0.ustoh.mongodb.net/onlinebulid --apiVersion 1 --username idrisolas";

mongoose
  .connect(url)
  .then(() => {
    console.log("database is now connected...!");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = mongoose;
