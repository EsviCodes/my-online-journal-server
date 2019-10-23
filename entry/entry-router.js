const { Router } = require("express");
const Entry = require("./entry-model");
const Journal = require("../journal/journal-model");

const router = new Router();

// Authentication
//router.use(authMiddleWare);

// Get all Entries
router.get("/entries", (req, res, next) => {
  Entry.findAll()
    .then(entries => {
      res.send(entries);
    })
    .catch(next);
});

// Get one Entry
router.get("/entries/:id", (req, res, next) => {
  Entry.findByPk(req.params.id, { include: [Journal] })
    .then(entry => {
      res.send(entry);
    })
    .catch(next);
});

//Create new Entry
router.post("/entries", (req, res, next) => {
  Entry.create(req.body)
    .then(entry => res.json(entry))
    .catch(next);
});

// Edit Entry
router.put("/entries/:id", (req, res, next) => {
  Entry.findByPk(req.params.id)
    .then(entry => {
      if (entry) {
        entry.update(req.body).then(entry => res.json(entry));
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

// Delete Entry
router.delete("/entries/:id", (req, res, next) => {
  Entry.destroy({
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
