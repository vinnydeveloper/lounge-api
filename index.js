const app = require('./src/app')
const serverless = require("serverless-http");
module.exports = app;
module.exports.handler = serverless(app);