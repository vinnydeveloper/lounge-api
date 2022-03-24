const mongoose = require("mongoose");
const DATABASE = require("../configs/database");
const env = process.env.NODE_ENV || "prod";
const connect = async () => {
  return mongoose.connect(DATABASE[env].URL_CONNECTION);
};

module.exports = {
  connect,
};
