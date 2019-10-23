const { Router } = require("express");
const JournalModel = require("./journal-model");
const EntryModel = require("../entry/entry-model");
const authMiddleWare = require("../auth/auth-middleware");

const router = new Router();

// Get all the journals
router.get("/journals", (req, res, next) => {
  JournalModel.findAll()
    .then(entries => {
      res.json(entries);
    })
    .catch(next);
});

// Get a specific journal
router.get("/journals/:id", (req, res, next) => {
  JournalModel.findByPk(req.params.id, { include: [EntryModel] })
    .then(journal => {
      res.send(journal);
    })
    .catch(next);
});

// Create a new Journal
router.post("/journals", (req, res, next) => {
  JournalModel.create(req.body)
    .then(entry => res.json(entry))
    .catch(next);
});

// Edit a Journal
router.put("/journals/:id", (req, res, next) => {
  JournalModel.findByPk(req.params.teamId)
    .then(journal => {
      if (journal) {
        journal.update(req.body).then(journal => res.json(journal));
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

// Delete a Journal
router.delete("/journals/:id", (req, res, next) => {
  JournalModel.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(numDeleted => {
      if (numDeleted) {
        res.status(204).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

module.exports = router;
