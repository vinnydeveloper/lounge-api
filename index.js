const express = require("express");
const routes = require("./src/routes");
const cors = require("cors");

const db = require("./src/database");
const { ValidationError } = require("express-validation");

const app = express();

db.connect();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  return res.status(500).json(err);
});

const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

module.exports = app
