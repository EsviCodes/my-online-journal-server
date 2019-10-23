const Sequelize = require("sequelize");
const db = require("../db");
const JournalModel = require("../journal/journal-model");

const EntryModel = db.define("topic", {
  title: Sequelize.STRING,
  date: Sequelize.DATE,
  summery: Sequelize.TEXT,
  entry: Sequelize.TEXT
});

// relations
// A journal can have many Entires - but an Entry has only one Journal it belongs to
EntryModel.belongsTo(JournalModel); // get the Team for this player
JournalModel.hasMany(EntryModel);

module.exports = EntryModel;
