const Sequelize = require("sequelize");
const db = require("../db");
const Journal = require("../journal/journal-model");

const Entry = db.define("entries", {
  title: Sequelize.STRING,
  date: Sequelize.DATE,
  summery: Sequelize.TEXT,
  entry: Sequelize.TEXT
});

// relations

Entry.belongsTo(Journal);
Journal.hasMany(Entry);

module.exports = Entry;
