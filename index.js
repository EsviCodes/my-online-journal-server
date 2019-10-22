const express = require("express");
const db = require("./db");
const ImageModel = require("./image/image-model");

const app = express();
const port = process.env.PORT || 4000;

app.listen(port, () => console.log("listening on port " + port));
