const Sequelize = require("sequelize");
const db = require("../db");

// Define Data Model
const Journal = db.define("journal", {
  title: Sequelize.STRING,
  date: Sequelize.DATE,
  summery: Sequelize.TEXT
});

//FOR DEVELOPMENT TO GET AN ENTRY QUICKLY
// Journal.create({
//   title: "My First Journal",
//   date: Date(),
//   summery:
//     "This is the first online journal I developped by myself. Whoop - Whoop"
// });

module.exports = Journal;
