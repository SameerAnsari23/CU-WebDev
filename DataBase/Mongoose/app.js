const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const mongoose = require("mongoose");
const students = require("./models/students");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/vidhyarthi", async (req, res) => {
  try {
    const { name, age, marks } = req.body;
    const data = await students.create({ name, age, marks });
    res.send({
      msg: "Student data added successfully",
      data: data,
    });
  } 
  catch (err) {
    console.log(err);
  }
});

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
