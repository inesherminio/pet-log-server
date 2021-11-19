const router = require("express").Router();
const User = require("../models/User.model");
const Pet = require("../models/Pet.model");
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

router.post("/add", isLoggedIn, async (req, res, next) => {
  const {
    type,
    name,
    profilePic,
    birthday,
    breed,
    gender,
    weight,
    avgDailyFood,
    chipId,
  } = req.body;

  if (!name || !type) {
    return res
      .status(400)
      .json({ errorMessage: "Please provide all required information." });
  }

  try {
    const pet = await Pet.create({
      type,
      name,
      profilePic,
      birthday,
      breed,
      gender,
      weight,
      avgDailyFood,
      chipId,
    });
    const user = await User.findById(req.session.user._id, {}, { password: 0 })
      .populate("favRecipes pets")
      .exec();

    user.pets.push(pet);
    const updatedUser = await user.save();

    res.status(201).json({ pet, user });
  } catch (error) {
    return res.status(400).json({ errorMessage: "Problem adding pet" });
  }
});

module.exports = router;
