const router = require("express").Router();
const User = require("../models/User.model");
const Pet = require("../models/Pet.model");
const Log = require("../models/Log.model");
const isLoggedIn = require("../middleware/isLoggedIn");

router.post("/add", isLoggedIn, (req, res, next) => {
  const {
    category,
    title,
    date,
    expirationDate,
    comment,
    image,
    foodBrand,
    foodFlavor,
    foodQuantity,
    pet,
    owner,
  } = req.body;

  if (!category || !title || !pet || !owner || !date) {
    return res
      .status(400)
      .json({ errorMessage: "Please provide all required information." });
  }

  Log.create({
    category,
    title,
    date,
    expirationDate,
    comment,
    image,
    foodBrand,
    foodFlavor,
    foodQuantity,
    pet,
    owner,
  })
    .then((log) => {
      return res.json({ log });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ errorMessage: "Problem creating a log" });
    });
});

router.get("/:petId", isLoggedIn, (req, res, next) => {
  const { petId } = req.params;

  Log.find({ pet: petId })
    .then((logs) => {
      return res.json({ logs });
    })
    .catch(() => {
      return res.status(400).json({ errorMessage: "Problem accessing logs" });
    });
});

module.exports = router;
