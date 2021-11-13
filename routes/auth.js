const router = require("express").Router();

// ℹ️ Handles password encryption
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

// How many rounds should bcrypt run the salt (default [10 - 12 rounds])
const saltRounds = 10;

// Require the User model in order to interact with the database
const User = require("../models/User.model");

router.post("/signup", (req, res, next) => {
  const { firstName, lastName, email, password, profilePic } = req.body;

  if (!email || !firstName || !lastName || !password) {
    return res
      .status(400)
      .json({ errorMessage: "Please provide all required information." });
  }

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      errorMessage: "Please provide a valid email",
    });
  }

  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

  if (!regex.test(password)) {
    return res.status(400).json({
      errorMessage:
        "Password needs to have at least 8 chars and must contain at least one number, one lowercase and one uppercase letter.",
    });
  }

  // Search the database for a user with the username submitted in the form
  User.findOne({ email }).then((user) => {
    // If the user is found, send the message username is taken
    if (user) {
      return res.status(400).json({ errorMessage: "Email already in use." });
    }

    // if user is not found, create a new user - start with hashing the password
    return bcrypt
      .genSalt(saltRounds)
      .then((salt) => bcrypt.hash(password, salt))
      .then((hashedPassword) => {
        // Create a user and save it in the database
        return User.create({
          firstName,
          lastName,
          email,
          password: hashedPassword,
          profilePic,
        });
      })
      .then((user) => {
        req.session.user = user;
        res.status(201).json({ user });
      })
      .catch((error) => {
        if (error instanceof mongoose.Error.ValidationError) {
          return res.status(400).json({ errorMessage: error.message });
        }
        if (error.code === 11000) {
          return res.status(400).json({
            errorMessage:
              "Email needs to be unique. The email you presented is already in use.",
          });
        }
        return res.status(500).json({ errorMessage: error.message });
      });
  });
});

router.post("/login", (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ errorMessage: "Please provide your username." });
  }

  // Search the database for a user with the email submitted in the form
  User.findOne({ email })
    .then((user) => {
      // If the user isn't found, send the message that user provided wrong credentials
      if (!user) {
        return res.status(400).json({ errorMessage: "Wrong credentials." });
      }

      // If user is found based on the username, check if the in putted password matches the one saved in the database
      bcrypt.compare(password, user.password).then((isSamePassword) => {
        if (!isSamePassword) {
          return res.status(400).json({ errorMessage: "Wrong credentials." });
        }
        req.session.user = user;
        return res.json({ user });
      });
    })

    .catch((err) => {
      // in this case we are sending the error handling to the error handling middleware that is defined in the error handling file
      // you can just as easily run the res.status that is commented out below
      next(err);
      // return res.status(500).render("login", { errorMessage: err.message });
    });
});

router.post("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json({ errorMessage: err.message });
    }
  });
  res.status(200).json({ message: "User was logged out" });
});

router.get("/loggedin", (req, res, next) => {
  if (req.session.user) {
    return res.status(201).json({ user: req.session.user });
  }
  res.status(403).json({ errorMessage: "User not authorized" });
});

module.exports = router;
