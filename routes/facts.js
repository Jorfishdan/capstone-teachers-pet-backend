const express = require("express");
const router = express.Router();
const facts = require("../data/facts.json");
const { v4:uuid } = require("uuid");
const fs = require("fs");
const { executionAsyncId } = require("async_hooks");

router.get("/", (req, res) => {
    const factGallery = factList();
    const displayFact = factGallery.map((info) => {
      return {
        id: info.id,
        category: info.category,
        type: info.type,
        difficulty: info.difficulty,
        question: info.question,
        correct_answer: info.correct_answer,
        incorrect_answer:info.incorrect_answer,
        explanation: info.explanation,
      };
    });
    res.send(displayFact);
  });

  router.post("/", (req,res) => {
    const {question, correct_answer, incorrect_answer, explanation} = req.body;
    const newFact ={
        id: uuid(),
        category: "misc",
        type: Boolean,
        difficulty: "easy",
        question, 
        correct_answer,
        explanation,
    };
    facts.push(newFact);
    res.json(newFact)
    fs.writeFileSync("./data/facts.json", JSON.stringify(facts))

  })

  function factList() {
    const factPreview = fs.readFileSync("./data/facts.json");
    return JSON.parse(factPreview);
  }
  
//   router.get("/:id", (req, res) => {
//     const videoMain = videoList();
//     const heroVideo = videoMain.find((mainVid) => {
//       return mainVid.id === req.params.id
//     });
//     res.send(heroVideo);
//   });

module.exports = router;