//const express = require("express");
import express from "express";
import path from "path";

const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  //get the content of the file index.html and return to client/browser
  const file = "C:\\Personal Projects\\TODO-express\\public\\index.html";
  console.log(file);

  res.sendFile("Hello Express!");
});

app.listen(3000, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
