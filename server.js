//const express = require("express");
import express from "express";
//import path from "path";
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  //get the content of the file index.html and return to client/browser
  // const file = "C:\\Personal Projects\\TODO-express\\public\\index.html";

  const tasks = [
    { id: 1, name: "Clean" },
    { id: 2, name: "Shopping" },
    { id: 3, name: "Laundry" },
    { id: 4, name: "Pay bills" },
    { id: 5, name: "Shopping" },
    { id: 6, name: "Whatch TV" },
    { id: 7, name: "Shopping" },
  ];

  //res.sendFile(file);
  res.render("index", { tasks });
});

app.listen(3000, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
