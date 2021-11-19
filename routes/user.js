const router = require("express").Router();
const User = require("../models/User.model");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/", isLoggedIn, (req, res, next) => {
  User.findById(req.session.user._id)
    //.populate("favRecipes favServices pets")
    .then((user) => {
      console.log(user);
      return res.json(user);
    })
    .catch(() => {
      return res
        .status(400)
        .json({ errorMessage: "Problem accessing the user details" });
    });
});

router.patch("/edit", isLoggedIn, (req, res, next) => {
  const { firstName, lastName, profilePic } = req.body;

  User.findByIdAndUpdate(
    req.session.user._id,
    {
      firstName,
      lastName,
      profilePic,
    },
    { new: true }
  )
    .then((user) => {
      res.status(201).json({ user });
    })
    .catch(() => {
      return res
        .status(400)
        .json({ errorMessage: "Problem updating the user data" });
    });
});

module.exports = router;
