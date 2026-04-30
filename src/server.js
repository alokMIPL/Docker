const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my Docker Project");
});

app.listen(3000, function () {
  console.log("app listing on Port 3000");
});
