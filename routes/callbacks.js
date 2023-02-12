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

  function callbacksList() {
    const callbacksPreview = fs.readFileSync("./data/callbacks.json");
    return JSON.parse(callbacksPreview);
  }
  

module.exports = router;