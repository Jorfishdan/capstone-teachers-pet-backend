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

//   router.post("/", (req,res) => {
//     const {question, category, type, difficulty, correct_answer, incorrect_answer, explanation} = req.body;
//     const newFact ={
//         id: uuid(),
//         // category,
//         // type,
//         // difficulty,
//         question, 
//         correct_answer,
//         incorrect_answer,
//         explanation,
//     };
//     facts.push(newFact);
//     res.json(newFact)
//     fs.writeFileSync("./data/facts.json", JSON.stringify(facts))

//   })

  function scanList() {
    const scanPreview = fs.readFileSync("./data/scan.json");
    return JSON.parse(scanPreview);
  }
  

module.exports = router;