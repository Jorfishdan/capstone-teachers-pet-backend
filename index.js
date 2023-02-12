const express = require("express");
const app = express();
const path = require('path')
const cors = require("cors");
require('dotenv').config()
const factsRoutes = require("./routes/facts");
const dogRoutes = require("./routes/dog")
const scanRoutes = require("./routes/scan")
const callbacksRoutes = require("./routes/callbacks")


app.use(cors());
app.use(express.json());

app.use("/facts", factsRoutes);
// app.use(express.static('public'))

app.use("/scan", scanRoutes)
app.use("/dog", dogRoutes)
app.use("/callbacks", callbacksRoutes)

app.listen(8080, function () {
  console.log("Hello World");
});