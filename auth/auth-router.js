const { Router } = require("express");
const { toJWT, toData } = require("./jwt");
const auth = require("./auth-middleware");

const router = new Router();

// Endpoints
router.post("/login", (req, res, next) => {
  if (req.body.email === "" || req.body.password === "") {
    res.status(400).send({
      message: "Please supply a valid email and password"
    });
  }

  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        res.status(400).send({
          message: "Email or password incorrect, sorry"
        });
      } else if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          jwt: toJWT({ userId: user.id })
        });
      } else {
        res.status(400).send({
          message: "Email or password incorrect, sorry"
        });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send({
        message: "Something went wrong"
      });
    });
});

router.get("/secret-endpoint", auth, (req, res) => {
  res.send({
    message: `Thanks for visiting the secret endpoint ${req.user.email}.`
  });
});

module.exports = router;
