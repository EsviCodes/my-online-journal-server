const { Router } = require("express");
const imageModel = require("./image-model");

const router = new Router();

router.get("/images", (req, res, next) => {
  imageModel
    .findAll()
    .then(images => {
      res.json(images);
    })
    .catch(next);
});

module.exports = router;
