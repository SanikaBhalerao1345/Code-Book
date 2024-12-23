/** @format */

const mongoose = require("mongoose");
require("dotenv").config();

const database_name = "code_book";

exports.dbConnect = () => {
  const dbURI = "mongodb://localhost:27017/" + database_name;
  console.log("Attempting to connect to:", dbURI);

  mongoose
    .connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Db connected successfully");
    })
    .catch((err) => {
      console.error("Error in db connection:", err.message);
    });
};
