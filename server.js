//const express = require("express");
import express from "express";
import path from "path";

const app = express();

app.get("/", (req, res) => {
  //get the content of the file index.html and return to client/browser
  const file = path.join(__dirname, "public", "index.html");
  console.log(file);

  res.send("Hello Express!");
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
