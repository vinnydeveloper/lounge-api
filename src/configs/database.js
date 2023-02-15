require("dotenv").config();
module.exports = {
  test: {
    URL_CONNECTION: `mongodb+srv://${process.env.DB_USER}:${encodeURIComponent(process.env.DB_PASS)}@gama-lounge-api.fddlv.mongodb.net/?retryWrites=true&w=majority`,
  },
  prod: {
    URL_CONNECTION: `mongodb+srv://${process.env.DB_USER}:${encodeURIComponent(process.env.DB_PASS)}@gama-lounge-api.fddlv.mongodb.net/?retryWrites=true&w=majority`,
  },
};

