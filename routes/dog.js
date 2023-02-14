const express = require("express");
const router = express.Router();
const dog = require("../data/dog.json");
const { v4:uuid } = require("uuid");
const fs = require("fs");
const { executionAsyncId } = require("async_hooks");

router.get("/", (req, res) => {
    const dogGallery = dogList();
    const displayDog = dogGallery.map((dog) => {
      return {
        id: dog.id,
       say: dog.say
      };
    });
    res.send(displayDog);
  });

  function dogList() {
    const dogPreview = fs.readFileSync("./data/dog.json");
    return JSON.parse(dogPreview);
  }
  

module.exports = router;