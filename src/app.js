const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const db = require("./database");
const { ValidationError } = require("express-validation");

const app = express();

db.connect();

app.use(cors());
app.use(express.json());

app.use('/.netlify/functions/api',routes);

app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  return res.status(500).json(err);
});
module.exports = app;
