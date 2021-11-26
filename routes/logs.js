const router = require("express").Router();
const User = require("../models/User.model");
const Pet = require("../models/Pet.model");
const Log = require("../models/Log.model");
const isLoggedIn = require("../middleware/isLoggedIn");

router.post("/add", isLoggedIn, async (req, res, next) => {
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

  try {
    const log = await Log.create({
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
    });
    const petFound = await Pet.findById(pet).exec();
    petFound.logs.push(log);
    const updatedPet = await petFound.save();
    res.status(201).json({ log });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errorMessage: "Problem creating a log" });
  }
});

router.get("/:petId/:logId", isLoggedIn, (req, res, next) => {
  const { logId } = req.params;

  Log.findById(logId)
    .populate("pet")
    .then((log) => {
      return res.json({ log });
    })
    .catch(() => {
      return res
        .status(400)
        .json({ errorMessage: "Problem accessing your log" });
    });
});

router.patch("/:petId/:logId", isLoggedIn, (req, res, next) => {
  const { logId } = req.params;
  const {
    category,
    title,
    date,
    expirationDate,
    comment,
    foodBrand,
    foodFlavor,
    foodQuantity,
  } = req.body;

  Log.findByIdAndUpdate(
    logId,
    {
      category,
      title,
      date,
      expirationDate,
      comment,
      foodBrand,
      foodFlavor,
      foodQuantity,
    },
    { new: true }
  )
    .then((log) => {
      return res.json({ log });
    })
    .catch(() => {
      return res
        .status(400)
        .json({ errorMessage: "Problem updating your log" });
    });
});

router.get("/:petId", isLoggedIn, (req, res, next) => {
  const { petId } = req.params;

  Log.find({ pet: petId })
    .populate("pet")
    .then((logs) => {
      return res.json({ logs });
    })
    .catch(() => {
      return res.status(400).json({ errorMessage: "Problem accessing logs" });
    });
});

module.exports = router;
