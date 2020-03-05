const express = require("express");
const mongoose = require("mongoose");
const app = express();

const routes = require("./routes");

mongoose.connect("mongodb://localhost:27017/week10", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json()); //reconhecer o envio json e antes das rotas

app.use(routes);

app.listen(3333);
