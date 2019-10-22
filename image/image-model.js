const Sequelize = require("sequelize");
const db = require("../db");

// Define Data Model
const imageModel = db.define("image", {
  title: Sequelize.STRING,
  url: Sequelize.STRING
});

module.exports = imageModel;
