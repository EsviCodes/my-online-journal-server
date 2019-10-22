const Sequelize = require("sequelize");
const db = require("../db");

// Define Data Model
const journalModel = db.define("journal", {
  title: Sequelize.STRING,
  date: Sequelize.DATE,
  summery: Sequelize.TEXT,
  entry: Sequelize.TEXT
});

module.exports = journalModel;
