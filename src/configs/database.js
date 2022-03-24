require("dotenv").config();
module.exports = {
  test: {
    URL_CONNECTION: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@gama-lounge-api.fddlv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  },
  prod: {
    URL_CONNECTION: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@gama-lounge-api.fddlv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  },
};
