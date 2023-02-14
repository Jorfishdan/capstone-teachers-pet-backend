const express = require("express");
const router = express.Router();
const scan = require("../data/scan.json");
const { v4:uuid } = require("uuid");
const fs = require("fs");
const { executionAsyncId } = require("async_hooks");

router.get("/", (req, res) => {
    const scanGallery = scanList();
    const displayScan = scanGallery.map((info) => {
      return {
        id: info.id,
       say: info.say
      };
    });
    res.send(displayScan);
  });

  function scanList() {
    const scanPreview = fs.readFileSync("./data/scan.json");
    return JSON.parse(scanPreview);
  }
  

module.exports = router;