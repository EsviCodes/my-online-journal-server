const { Router } = require("express");
const journalModel = require("./journal-model");

const router = new Router();

router.get("/journalentries", (req, res, next) => {
  journalModel
    .findAll()
    .then(entries => {
      res.json(entries);
    })
    .catch(next);
});

router.post("/journalentries", (req, res, next) => {
  journalModel
    .create(req.body)
    .then(entry => res.json(entry))
    .catch(next);
});

module.exports = router;
