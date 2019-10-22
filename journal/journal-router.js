const { Router } = require("express");
const JournalModel = require("./journal-model");

const router = new Router();

router.get("/journalentries", (req, res, next) => {
  JournalModel.findAll()
    .then(entries => {
      res.json(entries);
    })
    .catch(next);
});

router.post("/journalentries", (req, res, next) => {
  JournalModel.create(req.body)
    .then(entry => res.json(entry))
    .catch(next);
});

module.exports = router;
