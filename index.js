const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const imageModel = require("./image/image-model");
const imageRouter = require("./image/image-router");

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

//Image Route
app.use(imageRouter);

app.listen(port, () => console.log("listening on port " + port));
