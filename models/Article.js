const mongoose = require("mongoose");

const Outing = mongoose.model("Article", {
  title: String,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = Outing;
