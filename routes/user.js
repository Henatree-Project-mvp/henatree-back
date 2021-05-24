const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Article = require("../models/Article");

router.post("/author/create", async (req, res) => {
  try {
    const newUser = new User({
      name: req.fields.name,
      email: req.fields.email,
    });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
