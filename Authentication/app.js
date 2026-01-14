const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const hbs = require("hbs");
const mongoose = require("mongoose");
const User = require("./models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// Set up view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views/partials"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home");
});

// GET: /login
app.get("/login", (req, res) => {
  res.render("login");
});

// POST: /login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    let user = await User.findOne({ username });
    if (!user) {
      return res.render("login", {
        msg: "Invalid username or password, Try again!",
      });
    }
    bcrypt.compare(password, user.password, function (err, result) {
      // result == true
      if (result == true) {
        res.render("profile", { username });
      } else {
        res.render("login", { msg: "Invalid Password! Try again" });
      }
    });
  } catch (err) {
    console.log(err);
    res.render("login", {
      msg: "Something went wrong. Please try again later.",
    });
  }
});

// GET: /signup
app.get("/signup", (req, res) => {
  res.render("signup");
});

// POST: /signup
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  // console.log(username)
  try {
    let user = await User.findOne({ username });
    if (user) {
      return res.render("signup", { msg: "User already exists" });
    }

    bcrypt.hash(password, saltRounds, async function (err, hash) {
      // Store hash in your password DB.
      await User.create({ username, password: hash });
      res.render("login", {
        msg: "Account is created successfully. Please login.",
      });
    });
  } catch (err) {
    console.log(err);
    res.render("signup", {
      msg: "Something went wrong. Please try again later.",
    });
  }
});

// GET: /profile
app.get('/profile', (req, res) => {
 res.render('profile');
})


mongoose
  .connect("mongodb://127.0.0.1:27017/web")
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
