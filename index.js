const express = require("express");
const formidable = require("express-formidable");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(formidable());

mongoose.connect(process.env.MONGODB_URI, {
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

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
