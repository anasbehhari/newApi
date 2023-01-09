const express = require("express");
const mongoose = require("mongoose");
const app = express();






//BASIC STUFF
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//db config
app.get("/", (req, res) => {
  res.send("welcome 😊 !");
});





//Listen On

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});