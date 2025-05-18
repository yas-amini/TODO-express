//const express = require("express");
import express from "express";
const app = express();

app.get("/", (req, res) => {
  const html = `
  <!DOCTYPE>
  <html>
  <head>
  <title>TODO</title>
    </head>
    <body>
    <h1>TODO</h1>
      <ul>
        <li>Clean</li>
        <li>Wash</li>
        <li>Shopping</li>

      </ul>
    </body>
  </html>
  `;
  res.send(html);
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
