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

router.get("/secret-endpoint", (req, res) => {
  const auth =
    req.headers.authorization && req.headers.authorization.split(" ");
  if (auth && auth[0] === "Bearer" && auth[1]) {
    try {
      const data = toData(auth[1]);
      res.send({
        message: "Thanks for visiting the secret endpoint.",
        data
      });
    } catch (error) {
      res.status(400).send({
        message: `Error ${error.name}: ${error.message}`
      });
    }
  } else {
    res.status(401).send({
      message: "Please supply some valid credentials"
    });
  }
});

module.exports = router;
