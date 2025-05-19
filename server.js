//const express = require("express");
import express from "express";
//import path from "path";
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //get the content of the file index.html and return to client/browser
  const file = "C:\\Personal Projects\\TODO-express\\public\\index.html";

  //res.sendFile(file);
  res.render("index");
});

app.listen(3000, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
