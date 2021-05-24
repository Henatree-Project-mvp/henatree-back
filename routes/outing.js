const express = require("express");
const router = express.Router();

const Outing = require("../models/Outing");
const User = require("../models/User");

router.post("/outing/create", async (req, res) => {
  try {
    const newOuting = new Outing({
      title: req.fields.title,
      content: req.fields.content,
      author: req.fields.author,
    });
    await newOuting.save();
    res.status(200).json(newOuting);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/outings", async (req, res) => {
  try {
    const allOutings = await Outing.find().populate("author");
    res.status(200).json(allOutings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
