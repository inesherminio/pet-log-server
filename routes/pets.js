const router = require("express").Router();
const User = require("../models/User.model");
const Pet = require("../models/Pet.model");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/", isLoggedIn, (req, res, next) => {
  User.findById(req.session.user._id)
    .populate("favRecipes pets")
    .then((user) => {
      //console.log(user);
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

router.post("legal/add", isLoggedIn, (req, res, next) => {
  const { category, entity, documentId, expirationDate, pet } = req.body;
  console.log("hello");
});

router.get("/:petId", isLoggedIn, (req, res, next) => {
  const { petId } = req.params;
  Pet.findById(petId)
    .then((pet) => {
      return res.json(pet);
    })
    .catch(() => {
      return res.status(400).json({ errorMessage: "Problem accessing pets" });
    });
});

router.patch("/:petId", isLoggedIn, (req, res, next) => {
  const { petId } = req.params;
  console.log(req.params);
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
  Pet.findByIdAndUpdate(
    petId,
    {
      type,
      name,
      profilePic,
      birthday,
      breed,
      gender,
      weight,
      avgDailyFood,
      chipId,
    },
    { new: true }
  )
    .then((pet) => {
      return res.json({ pet });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ errorMessage: "Problem editing pets" });
    });
});

router.delete("/:petId", isLoggedIn, (req, res, next) => {
  const { petId } = req.params;
  console.log(req.params);
  Pet.findByIdAndRemove(petId)
    .then((pet) => {
      return User.findById(req.session.user._id).populate("favRecipes pets");
    })
    .then((user) => {
      res.status(200).json({ user });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ errorMessage: "Problem editing pets" });
    });
});

module.exports = router;
