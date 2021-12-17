const config = require("./config");

const express = require("express");

const app = express();
const PORT = process.env.PORT || config.express.port; 
// process.env.PORT is the environment variable set by heroku
const STATIC = './src/';

app.use(express.static(STATIC));

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
