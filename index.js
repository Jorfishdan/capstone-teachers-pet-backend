const express = require("express");
const app = express();
const path = require('path')
const cors = require("cors");
require('dotenv').config()
// const videoRoutes = require("./routes/videos");


app.use(cors());
app.use(express.json());

// app.use("/videos", videoRoutes);
// app.use(express.static('public'))

app.listen(8080, function () {
  console.log("Hello World");
});