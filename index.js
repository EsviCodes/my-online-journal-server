const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const journalModel = require("./journal/journal-model");
const journalRouter = require("./journal/journal-router");

const app = express();
const port = process.env.PORT || 4000;

// Middleware declarations
const corsMiddleware = cors();
const parserMiddleware = bodyParser.json();

app
  .use(corsMiddleware)
  .use(parserMiddleware)
  .use(journalRouter)
  .listen(port, () => console.log("listening on port " + port));
