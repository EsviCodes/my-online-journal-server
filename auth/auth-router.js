const { Router } = require("express");
const { toJWT, toData } = require("./jwt");

const router = new Router();

// define endpoints here

router.post("/login", (req, res, next) => {
  // Checks if the text property doens't exists or is an empty string. If so, it sends an error.
  if (req.body.email === "" || req.body.password === "") {
    res.status(400).send({
      message: "Please supply a valid email and password"
    });
  }
  // If validation passes
  res.send({
    jwt: toJWT({ userId: 1 })
  });
});

module.exports = router;
