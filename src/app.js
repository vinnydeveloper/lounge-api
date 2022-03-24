const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const handleError = require("./middlewares/handleError");

const db = require("./database");

const app = express();

db.connect();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use(handleError);

module.exports = app;
