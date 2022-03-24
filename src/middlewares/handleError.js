const { ValidationError } = require("express-validation");

module.exports = (error, req, res) => {
  if (error instanceof ValidationError) {
    return res.status(error.statusCode).json(error);
  }

  return res.status(500).json(error);
};
