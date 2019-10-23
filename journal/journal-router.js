const { Router } = require("express");
const Journal = require("./journal-model");
const Entry = require("../entry/entry-model");
const authMiddleWare = require("../auth/auth-middleware");

const router = new Router();

// Authentication
//router.use(authMiddleWare);

// Get all the journals
router.get("/journals", (req, res, next) => {
  Journal.findAll()
    .then(journals => {
      res.json(journals);
    })
    .catch(next);
});

// Get a specific journal
router.get("/journals/:id", (req, res, next) => {
  Journal.findByPk(req.params.id, { include: [Entry] })
    .then(journal => {
      res.send(journal);
    })
    .catch(next);
});

// Create a new Journal
router.post("/journals", (req, res, next) => {
  Journal.create(req.body)
    .then(entry => res.json(entry))
    .catch(next);
});

// Edit a Journal
router.put("/journals/:id", (req, res, next) => {
  Journal.findByPk(req.params.id)
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
  Journal.destroy({
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
