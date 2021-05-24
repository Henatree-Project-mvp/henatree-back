const express = require("express");
const formidable = require("express-formidable");
const mongoose = require("mongoose");

const app = express();
app.use(formidable());

mongoose.connect("mongodb://localhost/blog-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Importer les routes
const userRoutes = require("./routes/user");
const outingRoutes = require("./routes/outing");
app.use(userRoutes);
app.use(outingRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ error: "Je suis perdu" });
});

app.listen(3000, () => {
  console.log("Server started");
});
