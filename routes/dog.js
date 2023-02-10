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

  function dogList() {
    const dogPreview = fs.readFileSync("./data/dog.json");
    return JSON.parse(dogPreview);
  }
  

module.exports = router;