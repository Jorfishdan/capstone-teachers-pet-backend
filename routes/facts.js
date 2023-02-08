const express = require("express");
const router = express.Router();
const videos = require("../data/videos.json");
const { v4:uuid } = require("uuid");
const fs = require("fs");

router.get("/", (req, res) => {
    const videoGallery = videoList();
    const displayVideo = videoGallery.map((vid) => {
      return {
        id: vid.id,
        title: vid.title,
        channel: vid.channel,
        image: vid.image,
      };
    });
    res.send(displayVideo);
  });
  
  router.get("/:id", (req, res) => {
    const videoMain = videoList();
    const heroVideo = videoMain.find((mainVid) => {
      return mainVid.id === req.params.id
    });
    res.send(heroVideo);
  });