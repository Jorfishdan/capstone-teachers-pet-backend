const express = require("express");
const router = express.Router();
const callbacks = require("../data/callbacks.json");
const { v4:uuid } = require("uuid");
const fs = require("fs");
const { executionAsyncId } = require("async_hooks");

router.get("/", (req, res) => {
    const callbacksGallery = callbacksList();
    const displayCallbacks = callbacksGallery.map((info) => {
      return {
        id: info.id,
       say: info.say
      };
    });
    res.send(displayCallbacks);
  });



  function callbacksList() {
    const callbacksPreview = fs.readFileSync("./data/callbacks.json");
    return JSON.parse(callbacksPreview);
  }
  

module.exports = router;